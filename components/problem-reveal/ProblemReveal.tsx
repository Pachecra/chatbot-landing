export default function ProblemReveal() {
  return (
    <section className="py-24 bg-[#0b0e17] px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white">
        Die meisten Unternehmen verlieren täglich Kunden —
        <span className="text-blue-500"> ohne es zu merken.</span>
      </h2>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
        Durch lange Antwortzeiten, unqualifizierte Leads und fehlende
        Automatisierung entstehen stille Umsatzverluste. Unsere Diagnose zeigt,
        wo Ihnen aktuell Kunden entgehen.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto text-left">
        <div className="bg-[#121620] p-6 rounded-xl border border-gray-700">
          <h3 className="text-white text-xl font-semibold">❗ Langsame Reaktionszeiten</h3>
          <p className="text-gray-400 mt-3">
            Kunden erwarten sofortige Antworten. Jede Minute Verzögerung senkt die Conversion.
          </p>
        </div>

        <div className="bg-[#121620] p-6 rounded-xl border border-gray-700">
          <h3 className="text-white text-xl font-semibold">❗ Unqualifizierte Leads</h3>
          <p className="text-gray-400 mt-3">
            Ohne klare Fragen und Filter verschwenden Teams Zeit mit uninteressanten Anfragen.
          </p>
        </div>

        <div className="bg-[#121620] p-6 rounded-xl border border-gray-700">
          <h3 className="text-white text-xl font-semibold">❗ Wiederholte Supportfragen</h3>
          <p className="text-gray-400 mt-3">
            Ihr Team beantwortet dieselben Fragen täglich — das lässt sich komplett automatisieren.
          </p>
        </div>
      </div>

      <a
        href="#cta"
        className="mt-12 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
      >
        Jetzt herausfinden, wo Sie Umsatz verlieren
      </a>
    </section>
  );
}
