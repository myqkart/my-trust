import { trustInfo } from "@/data/demo";

export const dailyRoutine = [
  { time: "6:30 AM", title: "Morning Yoga", description: "Gentle movement to begin the day with calm energy." },
  { time: "8:00 AM", title: "Breakfast", description: "Nutritious meals shared in community." },
  { time: "10:00 AM", title: "Medical Checkup", description: "Routine care and health monitoring." },
  { time: "11:00 AM", title: "Prayer & Reflection", description: "A quiet moment of peace and belonging." },
  { time: "12:30 PM", title: "Lunch", description: "Wholesome food prepared with care." },
  { time: "3:00 PM", title: "Recreation & Library", description: "Reading, conversation, and light activities." },
  { time: "5:00 PM", title: "Garden Walk", description: "Fresh air and companionship outdoors." },
  { time: "7:00 PM", title: "Dinner & Evening Activities", description: "Warm meals followed by shared evening time." },
] as const;

export const facilities = [
  "Comfortable rooms",
  "Kitchen & dining",
  "Medical care corner",
  "Prayer hall",
  "Garden spaces",
  "Library",
  "Security support",
  "Accessible pathways",
] as const;

export const reportDocuments = [
  { title: "Annual Report 2025", category: "Annual Report", issuedAt: "March 2026", href: "/documents/annual-report.pdf" },
  { title: "Audit Statement 2025", category: "Audit", issuedAt: "February 2026", href: "/documents/audit-report.pdf" },
  { title: "80G Certificate", category: "Compliance", issuedAt: "2024", href: "/documents/80g.pdf" },
  { title: "12A Registration", category: "Compliance", issuedAt: "2012", href: "/documents/12a.pdf" },
  { title: "Impact Report 2025", category: "Impact", issuedAt: "January 2026", href: "/documents/impact-report.pdf" },
  { title: "CSR Partnership Deck", category: "CSR", issuedAt: "2026", href: "/documents/csr-deck.pdf" },
] as const;

export const blogPosts = [
  {
    slug: "healthy-ageing-with-dignity",
    title: "Healthy Ageing with Dignity",
    excerpt: "Simple habits that help elders stay active, connected, and hopeful.",
    category: "Healthy Ageing",
    publishedAt: "2026-06-12",
    readingTime: "5 min",
  },
  {
    slug: "volunteer-story-rohan",
    title: "What Volunteering Taught Rohan",
    excerpt: "A young volunteer reflects on compassion learned through presence.",
    category: "Volunteer Stories",
    publishedAt: "2026-05-28",
    readingTime: "4 min",
  },
  {
    slug: "nutrition-for-seniors",
    title: "Nutrition That Nurtures",
    excerpt: "How balanced meals support strength and comfort for senior residents.",
    category: "Nutrition for Seniors",
    publishedAt: "2026-05-10",
    readingTime: "6 min",
  },
  {
    slug: "csr-partnerships-that-matter",
    title: "CSR Partnerships That Matter",
    excerpt: "How transparent collaboration multiplies community impact.",
    category: "CSR Success Stories",
    publishedAt: "2026-04-22",
    readingTime: "5 min",
  },
] as const;

