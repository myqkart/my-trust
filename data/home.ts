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
      "Navchetna Charitable Trust is established in Ahmedabad by Shri Rupesh Bhai Modi to serve people in need.",
  },
  {
    year: "Education",
    title: "Hostel for children",
    description:
      "Needy children without proper education and accommodation receive hostel facilities to continue their studies.",
  },
  {
    year: "Seva",
    title: "Food, clothes & gau seva",
    description:
      "Bhandara events, food and clothing support, and cow welfare grow as more people join the work.",
  },
  {
    year: "Today",
    title: "Plantation & elder home",
    description: `Tree plantation continues, and we are working towards an Old Age Home—${statisticsInfo.yearsOfService} years of service in Ahmedabad.`,
  },
] as const;

export const featuredResidentStory = {
  name: "Children we shelter",
  quote: testimonialsInfo[0].quote,
  summary:
    "The Trust has supported needy children who did not have proper facilities for education and accommodation—giving them a hostel so they can study in safety.",
  journey:
    "For families with nowhere to turn, a secure place to stay and continue school is the first step toward a better life. That is the heart of Navchetna’s education support.",
  href: ROUTES.stories,
  cta: "Read Our Stories",
} as const;

export const galleryPreviewItems = [
  { title: "Education and hostel care", category: "Education" },
  { title: "Bhandara and shared meals", category: "Meals" },
  { title: "Clothes for families in need", category: "Volunteers" },
  { title: "Tree plantation drives", category: "Environment" },
  { title: "Community celebrations", category: "Festivals" },
  { title: "Volunteers in action", category: "Daily Life" },
] as const;

export const upcomingEvents = [
  {
    title: eventsInfo[0],
    dateLabel: "Upcoming",
    location: "Ahmedabad",
    summary: "A large Bhandara sharing meals with poor and needy people.",
    href: ROUTES.events,
  },
  {
    title: eventsInfo[1],
    dateLabel: "Upcoming",
    location: "Ahmedabad neighbourhoods",
    summary: "Planting trees with volunteers, families, and well-wishers.",
    href: ROUTES.events,
  },
  {
    title: eventsInfo[2],
    dateLabel: "Upcoming",
    location: "Ashram Road, Ahmedabad",
    summary: "Clothes and essentials for families who need them.",
    href: ROUTES.events,
  },
] as const;

export const impactUtilization = [
  { label: "Education & Hostel", percent: 30 },
  { label: "Food, Bhandara & Clothing", percent: 28 },
  { label: "Cow Welfare", percent: 16 },
  { label: "Tree Plantation", percent: 14 },
  { label: "Upcoming Old Age Home", percent: 12 },
] as const;

export const homeNewsletter = {
  eyebrow: "Stay Close",
  title: "Stories of hope, delivered gently",
  description:
    "Join our community for updates on seva, events, and meaningful ways to help—never spam, only purpose.",
} as const;

export const homeAbout = {
  eyebrow: "Our Story",
  title: "Serving society since 2009",
  description: founderInfo.bio,
} as const;

export const homeTransparency = {
  eyebrow: "Transparency",
  title: "Open books. Clear impact.",
  description: `${trustInfo.name} has served Ahmedabad since ${trustInfo.established}. Reach us anytime for how your support is used.`,
} as const;
