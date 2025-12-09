"use client";

import { motion } from "framer-motion";

export default function Offer() {
  const items = [
    "Individuelle Analyse Ihrer Prozesse & Engpässe",
    "Konzeption eines maßgeschneiderten KI-Chatbots",
    "Komplette Entwicklung & technische Umsetzung",
    "Einbindung in Ihre Website oder Systeme",
    "Automatisierte Terminbuchung & Lead-Qualifizierung",
    "Optional: laufende Optimierung & Betreuung"
  ];

  return (
    <section className="py-24 bg-[#05070d] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto"
      >
        Was wir für Sie übernehmen
      </motion.h2>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
        Ein komplett Done-For-You Service, der spürbare Ergebnisse liefert.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16 text-left">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#0b0e17] p-6 rounded-xl border border-white/10 text-gray-300"
          >
            ✓ {item}
          </div>
        ))}
      </div>
    </section>
  );
}
