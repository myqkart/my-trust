import { cn } from "@/utils/cn";
import {
  containerPaddingClass,
  sectionSpacingClass,
} from "@/styles/theme/spacing";

type SectionBackground =
  | "default"
  | "white"
  | "soft"
  | "primary"
  | "secondary"
  | "gradient"
  | "transparent";

type SectionSpacing = keyof typeof sectionSpacingClass;

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-background",
  white: "bg-white",
  soft: "bg-soft/30",
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  gradient: "bg-[image:var(--gradient-section)]",
  transparent: "bg-transparent",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: SectionBackground;
  spacing?: SectionSpacing;
  container?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  as?: "section" | "div" | "aside";
}

export function Section({
  background = "default",
  spacing = "lg",
  container = true,
  containerSize = "lg",
  as: Component = "section",
  className,
  children,
  ...props
}: SectionProps) {
  const sizeClasses = {
    sm: "max-w-[680px]",
    md: "max-w-[760px]",
    lg: "max-w-[1280px]",
    xl: "max-w-[1440px]",
    full: "max-w-none",
  };

  return (
    <Component
      className={cn(
        "relative w-full",
        backgroundClasses[background],
        !container && sectionSpacingClass[spacing],
        className,
      )}
      {...props}
    >
      {container ? (
        <div
          className={cn(
            "relative z-[1] mx-auto w-full",
            containerPaddingClass,
            sectionSpacingClass[spacing],
            sizeClasses[containerSize],
          )}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
}
