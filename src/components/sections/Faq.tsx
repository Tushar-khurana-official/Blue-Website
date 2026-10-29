"use client";

import { AnimatePresence, m } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { faqs } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Animated accordion: one answer open at a time, keyboard and screen-reader friendly. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <SectionHeading id="faq-title" eyebrow="FAQ" title={<>Questions, <span className="text-gradient">answered</span></>} />
        <ul className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className={`rounded-2xl border bg-surface transition-colors duration-200 ${isOpen ? "border-royal" : "border-line"}`}>
                <h3>
                  <button
                    type="button"
                    id={`${base}-q${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`${base}-a${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold sm:text-lg"
                  >
                    {f.q}
                    <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 text-link transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={`${base}-a${i}`}
                      role="region"
                      aria-labelledby={`${base}-q${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-muted">{f.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
