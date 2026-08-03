import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const cardVariants = cva(
  "rounded-[var(--radius-card)] transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border border-border/60 bg-white shadow-[var(--shadow-soft-sm)] hover:-translate-y-2 hover:shadow-[var(--shadow-soft-md)]",
        soft: "bg-soft/40 shadow-none hover:-translate-y-1",
        glass:
          "glass border border-white/20 bg-white/15 shadow-[var(--shadow-soft-sm)]",
        outline: "border border-border bg-transparent",
        elevated:
          "bg-white shadow-[var(--shadow-soft-md)] hover:-translate-y-2 hover:shadow-[var(--shadow-soft-lg)]",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof cardVariants> {
  as?: "div" | "article" | "li" | "section";
}

export function Card({
  className,
  variant,
  padding,
  as: Component = "div",
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 space-y-2", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-heading text-xl font-semibold text-primary",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-muted", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-3", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-6 flex items-center gap-3", className)} {...props} />
  );
}

export { cardVariants };
