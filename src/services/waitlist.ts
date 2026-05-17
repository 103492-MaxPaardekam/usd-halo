import { runtimeConfig } from "../config/runtime";

const WAITLIST_STORAGE_KEY = "usd-halo-waitlist-signups";

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
  if (!runtimeConfig.waitlistEndpoint) {
    return saveWaitlistEntryLocally(email);
  }

  const response = await fetch(runtimeConfig.waitlistEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.trim().toLowerCase() }),
  });

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
