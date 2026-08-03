"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HOLD_MS = 2200;
const EXIT_MS = 700;

/**
 * Full-viewport brand splash on every hard load / first paint.
 * Skips client-side route changes; respects reduced motion.
 */
export function SplashScreen() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hold = reduced ? 400 : HOLD_MS;
    const timer = window.setTimeout(() => setVisible(false), hold);
    document.documentElement.classList.add("splash-lock");
    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("splash-lock");
    };
  }, [reduced]);

  useEffect(() => {
    if (!visible) {
      document.documentElement.classList.remove("splash-lock");
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-primary"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] },
          }}
          aria-busy="true"
          aria-label="Loading"
          role="status"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <motion.div
              className="absolute -top-24 -left-16 size-72 rounded-full bg-secondary/40"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
            <motion.div
              className="absolute -right-20 -bottom-28 size-96 rounded-full bg-accent/25"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            />
            <motion.div
              className="absolute top-1/3 left-1/2 size-64 -translate-x-1/2 rounded-full bg-soft/10 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              className="grid size-20 place-items-center rounded-2xl bg-white/10 text-2xl font-bold tracking-tight text-white ring-1 ring-white/25 backdrop-blur-sm sm:size-24 sm:text-3xl"
              initial={reduced ? false : { scale: 0.7, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            >
              AS
            </motion.div>

            <motion.p
              className="font-heading mt-6 text-2xl font-bold text-white sm:text-3xl"
              initial={reduced ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: reduced ? 0 : 0.25, ease: "easeOut" }}
            >
              {siteConfig.shortName}
            </motion.p>

            <motion.p
              className="mt-3 max-w-sm text-sm text-white/75 sm:text-base"
              initial={reduced ? false : { y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: reduced ? 0 : 0.4, ease: "easeOut" }}
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              className="mt-10 h-0.5 w-16 overflow-hidden rounded-full bg-white/20"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduced ? 0 : 0.55 }}
              aria-hidden
            >
              <motion.div
                className="h-full origin-left bg-soft"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reduced ? 0.3 : 1.4,
                  delay: reduced ? 0 : 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
