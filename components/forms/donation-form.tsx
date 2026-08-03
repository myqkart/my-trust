"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { donationConfig } from "@/config/donation";
import { donationSchema } from "@/schemas/donation";
import { useToast } from "@/providers/toast-provider";
import { cn } from "@/utils/cn";
import { formatCurrency } from "@/utils/format";

export function DonationForm() {
  const { push } = useToast();
  const [amount, setAmount] = useState<number>(donationConfig.presets[1]);
  const [custom, setCustom] = useState("");
  const [category, setCategory] = useState(donationConfig.categories[0].id);
  const [recurring, setRecurring] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedAmount = useMemo(() => {
    const parsed = Number(custom);
    return custom && !Number.isNaN(parsed) && parsed > 0 ? parsed : amount;
  }, [amount, custom]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      amount: selectedAmount,
      category,
      recurring,
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? "") || undefined,
      message: String(form.get("message") ?? "") || undefined,
    };

    const parsed = donationSchema.safeParse(payload);
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
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    push({
      variant: "success",
      title: "Thank you for helping create another story of hope",
      description: `${formatCurrency(selectedAmount)} support recorded for review.`,
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div>
        <p className="mb-3 text-sm font-semibold text-primary">Choose an amount</p>
        <div className="flex flex-wrap gap-3">
          {donationConfig.presets.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setAmount(preset);
                setCustom("");
              }}
              className={cn(
                "rounded-[var(--radius-button)] border px-4 py-3 text-sm font-semibold transition-colors",
                selectedAmount === preset && !custom
                  ? "border-accent bg-soft/50 text-primary"
                  : "border-border bg-white text-secondary hover:bg-soft/30",
              )}
            >
              {formatCurrency(preset)}
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor="donation-custom">Custom amount</Label>
          <Input
            id="donation-custom"
            inputMode="numeric"
            placeholder="Enter amount"
            value={custom}
            onChange={(event) => setCustom(event.target.value)}
            error={Boolean(errors.amount)}
          />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-primary">Support category</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {donationConfig.categories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={cn(
                "rounded-[var(--radius-card)] border p-4 text-left transition-colors",
                category === item.id
                  ? "border-accent bg-soft/40"
                  : "border-border bg-white hover:bg-soft/20",
              )}
            >
              <span className="block font-semibold text-primary">{item.label}</span>
              <span className="mt-1 block text-sm text-muted">{item.impact}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-[var(--radius-card)] border border-border bg-white px-4 py-3">
        <div>
          <p className="font-semibold text-primary">Monthly support</p>
          <p className="text-sm text-muted">Make this a recurring contribution</p>
        </div>
        <Switch checked={recurring} onCheckedChange={setRecurring} aria-label="Recurring donation" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="donation-name">Name</Label>
          <Input
            id="donation-name"
            name="name"
            autoComplete="name"
            placeholder="Name on the receipt"
            error={Boolean(errors.name)}
          />
          {errors.name ? <p className="text-sm text-error">{errors.name}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="donation-email">Email</Label>
          <Input
            id="donation-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            error={Boolean(errors.email)}
          />
          {errors.email ? <p className="text-sm text-error">{errors.email}</p> : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="donation-phone">Phone (optional)</Label>
        <Input
          id="donation-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
        />
      </div>
      <Button type="submit" loading={loading} fullWidth variant="gradient">
        Continue with {formatCurrency(selectedAmount)}
      </Button>
      <p className="text-center text-sm text-muted">{donationConfig.taxBenefitsNote}</p>
    </form>
  );
}
