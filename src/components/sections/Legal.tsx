import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";

/** Shared layout for the Privacy and Terms templates. */
export function Legal({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={`Last updated: ${updated}. Template only: have it reviewed by a qualified professional before launch.`} />
      <article className="container-x max-w-3xl space-y-5 py-16 leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-fg [&_strong]:text-fg">
        {children}
      </article>
    </>
  );
}
