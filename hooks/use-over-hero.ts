"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * True while the page hero is still in view.
 * Used so the navbar stays transparent over dark heroes
 * instead of switching to solid white after a few pixels.
 */
export function useOverHero(defaultValue = true): boolean {
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(defaultValue);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-site-hero]");
    if (!hero) {
      setOverHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Stay in "hero mode" until most of the hero has left the viewport.
        setOverHero(entry.isIntersecting && entry.intersectionRatio > 0.2);
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 1],
        // Offset by navbar height so the switch happens cleanly under the bar.
        rootMargin: "-72px 0px 0px 0px",
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  return overHero;
}
