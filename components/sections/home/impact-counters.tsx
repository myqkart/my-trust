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
            title="Care that adds up to real change"
            description="Numbers matter when they represent people, meals, and moments of dignity."
          />
        </SlideUp>
        <StaggerChildren
          preset="statistics"
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:grid-cols-4"
        >
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.residents}
              label="Residents"
              description="Elders receiving care and companionship."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.meals}
              label="Meals Served"
              description="Nourishment prepared and shared with respect."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.medicalCamps}
              label="Medical Camps"
              description="Healthcare brought closer to communities."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.volunteers}
              label="Volunteers"
              description="People giving time with purpose."
            />
          </StaggerItem>
        </StaggerChildren>
        <StaggerChildren className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:grid-cols-4">
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.childrenEducated}
              label="Children Educated"
              description="Learning support for brighter futures."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.trees}
              label="Trees Planted"
              description="Environment efforts that grow with us."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.yearsOfService}
              label="Years of Service"
              description={`Serving since ${siteConfig.foundingYear}.`}
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.familiesSupported}
              label="Families Supported"
              description="Households strengthened through care."
            />
          </StaggerItem>
        </StaggerChildren>
      </div>
    </Section>
  );
}
