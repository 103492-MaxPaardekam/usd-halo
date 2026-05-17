import { useEffect } from "react";
import posthog from "posthog-js";
import { runtimeConfig } from "../config/runtime";

function isProviderEnabled(provider: "gtm" | "posthog") {
  if (runtimeConfig.analyticsProvider === "auto") {
    return true;
  }

  return runtimeConfig.analyticsProvider === provider;
}

function bootstrapGtm() {
  if (!isProviderEnabled("gtm") || !runtimeConfig.gtmId) {
    return;
  }

  if (document.getElementById("gtm-script")) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${runtimeConfig.gtmId}`;
  document.head.appendChild(script);
}

function bootstrapPosthog() {
  if (!isProviderEnabled("posthog") || !runtimeConfig.posthogKey) {
    return;
  }

  posthog.init(runtimeConfig.posthogKey, {
    api_host: runtimeConfig.posthogHost,
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
  });
}

export function AnalyticsBootstrap() {
  useEffect(() => {
    bootstrapGtm();
    bootstrapPosthog();
  }, []);

  return null;
}
