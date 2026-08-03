"use client";

import { X } from "lucide-react";
import { cn } from "@/utils/cn";
import { useToast, type ToastItem } from "@/providers/toast-provider";

const variantStyles: Record<ToastItem["variant"], string> = {
  success: "border-success/30 bg-white text-primary",
  info: "border-info/30 bg-white text-primary",
  warning: "border-warning/30 bg-white text-primary",
  error: "border-error/30 bg-white text-primary",
};

const accentStyles: Record<ToastItem["variant"], string> = {
  success: "bg-success",
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
};

export function ToastViewport() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed right-4 bottom-4 z-[70] flex w-full max-w-sm flex-col gap-3"
      aria-live="polite"
      aria-relevant="additions"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "pointer-events-auto relative overflow-hidden rounded-[var(--radius-card)] border p-4 shadow-[var(--shadow-soft-md)]",
            variantStyles[toast.variant],
          )}
          role="status"
        >
          <span
            className={cn(
              "absolute top-0 left-0 h-full w-1",
              accentStyles[toast.variant],
            )}
            aria-hidden
          />
          <div className="flex items-start justify-between gap-3 pl-2">
            <div>
              <p className="font-semibold">{toast.title}</p>
              {toast.description ? (
                <p className="mt-1 text-sm text-muted">{toast.description}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => dismiss(toast.id)}
              className="rounded-[10px] p-1 text-muted transition-colors hover:bg-soft/50 hover:text-primary"
              aria-label="Dismiss notification"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
