"use client";

import { AnimatePresence, m, useInView, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Auto-sliding carousel (6s) while on screen. Pauses on hover/focus, has a pause button, no auto-play with reduced motion. */
export function Testimonials() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  // Auto-play only while the carousel is on screen.
  const box = useRef<HTMLDivElement>(null);
  const visible = useInView(box, { amount: 0.5 });
  const go = useCallback((d: number) => setI((x) => (x + d + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (reduce || !playing || hover || !visible) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [reduce, playing, hover, visible, go]);

  const t = testimonials[i];
  return (
    <section aria-labelledby="t-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="t-title" eyebrow="Testimonials" title={<>What our <span className="text-gradient">investors</span> say</>} />
        <div
          ref={box}
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div className="glass relative min-h-64 overflow-hidden rounded-[28px] p-8 sm:p-12">
            <Quote aria-hidden="true" className="h-10 w-10 text-sky" />
            <AnimatePresence mode="wait" initial={false}>
              <m.figure
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${testimonials.length}`}
              >
                <blockquote className="mt-4 font-display text-xl leading-relaxed sm:text-2xl">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-royal to-sky font-bold text-white">
                    {t.role[0]}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </m.figure>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface hover:border-royal hover:text-link">
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setI(n)}
                  aria-label={`Show testimonial ${n + 1}`}
                  aria-current={n === i}
                  className="group inline-flex h-6 min-w-6 items-center justify-center"
                >
                  <span aria-hidden="true" className={`h-2.5 rounded-full transition-all duration-300 ${n === i ? "w-8 bg-royal" : "w-2.5 bg-line group-hover:bg-muted"}`} />
                </button>
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface hover:border-royal hover:text-link">
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
            {!reduce && (
              <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause auto-play" : "Start auto-play"} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface hover:border-royal hover:text-link">
                {playing ? <Pause aria-hidden="true" className="h-4 w-4" /> : <Play aria-hidden="true" className="h-4 w-4" />}
              </button>
            )}
          </div>
          <p className="mt-4 text-center text-xs text-muted">Sample testimonials for layout. Replace with real, consented client reviews.</p>
        </div>
      </div>
    </section>
  );
}
