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
    slug: "education-and-hostel-support",
    title: "A Hostel, a School, a Chance",
    excerpt: "How safe accommodation helps needy children continue their education.",
    category: "Education Programs",
    publishedAt: "2026-06-12",
    readingTime: "5 min",
  },
  {
    slug: "bhandara-and-clothing-seva",
    title: "Meals and Clothes Shared with Dignity",
    excerpt: "Bhandara events and clothing support for families in need.",
    category: "Community Impact",
    publishedAt: "2026-05-28",
    readingTime: "4 min",
  },
  {
    slug: "tree-plantation-and-gau-seva",
    title: "Green Earth, Gentle Care",
    excerpt: "Tree plantation and cow welfare as part of serving all life.",
    category: "Environmental Initiatives",
    publishedAt: "2026-05-10",
    readingTime: "6 min",
  },
  {
    slug: "upcoming-old-age-home",
    title: "A Home for Every Elder",
    excerpt: "Why Navchetna is working towards an Old Age Home in Ahmedabad.",
    category: "Elder Care",
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
        body: "Donations are voluntary contributions supporting education, food and clothing, cow welfare, plantation, and the upcoming old age home.",
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
  "Establish an Old Age Home where elders live with dignity, care, and companionship",
  "Deepen hostel and education support for more needy children",
  "Continue Bhandara, food, and clothing seva for families in need",
  "Grow cow welfare and tree plantation with the community",
] as const;

export const eventsList = [
  {
    title: "Community Bhandara",
    dateLabel: "Upcoming",
    startDate: "2026-08-15",
    location: "Ahmedabad",
    summary: "A large Bhandara sharing meals with poor and needy people.",
  },
  {
    title: "Tree Plantation Drive",
    dateLabel: "Upcoming",
    startDate: "2026-08-20",
    location: "Ahmedabad neighbourhoods",
    summary: "Planting trees with volunteers, families, and well-wishers.",
  },
  {
    title: "Clothing Distribution",
    dateLabel: "Upcoming",
    startDate: "2026-09-05",
    location: "Ashram Road, Ahmedabad",
    summary: "Clothes and essentials for families who need them.",
  },
  {
    title: "Education Support Meet",
    dateLabel: "Upcoming",
    startDate: "2026-09-20",
    location: "Navchetna office, Ahmedabad",
    summary: "Connecting well-wishers with hostel and education support.",
  },
  {
    title: "Cow Welfare Seva",
    dateLabel: "Upcoming",
    startDate: "2026-10-02",
    location: "Ahmedabad",
    summary: "Care and support for needy and helpless cattle.",
  },
  {
    title: "Diwali Celebration",
    dateLabel: "Upcoming",
    startDate: "2026-11-08",
    location: "Ahmedabad",
    summary: "Lights, sweets, and festival joy shared with the community.",
  },
] as const;

export const impactHighlights = [
  { label: "Years of service", value: "17+" },
  { label: "Established", value: "2009" },
  { label: "Focus areas", value: "5" },
  { label: "Education", value: "Hostel" },
  { label: "Food & clothing", value: "Bhandara" },
  { label: "Cow welfare", value: "Gau Seva" },
  { label: "Environment", value: "Plantation" },
  { label: "Old Age Home", value: "Planned" },
] as const;

export const storyProfiles = [
  {
    name: "Children we shelter",
    quote:
      "A safe hostel and a chance to study gave our children hope when we had nowhere else to turn.",
    summary:
      "Needy children without proper education and accommodation receive hostel facilities so they can continue school in a supportive environment.",
    role: "Education",
  },
  {
    name: "Families at our Bhandara",
    quote:
      "The Bhandara and clothing support reached families in our neighbourhood with dignity and care.",
    summary:
      "Food distribution, large Bhandara events, and clothes help poor and needy people meet everyday needs.",
    role: "Food & Clothing",
  },
  {
    name: "Gau seva well-wishers",
    quote:
      "Navchetna’s gau seva and plantation work show that service includes animals and the environment too.",
    summary:
      "Cow welfare and tree plantation invite the community to care for cattle and a greener Ahmedabad.",
    role: "Environment & gau seva",
  },
  {
    name: "Our elder-care promise",
    quote:
      "Respect, Care and Support for Every Elder — This is Our Commitment.",
    summary:
      "We are working towards an Old Age Home so senior citizens can live with safety, companionship, and dignity.",
    role: "Upcoming Old Age Home",
  },
] as const;
