"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { T } from "@/components/ui/T";
import { LangToggle } from "./LangToggle";
import { Logo } from "./Logo";

/** Sticky navy navbar that turns more opaque once the page scrolls. Mobile: native <dialog> drawer. */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawer = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const d = drawer.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-40 border-b border-white/10 backdrop-blur-md transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-navy/95 shadow-[0_10px_30px_rgb(2_10_30/0.3)]" : "bg-navy/80"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-4">
        <Logo tone="light" />
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-white ${
                    isActive(n.href) ? "text-white" : "text-on-dark"
                  }`}
                >
                  <T en={n.label} hi={n.hi} />
                  {isActive(n.href) && <span aria-hidden="true" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-sky" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle className="border-white/25 text-white hover:bg-white/10" />
          <span className="hidden sm:inline-flex">
            <Button href="/contact"><T en="Talk to us" hi="बात करें" /></Button>
          </span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 text-white xl:hidden"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <dialog
        ref={drawer}
        aria-label="Menu"
        onClose={() => setOpen(false)}
        className="m-0 ml-auto h-dvh max-h-dvh w-[min(86vw,360px)] max-w-none bg-bg p-0 text-fg backdrop:bg-navy/60 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line">
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="px-5 py-4">
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-lg font-medium ${isActive(n.href) ? "bg-royal/10 text-link" : "hover:bg-bg-soft"}`}
                >
                  <T en={n.label} hi={n.hi} />
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-6 w-full">
            <T en="Talk to us" hi="बात करें" />
          </Button>
        </nav>
      </dialog>
    </header>
  );
}
