import { Skeleton } from "@/components/ui/skeleton";
import { Section } from "@/components/ui/section";

/** Lightweight placeholder while below-fold sections hydrate. */
export function SectionSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <Section background="white" aria-hidden>
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Skeleton className="mx-auto h-3 w-24 rounded-full" />
        <Skeleton className="mx-auto h-10 w-2/3" />
        <Skeleton className="mx-auto h-4 w-full max-w-xl" />
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: rows }).map((_, index) => (
          <Skeleton key={index} className="aspect-[4/3] w-full" />
        ))}
      </div>
    </Section>
  );
}
