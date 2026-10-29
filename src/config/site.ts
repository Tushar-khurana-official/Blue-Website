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

  founder: {
    name: "Manish Purohit",
    nameHi: "मनीष पुरोहित",
    role: "Founder",
    /** Put a square photo (at least 600×600) in public/images and set e.g. "/images/manish-purohit.jpg". Empty shows initials. */
    photo: "",
  },
  /** Office photo (landscape, at least 1200×800) in public/images, e.g. "/images/office.jpg". Empty hides it. */
  officePhoto: "",
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

  /**
   * Real client reviews only, copied with the client's permission (e.g. from your Google Business profile).
   * The reviews section stays hidden until at least one is added.
   */
  reviews: [] as { name: string; text: string; rating: number; date?: string }[],
  googleReviewsUrl: "", // link to your Google reviews, shown under the reviews

  /** Client portal / app login. Leave empty and the button points to the contact section. */
  clientLoginUrl: "",

  /** Add real profile URLs to show the icons in the footer. Supported: Instagram, LinkedIn, YouTube, X. */
  social: [] as { name: string; href: string }[],
};

export const nav = [
  { label: "Home", hi: "होम", href: "/" },
  { label: "Mutual Funds", hi: "म्यूचुअल फंड", href: "/mutual-funds" },
  { label: "Stock Market", hi: "शेयर बाज़ार", href: "/stock-market" },
  { label: "Real Estate", hi: "रियल एस्टेट", href: "/real-estate" },
  { label: "Calculators", hi: "कैलकुलेटर", href: "/calculators" },
  { label: "About", hi: "हमारे बारे में", href: "/about" },
  { label: "Contact", hi: "संपर्क", href: "/contact" },
] as const;

export const DISCLAIMER =
  "Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Past performance is not indicative of future returns.";
