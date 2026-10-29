import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { T } from "@/components/ui/T";

/** Phones only: one-tap Call and WhatsApp at the very end of the page, below the footer. */
export function MobileContactBar() {
  const c = site.contact;
  return (
    <aside aria-label="Quick contact" className="border-t border-white/10 bg-navy px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={`tel:${c.phoneHref}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-royal font-semibold text-white">
          <Phone aria-hidden="true" className="h-5 w-5" /> <T en="Call" hi="कॉल करें" />
        </a>
        <a
          href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(c.whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#13773f] font-semibold text-white"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" /> WhatsApp<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </aside>
  );
}
