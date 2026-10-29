import Link from "next/link";
import { site } from "@/config/site";

/** Placeholder logo mark: an upward line in a blue tile. Replace with your logo. */
export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 font-display text-lg font-bold text-fg">
      <svg aria-hidden="true" viewBox="0 0 36 36" className="h-9 w-9 shrink-0">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1E5EFF" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="11" fill="url(#logo-g)" />
        <path d="M8 24l6-7 5 4 9-10" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="11" r="2.4" fill="#fff" />
      </svg>
      <span>{site.name}</span>
    </Link>
  );
}
