import { cn } from "@/utils/cn";

export interface TimelineItemData {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItemData[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol
      className={cn(
        "relative space-y-10 pl-10 md:space-y-12 md:pl-0",
        className,
      )}
    >
      <span
        className="absolute top-2 bottom-2 left-4 w-px bg-accent/40 md:left-1/2 md:-translate-x-px"
        aria-hidden
      />
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <li
            key={`${item.year}-${item.title}`}
            className="relative grid gap-4 md:grid-cols-2 md:gap-12"
          >
            <div
              className={cn(
                "md:text-right",
                !isEven && "md:col-start-2 md:text-left",
              )}
            >
              <p className="font-number text-sm font-semibold tracking-wide text-secondary uppercase">
                {item.year}
              </p>
              <h3 className="font-heading mt-2 text-xl font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-muted">{item.description}</p>
            </div>
            {/* Mobile: sit on spine in the gutter; md: center of split layout */}
            <span
              className="absolute top-2 -left-6 size-3 -translate-x-1/2 rounded-full border-2 border-white bg-accent shadow-[var(--shadow-soft-sm)] md:left-1/2"
              aria-hidden
            />
          </li>
        );
      })}
    </ol>
  );
}
