import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";
import { realEstate, realEstateChecks } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Real Estate",
  `Residential, commercial and plot investments in and around ${site.city}, with location checks and paperwork guidance.`,
  "/real-estate",
);

export default function RealEstatePage() {
  return (
    <>
      <PageHero
        eyebrow="Real estate advisory"
        title={<>Property in {site.city}, <span className="text-gradient">checked before you buy</span></>}
        intro="Residential, commercial and plot investments, with honest views on location, price, paperwork and how easily you could sell."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" size="lg">Talk about a property</Button>
        </div>
      </PageHero>
      <section aria-labelledby="re-title" className="container-x py-20 md:py-28">
        <SectionHeading id="re-title" eyebrow="What we help with" title={<>Three kinds of <span className="text-gradient">property</span></>} />
        <Reveal as="ul" className="mt-14 grid gap-6 md:grid-cols-3">
          {realEstate.map((r) => (
            <RevealItem as="li" key={r.title}>
              <div className="card-hover h-full rounded-[24px] border border-line bg-surface p-7">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-sky text-white">
                  <Icon name={r.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{r.title}</h3>
                <p className="mt-2 text-muted">{r.body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </section>
      <section aria-labelledby="checks-title" className="border-y border-line bg-surface">
        <div className="container-x grid gap-10 py-20 md:py-24 lg:grid-cols-2">
          <SectionHeading
            align="left"
            id="checks-title"
            eyebrow="Before you commit"
            title={<>What we check <span className="text-gradient">with you</span></>}
            intro="Property is a large, hard-to-reverse decision. We go through these with you before any money changes hands."
          />
          <ul className="grid gap-3">
            {realEstateChecks.map((c) => (
              <li key={c} className="flex gap-3 rounded-2xl border border-line bg-bg-soft p-4">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section aria-label="Risk note" className="container-x py-12">
        <div className="mx-auto flex max-w-4xl gap-4 rounded-2xl border border-line bg-bg-soft p-5 text-sm">
          <AlertTriangle aria-hidden="true" className="h-5 w-5 shrink-0 text-danger" />
          <p>
            <strong>Please note:</strong> real estate is not regulated by SEBI or AMFI. Check the RERA registration of the project and the
            agent before investing, and have the title documents verified by a lawyer. Property prices can fall, and property can take a long
            time to sell.
          </p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
