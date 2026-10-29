/**
 * Page copy and placeholder data. Everything marked "sample" or "illustrative" must be replaced
 * with real, verified content before launch.
 */

export const services = [
  {
    slug: "sip",
    icon: "repeat",
    title: "SIP Planning",
    body: "Start a systematic investment plan from ₹500 a month. We map each SIP to a goal, set the right amount and step it up as your income grows.",
    points: ["Goal-based SIP amounts", "Annual step-up plans", "Auto-debit setup"],
  },
  {
    slug: "mutual-funds",
    icon: "pie",
    title: "Mutual Fund Advisory",
    body: "Equity, debt, hybrid, ELSS and index funds chosen for your risk profile and time horizon, with regular reviews and rebalancing.",
    points: ["Risk profiling", "Scheme selection", "Portfolio reviews"],
  },
  {
    slug: "stock-market",
    icon: "candles",
    title: "Stock Market Guidance",
    body: "Demat account opening, long-term equity investing, IPO applications and research-backed guidance, with clear explanations of risk.",
    points: ["Demat & trading account", "Long-term portfolios", "IPO assistance"],
  },
] as const;

export const features = [
  { icon: "users", title: "Expert advisors", body: "Certified professionals who explain every recommendation in plain language." },
  { icon: "target", title: "Goal-based planning", body: "Retirement, education, a home: every rupee is tied to a goal and a date." },
  { icon: "eye", title: "Transparent process", body: "You see what you invest in, what it costs and how it is doing. No hidden charges." },
  { icon: "badge", title: "Low-cost", body: "No account opening fee for mutual funds and clear, published charges for everything else." },
  { icon: "shield", title: "Secure", body: "Investments are held in your own name with the fund house or depository, never with us." },
  { icon: "headset", title: "24x7 support", body: "Reach us on WhatsApp any time; our team replies within working hours." },
] as const;

export const steps = [
  { icon: "chat", title: "Consult", body: "A free 30-minute call to understand your income, goals and comfort with risk." },
  { icon: "clipboard", title: "Plan", body: "A written plan with goals, SIP amounts and the funds or stocks chosen for each." },
  { icon: "rocket", title: "Invest", body: "Paperless KYC and account setup. Your SIPs start on the date you choose." },
  { icon: "chart", title: "Track", body: "Live portfolio tracking and a review every six months, or whenever life changes." },
] as const;

/** Risk level 1 (low) to 5 (very high), always shown with a text label too. */
export const fundCategories = [
  { name: "Equity Funds", risk: 5, riskLabel: "Very high", horizon: "5+ years", body: "Invest mainly in shares of listed companies for long-term growth." },
  { name: "Debt Funds", risk: 2, riskLabel: "Low to moderate", horizon: "1–3 years", body: "Invest in bonds and money-market instruments for steadier returns." },
  { name: "Hybrid Funds", risk: 3, riskLabel: "Moderate", horizon: "3–5 years", body: "A mix of equity and debt that balances growth with stability." },
  { name: "ELSS (Tax Saving)", risk: 5, riskLabel: "Very high", horizon: "3-year lock-in", body: "Equity funds that qualify for deduction under Section 80C (old tax regime)." },
  { name: "Index Funds", risk: 4, riskLabel: "High", horizon: "5+ years", body: "Track an index such as the NIFTY 50 at a low cost, with no fund-manager bias." },
] as const;

/** SAMPLE market data for layout only. Not live prices. */
export const tickers = [
  { name: "NIFTY 50", value: 24580.35, change: 0.62 },
  { name: "SENSEX", value: 80845.75, change: 0.55 },
  { name: "BANK NIFTY", value: 52310.4, change: -0.21 },
  { name: "NIFTY IT", value: 41230.1, change: 1.08 },
  { name: "NIFTY MIDCAP 100", value: 56420.85, change: 0.34 },
  { name: "NIFTY SMALLCAP 100", value: 18215.6, change: -0.47 },
  { name: "INDIA VIX", value: 13.42, change: -2.1 },
  { name: "GOLD (₹/10g)", value: 76450, change: 0.18 },
] as const;

/** SAMPLE testimonials. Replace with real, consented client reviews; never publish invented ones. */
export const testimonials = [
  { name: "Client name", role: "Software engineer, Pune", quote: "They explained exactly why each fund was in my plan. For the first time my SIPs feel connected to a goal." },
  { name: "Client name", role: "Doctor, Jaipur", quote: "Paperless setup in one evening, and the six-monthly review actually changed things when my income went up." },
  { name: "Client name", role: "Business owner, Surat", quote: "No pressure to buy anything. They told me when to do nothing, which turned out to be the best advice." },
  { name: "Client name", role: "Teacher, Lucknow", quote: "The calculators and plain-language explanations made it easy to start with a small SIP and build up." },
] as const;

export const insights = [
  { slug: "what-is-sip", tag: "Basics", minutes: 4, title: "What is a SIP, and why does it work?", body: "How investing a fixed amount every month smooths out market ups and downs through rupee-cost averaging." },
  { slug: "direct-vs-regular", tag: "Mutual funds", minutes: 5, title: "Direct vs regular plans: what's the difference?", body: "The same portfolio, two expense ratios. What you pay for, and how to decide which suits you." },
  { slug: "asset-allocation", tag: "Planning", minutes: 6, title: "Asset allocation matters more than fund picking", body: "Why the split between equity, debt and gold drives most of your long-term result." },
] as const;

export const faqs = [
  { q: "What is a SIP?", a: "A Systematic Investment Plan lets you invest a fixed amount in a mutual fund at regular intervals, usually monthly, by auto-debit from your bank account." },
  { q: "What is the minimum amount to start a SIP?", a: "Many schemes accept SIPs from ₹500 a month. The exact minimum is stated in each scheme's documents." },
  { q: "Can I stop or pause my SIP?", a: "Yes. You can pause or stop a SIP at any time. Units already bought stay invested until you redeem them, subject to any exit load or lock-in." },
  { q: "Are mutual fund returns guaranteed?", a: "No. Mutual fund returns depend on market performance and can be negative. Any figures on this site are illustrations based on assumed returns." },
  { q: "What documents do I need to invest?", a: "PAN, Aadhaar (or another address proof), a bank account and a photograph for one-time KYC. The whole process can be done online." },
  { q: "How are mutual funds taxed?", a: "Gains are taxed when you redeem. The rate depends on the fund type and how long you held the units. Tax rules change, so check the current rates with a tax professional." },
  { q: "What is ELSS?", a: "Equity Linked Savings Schemes are equity mutual funds with a three-year lock-in that qualify for a deduction under Section 80C under the old tax regime." },
  { q: "Is my money safe with you?", a: "Your money goes directly from your bank account to the fund house, and units are held in your own name. We never hold client money." },
] as const;

export const interests = ["SIP planning", "Mutual funds", "Stock market", "Tax saving (ELSS)", "Retirement planning", "Not sure yet"] as const;
