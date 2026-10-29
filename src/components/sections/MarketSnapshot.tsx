import { TrendingDown, TrendingUp } from "lucide-react";
import { tickers } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MarketSnapshot() {
  const rows = tickers.slice(0, 6);
  return (
    <section aria-labelledby="market-title" className="bg-bg-soft"><div className="container-x py-16 md:py-20">
      <SectionHeading
        id="market-title"
        eyebrow="Market snapshot"
        title={<>A quick look at the <span className="text-gradient">markets</span></>}
        intro="Sample data for illustration only. Not live prices and not a recommendation."
      />
      <div className="glass mx-auto mt-12 max-w-4xl overflow-hidden rounded-[24px]">
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <p className="font-display font-semibold">Indices</p>
          <span className="rounded-full bg-royal px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white">Sample data</span>
        </div>
        <div className="relative overflow-x-auto" tabIndex={0} role="region" aria-label="Market snapshot table (scrolls sideways)">
          <table className="w-full min-w-[480px] text-sm">
            <caption className="sr-only">Sample index levels and daily change</caption>
            <thead className="text-left text-xs uppercase tracking-wider text-muted">
              <tr>
                <th scope="col" className="px-6 py-3 font-semibold">Index</th>
                <th scope="col" className="px-6 py-3 text-right font-semibold">Level</th>
                <th scope="col" className="px-6 py-3 text-right font-semibold">Change</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((t) => {
                const up = t.change >= 0;
                return (
                  <tr key={t.name} className="border-t border-line transition-colors hover:bg-royal/5">
                    <th scope="row" className="px-6 py-4 text-left font-semibold">{t.name}</th>
                    <td className="px-6 py-4 text-right tabular">{t.value.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold tabular ${up ? "bg-success/12 text-success" : "bg-danger/12 text-danger"}`}>
                        {up ? <TrendingUp aria-hidden="true" className="h-4 w-4" /> : <TrendingDown aria-hidden="true" className="h-4 w-4" />}
                        <span className="sr-only">{up ? "up" : "down"}</span>
                        {up ? "+" : "−"}
                        {Math.abs(t.change).toFixed(2)}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </section>
  );
}
