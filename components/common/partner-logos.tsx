import { cn } from "@/utils/cn";

interface Partner {
  name: string;
}

interface PartnerLogosProps {
  partners: Partner[];
  className?: string;
}

/** Infinite-feel logo strip; names are placeholders until verified assets exist. */
export function PartnerLogos({ partners, className }: PartnerLogosProps) {
  const loop = [...partners, ...partners];

  return (
    <div className={cn("overflow-hidden", className)} aria-label="Partners">
      <ul className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 motion-reduce:animate-none">
        {loop.map((partner, index) => (
          <li
            key={`${partner.name}-${index}`}
            className="flex h-16 min-w-40 items-center justify-center rounded-[var(--radius-card)] border border-border/60 bg-white px-6 text-sm font-semibold text-secondary shadow-[var(--shadow-soft-sm)]"
          >
            {partner.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
