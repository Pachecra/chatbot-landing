"use client";

import { sendEmail } from "@/utils/sendEmail";

export default function CTABar() {
  const handleContact = () =>
    sendEmail(
      "Beratungsgespräch zum KI-Chatbot",
      `Hallo,

wir möchten ein Beratungsgespräch zum Thema KI-Chatbot vereinbaren.

Mögliche Termine:
- 
- 

Vielen Dank!`
    );

  return (
    <section className="py-20 bg-[#05070d] border-t border-white/10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Lassen Sie uns gemeinsam starten.
      </h2>
      <p className="mt-4 text-white/70 max-w-xl mx-auto">
        Schreiben Sie uns eine kurze Nachricht – wir melden uns persönlich zurück
        und zeigen Ihnen, wie ein Chatbot Ihrem Unternehmen helfen kann.
      </p>

      <button
        onClick={handleContact}
        className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold text-white shadow-lg shadow-blue-600/40 transition"
      >
        Kontakt per E-Mail aufnehmen
      </button>
    </section>
  );
}
