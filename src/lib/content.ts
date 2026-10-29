/**
 * Page copy and placeholder data. Everything marked "sample" or "illustrative" must be replaced
 * with real, verified content before launch.
 */

export const services = [
  {
    slug: "stock-market",
    icon: "trend",
    title: "Stock Market Investments",
    body: "Demat and trading accounts, long-term equity investing, IPO applications and derivatives, with honest guidance on risk.",
    tags: ["Equity trading", "Long-term investments", "Derivatives", "IPO investments"],
    cta: "Explore stock market",
  },
  {
    slug: "mutual-funds",
    icon: "pie",
    title: "Mutual Funds Investments",
    body: "SIPs, lump sum investments and bond funds chosen for your goals, with a written plan and regular reviews.",
    tags: ["SIP", "Lump sum", "Bonds", "Wealth creation solutions"],
    cta: "Explore mutual funds",
  },
  {
    slug: "real-estate",
    icon: "home",
    title: "Real Estate Advisory",
    body: "Residential, commercial and plot investments in and around Jodhpur, with location checks and paperwork guidance.",
    tags: ["Residential", "Commercial", "Plots", "Property investment guidance"],
    cta: "Explore real estate advisory",
  },
] as const;

/** Trust strip under the hero. */
export const credentials = [
  { icon: "trend", title: "Stock Market", detail: "Equity · IPO · F&O" },
  { icon: "pie", title: "AMFI Registered", detail: "Mutual fund distributor" },
  { icon: "home", title: "Real Estate", detail: "Residential · Commercial · Plots" },
  { icon: "award", title: "NISM Series V-A", detail: "Certified" },
  { icon: "award", title: "NISM Series VIII", detail: "Certified" },
] as const;

export const values = [
  { icon: "shield", title: "Trust & Transparency", body: "You see what you invest in, what it costs and what we earn. No hidden charges, no pressure." },
  { icon: "user", title: "Expert Guidance", body: "Guidance grounded in research and experience across shares, mutual funds and property." },
  { icon: "trend", title: "Wealth Creation", body: "Disciplined, long-term investing that compounds, rather than chasing quick returns." },
  { icon: "lock", title: "Secure Future", body: "Plans built around your family's goals, with risk kept to what you can live with." },
] as const;

/** Sorted by how far away the goal is. */
export const goals = [
  { when: "25 years away", title: "Retire without a pay cut", body: "A corpus sized to your real expenses, indexed for inflation, and drawn down in a sequence that survives a bad first decade.", tags: ["Equity mutual funds", "NPS", "Debt laddering"] },
  { when: "15 years away", title: "Fund the degree, not the loan", body: "Education inflation runs near 10%. We work backwards from the fee in the year your child enrols.", tags: ["Equity mutual funds", "Sukanya Samriddhi", "Gift deeds"] },
  { when: "10 years away", title: "Build the first crore", body: "An SIP you can sustain through a drawdown, and a rebalancing rule agreed in advance.", tags: ["Equity mutual funds", "Index funds", "Hybrid funds"] },
  { when: "6 years away", title: "Buy the house in cash-flow terms", body: "A down payment this close to spending has no business sitting in equity. Park it where the date is safe.", tags: ["Short-duration debt", "Arbitrage funds", "FDs"] },
  { when: "3 years away", title: "Save tax without wrecking liquidity", body: "ELSS has the shortest lock-in under Section 80C. Use it deliberately, not as a March panic purchase.", tags: ["ELSS", "NPS Tier I", "80C planning"] },
  { when: "Now", title: "Protect the plan itself", body: "Term cover and a health floater sized to your liabilities. Insurance is not an investment, and it is not sold as one.", tags: ["Term life", "Health floater", "Emergency fund"] },
] as const;

