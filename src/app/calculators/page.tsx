import { Calculator } from "@/components/sections/Calculator";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("SIP & Lumpsum Calculators", "Free SIP and lumpsum calculators: see invested amount, estimated returns and total value. Illustrative only.", "/calculators");

export default function CalculatorsPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", name: "SIP & Lumpsum Calculator", applicationCategory: "FinanceApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }, url: `${site.url}/calculators` }} />
      <PageHero
        eyebrow="Calculators"
        title={<>Plan with <span className="text-gradient">numbers</span>, not guesses</>}
        intro="Estimate how a monthly SIP or a one-time investment could grow. Results are illustrations based on the return you assume."
      />
      <section aria-label="Calculator" className="container-x py-16 md:py-24">
        <Calculator />
        <div className="mx-auto mt-10 max-w-3xl space-y-2 text-sm text-muted">
          <p><strong className="text-fg">How it works:</strong> SIP value = P × [((1 + i)ⁿ − 1) ÷ i] × (1 + i), where P is the monthly amount, i is the annual rate ÷ 12, and n is the number of months. Lumpsum value = P × (1 + r)ᵗ.</p>
          <p>Actual returns vary and can be negative. Taxes, exit loads and expenses are not included.</p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
