"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import { sipResult } from "@/lib/calc";
import { inrShort } from "@/lib/format";
import { T } from "@/components/ui/T";

const RATE = 12;
const YEARS = [5, 10, 15, 20] as const;

/** Compact SIP calculator for the hero: one slider, four horizons, instant result. Illustration only. */
export function HeroCalc() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState<number>(15);
  const id = useId();
  const r = sipResult(monthly, RATE, years);
  const investedPct = Math.max(4, Math.round((r.invested / r.total) * 100));
  const min = 1000, max = 100000;

  return (
    <div className="glass-dark relative mx-auto w-full max-w-[500px] rounded-[28px] p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-display text-lg font-bold sm:text-xl">
          <T en="What could a monthly SIP become?" hi="मासिक SIP कितना बन सकता है?" />
        </h2>
        <span className="shrink-0 rounded-full bg-sky/20 px-3 py-1 text-xs font-semibold text-cyan-light">
          <T en="Try it" hi="आज़माएँ" />
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <label htmlFor={`${id}-amt`} className="text-sm text-on-dark">
            <T en="Monthly SIP" hi="मासिक SIP" />
          </label>
          <output htmlFor={`${id}-amt`} className="font-display text-xl font-bold tabular">₹{monthly.toLocaleString("en-IN")}</output>
        </div>
        <input
          id={`${id}-amt`}
          type="range"
          className="range mt-2"
          min={min}
          max={max}
          step={500}
          value={monthly}
          onChange={(e) => setMonthly(Number(e.target.value))}
          aria-valuetext={`₹${monthly.toLocaleString("en-IN")} a month`}
          style={{ ["--fill" as string]: `${((monthly - min) / (max - min)) * 100}%` }}
        />
      </div>

      <fieldset className="mt-4">
        <legend className="text-sm text-on-dark"><T en="For" hi="अवधि" /></legend>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              aria-pressed={years === y}
              onClick={() => setYears(y)}
              className={`min-h-11 rounded-full border text-sm font-semibold transition-colors ${
                years === y ? "border-royal bg-royal text-white" : "border-white/25 text-white hover:bg-white/10"
              }`}
            >
              {y} <T en="yrs" hi="साल" />
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 rounded-2xl bg-white/8 p-5" aria-live="polite">
        <p className="text-sm text-on-dark"><T en="Could become" hi="बन सकता है" /></p>
        <p className="font-display text-4xl font-extrabold text-white tabular">{inrShort(r.total)}</p>
        <div className="mt-4 flex h-2.5 overflow-hidden rounded-full bg-sky/80" aria-hidden="true">
          <span className="h-full bg-royal" style={{ width: `${investedPct}%` }} />
        </div>
        <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="flex items-center gap-1.5 text-on-dark"><span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-royal" /><T en="You invest" hi="आपका निवेश" /></dt>
            <dd className="font-semibold text-white tabular">{inrShort(r.invested)}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-on-dark"><span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-sky" /><T en="Potential growth" hi="संभावित बढ़त" /></dt>
            <dd className="font-semibold text-white tabular">{inrShort(r.returns)}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-on-dark-muted">
          <T en={`Illustration at an assumed ${RATE}% a year. Not guaranteed.`} hi={`${RATE}% सालाना के अनुमान पर उदाहरण। गारंटी नहीं।`} />
        </p>
        <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-light hover:text-white">
          <T en="Discuss this plan" hi="इस प्लान पर बात करें" /> <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
