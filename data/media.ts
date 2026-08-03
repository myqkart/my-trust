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
  featuredStory: unsplashSrc("1566616213894-2d4e1baee5d8", { w: 1000, h: 1250 }),
  oldAgeHome: unsplashSrc("1516734212186-a967f81ad0d7", { w: 1200, h: 900 }),
  programs: {
    "old-age-home": unsplashSrc("1576765608535-5f04d1e3f289", { w: 1000, h: 750 }),
    "medical-camps": unsplashSrc("1576091160399-112ba8d25d1d", { w: 1000, h: 750 }),
    "food-distribution": unsplashSrc("1488521787991-ed7bbaae773c", { w: 1000, h: 750 }),
    education: unsplashSrc("1503676260728-1c00da094a0b", { w: 1000, h: 750 }),
    "women-empowerment": unsplashSrc("1573496359142-b8d87734a5a2", { w: 1000, h: 750 }),
    environment: unsplashSrc("1542601906990-b4d3fb778b09", { w: 1000, h: 750 }),
    "disaster-relief": unsplashSrc("1469571486292-0ba58a3f068b", { w: 1000, h: 750 }),
  },
  gallery: {
    "Daily Life": unsplashSrc("1516734212186-a967f81ad0d7", { w: 800, h: 1000 }),
    Residents: unsplashSrc("1566616213894-2d4e1baee5d8", { w: 800, h: 1000 }),
    Healthcare: unsplashSrc("1582750433449-648ed127bb54", { w: 800, h: 1000 }),
    Yoga: unsplashSrc("1544367567-0f2fcb009e0b", { w: 800, h: 1000 }),
    Meals: unsplashSrc("1593113598332-cd288d649433", { w: 800, h: 1000 }),
    Festivals: unsplashSrc("1545389336-cf090694435e", { w: 800, h: 1000 }),
    Volunteers: unsplashSrc("1559027615-cd4628902d4a", { w: 800, h: 1000 }),
    Education: unsplashSrc("1497633762265-9d179a990aa6", { w: 800, h: 1000 }),
    "Medical Camps": unsplashSrc("1576091160399-112ba8d25d1d", { w: 800, h: 1000 }),
    Environment: unsplashSrc("1542601906990-b4d3fb778b09", { w: 800, h: 1000 }),
  },
  galleryPreview: [
    {
      title: "Morning yoga with residents",
      category: "Yoga",
      src: unsplashSrc("1544367567-0f2fcb009e0b", { w: 800, h: 1000 }),
    },
    {
      title: "Shared meals, shared dignity",
      category: "Meals",
      src: unsplashSrc("1593113598332-cd288d649433", { w: 800, h: 1000 }),
    },
    {
      title: "Healthcare with compassion",
      category: "Healthcare",
      src: unsplashSrc("1582750433449-648ed127bb54", { w: 800, h: 1000 }),
    },
    {
      title: "Festival celebrations",
      category: "Festivals",
      src: unsplashSrc("1545389336-cf090694435e", { w: 800, h: 1000 }),
    },
    {
      title: "Volunteers in action",
      category: "Volunteers",
      src: unsplashSrc("1559027615-cd4628902d4a", { w: 800, h: 1000 }),
    },
    {
      title: "Medical camp outreach",
      category: "Medical Camps",
      src: unsplashSrc("1576091160399-112ba8d25d1d", { w: 800, h: 1000 }),
    },
  ],
  stories: {
    "Sushila Ben": unsplashSrc("1566616213894-2d4e1baee5d8", { w: 1000, h: 625 }),
    "Rohan Shah": unsplashSrc("1507003211169-0a1dd7228f2d", { w: 1000, h: 625 }),
    "Priya Mehta": unsplashSrc("1494790108377-be9c29b29330", { w: 1000, h: 625 }),
    "Dr. Amit Desai": unsplashSrc("1612349317150-e413f6a5b16d", { w: 1000, h: 625 }),
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
    "healthy-ageing-with-dignity": unsplashSrc("1571019613454-1cb2f99b2d8b", {
      w: 1200,
      h: 750,
    }),
    "volunteer-story-rohan": unsplashSrc("1559027615-cd4628902d4a", {
      w: 1200,
      h: 750,
    }),
    "nutrition-for-seniors": unsplashSrc("1593113598332-cd288d649433", {
      w: 1200,
      h: 750,
    }),
    "csr-partnerships-that-matter": unsplashSrc("1454165804606-c3d57bc86b40", {
      w: 1200,
      h: 750,
    }),
  },
  events: unsplashSrc("1559027615-cd4628902d4a", { w: 1000, h: 625 }),
} as const;

export type GalleryCategory = keyof typeof media.gallery;
export type ProgramSlug = keyof typeof media.programs;
