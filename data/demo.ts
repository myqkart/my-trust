/**
 * Site content for Navchetna Charitable Trust.
 */

export const trustInfo = {
  name: "Navchetna Charitable Trust",
  shortName: "Navchetna",
  tagline: "The Spirit of Navchetna Charitable Trust.",
  slogan: "Service, Support & Humanity",
  mission:
    "To support people in need through food and clothing support, Bhandara services, educational assistance, cow welfare, and tree plantation—with respect, support, and hope.",
  vision:
    "A continuing journey of service and humanity—from 2009 to today—where help is given with dignity, compassion reaches people and animals alike, and students can keep studying.",
  values: [
    "Service",
    "Support",
    "Humanity",
    "Respect",
    "Compassion",
    "Dignity",
  ] as const,
  established: 2009,
  registration: "Charitable Trust, Ahmedabad",
  pan: "",
  twelveA: "Please contact us for details",
  eightyG: "Please contact us for details",
  fcra: "",
  website: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const founderInfo = {
  name: "Shri Rupesh Kumar Modi",
  designation: "Founder & Trustee",
  bio: "Navchetna Charitable Trust was established in 2009 with the service spirit and dedication of Shri Rupesh Kumar Modi, with the aim of supporting people in need and contributing positively to society. Today the core purpose remains unchanged—service, support, and humanity.",
  message:
    "Service, Support & Humanity is more than a slogan; it is the spirit behind our social service journey since 2009.",
} as const;

export const contactInfo = {
  address: {
    line1: "30-FF, Harishiddh Chambers",
    line2: "Income Tax, Ashram Road",
    city: "Ahmedabad",
    state: "Gujarat",
    postalCode: "380014",
    country: "India",
    full: "Navchetna Charitable Trust, 30-FF, Harishiddh Chambers, Income Tax, Ashram Road, Ahmedabad, Gujarat 380014",
  },
  phone: "+91 97125 17115",
  emergency: "+91 97125 17115",
  email: "navchetnacharitabletrust09@gmail.com",
  supportEmail: "navchetnacharitabletrust09@gmail.com",
  volunteerEmail: "navchetnacharitabletrust09@gmail.com",
  donateEmail: "navchetnacharitabletrust09@gmail.com",
  officeHours: "Monday - Saturday, 9:00 AM – 6:00 PM",
  whatsapp: "919712517115",
} as const;

export const socialInfo = {
  facebook: "#",
  instagram: "https://www.instagram.com/navchetna_charitable_trust",
  youtube: "#",
  linkedin: "#",
  twitter: "#",
  whatsapp: "https://wa.me/919712517115",
} as const;

export const statisticsInfo = {
  yearsOfService: "17+",
  established: "2009",
  programs: "5",
  education: "Education",
  food: "Meals",
  cowWelfare: "Gau Seva",
  trees: "Plants",
  helpingPoor: "Seva",
  city: "Ahmedabad",
} as const;

export const programsInfo = [
  {
    id: "environment",
    slug: "environment",
    title: "Tree Plantation",
    summary:
      "Tree plantation is part of our commitment to a greener, healthier environment—inviting the community to plant and care for trees together.",
    href: "/programs/environment",
    impact: "Environment",
  },
  {
    id: "food-distribution",
    slug: "food-distribution",
    title: "Food Distribution",
    summary:
      "Food Distribution and Bhandara are expressions of dignity and compassion—simple, clean meals offered with respect, privacy, and care.",
    href: "/programs/food-distribution",
    impact: "Dignity",
  },
  {
    id: "cow-welfare",
    slug: "cow-welfare",
    title: "Gau Seva",
    summary:
      "Gau Seva is quiet care for cows that may be vulnerable because of age, illness, injury, or abandonment—feeding, protecting, and serving with responsibility.",
    href: "/programs/cow-welfare",
    impact: "Compassion",
  },
  {
    id: "helping-poor",
    slug: "helping-poor",
    title: "Helping the Poor",
    summary:
      "Practical support through food, clothing, and everyday essentials—given with dignity so families are not alone in difficult moments.",
    href: "/programs/helping-poor",
    impact: "Support",
  },
  {
    id: "education",
    slug: "education",
    title: "Education Support",
    summary:
      "Hostel accommodation, study materials, and educational support so students can continue studying in a safe and supportive environment.",
    href: "/programs/education",
    impact: "Opportunity",
  },
] as const;

export const donationPlans = [
  {
    id: "sponsor-plantation",
    label: "Plant Trees",
    amount: 501,
    amountLabel: "₹501",
    impact: "Help us plant and care for trees",
  },
  {
    id: "sponsor-meal",
    label: "Distribute Food",
    amount: 1100,
    amountLabel: "₹1,100",
    impact: "Meals shared with dignity and respect",
  },
  {
    id: "sponsor-gau-seva",
    label: "Gau Seva",
    amount: 2500,
    amountLabel: "₹2,500",
    impact: "Quiet care for cows that need food and protection",
  },
  {
    id: "sponsor-poor",
    label: "Help the Poor",
    amount: 5100,
    amountLabel: "₹5,100",
    impact: "Food, clothing, and essentials for families in need",
  },
  {
    id: "sponsor-education",
    label: "Education Support",
    amount: 11000,
    amountLabel: "₹11,000",
    impact: "Hostel and study support so a student can continue",
  },
  {
    id: "general",
    label: "General Donation",
    amount: null,
    amountLabel: "Any Amount",
    impact: "Support whichever seva is needed most",
  },
] as const;

/** Bank transfer and Google Pay details for the donate form. */
export const donationPaymentInfo = {
  bank: {
    accountName: "Navchetna Charitable Trust",
    accountNumber: "2391104000003179",
    ifsc: "IBKL0002391",
    bankName: "IDBI Bank",
  },
  gpay: {
    /** Place the QR at `public/images/donate/gpay-qr.png`, then set this path. */
    qrSrc: "",
    qrAlt: "Google Pay QR code for Navchetna Charitable Trust",
  },
} as const;

export const testimonialsInfo = [
  {
    quote:
      "A meal can fill the stomach, but a meal served with dignity can touch the heart.",
    name: "A neighbour we support",
    role: "Food Distribution",
  },
  {
    quote:
      "Feeding with care, protecting with responsibility, and serving with compassion—this is the true spirit of Gau Seva.",
    name: "A well-wisher",
    role: "Gau Seva",
  },
  {
    quote:
      "True charity is not only about giving something; it is about giving with dignity, care, and humanity.",
    name: "A family we support",
    role: "Helping the Poor",
  },
  {
    quote:
      "Sometimes a student simply needs a place to study, a safe place to stay, and someone who believes in their potential.",
    name: "A student we support",
    role: "Education",
  },
  {
    quote:
      "2009 to 2026—one vision, one commitment, and a continuing journey of humanity and service.",
    name: "A volunteer",
    role: "Our Journey",
  },
] as const;

export const eventsInfo = [
  "Tree Plantation Drive",
  "Food Distribution",
  "Gau Seva",
  "Support for Families",
  "Education Support Meet",
  "Community Gathering",
] as const;

export const teamInfo = [
  {
    id: "rupesh-bhai-modi",
    name: "Shri Rupesh Kumar Modi",
    role: "Founder & Trustee",
    image: "/images/trustees/rupesh-bhai-modi.png",
  },
  {
    id: "rupal-modi",
    name: "Rupal Modi",
    role: "Co-Founder & Trustee",
    image: "/images/trustees/trustee-02.png",
  },
  {
    id: "trustee-03",
    name: "Krishiv Modi",
    role: "Trustee",
    image: "/images/trustees/trustee-03.png",
  },
  {
    id: "trustee-04",
    name: "Rudraa Modi",
    role: "Trustee",
    image: "/images/trustees/trustee-04.png",
  },
  {
    id: "trustee-05",
    name: "Krish Panchal",
    role: "Trustee",
    image: "/images/trustees/trustee-05.png",
  },
  {
    id: "kajal-patel",
    name: "Kajal Patel",
    role: "Trustee",
    image: "/images/trustees/trustee-06.png",
  },
] as const;

export const faqInfo = [
  {
    question: "Can I visit the Trust?",
    answer:
      "Yes. You are welcome at our office: 30-FF, Harishiddh Chambers, Income Tax, Ashram Road, Ahmedabad 380014. Please call +91 97125 17115 to plan your visit.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "Fill out the volunteer form or contact us. We welcome help with Food Seva and Bhandara, Gau Seva, family support, education and hostel work, and plantation.",
  },
  {
    question: "How can we help poor families?",
    answer:
      "You can donate, volunteer, or give in-kind support such as food, good-quality clothes, and everyday essentials. Call +91 97125 17115 or email us.",
  },
  {
    question: "Do you provide hostel support for students?",
    answer:
      "Yes. We make efforts to provide hostel accommodation and educational support so students who need a safe place to stay can continue their studies.",
  },
  {
    question: "Do you accept in-kind donations?",
    answer:
      "Yes. Food, clothes, and other necessary support for families in need are welcome—practical items a family can actually use.",
  },
  {
    question: "How do I donate?",
    answer:
      "On the donate page, transfer to our IDBI Bank account (account number and IFSC) or pay with Google Pay QR. Then WhatsApp or email your payment proof for a receipt. You can also call +91 97125 17115.",
  },
] as const;

export const trustBadgesInfo = [
  {
    label: "Established",
    description: "2009, Ahmedabad",
  },
  {
    label: "Founder",
    description: "Shri Rupesh Kumar Modi",
  },
  {
    label: "Our Work",
    description: "Food, clothing, Bhandara, gau seva, education & plantation",
  },
  {
    label: "Serving since",
    description: "2009 to 2026 and beyond",
  },
] as const;

export const seoKeywords = [
  "Navchetna Charitable Trust",
  "Charitable Trust Ahmedabad",
  "Service Support Humanity",
  "Food distribution Ahmedabad",
  "Bhandara Ahmedabad",
  "Gau seva Gujarat",
  "Education hostel support",
  "Helping the poor Ahmedabad",
  "Tree plantation NGO",
] as const;
