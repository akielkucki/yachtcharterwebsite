import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import {BRAND} from "@/constants";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: BRAND.name+" & Co. — Private Yacht Charters, Greece",
  description:
    "Bespoke luxury yacht charters across the Greek islands. Curated vessels, private itineraries, and world-class service for the world's most discerning travelers.",
  openGraph: {
    title: BRAND.name+" & Co. — Private Yacht Charters, Greece",
    description:
      "Charter the Aegean in unmatched luxury. Private yacht experiences across Greece, tailored for the world's most discerning travelers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pearl text-ink">
        {children}
      </body>
    </html>
  );
}
