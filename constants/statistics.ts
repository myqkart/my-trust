import { statisticsInfo } from "@/data/demo";

/**
 * Impact statistics from ai/demo-data.md.
 */
export const STATISTICS = {
  residents: statisticsInfo.residents,
  meals: statisticsInfo.meals,
  medicalCamps: statisticsInfo.medicalCamps,
  volunteers: statisticsInfo.volunteers,
  projects: statisticsInfo.csrPartners,
  yearsOfService: statisticsInfo.yearsOfService,
  trees: statisticsInfo.trees,
  familiesSupported: statisticsInfo.familiesSupported,
  childrenEducated: statisticsInfo.childrenEducated,
  annualBeneficiaries: statisticsInfo.annualBeneficiaries,
  donations: statisticsInfo.annualBeneficiaries,
} as const;
