"use client";

import { animate, useReducedMotion } from "motion/react";
import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { lumpsumResult, sipResult, type Result } from "@/lib/calc";
import { inr, inrShort } from "@/lib/format";
import { Button } from "@/components/ui/Button";

type Mode = "sip" | "lumpsum";

/** Range slider with a synced number field. */
function Field({
  label, value, onChange, min, max, step, prefix, suffix,
}: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step: number; prefix?: string; suffix?: string;
}) {
  const id = useId();
  const [draft, setDraft] = useState(String(value));
  useEffect(() => setDraft(String(value)), [value]);
  const commit = () => {
    const n = Number(draft.replace(/[^\d.]/g, ""));
    const v = Number.isFinite(n) && draft !== "" ? Math.min(max, Math.max(min, n)) : value;
    onChange(v);
    setDraft(String(v));
  };
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold">{label}</label>
        <div className="flex items-center gap-1 rounded-xl border border-line bg-bg-soft px-3 py-1.5 text-sm font-semibold focus-within:border-royal">
          {prefix && <span aria-hidden="true" className="text-muted">{prefix}</span>}
          <input
            id={id}
            inputMode="decimal"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => e.key === "Enter" && commit()}
            className="w-20 bg-transparent text-right tabular outline-none"
          />
          {suffix && <span aria-hidden="true" className="text-muted">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        className="range mt-3"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={`${label} slider`}
        aria-valuetext={`${prefix ?? ""}${value.toLocaleString("en-IN")}${suffix ? ` ${suffix}` : ""}`}
        style={{ ["--fill" as string]: `${fill}%` }}
      />
      <div className="mt-1 flex justify-between text-xs text-muted tabular" aria-hidden="true">
        <span>{prefix}{min.toLocaleString("en-IN")}{suffix ? ` ${suffix}` : ""}</span>
        <span>{prefix}{max.toLocaleString("en-IN")}{suffix ? ` ${suffix}` : ""}</span>
      </div>
    </div>
  );
}

