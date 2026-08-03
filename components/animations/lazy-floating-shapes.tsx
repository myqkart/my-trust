"use client";

import dynamic from "next/dynamic";

/** Client-only lazy GSAP decorations for the hero (keeps gsap off the critical path). */
export const LazyFloatingShapes = dynamic(
  () =>
    import("@/components/animations/floating-shapes").then(
      (mod) => mod.FloatingShapes,
    ),
  { ssr: false, loading: () => null },
);
