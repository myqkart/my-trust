"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema } from "@/schemas/contact";
import { useToast } from "@/providers/toast-provider";

export function ContactForm() {
  const { push } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? "") || undefined,
      subject: String(form.get("subject") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0] ?? "form");
        next[key] = issue.message;
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
      title: "Message received",
      description: "Thank you for reaching out. We'll respond soon.",
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            error={Boolean(errors.name)}
          />
          {errors.name ? <p className="text-sm text-error">{errors.name}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            error={Boolean(errors.email)}
          />
          {errors.email ? <p className="text-sm text-error">{errors.email}</p> : null}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-subject">Subject</Label>
          <Input
            id="contact-subject"
            name="subject"
            placeholder="How can we help?"
            error={Boolean(errors.subject)}
          />
          {errors.subject ? <p className="text-sm text-error">{errors.subject}</p> : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Share a few details and we'll get back to you."
          error={Boolean(errors.message)}
        />
        {errors.message ? <p className="text-sm text-error">{errors.message}</p> : null}
      </div>
      <Button type="submit" loading={loading} fullWidth className="sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