/** Quick-pick amounts under the main slider. */
function Presets({ values, current, onPick }: { values: number[]; current: number; onPick: (v: number) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Quick amounts">
      {values.map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onPick(v)}
          aria-pressed={current === v}
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
            current === v ? "border-royal bg-royal text-white" : "border-line text-muted hover:border-royal hover:text-link"
          }`}
        >
          {inrShort(v)}
        </button>
      ))}
    </div>
  );
}

/** Announces the result once inputs settle, instead of on every slider step. */
function LiveSummary({ text }: { text: string }) {
  const [said, setSaid] = useState("");
  useEffect(() => {
    const t = setTimeout(() => setSaid(text), 700);
    return () => clearTimeout(t);
  }, [text]);
  return (
    <p className="sr-only" aria-live="polite">
      {said}
    </p>
  );
}

/** Number that tweens to new values (Framer Motion animate). */
function Animated({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = inr(value);
      prev.current = value;
      return;
    }
    const c = animate(prev.current, value, { duration: 0.45, ease: "easeOut", onUpdate: (v) => (el.textContent = inr(v)) });
    prev.current = value;
    return () => c.stop();
  }, [value, reduce]);
  return <span ref={ref} className="tabular">{inr(value)}</span>;
}

/** Donut: invested vs estimated returns. Segments are labelled in the legend, never colour alone. */
function Donut({ r }: { r: Result }) {
  const C = 2 * Math.PI * 42;
  const investedShare = r.total > 0 ? r.invested / r.total : 1;
  return (
    <div className="relative mx-auto h-48 w-48">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--sky)" strokeWidth="12" />
        <circle
          cx="50" cy="50" r="42" fill="none" stroke="var(--royal)" strokeWidth="12" strokeLinecap="round"
          strokeDasharray={`${C * investedShare} ${C}`}
          style={{ transition: "stroke-dasharray 500ms cubic-bezier(0.2,0.7,0.2,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-xs text-muted">Total value</span>
        <span className="font-display text-xl font-bold tabular">{inrShort(r.total)}</span>
      </div>
    </div>
  );
}

/** Small area chart of value vs invested over the years. */
function GrowthChart({ r }: { r: Result }) {
  const W = 320, H = 120;
  const max = Math.max(...r.series.map((p) => p.value), 1);
  const x = (i: number) => (i / Math.max(1, r.series.length - 1)) * W;
  const y = (v: number) => H - (v / max) * (H - 8);
  const line = (k: "value" | "invested") => r.series.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p[k]).toFixed(1)}`).join(" ");
  const area = `${line("value")} L${W},${H} L0,${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="calc-area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1E5EFF" stopOpacity="0.3" />
          <stop offset="1" stopColor="#1E5EFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#calc-area)" style={{ d: `path("${area}")`, transition: "d 450ms ease-out" } as React.CSSProperties} />
      <path d={line("value")} fill="none" stroke="var(--royal)" strokeWidth="2.5" style={{ d: `path("${line("value")}")`, transition: "d 450ms ease-out" } as React.CSSProperties} />
      <path d={line("invested")} fill="none" stroke="var(--sky)" strokeWidth="2" strokeDasharray="5 4" style={{ d: `path("${line("invested")}")`, transition: "d 450ms ease-out" } as React.CSSProperties} />
    </svg>
  );
}

export function Calculator({ defaultMode = "sip" }: { defaultMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [monthly, setMonthly] = useState(10000);
  const [lump, setLump] = useState(500000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const r = useMemo(() => (mode === "sip" ? sipResult(monthly, rate, years) : lumpsumResult(lump, rate, years)), [mode, monthly, lump, rate, years]);
  const tabs: { id: Mode; label: string }[] = [{ id: "sip", label: "SIP" }, { id: "lumpsum", label: "Lumpsum" }];
  const baseId = useId();

  const onTabKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next = mode === "sip" ? "lumpsum" : "sip";
      setMode(next);
      document.getElementById(`${baseId}-${next}`)?.focus();
    }
  };

  return (
    <div className="glass rounded-[28px] p-5 sm:p-8">
      <div role="tablist" aria-label="Calculator type" className="inline-flex rounded-full bg-bg-soft p-1" onKeyDown={onTabKey}>
        {tabs.map((t) => (
          <button
            key={t.id}
            id={`${baseId}-${t.id}`}
            role="tab"
            type="button"
            aria-selected={mode === t.id}
            aria-controls={`${baseId}-panel`}
            tabIndex={mode === t.id ? 0 : -1}
            onClick={() => setMode(t.id)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-200 ${mode === t.id ? "bg-royal text-white shadow" : "text-muted hover:text-fg"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-${mode}`} className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          {mode === "sip" ? (
            <div>
              <Field label="Monthly investment" value={monthly} onChange={setMonthly} min={500} max={100000} step={500} prefix="₹" />
              <Presets values={[2500, 5000, 10000, 25000]} current={monthly} onPick={setMonthly} />
            </div>
          ) : (
            <div>
              <Field label="Total investment" value={lump} onChange={setLump} min={10000} max={10000000} step={10000} prefix="₹" />
              <Presets values={[100000, 500000, 1000000, 2500000]} current={lump} onPick={setLump} />
            </div>
          )}
          <Field label="Expected return rate (p.a.)" value={rate} onChange={setRate} min={1} max={30} step={0.5} suffix="%" />
          <Field label="Time period" value={years} onChange={setYears} min={1} max={40} step={1} suffix="Yr" />
          <p className="rounded-2xl border border-line bg-bg-soft p-4 text-sm text-muted">
            <strong className="text-fg">Tip:</strong> increasing your SIP by 10% every year (a step-up SIP) can make a large difference over
            long periods. Ask us to model it for your goals.
          </p>
        </div>

        <div>
          <LiveSummary text={`Invested ${inr(r.invested)}, estimated returns ${inr(r.returns)}, total value ${inr(r.total)}.`} />
          <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr]">
            <Donut r={r} />
            <dl className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <dt className="flex items-center gap-2 text-sm text-muted"><span aria-hidden="true" className="h-3 w-3 rounded-full bg-royal" />Invested amount</dt>
                <dd className="font-semibold"><Animated value={r.invested} /></dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="flex items-center gap-2 text-sm text-muted"><span aria-hidden="true" className="h-3 w-3 rounded-full bg-sky" />Estimated returns</dt>
                <dd className="font-semibold"><Animated value={r.returns} /></dd>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
                <dt className="font-semibold">Total value</dt>
                <dd className="font-display text-xl font-bold text-link"><Animated value={r.total} /></dd>
              </div>
            </dl>
          </div>
          <div className="mt-6 rounded-2xl border border-line bg-bg-soft p-4">
            <div className="mb-2 flex flex-wrap gap-4 text-xs text-muted">
              <span className="flex items-center gap-1.5"><span aria-hidden="true" className="h-0.5 w-5 bg-royal" />Value (solid)</span>
              <span className="flex items-center gap-1.5"><span aria-hidden="true" className="h-0.5 w-5 border-t-2 border-dashed border-sky" />Invested (dashed)</span>
            </div>
            <GrowthChart r={r} />
          </div>
          <p className="mt-4 text-xs text-muted">
            Illustrative only. Returns are assumed, not guaranteed. Mutual fund investments are subject to market risks.
          </p>
          <Button href="/contact" className="mt-5">Talk to an expert about this plan</Button>
        </div>
      </div>
    </div>
  );
}
