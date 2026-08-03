"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { animationsConfig } from "@/config/animations";
import { stagger as staggerTokens } from "@/styles/theme/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";

type StaggerPreset = keyof typeof staggerTokens;

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  preset?: StaggerPreset;
  delayChildren?: number;
}

const container = (staggerMs: number, delayChildren: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerMs / 1000,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: animationsConfig.duration.md / 1000,
      ease: "easeOut",
    },
  },
};

export function StaggerChildren({
  children,
  className,
  preset = "cards",
  delayChildren = 0.05,
}: StaggerChildrenProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={container(staggerTokens[preset], delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={animationsConfig.viewport}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
