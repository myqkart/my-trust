import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Quote, SectionHeading } from "@/components/ui/typography";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Timeline } from "@/components/common/timeline";
import { DecorativeBackground, SplitLayout } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/animations";
import { ROUTES } from "@/constants/routes";
import { founderInfo } from "@/data/demo";
import { homeAbout, homeTimeline } from "@/data/home";
import { media } from "@/data/media";

export function HomeAboutPreview() {
  return (
    <Section background="soft" className="relative">
      <DecorativeBackground variant="soft" />
      <div className="relative z-10 space-y-16 md:space-y-20">
        <SplitLayout
          align="start"
          left={
            <SlideUp>
              <SectionHeading
                eyebrow={homeAbout.eyebrow}
                title={homeAbout.title}
                description={homeAbout.description}
              />
              <Button asChild className="mt-8">
                <Link href={ROUTES.about}>Read Our Journey</Link>
              </Button>
            </SlideUp>
          }
          right={
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-image)] bg-soft/40">
                    <OptimizedImage
                      src={media.about.elderCare}
                      alt="Caregiver supporting an elderly resident with compassion"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 22vw"
                    />
                  </div>
                  <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-[var(--radius-image)] bg-soft/40">
                    <OptimizedImage
                      src={media.about.companionship}
                      alt="Elderly hands held in companionship and care"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 22vw"
                    />
                  </div>
                </div>
                <Card variant="elevated" className="bg-white/95">
                  <CardContent>
                    <Quote cite={founderInfo.name}>{founderInfo.message}</Quote>
                    <p className="mt-4 text-sm font-semibold text-secondary">
                      {founderInfo.designation}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          }
        />
        <SlideUp delay={0.15}>
          <Timeline items={[...homeTimeline].slice(0, 3)} />
        </SlideUp>
      </div>
    </Section>
  );
}
