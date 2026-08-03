"use client";

import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { useScroll } from "@/hooks/use-scroll";
import { containerPaddingClass } from "@/styles/theme/spacing";
import { cn } from "@/utils/cn";

interface StickyCTAProps {
  className?: string;
  title?: string;
  description?: string;
}

/**
 * Sticky participation bar — appears after scroll on desktop.
 * Mobile uses DonateFAB instead.
 */
export function StickyCTA({
  className,
  title = "Help us give dignity to every elder",
  description = "Your support funds meals, medicine, and companionship.",
}: StickyCTAProps) {
  const { y } = useScroll();
  const visible = y > 520;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 hidden transition-all duration-300 md:block",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
        className,
      )}
      aria-hidden={!visible}
      inert={!visible ? true : undefined}
    >
      <div className="border-t border-border/60 bg-white/90 shadow-[var(--shadow-soft-lg)] backdrop-blur-xl">
        <div
          className={cn(
            "mx-auto flex max-w-[1280px] items-center justify-between gap-6 py-3",
            containerPaddingClass,
          )}
        >
          <div className="min-w-0">
            <p className="truncate font-semibold text-primary">{title}</p>
            <p className="truncate text-sm text-muted">{description}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Button asChild variant="secondary" size="sm">
              <Link href={ROUTES.volunteer}>Become a Volunteer</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={ROUTES.donate}>
                <HeartHandshake aria-hidden />
                Support Our Mission
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
