import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { GalleryCard } from "@/components/cards";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { galleryCategories } from "@/data/pages";
import { media, type GalleryCategory } from "@/data/media";

const galleryDescription =
  "Browse moments from plantation, food seva, gau seva, education, and community work at Navchetna Charitable Trust.";

export const metadata = createPageMetadata({
  title: "Gallery",
  description: galleryDescription,
  path: ROUTES.gallery,
  keywords: ["Navchetna Charitable Trust gallery", "NGO Ahmedabad"],
});

type GalleryItem = {
  title: string;
  category: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  key: string;
};

const galleryItems: GalleryItem[] = [];

for (const category of galleryCategories) {
  if (category === "Environment") {
    for (const photo of media.plantation) {
      galleryItems.push({
        title: photo.title,
        category,
        href: ROUTES.gallery,
        imageSrc: photo.src,
        imageAlt: photo.alt,
        key: photo.src,
      });
    }
    continue;
  }

  galleryItems.push({
    title: `${category} moments`,
    category,
    href: ROUTES.gallery,
    imageSrc: media.gallery[category as GalleryCategory],
    imageAlt: `${category} moments`,
    key: category,
  });
}

export default function GalleryPage() {
  return (
    <>
      <PageJsonLd
        title="Gallery"
        description={galleryDescription}
        path={ROUTES.gallery}
        breadcrumbs={[{ name: "Gallery", path: ROUTES.gallery }]}
        pageType="ImageGallery"
      />
      <PageHero
        breadcrumbs={[{ label: "Gallery" }]}
        eyebrow="Moments"
        title="Life inside our community"
        description="A visual window into care, celebration, service, and everyday belonging."
        primaryCta={{ label: "Visit Us", href: ROUTES.contact }}
        secondaryCta={{ label: "Volunteer", href: ROUTES.volunteer }}
      />

      <Section background="white">
        <SectionHeading
          align="center"
          eyebrow="Photo Stories"
          title="Care captured in everyday frames"
          description="Documentary moments from our home, outreach, and community celebrations."
        />
        <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <StaggerItem key={item.key}>
              <GalleryCard
                title={item.title}
                category={item.category}
                href={item.href}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <DonateCTA />
    </>
  );
}
