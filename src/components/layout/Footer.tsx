import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { DISCLAIMER, site } from "@/config/site";
import { SocialIcon } from "@/components/ui/Social";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "How we work", href: "/#process" },
      { label: "Existing clients", href: "/#clients" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Mutual Funds", href: "/mutual-funds" },
      { label: "SIP Planning", href: "/sip" },
      { label: "Stock Market", href: "/stock-market" },
      { label: "Real Estate", href: "/real-estate" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "SIP calculator", href: "/calculators" },
      { label: "Lumpsum calculator", href: "/calculators" },
      { label: "Goals we plan for", href: "/#goals" },
      { label: "Start your KYC", href: "/#kyc" },
    ],
  },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Footer() {
  const c = site.contact;
  const r = site.registration;
  return (
    <footer className="on-navy bg-navy text-sm text-on-dark">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs">
            Helping families in {site.city} invest in the stock market, mutual funds and real estate, with honest guidance and a plan they
            can follow.
          </p>
          {site.social.length > 0 && (
            <ul className="mt-6 flex gap-3" aria-label="Social media">
              {site.social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    {...ext}
                    aria-label={`${s.name} (opens in a new tab)`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:border-royal hover:bg-royal"
                  >
                    <SocialIcon name={s.name} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
            <h2 className="font-display text-base font-semibold text-white">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="md:col-span-2 lg:col-span-3">
          <h2 className="font-display text-base font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
              <span>
                {c.phones.map((p) => (
                  <a key={p.href} href={`tel:${p.href}`} className="block py-1 hover:text-white">{p.label}</a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
              <a href={`mailto:${c.email}`} className="break-all hover:text-white">{c.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
              <span>
                {c.address}
                <a href={c.mapUrl} {...ext} className="mt-1 block font-semibold text-cyan-light hover:text-white">
                  View on Google Maps<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-x py-7 text-[0.8rem] leading-relaxed">
          <h2 className="font-display text-sm font-semibold text-white">Grievance redressal</h2>
          <p className="mt-2">
            Write to our grievance officer, {site.founder.name}, at{" "}
            <a href={`mailto:${c.email}`} className="text-cyan-light underline hover:text-white">{c.email}</a> or call{" "}
            <a href={`tel:${c.phoneHref}`} className="text-cyan-light underline hover:text-white">{c.phone}</a>. We respond within 7 working days.
            If you are not satisfied, you can escalate to{" "}
            <a href="https://www.amfiindia.com/" {...ext} className="text-cyan-light underline hover:text-white">AMFI</a>,{" "}
            <a href="https://scores.sebi.gov.in/" {...ext} className="text-cyan-light underline hover:text-white">SEBI SCORES</a> and, after that,{" "}
            <a href="https://smartodr.in/" {...ext} className="text-cyan-light underline hover:text-white">SMART ODR</a>.
          </p>
        </div>
      </div>

      <div id="disclosures" className="border-t border-white/15">
        <div className="container-x py-7 text-xs leading-relaxed text-on-dark-muted">
          <h2 className="font-display text-sm font-semibold text-white">Important</h2>
          <p className="mt-2">
            {site.name} is an AMFI-registered mutual fund distributor (ARN: {r.arn}, EUIN: {r.euin}), not a SEBI-registered investment
            adviser.{r.sebi && ` SEBI registration: ${r.sebi}.`} We earn trail commission from fund houses on the regular plans we distribute,
            disclosed to you before you invest. {DISCLAIMER} Investments in the securities market are subject to market risks. 9 out of 10
            individual traders in the equity futures and options segment incurred net losses (SEBI study). Derivatives can lose more than you
            put in; trade them only if you understand the risk. Real estate is not regulated by SEBI; check RERA registration before investing.
            Calculator results are illustrations based on assumed returns.
          </p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-7 gap-y-3 py-6 text-[0.8rem]">
          <p>© {new Date().getFullYear()} {site.name}.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
            <li><Link href="#disclosures" className="hover:text-white">Disclosures</Link></li>
            <li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
