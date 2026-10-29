"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

/** Sticky navbar that turns glassy and blurred once the page scrolls. Mobile: native <dialog> drawer. */
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
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled ? "glass !rounded-none border-x-0 border-t-0" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-link ${
                    isActive(n.href) ? "text-link" : "text-fg"
                  }`}
                >
                  {n.label}
                  {isActive(n.href) && <span aria-hidden="true" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-royal to-sky" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <span className="hidden sm:inline-flex">
            <Button href="/contact">Start Investing</Button>
          </span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
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
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-6 w-full">
            Start Investing
          </Button>
        </nav>
      </dialog>
    </header>
  );
}
