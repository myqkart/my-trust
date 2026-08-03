import { cn } from "@/utils/cn";
import { Container } from "@/components/ui/container";
import { sectionSpacingClass } from "@/styles/theme/spacing";

interface ContentLayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  sidebarPosition?: "left" | "right";
  stickySidebar?: boolean;
}

/** Page content with optional sidebar. */
export function ContentLayout({
  children,
  sidebar,
  sidebarPosition = "right",
  stickySidebar = true,
  className,
  ...props
}: ContentLayoutProps) {
  if (!sidebar) {
    return (
      <Container className={cn(sectionSpacingClass.lg, className)} {...props}>
        {children}
      </Container>
    );
  }

  return (
    <Container
      className={cn(
        "grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12",
        sectionSpacingClass.lg,
        sidebarPosition === "left" && "lg:grid-cols-[280px_minmax(0,1fr)]",
        className,
      )}
      {...props}
    >
      {sidebarPosition === "left" ? (
        <>
          <aside
            className={cn(stickySidebar && "lg:sticky lg:top-28 lg:self-start")}
          >
            {sidebar}
          </aside>
          <div>{children}</div>
        </>
      ) : (
        <>
          <div>{children}</div>
          <aside
            className={cn(stickySidebar && "lg:sticky lg:top-28 lg:self-start")}
          >
            {sidebar}
          </aside>
        </>
      )}
    </Container>
  );
}

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

interface AlternatingLayoutProps {
  items: Array<{
    id: string;
    content: React.ReactNode;
    media: React.ReactNode;
  }>;
  className?: string;
}

/** Alternating media/content rows for storytelling. */
export function AlternatingLayout({
  items,
  className,
}: AlternatingLayoutProps) {
  return (
    <div className={cn("space-y-16 md:space-y-24", className)}>
      {items.map((item, index) => (
        <SplitLayout
          key={item.id}
          reverse={index % 2 === 1}
          left={index % 2 === 0 ? item.media : item.content}
          right={index % 2 === 0 ? item.content : item.media}
        />
      ))}
    </div>
  );
}

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function Sidebar({ children, className, title }: SidebarProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border/70 bg-white p-6 shadow-[var(--shadow-soft-sm)]",
        className,
      )}
    >
      {title ? (
        <h2 className="font-heading mb-4 text-lg font-semibold text-primary">
          {title}
        </h2>
      ) : null}
      {children}
    </div>
  );
}

interface StickyPanelProps {
  children: React.ReactNode;
  className?: string;
  top?: string;
}

export function StickyPanel({
  children,
  className,
  top = "7rem",
}: StickyPanelProps) {
  return (
    <div
      className={cn("lg:sticky lg:self-start", className)}
      style={{ top }}
    >
      {children}
    </div>
  );
}
