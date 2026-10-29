import { Calculator } from "@/components/sections/Calculator";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("SIP Planning", "Goal-based SIP planning from ₹500 a month: the right amount, the right funds, and annual step-ups as your income grows.", "/sip");

export default function SipPage() {
  return (
    <>
      <PageHero
        eyebrow="SIP planning"
        title={<>Small monthly steps, <span className="text-gradient">big long-term goals</span></>}
        intro="A Systematic Investment Plan invests a fixed amount every month. We size each SIP to a goal, choose the funds and step it up as your income grows."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" size="lg">Start SIP</Button>
          <Button href="#calculator" size="lg" variant="outline">Try the calculator</Button>
        </div>
      </PageHero>
      <section id="calculator" aria-label="SIP calculator" className="container-x py-16 md:py-24">
        <Calculator />
      </section>
      <HowItWorks />
      <Faq />
      <CtaBanner />
    </>
  );
}
