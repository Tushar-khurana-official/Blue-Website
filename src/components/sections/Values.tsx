import { values } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { T } from "@/components/ui/T";

/** What the firm stands for: a soft blue band with the brand line as its heading and four borderless items. */
export function Values() {
  return (
    <section id="about" aria-labelledby="values-title" className="bg-bg-soft">
      <div className="container-x py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky" /><T en="What we stand for" hi="हमारी सोच" /></p>
          <h2 id="values-title" className="mt-3 text-3xl font-bold md:text-[2.6rem] md:leading-tight">
            <T en={<>One vision, <span className="text-gradient">infinite growth</span></>} hi={<>एक सोच, <span className="text-gradient">अनंत ग्रोथ</span></>} />
          </h2>
        </div>
        <Reveal as="ul" className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <RevealItem as="li" key={v.title}>
              <div className="flex gap-4 lg:flex-col">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-royal shadow-[0_8px_24px_-10px_rgb(30_94_255/0.45)] ring-1 ring-line">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] text-muted">{v.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
