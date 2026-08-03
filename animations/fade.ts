import type { Variants } from "framer-motion";
import { defaultTransition } from "@/utils/animation";

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};
