import Link from "next/link";
import { site } from "@/config/site";

/** Lotus in a golden triangle on a blue tile, with the firm name and city. tone="light" for navy backgrounds. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 font-display ${tone === "light" ? "text-white" : "text-fg"}`}>
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10">
        <rect width="48" height="48" rx="13" fill="#1E5EFF" />
        <path d="M24 7 L42 38 H6 Z" fill="none" stroke="#E7B64B" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M24 33 C19 30 18 25 20 21 C22 23 24 26 24 33 Z" fill="#fff" />
        <path d="M24 33 C29 30 30 25 28 21 C26 23 24 26 24 33 Z" fill="#fff" />
        <path d="M24 33 C21 28 22 22 24 17 C26 22 27 28 24 33 Z" fill="#BFE6FF" />
        <path d="M13 34 C17 34 20 34 24 33 C28 34 31 34 35 34" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="whitespace-nowrap leading-tight">
        <span className="block text-base font-bold sm:text-lg">{site.name}</span>
        <span className={`block font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${tone === "light" ? "text-cyan-light" : "text-accent-text"}`}>
          {site.city}
        </span>
      </span>
    </Link>
  );
}
