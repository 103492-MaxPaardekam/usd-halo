export type AnalyticsProvider = "none" | "gtm" | "posthog" | "auto";

interface RuntimeConfig {
  siteUrl: string;
  apiBaseUrl: string;
  analyticsProvider: AnalyticsProvider;
  waitlistEndpoint: string;
  gtmId: string;
  posthogKey: string;
  posthogHost: string;
}

function resolveAnalyticsProvider(
  value: string | undefined,
): AnalyticsProvider {
  if (value === "gtm" || value === "posthog" || value === "auto") {
    return value;
  }

  return "none";
}

export const runtimeConfig: RuntimeConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL ?? "https://usdhalo.io",
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "https://api.usdhalo.io",
  waitlistEndpoint: import.meta.env.VITE_WAITLIST_ENDPOINT ?? "/api/waitlist",
  gtmId: import.meta.env.VITE_GTM_ID ?? "",
  posthogKey: import.meta.env.VITE_POSTHOG_KEY ?? "",
  posthogHost: import.meta.env.VITE_POSTHOG_HOST ?? "https://eu.i.posthog.com",
  analyticsProvider: resolveAnalyticsProvider(
    import.meta.env.VITE_ANALYTICS_PROVIDER,
  ),
};
