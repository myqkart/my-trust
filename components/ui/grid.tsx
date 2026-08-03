import { cn } from "@/utils/cn";

type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;

const columnClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12",
};

type GridGap = "none" | "sm" | "md" | "lg";

const gapClasses: Record<GridGap, string> = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6 md:gap-8",
  lg: "gap-8 md:gap-10",
};

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  columns?: GridColumns;
  gap?: GridGap;
  as?: "div" | "ul" | "ol";
}

export function Grid({
  columns = 3,
  gap = "md",
  as: Component = "div",
  className,
  children,
  ...props
}: GridProps) {
  return (
    <Component
      className={cn("grid w-full", columnClasses[columns], gapClasses[gap], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
