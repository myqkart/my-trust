import { ROUTES } from "@/constants/routes";
import { programsInfo } from "@/data/demo";

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const programChildren: NavChild[] = programsInfo.slice(0, 4).map((program) => ({
  label: program.title,
  href: program.href,
  description: program.summary,
}));

/** Always-visible desktop links (keeps the bar calm and modern). */
export const primaryNavigation: NavItem[] = [
  { label: "About", href: ROUTES.about },
  {
    label: "Programs",
    href: ROUTES.programs,
    children: programChildren,
  },
  { label: "Impact", href: ROUTES.impact },
  { label: "Stories", href: ROUTES.stories },
  { label: "Volunteer", href: ROUTES.volunteer },
];

/** Secondary links grouped under “More” on desktop. */
export const moreNavigation: NavItem[] = [
  { label: "Gallery", href: ROUTES.gallery },
  { label: "Events", href: ROUTES.events },
  { label: "Reports", href: ROUTES.reports },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.contact },
];

/** Full navigation for mobile drawers and sitemaps. */
export const mainNavigation: NavItem[] = [
  ...primaryNavigation,
  ...moreNavigation,
];

export const ctaNavigation = {
  donate: { label: "Support Our Mission", href: ROUTES.donate },
  volunteer: { label: "Become a Volunteer", href: ROUTES.volunteer },
} as const;

export const footerNavigation = {
  explore: [
    { label: "About", href: ROUTES.about },
    { label: "Programs", href: ROUTES.programs },
    { label: "Old Age Home", href: ROUTES.oldAgeHome },
    { label: "Impact", href: ROUTES.impact },
    { label: "Stories", href: ROUTES.stories },
  ],
  getInvolved: [
    { label: "Donate", href: ROUTES.donate },
    { label: "Volunteer", href: ROUTES.volunteer },
    { label: "Events", href: ROUTES.events },
    { label: "Contact", href: ROUTES.contact },
  ],
  transparency: [
    { label: "Reports", href: ROUTES.reports },
    { label: "Gallery", href: ROUTES.gallery },
    { label: "Blog", href: ROUTES.blog },
  ],
  legal: [
    { label: "Privacy Policy", href: ROUTES.privacy },
    { label: "Terms of Use", href: ROUTES.terms },
    { label: "Refund Policy", href: ROUTES.refund },
    { label: "Cookie Policy", href: ROUTES.cookies },
    { label: "Accessibility", href: ROUTES.accessibility },
  ],
} as const;
