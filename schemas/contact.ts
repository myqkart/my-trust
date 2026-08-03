import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number").optional(),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Please share a bit more detail"),
});

export type ContactInput = z.infer<typeof contactSchema>;
