import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import "./redesign.css";
import "./stack.css";
import "./casestudy.css";
import "./contact.css";
import "./theme.css";


export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  ),
  title: { default: "Shubhank Nair | UI/UX & Product Designer", template: "%s · Shubhank Nair" },
  description:
    "UI/UX and Product Designer across AI, BFSI, fashion-tech, insurance, mental health and sports-tech. Based in Delhi, India.",
  openGraph: {
    type: "website",
    siteName: "Shubhank Nair",
    title: "Shubhank Nair | UI/UX & Product Designer",
    description:
      "UI/UX and Product Designer across AI, BFSI, fashion-tech, insurance, mental health and sports-tech. Based in Delhi, India.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal start states only when JS runs, so content never hides without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* Theme before first paint: saved choice, otherwise dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark'}catch(e){document.documentElement.dataset.theme='dark'}",
          }}
        />
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
