import { features } from "@/lib/content";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { T } from "@/components/ui/T";

export function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-title" className="hidden bg-surface py-16 md:block md:py-20">
      <div className="container-x">
        <SectionHeading id="why-title" eyebrow={<T en="Why families choose us" hi="परिवार हमें क्यों चुनते हैं" />} title={<T en={<>Fewer products. <span className="text-gradient">More attention.</span></>} hi={<>कम प्रोडक्ट। <span className="text-gradient">ज़्यादा ध्यान।</span></>} />} />
        <Reveal as="ul" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
