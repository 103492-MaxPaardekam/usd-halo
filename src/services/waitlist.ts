import { runtimeConfig } from "../config/runtime";

const WAITLIST_STORAGE_KEY = "usd-halo-waitlist-signups";
const WAITLIST_REQUEST_TIMEOUT_MS = 6000;

type WaitlistResult = "created" | "exists";

function saveWaitlistEntryLocally(email: string): WaitlistResult {
  const normalizedEmail = email.trim().toLowerCase();
  const raw = localStorage.getItem(WAITLIST_STORAGE_KEY);
  const parsed: Array<{ email: string; createdAt: string }> = raw
    ? JSON.parse(raw)
    : [];

  const exists = parsed.some((entry) => entry.email === normalizedEmail);
  if (exists) {
    return "exists";
  }

  parsed.push({
    email: normalizedEmail,
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(parsed));

  return "created";
}

export async function submitWaitlistSignup(
  email: string,
): Promise<WaitlistResult> {
  const normalizedEmail = email.trim().toLowerCase();

  if (!runtimeConfig.waitlistEndpoint) {
    return saveWaitlistEntryLocally(normalizedEmail);
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => {
    controller.abort();
  }, WAITLIST_REQUEST_TIMEOUT_MS);

  let response: Response;

  try {
    response = await fetch(runtimeConfig.waitlistEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: normalizedEmail }),
      signal: controller.signal,
    });
  } catch {
    return saveWaitlistEntryLocally(normalizedEmail);
  } finally {
    window.clearTimeout(timeoutId);
  }

  if (!response.ok) {
    throw new Error("Waitlist submission failed");
  }

  const data: { status?: string; exists?: boolean } = await response
    .json()
    .catch(() => ({}));

  if (data.status === "exists" || data.exists === true) {
    return "exists";
  }

  return "created";
}
