import { cn } from "@/utils/cn";
import { Stack } from "@/components/ui/stack";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  align = "left",
  className,
  as: Tag = "h2",
  light = false,
}: SectionHeadingProps) {
  return (
    <Stack
      gap="md"
      align={align === "center" ? "center" : "start"}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold tracking-[0.08em] uppercase",
            light ? "text-soft" : "text-secondary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-heading text-balance text-[1.75rem] font-bold sm:text-4xl lg:text-[44px]",
          light ? "text-white" : "text-primary",
        )}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p
          className={cn(
            "text-xl font-medium",
            light ? "text-soft" : "text-secondary",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      {description ? (
        <p
          className={cn(
            "text-base sm:text-lg",
            light ? "text-white/80" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </Stack>
  );
}

export function Eyebrow({
  className,
  light,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { light?: boolean }) {
  return (
    <p
      className={cn(
        "text-sm font-semibold tracking-[0.08em] uppercase",
        light ? "text-soft" : "text-secondary",
        className,
      )}
      {...props}
    />
  );
}

export function GradientText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Quote({
  className,
  children,
  cite,
  ...props
}: React.BlockquoteHTMLAttributes<HTMLQuoteElement> & { cite?: string }) {
  return (
    <blockquote
      className={cn(
        "font-quote border-l-4 border-accent pl-4 text-xl italic leading-relaxed text-primary sm:pl-6 sm:text-2xl md:text-3xl",
        className,
      )}
      {...props}
    >
      {children}
      {cite ? (
        <footer className="mt-4 font-sans text-base not-italic text-muted">
          — {cite}
        </footer>
      ) : null}
    </blockquote>
  );
}

export function Caption({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted", className)} {...props} />;
}

export function StatisticNumber({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "font-number text-4xl font-bold tracking-tight text-primary md:text-5xl",
        className,
      )}
      {...props}
    />
  );
}
