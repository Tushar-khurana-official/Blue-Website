import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { T } from "@/components/ui/T";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="container-x py-20">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-navy via-[#123a9c] to-royal px-6 py-14 text-center text-white sm:px-12 md:py-20">
        <div aria-hidden="true" className="blob blob-a -left-16 -top-16 h-64 w-64 text-sky/50" />
        <div aria-hidden="true" className="blob blob-b -bottom-20 -right-10 h-72 w-72 text-royal/60" />
        <div className="relative">
          <h2 id="cta-title" className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-5xl"><T en="Ready to start your investment journey?" hi="अपना निवेश सफ़र शुरू करने के लिए तैयार हैं?" /></h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            <T
              en="Book a free, no-obligation consultation. We'll listen to your goals and suggest a plan, with no pressure to invest."
              hi="मुफ़्त कंसल्टेशन बुक करें, बिना किसी बाध्यता के। हम आपके लक्ष्य सुनेंगे और एक प्लान सुझाएँगे, निवेश का कोई दबाव नहीं।"
            />
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="white" size="lg">
              <CalendarCheck aria-hidden="true" className="h-5 w-5" /> <T en="Book free consultation" hi="मुफ़्त कंसल्टेशन बुक करें" />
            </Button>
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="inline-flex min-h-13 items-center gap-2 rounded-full border border-white/40 px-7 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone aria-hidden="true" className="h-5 w-5" /> {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
