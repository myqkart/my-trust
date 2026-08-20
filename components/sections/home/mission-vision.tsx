import { HeartHandshake, Sparkles } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { trustInfo } from "@/data/demo";

export function HomeMissionVision() {
  return (
    <Section background="white">
      <SlideUp>
        <SectionHeading
          align="center"
          eyebrow="Purpose"
          title="Mission & Vision"
          description="We exist to turn compassion into daily seva—Food Seva and Bhandara with dignity, Gau Seva, help for families, education support, and plantation."
        />
      </SlideUp>
      <StaggerChildren className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <StaggerItem>
          <Card variant="soft" className="h-full">
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-[var(--radius-button)] bg-accent/15 text-accent">
              <HeartHandshake className="size-6" aria-hidden />
            </div>
            <CardTitle>Mission</CardTitle>
            <p className="mt-4 text-muted">{trustInfo.mission}</p>
          </Card>
        </StaggerItem>
        <StaggerItem>
          <Card variant="soft" className="h-full">
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-[var(--radius-button)] bg-secondary/10 text-secondary">
              <Sparkles className="size-6" aria-hidden />
            </div>
            <CardTitle>Vision</CardTitle>
            <p className="mt-4 text-muted">{trustInfo.vision}</p>
          </Card>
        </StaggerItem>
      </StaggerChildren>
      <StaggerChildren className="mt-8 flex flex-wrap justify-center gap-3">
        {trustInfo.values.map((value) => (
          <StaggerItem key={value}>
            <span className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-secondary">
              {value}
            </span>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
