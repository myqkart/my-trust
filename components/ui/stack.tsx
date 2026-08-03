import { cn } from "@/utils/cn";

type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";

const gapClasses: Record<StackGap, string> = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  gap?: StackGap;
  align?: "start" | "center" | "end" | "stretch";
  as?: "div" | "ul" | "ol" | "section";
}

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

export function Stack({
  gap = "md",
  align = "stretch",
  as: Component = "div",
  className,
  children,
  ...props
}: StackProps) {
  return (
    <Component
      className={cn(
        "flex flex-col",
        gapClasses[gap],
        alignClasses[align],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
