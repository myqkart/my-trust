import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { GalleryCard } from "@/components/cards/content-cards";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { ROUTES } from "@/constants/routes";
import { media } from "@/data/media";

export function HomeGalleryPreview() {
  return (
    <Section background="soft">
      <SlideUp>
        <SectionHeading
          align="center"
          eyebrow="Gallery"
          title="Moments that feel like home"
          description="A glimpse into education, bhandara, plantation, and community seva."
        />
      </SlideUp>
      <StaggerChildren
        preset="gallery"
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
      >
        {media.galleryPreview.map((item) => (
          <StaggerItem key={item.title}>
            <GalleryCard
              title={item.title}
              category={item.category}
              href={ROUTES.gallery}
              imageSrc={item.src}
              imageAlt={item.title}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>
      <div className="mt-10 text-center">
        <Button asChild variant="secondary">
          <Link href={ROUTES.gallery}>View Full Gallery</Link>
        </Button>
      </div>
    </Section>
  );
}
