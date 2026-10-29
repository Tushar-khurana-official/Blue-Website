import { BadgeCheck, CalendarCheck, Phone } from "lucide-react";
import { site } from "@/config/site";
import { credentials } from "@/lib/content";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { T } from "@/components/ui/T";
import { HeroCalc } from "./HeroCalc";

export function Hero() {
  const f = site.founder;
  return (
    <>
      <section aria-labelledby="hero-title" className="hero-bg relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="blob blob-a -right-24 -top-36 h-[30rem] w-[30rem] text-sky/35" />
          <div className="blob blob-b -bottom-44 -left-28 h-[32rem] w-[32rem] text-royal/55" />
        </div>

        <div className="container-x relative grid items-center gap-12 pb-14 pt-10 md:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pb-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[#bfe6ff]">
              <BadgeCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-sky" />
              <T en={`AMFI-registered mutual fund distributor · ${site.city}`} hi="AMFI-रजिस्टर्ड म्यूचुअल फंड डिस्ट्रीब्यूटर · जोधपुर" />
            </p>
            <h1 id="hero-title" className="mt-5 text-[2.4rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              <T
                en={<>Smart investments.<br />Strong growth.<br /><span className="text-sky">Secure future.</span></>}
                hi={<>समझदारी से निवेश।<br />मज़बूत ग्रोथ।<br /><span className="text-sky">सुरक्षित भविष्य।</span></>}
              />
            </h1>
            <p className="mt-5 max-w-xl text-lg text-on-dark">
              <T
                en={`Honest guidance on the stock market, mutual funds and property in ${site.city}, with clear risks and a written plan.`}
                hi="जोधपुर में शेयर बाज़ार, म्यूचुअल फंड और प्रॉपर्टी पर ईमानदार मार्गदर्शन, साफ़ जोखिम और लिखित प्लान के साथ।"
              />
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                <CalendarCheck aria-hidden="true" className="h-5 w-5" /> <T en="Book free consultation" hi="मुफ़्त कंसल्टेशन बुक करें" />
              </Button>
              <Button href={`tel:${site.contact.phoneHref}`} size="lg" variant="dark">
                <Phone aria-hidden="true" className="h-5 w-5" /> {site.contact.phone}
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Avatar name={f.name} photo={f.photo} size={48} />
              <p className="text-sm leading-snug text-[#bfd3f5]">
                <span className="block font-semibold text-white">
                  <T en={`Talk directly to ${f.name}`} hi={`सीधे ${f.nameHi} से बात करें`} />
                </span>
                <T
                  en="First consultation is free. No obligation, no product pushed."
                  hi="पहला कंसल्टेशन मुफ़्त है। कोई दबाव नहीं, कोई प्रोडक्ट थोपा नहीं जाएगा।"
                />
              </p>
            </div>
            <p className="mt-4 text-xs text-on-dark-muted">
              <T
                en="Investments are subject to market risks. Read all related documents carefully."
                hi="निवेश बाज़ार जोखिमों के अधीन है। सभी संबंधित दस्तावेज़ ध्यान से पढ़ें।"
              />
            </p>
          </div>
          <HeroCalc />
        </div>
      </section>

      <section aria-label="Credentials" className="border-t border-white/10 bg-navy">
        <ul className="container-x grid grid-cols-1 gap-5 py-6 min-[480px]:grid-cols-2 lg:grid-cols-5">
          {credentials.map((c) => (
            <li key={c.title} className="flex items-center gap-3 text-sm leading-snug text-on-dark">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/8 text-sky">
                <Icon name={c.icon} />
              </span>
              <span>
                <span className="block font-semibold text-white">{c.title}</span>
                {c.detail}
              </span>
            </li>
          ))}
        </ul>
        <p className="container-x border-t border-white/10 py-3 text-center text-xs text-on-dark-muted">
          AMFI-registered mutual fund distributor · ARN: {site.registration.arn} · EUIN: {site.registration.euin}
        </p>
      </section>
    </>
  );
}
