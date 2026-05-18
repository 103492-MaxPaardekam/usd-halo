import cors from "cors";
import express from "express";
import helmet from "helmet";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseAllowedOrigins(value) {
  if (!value || value === "*") {
    return "*";
  }

  return value
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function createRateLimiter({ windowMs, max }) {
  const counters = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const key = `${req.ip}:${req.path}`;
    const entry = counters.get(key);

    if (!entry || now > entry.expiresAt) {
      counters.set(key, { count: 1, expiresAt: now + windowMs });
      next();
      return;
    }

    if (entry.count >= max) {
      res.status(429).json({ error: "rate_limited" });
      return;
    }

    entry.count += 1;
    next();
  };
}

class WaitlistStore {
  constructor(filePath) {
    this.filePath = filePath;
    this.writeQueue = Promise.resolve();
  }

  async ensureReady() {
    const dir = path.dirname(this.filePath);
    await mkdir(dir, { recursive: true });

    if (!existsSync(this.filePath)) {
      await writeFile(this.filePath, "[]\n", "utf8");
    }
  }

  async readAll() {
    await this.ensureReady();
    const raw = await readFile(this.filePath, "utf8");

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  async list() {
    const entries = await this.readAll();
    return entries.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  add(email) {
    const normalizedEmail = email.trim().toLowerCase();

    const action = async () => {
      const entries = await this.readAll();
      const exists = entries.some((entry) => entry.email === normalizedEmail);

      if (exists) {
        return "exists";
      }

      entries.push({
        email: normalizedEmail,
        createdAt: new Date().toISOString(),
      });
      await writeFile(
        this.filePath,
        `${JSON.stringify(entries, null, 2)}\n`,
        "utf8",
      );
      return "created";
    };

    this.writeQueue = this.writeQueue.then(action, action);
    return this.writeQueue;
  }
}

function createCorsMiddleware(corsOrigin) {
  const allowed = parseAllowedOrigins(corsOrigin);

  if (allowed === "*") {
    return cors({ origin: true });
  }

  return cors({
    origin(origin, callback) {
      if (!origin || allowed.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin not allowed by CORS"));
    },
  });
}

function escapeCsvValue(value) {
  const normalized = String(value ?? "");
  if (/[",\n]/.test(normalized)) {
    return `"${normalized.replaceAll('"', '""')}"`;
  }

  return normalized;
}

export function createApp(options) {
  const {
    waitlistFilePath,
    corsOrigin,
    adminApiToken,
    serveStatic,
    staticDistPath,
    rateLimitWindowMs,
    rateLimitMax,
    logger,
    appVersion,
  } = options;

  const app = express();
  const store = new WaitlistStore(waitlistFilePath);

  app.disable("x-powered-by");
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    }),
  );
  app.use(createCorsMiddleware(corsOrigin));
  app.use(express.json({ limit: "20kb" }));

  app.use(
    "/api",
    createRateLimiter({ windowMs: rateLimitWindowMs, max: rateLimitMax }),
  );

  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.round(process.uptime()),
      version: appVersion,
    });
  });

  app.post("/api/waitlist", async (req, res) => {
    const email =
      typeof req.body?.email === "string"
        ? req.body.email.trim().toLowerCase()
        : "";

    if (!email || email.length > 320 || !EMAIL_REGEX.test(email)) {
      res.status(400).json({ error: "invalid_email" });
      return;
    }

    try {
      const status = await store.add(email);
      res.status(status === "created" ? 201 : 200).json({ status });
    } catch (error) {
      logger.error("Waitlist write failed", error);
      res.status(500).json({ error: "internal_error" });
    }
  });

  app.get("/api/admin/waitlist", async (req, res) => {
    if (!adminApiToken) {
      res.status(404).json({ error: "not_found" });
      return;
    }

    const incomingToken = req.get("x-admin-token");
    if (!incomingToken || incomingToken !== adminApiToken) {
      res.status(401).json({ error: "unauthorized" });
      return;
    }

    try {
      const entries = await store.list();
      res.json({ count: entries.length, entries });
    } catch (error) {
      logger.error("Waitlist read failed", error);
      res.status(500).json({ error: "internal_error" });
    }
  });

  app.get("/api/admin/waitlist.csv", async (req, res) => {
    if (!adminApiToken) {
      res.status(404).json({ error: "not_found" });
      return;
    }

    const incomingToken = req.get("x-admin-token");
    if (!incomingToken || incomingToken !== adminApiToken) {
      res.status(401).json({ error: "unauthorized" });
      return;
    }

    try {
      const entries = await store.list();
      const lines = ["email,createdAt"];

      for (const entry of entries) {
        lines.push(
          `${escapeCsvValue(entry.email)},${escapeCsvValue(entry.createdAt)}`,
        );
      }

      res
        .status(200)
        .set("Content-Type", "text/csv; charset=utf-8")
        .set("Content-Disposition", 'attachment; filename="waitlist.csv"')
        .send(`${lines.join("\n")}\n`);
    } catch (error) {
      logger.error("Waitlist CSV export failed", error);
      res.status(500).json({ error: "internal_error" });
    }
  });

  app.use("/api", (_req, res) => {
    res.status(404).json({ error: "not_found" });
  });

  if (serveStatic && staticDistPath && existsSync(staticDistPath)) {
    app.use(express.static(staticDistPath));
    app.get(/^(?!\/api).*/, (_req, res) => {
      res.sendFile(path.join(staticDistPath, "index.html"));
    });
  }

  return app;
}
