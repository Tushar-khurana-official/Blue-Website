"use client";

import { m } from "motion/react";
import { useEffect, type ReactNode } from "react";

// The first mount is the initial page load, which should not fade (it would delay first paint).
let firstLoad = true;

/** Smooth page transition: a short fade and rise on every client-side navigation. */
export default function Template({ children }: { children: ReactNode }) {
  const animate = !firstLoad;
  useEffect(() => {
    firstLoad = false;
  }, []);
  if (!animate) return <>{children}</>;
  return (
    <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}>
      {children}
    </m.div>
  );
}
