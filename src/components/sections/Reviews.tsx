import { ExternalLink, Star } from "lucide-react";
import { site } from "@/config/site";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { T } from "@/components/ui/T";

/** Real client reviews from site.ts. Renders nothing until at least one review is added. */
export function Reviews() {
  if (site.reviews.length === 0) return null;
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-bg-soft py-16 md:py-20">
      <div className="container-x">
        <SectionHeading id="reviews-title" eyebrow={<T en="Client reviews" hi="क्लाइंट रिव्यू" />} title={<T en={<>What clients <span className="text-gradient">say</span></>} hi={<>क्लाइंट <span className="text-gradient">क्या कहते हैं</span></>} />} />
        <Reveal as="ul" className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.reviews.map((r) => (
            <RevealItem as="li" key={r.name + r.text.slice(0, 20)}>
              <figure className="h-full rounded-[22px] border border-line bg-surface p-7">
                <div className="flex gap-0.5 text-[#e7b64b]" role="img" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} aria-hidden="true" className="h-5 w-5" fill={i < r.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <blockquote className="mt-4 text-fg">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {r.name}
                  {r.date && <span className="font-normal text-muted"> · {r.date}</span>}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </Reveal>
        {site.googleReviewsUrl && (
          <p className="mt-8 text-center">
            <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-link">
              <T en="Read all reviews on Google" hi="Google पर सभी रिव्यू पढ़ें" /> <ExternalLink aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
