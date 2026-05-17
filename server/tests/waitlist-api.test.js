import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { createApp } from "../app.js";

let server;
let baseUrl;
let tempDir;

function startServer(app) {
  return new Promise((resolve) => {
    const instance = app.listen(0, "127.0.0.1", () => resolve(instance));
  });
}

function stopServer(instance) {
  return new Promise((resolve, reject) => {
    instance.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

test.before(async () => {
  tempDir = await mkdtemp(path.join(os.tmpdir(), "usd-halo-api-test-"));
  const app = createApp({
    waitlistFilePath: path.join(tempDir, "waitlist.json"),
    corsOrigin: "*",
    adminApiToken: "test-token",
    serveStatic: false,
    staticDistPath: path.join(tempDir, "dist"),
    rateLimitWindowMs: 60_000,
    rateLimitMax: 10_000,
    logger: console,
  });

  server = await startServer(app);
  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;
});

test.after(async () => {
  await stopServer(server);
  await rm(tempDir, { recursive: true, force: true });
});

test("GET /api/health returns ok", async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data.status, "ok");
});

test("POST /api/waitlist validates email", async () => {
  const response = await fetch(`${baseUrl}/api/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "not-an-email" }),
  });
  const data = await response.json();

  assert.equal(response.status, 400);
  assert.equal(data.error, "invalid_email");
});

test("POST /api/waitlist creates and deduplicates signups", async () => {
  const first = await fetch(`${baseUrl}/api/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "user@example.com" }),
  });
  const firstData = await first.json();

  const second = await fetch(`${baseUrl}/api/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "USER@EXAMPLE.COM" }),
  });
  const secondData = await second.json();

  assert.equal(first.status, 201);
  assert.equal(firstData.status, "created");
  assert.equal(second.status, 200);
  assert.equal(secondData.status, "exists");
});

test("GET /api/admin/waitlist requires token", async () => {
  const unauthorized = await fetch(`${baseUrl}/api/admin/waitlist`);
  assert.equal(unauthorized.status, 401);

  const authorized = await fetch(`${baseUrl}/api/admin/waitlist`, {
    headers: { "x-admin-token": "test-token" },
  });
  const data = await authorized.json();

  assert.equal(authorized.status, 200);
  assert.ok(Array.isArray(data.entries));
  assert.equal(typeof data.count, "number");
});
