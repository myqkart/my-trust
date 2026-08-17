import { describe, expect, it } from "vitest";
import { contactSchema } from "@/schemas/contact";
import { donationSchema } from "@/schemas/donation";
import { volunteerSchema } from "@/schemas/volunteer";
import { newsletterSchema } from "@/schemas/newsletter";

describe("contactSchema", () => {
  it("accepts a valid contact payload", () => {
    const result = contactSchema.safeParse({
      name: "Priya Mehta",
      email: "priya@example.com",
      phone: "9876543210",
      subject: "Visit enquiry",
      message: "I would like to visit the old age home this weekend.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects short messages and invalid email", () => {
    const result = contactSchema.safeParse({
      name: "A",
      email: "not-an-email",
      subject: "Hi",
      message: "Too short",
    });
    expect(result.success).toBe(false);
  });
});

describe("donationSchema", () => {
  it("accepts a valid donation payload", () => {
    const result = donationSchema.safeParse({
      amount: 1100,
      category: "sponsor-medicine",
      recurring: false,
      name: "Rohan Shah",
      email: "rohan@example.com",
    });
    expect(result.success).toBe(true);
  });

  it("rejects zero or negative amounts", () => {
    const result = donationSchema.safeParse({
      amount: 0,
      category: "general",
      name: "Rohan Shah",
      email: "rohan@example.com",
    });
    expect(result.success).toBe(false);
  });
});

describe("volunteerSchema", () => {
  it("accepts a complete volunteer application", () => {
    const result = volunteerSchema.safeParse({
      name: "Aarav Shah",
      email: "aarav@example.com",
      phone: "9876543210",
      city: "Ahmedabad",
      skills: "Teaching and event support",
      availability: "Weekends",
      interests: "Companionship visits",
      emergencyContact: "Meena Shah 9876500000",
    });
    expect(result.success).toBe(true);
  });

  it("requires emergency contact", () => {
    const result = volunteerSchema.safeParse({
      name: "Aarav Shah",
      email: "aarav@example.com",
      phone: "9876543210",
      city: "Ahmedabad",
      skills: "Teaching",
      availability: "Weekends",
      interests: "Events",
      emergencyContact: "",
    });
    expect(result.success).toBe(false);
  });
});

describe("newsletterSchema", () => {
  it("accepts valid emails only", () => {
    expect(newsletterSchema.safeParse({ email: "hello@navchetna.org" }).success).toBe(
      true,
    );
    expect(newsletterSchema.safeParse({ email: "bad@" }).success).toBe(false);
  });
});
