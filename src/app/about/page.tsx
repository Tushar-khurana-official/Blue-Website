import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Counter } from "@/components/ui/Counter";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("About Us", `About ${site.name}: our story, our approach and the team behind your investments.`, "/about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Helping families <span className="text-gradient">invest with confidence</span></>}
        intro={`${site.name} was started with a simple idea: everyone deserves honest, jargon-free guidance on growing their money. [Add your story here: when you started, who you serve and what makes you different.]`}
      />
      <section aria-label="Our numbers" className="container-x py-16">
        <dl className="glass grid grid-cols-2 gap-6 rounded-[24px] px-6 py-8 md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="flex flex-col text-center">
              <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="order-1 font-display text-3xl font-extrabold text-gradient md:text-4xl">
                <Counter value={s.value} prefix={"prefix" in s ? s.prefix : ""} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} />
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-center text-xs text-muted">Figures are illustrative placeholders.</p>
      </section>
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
