# Shree Investments — Stock Market, Mutual Funds & Real Estate website (Jodhpur)

A modern, fully responsive fintech website built with **Next.js 15 (App Router)**, **Tailwind CSS v4** and **Framer Motion** (`motion`).
Blue theme (navy `#0A1F44`, royal `#1E5EFF`, sky `#38BDF8`, soft `#F4F8FF`), light mode with navy header, hero and footer, glassmorphism cards, Sora headings and Plus Jakarta Sans body text, Lucide icons.

## Run it

```bash
cd fintech-blue
npm install
cp .env.example .env.local   # optional: set NEXT_PUBLIC_SITE_URL and CONTACT_WEBHOOK_URL
npm run dev                  # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` then `npm start` | Production build and server |
| `npm run lint` / `npm run typecheck` | ESLint and TypeScript |
| `npm test` | Unit tests for the calculator maths and number formatting |

**Deploy:** push to GitHub and import the folder in Vercel (set the root directory to `fintech-blue`), or run `npm run build && npm start` on any Node 20+ host.

## Customise

Everything business-specific is in two files:

- **`src/config/site.ts`**: firm name, city, tagline, founder and quote, phones, WhatsApp, email, address and map link, **ARN / EUIN / SEBI registration**, NISM certifications, client-login URL, social links, navigation, and the disclaimer text.
- **`src/lib/content.ts`**: services, credentials strip, values, goals, "why choose us" tiles, the 4 steps, fund categories, fund houses, real estate copy, sample ticker data (stock market page only), FAQs and the contact form's "interested in" options.

Colours are CSS variables at the top of `src/app/globals.css` (`:root`). Replace the logo in `src/components/layout/Logo.tsx` and the favicon `src/app/icon.svg`.

**Contact form:** submissions go to `/api/contact`, which validates them (Indian mobile number, email, consent), filters bots with a honeypot field, rate-limits by IP, and POSTs each enquiry as JSON to `CONTACT_WEBHOOK_URL` (Zapier, Make, Google Apps Script, a CRM…). Without a webhook, enquiries are only logged on the server.

## Folder structure

```
fintech-blue/
├── src/
│   ├── config/site.ts            # brand, contact, registration placeholders, stats, nav, disclaimer
│   ├── lib/
│   │   ├── content.ts            # all page copy and sample data
│   │   ├── calc.ts               # SIP and lumpsum maths
│   │   ├── format.ts             # ₹ formatting (₹2,50,000 · ₹2.50 Cr · ₹60.0 L)
│   │   ├── validate.ts           # contact-form validation (shared by form and API)
│   │   └── seo.ts                # per-page metadata + FinancialService schema
│   ├── app/
│   │   ├── layout.tsx            # fonts, navbar, footer, WhatsApp button, JSON-LD
│   │   ├── template.tsx          # page transition (fade + rise on navigation)
│   │   ├── globals.css           # design tokens, glass/card styles, CSS animations, reduced motion
│   │   ├── page.tsx              # Home: hero + credentials, services, values, calculator, goals, KYC, process, why us, fund houses, clients, FAQ, contact
│   │   ├── sip/ mutual-funds/ stock-market/ real-estate/ calculators/ about/ contact/
│   │   ├── privacy/ terms/       # legal templates
│   │   ├── api/contact/route.ts  # form endpoint
│   │   ├── sitemap.ts · robots.ts · opengraph-image.tsx · icon.svg · not-found.tsx
│   └── components/
│       ├── layout/               # Navbar (glassy on scroll, mobile drawer), Footer, Logo, WhatsAppButton, MotionProvider
│       ├── sections/             # Hero, HeroChart, Services, Values, Calculator, Goals, Kyc, HowItWorks, WhyUs, FundHouses,
│       │                         # Clients, FundCategories, Ticker, MarketSnapshot, Faq, CtaBanner, ContactForm, Legal
│       └── ui/                   # Button, Reveal, Counter, SectionHeading, PageHero, Icon, Social, JsonLd
└── tests/calc.test.ts
```

## Animations

- **Hero:** drifting blue gradient and floating shapes (CSS transforms), a line chart that draws itself upward (SVG stroke animation), floating glass chips.
- **Scroll reveal:** every section fades and slides up with staggered children (IntersectionObserver + CSS).
- **Framer Motion:** the how-it-works timeline, the FAQ accordion, calculator number tweens, and page transitions.
- **Other:** card lift + glow + gradient border on hover, glassy sticky navbar, infinite ticker marquee (pauses on hover/focus), button press micro-interactions, WhatsApp pulse (3 cycles).
- **Reduced motion:** with the OS "reduce motion" setting, loops stop and content appears without movement.

## Quality (measured on the production build)

- **Accessibility:** axe WCAG 2.1 AA checks pass on every page. Skip link, keyboard-navigable menu, tabs and accordion; visible focus rings; labelled controls; risk and gain/loss always shown with text, not colour alone.
- **Lighthouse (mobile, slow-4G + 4× CPU):** measured on the earlier template version (inner pages 90–94, home 85–91, desktop 100). Accessibility, Best Practices and SEO 100. Re-check on your production host.
- **SEO:** unique title and description per page, canonical URLs, Open Graph and Twitter cards, generated OG image, `sitemap.xml`, `robots.txt`, FinancialService, FAQPage and WebApplication schema.

## Before launch: checklist

- [ ] Check the firm details, phones, email and address in `src/config/site.ts`, and add the About-page story (`src/app/about/page.tsx`).
- [ ] Replace `[ARN-XXXXXX]` and `[EUIN]` with your real registrations (add `sebi` only if you hold one).
- [ ] Add social profile URLs and, if you have one, the client-login URL in `site.ts`.
- [ ] Connect live market data or keep the "Sample data" labels on the ticker and market table.
- [ ] Have the Privacy Policy and Terms reviewed by a professional; fill in `[Date]` and `[City]`.
- [ ] Wording check: "advisor", "advisory" and "assets advised" are for SEBI-registered Investment Advisers (RIA). If you are a mutual fund distributor rather than an RIA, change them (for example to "experts", "guidance", "assets managed for clients"), and use "24x7 support" only if you really offer it.
- [ ] Set `NEXT_PUBLIC_SITE_URL` and `CONTACT_WEBHOOK_URL`, and send a test enquiry.
- [ ] Replace the logo and favicon.
