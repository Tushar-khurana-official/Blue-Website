import type { Metadata } from "next";
import { site } from "@/config/site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, locale: "en_IN", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  telephone: site.contact.phoneHref,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "13 Mahaveerpuram City, Near Chopasni School, Chopasni",
    addressLocality: site.city,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: site.city,
  sameAs: site.social.map((s) => s.href),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: ["Stock Market Investments", "Mutual Funds Investments", "Real Estate Advisory"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
  },
};
