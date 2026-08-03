import type { Variants } from "framer-motion";
import { duration } from "@/styles/theme/motion";

export const reveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.md / 1000,
      ease: "easeOut",
    },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08, filter: "blur(16px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
