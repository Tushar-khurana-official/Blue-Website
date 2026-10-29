"use client";

import { m, useReducedMotion } from "motion/react";
import { steps } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { T } from "@/components/ui/T";

/** Four-step timeline. The connecting line draws across as it scrolls into view; each step pops in after it. */
export function HowItWorks() {
  const reduce = useReducedMotion();
  return (
    <section id="process" aria-labelledby="how-title" className="bg-bg-soft py-20 md:py-28"><div className="container-x">
      <SectionHeading id="how-title" eyebrow={<T en="How it works" hi="कैसे काम करता है" />} title={<T en={<>Four steps. <span className="text-gradient">The last one never ends.</span></>} hi={<>चार कदम। <span className="text-gradient">आख़िरी कभी ख़त्म नहीं होता।</span></>} />} intro={<T en="Most of the value is in the fourth step." hi="सबसे ज़्यादा फ़ायदा चौथे कदम में है।" />} />
      <div className="relative mt-16">
        <div aria-hidden="true" className="absolute left-6 top-0 h-full w-0.5 bg-line md:left-0 md:top-7 md:h-0.5 md:w-full" />
        <m.div
          aria-hidden="true"
          className="absolute left-6 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-royal to-sky md:hidden"
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <m.div
          aria-hidden="true"
          className="absolute left-0 top-7 hidden h-0.5 w-full origin-left bg-gradient-to-r from-royal to-sky md:block"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <m.li
              key={s.title}
              className="relative pl-20 md:pl-0"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.3 }}
            >
              <span className="absolute left-0 top-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-sky text-white shadow-[0_12px_30px_-12px_rgb(30_94_255/0.8)] ring-8 ring-bg md:relative">
                <Icon name={s.icon} />
              </span>
              <p className="mt-0 flex flex-wrap items-center gap-2 md:mt-6">
                <span className="font-display text-sm font-bold text-accent-text">Step {i + 1}</span>
                <span className="rounded-full bg-[#e6f4ff] px-2.5 py-0.5 text-xs font-semibold text-[#075985]">{s.time}</span>
              </p>
              <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted">{s.body}</p>
            </m.li>
          ))}
        </ol>
      </div>
      </div>
    </section>
  );
}
