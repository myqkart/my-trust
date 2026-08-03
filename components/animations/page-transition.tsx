"use client";

import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Route template wrapper.
 * Enter fades were removed — Framer Motion could leave the page stuck at
 * opacity 0 (invisible content + white-on-white nav over an unseen hero).
 * Keep a stable flex wrapper for layout only.
 */
export function PageTransition({ children }: PageTransitionProps) {
  return <div className="flex min-h-0 flex-1 flex-col">{children}</div>;
}
