/**
 * Demo content sourced from ai/demo-data.md.
 * Use until verified client information replaces it.
 */

export const trustInfo = {
  name: "Anandam Seva Foundation",
  shortName: "Anandam Seva",
  tagline: "Serving Humanity with Compassion & Dignity",
  slogan: "Every Life Deserves Love, Care & Respect.",
  mission:
    "To provide compassionate care, dignity, healthcare, nutrition, shelter, education, and emotional support to elderly citizens and underprivileged communities through sustainable social initiatives.",
  vision:
    "To build a society where every individual, regardless of age or circumstance, lives with dignity, security, love, and equal opportunity.",
  values: [
    "Compassion",
    "Integrity",
    "Transparency",
    "Service",
    "Respect",
    "Empowerment",
    "Community",
  ] as const,
  established: 2012,
  registration: "E/14562/Ahmedabad",
  pan: "AABTA4521P",
  twelveA: "Available",
  eightyG: "Available",
  fcra: "Applied",
  csrEligible: true,
  website: "https://www.anandamseva.org",
} as const;

export const founderInfo = {
  name: "Shri Harish Patel",
  designation: "Founder & Managing Trustee",
  bio: "Harish Patel founded Anandam Seva Foundation in 2012 after witnessing the loneliness and neglect faced by senior citizens. His vision was to create not just an old age home, but a family where every elderly person feels respected, valued, and loved.",
  message:
    "We cannot change the entire world, but we can certainly change someone's world with kindness.",
} as const;

export const contactInfo = {
  address: {
    line1: "Near Shantivan Circle",
    line2: "SG Highway",
    city: "Ahmedabad",
    state: "Gujarat",
    postalCode: "380054",
    country: "India",
    full: "Anandam Seva Foundation, Near Shantivan Circle, SG Highway, Ahmedabad, Gujarat 380054",
  },
  phone: "+91 98765 43210",
  emergency: "+91 98250 11223",
  email: "info@anandamseva.org",
  supportEmail: "support@anandamseva.org",
  volunteerEmail: "volunteer@anandamseva.org",
  donateEmail: "donate@anandamseva.org",
  officeHours: "Monday - Saturday, 9:00 AM – 6:00 PM",
  whatsapp: "919876543210",
} as const;

export const socialInfo = {
  facebook: "https://facebook.com/anandamseva",
  instagram: "https://instagram.com/anandamseva",
  youtube: "https://youtube.com/@anandamseva",
  linkedin: "https://linkedin.com/company/anandamseva",
  twitter: "https://x.com/anandamseva",
  whatsapp: "https://wa.me/919876543210",
} as const;

export const statisticsInfo = {
  yearsOfService: "13+",
  residents: "540+",
  meals: "485,000+",
  medicalCamps: "186+",
  childrenEducated: "920+",
  trees: "18,400+",
  volunteers: "1,650+",
  familiesSupported: "4,800+",
  csrPartners: "36",
  annualBeneficiaries: "11,500+",
} as const;

export const programsInfo = [
  {
    id: "old-age-home",
    slug: "old-age-home",
    title: "Old Age Home",
    summary:
      "A permanent home providing shelter, healthcare, companionship, recreation, and dignity for senior citizens.",
    href: "/old-age-home",
    impact: "Residential care",
  },
  {
    id: "medical-camps",
    slug: "medical-camps",
    title: "Medical Camps",
    summary:
      "Free healthcare camps including eye checkups, diabetes screening, dental care, and specialist consultations.",
    href: "/programs/medical-camps",
    impact: "Community health",
  },
  {
    id: "food-distribution",
    slug: "food-distribution",
    title: "Food Distribution",
    summary:
      "Nutritious meals distributed daily to elderly citizens, homeless individuals, and families in need.",
    href: "/programs/food-distribution",
    impact: "Nourishment",
  },
  {
    id: "education",
    slug: "education",
    title: "Education Support",
    summary:
      "Scholarships, school kits, digital learning, and tuition support for underprivileged children.",
    href: "/programs/education",
    impact: "Learning",
  },
  {
    id: "women-empowerment",
    slug: "women-empowerment",
    title: "Women Empowerment",
    summary:
      "Skill development, tailoring, self-help groups, entrepreneurship training, and financial literacy.",
    href: "/programs/women-empowerment",
    impact: "Livelihood",
  },
  {
    id: "environment",
    slug: "environment",
    title: "Environment",
    summary:
      "Tree plantation drives, water conservation, waste management awareness, and clean community initiatives.",
    href: "/programs/environment",
    impact: "Planet",
  },
  {
    id: "disaster-relief",
    slug: "disaster-relief",
    title: "Disaster Relief",
    summary:
      "Emergency food, shelter, clothing, medicines, and rehabilitation during natural disasters.",
    href: "/programs/disaster-relief",
    impact: "Emergency",
  },
] as const;

