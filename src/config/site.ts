/**
 * site.ts: every business-specific value lives here. Replace the [bracketed] placeholders before launch.
 */
export const site = {
  name: "[Brand Name]",
  tagline: "Grow your wealth, one SIP at a time",
  description:
    "SIP planning, mutual fund guidance and stock market services for Indian investors. Goal-based plans, transparent costs and a team you can reach.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/$/, ""),

  contact: {
    phone: "+91 90000 00000", // [Phone]
    phoneHref: "+919000000000",
    whatsapp: "919000000000", // country code + number, digits only
    whatsappText: "Hi, I would like a free investment consultation.",
    email: "hello@example.com", // [Email]
    address: "[Office address, City, State PIN]",
    hours: "Mon–Sat, 9:30 am – 6:30 pm",
  },

  /** Compliance: shown in the footer and legal pages. Replace with real registration details. */
  registration: {
    arn: "[ARN / Registration No.]", // AMFI ARN for mutual fund distribution
    euin: "[EUIN]",
    sebi: "[SEBI Registration No.]", // e.g. stock broker / Authorised Person / RIA registration, as applicable
  },

  /** Counters on the home page. Placeholder figures: replace with verified numbers before launch. */
  stats: [
    { value: 10000, suffix: "+", label: "Investors" },
    { value: 500, prefix: "₹", suffix: " Cr+", label: "Assets advised" },
    { value: 12, suffix: "+", label: "Years of experience" },
    { value: 4.8, decimals: 1, suffix: "/5", label: "Client rating" },
  ],

  social: [
    { name: "Instagram", href: "https://instagram.com/" },
    { name: "LinkedIn", href: "https://linkedin.com/" },
    { name: "YouTube", href: "https://youtube.com/" },
    { name: "X", href: "https://x.com/" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "SIP", href: "/sip" },
  { label: "Mutual Funds", href: "/mutual-funds" },
  { label: "Stock Market", href: "/stock-market" },
  { label: "Calculators", href: "/calculators" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const DISCLAIMER =
  "Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Past performance is not indicative of future returns.";
