"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";
import type { NavChild } from "@/config/navigation";

interface MegaMenuProps {
  items: NavChild[];
  open: boolean;
  onClose: () => void;
  light?: boolean;
}

export function MegaMenu({ items, open, onClose, light }: MegaMenuProps) {
  if (!open) return null;

  return (
    <div
      className={cn(
        "absolute top-full left-1/2 z-50 mt-3 w-[min(100vw-2rem,28rem)] -translate-x-1/2 rounded-[var(--radius-floating)] border p-3 shadow-[var(--shadow-soft-lg)]",
        light
          ? "border-white/15 bg-primary/95 text-white backdrop-blur-xl"
          : "border-border/70 bg-white/95 text-primary backdrop-blur-xl",
      )}
      role="menu"
      onMouseLeave={onClose}
    >
      <ul className="grid gap-1">
        {items.map((item) => (
          <li key={item.href} role="none">
            <Link
              href={item.href}
              role="menuitem"
              onClick={onClose}
              className={cn(
                "block rounded-[var(--radius-card)] px-4 py-3 transition-colors duration-200",
                light ? "hover:bg-white/10" : "hover:bg-soft/50",
              )}
            >
              <span className="block font-semibold">{item.label}</span>
              {item.description ? (
                <span
                  className={cn(
                    "mt-1 block text-sm",
                    light ? "text-white/70" : "text-muted",
                  )}
                >
                  {item.description}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
