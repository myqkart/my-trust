"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  light?: boolean;
}

export function NavLink({
  href,
  children,
  className,
  onClick,
  light = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative text-sm font-semibold transition-colors duration-200",
        light
          ? active
            ? "text-white"
            : "text-white/80 hover:text-white"
          : active
            ? "text-primary"
            : "text-muted hover:text-primary",
        "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100",
        active && "after:scale-x-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
