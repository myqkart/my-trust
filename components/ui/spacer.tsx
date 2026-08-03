import { cn } from "@/utils/cn";

type SpacerSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

const sizeClasses: Record<SpacerSize, string> = {
  xs: "h-2 w-2",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
  "2xl": "h-16 w-16",
  "3xl": "h-[var(--space-30)] w-[var(--space-30)]",
};

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpacerSize;
  axis?: "x" | "y" | "both";
}

export function Spacer({
  size = "md",
  axis = "y",
  className,
  ...props
}: SpacerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "shrink-0",
        axis === "y" && "w-px",
        axis === "x" && "h-px",
        sizeClasses[size],
        axis === "y" && size === "xs" && "h-2",
        axis === "y" && size === "sm" && "h-4",
        axis === "y" && size === "md" && "h-6",
        axis === "y" && size === "lg" && "h-8",
        axis === "y" && size === "xl" && "h-12",
        axis === "y" && size === "2xl" && "h-16",
        axis === "y" && size === "3xl" && "h-[var(--space-30)]",
        axis === "x" && size === "xs" && "w-2",
        axis === "x" && size === "sm" && "w-4",
        axis === "x" && size === "md" && "w-6",
        axis === "x" && size === "lg" && "w-8",
        axis === "x" && size === "xl" && "w-12",
        axis === "x" && size === "2xl" && "w-16",
        axis === "x" && size === "3xl" && "w-[var(--space-30)]",
        className,
      )}
      {...props}
    />
  );
}
