/**
 * Demo Unsplash imagery — every photo ID was HTTP 200–verified.
 * Replace with verified client assets when available.
 */

const U = "https://images.unsplash.com";

/** Build a cropped Unsplash URL with predictable dimensions. */
export function unsplashSrc(
  photoId: string,
  options: { w?: number; h?: number; q?: number } = {},
): string {
  const { w = 1200, h, q = 80 } = options;
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `${U}/photo-${photoId}?${params.toString()}`;
}

/** Tiny shared blur placeholder for remote next/image. */
export const imageBlurDataUrl =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect width='16' height='10' fill='%23b3cfe5' filter='url(%23b)'/%3E%3C/svg%3E";

export const media = {
  about: {
    elderCare: unsplashSrc("1576765608535-5f04d1e3f289", { w: 900, h: 1125 }),
    companionship: unsplashSrc("1581579438747-1dc8d17bbce4", { w: 900, h: 1125 }),
  },
  featuredStory: unsplashSrc("1503676260728-1c00da094a0b", { w: 1000, h: 1250 }),
  oldAgeHome: unsplashSrc("1516734212186-a967f81ad0d7", { w: 1200, h: 900 }),
  programs: {
    "old-age-home": unsplashSrc("1576765608535-5f04d1e3f289", { w: 1000, h: 750 }),
    "food-distribution": unsplashSrc("1488521787991-ed7bbaae773c", { w: 1000, h: 750 }),
    education: unsplashSrc("1503676260728-1c00da094a0b", { w: 1000, h: 750 }),
    "cow-welfare": unsplashSrc("1546445317-29f4545e9d53", { w: 1000, h: 750 }),
    environment: unsplashSrc("1542601906990-b4d3fb778b09", { w: 1000, h: 750 }),
  },
  gallery: {
    "Daily Life": unsplashSrc("1559027615-cd4628902d4a", { w: 800, h: 1000 }),
    Meals: unsplashSrc("1593113598332-cd288d649433", { w: 800, h: 1000 }),
    Festivals: unsplashSrc("1545389336-cf090694435e", { w: 800, h: 1000 }),
    Volunteers: unsplashSrc("1559027615-cd4628902d4a", { w: 800, h: 1000 }),
    Education: unsplashSrc("1497633762265-9d179a990aa6", { w: 800, h: 1000 }),
    Environment: unsplashSrc("1542601906990-b4d3fb778b09", { w: 800, h: 1000 }),
  },
  galleryPreview: [
    {
      title: "Education and hostel care",
      category: "Education",
      src: unsplashSrc("1497633762265-9d179a990aa6", { w: 800, h: 1000 }),
    },
    {
      title: "Bhandara and shared meals",
      category: "Meals",
      src: unsplashSrc("1593113598332-cd288d649433", { w: 800, h: 1000 }),
    },
    {
      title: "Clothes for families in need",
      category: "Volunteers",
      src: unsplashSrc("1489980557514-251d61e3eeb6", { w: 800, h: 1000 }),
    },
    {
      title: "Tree plantation drives",
      category: "Environment",
      src: unsplashSrc("1542601906990-b4d3fb778b09", { w: 800, h: 1000 }),
    },
    {
      title: "Community celebrations",
      category: "Festivals",
      src: unsplashSrc("1545389336-cf090694435e", { w: 800, h: 1000 }),
    },
    {
      title: "Volunteers in action",
      category: "Daily Life",
      src: unsplashSrc("1559027615-cd4628902d4a", { w: 800, h: 1000 }),
    },
  ],
  stories: {
    "Children we shelter": unsplashSrc("1503676260728-1c00da094a0b", { w: 1000, h: 625 }),
    "Families at our Bhandara": unsplashSrc("1488521787991-ed7bbaae773c", { w: 1000, h: 625 }),
    "Gau seva well-wishers": unsplashSrc("1546445317-29f4545e9d53", { w: 1000, h: 625 }),
    "Our elder-care promise": unsplashSrc("1576765608535-5f04d1e3f289", { w: 1000, h: 625 }),
  },
  team: [
    unsplashSrc("1507003211169-0a1dd7228f2d", { w: 240, h: 240 }),
    unsplashSrc("1438761681033-6461ffad8d80", { w: 240, h: 240 }),
    unsplashSrc("1544005313-94ddf0286df2", { w: 240, h: 240 }),
    unsplashSrc("1559839734-2b71ea197ec2", { w: 240, h: 240 }),
    unsplashSrc("1600880292203-757bb62b4baf", { w: 240, h: 240 }),
    unsplashSrc("1534528741775-53994a69daeb", { w: 240, h: 240 }),
    unsplashSrc("1523240795612-9a054b0db644", { w: 240, h: 240 }),
  ],
  blog: {
    "education-and-hostel-support": unsplashSrc("1503676260728-1c00da094a0b", {
      w: 1200,
      h: 750,
    }),
    "bhandara-and-clothing-seva": unsplashSrc("1488521787991-ed7bbaae773c", {
      w: 1200,
      h: 750,
    }),
    "tree-plantation-and-gau-seva": unsplashSrc("1542601906990-b4d3fb778b09", {
      w: 1200,
      h: 750,
    }),
    "upcoming-old-age-home": unsplashSrc("1576765608535-5f04d1e3f289", {
      w: 1200,
      h: 750,
    }),
  },
  events: unsplashSrc("1559027615-cd4628902d4a", { w: 1000, h: 625 }),
} as const;

export type GalleryCategory = keyof typeof media.gallery;
export type ProgramSlug = keyof typeof media.programs;
