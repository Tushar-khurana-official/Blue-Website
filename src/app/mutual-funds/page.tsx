import { FundCategories } from "@/components/sections/FundCategories";
import { WhyUs } from "@/components/sections/WhyUs";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Mutual Funds", "Equity, debt, hybrid, ELSS and index funds chosen for your goals and risk profile, with regular reviews.", "/mutual-funds");

export default function MutualFundsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mutual funds"
        title={<>Funds chosen for <span className="text-gradient">your goals</span>, not for commissions</>}
        intro="We profile your risk, match each goal to a fund category and review your portfolio regularly, so it stays on track."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" size="lg">Get a free portfolio review</Button>
          <Button href="/calculators" size="lg" variant="dark">Open calculators</Button>
        </div>
      </PageHero>
      <FundCategories />
      <WhyUs />
      <Faq />
      <CtaBanner />
    </>
  );
}
