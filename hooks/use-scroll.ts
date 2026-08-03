"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  y: number;
  direction: "up" | "down" | null;
  progress: number;
}

function readScrollY(): number {
  if (typeof window === "undefined") return 0;
  // Lenis keeps the real offset on the scrolling element / html.
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

/** Track scroll position, direction, and document progress (Lenis-safe). */
export function useScroll(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    y: 0,
    direction: null,
    progress: 0,
  });

  useEffect(() => {
    let lastY = readScrollY();
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.max(0, readScrollY());
      const max = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      );
      const progress = max > 0 ? Math.min(y / max, 1) : 0;
      const direction =
        y > lastY + 1 ? "down" : y < lastY - 1 ? "up" : null;

      setState((prev) => {
        if (
          prev.y === y &&
          prev.direction === direction &&
          prev.progress === progress
        ) {
          return prev;
        }
        return { y, direction, progress };
      });

      lastY = y;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Lenis dispatches scroll on the wrapper / document as well.
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, true);
    };
  }, []);

  return state;
}
