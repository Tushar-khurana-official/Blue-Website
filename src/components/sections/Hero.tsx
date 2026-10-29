import { BadgeCheck, FileCheck2, ShieldCheck, Star } from "lucide-react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { HeroChart } from "./HeroChart";

const badges = [
  { icon: BadgeCheck, label: "AMFI Registered", detail: `ARN: ${site.registration.arn}` },
  { icon: ShieldCheck, label: "SEBI Registered", detail: site.registration.sebi },
  { icon: FileCheck2, label: "100% paperless KYC", detail: "Start in minutes" },
  { icon: Star, label: "4.8/5 client rating", detail: "Sample figure" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-bg relative overflow-hidden">
      {/* Floating blue shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blob blob-a -left-24 top-10 h-72 w-72 text-royal/40" />
        <div className="blob blob-b right-[-6rem] top-1/3 h-80 w-80 text-sky/40" />
        <div className="blob blob-c bottom-[-8rem] left-1/3 h-72 w-72 text-royal/25" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border)_45%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border)_45%,transparent)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
      </div>

      <div className="container-x relative grid items-center gap-12 pb-20 pt-12 md:pt-16 lg:grid-cols-2 lg:pb-28">
        <div>
          <p className="eyebrow rounded-full border border-line bg-surface/70 px-3 py-1.5 backdrop-blur">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky" />
            SIP · Mutual Funds · Stock Market
          </p>
          <h1 id="hero-title" className="mt-6 text-[2.5rem] font-extrabold leading-[1.08] sm:text-6xl lg:text-[4rem]">
            Grow your <span className="text-gradient">wealth</span>, one SIP at a time.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
            Goal-based SIPs, handpicked mutual funds and honest stock market guidance, from a team that explains every step and
            stays with you for the long run.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/sip" size="lg">
              Start SIP
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Free Consultation
            </Button>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-3 min-[440px]:grid-cols-2 sm:max-w-xl">
            {badges.map(({ icon: I, label, detail }) => (
              <li key={label} className="glass flex items-center gap-3 rounded-2xl px-3.5 py-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal/12 text-link">
                  <I aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-tight">{label}</span>
                  <span className="block truncate text-xs text-muted">{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <HeroChart />
      </div>

      <div className="container-x relative pb-14">
        <dl className="glass grid grid-cols-2 gap-6 rounded-[24px] px-6 py-7 md:grid-cols-4 md:px-10">
          {site.stats.map((s) => (
            <div key={s.label} className="flex flex-col text-center">
              <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="order-1 font-display text-2xl font-extrabold sm:text-3xl md:text-4xl">
                <span className="text-gradient">
                  <Counter value={s.value} prefix={"prefix" in s ? s.prefix : ""} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} />
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-center text-xs text-muted">Figures are illustrative placeholders.</p>
      </div>
    </section>
  );
}
