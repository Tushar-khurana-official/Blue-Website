import { features } from "@/lib/content";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-title" className="border-y border-line bg-surface py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="why-title" eyebrow="Why families choose us" title={<>Fewer products. <span className="text-gradient">More attention.</span></>} />
        <Reveal as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, n) => (
            <RevealItem as="li" key={f.title}>
              <div className="card-hover h-full rounded-[20px] border border-line bg-bg-soft p-7">
                <span className="font-display text-sm font-bold tracking-[0.15em] text-link">0{n + 1}</span>
                <h3 className="mt-2.5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{f.body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
