import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Services } from "@/components/sections/Services";
import { Calculator } from "@/components/sections/Calculator";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FundCategories } from "@/components/sections/FundCategories";
import { MarketSnapshot } from "@/components/sections/MarketSnapshot";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/lib/content";

/**
 * Each below-the-fold section sits in its own <Suspense> boundary. Everything is still server-rendered,
 * but React hydrates the sections in separate small tasks instead of one long one (faster on phones).
 */
export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <Hero />
      <Suspense><Ticker /></Suspense>
      <Suspense><Services /></Suspense>
      <section id="calculator" aria-labelledby="calc-title" className="bg-bg-soft py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            id="calc-title"
            eyebrow="SIP calculator"
            title={<>See what your money <span className="text-gradient">could become</span></>}
            intro="Move the sliders to estimate the future value of a SIP or a one-time investment."
          />
          <div className="mt-12">
            <Suspense>
              <Calculator />
            </Suspense>
          </div>
        </div>
      </section>
      <Suspense><WhyUs /></Suspense>
      <Suspense><HowItWorks /></Suspense>
      <Suspense><FundCategories /></Suspense>
      <Suspense><MarketSnapshot /></Suspense>
      <Suspense><Testimonials /></Suspense>
      <Suspense><Insights /></Suspense>
      <Suspense><Faq /></Suspense>
      <Suspense><CtaBanner /></Suspense>
      <Suspense><ContactForm /></Suspense>
    </>
  );
}
