import path from "node:path";
import { createApp } from "./app.js";

function resolveNumber(value, fallback) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

const port = resolveNumber(process.env.API_PORT, 8787);
const host = process.env.API_HOST ?? "0.0.0.0";
const waitlistStoragePath = path.resolve(
  process.cwd(),
  process.env.WAITLIST_STORAGE_PATH ?? "data/waitlist.json",
);
const staticDistPath = path.resolve(process.cwd(), "dist");

const app = createApp({
  waitlistFilePath: waitlistStoragePath,
  corsOrigin: process.env.API_CORS_ORIGIN ?? "*",
  adminApiToken: process.env.API_ADMIN_TOKEN ?? "",
  serveStatic: process.env.API_SERVE_STATIC === "true",
  staticDistPath,
  rateLimitWindowMs: resolveNumber(process.env.API_RATE_LIMIT_WINDOW_MS, 60_000),
  rateLimitMax: resolveNumber(process.env.API_RATE_LIMIT_MAX, 60),
  logger: console,
});

const server = app.listen(port, host, () => {
  console.log(`USD Halo API listening on http://${host}:${port}`);
  console.log(`Waitlist storage path: ${waitlistStoragePath}`);
});

function shutdown(signal) {
  console.log(`${signal} received, shutting down API server...`);
  server.close((error) => {
    if (error) {
      console.error("Shutdown error", error);
      process.exit(1);
      return;
    }

    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
