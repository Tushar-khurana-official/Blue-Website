import { interests } from "./content";

export type Enquiry = { name: string; phone: string; email: string; interest: string; message: string; consent: boolean; website?: string };
export type Errors = Partial<Record<keyof Enquiry, string>>;

/** Normalises an Indian mobile number (+91 / 0 / spaces allowed) to 10 digits, or returns null. */
export function indianMobile(v: string): string | null {
  let d = v.replace(/[\s\-()]/g, "");
  if (d.startsWith("+91")) d = d.slice(3);
  else if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  else if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return /^[6-9]\d{9}$/.test(d) ? d : null;
}

/** Shared by the form (instant feedback) and the API route (the real check). */
export function validate(e: Partial<Enquiry>): Errors {
  const errors: Errors = {};
  if (!e.name || e.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!e.phone || !indianMobile(e.phone)) errors.phone = "Enter a 10-digit Indian mobile number.";
  if (!e.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.email.trim())) errors.email = "Enter a valid email address.";
  if (!e.interest || !(interests as readonly string[]).includes(e.interest)) errors.interest = "Please choose what you are interested in.";
  if (e.message && e.message.length > 1500) errors.message = "Please keep the message under 1,500 characters.";
  if (e.consent !== true) errors.consent = "Please agree to be contacted.";
  return errors;
}
