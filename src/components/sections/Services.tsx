import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section aria-labelledby="services-title" className="container-x py-20 md:py-28">
      <SectionHeading
        id="services-title"
        eyebrow="What we do"
        title={<>Everything you need to <span className="text-gradient">invest with confidence</span></>}
        intro="Three services, one team that knows your whole picture."
      />
      <Reveal as="ul" className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <RevealItem as="li" key={s.slug}>
            <article className="card-hover glass flex h-full flex-col rounded-[24px] p-7">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-sky text-white shadow-[0_12px_30px_-12px_rgb(30_94_255/0.8)]">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 flex-1 text-muted">{s.body}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check aria-hidden="true" className="h-4 w-4 text-accent-text" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href={`/${s.slug}`} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-link hover:gap-2.5 transition-[gap]">
                Learn more<span className="sr-only"> about {s.title}</span> <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
