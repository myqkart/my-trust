import type { Variants } from "framer-motion";
import { defaultTransition } from "@/utils/animation";

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};
