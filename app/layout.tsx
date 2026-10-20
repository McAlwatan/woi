import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

export const metadata: Metadata = {
  title: { default: "WOI Agro Industrial Co. Limited | Tanzanian coffee, cashew, spices & more", template: "%s | WOI Agro" },
  description: "Tanzanian exporter of green coffee, cashew nuts, sesame, dried ginger, avocados and spices. Powering sustainable growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body><noscript><style>{".reveal,.rise{opacity:1!important;transform:none!important}.bar{transform:none!important}"}</style></noscript><Header />{children}<Footer /></body>
    </html>
  );
}
