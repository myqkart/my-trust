"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MegaMenu } from "@/components/navigation/mega-menu";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { NavLink } from "@/components/navigation/nav-link";
import {
  ctaNavigation,
  mainNavigation,
  moreNavigation,
  primaryNavigation,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useOverHero } from "@/hooks/use-over-hero";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/utils/cn";

export function Navbar() {
  const { y, direction } = useScroll();
  const overHero = useOverHero(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const moreMenuId = useId();

  // Solid / floating only after leaving the hero — not after a few pixels.
  const elevated = !overHero;
  const compact = elevated && y > 8;
  // Hide-on-scroll only once past the hero, never on first paint over it.
  const hidden =
    elevated && direction === "down" && y > 160 && !mobileOpen && !programsOpen && !moreOpen;
  const light = overHero;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!moreOpen && !programsOpen) return;
    const onPointer = (event: MouseEvent) => {
      const target = event.target as Node;
      if (moreOpen && !moreRef.current?.contains(target)) {
        setMoreOpen(false);
      }
      if (programsOpen && !programsRef.current?.contains(target)) {
        setProgramsOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMoreOpen(false);
        setProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen, programsOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[transform,padding] duration-300 ease-out",
          hidden ? "-translate-y-full" : "translate-y-0",
          compact ? "px-3 pt-3 md:px-4" : "px-0 pt-0",
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-300 ease-out",
            compact
              ? "max-w-[1280px] rounded-[1.25rem] border border-border/60 bg-white/85 shadow-[var(--shadow-soft-md)] backdrop-blur-xl"
              : light
                ? "border-b border-transparent bg-transparent backdrop-blur-[2px]"
                : "border-b border-border/50 bg-white/80 shadow-[var(--shadow-soft-sm)] backdrop-blur-xl",
          )}
        >
          <Container
            className={cn(
              "flex items-center justify-between gap-4 transition-[height] duration-300",
              compact ? "h-14" : "h-16 md:h-20",
            )}
          >
            <Link
              href="/"
              className={cn(
                "font-heading group flex min-w-0 shrink items-center gap-2 transition-colors sm:gap-2.5",
                light ? "text-white" : "text-primary",
              )}
            >
              <span
                className={cn(
                  "grid size-9 shrink-0 place-items-center rounded-xl text-sm font-bold tracking-tight transition-transform duration-300 group-hover:scale-105",
                  light
                    ? "bg-white/15 text-white ring-1 ring-white/25"
                    : "bg-primary text-white shadow-[var(--shadow-soft-sm)]",
                )}
                aria-hidden
              >
                NC
              </span>
              <span className="truncate text-base font-bold tracking-tight sm:text-lg md:text-xl">
                {siteConfig.shortName}
              </span>
            </Link>

            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Primary"
            >
              {primaryNavigation.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    ref={programsRef}
                    className="relative"
                    onMouseEnter={() => {
                      setProgramsOpen(true);
                      setMoreOpen(false);
                    }}
                    onMouseLeave={() => setProgramsOpen(false)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                        light
                          ? "text-white/85 hover:bg-white/10 hover:text-white"
                          : "text-muted hover:bg-soft/60 hover:text-primary",
                        programsOpen && (light ? "bg-white/10 text-white" : "bg-soft/60 text-primary"),
                      )}
                      aria-expanded={programsOpen}
                      aria-haspopup="menu"
                      onClick={() => setProgramsOpen((open) => !open)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          programsOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    <MegaMenu
                      items={item.children}
                      open={programsOpen}
                      onClose={() => setProgramsOpen(false)}
                    />
                  </div>
                ) : (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    light={light}
                    className={cn(
                      "rounded-full px-3 py-2 after:hidden",
                      light ? "hover:bg-white/10" : "hover:bg-soft/60",
                    )}
                  >
                    {item.label}
                  </NavLink>
                ),
              )}

              <div
                className="relative"
                ref={moreRef}
                onMouseEnter={() => {
                  setMoreOpen(true);
                  setProgramsOpen(false);
                }}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                    light
                      ? "text-white/85 hover:bg-white/10 hover:text-white"
                      : "text-muted hover:bg-soft/60 hover:text-primary",
                    moreOpen && (light ? "bg-white/10 text-white" : "bg-soft/60 text-primary"),
                  )}
                  aria-expanded={moreOpen}
                  aria-controls={moreMenuId}
                  aria-haspopup="menu"
                  onClick={() => {
                    setMoreOpen((open) => !open);
                    setProgramsOpen(false);
                  }}
                >
                  More
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      moreOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {moreOpen ? (
                  <div
                    id={moreMenuId}
                    role="menu"
                    className="absolute top-full right-0 z-50 w-56 pt-2"
                  >
                    <div className="overflow-hidden rounded-[1.25rem] border border-border/70 bg-white p-2 text-primary shadow-[var(--shadow-soft-lg)]">
                      {moreNavigation.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setMoreOpen(false)}
                          className="block rounded-[14px] px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-soft/60"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <Button
                asChild
                size="sm"
                variant={light ? "secondary" : "primary"}
                className={cn(
                  "hidden md:inline-flex",
                  light &&
                    "bg-white text-primary hover:bg-white/90 hover:text-primary",
                )}
              >
                <Link href={ctaNavigation.donate.href}>
                  {ctaNavigation.donate.label}
                </Link>
              </Button>
              <button
                type="button"
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-[var(--radius-button)] transition-colors lg:hidden",
                  light
                    ? "text-white hover:bg-white/10"
                    : "text-primary hover:bg-soft/50",
                )}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="size-5" />
              </button>
            </div>
          </Container>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={mainNavigation}
      />
    </>
  );
}
