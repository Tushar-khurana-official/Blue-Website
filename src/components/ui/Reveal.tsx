"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, type ReactElement, type ReactNode } from "react";

/**
 * Scroll reveal: children fade and slide up once, staggered, when the block is 15% visible.
 * Plain CSS + one IntersectionObserver per block (cheaper to hydrate than a motion component per card).
 * Content is visible without JS and under reduced motion (see globals.css).
 */
export function Reveal({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "ul" | "ol" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("revealed");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as as "div";
  // Give each child its index for the stagger delay.
  let i = 0;
  const kids = Children.map(children, (c) =>
    isValidElement(c) ? cloneElement(c as ReactElement<{ index?: number }>, { index: i++ }) : c,
  );
  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={`reveal-group ${className ?? ""}`}>
      {kids}
    </Tag>
  );
}

/** One staggered child of <Reveal>. */
export function RevealItem({ children, className, as = "div", index = 0 }: { children: ReactNode; className?: string; as?: "div" | "li"; index?: number }) {
  const Tag = as as "div";
  return (
    <Tag className={`reveal-item ${className ?? ""}`} style={{ ["--i" as string]: index }}>
      {children}
    </Tag>
  );
}
