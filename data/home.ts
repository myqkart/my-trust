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
    title: "Trust begins",
    description:
      "Navchetna Charitable Trust is established in Ahmedabad by Shri Rupesh Kumar Modi to serve people in need.",
  },
  {
    year: "Seva",
    title: "Food, gau seva & helping the poor",
    description:
      "Food distribution, cow care, and support for underprivileged families become a steady part of our work.",
  },
  {
    year: "Learn",
    title: "Education support",
    description:
      "Needy children receive education support and hostel facilities so they can continue their studies.",
  },
  {
    year: "Today",
    title: "Planting for tomorrow",
    description: `Tree plantation continues across Ahmedabad—${statisticsInfo.yearsOfService} years of service, support, and humanity.`,
  },
] as const;

export const featuredResidentStory = {
  name: "Children we support",
  quote: testimonialsInfo.find((item) => item.role === "Education")?.quote ?? "",
  summary:
    "The Trust supports needy children with education and a safe place to stay—so learning is not lost when a family has little.",
  journey:
    "For children without proper facilities, a chance to study is the first step toward a better life. That is the heart of Navchetna’s education support.",
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
    summary: "Distribute food to people who need a meal today.",
    href: ROUTES.events,
  },
  {
    title: eventsInfo[2],
    dateLabel: "Upcoming",
    location: "Ahmedabad",
    summary: "Care, feed, and protect cows that need our help.",
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
  title: "Stories of hope, delivered gently",
  description:
    "Join us for updates on plantation, food seva, gau seva, education, and ways to help—never spam, only purpose.",
} as const;

export const homeAbout = {
  eyebrow: "Our Story",
  title: "Serving society since 2009",
  description: founderInfo.bio,
} as const;

export const homeTransparency = {
  eyebrow: "Transparency",
  title: "Open books. Clear impact.",
  description: `${trustInfo.name} has served Ahmedabad since ${trustInfo.established}. Reach us anytime to know how your support is used.`,
} as const;
