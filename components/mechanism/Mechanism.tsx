"use client";

import { motion } from "framer-motion";

export default function Mechanism() {
  return (
    <section className="py-24 bg-[#0b0e17] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto"
      >
        Warum unser KI-System in jeder Branche funktioniert
      </motion.h2>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
        Unsere Chatbots basieren auf einem klaren, bewährten Mechanismus,
        der sich unabhängig von Ihrer Branche oder Unternehmensgröße
        sofort auf Ihre Prozesse übertragen lässt.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-16">
        <div className="bg-[#121620] p-8 rounded-xl border border-white/10">
          <h3 className="text-white text-xl font-semibold">01 — Analyse</h3>
          <p className="text-gray-400 mt-3">
            Wir identifizieren die wichtigsten Engpässe in Ihrem Sales-, Support-
            oder Lead-Prozess.
          </p>
        </div>

        <div className="bg-[#121620] p-8 rounded-xl border border-white/10">
          <h3 className="text-white text-xl font-semibold">02 — Entwicklung</h3>
          <p className="text-gray-400 mt-3">
            Wir entwickeln einen maßgeschneiderten KI-Chatbot, der genau
            auf Ihre Abläufe abgestimmt ist.
          </p>
        </div>

        <div className="bg-[#121620] p-8 rounded-xl border border-white/10">
          <h3 className="text-white text-xl font-semibold">03 — Automatisierung</h3>
          <p className="text-gray-400 mt-3">
            Ihr Chatbot übernimmt wiederkehrende Aufgaben vollständig —
            schneller, günstiger und zuverlässiger als manuelle Arbeit.
          </p>
        </div>
      </div>
    </section>
  );
}
