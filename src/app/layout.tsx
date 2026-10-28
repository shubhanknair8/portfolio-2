import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Syne({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Shubhank Nair — UI/UX & Product Designer", template: "%s · Shubhank Nair" },
  description:
    "UI/UX and Product Designer across AI, BFSI, fashion-tech, insurance, mental health and sports-tech. Based in Delhi, India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal start states only when JS runs, so content never hides without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body id="top">
        <div className="progress" aria-hidden />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
