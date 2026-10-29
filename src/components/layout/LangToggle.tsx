"use client";

import { Languages } from "lucide-react";
import { LANG_KEY } from "@/lib/lang";

/** Switches between English and Hindi. The choice is remembered in this browser. */
export function LangToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const hi = root.classList.toggle("lang-hi");
    root.lang = hi ? "hi-IN" : "en-IN";
    try {
      localStorage.setItem(LANG_KEY, hi ? "hi" : "en");
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3 text-sm sm:px-3.5 font-semibold transition-colors ${className}`}
    >
      <Languages aria-hidden="true" className="h-4 w-4" />
      <span data-l="en">
        <span lang="hi" className="sm:hidden">हि</span>
        <span lang="hi" className="hidden sm:inline">हिंदी</span>
        <span className="sr-only"> (switch to Hindi)</span>
      </span>
      <span data-l="hi">
        <span className="sm:hidden">EN</span>
        <span className="hidden sm:inline">English</span>
        <span className="sr-only" lang="hi"> (अंग्रेज़ी में देखें)</span>
      </span>
    </button>
  );
}
