import { AlertTriangle } from "lucide-react";
import { MarketSnapshot } from "@/components/sections/MarketSnapshot";
import { Ticker } from "@/components/sections/Ticker";
import { Services } from "@/components/sections/Services";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Stock Market", "Demat accounts, long-term equity investing, IPO applications and research-backed stock market guidance.", "/stock-market");

export default function StockMarketPage() {
  return (
    <>
      <PageHero
        eyebrow="Stock market"
        title={<>Invest in equities with <span className="text-gradient">clarity</span></>}
        intro="Open a demat account, build a long-term portfolio of quality companies and apply for IPOs, with guidance that is honest about risk."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" size="lg">Open a demat account</Button>
        </div>
      </PageHero>
      <Ticker />
      <MarketSnapshot />
      <section className="container-x pb-8">
        <div className="mx-auto flex max-w-4xl gap-4 rounded-2xl border border-line bg-bg-soft p-5 text-sm">
          <AlertTriangle aria-hidden="true" className="h-5 w-5 shrink-0 text-danger" />
          <p>
            <strong>Risk disclosure:</strong> Investments in the securities market are subject to market risks; read all related documents
            carefully before investing. 9 out of 10 individual traders in the equity futures and options segment incurred net losses (SEBI
            study). SEBI registration: {site.registration.sebi}.
          </p>
        </div>
      </section>
      <Services />
      <CtaBanner />
    </>
  );
}
