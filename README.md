# [Brand Name] — SIP, Mutual Funds & Stock Market website

A modern, fully responsive fintech website built with **Next.js 15 (App Router)**, **Tailwind CSS v4** and **Framer Motion** (`motion`).
Blue theme (navy `#0A1F44`, royal `#1E5EFF`, sky `#38BDF8`, soft `#F4F8FF`), light and dark modes, glassmorphism cards, Sora headings and Plus Jakarta Sans body text, Lucide icons.

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

- **`src/config/site.ts`**: brand name, tagline, phone, WhatsApp, email, address, hours, **ARN / EUIN / SEBI registration**, the counters (investors, assets, …), social links, navigation, and the disclaimer text.
- **`src/lib/content.ts`**: services, "why choose us" tiles, the 4 steps, fund categories and risk levels, sample ticker data, testimonials, insight articles, FAQs and the contact form's "interested in" options.

Colours are CSS variables at the top of `src/app/globals.css` (`:root` for light, `.dark` for dark). Replace the logo in `src/components/layout/Logo.tsx` and the favicon `src/app/icon.svg`.

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
│   │   ├── layout.tsx            # fonts, theme script, navbar, footer, WhatsApp button, JSON-LD
│   │   ├── template.tsx          # page transition (fade + rise on navigation)
│   │   ├── globals.css           # design tokens, glass/card styles, CSS animations, reduced motion
│   │   ├── page.tsx              # Home: all 14 sections
│   │   ├── sip/ mutual-funds/ stock-market/ calculators/ about/ contact/
│   │   ├── privacy/ terms/       # legal templates
│   │   ├── api/contact/route.ts  # form endpoint
│   │   ├── sitemap.ts · robots.ts · opengraph-image.tsx · icon.svg · not-found.tsx
│   └── components/
│       ├── layout/               # Navbar (glassy on scroll, mobile drawer), Footer, ThemeToggle, Logo, WhatsAppButton, MotionProvider
│       ├── sections/             # Hero, HeroChart, Ticker, Services, Calculator, WhyUs, HowItWorks, FundCategories,
│       │                         # MarketSnapshot, Testimonials, Insights, Faq, CtaBanner, ContactForm, Legal
│       └── ui/                   # Button, Reveal, Counter, SectionHeading, PageHero, Icon, Social, JsonLd
└── tests/calc.test.ts
```

## Animations

- **Hero:** drifting blue gradient and floating shapes (CSS transforms), a line chart that draws itself upward (SVG stroke animation), floating glass chips.
- **Scroll reveal:** every section fades and slides up with staggered children (IntersectionObserver + CSS).
- **Framer Motion:** count-up counters, the how-it-works timeline, the auto-sliding testimonial carousel, the FAQ accordion, calculator number tweens, and page transitions.
- **Other:** card lift + glow + gradient border on hover, glassy sticky navbar, infinite ticker marquee (pauses on hover/focus), button press micro-interactions, WhatsApp pulse (3 cycles).
- **Reduced motion:** with the OS "reduce motion" setting, loops stop, content appears without movement and the carousel does not auto-play.

## Quality (measured on the production build)

- **Accessibility:** axe WCAG 2.1 AA checks pass on every page in light and dark mode. Skip link, keyboard-navigable menu, tabs, accordion and carousel; visible focus rings; labelled controls; risk and gain/loss always shown with text, not colour alone.
- **Lighthouse (mobile, slow-4G + 4× CPU):** inner pages 90–94 performance, home page 85–91 (it holds all 14 sections). Desktop 100. Accessibility, Best Practices and SEO 100. Re-check on your production host.
- **SEO:** unique title and description per page, canonical URLs, Open Graph and Twitter cards, generated OG image, `sitemap.xml`, `robots.txt`, FinancialService, FAQPage and WebApplication schema.

## Before launch: checklist

- [ ] Replace `[Brand Name]`, tagline, phone, WhatsApp, email, address and hours in `src/config/site.ts`.
- [ ] Replace `[ARN / Registration No.]`, `[EUIN]` and `[SEBI Registration No.]` with your real registrations.
- [ ] Replace the counters (10,000+ investors, ₹500 Cr+, 12+ years, 4.8/5) with **verified** figures, or remove them.
- [ ] Replace the **sample testimonials** with real, consented reviews (never publish invented ones), and remove the "sample" note.
- [ ] Connect live market data or keep the "Sample data" labels on the ticker and market table.
- [ ] Have the Privacy Policy and Terms reviewed by a professional; fill in `[Date]` and `[City]`.
- [ ] Wording check: "advisor", "advisory" and "assets advised" are for SEBI-registered Investment Advisers (RIA). If you are a mutual fund distributor rather than an RIA, change them (for example to "experts", "guidance", "assets managed for clients"), and use "24x7 support" only if you really offer it.
- [ ] Set `NEXT_PUBLIC_SITE_URL` and `CONTACT_WEBHOOK_URL`, and send a test enquiry.
- [ ] Replace the logo and favicon.
