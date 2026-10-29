import { Legal } from "@/components/sections/Legal";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Privacy Policy", `How ${site.name} collects, uses and protects your personal information.`, "/privacy");

export default function Privacy() {
  return (
    <Legal title="Privacy Policy" updated="[Date]">
      <p>{site.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what information we collect through this website and how we use it.</p>
      <h2>Information we collect</h2>
      <p>When you fill in the contact form we collect your name, mobile number, email address, area of interest and any message you write. We do not ask for PAN, bank or account details on this website.</p>
      <h2>How we use it</h2>
      <p>Only to respond to your enquiry and, if you become a client, to provide our services. We do not sell or rent your personal information to anyone.</p>
      <h2>Cookies</h2>
      <p>This site does not use cookies. [If you add analytics, describe it here and ask for consent first.]</p>
      <h2>Data retention and your rights</h2>
      <p>You can ask us to access, correct or delete your information at any time by writing to <strong>{site.contact.email}</strong>. Your rights under the Digital Personal Data Protection Act, 2023 apply.</p>
      <h2>Contact</h2>
      <p>{site.name}, {site.contact.address}. Phone: {site.contact.phone}.</p>
    </Legal>
  );
}
