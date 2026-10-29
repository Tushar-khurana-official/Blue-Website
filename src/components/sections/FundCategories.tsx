import { fundCategories } from "@/lib/content";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Five-segment risk meter. Always shown with a text label, never colour alone. */
function RiskMeter({ level, label }: { level: number; label: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold uppercase tracking-wider text-muted">Risk</span>
        <span className="font-semibold">{label}</span>
      </div>
      <div className="mt-2 flex gap-1" role="img" aria-label={`Risk level ${level} of 5: ${label}`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`h-2 flex-1 rounded-full ${n <= level ? (level >= 5 ? "bg-danger" : level >= 4 ? "bg-royal" : "bg-sky") : "bg-line"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function FundCategories() {
  return (
    <section aria-labelledby="funds-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          id="funds-title"
          eyebrow="Mutual fund categories"
          title={<>Find the <span className="text-gradient">right fit</span> for every goal</>}
          intro="Each category suits a different time horizon and appetite for ups and downs."
        />
        <Reveal as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {fundCategories.map((f) => (
            <RevealItem as="li" key={f.name}>
              <article className="card-hover flex h-full flex-col rounded-[22px] border border-line bg-surface p-6">
                <h3 className="text-lg font-bold">{f.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{f.body}</p>
                <p className="mt-4 text-xs text-muted">
                  Suits: <span className="font-semibold text-fg">{f.horizon}</span>
                </p>
                <div className="mt-4">
                  <RiskMeter level={f.risk} label={f.riskLabel} />
                </div>
              </article>
            </RevealItem>
          ))}
        </Reveal>
        <p className="mt-6 text-center text-xs text-muted">Typical risk levels shown. Each scheme&apos;s own riskometer applies.</p>
      </div>
    </section>
  );
}
