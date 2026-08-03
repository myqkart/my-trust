import { cn } from "@/utils/cn";

type FlexGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";

const gapClasses: Record<FlexGap, string> = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  gap?: FlexGap;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around";
  wrap?: boolean;
  direction?: "row" | "col";
  as?: "div" | "nav" | "ul" | "ol";
}

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
} as const;

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
} as const;

export function Flex({
  gap = "md",
  align = "center",
  justify = "start",
  wrap = false,
  direction = "row",
  as: Component = "div",
  className,
  children,
  ...props
}: FlexProps) {
  return (
    <Component
      className={cn(
        "flex",
        direction === "col" ? "flex-col" : "flex-row",
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
