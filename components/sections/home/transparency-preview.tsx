import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { TrustBadge } from "@/components/cards/content-cards";
import { SplitLayout } from "@/components/layout";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { ROUTES } from "@/constants/routes";
import { trustInfo } from "@/data/demo";
import { homeTransparency } from "@/data/home";

export function HomeTransparencyPreview() {
  return (
    <Section background="soft">
      <SplitLayout
        left={
          <SlideUp>
            <SectionHeading
              eyebrow={homeTransparency.eyebrow}
              title={homeTransparency.title}
              description={homeTransparency.description}
            />
            <Button asChild className="mt-8" variant="secondary">
              <Link href={ROUTES.reports}>View Reports</Link>
            </Button>
          </SlideUp>
        }
        right={
          <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { label: "Established", value: String(trustInfo.established) },
              { label: "Registration", value: trustInfo.registration },
              { label: "12A", value: trustInfo.twelveA },
              { label: "80G", value: trustInfo.eightyG },
            ]
              .filter((item) => item.value)
              .map((item) => (
              <StaggerItem key={item.label}>
                <TrustBadge label={item.label} description={item.value} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        }
      />
    </Section>
  );
}
