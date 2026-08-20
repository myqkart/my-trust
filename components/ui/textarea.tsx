import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-32 w-full rounded-[var(--radius-input)] border border-border bg-white px-4 py-3 text-base text-primary shadow-[var(--shadow-soft-sm)] transition-all duration-200 placeholder:text-[var(--neutral-grey-500)] placeholder:opacity-70 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-error focus-visible:ring-error/30",
          className,
        )}
        ref={ref}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
