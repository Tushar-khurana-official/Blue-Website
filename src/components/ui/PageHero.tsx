import type { ReactNode } from "react";

/** Compact navy header for inner pages. */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow: ReactNode; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blob blob-a -right-24 -top-24 h-96 w-96 text-sky/30" />
        <div className="blob blob-b -bottom-32 -left-24 h-96 w-96 text-royal/50" />
      </div>
      <div className="container-x relative py-16 md:py-24">
        <p className="eyebrow"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky" />{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-on-dark md:text-xl">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
