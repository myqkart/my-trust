/**
 * Brand & semantic color tokens from design.md.
 * Never invent colors — import from here or CSS variables.
 */
export const colors = {
  brand: {
    primary: "#0A1931",
    secondary: "#1A3D63",
    accent: "#4A7FA7",
    soft: "#B3CFE5",
    background: "#F6FAFD",
  },
  neutral: {
    black: "#111827",
    grey900: "#1F2937",
    grey700: "#374151",
    grey500: "#6B7280",
    grey300: "#D1D5DB",
    grey100: "#F3F4F6",
    white: "#FFFFFF",
  },
  semantic: {
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
  glass: {
    background: "rgba(255, 255, 255, 0.15)",
    border: "rgba(255, 255, 255, 0.2)",
  },
  overlay: {
    premiumStart: "rgba(10, 25, 49, 0.92)",
    premiumEnd: "rgba(26, 61, 99, 0.82)",
  },
} as const;

export type BrandColor = keyof typeof colors.brand;
export type SemanticColor = keyof typeof colors.semantic;
