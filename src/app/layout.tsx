import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ProGen",
    template: "%s | ProGen",
  },
  description:
    "ProGen - Orijinal supplement ve fitness ürünleri için güvenilir doğrulama sistemi.",
  metadataBase: new URL("https://www.progen.com"),
  keywords: [
    "ProGen",
    "Supplement",
    "Fitness",
    "Protein",
    "Creatine",
    "Vitamin",
    "Orijinallik",
    "Doğrulama",
    "Güvenlik Kodu",
  ],
  authors: [{ name: "ProGen", url: "https://www.progen.com" }],
  alternates: {
    canonical: "/",
    languages: { "tr-TR": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "ProGen",
    description:
      "Supplement ve fitness ürünleri orijinallik doğrulama sistemi",
    url: "https://www.progen.com",
    siteName: "ProGen",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProGen",
    description: "Supplement ve fitness ürünleri orijinallik garantisi",
    creator: "@progen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative min-h-dvh bg-grid overflow-hidden ">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,88,31,0.25),transparent_60%)] blur-3xl" />
            <div className="absolute bottom-[-140px] right-[-140px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,122,63,0.22),transparent_60%)] blur-3xl" />
          </div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
