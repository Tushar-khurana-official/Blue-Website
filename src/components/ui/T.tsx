import type { ReactNode } from "react";

/**
 * Bilingual text. Both languages are server-rendered; CSS shows one based on the `lang-hi` class on <html>
 * (set before paint by the boot script in layout.tsx), so there is no flash and no hydration cost.
 */
export function T({ en, hi }: { en: ReactNode; hi: ReactNode }) {
  return (
    <>
      <span data-l="en">{en}</span>
      <span data-l="hi" lang="hi">{hi}</span>
    </>
  );
}
