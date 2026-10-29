import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  id?: string;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-bold md:text-[2.6rem] md:leading-tight">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}
