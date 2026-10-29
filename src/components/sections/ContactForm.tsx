"use client";

import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { site } from "@/config/site";
import { interests } from "@/lib/content";
import { validate, type Enquiry, type Errors } from "@/lib/validate";

const input =
  "mt-1.5 block w-full rounded-xl border bg-surface px-4 py-3 text-fg placeholder:text-muted/70 transition-colors focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15";

export function ContactForm() {
  const [form, setForm] = useState<Enquiry>({ name: "", phone: "", email: "", interest: "", message: "", consent: false, website: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const set = <K extends keyof Enquiry>(k: K, v: Enquiry[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok && data.ok) return setStatus("done");
      if (data.errors) setErrors(data.errors);
      setServerError(data.error ?? "Please check the form and try again.");
      setStatus("error");
    } catch {
      setServerError("Network error. Please call or WhatsApp us.");
      setStatus("error");
    }
  };

  const err = (k: keyof Enquiry) =>
    errors[k] ? (
      <p id={`f-${k}-err`} className="mt-1.5 text-sm text-danger" role="alert">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Enquiry) => ({ "aria-invalid": !!errors[k] || undefined, "aria-describedby": errors[k] ? `f-${k}-err` : undefined });
  const border = (k: keyof Enquiry) => (errors[k] ? "border-danger" : "border-line");

  return (
    <section id="contact" aria-labelledby="contact-title" className="container-x py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky" />Contact</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-bold md:text-[2.6rem] md:leading-tight">
            Let&apos;s plan your <span className="text-gradient">next step</span>
          </h2>
          <p className="mt-4 text-lg text-muted">Tell us a little about your goals. We usually reply within one working day.</p>
          <ul className="mt-8 space-y-4">
            <li>
              <a href={`tel:${site.contact.phoneHref}`} className="glass card-hover flex items-center gap-4 rounded-2xl p-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-royal text-white"><Phone aria-hidden="true" className="h-5 w-5" /></span>
                <span><span className="block text-xs text-muted">Call us</span><span className="font-semibold">{site.contact.phone}</span></span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="glass card-hover flex items-center gap-4 rounded-2xl p-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-royal text-white"><Mail aria-hidden="true" className="h-5 w-5" /></span>
                <span><span className="block text-xs text-muted">Email</span><span className="font-semibold">{site.contact.email}</span></span>
              </a>
            </li>
            <li className="glass flex items-center gap-4 rounded-2xl p-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-royal text-white"><MapPin aria-hidden="true" className="h-5 w-5" /></span>
              <span><span className="block text-xs text-muted">Office</span><span className="font-semibold">{site.contact.address}</span></span>
            </li>
            <li className="glass flex items-center gap-4 rounded-2xl p-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-royal text-white"><Clock aria-hidden="true" className="h-5 w-5" /></span>
              <span><span className="block text-xs text-muted">Hours</span><span className="font-semibold">{site.contact.hours}</span></span>
            </li>
          </ul>
        </div>

        <div className="glass rounded-[28px] p-6 sm:p-10 lg:col-span-3">
          {status === "done" ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center" role="status">
              <CheckCircle2 aria-hidden="true" className="h-16 w-16 text-success" />
              <h3 className="mt-5 text-2xl font-bold">Thank you, {form.name.split(" ")[0]}!</h3>
              <p className="mt-2 max-w-sm text-muted">We have received your request and will call you within one working day.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5" aria-label="Request a free consultation">
              {status === "error" && serverError && (
                <p className="rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger" role="alert">{serverError}</p>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="text-sm font-semibold">Full name</label>
                  <input id="f-name" autoComplete="name" value={form.name} onChange={(e) => set("name", e.target.value)} className={`${input} ${border("name")}`} {...aria("name")} />
                  {err("name")}
                </div>
                <div>
                  <label htmlFor="f-phone" className="text-sm font-semibold">Mobile number</label>
                  <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={`${input} ${border("phone")}`} {...aria("phone")} />
                  {err("phone")}
                </div>
                <div>
                  <label htmlFor="f-email" className="text-sm font-semibold">Email</label>
                  <input id="f-email" type="email" autoComplete="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={`${input} ${border("email")}`} {...aria("email")} />
                  {err("email")}
                </div>
                <div>
                  <label htmlFor="f-interest" className="text-sm font-semibold">Interested in</label>
                  <select id="f-interest" value={form.interest} onChange={(e) => set("interest", e.target.value)} className={`${input} ${border("interest")}`} {...aria("interest")}>
                    <option value="">Choose one</option>
                    {interests.map((i) => <option key={i}>{i}</option>)}
                  </select>
                  {err("interest")}
                </div>
              </div>
              <div>
                <label htmlFor="f-message" className="text-sm font-semibold">Message <span className="font-normal text-muted">(optional)</span></label>
                <textarea id="f-message" rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} className={`${input} ${border("message")} resize-y`} {...aria("message")} />
                {err("message")}
              </div>
              {/* Honeypot: hidden from people and screen readers */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="f-website">Website</label>
                <input id="f-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set("website", e.target.value)} />
              </div>
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm">
                  <input id="f-consent" type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--royal)]" {...aria("consent")} />
                  <span>I agree to be contacted about my enquiry. My details will not be shared with third parties.</span>
                </label>
                {err("consent")}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-royal px-7 font-semibold text-white shadow-[0_10px_30px_-10px_rgb(30_94_255/0.7)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-royal-hover active:scale-[0.98] disabled:opacity-70 sm:w-auto"
              >
                <Send aria-hidden="true" className="h-4 w-4" />
                {status === "sending" ? "Sending…" : "Book a Free Consultation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
