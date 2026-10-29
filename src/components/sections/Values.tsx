import { values } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { T } from "@/components/ui/T";

/** The four things the firm stands for, closing with the brand line. */
export function Values() {
  return (
    <section id="about" aria-labelledby="values-title" className="container-x pb-20 md:pb-28">
      <h2 id="values-title" className="sr-only">What we stand for</h2>
      <Reveal as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <RevealItem as="li" key={v.title}>
            <div className="h-full rounded-[20px] border border-line bg-surface p-6">
              <Icon name={v.icon} className="h-7 w-7 text-royal" />
              <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{v.body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
      <p className="mt-12 text-center font-display text-2xl font-semibold text-link"><T en="One vision, infinite growth" hi="एक सोच, अनंत ग्रोथ" /></p>
    </section>
  );
}
