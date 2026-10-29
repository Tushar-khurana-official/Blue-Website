import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { goals } from "@/lib/content";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { T } from "@/components/ui/T";

export function Goals() {
  return (
    <section id="goals" aria-labelledby="goals-title" className="container-x py-20 md:py-28">
      <SectionHeading
        id="goals-title"
        eyebrow={<T en="Goals we plan for" hi="जिन लक्ष्यों के लिए हम प्लान बनाते हैं" />}
        title={<T en={<>Start with the goal, <span className="text-gradient">not the product</span></>} hi={<>शुरुआत लक्ष्य से, <span className="text-gradient">प्रोडक्ट से नहीं</span></>} />}
        intro={<T en="Each goal gets its own date, amount and mix of investments. The closer the date, the less risk the money should carry." hi="हर लक्ष्य की अपनी तारीख, रकम और निवेश का मिश्रण होता है। तारीख जितनी पास, पैसे पर जोखिम उतना कम होना चाहिए।" />}
      />
      <p className="mt-8 flex items-center justify-center gap-3 text-sm text-muted">
        <span aria-hidden="true" className="h-0.5 w-16 rounded bg-gradient-to-r from-sky to-royal" />
        <T en="Sorted by how long you have" hi="समय के हिसाब से क्रम में" />
        <span aria-hidden="true" className="h-0.5 w-16 rounded bg-gradient-to-r from-royal to-sky" />
      </p>
      <Reveal as="ol" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((g, n) => (
          <RevealItem as="li" key={g.title}>
            <article className="card-hover flex h-full flex-col rounded-[24px] border border-line bg-surface p-7 shadow-[0_10px_30px_rgb(10_31_68/0.06)]">
              <div className="flex items-center justify-between gap-3 text-xs font-semibold">
                <span className="tracking-[0.12em] text-link">GOAL 0{n + 1}</span>
                <span className="rounded-full bg-[#e6f4ff] px-3 py-1 text-[#075985]">{g.when}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{g.title}</h3>
              <p className="mt-2.5 text-[0.95rem] text-muted">{g.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Typical building blocks">
                {g.tags.map((t) => (
                  <li key={t} className="rounded-full bg-[#eaf1ff] px-3 py-1.5 text-[0.8rem] font-medium text-[#1e3a8a]">{t}</li>
                ))}
              </ul>
              <Link href="/contact" className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.95rem] font-semibold text-link">
                Plan for this<span className="sr-only">: {g.title}</span> <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          </RevealItem>
        ))}
      </Reveal>
      <p className="mt-9 text-center text-sm text-muted">
        The building blocks shown are typical categories, not recommendations. What fits depends on your situation.
      </p>
    </section>
  );
}
