import { Award, BadgeCheck } from "lucide-react";
import { Values } from "@/components/sections/Values";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("About Us", `About ${site.name}, ${site.city}: who we are, how we work and what we stand for.`, "/about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Helping families in {site.city} <span className="text-gradient">invest with confidence</span></>}
        intro={site.description}
      />
      <section aria-labelledby="founder-title" className="container-x grid items-center gap-10 py-20 md:py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky" />The person behind your plan</p>
          <h2 id="founder-title" className="mt-3 text-3xl font-bold md:text-[2.6rem] md:leading-tight">{site.founder.name}</h2>
          <p className="mt-1 font-semibold text-link">{site.founder.role}, {site.name}</p>
          <p className="mt-5 text-lg text-muted">
            {site.name} is run by {site.founder.name}, who works with each family directly: the person who writes your plan is the person who
            answers your call, years later. [Add your story here: when you started, who you serve and what makes you different.]
          </p>
          <blockquote className="mt-6 border-l-4 border-royal pl-5 font-display text-xl font-semibold">&ldquo;{site.quote}&rdquo;</blockquote>
        </div>
        <ul className="grid gap-4">
          <li className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
            <BadgeCheck aria-hidden="true" className="h-8 w-8 shrink-0 text-royal" />
            <span><span className="block font-semibold">AMFI-registered mutual fund distributor</span><span className="text-sm text-muted">ARN: {site.registration.arn}</span></span>
          </li>
          {site.certifications.map((c) => (
            <li key={c} className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
              <Award aria-hidden="true" className="h-8 w-8 shrink-0 text-royal" />
              <span><span className="block font-semibold">{c}</span><span className="text-sm text-muted">Certified</span></span>
            </li>
          ))}
        </ul>
      </section>
      <Values />
      <WhyUs />
      <HowItWorks />
      <CtaBanner />
    </>
  );
}
