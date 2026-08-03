"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => undefined;
}

/** Avoid hydration mismatches for client-only UI. */
export function useMounted(): boolean {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
