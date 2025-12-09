export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center pt-32 pb-24 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
        Individuelle KI-Chatbots, die Anfragen automatisieren,
        Leads qualifizieren und Umsatz steigern.
      </h1>

      <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-2xl">
        Wir entwickeln maßgeschneiderte KI-Chatbots für Unternehmen jeder Größe —
        damit Sie mehr Kunden gewinnen, schneller antworten und Prozesse
        automatisieren können. Komplett Done-For-You.
      </p>

      <a
        href="#cta"
        className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
      >
        Kostenloses Beratungsgespräch buchen
      </a>
    </section>
  );
}