export const galleryCategories = [
  "Daily Life",
  "Residents",
  "Healthcare",
  "Yoga",
  "Meals",
  "Festivals",
  "Volunteers",
  "Education",
  "Medical Camps",
  "Environment",
] as const;

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    updated: "1 July 2026",
    sections: [
      {
        heading: "Information we collect",
        body: "We collect information you share through forms, donations, volunteering, and newsletter subscriptions—such as name, email, phone, and message details.",
      },
      {
        heading: "How we use information",
        body: "We use your information to respond to enquiries, process donations, coordinate volunteering, and share updates you requested.",
      },
      {
        heading: "Data protection",
        body: `${trustInfo.name} takes reasonable steps to protect personal information and never sells personal data.`,
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    updated: "1 July 2026",
    sections: [
      {
        heading: "Using this website",
        body: "By using this website, you agree to use content responsibly and refrain from misuse of forms, donation flows, or community information.",
      },
      {
        heading: "Content accuracy",
        body: "We strive to keep information current. Program details and contact information may update as our work grows.",
      },
    ],
  },
  refund: {
    title: "Refund Policy",
    updated: "1 July 2026",
    sections: [
      {
        heading: "Donation intent",
        body: "Donations are voluntary contributions supporting care, nutrition, healthcare, and community programs.",
      },
      {
        heading: "Refund requests",
        body: "If a donation was made in error, contact us promptly at donate@anandamseva.org. Eligible refunds are reviewed case by case.",
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    updated: "1 July 2026",
    sections: [
      {
        heading: "What cookies we use",
        body: "We may use essential cookies for site functionality and optional analytics cookies to understand how visitors engage with our pages.",
      },
      {
        heading: "Your choices",
        body: "You can control cookies through your browser settings. Essential cookies may remain required for basic site operation.",
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    updated: "1 July 2026",
    sections: [
      {
        heading: "Our commitment",
        body: `${trustInfo.name} aims to make this website usable for everyone, including people using assistive technologies.`,
      },
      {
        heading: "Standards",
        body: "We design for keyboard navigation, semantic structure, readable contrast, and respect for reduced-motion preferences.",
      },
      {
        heading: "Feedback",
        body: "If you face an accessibility barrier, email support@anandamseva.org and we will work to improve the experience.",
      },
    ],
  },
} as const;

export const aboutFutureGoals = [
  "Expand residential capacity with the same family-like care",
  "Grow medical outreach across more Ahmedabad neighborhoods",
  "Strengthen education and women empowerment programs",
  "Deepen CSR partnerships with measurable transparency",
] as const;

export const eventsList = [
  {
    title: "International Yoga Day",
    dateLabel: "21 Jun 2026",
    startDate: "2026-06-21",
    location: "Anandam Seva Old Age Home, Ahmedabad",
    summary: "Gentle yoga and wellness for residents and community guests.",
  },
  {
    title: "Senior Citizen Health Camp",
    dateLabel: "12 Jul 2026",
    startDate: "2026-07-12",
    location: "Community Hall, SG Highway",
    summary: "Free checkups, specialist consultations, and health guidance.",
  },
  {
    title: "Tree Plantation Drive",
    dateLabel: "15 Aug 2026",
    startDate: "2026-08-15",
    location: "Ahmedabad neighborhoods",
    summary: "Planting trees with volunteers, families, and local partners.",
  },
  {
    title: "Diwali Celebration",
    dateLabel: "08 Nov 2026",
    startDate: "2026-11-08",
    location: "Anandam Seva Old Age Home",
    summary: "Lights, sweets, music, and festival joy shared with residents.",
  },
  {
    title: "Winter Blanket Distribution",
    dateLabel: "12 Dec 2026",
    startDate: "2026-12-12",
    location: "Ahmedabad outreach routes",
    summary: "Warmth for elders and families facing cold nights.",
  },
  {
    title: "Annual Charity Walk",
    dateLabel: "26 Jan 2027",
    startDate: "2027-01-26",
    location: "SG Highway corridor",
    summary: "A community walk raising awareness and support for senior care.",
  },
] as const;

export const impactHighlights = [
  { label: "Years of service", value: "13+" },
  { label: "Residents supported", value: "540+" },
  { label: "Meals served", value: "485,000+" },
  { label: "Medical camps", value: "186+" },
  { label: "Children educated", value: "920+" },
  { label: "Trees planted", value: "18,400+" },
  { label: "Active volunteers", value: "1,650+" },
  { label: "Families supported", value: "4,800+" },
] as const;

export const storyProfiles = [
  {
    name: "Sushila Ben",
    quote: "After coming here, I found a new family. Every day is filled with love and care.",
    summary:
      "Sushila Ben arrived seeking safety and companionship. Today she shares morning yoga, evening prayers, and a family that listens.",
    role: "Resident",
  },
  {
    name: "Rohan Shah",
    quote: "Volunteering here changed my perspective on life. Every visit teaches compassion.",
    summary:
      "Rohan began as a weekend volunteer and now coordinates youth visits that bring music and conversation to residents.",
    role: "Volunteer",
  },
  {
    name: "Priya Mehta",
    quote: "I appreciate the complete transparency and genuine impact of every donation.",
    summary:
      "Priya sponsors monthly groceries and follows impact updates that show exactly how her support is used.",
    role: "Donor",
  },
  {
    name: "Dr. Amit Desai",
    quote: "The organization maintains excellent healthcare standards and genuine commitment.",
    summary:
      "Dr. Desai leads periodic health camps and mentors the medical care team on senior wellness.",
    role: "Doctor",
  },
] as const;
