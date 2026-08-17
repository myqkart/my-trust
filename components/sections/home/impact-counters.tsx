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
            description="Plants, food, gau seva, help for the poor, and education—five ways we serve Ahmedabad."
          />
        </SlideUp>
        <StaggerChildren
          preset="statistics"
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:grid-cols-3"
        >
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.trees}
              label="Tree Plantation"
              description="Greener neighbourhoods through community drives."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.food}
              label="Food Distribution"
              description="Meals shared with people who need them today."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.cowWelfare}
              label="Gau Seva"
              description="Care for cows that are needy or helpless."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.helpingPoor}
              label="Helping the Poor"
              description="Clothes, essentials, and support for families."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.education}
              label="Education Support"
              description="Help so needy children can continue school."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.yearsOfService}
              label="Years of Service"
              description={`Serving Ahmedabad since ${siteConfig.foundingYear}.`}
            />
          </StaggerItem>
        </StaggerChildren>
      </div>
    </Section>
  );
}
