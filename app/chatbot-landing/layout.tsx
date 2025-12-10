import "./globals.css";

export const metadata = {
  title: "Chatbot Landing",
  description: "Mehr Kunden. Weniger Arbeit. KI-Chatbot für lokale Unternehmen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
