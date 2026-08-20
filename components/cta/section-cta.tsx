import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import {
  FloatingCircle,
  NoiseOverlay,
} from "@/components/ui/svg-decorations";

interface CtaAction {
  label: string;
  href: string;
}

interface SectionCTAProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  className?: string;
}

export function SectionCTA({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  className,
}: SectionCTAProps) {
  return (
    <Section
      background="transparent"
      spacing="lg"
      className={className}
    >
      <div className="relative overflow-hidden rounded-[1.5rem] gradient-cta px-5 py-12 text-white sm:rounded-[var(--radius-section)] sm:px-8 sm:py-16 md:px-12 md:py-20">
        <NoiseOverlay />
        <FloatingCircle className="absolute -top-10 -right-8 size-48 opacity-20" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold tracking-[0.08em] text-soft uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-heading text-[1.75rem] font-bold text-balance sm:text-4xl lg:text-[44px]">
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              {description}
            </p>
          ) : null}
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            {secondary ? (
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="w-full border border-white/40 text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function DonateCTA({ className }: { className?: string }) {
  return (
    <SectionCTA
      className={className}
      eyebrow="Participate"
      title="Your compassion can change someone's tomorrow"
      description="Support Food Seva and Bhandara, Gau Seva, help for families, education and hostel support, and tree plantation—with dignity and humanity."
      primary={{ label: "Support Our Mission", href: "/donate" }}
      secondary={{ label: "Become a Volunteer", href: "/volunteer" }}
    />
  );
}
