"use client";

export default function CTABar() {
  return (
    <section
      id="cta"
      className="py-20 bg-[#05070d] border-t border-white/10 text-center"
    >
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Lassen Sie uns gemeinsam starten.
        </h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Schreiben Sie mir eine kurze Nachricht – ich melde mich schnell persönlich
          zurück und zeige Ihnen, wie ein Chatbot Ihrem Unternehmen helfen kann.
        </p>

        <a
          href={
            "mailto:service.pachecoai@gmail.com" +
            "?subject=Beratungsgespräch%20zum%20KI-Chatbot" +
            "&body=Hallo%20Raul,%0D%0A%0D%0Aich%20möchte%20ein%20kurzes%20Beratungsgespräch%20zum%20Thema%20KI-Chatbot%20vereinbaren.%0D%0A" +
            "Vorschläge%20für%20Termine:%20_________________%0D%0A%0D%0AVielen%20Dank!"
          }
          className="mt-10 inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold text-white shadow-lg shadow-blue-600/40 transition"
        >
          Kontakt per E-Mail aufnehmen
        </a>
      </div>
    </section>
  );
}
