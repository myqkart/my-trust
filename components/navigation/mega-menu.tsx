"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";
import type { NavChild } from "@/config/navigation";

interface MegaMenuProps {
  items: NavChild[];
  open: boolean;
  onClose: () => void;
}

export function MegaMenu({ items, open, onClose }: MegaMenuProps) {
  if (!open) return null;

  return (
    <div
      className="absolute top-full left-1/2 z-50 w-[min(100vw-2rem,22rem)] -translate-x-1/2 pt-2"
      role="menu"
    >
      <div
        className={cn(
          "rounded-[1.25rem] border border-border/70 bg-white p-2 text-primary",
          "shadow-[var(--shadow-soft-lg)]",
        )}
      >
        <ul className="grid gap-0.5">
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                onClick={onClose}
                className="block rounded-[14px] px-3.5 py-2.5 transition-colors duration-150 hover:bg-soft/60"
              >
                <span className="block text-sm font-semibold text-primary">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted">
                    {item.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
