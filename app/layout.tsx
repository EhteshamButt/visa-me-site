import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visa-Me — Plain-English Guides to U.S. Visas | visa-me.net",
  description:
    "Self-help guides, document checklists, and templates for U.S. tourist, student, and family visas. Updated for the 2026 $250 Visa Integrity Fee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        <style>{`
          body { font-family: var(--font-manrope, 'Manrope', system-ui, sans-serif); }
          .font-fraunces, h1, h2, h3, .brand, .product-name, .article-title, .article-body h2, .article-body h3, .post-title, .section-title, .page-title, .quiz-question, .quiz-result h3 {
            font-family: var(--font-fraunces, 'Fraunces', Georgia, serif);
          }
        `}</style>
      </head>
      <body>
        <LanguageProvider>
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
