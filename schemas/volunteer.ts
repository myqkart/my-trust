import { z } from "zod";

export const volunteerSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  city: z.string().min(2, "Please enter your city"),
  skills: z.string().min(2, "Please share your skills"),
  availability: z.string().min(2, "Please share your availability"),
  interests: z.string().min(2, "Please share your interests"),
  experience: z.string().optional(),
  emergencyContact: z.string().min(2, "Please provide an emergency contact"),
});

export type VolunteerInput = z.infer<typeof volunteerSchema>;
