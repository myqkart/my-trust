import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div
      className="section-padding flex flex-1 items-center justify-center bg-background px-4 sm:px-6 lg:px-8"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="w-full max-w-md space-y-4">
        <Skeleton className="h-3 w-24 rounded-full" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-4 w-full rounded-full" />
        <Skeleton className="h-4 w-5/6 rounded-full" />
        <span className="sr-only">Preparing something meaningful...</span>
      </div>
    </div>
  );
}
