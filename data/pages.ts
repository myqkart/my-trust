import { contactInfo, trustInfo } from "@/data/demo";

export const dailyRoutine = [
  { time: "Morning", title: "Prayer & tea", description: "A calm start with companionship and care." },
  { time: "Breakfast", title: "Shared meals", description: "Nutritious food prepared with respect." },
  { time: "Forenoon", title: "Health & rest", description: "Check-ins, medicines, and quiet time." },
  { time: "Afternoon", title: "Garden & conversation", description: "Fresh air, friendship, and belonging." },
  { time: "Evening", title: "Dinner together", description: "Warm meals followed by shared evening time." },
] as const;

export const facilities = [
  "Safe rooms",
  "Kitchen & dining",
  "Medical care corner",
  "Prayer space",
  "Garden",
  "Companionship",
  "Accessible pathways",
  "Dignity in daily life",
] as const;

export const reportDocuments = [
  { title: "Annual overview", category: "Updates", issuedAt: "On request", href: "/contact" },
  { title: "How to support us", category: "Giving", issuedAt: "Ongoing", href: "/donate" },
  { title: "Volunteer with us", category: "Seva", issuedAt: "Ongoing", href: "/volunteer" },
] as const;

export const blogPosts = [
  {
    slug: "tree-plantation-seva",
    title: "Planting Trees, Growing Hope",
    excerpt: "How neighbourhood plantation drives keep Ahmedabad greener.",
    category: "Environment",
    publishedAt: "2026-06-12",
    readingTime: "5 min",
  },
  {
    slug: "food-distribution-seva",
    title: "A Meal Shared with Dignity",
    excerpt: "Food distribution for people who need a plate of food today.",
    category: "Community Impact",
    publishedAt: "2026-05-28",
    readingTime: "4 min",
  },
  {
    slug: "gau-seva-and-helping-the-poor",
    title: "Gau Seva and Help for Families",
    excerpt: "Care for cows, and support for families who have little.",
    category: "Seva",
    publishedAt: "2026-05-10",
    readingTime: "6 min",
  },
  {
    slug: "education-support-for-children",
    title: "A Chance to Keep Studying",
    excerpt: "Education support for needy children in Ahmedabad.",
    category: "Education",
    publishedAt: "2026-04-22",
    readingTime: "5 min",
  },
] as const;

export const galleryCategories = [
  "Education",
  "Meals",
  "Volunteers",
  "Environment",
  "Festivals",
  "Daily Life",
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
        body: "Donations are voluntary contributions supporting tree plantation, food distribution, gau seva, help for the poor, and education.",
      },
      {
        heading: "Refund requests",
        body: `If a donation was made in error, contact us promptly at ${contactInfo.donateEmail}. Eligible refunds are reviewed case by case.`,
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
        body: `If you face an accessibility barrier, email ${contactInfo.supportEmail} and we will work to improve the experience.`,
      },
    ],
  },
} as const;

export const aboutFutureGoals = [
  "Plant more trees with neighbourhoods across Ahmedabad",
  "Reach more hungry families through food distribution",
  "Grow gau seva for cows that need care",
  "Stand with more poor families through clothes, essentials, and education support",
] as const;

export const eventsList = [
  {
    title: "Tree Plantation Drive",
    dateLabel: "Upcoming",
    startDate: "2026-08-20",
    location: "Ahmedabad neighbourhoods",
    summary: "Plant trees with volunteers, families, and well-wishers.",
  },
  {
    title: "Food Distribution",
    dateLabel: "Upcoming",
    startDate: "2026-08-15",
    location: "Ahmedabad",
    summary: "Share meals with people who need food today.",
  },
  {
    title: "Gau Seva",
    dateLabel: "Upcoming",
    startDate: "2026-10-02",
    location: "Ahmedabad",
    summary: "Feed and care for cows that are needy or helpless.",
  },
  {
    title: "Help for Families",
    dateLabel: "Upcoming",
    startDate: "2026-09-05",
    location: "Ashram Road, Ahmedabad",
    summary: "Clothes, essentials, and support for poor families.",
  },
  {
    title: "Education Support Meet",
    dateLabel: "Upcoming",
    startDate: "2026-09-20",
    location: "Navchetna office, Ahmedabad",
    summary: "Connecting well-wishers with education support for children.",
  },
  {
    title: "Community Gathering",
    dateLabel: "Upcoming",
    startDate: "2026-11-08",
    location: "Ahmedabad",
    summary: "A day of seva, togetherness, and gratitude.",
  },
] as const;

export const impactHighlights = [
  { label: "Years of service", value: "17+" },
  { label: "Established", value: "2009" },
  { label: "Focus areas", value: "5" },
  { label: "Plants", value: "Trees" },
  { label: "Food", value: "Meals" },
  { label: "Gau seva", value: "Cows" },
  { label: "Helping the poor", value: "Families" },
  { label: "Education", value: "Children" },
] as const;

export const storyProfiles = [
  {
    name: "Trees we plant",
    quote:
      "The plantation drive brought the neighbourhood together—and the trees are still growing with us.",
    summary:
      "Navchetna organises tree plantation so Ahmedabad stays greener and healthier for the next generation.",
    role: "Tree Plantation",
  },
  {
    name: "Meals we share",
    quote:
      "When food reached our family, it was given with respect. That kindness stays with us.",
    summary:
      "Food distribution reaches people who are hungry—quietly, regularly, and with dignity.",
    role: "Food Distribution",
  },
  {
    name: "Gau seva",
    quote:
      "Gau seva at Navchetna is quiet, steady care for animals that have nowhere else to go.",
    summary:
      "We feed, shelter, and protect cows that are needy or helpless.",
    role: "Gau Seva",
  },
  {
    name: "Families we stand with",
    quote:
      "When we had nothing left to give our children, Navchetna stood with us—clothes, food, and a little hope.",
    summary:
      "Clothes, essentials, and a helping hand for underprivileged families when life is hardest.",
    role: "Helping the Poor",
  },
  {
    name: "Children we support",
    quote:
      "A safe place to stay and a chance to study changed what our children could hope for.",
    summary:
      "Education support and hostel care help needy children continue school.",
    role: "Education",
  },
] as const;
