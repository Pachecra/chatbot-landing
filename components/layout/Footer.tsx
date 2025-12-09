"use client";

export default function Footer() {
  return (
    <footer className="text-center text-gray-300 py-10 bg-black/40">
      <p>© {new Date().getFullYear()} Dein Chatbot · Alle Rechte vorbehalten.</p>

      <div className="mt-4 flex items-center justify-center gap-8">
        <a
          href="/impressum"
          className="text-sm text-blue-400 hover:text-blue-200 transition"
        >
          Impressum
        </a>
        <a
          href="/datenschutz"
          className="text-sm text-blue-400 hover:text-blue-200 transition"
        >
          Datenschutz
        </a>
      </div>
    </footer>
  );
}
