export interface Program {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  coverImage: string;
  impact: string;
}

export interface ResidentStory {
  id: string;
  slug: string;
  name: string;
  quote: string;
  summary: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  startDate: string;
  endDate?: string;
  location: string;
  coverImage: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  category: string;
}

export interface ReportDocument {
  id: string;
  title: string;
  category: string;
  issuedAt: string;
  href: string;
}

export interface DonationCategory {
  id: string;
  label: string;
  impact: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  summary: string;
  commitment: string;
}
