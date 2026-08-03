import { STATISTICS } from "@/constants/statistics";

/** Homepage impact figures from demo data. */
export const homepageStatistics = [
  { label: "Residents Supported", value: STATISTICS.residents },
  { label: "Meals Served", value: STATISTICS.meals },
  { label: "Medical Camps", value: STATISTICS.medicalCamps },
  { label: "Volunteers", value: STATISTICS.volunteers },
  { label: "Years of Service", value: STATISTICS.yearsOfService },
  { label: "Trees Planted", value: STATISTICS.trees },
] as const;
