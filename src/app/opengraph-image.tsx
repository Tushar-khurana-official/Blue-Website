import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name}: ${site.tagline}`;

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg,#0A1F44,#1E5EFF 70%,#38BDF8)", color: "#fff" }}>
        <div style={{ fontSize: 40, fontWeight: 700 }}>{site.name}</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>{site.tagline}</div>
        <div style={{ fontSize: 26, opacity: 0.85 }}>SIP · Mutual Funds · Stock Market</div>
      </div>
    ),
    size,
  );
}
