/**
 * Typography scale from design.md.
 * Fonts: Plus Jakarta Sans (headings), Inter (body),
 * Space Grotesk (numbers), Cormorant Garamond (quotes).
 */
export const fontFamily = {
  heading: "var(--font-plus-jakarta)",
  body: "var(--font-inter)",
  number: "var(--font-space-grotesk)",
  quote: "var(--font-cormorant)",
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const fontSize = {
  hero: "72px",
  h1: "56px",
  h2: "44px",
  h3: "36px",
  h4: "30px",
  h5: "24px",
  bodyLarge: "20px",
  body: "18px",
  small: "16px",
  caption: "14px",
} as const;

export const lineHeight = {
  heading: "1.2",
  body: "1.7",
} as const;
