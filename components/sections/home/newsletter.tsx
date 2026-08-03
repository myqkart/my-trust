import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { DecorativeBackground } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/animations";
import { homeNewsletter } from "@/data/home";

export function HomeNewsletter() {
  return (
    <Section background="white" className="relative">
      <DecorativeBackground variant="blobs" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <SlideUp>
          <SectionHeading
            align="center"
            eyebrow={homeNewsletter.eyebrow}
            title={homeNewsletter.title}
            description={homeNewsletter.description}
          />
        </SlideUp>
        <FadeIn className="mt-8" delay={0.1}>
          <NewsletterForm />
        </FadeIn>
      </div>
    </Section>
  );
}
