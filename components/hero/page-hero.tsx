import { Hero, type HeroProps } from "@/components/hero/hero";
import type { BreadcrumbItem } from "@/components/navigation/breadcrumb";

interface PageHeroProps extends Omit<HeroProps, "compact" | "breadcrumbs"> {
  breadcrumbs: BreadcrumbItem[];
}

/** Compact interior-page hero with breadcrumbs. */
export function PageHero({ breadcrumbs, ...props }: PageHeroProps) {
  return <Hero compact breadcrumbs={breadcrumbs} {...props} />;
}
