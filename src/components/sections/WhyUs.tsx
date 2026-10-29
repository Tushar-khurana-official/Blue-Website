import { features } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="why-title" eyebrow="Why choose us" title={<>Built on <span className="text-gradient">trust</span>, run with care</>} />
        <Reveal as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <RevealItem as="li" key={f.title}>
              <div className="card-hover h-full rounded-[22px] border border-line bg-surface p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10 text-link">
                  <Icon name={f.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-muted">{f.body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
