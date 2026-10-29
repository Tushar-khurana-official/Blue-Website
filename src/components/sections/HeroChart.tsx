import { BarChart3, House } from "lucide-react";

/** Upward-trending line with realistic wobbles (viewBox 0 0 520 260). */
const LINE = "M0 220 C60 210 90 180 140 170 S220 140 270 120 S360 90 410 60 S470 30 515 18";
const AREA = `${LINE} L515 260 L0 260 Z`;

/**
 * Hero visual: a glass card on navy with a growth line that draws itself (CSS stroke-dashoffset),
 * plus two floating white chips on larger screens. Illustrative only, no real figures.
 */
export function HeroChart() {
  return (
    <figure className="relative mx-auto w-full max-w-[540px]">
      <div className="glass-dark relative overflow-hidden rounded-[28px] p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-[#bfd3f5]">Wealth growth (illustrative)</p>
            <p className="mt-1 font-display text-2xl font-bold sm:text-[2rem]">Stock · MF · Property</p>
          </div>
          <span className="shrink-0 rounded-full bg-sky/20 px-3 py-1.5 text-xs font-semibold text-cyan-light">Sample view</span>
        </div>
        <svg viewBox="0 0 520 260" className="mt-5 h-auto w-full" role="img" aria-label="Illustrative chart of wealth rising over 20 years">
          <defs>
            <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#38BDF8" stopOpacity="0.45" />
              <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[50, 110, 170, 230].map((y) => (
            <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="rgb(255 255 255 / 0.12)" />
          ))}
          <path d={AREA} fill="url(#hero-area)" className="fade-late" />
          <path d={LINE} pathLength={1} className="draw" fill="none" stroke="#7DD3FC" strokeWidth="4" strokeLinecap="round" />
          <circle cx="515" cy="18" r="7" className="fade-late" fill="#fff" />
        </svg>
        <div className="mt-2 flex justify-between text-xs text-on-dark-muted tabular" aria-hidden="true">
          <span>Today</span>
          <span>5 yrs</span>
          <span>10 yrs</span>
          <span>15 yrs</span>
          <span>20 yrs</span>
        </div>
        <figcaption className="mt-4 text-xs text-on-dark-muted">Illustration only. Not a projection or guarantee of returns.</figcaption>
      </div>

      <div aria-hidden="true" className="blob-a absolute -left-8 top-28 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 text-navy shadow-[0_18px_40px_rgb(2_10_30/0.35)] sm:flex">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6efff] text-royal"><BarChart3 className="h-5 w-5" /></span>
        <span><span className="block text-xs text-[#5b6b8c]">Monthly SIP</span><span className="font-display font-bold">₹10,000</span></span>
      </div>
      <div aria-hidden="true" className="blob-b absolute -bottom-10 -right-4 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 text-navy shadow-[0_18px_40px_rgb(2_10_30/0.35)] sm:flex">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0f5ff] text-[#0284c7]"><House className="h-5 w-5" /></span>
        <span><span className="block text-xs text-[#5b6b8c]">Goal-based plan</span><span className="font-display font-bold">Written, reviewed</span></span>
      </div>
    </figure>
  );
}
