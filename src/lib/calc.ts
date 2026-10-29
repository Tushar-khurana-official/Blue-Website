/** Calculator maths. Illustrations only: returns are assumed, not guaranteed. */

/** SIP future value, invested at the start of each month: FV = P × [((1+i)^n − 1) / i] × (1+i). */
export function sipValue(monthly: number, annualRatePct: number, years: number): number {
  const i = annualRatePct / 100 / 12;
  const n = Math.round(years * 12);
  if (n <= 0 || monthly <= 0) return 0;
  if (i === 0) return monthly * n;
  return monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
}

/** Lumpsum future value, compounded annually: FV = P × (1 + r)^t. */
export function lumpsumValue(amount: number, annualRatePct: number, years: number): number {
  if (amount <= 0) return 0;
  return amount * Math.pow(1 + annualRatePct / 100, Math.max(0, years));
}

export type Result = { invested: number; returns: number; total: number; series: { year: number; invested: number; value: number }[] };

export function sipResult(monthly: number, rate: number, years: number): Result {
  const total = sipValue(monthly, rate, years);
  const invested = monthly * 12 * years;
  const series = Array.from({ length: years + 1 }, (_, y) => ({ year: y, invested: monthly * 12 * y, value: sipValue(monthly, rate, y) }));
  return { invested, returns: total - invested, total, series };
}

export function lumpsumResult(amount: number, rate: number, years: number): Result {
  const total = lumpsumValue(amount, rate, years);
  const series = Array.from({ length: years + 1 }, (_, y) => ({ year: y, invested: amount, value: lumpsumValue(amount, rate, y) }));
  return { invested: amount, returns: total - amount, total, series };
}
