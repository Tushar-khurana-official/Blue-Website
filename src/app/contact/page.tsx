import { ContactForm } from "@/components/sections/ContactForm";
import { Faq } from "@/components/sections/Faq";
import { OfficeMap } from "@/components/sections/OfficeMap";
import { T } from "@/components/ui/T";
import { PageHero } from "@/components/ui/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact Us", "Book a free investment consultation. Call, WhatsApp or send us a message.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={<T en="Contact" hi="संपर्क" />}
        title={<T en={<>Book a <span className="text-gradient">free consultation</span></>} hi={<><span className="text-gradient">मुफ़्त कंसल्टेशन</span> बुक करें</>} />}
        intro={<T en="No obligation and no pressure to invest. Just an honest conversation about your goals." hi="कोई बाध्यता नहीं, निवेश का कोई दबाव नहीं। बस आपके लक्ष्यों पर एक ईमानदार बातचीत।" />}
      />
      <ContactForm />
      <OfficeMap />
      <Faq />
    </>
  );
}
