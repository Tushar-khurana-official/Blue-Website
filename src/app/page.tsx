import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Values } from "@/components/sections/Values";
import { Calculator } from "@/components/sections/Calculator";
import { Goals } from "@/components/sections/Goals";
import { Kyc } from "@/components/sections/Kyc";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { FundHouses } from "@/components/sections/FundHouses";
import { Clients } from "@/components/sections/Clients";
import { Faq } from "@/components/sections/Faq";
import { Reviews } from "@/components/sections/Reviews";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/lib/content";
import { T } from "@/components/ui/T";

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
      <Suspense><Services /></Suspense>
      <Suspense><Values /></Suspense>
      <section id="tools" aria-labelledby="calc-title" className="border-y border-line bg-surface py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            id="calc-title"
            eyebrow={<T en="Try the numbers" hi="नंबर आज़माएँ" />}
            title={<T en={<>What a monthly SIP <span className="text-gradient">could become</span></>} hi={<>मासिक SIP <span className="text-gradient">कितना बन सकता है</span></>} />}
            intro={<T en="Move the sliders. The numbers are an illustration at an assumed return, not a forecast." hi="स्लाइडर चलाएँ। ये आंकड़े अनुमानित रिटर्न पर एक उदाहरण हैं, भविष्यवाणी नहीं।" />}
          />
          <div className="mt-12">
            <Suspense>
              <Calculator />
            </Suspense>
          </div>
        </div>
      </section>
      <Suspense><Goals /></Suspense>
      <Suspense><Kyc /></Suspense>
      <Suspense><HowItWorks /></Suspense>
      <Suspense><WhyUs /></Suspense>
      <Suspense><FundHouses /></Suspense>
      <Suspense><Clients /></Suspense>
      <Suspense><Reviews /></Suspense>
      <Suspense><Faq /></Suspense>
      <Suspense><ContactForm /></Suspense>
    </>
  );
}
