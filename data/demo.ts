/**
 * Site content for Navchetna Charitable Trust.
 */

export const trustInfo = {
  name: "Navchetna Charitable Trust",
  shortName: "Navchetna",
  tagline: "The Spirit of Navchetna Charitable Trust.",
  slogan: "Service, Support & Humanity",
  elderCommitment:
    "Respect, Care and Support for Every Elder — This is Our Commitment.",
  mission:
    "To serve society through tree plantation, food distribution, gau seva, help for the poor, and education support.",
  vision:
    "To build a kinder Ahmedabad where trees grow, no one goes hungry, cows are cared for, poor families are supported, and children can keep studying.",
  values: [
    "Service",
    "Compassion",
    "Support",
    "Humanity",
    "Respect",
    "Community",
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
  name: "Shri Rupesh Bhai Modi",
  designation: "Founder & Trustee",
  bio: "Navchetna Charitable Trust was established in 2009 by Shri Rupesh Bhai Modi with the aim of serving society and supporting people in need. Since then he has continuously worked to strengthen the Trust and involve more people in social service.",
  message:
    "Service, Support & Humanity — The Spirit of Navchetna Charitable Trust.",
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
  instagram: "#",
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
      "We plant trees and invite people to join plantation drives—so Ahmedabad grows greener, cooler, and healthier for the next generation.",
    href: "/programs/environment",
    impact: "Plants",
  },
  {
    id: "food-distribution",
    slug: "food-distribution",
    title: "Food Distribution",
    summary:
      "We distribute food to people who are hungry—through community meals and regular food seva for poor and needy families.",
    href: "/programs/food-distribution",
    impact: "Nourishment",
  },
  {
    id: "cow-welfare",
    slug: "cow-welfare",
    title: "Gau Seva",
    summary:
      "We care for cows that are needy or helpless—feeding, sheltering, and protecting them with respect.",
    href: "/programs/cow-welfare",
    impact: "Gau seva",
  },
  {
    id: "helping-poor",
    slug: "helping-poor",
    title: "Helping the Poor",
    summary:
      "We stand with underprivileged families—offering clothes, essentials, and a helping hand when life is hardest.",
    href: "/programs/helping-poor",
    impact: "Support",
  },
  {
    id: "education",
    slug: "education",
    title: "Education Support",
    summary:
      "We support needy children with education and hostel facilities so they can study in a safe, supportive environment.",
    href: "/programs/education",
    impact: "Learning",
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
    impact: "Meals for people who need them today",
  },
  {
    id: "sponsor-gau-seva",
    label: "Gau Seva",
    amount: 2500,
    amountLabel: "₹2,500",
    impact: "Feed and care for needy cows",
  },
  {
    id: "sponsor-poor",
    label: "Help the Poor",
    amount: 5100,
    amountLabel: "₹5,100",
    impact: "Clothes, essentials, and support for families",
  },
  {
    id: "sponsor-education",
    label: "Education Support",
    amount: 11000,
    amountLabel: "₹11,000",
    impact: "Help a child continue school with dignity",
  },
  {
    id: "general",
    label: "General Donation",
    amount: null,
    amountLabel: "Any Amount",
    impact: "Support whichever seva is needed most",
  },
] as const;

export const testimonialsInfo = [
  {
    quote:
      "The plantation drive brought the neighbourhood together—and the trees are still growing with us.",
    name: "A volunteer",
    role: "Tree Plantation",
  },
  {
    quote:
      "When food reached our family, it was given with respect. That kindness stays with us.",
    name: "A neighbour we support",
    role: "Food Distribution",
  },
  {
    quote:
      "Gau seva at Navchetna is quiet, steady care for animals that have nowhere else to go.",
    name: "A well-wisher",
    role: "Gau Seva",
  },
  {
    quote:
      "When we had nothing left to give our children, Navchetna stood with us—clothes, food, and a little hope.",
    name: "A family we support",
    role: "Helping the Poor",
  },
  {
    quote:
      "A safe place to stay and a chance to study changed what our children could hope for.",
    name: "A parent we support",
    role: "Education",
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
    name: "Shri Rupesh Bhai Modi",
    role: "Founder & Trustee",
    image: "/images/trustees/rupesh-bhai-modi.png",
  },
  {
    id: "trustee-02",
    name: "Trustee",
    role: "Trustee",
    image: "/images/trustees/trustee-02.png",
  },
  {
    id: "trustee-03",
    name: "Trustee",
    role: "Trustee",
    image: "/images/trustees/trustee-03.png",
  },
  {
    id: "trustee-04",
    name: "Trustee",
    role: "Trustee",
    image: "/images/trustees/trustee-04.png",
  },
  {
    id: "trustee-05",
    name: "Trustee",
    role: "Trustee",
    image: "/images/trustees/trustee-05.png",
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
      "Fill out the volunteer form or contact us. We welcome help with plantation, food distribution, gau seva, helping families in need, and education support.",
  },
  {
    question: "How can we help poor families?",
    answer:
      "You can donate, volunteer, or give in-kind support such as food, clothes, and essentials. Call +91 97125 17115 or email us.",
  },
  {
    question: "Do you accept in-kind donations?",
    answer:
      "Yes. Food, clothes, and other necessary support for families in need are welcome.",
  },
  {
    question: "How do I donate?",
    answer:
      "Use the donate form on this website or contact us at navchetnacharitabletrust09@gmail.com / +91 97125 17115.",
  },
] as const;

export const trustBadgesInfo = [
  {
    label: "Established",
    description: "2009, Ahmedabad",
  },
  {
    label: "Founder",
    description: "Shri Rupesh Bhai Modi",
  },
  {
    label: "Our Work",
    description: "Plants, food, gau seva, helping the poor & education",
  },
  {
    label: "Serving since",
    description: "2009 in Ahmedabad",
  },
] as const;

export const seoKeywords = [
  "Navchetna Charitable Trust",
  "Charitable Trust Ahmedabad",
  "NGO in Gujarat",
  "Education hostel NGO",
  "Food distribution Ahmedabad",
  "Helping the poor Ahmedabad",
  "Gau seva Gujarat",
  "Tree plantation NGO",
] as const;
