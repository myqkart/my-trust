"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema } from "@/schemas/newsletter";
import { useToast } from "@/providers/toast-provider";
import { cn } from "@/utils/cn";

interface NewsletterFormProps {
  className?: string;
  light?: boolean;
}

export function NewsletterForm({ className, light }: NewsletterFormProps) {
  const { push } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }

    setLoading(true);
    // Server action / API wiring comes in forms phase.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLoading(false);
    setEmail("");
    push({
      variant: "success",
      title: "Thank you for joining our community.",
      description: "You'll hear from us when there's meaningful news to share.",
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-3", className)}
      noValidate
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={Boolean(error)}
          aria-describedby={error ? "newsletter-error" : undefined}
          className={cn(light && "border-white/20 bg-white/10 text-white placeholder:text-white/45 placeholder:opacity-100")}
        />
        <Button
          type="submit"
          loading={loading}
          variant={light ? "secondary" : "gradient"}
          className="w-full shrink-0 sm:w-auto"
        >
          Stay Connected
        </Button>
      </div>
      {error ? (
        <p id="newsletter-error" className="text-sm text-error" role="alert">
          {error}
        </p>
      ) : (
        <p className={cn("text-sm", light ? "text-white/70" : "text-muted")}>
          Occasional updates on impact, stories, and ways to help.
        </p>
      )}
    </form>
  );
}
