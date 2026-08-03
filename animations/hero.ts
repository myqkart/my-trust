import type { Variants } from "framer-motion";
import { duration, stagger } from "@/styles/theme/motion";

/** Hero entrance choreography from animations.md. */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.buttons / 1000,
      delayChildren: 0.1,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: duration.xl / 1000,
      ease: "easeOut",
    },
  },
};
