import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { StoryCard } from "@/components/cards";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { storyProfiles } from "@/data/pages";
import { media } from "@/data/media";

const storiesDescription =
  "Stories of Food Seva, Gau Seva, family support, education, and the continuing journey of Navchetna Charitable Trust since 2009.";

export const metadata = createPageMetadata({
  title: "Success Stories",
  description: storiesDescription,
  path: ROUTES.stories,
  keywords: ["Volunteer Stories", "Food Seva", "Education Support"],
});

export default function StoriesPage() {
  return (
    <>
      <PageJsonLd
        title="Success Stories"
        description={storiesDescription}
        path={ROUTES.stories}
        breadcrumbs={[{ name: "Success Stories", path: ROUTES.stories }]}
        pageType="CollectionPage"
      />
      <PageHero
        breadcrumbs={[{ label: "Success Stories" }]}
        eyebrow="Stories"
        title="Dignity behind every act of care"
        description="True service is not only about providing help, but also about giving people respect, support, and hope."
        primaryCta={{ label: "Become Part of a Story", href: ROUTES.volunteer }}
        secondaryCta={{ label: "Donate", href: ROUTES.donate }}
      />

      <Section background="white">
        <SectionHeading
          align="center"
          eyebrow="Community Voices"
          title="Stories of seva and hope"
        />
        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2">
          {storyProfiles.map((story) => (
            <StaggerItem key={story.name}>
              <StoryCard
                name={`${story.name} · ${story.role}`}
                quote={story.quote}
                summary={story.summary}
                href={ROUTES.stories}
                imageSrc={media.stories[story.name as keyof typeof media.stories]}
                imageAlt={story.name}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <DonateCTA />
    </>
  );
}
