import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "white";

const styles: Record<Variant, string> = {
  primary: "bg-royal text-white shadow-[0_10px_30px_-10px_rgb(30_94_255/0.7)] hover:bg-royal-hover",
  outline: "border border-line bg-surface/70 text-fg backdrop-blur hover:border-royal hover:text-link",
  ghost: "text-link hover:bg-royal/10",
  white: "bg-white text-navy shadow-lg hover:bg-sky-50",
};

/** Pill button with a small press micro-interaction. Renders a Link when given href. */
export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: { href?: string; variant?: Variant; size?: "md" | "lg"; className?: string; children: ReactNode } & Omit<ComponentProps<"button">, "className">) {
  const cls =
    `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,color,border-color,transform,box-shadow] duration-200 ` +
    `hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${size === "lg" ? "min-h-13 px-7 text-base" : "min-h-11 px-5 text-sm"} ${styles[variant]} ${className}`;
  if (href) {
    const external = /^(https?:|tel:|mailto:)/.test(href);
    return external ? (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
