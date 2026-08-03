"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { volunteerSchema } from "@/schemas/volunteer";
import { useToast } from "@/providers/toast-provider";

export function VolunteerForm() {
  const { push } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      city: String(form.get("city") ?? ""),
      skills: String(form.get("skills") ?? ""),
      availability: String(form.get("availability") ?? ""),
      interests: String(form.get("interests") ?? ""),
      experience: String(form.get("experience") ?? "") || undefined,
      emergencyContact: String(form.get("emergencyContact") ?? ""),
    };

    const parsed = volunteerSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        next[String(issue.path[0] ?? "form")] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLoading(false);
    event.currentTarget.reset();
    push({
      variant: "success",
      title: "Welcome to our family of changemakers",
      description: "We'll connect soon about volunteer opportunities.",
    });
  }

  const fields = [
    { id: "name", label: "Full name", type: "text", placeholder: "Your full name" },
    { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { id: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
    { id: "city", label: "City", type: "text", placeholder: "Ahmedabad" },
    { id: "skills", label: "Skills", type: "text", placeholder: "e.g. caregiving, teaching, events" },
    { id: "availability", label: "Availability", type: "text", placeholder: "Weekends / weekday evenings" },
    { id: "interests", label: "Interests", type: "text", placeholder: "Old age home, medical camps…" },
    { id: "emergencyContact", label: "Emergency contact", type: "text", placeholder: "Name and phone number" },
  ] as const;

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={`volunteer-${field.id}`}>{field.label}</Label>
            <Input
              id={`volunteer-${field.id}`}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              error={Boolean(errors[field.id])}
            />
            {errors[field.id] ? (
              <p className="text-sm text-error">{errors[field.id]}</p>
            ) : null}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <Label htmlFor="volunteer-experience">Experience (optional)</Label>
        <Textarea
          id="volunteer-experience"
          name="experience"
          rows={4}
          placeholder="Tell us about any relevant experience."
        />
      </div>
      <Button type="submit" loading={loading} fullWidth className="sm:w-auto">
        Submit Application
      </Button>
    </form>
  );
}
