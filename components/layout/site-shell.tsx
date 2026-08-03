import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { ScrollToTop } from "@/components/navigation/scroll-to-top";

const PageProgress = dynamic(
  () =>
    import("@/components/navigation/page-progress").then((mod) => mod.PageProgress),
  { loading: () => null },
);

const StickyCTA = dynamic(
  () =>
    import("@/components/layout/sticky-cta").then((mod) => mod.StickyCTA),
  { loading: () => null },
);

const FloatingActions = dynamic(
  () =>
    import("@/components/common/floating-actions").then(
      (mod) => mod.FloatingActions,
    ),
  { loading: () => null },
);

interface SiteShellProps {
  children: ReactNode;
}

/** Global chrome: progress, header, main, footer, sticky CTA, floating actions. */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <ScrollToTop />
      <PageProgress />
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col overflow-x-clip">
        {children}
      </main>
      <Footer />
      <StickyCTA />
      <FloatingActions />
    </>
  );
}
