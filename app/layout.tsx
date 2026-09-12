import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/content/site";
import { organizationJsonLd } from "@/lib/jsonld";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mofad-J Consult — Project Management Consulting in Ghana",
    template: "%s | Mofad-J Consult",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: site.name,
    url: site.url,
    title: "Mofad-J Consult — Project Management Consulting in Ghana",
    description: site.description,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mofad-J Consult — Project Management Consulting in Ghana",
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "project management consulting Ghana",
    "construction consultancy Accra",
    "quantity surveying Ghana",
    "procurement and logistics Ghana",
    "Microsoft Project training Accra",
    "Primavera P6 training Ghana",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0d6970",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgLd = organizationJsonLd();

  return (
    <html lang="en-GH" className={`${sans.variable} ${serif.variable}`}>
      <body id="top" className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Toaster />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
