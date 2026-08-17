import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { StatisticCard } from "@/components/cards/content-cards";
import { FadeIn, SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { ROUTES } from "@/constants/routes";
import { STATISTICS } from "@/constants/statistics";
import { impactUtilization } from "@/data/home";

export function HomeStatisticsDashboard() {
  return (
    <Section background="white">
      <SlideUp>
        <SectionHeading
          align="center"
          eyebrow="Dashboard"
          title="Where support becomes care"
          description="A clear view of how contributions become education, meals, gau seva, and a future home for elders."
        />
      </SlideUp>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <FadeIn>
          <Card variant="elevated" className="h-full">
            <CardTitle>Donation utilization</CardTitle>
            <p className="mt-2 text-sm text-muted">
              Illustrative allocation guiding how we steward every contribution.
            </p>
            <ul className="mt-8 space-y-5">
              {impactUtilization.map((item) => (
                <li key={item.label}>
                  <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                    <span className="font-medium text-primary">{item.label}</span>
                    <span className="font-number text-secondary">
                      {item.percent}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-soft/70">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-secondary to-accent"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="link" size="sm" className="mt-8 -ml-4">
              <Link href={ROUTES.reports}>Download annual report</Link>
            </Button>
          </Card>
        </FadeIn>

        <StaggerChildren
          preset="statistics"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.yearsOfService}
              label="Years of Service"
              description="Serving Ahmedabad with compassion since 2009."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.programs}
              label="Focus Areas"
              description="Education, food, gau seva, plantation, and elder care."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.food}
              label="Food & Clothing"
              description="Bhandara events and essentials for families in need."
            />
          </StaggerItem>
          <StaggerItem>
            <StatisticCard
              value={STATISTICS.oldAgeHome}
              label="Old Age Home"
              description="A commitment taking shape for every elder."
            />
          </StaggerItem>
        </StaggerChildren>
      </div>
    </Section>
  );
}
