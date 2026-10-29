import { ArrowRight, Clock } from "lucide-react";
import { insights } from "@/lib/content";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Article cards. Each has a generated gradient cover (no stock photos). */
export function Insights() {
  const covers = ["from-royal to-sky", "from-navy to-royal", "from-sky to-royal"];
  return (
    <section aria-labelledby="insights-title" className="bg-bg-soft"><div className="container-x py-20 md:py-28">
      <SectionHeading id="insights-title" eyebrow="Insights" title={<>Learn the <span className="text-gradient">basics</span> of investing</>} />
      <Reveal as="ul" className="mt-14 grid gap-6 md:grid-cols-3">
        {insights.map((a, n) => (
          <RevealItem as="li" key={a.slug}>
            <article className="card-hover glass flex h-full flex-col overflow-hidden rounded-[24px]">
              <div aria-hidden="true" className={`relative h-40 bg-gradient-to-br ${covers[n]}`}>
                <svg viewBox="0 0 200 80" className="absolute inset-x-0 bottom-0 h-24 w-full text-white/40" preserveAspectRatio="none">
                  <path d="M0 70 C30 60 50 66 70 50 S110 40 130 30 S170 20 200 8" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-royal/10 px-2.5 py-1 font-semibold text-link">{a.tag}</span>
                  <span className="flex items-center gap-1 text-muted"><Clock aria-hidden="true" className="h-3.5 w-3.5" />{a.minutes} min read</span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{a.body}</p>
                <a href={`/contact?topic=${a.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-link">
                  Ask us about this<span className="sr-only">: {a.title}</span> <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </article>
          </RevealItem>
        ))}
      </Reveal>
      </div>
    </section>
  );
}
