import { STATISTICS } from "@/constants/statistics";

/** Homepage impact figures. */
export const homepageStatistics = [
  { label: "Years of Service", value: STATISTICS.yearsOfService },
  { label: "Serving Since", value: STATISTICS.established },
  { label: "Focus Areas", value: STATISTICS.programs },
  { label: "Based in", value: STATISTICS.city },
] as const;
