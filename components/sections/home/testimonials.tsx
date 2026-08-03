import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { TestimonialCard } from "@/components/cards/content-cards";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { ROUTES } from "@/constants/routes";
import { testimonialsInfo } from "@/data/demo";

export function HomeTestimonials() {
  return (
    <Section background="white">
      <SlideUp>
        <SectionHeading
          align="center"
          eyebrow="Voices"
          title="Stories that stay with us"
          description="Residents, volunteers, donors, and doctors share why this work matters."
        />
      </SlideUp>
      <StaggerChildren className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
        {testimonialsInfo.map((item) => (
          <StaggerItem key={item.name}>
            <TestimonialCard
              quote={item.quote}
              name={item.name}
              role={item.role}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>
      <div className="mt-10 text-center">
        <Button asChild variant="ghost">
          <Link href={ROUTES.stories}>Read More Stories</Link>
        </Button>
      </div>
    </Section>
  );
}
