import { z } from "zod";
import { donationConfig } from "@/config/donation";

const categoryIds = donationConfig.categories.map((category) => category.id) as [
  string,
  ...string[],
];

export const donationSchema = z.object({
  amount: z.number().positive("Please enter a donation amount"),
  category: z.enum(categoryIds),
  recurring: z.boolean().default(false),
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10).optional(),
  pan: z.string().optional(),
  message: z.string().max(500).optional(),
});

export type DonationInput = z.infer<typeof donationSchema>;
