import { ROUTES } from "@/constants/routes";
import {
  eventsInfo,
  founderInfo,
  statisticsInfo,
  testimonialsInfo,
  trustInfo,
} from "@/data/demo";

/** Homepage-specific structured content. */
export const homeTimeline = [
  {
    year: "2009",
    title: "A vision begins",
    description:
      "Navchetna Charitable Trust is founded with the service spirit of Shri Rupesh Kumar Modi—to support people in need with respect, support, and hope.",
  },
  {
    year: "Seva",
    title: "From Shree Rudraa Mahadev to the neighbourhood",
    description:
      "Service continues to reach nearby communities—food, clothing, Bhandara, gau seva, education, and plantation wherever support is needed.",
  },
  {
    year: "Learn",
    title: "Education with a safe place to stay",
    description:
      "Hostel accommodation and study support help students continue their education in a secure environment.",
  },
  {
    year: "2026",
    title: "One vision, one commitment",
    description: `${statisticsInfo.yearsOfService} years on, the purpose remains unchanged—service, support, and humanity for people and living beings alike.`,
  },
] as const;

export const featuredResidentStory = {
  name: "Students we support",
  quote: testimonialsInfo.find((item) => item.role === "Education")?.quote ?? "",
  summary:
    "Many students can manage some educational expenses but lack a suitable place to stay. Navchetna works to provide hostel accommodation and study support so education does not stop.",
  journey:
    "Supporting a student’s education today can become the beginning of a better and brighter future tomorrow.",
  href: ROUTES.stories,
  cta: "Read Our Stories",
} as const;

export const galleryPreviewItems = [
  { title: "Trees we plant together", category: "Environment" },
  { title: "Food shared with dignity", category: "Meals" },
  { title: "Gau seva", category: "Daily Life" },
  { title: "Help for families in need", category: "Volunteers" },
  { title: "Education support", category: "Education" },
  { title: "Community gatherings", category: "Festivals" },
] as const;

export const upcomingEvents = [
  {
    title: eventsInfo[0],
    dateLabel: "Upcoming",
    location: "Ahmedabad neighbourhoods",
    summary: "Plant trees with volunteers, families, and well-wishers.",
    href: ROUTES.events,
  },
  {
    title: eventsInfo[1],
    dateLabel: "Upcoming",
    location: "Ahmedabad",
    summary: "Food Seva and Bhandara—meals offered with dignity and respect.",
    href: ROUTES.events,
  },
  {
    title: eventsInfo[2],
    dateLabel: "Upcoming",
    location: "Ahmedabad",
    summary: "Quiet care for cows that need food, water, and protection.",
    href: ROUTES.events,
  },
] as const;

export const impactUtilization = [
  { label: "Tree Plantation", percent: 22 },
  { label: "Food Distribution", percent: 24 },
  { label: "Gau Seva", percent: 18 },
  { label: "Helping the Poor", percent: 20 },
  { label: "Education Support", percent: 16 },
] as const;

export const homeNewsletter = {
  eyebrow: "Stay Close",
  title: "Stories of service, delivered gently",
  description:
    "Updates on Food Seva, Gau Seva, education, plantation, and ways to help—never spam, only purpose.",
} as const;

export const homeAbout = {
  eyebrow: "Our Story",
  title: "Serving since 2009",
  description: founderInfo.bio,
} as const;

export const homeTransparency = {
  eyebrow: "Transparency",
  title: "Open books. Clear impact.",
  description: `${trustInfo.name} has served with the same commitment since ${trustInfo.established}. Reach us anytime to know how your support is used.`,
} as const;
