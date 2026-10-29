import { ContactForm } from "@/components/sections/ContactForm";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/ui/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact Us", "Book a free investment consultation. Call, WhatsApp or send us a message.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Book a <span className="text-gradient">free consultation</span></>} intro="No obligation and no pressure to invest. Just an honest conversation about your goals." />
      <ContactForm />
      <Faq />
    </>
  );
}
