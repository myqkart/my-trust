import { donationPaymentInfo, donationPlans } from "@/data/demo";

/**
 * Donation presets and payment methods shown on /donate.
 */
export const donationConfig = {
  currency: "INR" as const,
  currencySymbol: "₹" as const,
  presets: [501, 1100, 2500, 5100, 11000] as const,
  plans: donationPlans,
  payment: donationPaymentInfo,
  methods: [
    {
      id: "bank" as const,
      label: "Account & IFSC",
      description: "Transfer directly to our trust bank account",
    },
    {
      id: "gpay" as const,
      label: "Google Pay QR",
      description: "Scan and pay with Google Pay",
    },
  ],
  taxBenefitsNote:
    "A receipt is issued for every contribution. Please contact us for tax-exemption details.",
};

export type DonationConfig = typeof donationConfig;
export type DonationPaymentMethod = (typeof donationConfig.methods)[number]["id"];
