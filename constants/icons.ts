/**
 * Icon name registry for Lucide icons used across the app.
 * Prefer Lucide outline icons per design.md.
 */
export const ICONS = {
  donate: "HeartHandshake",
  volunteer: "HandHeart",
  home: "Home",
  phone: "Phone",
  mail: "Mail",
  mapPin: "MapPin",
  chevronDown: "ChevronDown",
  chevronRight: "ChevronRight",
  external: "ExternalLink",
  download: "Download",
  share: "Share2",
  search: "Search",
  menu: "Menu",
  close: "X",
  arrowRight: "ArrowRight",
  check: "Check",
  whatsapp: "MessageCircle",
} as const;

export type IconName = (typeof ICONS)[keyof typeof ICONS];
