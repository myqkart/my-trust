import Link from "next/link";
import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { blogPosts } from "@/data/pages";
import { media } from "@/data/media";

const blogDescription =
  "Articles on education, community seva, environment, and elder care from Navchetna Charitable Trust.";

export const metadata = createPageMetadata({
  title: "Blog",
  description: blogDescription,
  path: ROUTES.blog,
  keywords: ["Education Programs", "Community Impact", "Elder Care"],
});

export default function BlogPage() {
  return (
    <>
      <PageJsonLd
        title="Blog"
        description={blogDescription}
        path={ROUTES.blog}
        breadcrumbs={[{ name: "Blog", path: ROUTES.blog }]}
        pageType="CollectionPage"
      />
      <PageHero
        breadcrumbs={[{ label: "Blog" }]}
        eyebrow="Insights"
        title="Stories, guidance, and community learning"
        description="Short reads that deepen understanding of elder care and service."
        primaryCta={{ label: "Subscribe via Contact", href: ROUTES.contact }}
      />

      <Section background="white">
        <SectionHeading
          align="center"
          eyebrow="Latest"
          title="From our editorial desk"
        />
        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Card padding="none" className="flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] bg-soft/40">
                  <OptimizedImage
                    src={
                      media.blog[post.slug as keyof typeof media.blog] ??
                      media.featuredStory
                    }
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="soft" className="w-fit">
                    {post.category}
                  </Badge>
                  <CardTitle className="mt-3">{post.title}</CardTitle>
                  <p className="mt-3 flex-1 text-muted">{post.excerpt}</p>
                  <p className="mt-4 text-sm text-muted">
                    {post.publishedAt} · {post.readingTime}
                  </p>
                  <Button asChild variant="link" size="sm" className="mt-4 w-fit -ml-4">
                    <Link href={`${ROUTES.blog}/${post.slug}`}>Read Article</Link>
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <DonateCTA />
    </>
  );
}
