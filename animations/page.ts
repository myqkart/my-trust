import type { Variants } from "framer-motion";
import { duration } from "@/styles/theme/motion";

/**
 * Page enter transition.
 * Avoid translateY/scale on enter — a fixed header makes those look like a
 * gap between the nav and the hero on first paint.
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: duration.md / 1000,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration.fast / 1000,
      ease: "easeInOut",
    },
  },
};
