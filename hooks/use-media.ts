"use client";

import { useEffect, useState } from "react";
import { BREAKPOINTS, type Breakpoint } from "@/constants/breakpoints";

/** Track whether the viewport is at least the given breakpoint. */
export function useMedia(breakpoint: Breakpoint): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${BREAKPOINTS[breakpoint]}px)`);
    const update = () => setMatches(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [breakpoint]);

  return matches;
}
