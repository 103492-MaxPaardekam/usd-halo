import { runtimeConfig } from "../config/runtime";

type AnalyticsValue = string | number | boolean | null | undefined;

type AnalyticsPayload = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, AnalyticsValue>>;
    posthog?: {
      capture: (eventName: string, payload?: AnalyticsPayload) => void;
    };
  }
}

function getProvider() {
  return runtimeConfig.analyticsProvider;
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  const provider = getProvider();
  if (provider === "none") {
    return;
  }

  if ((provider === "gtm" || provider === "auto") && window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...payload });
  }

  if (
    (provider === "posthog" || provider === "auto") &&
    window.posthog?.capture
  ) {
    window.posthog.capture(eventName, payload);
  }
}

export function trackPageView(pathname: string, title: string) {
  trackEvent("page_view", {
    pathname,
    title,
  });
}
