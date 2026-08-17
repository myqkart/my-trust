import { StatisticCard } from "@/components/cards/content-cards";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { DecorativeBackground } from "@/components/layout";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { siteConfig } from "@/config/site";
import { STATISTICS } from "@/constants/statistics";

export function HomeImpactCounters() {
  return (
    <Section background="default" className="relative">
      <DecorativeBackground variant="mesh" />
      <div className="relative z-10">
        <SlideUp>
          <SectionHeading
            align="center"
            eyebrow="Impact"
            title="Seva that reaches people in need"
            description="Education, food, cow welfare, plantation—and a home for elders still to come."
          />
        </SlideUp>
        <StaggerChildren
          preset="statistics"
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:grid-cols-4"
        >
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.education}
              label="Education"
              description="Hostel care so needy children can continue school."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.food}
              label="Food & Clothing"
              description="Bhandara events, meals, and clothes for families."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.cowWelfare}
              label="Cow Welfare"
              description="Care for needy and helpless cattle."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.trees}
              label="Tree Plantation"
              description="Greener neighbourhoods through community drives."
            />
          </StaggerItem>
        </StaggerChildren>
        <StaggerChildren className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:grid-cols-2">
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.yearsOfService}
              label="Years of Service"
              description={`Serving Ahmedabad since ${siteConfig.foundingYear}.`}
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.oldAgeHome}
              label="Old Age Home"
              description="A respectful home for elders is being planned."
            />
          </StaggerItem>
        </StaggerChildren>
      </div>
    </Section>
  );
}
