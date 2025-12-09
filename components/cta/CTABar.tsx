"use client";

export default function CTABar() {
  return (
    <section id="cta" className="py-24 text-center bg-[#05070d] text-white">
      <h2 className="text-3xl md:text-4xl font-bold">
        Lassen Sie uns gemeinsam starten.
      </h2>

      <p className="mt-4 text-white/70 max-w-xl mx-auto">
        Schreiben Sie mir eine kurze Nachricht – ich melde mich schnellstmöglich
        zurück und zeige Ihnen, wie ein Chatbot Ihrem Unternehmen helfen kann.
      </p>

      <a
        href="mailto:service.pachecoai@gmail.com?subject=Anfrage%20KI-Chatbot&body=Hallo%2C%20ich%20möchte%20mehr%20über%20den%20Chatbot%20erfahren."
        className="mt-10 inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition-all"
      >
        Kontakt per E-Mail aufnehmen
      </a>
    </section>
  );
}
