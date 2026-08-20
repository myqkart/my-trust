import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { WaveDivider } from "@/components/ui/svg-decorations";
import { footerNavigation } from "@/config/navigation";
import { socialLinks } from "@/config/social";
import { siteConfig } from "@/config/site";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto bg-primary text-white">
      <div className="absolute inset-x-0 -top-px text-primary">
        <WaveDivider className="rotate-180 text-primary" />
      </div>

      <Container className="pt-24 pb-28 md:pb-28">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-2xl font-bold">{siteConfig.name}</p>
            <p className="mt-4 max-w-md text-white/70">{siteConfig.tagline}</p>

            <div className="mt-8 space-y-3 text-sm text-white/75">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-soft" aria-hidden />
                <span>
                  {siteConfig.name}
                  <br />
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.postalCode}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-soft" aria-hidden />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-soft" aria-hidden />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          <FooterColumn title="Explore" links={footerNavigation.explore} />
          <FooterColumn
            title="Get Involved"
            links={footerNavigation.getInvolved}
          />
          <FooterColumn
            title="Transparency"
            links={footerNavigation.transparency}
          />
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/60">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {footerNavigation.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  className="inline-flex rounded-[14px] border border-white/15 px-3 py-2 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
