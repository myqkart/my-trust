import { donationPlans } from "@/data/demo";

const categories = donationPlans.map((plan) => ({
  id: plan.id,
  label: plan.label,
  impact: plan.impact,
  amount: plan.amount,
  amountLabel: plan.amountLabel,
}));

/**
 * Donation categories from ai/demo-data.md.
 */
export const donationConfig = {
  currency: "INR" as const,
  currencySymbol: "₹" as const,
  presets: [501, 1100, 2500, 5100, 11000] as const,
  categories,
  recurringEnabled: true as const,
  taxBenefitsNote: "Yes, eligible donations qualify under Section 80G.",
};

export type DonationConfig = typeof donationConfig;