export const features = [
  { title: "Personalized guidance", body: "Your plan is built from your cash flows and goals, not from a model portfolio handed to everyone." },
  { title: "Goal-oriented investing", body: "Every rupee is tied to a goal with a date, so each fund has a job and a reason to be there." },
  { title: "Transparent communication", body: "You see what we earn before you invest, and we explain what we recommend in plain language." },
  { title: "Regular portfolio reviews", body: "Reviews on a fixed calendar, with a written note of what changed and why." },
  { title: "Long-term relationship", body: "The person who wrote your plan is the person who answers your call, years later." },
  { title: "Investor education", body: "We explain the why behind each decision, so you can hold your nerve when markets wobble." },
] as const;

export const steps = [
  { icon: "chat", time: "45 minutes", title: "Understand your goals", body: "A conversation about your income, obligations and worries. No product is named in this meeting." },
  { icon: "clipboard", time: "5 working days", title: "Build your strategy", body: "A written plan: goals, dates, rupee amounts, the monthly figure, and the specific schemes with the reason for each." },
  { icon: "rocket", time: "2 working days", title: "Invest and monitor", body: "KYC, folios and mandates set up through a registered platform. SIPs start on the date you pick." },
  { icon: "chart", time: "Every 6 months", title: "Review and refine", body: "Reviews that change something: rebalance if allocation drifts past the agreed band, step up SIPs after a raise, leave the rest alone." },
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

export const fundHouses = [
  "Aditya Birla Sun Life Mutual Fund", "Axis Mutual Fund", "DSP Mutual Fund", "HDFC Mutual Fund", "ICICI Prudential Mutual Fund",
  "Kotak Mahindra Mutual Fund", "Mirae Asset Mutual Fund", "Nippon India Mutual Fund", "Parag Parikh Mutual Fund", "SBI Mutual Fund",
  "Tata Mutual Fund", "UTI Mutual Fund",
] as const;

export const realEstate = [
  { icon: "home", title: "Residential", body: "Flats, independent houses and villas for living in or renting out, with a realistic view of rental yield and resale." },
  { icon: "building", title: "Commercial", body: "Shops and office space where the location, footfall and lease terms decide the return." },
  { icon: "map", title: "Plots", body: "Land in developing areas around Jodhpur, checked for approvals, title and access before you commit." },
] as const;

export const realEstateChecks = [
  "RERA registration of the project and the agent",
  "Clear title and the chain of ownership documents",
  "Approved layout, land use and building permissions",
  "Location: roads, water, schools and future development plans",
  "All-in cost: stamp duty, registration, maintenance and taxes",
  "How easily you could sell, and what rent is realistic",
] as const;

export const faqs = [
  { q: "Is the first consultation really free?", a: "Yes. The first conversation is free and names no products. We listen, ask questions and tell you honestly whether we can help." },
  { q: "Are you an investment adviser?", a: "No. Shree Investments is an AMFI-registered mutual fund distributor, not a SEBI-registered investment adviser. We are paid trail commission by the fund house on the regular plans we distribute, and we disclose it before you invest." },
  { q: "What is a SIP?", a: "A Systematic Investment Plan lets you invest a fixed amount in a mutual fund at regular intervals, usually monthly, by auto-debit from your bank account." },
  { q: "What is the minimum amount to start a SIP?", a: "Many schemes accept SIPs from ₹500 a month. The exact minimum is stated in each scheme's documents." },
  { q: "Are mutual fund returns guaranteed?", a: "No. Mutual fund returns depend on market performance and can be negative. Any figures on this site are illustrations based on assumed returns." },
  { q: "What documents do I need to invest?", a: "PAN, Aadhaar (or another address proof), a bank account and a photograph for one-time KYC. The whole process can be done online." },
  { q: "Do you help with property in Jodhpur?", a: "Yes. We help with residential, commercial and plot investments in and around Jodhpur, including location checks and paperwork. Real estate is not regulated by SEBI, so always check RERA registration before investing." },
  { q: "Is my money safe with you?", a: "Your money goes directly from your bank account to the fund house, and units are held in your own name. We never hold client money." },
] as const;

export const interests = ["Mutual funds / SIP", "Stock market", "Real estate", "Tax saving (ELSS)", "Retirement planning", "Not sure yet"] as const;
