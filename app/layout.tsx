import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Brushstroke Artspace | Interior Design & Turnkey Projects",
    template: "%s | Brushstroke Artspace",
  },
  description:
    "Brushstroke Artspace creates refined residential and commercial interiors with turnkey project delivery, architectural detailing, and bespoke styling.",
  keywords: [
    "interior design",
    "turnkey projects",
    "luxury interiors",
    "architecture",
    "residential design",
    "commercial interiors",
  ],
  openGraph: {
    title: "Brushstroke Artspace",
    description:
      "Premium interior design and turnkey projects with a distinctly warm, modern aesthetic.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-sand)] text-[var(--color-graphite)]">{children}</body>
    </html>
  );
}
