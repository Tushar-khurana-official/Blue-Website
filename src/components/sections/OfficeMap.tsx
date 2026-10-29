import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { T } from "@/components/ui/T";

/** Office photo (when set in site.ts) and an embedded Google Map of the address. No API key needed. */
export function OfficeMap() {
  const c = site.contact;
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(c.address)}&output=embed`;
  return (
    <section aria-labelledby="visit-title" className="border-t border-line bg-bg-soft py-20 md:py-24">
      <div className="container-x">
        <SectionHeading
          id="visit-title"
          eyebrow={<T en="Visit us" hi="हमसे मिलें" />}
          title={<T en={<>Our office in <span className="text-gradient">{site.city}</span></>} hi={<>जोधपुर में <span className="text-gradient">हमारा ऑफ़िस</span></>} />}
          intro={c.address}
        />
        <div className={`mt-12 grid gap-6 ${site.officePhoto ? "lg:grid-cols-2" : ""}`}>
          {site.officePhoto && (
            <Image
              src={site.officePhoto}
              alt={`${site.name} office, ${site.city}`}
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full max-h-[420px] w-full rounded-[24px] object-cover"
            />
          )}
          <div className="overflow-hidden rounded-[24px] border border-line bg-surface">
            <iframe
              title={`Map showing ${site.name}, ${c.address}`}
              src={embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full md:h-[420px]"
            />
          </div>
        </div>
        <p className="mt-5 text-center">
          <a href={c.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-link">
            <T en="Get directions in Google Maps" hi="Google Maps में रास्ता देखें" /> <ExternalLink aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </section>
  );
}
