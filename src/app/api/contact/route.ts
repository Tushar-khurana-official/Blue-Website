import { NextResponse } from "next/server";
import { indianMobile, validate, type Enquiry } from "@/lib/validate";

export const runtime = "nodejs";

// Simple per-IP rate limit (5 per 10 minutes). Use a shared store (e.g. Upstash Redis) on multi-instance hosting.
const hits = new Map<string, { n: number; reset: number }>();
const MAX = process.env.NODE_ENV === "production" ? 5 : 100;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || h.reset < now) hits.set(ip, { n: 1, reset: now + 10 * 60_000 });
  else if (++h.n > MAX) return NextResponse.json({ ok: false, error: "Too many requests. Please call or WhatsApp us." }, { status: 429 });

  let body: Partial<Enquiry>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  // Honeypot: bots fill the hidden "website" field. Pretend success, store nothing.
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validate(body);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const enquiry = {
    name: body.name!.trim(),
    phone: indianMobile(body.phone!),
    email: body.email!.trim().toLowerCase(),
    interest: body.interest,
    message: (body.message ?? "").trim(),
    receivedAt: new Date().toISOString(),
  };

  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (hook) {
    const res = await fetch(hook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(enquiry) }).catch(() => null);
    if (!res?.ok) return NextResponse.json({ ok: false, error: "Could not send right now. Please call or WhatsApp us." }, { status: 502 });
  } else {
    console.info(`[contact] ${enquiry.receivedAt} ${enquiry.interest} from ${enquiry.name} (••••${enquiry.phone?.slice(-4)})`);
  }
  return NextResponse.json({ ok: true });
}
