import { cn } from "@/utils/cn";

interface SvgProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

/** Soft organic wave divider for section transitions. */
export function WaveDivider({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full text-background", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M0 64C240 112 480 0 720 32C960 64 1200 112 1440 64V120H0V64Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Soft blob shape for decorative backgrounds. */
export function Blob({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-soft", className)}
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M44.7,-67.1C57.3,-59.1,66.2,-45.2,72.4,-29.8C78.6,-14.4,82.1,2.5,78.2,17.6C74.3,32.7,63,46,49.1,56.4C35.2,66.8,18.6,74.3,1.2,72.7C-16.2,71.1,-32.4,60.4,-46.6,48.5C-60.8,36.6,-73,23.5,-76.4,8.1C-79.8,-7.3,-74.4,-25,-64.3,-38.4C-54.2,-51.8,-39.4,-60.9,-24.1,-67.8C-8.8,-74.7,7,-79.4,22.3,-76.3C37.6,-73.2,52.4,-62.3,44.7,-67.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** Subtle dot grid pattern. */
export function PatternDots({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-accent/20", className)}
      aria-hidden
      {...props}
    >
      <circle cx="8" cy="8" r="2" fill="currentColor" />
      <circle cx="40" cy="8" r="2" fill="currentColor" />
      <circle cx="72" cy="8" r="2" fill="currentColor" />
      <circle cx="8" cy="40" r="2" fill="currentColor" />
      <circle cx="40" cy="40" r="2" fill="currentColor" />
      <circle cx="72" cy="40" r="2" fill="currentColor" />
      <circle cx="8" cy="72" r="2" fill="currentColor" />
      <circle cx="40" cy="72" r="2" fill="currentColor" />
      <circle cx="72" cy="72" r="2" fill="currentColor" />
    </svg>
  );
}

/** Soft cross motif for decorative accents. */
export function CrossPattern({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-accent/30", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Minimal leaf illustration. */
export function LeafPattern({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-accent/40", className)}
      aria-hidden
      {...props}
    >
      <path
        d="M48 8C28 12 12 28 12 48C32 44 48 28 48 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 36C28 32 36 24 40 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Soft floating circle for hero atmospheres. */
export function FloatingCircle({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-soft/40", className)}
      aria-hidden
      {...props}
    >
      <circle cx="60" cy="60" r="56" fill="currentColor" />
    </svg>
  );
}

/** Noise overlay placeholder via SVG turbulence. */
export function NoiseOverlay({ className, ...props }: SvgProps) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]", className)}
      aria-hidden
      {...props}
    >
      <filter id="trust-noise-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#trust-noise-filter)" />
    </svg>
  );
}
