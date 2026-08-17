import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { EventCard } from "@/components/cards";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { eventSchema } from "@/lib/seo/json-ld";
import { ROUTES } from "@/constants/routes";
import { eventsList } from "@/data/pages";

const eventsDescription =
  "Join upcoming Navchetna Charitable Trust events—plantation drives, food distribution, gau seva, and community gatherings.";

export const metadata = createPageMetadata({
  title: "Events",
  description: eventsDescription,
  path: ROUTES.events,
  keywords: ["NGO events Ahmedabad", "Tree plantation Ahmedabad", "Food distribution"],
});

export default function EventsPage() {
  return (
    <>
      <PageJsonLd
        title="Events"
        description={eventsDescription}
        path={ROUTES.events}
        breadcrumbs={[{ name: "Events", path: ROUTES.events }]}
        pageType="CollectionPage"
        extras={eventsList.map((event) =>
          eventSchema({
            name: event.title,
            description: event.summary,
            startDate: event.startDate,
            location: event.location,
            path: ROUTES.events,
          }),
        )}
      />
      <PageHero
        breadcrumbs={[{ label: "Events" }]}
        eyebrow="Gatherings"
        title="Come together for care and celebration"
        description="Plantation drives, food distribution, gau seva, and community gatherings—every event is a chance to serve."
        primaryCta={{ label: "Volunteer at an Event", href: ROUTES.volunteer }}
        secondaryCta={{ label: "Contact Us", href: ROUTES.contact }}
      />

      <Section background="white">
        <SectionHeading
          align="center"
          eyebrow="Upcoming"
          title="Events on the calendar"
        />
        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventsList.map((event) => (
            <StaggerItem key={event.title}>
              <EventCard
                title={event.title}
                summary={event.summary}
                dateLabel={event.dateLabel}
                location={event.location}
                href={ROUTES.contact}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <DonateCTA />
    </>
  );
}
