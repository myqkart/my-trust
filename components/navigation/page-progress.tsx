"use client";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/utils/cn";

export function PageProgress({ className }: { className?: string }) {
  const { progress } = useScroll();

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-transparent",
        className,
      )}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Reading progress"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-secondary to-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
