import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { DISCLAIMER, nav, site } from "@/config/site";
import { SocialIcon } from "@/components/ui/Social";
import { Logo } from "./Logo";

export function Footer() {
  const c = site.contact;
  return (
    <footer className="border-t border-line bg-bg-soft pb-24 text-sm md:pb-0">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-4 max-w-xs text-muted">{site.tagline}. {site.description}</p>
          <ul className="mt-6 flex gap-3" aria-label="Social media">
            {site.social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} (opens in a new tab)`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-royal hover:bg-royal hover:text-white"
                >
                  <SocialIcon name={s.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Quick links" className="md:col-span-2">
          <h2 className="font-display text-base font-semibold">Quick links</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted hover:text-link">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal" className="md:col-span-2">
          <h2 className="font-display text-base font-semibold">Legal</h2>
          <ul className="mt-4 space-y-2.5">
            <li><Link href="/privacy" className="text-muted hover:text-link">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-muted hover:text-link">Terms of Use</Link></li>
            <li><Link href="/#faq" className="text-muted hover:text-link">FAQ</Link></li>
          </ul>
        </nav>
        <div className="md:col-span-4">
          <h2 className="font-display text-base font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li className="flex gap-3"><Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" /><a href={`tel:${c.phoneHref}`} className="hover:text-link">{c.phone}</a></li>
            <li className="flex gap-3"><Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" /><a href={`mailto:${c.email}`} className="hover:text-link">{c.email}</a></li>
            <li className="flex gap-3"><MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" />{c.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x space-y-3 py-6 text-xs leading-relaxed text-muted">
          <p>
            <strong className="font-semibold text-fg">Disclaimer:</strong> {DISCLAIMER} Investments in the securities market are subject to
            market risks. All figures and calculator results on this website are illustrative and not a guarantee of future returns.
          </p>
          <p>
            AMFI-registered Mutual Fund Distributor · ARN: {site.registration.arn} · EUIN: {site.registration.euin} · SEBI:{" "}
            {site.registration.sebi}
          </p>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
