import type { Variants } from "framer-motion";
import { duration } from "@/styles/theme/motion";

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const paragraphReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.md / 1000,
      ease: "easeOut",
      delay: 0.15,
    },
  },
};
