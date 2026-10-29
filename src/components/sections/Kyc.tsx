import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { T } from "@/components/ui/T";

export function Kyc() {
  return (
    <section id="kyc" aria-labelledby="kyc-title" className="border-y border-line bg-surface">
      <div className="container-x grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="eyebrow"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky" /><T en="New to investing? Start here" hi="निवेश में नए हैं? यहाँ से शुरू करें" /></p>
          <h2 id="kyc-title" className="mt-3 text-3xl font-bold md:text-[2.6rem] md:leading-tight">
            <T en={<>One KYC, <span className="text-gradient">every fund house</span></>} hi={<>एक KYC, <span className="text-gradient">हर फंड हाउस</span></>} />
          </h2>
          <p className="mt-4 text-lg text-muted">
            <T
              en="KYC (Know Your Customer) is a one-time identity check required before your first mutual fund purchase. Once it is registered with a KRA, it is valid across all fund houses."
              hi="KYC एक बार की पहचान जाँच है, जो पहले म्यूचुअल फंड निवेश से पहले ज़रूरी है। KRA में रजिस्टर होने के बाद यह सभी फंड हाउस में मान्य रहती है।"
            />
          </p>
        </div>
        <Reveal className="grid gap-5">
          <RevealItem>
            <div className="card-hover rounded-[24px] border border-line bg-bg-soft p-7">
              <h3 className="text-xl font-bold">Already done KYC somewhere?</h3>
              <p className="mt-2 text-muted">
                Check your status with your PAN on the CVL KRA website. &ldquo;KYC Validated&rdquo; or &ldquo;KYC Registered&rdquo; means
                you are ready to invest.
              </p>
              <Button href="https://www.cvlkra.com/" variant="outline" className="mt-5">
                Check your KYC status <ExternalLink aria-hidden="true" className="h-4 w-4" /><span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="card-hover rounded-[24px] border border-line bg-bg-soft p-7">
              <h3 className="text-xl font-bold">Starting fresh?</h3>
              <p className="mt-2 text-muted">
                Complete eKYC online with your PAN, Aadhaar and a selfie, usually in about 15 minutes. We are happy to do it with you on a
                call.
              </p>
              <Button href="/contact" className="mt-5">Complete KYC and start investing</Button>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
