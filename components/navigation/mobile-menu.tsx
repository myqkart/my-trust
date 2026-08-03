"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/navigation/nav-link";
import {
  ctaNavigation,
  type NavItem,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] bg-primary/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        !open && "invisible",
      )}
      aria-hidden={!open}
      inert={!open ? true : undefined}
      onClick={onClose}
    >
      <div
        className={cn(
          "absolute inset-y-0 right-0 flex h-full w-full max-w-md flex-col bg-white shadow-[var(--shadow-soft-lg)] transition-transform duration-300",
          "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
          <Link
            href="/"
            onClick={onClose}
            className="font-heading text-lg font-bold text-primary"
          >
            {siteConfig.shortName}
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-[14px] text-muted transition-colors hover:bg-soft/50 hover:text-primary"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 sm:py-6" aria-label="Mobile">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-[14px] px-3 py-3.5 text-base after:hidden"
                >
                  {item.label}
                </NavLink>
                {item.children ? (
                  <ul className="mt-1 mb-3 ml-3 space-y-1 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block rounded-[12px] px-3 py-2.5 text-sm text-muted transition-colors hover:bg-soft/40 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-border p-5 sm:p-6">
          <Button asChild fullWidth>
            <Link href={ctaNavigation.donate.href} onClick={onClose}>
              {ctaNavigation.donate.label}
            </Link>
          </Button>
          <Button asChild variant="secondary" fullWidth>
            <Link href={ctaNavigation.volunteer.href} onClick={onClose}>
              {ctaNavigation.volunteer.label}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
