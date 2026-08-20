import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Quote, SectionHeading } from "@/components/ui/typography";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { SplitLayout } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/animations";
import { ROUTES } from "@/constants/routes";
import { featuredResidentStory } from "@/data/home";
import { media } from "@/data/media";

export function HomeFeaturedStory() {
  return (
    <Section background="soft">
      <SplitLayout
        left={
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-image)] bg-soft/40 md:aspect-[5/6]">
              <OptimizedImage
                src={media.featuredStory}
                alt={`${featuredResidentStory.name} supported by Navchetna Charitable Trust`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-[image:var(--gradient-overlay)] opacity-50" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                <p className="text-sm font-semibold tracking-wide text-soft uppercase">
                  Education Story
                </p>
                <p className="font-heading mt-2 text-2xl font-bold sm:text-3xl">
                  {featuredResidentStory.name}
                </p>
              </div>
            </div>
          </FadeIn>
        }
        right={
          <SlideUp>
            <SectionHeading
              eyebrow="Human Stories"
              title="A place to stay, a chance to keep studying"
              description={featuredResidentStory.summary}
            />
            <Quote className="mt-8" cite={featuredResidentStory.name}>
              {featuredResidentStory.quote}
            </Quote>
            <p className="mt-6 text-muted">{featuredResidentStory.journey}</p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild className="w-full sm:w-auto">
                <Link href={featuredResidentStory.href}>
                  {featuredResidentStory.cta}
                </Link>
              </Button>
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <Link href={ROUTES.donate}>Support Education</Link>
              </Button>
            </div>
          </SlideUp>
        }
      />
    </Section>
  );
}
