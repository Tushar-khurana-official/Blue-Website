import { Phone, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { credentials } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HeroChart } from "./HeroChart";

export function Hero() {
  return (
    <>
      <section aria-labelledby="hero-title" className="hero-bg relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="blob blob-a -right-24 -top-36 h-[30rem] w-[30rem] text-sky/35" />
          <div className="blob blob-b -bottom-44 -left-28 h-[32rem] w-[32rem] text-royal/55" />
        </div>

        <div className="container-x relative grid items-center gap-14 pb-24 pt-14 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[#bfe6ff]">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-sky" />
              Stock market · Mutual funds · Real estate · {site.city}
            </p>
            <h1 id="hero-title" className="mt-6 text-[2.6rem] font-extrabold leading-[1.07] sm:text-6xl lg:text-[4rem]">
              Smart investments.
              <br />
              Strong growth.
              <br />
              <span className="text-sky">Secure future.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-on-dark md:text-xl">{site.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Start planning
              </Button>
              <Button href={`tel:${site.contact.phoneHref}`} size="lg" variant="dark">
                <Phone aria-hidden="true" className="h-5 w-5" /> {site.contact.phone}
              </Button>
            </div>
            <p className="mt-5 text-[0.95rem] text-[#bfd3f5]">Your first consultation is free. No obligation, and no product pushed on you.</p>
            <p className="mt-2 text-sm text-on-dark-muted">Investments are subject to market risks. Read all related documents carefully.</p>
          </div>
          <HeroChart />
        </div>
      </section>

      <section aria-label="Credentials" className="border-t border-white/10 bg-navy">
        <ul className="container-x grid grid-cols-1 gap-5 py-7 min-[480px]:grid-cols-2 lg:grid-cols-5">
          {credentials.map((c) => (
            <li key={c.title} className="flex items-center gap-3 text-sm leading-snug text-on-dark">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/8 text-sky">
                <Icon name={c.icon} />
              </span>
              <span>
                <span className="block font-semibold text-white">{c.title}</span>
                {c.detail}
              </span>
            </li>
          ))}
        </ul>
        <p className="container-x border-t border-white/10 py-3 text-center text-xs text-on-dark-muted">
          AMFI-registered mutual fund distributor · ARN: {site.registration.arn} · EUIN: {site.registration.euin}
        </p>
      </section>
    </>
  );
}
