"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { donationConfig, type DonationPaymentMethod } from "@/config/donation";
import { contactInfo } from "@/data/demo";
import { useToast } from "@/providers/toast-provider";
import { cn } from "@/utils/cn";

function CopyField({ label, value }: { label: string; value: string }) {
  const { push } = useToast();
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      push({
        variant: "success",
        title: `${label} copied`,
        description: value,
      });
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      push({
        variant: "error",
        title: "Could not copy",
        description: "Please copy the details manually.",
      });
    }
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-border bg-white px-4 py-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">
            {label}
          </p>
          <p className="mt-1 break-all font-semibold text-primary">{value}</p>
        </div>
        <button
          type="button"
          onClick={copyValue}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-[12px] border border-border text-secondary transition-colors hover:bg-soft/40"
          aria-label={`Copy ${label}`}
        >
          {copied ? (
            <Check className="size-4 text-accent" aria-hidden />
          ) : (
            <Copy className="size-4" aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}

/**
 * Manual donation instructions — bank transfer or GPay QR.
 * No payment gateway; donors pay outside the site, then contact us for a receipt.
 */
export function DonationForm() {
  const [method, setMethod] = useState<DonationPaymentMethod>("bank");
  const bank = donationConfig.payment.bank;
  const gpay = donationConfig.payment.gpay;

  const whatsappHref = `https://wa.me/${contactInfo.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
    "Namaste. I have donated to Navchetna Charitable Trust. Sharing payment details for a receipt.",
  )}`;
  const mailtoHref = `mailto:${contactInfo.donateEmail}?subject=${encodeURIComponent(
    "Donation receipt request",
  )}&body=${encodeURIComponent(
    "Namaste,\n\nI have donated to Navchetna Charitable Trust.\n\nAmount:\nPayment method (bank / Google Pay):\nTransaction / UTR reference:\n\nPlease issue a receipt.\n\nName:\nPhone:\n",
  )}`;

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-sm font-semibold text-primary">Choose a payment method</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {donationConfig.methods.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMethod(item.id)}
              className={cn(
                "rounded-[var(--radius-card)] border p-4 text-left transition-colors",
                method === item.id
                  ? "border-accent bg-soft/40"
                  : "border-border bg-white hover:bg-soft/20",
              )}
            >
              <span className="block font-semibold text-primary">{item.label}</span>
              <span className="mt-1 block text-sm text-muted">{item.description}</span>
            </button>
          ))}
        </div>
      </div>

      {method === "bank" ? (
        <div className="space-y-3">
          <CopyField label="Account name" value={bank.accountName} />
          <CopyField label="Account number" value={bank.accountNumber} />
          <CopyField label="IFSC" value={bank.ifsc} />
          {bank.bankName ? <CopyField label="Bank" value={bank.bankName} /> : null}
          <p className="text-sm text-muted">
            Transfer any amount using these details. Use NEFT, IMPS, or RTGS from your bank app.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex min-h-[260px] items-center justify-center rounded-[var(--radius-card)] border border-border bg-white p-6">
            {gpay.qrSrc ? (
              <OptimizedImage
                src={gpay.qrSrc}
                alt={gpay.qrAlt}
                width={220}
                height={220}
                className="size-[220px] rounded-[16px] object-contain"
              />
            ) : (
              <p className="max-w-xs text-center text-sm text-muted">
                Google Pay QR will appear here once added. Until then, use bank transfer or call{" "}
                <a href={`tel:${contactInfo.phone}`} className="font-semibold text-secondary">
                  {contactInfo.phone}
                </a>
                .
              </p>
            )}
          </div>
          <p className="text-center text-sm text-muted">
            Open Google Pay, scan the QR, and complete your contribution.
          </p>
        </div>
      )}

      <div className="rounded-[var(--radius-card)] border border-border bg-soft/30 p-4">
        <p className="font-semibold text-primary">After you pay</p>
        <p className="mt-2 text-sm text-muted">
          Send your name, amount, and payment screenshot or UTR on WhatsApp or email. We will
          issue a receipt.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gradient" className="sm:flex-1">
            <Link href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden />
              WhatsApp us
            </Link>
          </Button>
          <Button asChild variant="secondary" className="sm:flex-1">
            <a href={mailtoHref}>
              <Mail aria-hidden />
              Email for receipt
            </a>
          </Button>
        </div>
      </div>

      <p className="text-center text-sm text-muted">{donationConfig.taxBenefitsNote}</p>
    </div>
  );
}
