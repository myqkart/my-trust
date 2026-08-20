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
            description="Plants, Food Seva, Gau Seva, help for families, and education—five ways we serve with humanity."
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
              description="Simple, clean meals offered with dignity through Food Seva and Bhandara."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.cowWelfare}
              label="Gau Seva"
              description="Quiet, regular care for cows that depend on human kindness."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.helpingPoor}
              label="Helping the Poor"
              description="Food, clothing, and essentials given with dignity and care."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.education}
              label="Education Support"
              description="Hostel and study support so students can keep studying."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.yearsOfService}
              label="Years of Service"
              description={`One vision since ${siteConfig.foundingYear}—service, support, and humanity.`}
            />
          </StaggerItem>
        </StaggerChildren>
      </div>
    </Section>
  );
}
