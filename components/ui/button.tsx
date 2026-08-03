import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-[var(--shadow-soft-sm)] hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[var(--shadow-soft-md)] active:translate-y-0",
        secondary:
          "border border-primary bg-white text-primary shadow-[var(--shadow-soft-sm)] hover:-translate-y-0.5 hover:bg-soft/30 hover:shadow-[var(--shadow-soft-md)] active:translate-y-0",
        outline:
          "border border-accent bg-transparent text-accent hover:-translate-y-0.5 hover:bg-soft/40 active:translate-y-0",
        ghost:
          "bg-transparent text-secondary hover:bg-soft/40 hover:text-primary active:bg-soft/60",
        link: "bg-transparent text-secondary hover:bg-soft/40 hover:text-primary active:bg-soft/60",
        gradient:
          "gradient-cta text-white shadow-[var(--shadow-soft-md)] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(74,127,167,0.35)] active:translate-y-0",
        destructive:
          "bg-error text-white shadow-[var(--shadow-soft-sm)] hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0",
      },
      size: {
        sm: "h-10 rounded-[14px] px-4 text-sm",
        md: "h-12 rounded-[var(--radius-button)] px-6 text-base",
        lg: "h-14 rounded-[var(--radius-button)] px-8 text-base",
        icon: "size-12 rounded-[var(--radius-button)]",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, fullWidth }), className)}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? <Loader2 className="animate-spin" aria-hidden /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
