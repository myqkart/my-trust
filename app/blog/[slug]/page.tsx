import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { CenteredLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo/metadata";
import { articleSchema } from "@/lib/seo/json-ld";
import { ROUTES } from "@/constants/routes";
import { blogPosts } from "@/data/pages";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `${ROUTES.blog}/${post.slug}`,
    keywords: [post.category, "Navchetna Charitable Trust"],
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const path = `${ROUTES.blog}/${post.slug}`;

  return (
    <>
      <PageJsonLd
        title={post.title}
        description={post.excerpt}
        path={path}
        breadcrumbs={[
          { name: "Blog", path: ROUTES.blog },
          { name: post.title, path },
        ]}
        extras={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path,
            datePublished: post.publishedAt,
            category: post.category,
          }),
        ]}
      />
      <PageHero
        breadcrumbs={[
          { label: "Blog", href: ROUTES.blog },
          { label: post.title },
        ]}
        eyebrow={post.category}
        title={post.title}
        description={`${post.publishedAt} · ${post.readingTime} read`}
      />

      <CenteredLayout narrow>
        <article className="space-y-6 text-lg leading-relaxed text-muted">
          <p>{post.excerpt}</p>
          <p>
            At Navchetna Charitable Trust, we share practical insights drawn from
            education support, food distribution, gau seva, helping the poor,
            and tree plantation in Ahmedabad. This article expands on {post.category.toLowerCase()} with
            guidance rooted in service and humanity.
          </p>
          <p>
            If this topic resonates, we invite you to visit, volunteer, or
            support this work—so learning becomes action.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <Link href={ROUTES.donate}>Donate</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={ROUTES.blog}>Back to Blog</Link>
            </Button>
          </div>
        </article>
      </CenteredLayout>

      <DonateCTA />
    </>
  );
}
