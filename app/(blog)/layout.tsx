import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
// next-sanity imports entfernt - nicht benötigt für statische Seite
import { Inter } from "next/font/google";
// Sanity imports entfernt - St. Pauli Bobrs verwendet statischen Content

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: '%s | St. Pauli Bobrs',
      default: 'St. Pauli Bobrs - Herz, Blut und Leidenschaft',
    },
    description: 'Die offizielle Homepage der St. Pauli Bobrs - HERZ, BLUT UND LEIDENSCHAFT für den FC St. Pauli! Siamo Tutti Antifascisti.',
    keywords: 'St. Pauli, FC St. Pauli, Bobrs, Hamburg, Fußball, Fanclub, Antifaschismus',
    openGraph: {
      title: 'St. Pauli Bobrs',
      description: 'Die offizielle Homepage der St. Pauli Bobrs - HERZ, BLUT UND LEIDENSCHAFT für den FC St. Pauli!',
      url: 'https://stpaulibobrs.de',
      siteName: 'St. Pauli Bobrs',
      locale: 'de_DE',
      type: 'website',
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
        <SpeedInsights />
      <footer className="footer-torn-top py-8 px-6 relative z-50 mt-auto" style={{background: 'var(--st-pauli-dark-brown)'}}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left Side - Antifascist Message */}
            <div>
              <p className="text-white text-xs">
                Herz, Blut und Leidenschaft für den FC St. Pauli.
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-white text-sm mb-1">info@stpaulibobrs.de</p>
              <p className="text-white text-sm mb-1">Hamburg, Germany</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-white text-xs">
              © 2025 St. Pauli Bobrs • Siamo Tutti Antifascisti
            </p>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}
