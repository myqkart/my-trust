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
    "To serve society through education, compassion, support, and humanity—helping needy people and contributing to the betterment of the community.",
  vision:
    "To build a society where underprivileged families, children, cattle, and elders receive dignity, care, and a chance at a better life.",
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
  csrEligible: true,
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
  education: "Hostel",
  food: "Bhandara",
  cowWelfare: "Gau Seva",
  trees: "Plantation",
  oldAgeHome: "Planned",
  city: "Ahmedabad",
} as const;

export const programsInfo = [
  {
    id: "education",
    slug: "education",
    title: "Education Support",
    summary:
      "Hostel facilities for needy children who did not have proper education and accommodation, so they can continue studies in a safe, supportive environment.",
    href: "/programs/education",
    impact: "Learning & shelter",
  },
  {
    id: "food-distribution",
    slug: "food-distribution",
    title: "Food & Clothing",
    summary:
      "Food distribution programs and large Bhandara events for poor and needy people, along with clothes and other essential support for families.",
    href: "/programs/food-distribution",
    impact: "Nourishment",
  },
  {
    id: "cow-welfare",
    slug: "cow-welfare",
    title: "Cow Welfare",
    summary:
      "Care and well-being of needy and helpless cattle through cow welfare and gau seva.",
    href: "/programs/cow-welfare",
    impact: "Gau seva",
  },
  {
    id: "environment",
    slug: "environment",
    title: "Tree Plantation",
    summary:
      "Tree plantation programs that invite people to contribute towards a greener, healthier environment.",
    href: "/programs/environment",
    impact: "Environment",
  },
  {
    id: "old-age-home",
    slug: "old-age-home",
    title: "Upcoming Old Age Home",
    summary:
      "A planned home where elderly people who need care, companionship, and support can live with dignity in a safe, respectful environment.",
    href: "/old-age-home",
    impact: "Coming soon",
  },
] as const;

export const donationPlans = [
  {
    id: "sponsor-meal",
    label: "Support a Bhandara",
    amount: 501,
    amountLabel: "₹501",
    impact: "Meals shared with people in need",
  },
  {
    id: "sponsor-clothing",
    label: "Clothes & Essentials",
    amount: 1100,
    amountLabel: "₹1,100",
    impact: "Clothing and necessary support for families",
  },
  {
    id: "sponsor-education",
    label: "Education & Hostel",
    amount: 2500,
    amountLabel: "₹2,500",
    impact: "Help a child stay and study with dignity",
  },
  {
    id: "sponsor-gau-seva",
    label: "Cow Welfare",
    amount: 5100,
    amountLabel: "₹5,100",
    impact: "Care for needy and helpless cattle",
  },
  {
    id: "sponsor-plantation",
    label: "Tree Plantation",
    amount: 11000,
    amountLabel: "₹11,000",
    impact: "Greener neighbourhoods through plantation drives",
  },
  {
    id: "sponsor-elder-home",
    label: "Old Age Home Fund",
    amount: 21000,
    amountLabel: "₹21,000",
    impact: "Help us build a respectful home for elders",
  },
  {
    id: "general",
    label: "General Donation",
    amount: null,
    amountLabel: "Any Amount",
    impact: "Flexible support wherever the need is greatest",
  },
] as const;

export const testimonialsInfo = [
  {
    quote:
      "A safe hostel and a chance to study gave our children hope when we had nowhere else to turn.",
    name: "A parent we support",
    role: "Education",
  },
  {
    quote:
      "The Bhandara and clothing support reached families in our neighbourhood with dignity and care.",
    name: "Community volunteer",
    role: "Food & Clothing",
  },
  {
    quote:
      "Navchetna’s gau seva and plantation work show that service includes animals and the environment too.",
    name: "Local supporter",
    role: "Donor",
  },
  {
    quote:
      "The Trust’s commitment to an old age home gives elders a future of respect, care, and companionship.",
    name: "Well-wisher",
    role: "Elder care",
  },
] as const;

export const eventsInfo = [
  "Community Bhandara",
  "Tree Plantation Drive",
  "Clothing Distribution",
  "Education Support Meet",
  "Cow Welfare Seva",
  "Diwali Celebration",
] as const;

export const partnersInfo = [
  "Community Volunteers",
  "Local Donors",
  "Ahmedabad Neighbourhoods",
  "Education Well-wishers",
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
      "Fill out the volunteer form or contact us. We welcome help with education, food distribution, plantation, cow welfare, and upcoming elder-care work.",
  },
  {
    question: "Do you have an old age home?",
    answer:
      "We are working towards establishing an Old Age Home so elders can live with dignity, care, and companionship. Your support helps this commitment take shape.",
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
    description: "Education, food, gau seva & environment",
  },
  {
    label: "Looking Ahead",
    description: "Old Age Home for elders",
  },
] as const;

export const seoKeywords = [
  "Navchetna Charitable Trust",
  "Charitable Trust Ahmedabad",
  "NGO in Gujarat",
  "Education hostel NGO",
  "Food distribution Ahmedabad",
  "Bhandara Ahmedabad",
  "Cow welfare Gujarat",
  "Tree plantation NGO",
  "Old Age Home Ahmedabad",
] as const;
