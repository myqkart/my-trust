"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { fade } from "@/animations/fade";
import { slideUp, slideLeft, slideRight } from "@/animations/slide";
import { scaleIn } from "@/animations/scale";
import { reveal, imageReveal } from "@/animations/reveal";
import { animationsConfig } from "@/config/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const viewport = animationsConfig.viewport;

function RevealBase({
  children,
  delay = 0,
  className,
  variants,
  transition,
  ...props
}: RevealProps & { variants: typeof fade }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay, ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn(props: RevealProps) {
  return <RevealBase variants={fade} {...props} />;
}

export function SlideUp(props: RevealProps) {
  return <RevealBase variants={slideUp} {...props} />;
}

export function SlideLeft(props: RevealProps) {
  return <RevealBase variants={slideLeft} {...props} />;
}

export function SlideRight(props: RevealProps) {
  return <RevealBase variants={slideRight} {...props} />;
}

export function ScaleIn(props: RevealProps) {
  return <RevealBase variants={scaleIn} {...props} />;
}

export function BlurReveal(props: RevealProps) {
  return <RevealBase variants={reveal} {...props} />;
}

export function ImageReveal(props: RevealProps) {
  return <RevealBase variants={imageReveal} {...props} />;
}
