import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Breadcrumb,
  type BreadcrumbItem,
} from "@/components/navigation/breadcrumb";
import {
  FloatingCircle,
  NoiseOverlay,
} from "@/components/ui/svg-decorations";
import {
  ParagraphReveal,
  ParallaxLayer,
  StaggerChildren,
  StaggerItem,
  TextReveal,
} from "@/components/animations";
import { LazyFloatingShapes } from "@/components/animations/lazy-floating-shapes";
import { FadeIn } from "@/components/animations/reveal";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "gradient";
}

interface HeroStat {
  label: string;
  value: string;
}

export interface HeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: HeroCTA;
  secondaryCta?: HeroCTA;
  stats?: HeroStat[];
  className?: string;
  compact?: boolean;
}

export function HeroBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-0 gradient-hero" />
      <NoiseOverlay />
      <LazyFloatingShapes />
      <ParallaxLayer strength="background" className="absolute inset-0">
        <FloatingCircle className="absolute -top-20 -right-16 size-72 opacity-20" />
        <FloatingCircle className="absolute right-1/4 bottom-10 size-40 opacity-10" />
      </ParallaxLayer>
      <ParallaxLayer strength="shapes" className="absolute inset-0">
        <FloatingCircle className="absolute -bottom-24 -left-20 size-96 opacity-15" />
      </ParallaxLayer>
    </div>
  );
}

export function HeroOverlay({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[image:var(--gradient-overlay)]",
        className,
      )}
      aria-hidden
    />
  );
}

export function HeroScrollIndicator({ className }: { className?: string }) {
  return (
    <a
      href="#page-intro"
      className={cn(
        "absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 transition-colors hover:text-white md:bottom-10",
        className,
      )}
      aria-label="Scroll to content"
    >
      <span className="text-xs tracking-wide uppercase">Scroll</span>
      <ChevronDown
        className="size-5 animate-bounce motion-reduce:animate-none"
        aria-hidden
      />
    </a>
  );
}

export function HeroStatistics({
  stats,
  className,
}: {
  stats: HeroStat[];
  className?: string;
}) {
  return (
    <StaggerChildren
      preset="statistics"
      className={cn(
        "mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <StaggerItem key={stat.label}>
          <div className="rounded-[var(--radius-card)] border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-md sm:px-4 sm:py-4">
            <p className="font-number text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-white/75 sm:text-sm">{stat.label}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}

export function HeroCTAButtons({
  primary,
  secondary,
  className,
}: {
  primary?: HeroCTA;
  secondary?: HeroCTA;
  className?: string;
}) {
  if (!primary && !secondary) return null;

  return (
    <FadeIn
      delay={0.35}
      className={cn(
        "mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
        className,
      )}
    >
      {primary ? (
        <Button
          asChild
          variant={primary.variant ?? "secondary"}
          size="lg"
          className="w-full bg-white text-primary hover:bg-soft/90 hover:text-primary sm:w-auto"
        >
          <Link href={primary.href}>{primary.label}</Link>
        </Button>
      ) : null}
      {secondary ? (
        <Button
          asChild
          variant={secondary.variant ?? "ghost"}
          size="lg"
          className="w-full border border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
        >
          <Link href={secondary.href}>{secondary.label}</Link>
        </Button>
      ) : null}
    </FadeIn>
  );
}

/** @deprecated Use HeroCTAButtons — kept for composition API compatibility. */
export const HeroCTA = HeroCTAButtons;

export function HeroContent({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  stats,
  className,
}: Omit<HeroProps, "compact">) {
  return (
    <Container className={cn("relative z-10", className)}>
      {breadcrumbs ? (
        <FadeIn>
          <Breadcrumb items={breadcrumbs} light />
        </FadeIn>
      ) : null}
      {eyebrow ? (
        <FadeIn delay={0.05}>
          <p className="mb-4 text-sm font-semibold tracking-[0.08em] text-soft uppercase">
            {eyebrow}
          </p>
        </FadeIn>
      ) : null}
      <TextReveal
        text={title}
        as="h1"
        delay={0.1}
        className="font-heading max-w-4xl overflow-visible text-[2rem] font-bold leading-[1.15] text-white text-balance sm:text-5xl sm:leading-[1.12] lg:text-[56px] lg:leading-[1.1]"
      />
      {description ? (
        <ParagraphReveal className="mt-5 max-w-2xl text-base text-white/85 sm:mt-6 sm:text-xl">
          {description}
        </ParagraphReveal>
      ) : null}
      <HeroCTAButtons primary={primaryCta} secondary={secondaryCta} />
      {stats?.length ? <HeroStatistics stats={stats} /> : null}
    </Container>
  );
}

/** Composable page hero matching pages.md global hero rules. */
export function Hero({ compact = false, className, ...content }: HeroProps) {
  return (
    <section
      data-site-hero
      className={cn(
        // Full-bleed under the fixed header — no layout gap above the hero.
        "relative flex items-center overflow-hidden text-white",
        compact
          ? "min-h-[50vh] pt-24 pb-[var(--space-16)] md:min-h-[58vh] md:pt-28 md:pb-[var(--space-18)]"
          : "min-h-[70vh] pt-24 pb-[var(--space-18)] md:min-h-[80vh] md:pt-28 md:pb-[var(--space-24)] lg:min-h-[92vh] lg:pt-32 lg:pb-[var(--space-30)]",
        className,
      )}
    >
      <HeroBackground />
      <HeroContent {...content} />
      {!compact ? <HeroScrollIndicator /> : null}
    </section>
  );
}
