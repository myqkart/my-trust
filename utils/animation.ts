import type { Transition, Variants } from "framer-motion";
import { duration } from "@/styles/theme/motion";

export const defaultTransition: Transition = {
  duration: duration.md / 1000,
  ease: "easeOut",
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
