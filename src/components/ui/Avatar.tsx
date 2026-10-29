import Image from "next/image";

/** Founder photo from site.ts, or initials until a photo is added. */
export function Avatar({ name, photo, size }: { name: string; photo: string; size: number }) {
  if (photo) return <Image src={photo} alt={name} width={size} height={size} className="shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />;
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal to-sky font-display font-bold text-white"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </span>
  );
}
