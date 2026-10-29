import { TrendingUp } from "lucide-react";

/** Points for an upward-trending line with realistic wobbles (viewBox 0 0 400 220). */
const LINE = "M0 190 C25 185 35 170 55 172 S90 150 110 155 S140 128 165 133 S200 108 225 112 S255 85 280 92 S320 58 345 63 S380 30 400 22";
const AREA = `${LINE} L400 220 L0 220 Z`;

/**
 * Hero visual: a glass card with an upward line chart that draws itself (CSS stroke-dashoffset),
 * plus two floating info chips. Illustrative only, no real figures.
 */
export function HeroChart() {
  return (
    <figure className="relative mx-auto w-full max-w-[520px]">
      <div className="glass relative overflow-hidden rounded-[24px] p-5 sm:p-7">
        <div className="flex flex-col items-start gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Portfolio growth</p>
            <p className="mt-1 font-display text-2xl font-bold sm:text-3xl">
              Long-term <span className="text-gradient">compounding</span>
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-success/12 px-2.5 py-1 text-xs font-semibold text-success">
            <TrendingUp aria-hidden="true" className="h-3.5 w-3.5" /> Trending up
          </span>
        </div>
        <svg viewBox="0 0 400 220" className="mt-5 h-auto w-full" role="img" aria-label="Illustrative chart of a portfolio value rising over time">
          <defs>
            <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#1E5EFF" stopOpacity="0.35" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#1E5EFF" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          {[55, 110, 165].map((y) => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="currentColor" className="text-line" strokeDasharray="4 6" />
          ))}
          <path d={AREA} fill="url(#hero-area)" className="fade-late" />
          <path d={LINE} pathLength={1} className="draw" fill="none" stroke="url(#hero-line)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="400" cy="22" r="6" className="fade-late" fill="#38BDF8" stroke="#fff" strokeWidth="3" />
        </svg>
        <div className="mt-3 flex justify-between text-xs text-muted tabular" aria-hidden="true">
          <span>Year 1</span>
          <span>Year 5</span>
          <span>Year 10</span>
          <span>Year 15</span>
        </div>
        <figcaption className="mt-4 text-xs text-muted">Illustration only. Not a projection or guarantee of returns.</figcaption>
      </div>

      <div aria-hidden="true" className="glass blob-a absolute -left-8 bottom-28 hidden rounded-2xl px-4 py-3 sm:block">
        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted">Monthly SIP</p>
        <p className="font-display text-lg font-bold">₹10,000</p>
      </div>
      <div aria-hidden="true" className="glass blob-b absolute -right-6 -top-6 hidden rounded-2xl px-4 py-3 sm:block">
        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted">Goal</p>
        <p className="font-display text-lg font-bold">Retirement 2045</p>
      </div>
    </figure>
  );
}
