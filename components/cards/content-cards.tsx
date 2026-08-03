import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/utils/cn";

export interface ProgramCardProps {
  title: string;
  summary: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  impact?: string;
  className?: string;
}

export function ProgramCard({
  title,
  summary,
  href,
  imageSrc,
  imageAlt,
  impact,
  className,
}: ProgramCardProps) {
  return (
    <Card
      as="article"
      padding="none"
      className={cn("group overflow-hidden", className)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-soft/40">
        {imageSrc ? (
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-secondary to-accent/70 text-white/80">
            <span className="px-6 text-center text-sm font-medium">{title}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <CardHeader className="mb-3">
          {impact ? <Badge variant="soft">{impact}</Badge> : null}
          <CardTitle className="mt-2">{title}</CardTitle>
          <CardDescription>{summary}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild variant="link" size="sm" className="-ml-4">
            <Link href={href}>
              Learn More
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export interface StoryCardProps {
  name: string;
  quote: string;
  summary: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function StoryCard({
  name,
  quote,
  summary,
  href,
  imageSrc,
  imageAlt,
  className,
}: StoryCardProps) {
  return (
    <Card as="article" className={cn("flex h-full flex-col", className)}>
      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[var(--radius-image)] bg-soft/40">
        {imageSrc ? (
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt ?? name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        ) : null}
      </div>
      <CardContent className="flex flex-1 flex-col">
        <blockquote className="font-quote text-xl text-primary italic">
          “{quote}”
        </blockquote>
        <p className="mt-4 text-muted">{summary}</p>
        <p className="mt-auto pt-6 font-semibold text-secondary">{name}</p>
        <Button asChild variant="link" size="sm" className="mt-3 w-fit -ml-4">
          <Link href={href}>
            Read Their Stories
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export interface GalleryCardProps {
  title: string;
  category: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function GalleryCard({
  title,
  category,
  href,
  imageSrc,
  imageAlt,
  className,
}: GalleryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-[var(--radius-image)] bg-soft/40",
        className,
      )}
    >
      <div className="relative aspect-[4/5]">
        {imageSrc ? (
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-primary to-accent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <Badge variant="soft" className="mb-2 bg-white/20 text-white">
            {category}
          </Badge>
          <p className="font-heading text-lg font-semibold">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export interface EventCardProps {
  title: string;
  summary: string;
  dateLabel: string;
  location: string;
  href: string;
  className?: string;
}

export function EventCard({
  title,
  summary,
  dateLabel,
  location,
  href,
  className,
}: EventCardProps) {
  return (
    <Card as="article" className={className}>
      <CardHeader>
        <Badge variant="accent">{dateLabel}</Badge>
        <CardTitle className="mt-3">{title}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted">{location}</p>
      </CardContent>
      <CardFooter>
        <Button asChild size="sm">
          <Link href={href}>View Event</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  className,
}: TestimonialCardProps) {
  return (
    <Card variant="soft" className={cn("h-full", className)} as="article">
      <blockquote>
        <p className="font-quote text-lg text-primary italic sm:text-xl">“{quote}”</p>
        <footer className="mt-6">
          <p className="font-semibold text-primary">{name}</p>
          <p className="text-sm text-muted">{role}</p>
        </footer>
      </blockquote>
    </Card>
  );
}

export interface StatisticCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function StatisticCard({
  value,
  label,
  description,
  className,
}: StatisticCardProps) {
  return (
    <Card variant="elevated" padding="sm" className={cn("text-center sm:p-6", className)}>
      <p className="font-number text-2xl font-bold text-primary sm:text-4xl md:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-semibold text-secondary sm:text-base">{label}</p>
      {description ? (
        <p className="mt-2 text-xs text-muted sm:text-sm">{description}</p>
      ) : null}
    </Card>
  );
}

export interface TrustBadgeProps {
  label: string;
  description?: string;
  className?: string;
}

export function TrustBadge({ label, description, className }: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border/70 bg-white px-3 py-3 text-center shadow-[var(--shadow-soft-sm)] sm:px-4 sm:py-4",
        className,
      )}
    >
      <p className="text-sm font-semibold text-primary sm:text-base">{label}</p>
      {description ? (
        <p className="mt-1 text-xs text-muted sm:text-sm">{description}</p>
      ) : null}
    </div>
  );
}
