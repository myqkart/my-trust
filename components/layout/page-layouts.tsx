import { cn } from "@/utils/cn";
import { Container } from "@/components/ui/container";
import { sectionSpacingClass } from "@/styles/theme/spacing";

interface SplitLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean;
  className?: string;
  align?: "start" | "center";
}

/** Two-column editorial split for about/story sections. */
export function SplitLayout({
  left,
  right,
  reverse = false,
  className,
  align = "center",
}: SplitLayoutProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        align === "start" && "items-start",
        reverse && "lg:[&>*:first-child]:order-2",
        className,
      )}
    >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

interface CenteredLayoutProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

/** Centered reading-width layout for legal/longform pages. */
export function CenteredLayout({
  children,
  className,
  narrow = false,
}: CenteredLayoutProps) {
  return (
    <Container
      size={narrow ? "sm" : "md"}
      className={cn(sectionSpacingClass.lg, className)}
    >
      <div className={cn(narrow ? "reading-width mx-auto" : "content-width mx-auto")}>
        {children}
      </div>
    </Container>
  );
}
