import { ROUTES } from "@/constants/routes";
import {
  eventsInfo,
  founderInfo,
  statisticsInfo,
  testimonialsInfo,
  trustInfo,
} from "@/data/demo";

/** Homepage-specific structured content from demo-data.md. */
export const homeTimeline = [
  {
    year: "2012",
    title: "Foundation begins",
    description:
      "Anandam Seva Foundation is established in Ahmedabad with a vision of dignity for every elder.",
  },
  {
    year: "2016",
    title: "Home expands",
    description:
      "Residential care grows as more seniors find companionship, healthcare, and belonging.",
  },
  {
    year: "2020",
    title: "Community outreach",
    description:
      "Medical camps and food distribution scale across neighborhoods in need.",
  },
  {
    year: "2025",
    title: "Continued impact",
    description: `${statisticsInfo.residents} residents supported and ${statisticsInfo.volunteers} volunteers walking with us.`,
  },
] as const;

export const featuredResidentStory = {
  name: "Sushila Ben",
  quote: testimonialsInfo[0].quote,
  summary:
    "Sushila Ben arrived seeking safety and companionship. Today she shares morning yoga, evening prayers, and a family that listens.",
  journey:
    "Before joining Anandam Seva, loneliness weighed heavily on her days. Through steady care, shared meals, and gentle routines, she rediscovered joy and belonging.",
  href: ROUTES.stories,
  cta: "Meet Our Residents",
} as const;

export const galleryPreviewItems = [
  { title: "Morning yoga with residents", category: "Yoga" },
  { title: "Shared meals, shared dignity", category: "Meals" },
  { title: "Healthcare with compassion", category: "Healthcare" },
  { title: "Festival celebrations", category: "Festivals" },
  { title: "Volunteers in action", category: "Volunteers" },
  { title: "Medical camp outreach", category: "Medical Camps" },
] as const;

export const upcomingEvents = [
  {
    title: eventsInfo[0],
    dateLabel: "21 Jun 2026",
    location: "Anandam Seva Old Age Home, Ahmedabad",
    summary: "Gentle yoga and wellness for residents and community guests.",
    href: ROUTES.events,
  },
  {
    title: eventsInfo[1],
    dateLabel: "12 Jul 2026",
    location: "Community Hall, SG Highway",
    summary: "Free checkups, specialist consultations, and health guidance.",
    href: ROUTES.events,
  },
  {
    title: eventsInfo[3],
    dateLabel: "15 Aug 2026",
    location: "Ahmedabad neighborhoods",
    summary: "Planting trees with volunteers, families, and local partners.",
    href: ROUTES.events,
  },
] as const;

export const impactUtilization = [
  { label: "Resident Care & Shelter", percent: 42 },
  { label: "Healthcare & Medicines", percent: 24 },
  { label: "Nutrition & Meals", percent: 18 },
  { label: "Education & Outreach", percent: 10 },
  { label: "Operations & Transparency", percent: 6 },
] as const;

export const homeNewsletter = {
  eyebrow: "Stay Close",
  title: "Stories of hope, delivered gently",
  description:
    "Join our community for updates on impact, events, and meaningful ways to help—never spam, only purpose.",
} as const;

export const homeAbout = {
  eyebrow: "Our Story",
  title: "A family where every elder feels valued",
  description: founderInfo.bio,
} as const;

export const homeTransparency = {
  eyebrow: "Transparency",
  title: "Open books. Clear impact.",
  description: `Registered as ${trustInfo.registration}. 12A and 80G available. CSR partnerships welcome.`,
} as const;