export const donationPlans = [
  {
    id: "sponsor-meal",
    label: "Sponsor One Meal",
    amount: 501,
    amountLabel: "₹501",
    impact: "One nourishing meal served with dignity",
  },
  {
    id: "sponsor-medicine",
    label: "Sponsor Medicines",
    amount: 1100,
    amountLabel: "₹1,100",
    impact: "Essential medicines for residents in need",
  },
  {
    id: "sponsor-groceries",
    label: "Sponsor Monthly Groceries",
    amount: 2500,
    amountLabel: "₹2,500",
    impact: "A month of pantry support for residents",
  },
  {
    id: "sponsor-health",
    label: "Sponsor Health Checkup",
    amount: 5100,
    amountLabel: "₹5,100",
    impact: "Comprehensive health screening for seniors",
  },
  {
    id: "sponsor-resident",
    label: "Sponsor One Resident",
    amount: 11000,
    amountLabel: "₹11,000/month",
    impact: "Monthly care, meals, and companionship",
    recurring: true,
  },
  {
    id: "festival",
    label: "Festival Celebration",
    amount: 21000,
    amountLabel: "₹21,000",
    impact: "Joyful festival celebrations for residents",
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
      "After coming here, I found a new family. Every day is filled with love and care.",
    name: "Sushila Ben",
    role: "Resident",
  },
  {
    quote:
      "Volunteering here changed my perspective on life. Every visit teaches compassion.",
    name: "Rohan Shah",
    role: "Volunteer",
  },
  {
    quote:
      "I appreciate the complete transparency and genuine impact of every donation.",
    name: "Priya Mehta",
    role: "Donor",
  },
  {
    quote:
      "The organization maintains excellent healthcare standards and genuine commitment.",
    name: "Dr. Amit Desai",
    role: "Doctor",
  },
] as const;

export const eventsInfo = [
  "International Yoga Day",
  "Senior Citizen Health Camp",
  "Diwali Celebration",
  "Tree Plantation Drive",
  "Winter Blanket Distribution",
  "Women's Skill Workshop",
  "Children Education Fair",
  "Blood Donation Camp",
  "Annual Charity Walk",
] as const;

export const partnersInfo = [
  "Apollo Hospitals",
  "Rotary Club",
  "Lions Club",
  "Infosys Foundation",
  "Tata Trusts",
  "Adani Foundation",
  "Zydus Hospitals",
  "HDFC Bank CSR",
  "State Bank of India CSR",
  "Ahmedabad Municipal Corporation",
] as const;

export const teamInfo = [
  { name: "Harish Patel", role: "Founder" },
  { name: "Meena Shah", role: "Managing Trustee" },
  { name: "Rajesh Mehta", role: "Operations Head" },
  { name: "Dr. Neha Joshi", role: "Medical Coordinator" },
  { name: "Nikhil Patel", role: "Volunteer Coordinator" },
  { name: "Kiran Desai", role: "Accounts" },
  { name: "Aarav Shah", role: "Social Media" },
] as const;

export const faqInfo = [
  {
    question: "Can I visit the old age home?",
    answer: "Yes. Visitors are welcome during visiting hours.",
  },
  {
    question: "How can I volunteer?",
    answer: "Fill out the volunteer form or contact us.",
  },
  {
    question: "Are donations tax exempt?",
    answer: "Yes, eligible donations qualify under Section 80G.",
  },
  {
    question: "Can I sponsor a resident?",
    answer: "Yes. Monthly sponsorship plans are available.",
  },
  {
    question: "Do you accept in-kind donations?",
    answer: "Yes. Food, medicines, clothes, and essential supplies are welcome.",
  },
] as const;

export const trustBadgesInfo = [
  {
    label: "Official Registration",
    description: trustInfo.registration,
  },
  {
    label: "80G",
    description: "Tax-exempt donations available",
  },
  {
    label: "12A",
    description: "Registered charitable trust",
  },
  {
    label: "CSR Ready",
    description: "Eligible for CSR partnerships",
  },
] as const;

export const seoKeywords = [
  "Old Age Home in Ahmedabad",
  "NGO in Gujarat",
  "Charitable Trust",
  "Senior Citizen Care",
  "Volunteer NGO",
  "CSR NGO Gujarat",
  "Donation for Elderly",
  "Food Distribution NGO",
  "Medical Camps Ahmedabad",
] as const;
