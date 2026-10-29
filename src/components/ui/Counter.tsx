"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const fmt = new Intl.NumberFormat("en-IN");

/** Counts up from 0 when scrolled into view. The final value is server-rendered and always read by screen readers. */
export function Counter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const text = (n: number) => `${prefix}${decimals ? n.toFixed(decimals) : fmt.format(Math.round(n))}${suffix}`;

  useEffect(() => {
    if (!inView || reduce || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, { duration: 1.6, ease: [0.2, 0.7, 0.2, 1], onUpdate: (v) => (el.textContent = text(v)) });
    return () => controls.stop();
  }, [inView, reduce, value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular">
        {text(value)}
      </span>
      <span className="sr-only">{text(value)}</span>
    </>
  );
}
