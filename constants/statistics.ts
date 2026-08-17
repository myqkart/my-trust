import { statisticsInfo } from "@/data/demo";

/**
 * Impact statistics shown across the site.
 */
export const STATISTICS = {
  yearsOfService: statisticsInfo.yearsOfService,
  established: statisticsInfo.established,
  programs: statisticsInfo.programs,
  education: statisticsInfo.education,
  food: statisticsInfo.food,
  cowWelfare: statisticsInfo.cowWelfare,
  trees: statisticsInfo.trees,
  helpingPoor: statisticsInfo.helpingPoor,
  city: statisticsInfo.city,
} as const;
