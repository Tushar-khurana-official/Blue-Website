import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import { site } from "@/config/site";
import { fundHouses } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { T } from "@/components/ui/T";

/** Founder quote, the fund-house marquee and the distributor disclosure. */
export function FundHouses() {
  return (
    <section id="resources" aria-labelledby="fh-title" className="bg-bg-soft"><div className="container-x py-16 md:py-20">
      <figure className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-navy to-royal px-6 py-14 text-center text-white sm:px-14 md:py-16">
        <div aria-hidden="true" className="blob blob-a -right-16 -top-20 h-72 w-72 text-sky/40" />
        <span aria-hidden="true" className="relative block font-display text-8xl leading-[0.6] text-cyan-light/70">&ldquo;</span>
        <blockquote className="relative mx-auto mt-3 max-w-3xl font-display text-2xl font-semibold leading-snug sm:text-[2.1rem]">
          {site.quote}
        </blockquote>
        <figcaption className="relative mt-5 text-[#d6e4ff]">
          {site.founder.name}, {site.founder.role}, {site.name}
        </figcaption>
      </figure>

      <div className="mt-16">
        <SectionHeading
          id="fh-title"
          eyebrow={<T en="Fund houses we work with" hi="जिन फंड हाउस के साथ हम काम करते हैं" />}
          title={<T en={<>Your money goes to <span className="text-gradient">the fund house</span></>} hi={<>आपका पैसा सीधे <span className="text-gradient">फंड हाउस में जाता है</span></>} />}
          intro={<T en="Your money is invested directly with the fund house. It never sits with us." hi="आपका पैसा सीधे फंड हाउस में निवेश होता है। यह कभी हमारे पास नहीं रहता।" />}
        />
      </div>
      <div className="ticker marquee mt-12 overflow-hidden" tabIndex={0} aria-label="Fund houses (pauses on hover or focus)" role="region">
        <ul className="ticker-track gap-4 py-2">
          {[0, 1].map((copy) =>
            fundHouses.map((f) => (
              <li
                key={`${copy}-${f}`}
                aria-hidden={copy === 1 || undefined}
                className={`whitespace-nowrap rounded-2xl border border-line bg-surface px-6 py-4 font-semibold text-[#1e3a8a] shadow-[0_6px_18px_rgb(10_31_68/0.05)] ${copy === 1 ? "ticker-dup" : ""}`}
              >
                {f}
              </li>
            )),
          )}
        </ul>
      </div>
      <p className="mt-6 text-center text-sm text-muted">Fund house names are shown for identification only. Listing does not imply a recommendation of any scheme.</p>

      <div className="mt-10 flex flex-col gap-5 rounded-[24px] border border-[#bfd8ff] bg-surface p-7 sm:flex-row sm:p-9">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-sky text-white">
          <Info aria-hidden="true" className="h-7 w-7" />
        </span>
        <div>
          <h3 className="text-xl font-bold">Distributor, not adviser</h3>
          <p className="mt-2 text-[#223a66]">
            {site.name} is an AMFI-registered mutual fund distributor, not a SEBI-registered investment adviser. We are paid trail commission
            by the fund house on the regular plans we distribute, disclosed to you before you invest. You pay us no direct fee for
            distribution. We never promise returns.
          </p>
          <Link href="#disclosures" className="mt-3 inline-flex items-center gap-1.5 font-semibold text-link">
            Read our disclosures <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div></section>
  );
}
