import { cn } from "@/utils/cn";
import { containerPaddingClass } from "@/styles/theme/spacing";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-[680px]",
  md: "max-w-[760px]",
  lg: "max-w-[1280px]",
  xl: "max-w-[1440px]",
  full: "max-w-none",
};

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  size?: ContainerSize;
  padding?: boolean;
  center?: boolean;
  fluid?: boolean;
  as?: "div" | "section" | "main" | "article";
}

export function Container({
  size = "lg",
  padding = true,
  center = true,
  fluid = false,
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full",
        !fluid && sizeClasses[size],
        center && "mx-auto",
        padding && containerPaddingClass,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
