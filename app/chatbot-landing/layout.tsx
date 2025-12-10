import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieNotice from "@/components/CookieNotice";
import ClientWrapper from "@/components/ClientWrapper"; // <-- Wichtig

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "ChatSupport AI – Automatisierter KI-Kundensupport",
  description: "ChatSupport AI hilft Unternehmen dabei, Supportanfragen automatisch zu beantworten.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <Navbar />

        <main>{children}</main>

        <Footer />

        <CookieNotice />

        {/* Chatbot wird über ClientWrapper geladen */}
        <ClientWrapper />

      </body>
    </html>
  );
}
