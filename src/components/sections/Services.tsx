import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { T } from "@/components/ui/T";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="container-x py-20 md:py-28">
      <SectionHeading
        id="services-title"
        eyebrow={<T en="Our services" hi="हमारी सेवाएँ" />}
        title={<T en={<>Three ways to grow, <span className="text-gradient">one trusted partner</span></>} hi={<>बढ़ने के तीन रास्ते, <span className="text-gradient">एक भरोसेमंद साथी</span></>} />}
        intro={<T en="Shares, mutual funds and property: guidance on all three from one person who knows your whole picture." hi="शेयर, म्यूचुअल फंड और प्रॉपर्टी: तीनों पर मार्गदर्शन, उस व्यक्ति से जो आपकी पूरी तस्वीर जानता है।" />}
      />
      <Reveal as="ul" className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s, n) => (
          <RevealItem as="li" key={s.slug}>
            <article className="card-hover group flex h-full flex-col rounded-[24px] border border-line bg-surface p-8 shadow-[0_10px_30px_rgb(10_31_68/0.06)]">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-sky text-white shadow-[0_12px_30px_-12px_rgb(30_94_255/0.8)]">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <p className="mt-6 font-display text-sm font-semibold tracking-[0.15em] text-link">0{n + 1}</p>
              <h3 className="mt-1 text-[1.35rem] font-bold">{s.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${s.title} includes`}>
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full bg-[#eaf1ff] px-3 py-1.5 text-[0.8rem] font-medium text-[#1e3a8a]">{t}</li>
                ))}
              </ul>
              <p className="mt-4 flex-1 text-muted">{s.body}</p>
              <Link href={`/${s.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-link">
                {s.cta} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
