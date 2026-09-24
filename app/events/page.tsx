import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { EventCard, GalleryCard } from "@/components/cards";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { eventSchema } from "@/lib/seo/json-ld";
import { ROUTES } from "@/constants/routes";
import { eventsList } from "@/data/pages";
import { media } from "@/data/media";

const eventsDescription =
  "Join Navchetna Charitable Trust events—Ambaji food seva, temple cleanliness seva, plantation drives, gau seva, and community gatherings.";

export const metadata = createPageMetadata({
  title: "Events",
  description: eventsDescription,
  path: ROUTES.events,
  keywords: [
    "NGO events Ahmedabad",
    "Ambaji food distribution",
    "Temple seva",
    "Rudhreshwar Mahadev",
    "Food seva Ambaji",
    "Tree plantation Ahmedabad",
  ],
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
          eyebrow="Calendar"
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
                href={
                  event.title === "Food Distribution in Ambaji"
                    ? "#ambaji-food-seva"
                    : event.title === "Religious Seva & Cleanliness Program"
                      ? "#temple-seva"
                      : ROUTES.contact
                }
                imageSrc={"imageSrc" in event ? event.imageSrc : undefined}
                imageAlt={"imageAlt" in event ? event.imageAlt : undefined}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section id="ambaji-food-seva" background="default">
        <SectionHeading
          align="center"
          eyebrow="Ambaji · Sep 2026"
          title="Food distribution in Ambaji"
          description="Pakpads food seva—meals shared with dignity for pilgrims and people in need."
        />
        <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {media.ambajiFoodSeva.map((photo) => (
            <StaggerItem key={photo.src}>
              <GalleryCard
                title={photo.title}
                category="Meals"
                href={ROUTES.gallery}
                imageSrc={photo.src}
                imageAlt={photo.alt}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section id="temple-seva" background="white">
        <SectionHeading
          align="center"
          eyebrow="Temple · Sun 13 Sep 2026"
          title="Religious seva & cleanliness"
          description="At Shree Rudhreshwar Mahadev & Rudra Hanuman Temple—cleanliness, care for devotees, and plantation. Seva is bhakti."
        />
        <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {media.templeSeva.map((photo) => (
            <StaggerItem key={photo.src}>
              <GalleryCard
                title={photo.title}
                category="Festivals"
                href={ROUTES.gallery}
                imageSrc={photo.src}
                imageAlt={photo.alt}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <DonateCTA />
    </>
  );
}
