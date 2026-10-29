import { site } from "@/config/site";
import { LogoMark } from "./Logo";

/**
 * Floating WhatsApp button: the Shree Investments emblem in a soft green ring, with a small WhatsApp badge.
 * Shown on every screen size.
 */
export function WhatsAppButton() {
  const href = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappText)}`;
  return (
    <aside aria-label="WhatsApp chat">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${site.name} on WhatsApp (opens in a new tab)`}
        className="group fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6"
      >
        <span className="pulse-ring relative inline-flex rounded-full bg-[#25d366]/25 p-2 shadow-[0_12px_32px_-8px_rgb(2_10_30/0.5)] ring-1 ring-[#25d366]/40 transition-transform duration-200 group-hover:scale-105">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy ring-2 ring-white/90">
            <LogoMark className="h-9 w-9" />
          </span>
          <span className="absolute -bottom-0.5 -right-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1f9d55] text-white ring-2 ring-white">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.36A9.93 9.93 0 1 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.81.83-3-.2-.31a8.2 8.2 0 1 1 6.94 3.82Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.06 4.8 4.8 0 0 0 1 2.55 11 11 0 0 0 4.2 3.71c1.57.68 2.18.73 2.97.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.17-.47-.29Z" />
            </svg>
          </span>
        </span>
      </a>
    </aside>
  );
}
