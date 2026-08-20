import { cn } from "@/utils/cn";
import {
  Blob,
  CrossPattern,
  FloatingCircle,
  LeafPattern,
  NoiseOverlay,
  PatternDots,
} from "@/components/ui/svg-decorations";

type DecorVariant = "soft" | "mesh" | "dots" | "blobs";

interface DecorativeBackgroundProps {
  variant?: DecorVariant;
  className?: string;
}

/** Layered atmospheric backgrounds — always behind section content. */
export function DecorativeBackground({
  variant = "soft",
  className,
}: DecorativeBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      {variant === "mesh" || variant === "soft" ? (
        <>
          <div className="absolute inset-0 bg-[image:var(--gradient-section)] opacity-40" />
          <NoiseOverlay />
        </>
      ) : null}

      {variant === "dots" ? (
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%234A7FA7'/%3E%3C/svg%3E\")",
          }}
        />
      ) : null}

      {(variant === "blobs" || variant === "soft") && (
        <>
          <FloatingCircle className="absolute -top-16 -left-10 size-56 opacity-[0.12]" />
          <FloatingCircle className="absolute -right-12 bottom-0 size-72 opacity-[0.1]" />
          <Blob className="absolute top-1/3 right-1/4 size-40 opacity-[0.08]" />
        </>
      )}

      {variant === "mesh" ? (
        <>
          <PatternDots className="absolute top-8 left-8 size-20 opacity-40" />
          <LeafPattern className="absolute right-10 bottom-12 size-16 opacity-30" />
          <CrossPattern className="absolute top-1/2 left-[18%] size-6 opacity-40" />
        </>
      ) : null}
    </div>
  );
}
