const group = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

/** ₹2,50,000 */
export const inr = (n: number) => `₹${group.format(Math.round(n))}`;

/** ₹2.50 Cr, ₹60.0 L, or the full amount below one lakh. */
export function inrShort(n: number) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
  return inr(n);
}
