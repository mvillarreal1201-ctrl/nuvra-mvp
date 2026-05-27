import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site';
import {Analytics} from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  
  other: { 
    "p:domain_verify": "d226a439dd0a8067600811f4c198f1d6",
  },
  
  title: {
    default: 'Nuvra — Curated Cat Living',
    template: '%s | Nuvra',
  },
  description: siteConfig.description,
  openGraph: {
    title: 'Nuvra — Curated Cat Living',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Nuvra',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuvra — Curated Cat Living',
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
