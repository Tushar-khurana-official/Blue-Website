import { TrendingDown, TrendingUp } from "lucide-react";
import { tickers } from "@/lib/content";

function Item({ t }: { t: (typeof tickers)[number] }) {
  const up = t.change >= 0;
  return (
    <li className="flex shrink-0 items-center gap-3 px-6 text-sm">
      <span className="font-semibold">{t.name}</span>
      <span className="tabular text-muted">{t.value.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
      <span className={`inline-flex items-center gap-1 font-semibold tabular ${up ? "text-success" : "text-danger"}`}>
        {up ? <TrendingUp aria-hidden="true" className="h-4 w-4" /> : <TrendingDown aria-hidden="true" className="h-4 w-4" />}
        <span className="sr-only">{up ? "up" : "down"}</span>
        {up ? "+" : "−"}
        {Math.abs(t.change).toFixed(2)}%
      </span>
    </li>
  );
}

/**
 * Infinite ticker marquee with SAMPLE data. The list is read once by screen readers; the visual copy that makes
 * the loop seamless is aria-hidden. Pauses on hover/focus; static under reduced motion.
 */
export function Ticker() {
  return (
    <section aria-label="Market ticker (sample data, not live)" className="ticker relative border-y border-line bg-surface" tabIndex={0}>
      <div className="container-x flex items-center gap-4 py-3">
        <span className="shrink-0 rounded-full bg-royal px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white">Sample data</span>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
          <div className="ticker-track">
            <ul className="flex">{tickers.map((t) => <Item key={t.name} t={t} />)}</ul>
            <ul className="ticker-dup flex" aria-hidden="true">{tickers.map((t) => <Item key={t.name} t={t} />)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
