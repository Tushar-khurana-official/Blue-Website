import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari, Plus_Jakarta_Sans, Sora } from "next/font/google";
import { site } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { JsonLd } from "@/components/ui/JsonLd";
import { orgSchema } from "@/lib/seo";
import { bootScript } from "@/lib/lang";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
/** Hindi text only; not preloaded, so English visitors never download it. */
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-deva", weight: ["400", "600", "700"], display: "swap", preload: false });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700", "800"], display: "optional" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#F4F8FF",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${sora.variable} ${deva.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <JsonLd data={orgSchema} />
      </head>
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-royal focus:px-5 focus:py-3 focus:text-white">
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <WhatsAppButton />
        <MobileContactBar />
      </body>
    </html>
  );
}
