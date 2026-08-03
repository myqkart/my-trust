import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { TrustBadge } from "@/components/cards/content-cards";
import { DecorativeBackground } from "@/components/layout";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { STATISTICS } from "@/constants/statistics";
import { trustBadgesInfo } from "@/data/demo";

export function HomeTrustIndicators() {
  const badges = [
    ...trustBadgesInfo,
    {
      label: "Years of Service",
      description: `${STATISTICS.yearsOfService} of compassionate care`,
    },
  ];

  return (
    <Section id="page-intro" background="white" className="relative">
      <DecorativeBackground variant="dots" />
      <div className="relative z-10">
        <SlideUp>
          <SectionHeading
            align="center"
            eyebrow="Trust"
            title="Built on transparency and care"
            description="Every credential below represents accountability you can verify—because trust grows from evidence, not promises."
          />
        </SlideUp>
        <StaggerChildren className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:grid-cols-5">
          {badges.map((badge) => (
            <StaggerItem key={badge.label}>
              <TrustBadge label={badge.label} description={badge.description} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </Section>
  );
}
