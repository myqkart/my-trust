"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Reset window scroll on route changes so the fixed header never floats over a gap. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
