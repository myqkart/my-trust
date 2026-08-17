import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { ProgramCard } from "@/components/cards/content-cards";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { ROUTES } from "@/constants/routes";
import { programsInfo } from "@/data/demo";
import { media } from "@/data/media";

export function HomeFeaturedPrograms() {
  return (
    <Section background="white">
      <SlideUp>
        <SectionHeading
          align="center"
          eyebrow="Programs"
          title="How we create impact"
          description="Each program is designed around service, support, and humanity."
        />
      </SlideUp>
      <StaggerChildren className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {programsInfo.slice(0, 6).map((program) => (
          <StaggerItem key={program.id}>
            <ProgramCard
              title={program.title}
              summary={program.summary}
              href={program.href}
              impact={program.impact}
              imageSrc={media.programs[program.slug as keyof typeof media.programs]}
              imageAlt={`${program.title} program`}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>
      <div className="mt-10 text-center">
        <Button asChild variant="secondary">
          <Link href={ROUTES.programs}>See All Programs</Link>
        </Button>
      </div>
    </Section>
  );
}
