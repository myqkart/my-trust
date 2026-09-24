import type { ReactNode } from "react";

/**
 * Server template — keeps layout structure without a client boundary
 * wrapping every page (better for SSR HTML / crawlers).
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="flex min-h-0 flex-1 flex-col">{children}</div>;
}
