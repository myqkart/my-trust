import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { EventCard } from "@/components/cards/content-cards";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { ROUTES } from "@/constants/routes";
import { upcomingEvents } from "@/data/home";

export function HomeUpcomingEvents() {
  return (
    <Section background="default">
      <SlideUp>
        <SectionHeading
          align="center"
          eyebrow="Events"
          title="Come be part of something meaningful"
          description="From plantation drives to food seva and gau seva, every gathering strengthens community."
        />
      </SlideUp>
      <StaggerChildren className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {upcomingEvents.map((event) => (
          <StaggerItem key={event.title}>
            <EventCard
              title={event.title}
              summary={event.summary}
              dateLabel={event.dateLabel}
              location={event.location}
              href={event.href}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>
      <div className="mt-10 text-center">
        <Button asChild variant="secondary">
          <Link href={ROUTES.events}>View All Events</Link>
        </Button>
      </div>
    </Section>
  );
}
