import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pacheco AI – Individuelle KI-Chatbots für Unternehmen",
  description:
    "Wir erstellen individuelle KI-Chatbots für lokale Unternehmen – automatisch, zuverlässig und auf Ihr Business zugeschnitten.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      {/* BODY-KLASSE → Verhindert weißen Flash beim Laden */}
      <body className="bg-[#05070d] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
