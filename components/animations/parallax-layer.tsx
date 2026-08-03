"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { parallax as parallaxTokens } from "@/animations/parallax";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";

type ParallaxStrength = keyof typeof parallaxTokens;

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  strength?: ParallaxStrength;
}

/** Scroll parallax for decorative layers. Disabled for reduced motion. */
export function ParallaxLayer({
  children,
  className,
  strength = "shapes",
}: ParallaxLayerProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const distance = parallaxTokens[strength];
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={cn("will-change-transform", className)}>
      {children}
    </motion.div>
  );
}
