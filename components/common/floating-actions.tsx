"use client";

import Link from "next/link";
import { ArrowUp, HeartHandshake, MessageCircle } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";
import { useScroll } from "@/hooks/use-scroll";
import { scrollToTop } from "@/utils/scroll";
import { cn } from "@/utils/cn";

export function DonateFAB({ className }: { className?: string }) {
  return (
    <Link
      href={ROUTES.donate}
      className={cn(
        "inline-flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-[var(--shadow-soft-lg)] transition-transform duration-200 hover:-translate-y-1 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-14 sm:w-auto sm:gap-2 sm:px-6 sm:text-sm sm:font-semibold",
        className,
      )}
      aria-label="Support our mission"
    >
      <HeartHandshake className="size-5" aria-hidden />
      <span className="hidden sm:inline">Donate</span>
    </Link>
  );
}

export function WhatsAppButton({ className }: { className?: string }) {
  const href = siteConfig.whatsapp.startsWith("http")
    ? siteConfig.whatsapp
    : `https://wa.me/${siteConfig.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex size-14 items-center justify-center rounded-full bg-secondary text-white shadow-[var(--shadow-soft-lg)] transition-transform duration-200 hover:-translate-y-1 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}

export function ScrollTopButton({ className }: { className?: string }) {
  const { y } = useScroll();
  const visible = y > 480;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "inline-flex size-12 items-center justify-center rounded-full border border-border bg-white text-primary shadow-[var(--shadow-soft-md)] transition-all duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        visible
          ? "pointer-events-auto scale-100 opacity-100"
          : "pointer-events-none scale-90 opacity-0",
        className,
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>
  );
}

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed right-3 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <div className="pointer-events-auto">
        <ScrollTopButton />
      </div>
      <div className="pointer-events-auto">
        <WhatsAppButton />
      </div>
      <div className="pointer-events-auto md:hidden">
        <DonateFAB />
      </div>
    </div>
  );
}
