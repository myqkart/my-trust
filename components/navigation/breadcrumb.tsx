import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean;
}

export function Breadcrumb({ items, className, light = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-4", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            className={cn(
              "transition-colors hover:underline",
              light ? "text-white/70 hover:text-white" : "text-muted hover:text-primary",
            )}
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <ChevronRight
                className={cn(
                  "size-3.5",
                  light ? "text-white/50" : "text-border",
                )}
                aria-hidden
              />
              {isLast || !item.href ? (
                <span
                  aria-current="page"
                  className={cn(
                    "font-medium",
                    light ? "text-white" : "text-primary",
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors hover:underline",
                    light
                      ? "text-white/70 hover:text-white"
                      : "text-muted hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
