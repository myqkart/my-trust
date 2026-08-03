import type { ReactNode } from "react";
import { AnalyticsProvider } from "@/providers/analytics-provider";
import { MotionProvider } from "@/providers/motion-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastViewport } from "@/components/ui/toast";
import { SplashScreen } from "@/components/animations/splash-screen";

interface AppProvidersProps {
  children: ReactNode;
}

/** Root provider composition for the application. */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <MotionProvider>
        <TooltipProvider delayDuration={200}>
          <ToastProvider>
            <AnalyticsProvider>
              <SplashScreen />
              {children}
              <ToastViewport />
            </AnalyticsProvider>
          </ToastProvider>
        </TooltipProvider>
      </MotionProvider>
    </ThemeProvider>
  );
}
