import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";

const chipVariants = cva(
  "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "border-border bg-white text-primary hover:bg-soft/40",
        selected: "border-accent bg-soft/50 text-primary",
        soft: "border-transparent bg-soft/60 text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {
  onRemove?: () => void;
}

export function Chip({
  className,
  variant,
  onRemove,
  children,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      className={cn(chipVariants({ variant }), className)}
      {...props}
    >
      <span>{children}</span>
      {onRemove ? (
        <span
          role="presentation"
          onClick={(event) => {
            event.stopPropagation();
            onRemove();
          }}
          className="rounded-full p-0.5 hover:bg-primary/10"
          aria-hidden
        >
          <X className="size-3.5" />
        </span>
      ) : null}
    </button>
  );
}

export { chipVariants };
