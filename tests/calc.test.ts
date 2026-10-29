import { describe, expect, it } from "vitest";
import { lumpsumResult, lumpsumValue, sipResult, sipValue } from "@/lib/calc";
import { inr, inrShort } from "@/lib/format";

describe("SIP", () => {
  it("matches the annuity-due formula", () => {
    // ₹10,000/month, 12%, 10 years → ₹23,23,391
    expect(Math.round(sipValue(10000, 12, 10))).toBe(2323391);
  });
  it("handles 0% and zero inputs", () => {
    expect(sipValue(5000, 0, 10)).toBe(600000);
    expect(sipValue(0, 12, 10)).toBe(0);
    expect(sipValue(5000, 12, 0)).toBe(0);
  });
  it("splits invested and returns", () => {
    const r = sipResult(10000, 12, 10);
    expect(r.invested).toBe(1200000);
    expect(r.returns).toBeCloseTo(r.total - r.invested, 6);
    expect(r.series).toHaveLength(11);
  });
});

describe("Lumpsum", () => {
  it("compounds annually", () => {
    expect(Math.round(lumpsumValue(100000, 12, 10))).toBe(310585);
  });
  it("returns principal at year 0", () => {
    expect(lumpsumResult(100000, 12, 0).total).toBe(100000);
  });
});

describe("format", () => {
  it("uses Indian grouping and short units", () => {
    expect(inr(250000)).toBe("₹2,50,000");
    expect(inrShort(25000000)).toBe("₹2.50 Cr");
    expect(inrShort(6000000)).toBe("₹60.0 L");
  });
});
