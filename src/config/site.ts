/**
 * site.ts: every business-specific value lives here. Replace the [bracketed] placeholders before launch.
 */
export const site = {
  name: "Shree Investments",
  city: "Jodhpur",
  tagline: "Smart investments. Strong growth. Secure future.",
  description:
    "Shree Investments helps families in Jodhpur grow their wealth through the stock market, mutual funds and real estate, with honest guidance, clear risks and a plan you can follow.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://shree-investments.vercel.app").replace(/\/$/, ""),

  founder: { name: "Manish Purohit", role: "Founder" },
  quote: "The best plan is the one you can actually keep.",

  contact: {
    phones: [
      { label: "+91 98299 47444", href: "+919829947444" },
      { label: "+91 93146 47444", href: "+919314647444" },
    ],
    phone: "+91 98299 47444",
    phoneHref: "+919829947444",
    whatsapp: "919829947444", // country code + number, digits only
    whatsappText: "Hi, I would like a free investment consultation.",
    email: "Manish.p2001us@gmail.com",
    address: "13 Mahaveerpuram City, Near Chopasni School, Chopasni, Jodhpur, Rajasthan",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=13+Mahaveerpuram+City+Chopasni+Jodhpur+Rajasthan",
  },

  /** Compliance: shown in the hero strip, footer and legal pages. */
  registration: {
    arn: "[ARN-XXXXXX]", // AMFI ARN for mutual fund distribution (required on all communication)
    euin: "[EUIN]",
    sebi: "", // only if you hold one (e.g. Authorised Person / stock broker); leave empty to hide
  },
  certifications: ["NISM Series V-A", "NISM Series VIII"],

  /** Client portal / app login. Leave empty and the button points to the contact section. */
  clientLoginUrl: "",

  /** Add real profile URLs to show the icons in the footer. Supported: Instagram, LinkedIn, YouTube, X. */
  social: [] as { name: string; href: string }[],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Mutual Funds", href: "/mutual-funds" },
  { label: "Stock Market", href: "/stock-market" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Calculators", href: "/calculators" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const DISCLAIMER =
  "Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Past performance is not indicative of future returns.";
