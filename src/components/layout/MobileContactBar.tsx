import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { T } from "@/components/ui/T";

/** Phones only: a fixed bar with one-tap Call and WhatsApp (replaces the floating WhatsApp button there). */
export function MobileContactBar() {
  const c = site.contact;
  return (
    <aside aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
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
