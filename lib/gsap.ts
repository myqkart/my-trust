import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Register GSAP plugins once on the client.
 * Call from client effects before creating timelines.
 */
export function registerGsapPlugins(): typeof gsap {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }

  return gsap;
}

export { gsap, ScrollTrigger };
