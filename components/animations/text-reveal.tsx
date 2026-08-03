"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { animationsConfig } from "@/config/animations";
import { stagger as staggerTokens } from "@/styles/theme/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

/** Word-by-word headline reveal from animations.md. */
export function TextReveal({
  text,
  as = "h1",
  className,
  delay = 0,
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const words = useMemo(() => text.split(" "), [text]);
  const Tag = as;
  // Avoid invisible first paint if hydration is delayed (e.g. slow JS).
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  if (reduced || !ready) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn("overflow-visible", className)} aria-label={text}>
      <motion.span
        className="inline overflow-visible"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerTokens.text / 1000,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="mr-[0.28em] inline-block overflow-visible will-change-transform"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

interface ParagraphRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ParagraphReveal({
  children,
  className,
  delay = 0.15,
}: ParagraphRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <p className={className}>{children}</p>;
  }

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: animationsConfig.duration.md / 1000,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.p>
  );
}
