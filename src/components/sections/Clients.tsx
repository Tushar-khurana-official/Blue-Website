import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Clients() {
  return (
    <section id="clients" aria-label="Existing clients" className="border-y border-line bg-surface">
      <div className="container-x grid gap-7 py-20 md:grid-cols-2 md:py-24">
        <div className="on-navy relative overflow-hidden rounded-[24px] bg-gradient-to-br from-navy to-[#143a8c] p-8 text-white sm:p-10">
          <div aria-hidden="true" className="blob blob-b -bottom-24 -right-16 h-64 w-64 text-sky/30" />
          <div className="relative">
            <p className="eyebrow">Existing clients</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-[1.7rem]">Your whole portfolio, in your pocket.</h2>
            <p className="mb-7 mt-3 text-on-dark">Statements, SIP mandates and transactions in one secure place, held in your own name.</p>
            <Button href={site.clientLoginUrl || "/contact"}>{site.clientLoginUrl ? "Client Login" : "Ask for client access"}</Button>
          </div>
        </div>
        <div className="rounded-[24px] border border-line bg-bg-soft p-8 sm:p-10">
          <p className="eyebrow">For existing clients</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-[1.7rem]">Know someone who could use a second opinion?</h2>
          <p className="mb-7 mt-3 text-muted">
            Introduce them and we will offer the same first conversation: free, unhurried, and with no products named. We only call them if
            they ask us to.
          </p>
          <Button href="/contact" variant="outline">Introduce someone</Button>
        </div>
      </div>
    </section>
  );
}
