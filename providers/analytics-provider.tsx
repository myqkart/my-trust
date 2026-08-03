"use client";

import { useEffect, type ReactNode } from "react";
import { analyticsConfig } from "@/config/analytics";

interface AnalyticsProviderProps {
  children: ReactNode;
}

/**
 * Analytics bootstrap placeholder.
 * Scripts are injected only when IDs are configured and production is enabled.
 */
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    if (!analyticsConfig.enabled) return;
    if (!analyticsConfig.googleAnalyticsId && !analyticsConfig.googleTagManagerId) {
      return;
    }
    // Provider ready — tracking scripts added when credentials are available.
  }, []);

  return children;
}
