import type { ReactNode } from "react";

/** Compact gradient header for inner pages. */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blob blob-a -left-20 -top-10 h-64 w-64 text-royal/35" />
        <div className="blob blob-b right-0 top-10 h-64 w-64 text-sky/35" />
      </div>
      <div className="container-x relative py-16 md:py-24">
        <p className="eyebrow"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky" />{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted md:text-xl">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
