import { contactInfo, trustInfo } from "@/data/demo";

export const reportDocuments = [
  { title: "Annual overview", category: "Updates", issuedAt: "On request", href: "/contact" },
  { title: "How to support us", category: "Giving", issuedAt: "Ongoing", href: "/donate" },
  { title: "Volunteer with us", category: "Seva", issuedAt: "Ongoing", href: "/volunteer" },
] as const;

export const blogPosts = [
  {
    slug: "service-support-humanity",
    title: "Service, Support & Humanity",
    excerpt:
      "More than a slogan—the spirit behind Navchetna’s social service journey since 2009.",
    category: "Our Journey",
    publishedAt: "2026-06-12",
    readingTime: "6 min",
    paragraphs: [
      "“Service, Support & Humanity” is more than a slogan for Navchetna Charitable Trust; it represents the spirit behind its social service journey since 2009. The Trust has worked to support people in need through initiatives such as food and clothing support, Bhandara services, educational assistance, cow welfare, and tree plantation. The belief is simple: true service is not only about providing help, but also about giving people respect, support, and hope.",
      "The spirit of service that began in Ahmedabad has continued to reach nearby communities and people in need. From Shree Rudraa Mahadev to the neighbourhood, Navchetna Charitable Trust has worked to connect with different sections of society through various social initiatives. The Trust believes that service should not remain limited to one place or one occasion. Wherever support is needed, the effort is to contribute with compassion and responsibility.",
      "2009 is more than just a year for Navchetna Charitable Trust—it marks the beginning of a vision of service and humanity. The journey was started with the service spirit and dedication of Shri Rupesh Kumar Modi, with the aim of supporting people in need and contributing positively to society. Today, in 2026, the core purpose remains unchanged. The Trust continues to work with the same commitment while looking forward to meaningful initiatives for the future.",
      "2009 to 2026 — one vision, one commitment, and a continuing journey of humanity and service.",
    ],
  },
  {
    slug: "food-distribution-with-dignity",
    title: "Food Distribution — With Dignity, Respect & Humanity",
    excerpt:
      "A meal can address hunger; a meal served with dignity can also give respect, care, and belonging.",
    category: "Food Seva",
    publishedAt: "2026-05-28",
    readingTime: "5 min",
    paragraphs: [
      "For Navchetna Charitable Trust, Food Distribution is more than simply providing meals. It is an expression of service, dignity, compassion, and humanity. A meal can address immediate hunger, but the way it is offered can also give a person a sense of respect, care, and belonging.",
      "In a city, many families quietly face financial difficulties and struggle to meet their daily food needs. For them, a simple, clean, and nutritious meal can provide meaningful relief. However, food is only one part of true Food Seva. Respectful behaviour, cleanliness, proper arrangements, and treating every person equally are equally important.",
      "The Trust believes that a one-day meal can meet an immediate need, while regular Food Seva can create trust and continuity. When support continues regularly, people in need can feel that they are not forgotten and that their community stands with them.",
      "True service should never turn someone's difficult circumstances into publicity. Assistance should be provided with privacy, respect, and compassion, without making anyone feel uncomfortable about receiving support.",
      "Through its Food Distribution and Bhandara initiatives, Navchetna Charitable Trust aims to make every meal meaningful—not only by reducing hunger but also by protecting the dignity of every individual.",
      "A meal can fill the stomach, but a meal served with dignity can touch the heart. Food for hunger, respect for every person, and humanity above all.",
    ],
  },
  {
    slug: "gau-seva-compassion",
    title: "Gau Seva — A Quiet Service of Compassion and Care",
    excerpt:
      "Regular care for cows that depend on human kindness—feeding, protection, and responsibility without boundaries.",
    category: "Gau Seva",
    publishedAt: "2026-05-10",
    readingTime: "5 min",
    paragraphs: [
      "Gau Seva is a quiet form of service that reflects compassion, responsibility, and respect for living beings. For Navchetna Charitable Trust, caring for cows is an important part of its broader commitment to service and social responsibility.",
      "Many cows may become vulnerable because of age, illness, injury, abandonment, or lack of proper care. In such situations, providing food, water, protection, cleanliness, and a safe environment can make a meaningful difference. A simple meal or timely care may seem like a small act, but for an animal with nowhere else to go, it can provide comfort and safety.",
      "True Gau Seva is not limited to feeding cows occasionally. It is about regular care and responsibility. Supporting their basic needs, maintaining clean surroundings, protecting them from harm, and giving attention to injured or weak animals are all meaningful forms of service.",
      "A charitable trust has a responsibility to care not only for people but also for animals that depend on human kindness. Animals cannot express their needs in words, which makes compassion and responsible care even more important.",
      "At Navchetna Charitable Trust, Gau Seva represents the belief that compassion should have no boundaries. Service is not defined by whom we help, but by the care and sincerity with which we help.",
      "Gau Seva may happen quietly, without publicity or recognition, but its impact can still be meaningful. Feeding with care, protecting with responsibility, and serving with compassion—this is the true spirit of Gau Seva.",
    ],
  },
  {
    slug: "helping-the-poor-essentials",
    title: "Helping the Poor — Food, Clothing and Essential Support",
    excerpt:
      "Practical help through meals, clothes, and everyday essentials—given with dignity, care, and humanity.",
    category: "Community Support",
    publishedAt: "2026-04-22",
    readingTime: "5 min",
    paragraphs: [
      "For Navchetna Charitable Trust, helping people in need is not only about providing financial assistance. Sometimes, a family needs something much simpler and more immediate—a meal, clean clothes, or essential items for everyday life.",
      "Through its service activities, the Trust has supported people by providing food, clothing, and other basic essentials according to their needs. A simple meal can provide relief to someone facing hunger, while useful clothing and daily necessities can help a family manage difficult circumstances with greater dignity.",
      "The Trust believes that meaningful support should be practical, respectful, and useful. Instead of focusing only on one-time assistance, repeated and thoughtful support can help build trust and remind families that they are not alone.",
      "Food distribution and Bhandara Seva are also an important part of this effort. Providing a clean and simple meal with respect can make a real difference to someone facing a difficult day. Similarly, donating good-quality clothes and essential items can provide immediate support that a family can actually use.",
      "Helping others does not always require a large contribution. A small act of kindness, when given at the right time, can bring comfort and hope.",
      "At Navchetna Charitable Trust, the aim is to stand with people during difficult moments—not only for a day, but through continued service whenever possible. Because true charity is not only about giving something; it is about giving with dignity, care, and humanity.",
    ],
  },
  {
    slug: "education-support-opportunity",
    title: "Education Support — An Opportunity to Continue Studying",
    excerpt:
      "Hostel accommodation, books, and study support so students are not forced to discontinue their education.",
    category: "Education",
    publishedAt: "2026-04-08",
    readingTime: "5 min",
    paragraphs: [
      "For Navchetna Charitable Trust, education means giving every student the opportunity to continue their studies, receive necessary support, and have access to a safe and supportive environment.",
      "Many students come from families that may be able to manage some of their educational expenses but do not have a suitable place for them to stay. For such students, continuing their education away from home can become difficult. Understanding this need, Navchetna Charitable Trust makes efforts to provide hostel accommodation to students who need a safe place to stay, allowing them to continue their studies in a secure environment.",
      "Education support is not limited to accommodation. Depending on the student's needs, the Trust also gives importance to study materials, books, and other necessary educational support. The aim is to ensure that financial difficulties or the lack of proper accommodation do not become barriers to a student's education.",
      "Sometimes, a student does not need a large scholarship to move forward. They simply need a place to study, a safe place to stay, and someone who believes in their potential.",
      "Navchetna Charitable Trust strives to support students so that they do not have to discontinue their education because of circumstances beyond their control and can continue working towards their dreams.",
      "Because supporting a student's education today can become the beginning of a better and brighter future tomorrow.",
    ],
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
        body: "Donations are voluntary contributions supporting Food Seva and Bhandara, Gau Seva, help for the poor, education and hostel support, and tree plantation.",
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
  "Continue regular Food Seva and Bhandara with dignity and respect",
  "Deepen Gau Seva through steady care for vulnerable cows",
  "Stand with more families through food, clothing, and essentials",
  "Expand hostel and education support so more students can keep studying",
  "Grow tree plantation with neighbourhoods across Ahmedabad",
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
    summary: "Share clean, simple meals with dignity through Food Seva and Bhandara.",
  },
  {
    title: "Gau Seva",
    dateLabel: "Upcoming",
    startDate: "2026-10-02",
    location: "Ahmedabad",
    summary: "Quiet care—food, water, and protection for cows in need.",
  },
  {
    title: "Help for Families",
    dateLabel: "Upcoming",
    startDate: "2026-09-05",
    location: "Ashram Road, Ahmedabad",
    summary: "Food, clothing, and essentials for families facing hard days.",
  },
  {
    title: "Education Support Meet",
    dateLabel: "Upcoming",
    startDate: "2026-09-20",
    location: "Navchetna office, Ahmedabad",
    summary: "Connecting well-wishers with hostel and study support for students.",
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
    name: "Meals we share",
    quote:
      "A meal can fill the stomach, but a meal served with dignity can touch the heart.",
    summary:
      "Food Distribution and Bhandara are offered with cleanliness, respect, and privacy—so hunger is met without publicity.",
    role: "Food Distribution",
  },
  {
    name: "Gau seva",
    quote:
      "Compassion should have no boundaries. Service is defined by the care and sincerity with which we help.",
    summary:
      "Quiet, regular care for cows that may be vulnerable because of age, illness, injury, or abandonment.",
    role: "Gau Seva",
  },
  {
    name: "Families we stand with",
    quote:
      "A small act of kindness, when given at the right time, can bring comfort and hope.",
    summary:
      "Food, clothing, and everyday essentials—practical support so families are not alone in difficult moments.",
    role: "Helping the Poor",
  },
  {
    name: "Students we support",
    quote:
      "Sometimes a student simply needs a place to study, a safe place to stay, and someone who believes in their potential.",
    summary:
      "Hostel accommodation, books, and study support so students can continue their education.",
    role: "Education",
  },
  {
    name: "Our continuing journey",
    quote:
      "2009 to 2026—one vision, one commitment, and a continuing journey of humanity and service.",
    summary:
      "From Shree Rudraa Mahadev to the neighbourhood, service grows with the community—wherever support is needed.",
    role: "Our Journey",
  },
] as const;
