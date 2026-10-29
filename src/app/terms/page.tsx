import { Legal } from "@/components/sections/Legal";
import { DISCLAIMER, site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Terms of Use", `Terms that apply to using the ${site.name} website.`, "/terms");

export default function Terms() {
  return (
    <Legal title="Terms of Use" updated="[Date]">
      <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>
      <h2>No offer or guarantee</h2>
      <p>Content on this website is for general information and education. It is not an offer to buy or sell any security, and nothing on it is a promise or guarantee of returns. Calculator results and figures are illustrative only.</p>
      <h2>Risk</h2>
      <p>{DISCLAIMER} Investments in the securities market are subject to market risks.</p>
      <h2>Registration</h2>
      <p>AMFI ARN: {site.registration.arn} · EUIN: {site.registration.euin} · SEBI registration: {site.registration.sebi}.</p>
      <h2>Third-party links</h2>
      <p>Links to other websites are provided for convenience. We are not responsible for their content.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India. Courts at [City] have exclusive jurisdiction.</p>
    </Legal>
  );
}
