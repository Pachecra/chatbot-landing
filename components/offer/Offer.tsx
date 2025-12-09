"use client";

import { motion } from "framer-motion";

export default function Offer() {
  return (
    <section className="py-24 bg-[#05070d] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Mein Angebot für Ihr Unternehmen
        </motion.h2>

        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Ich erstelle Ihnen einen individuellen Unternehmens-Chatbot —
          komplett fertig eingerichtet und auf Ihr Geschäft zugeschnitten.
        </p>

        <div className="mt-10 bg-[#0a0f1c]/50 border border-white/10 p-8 rounded-xl">
          <ul className="text-left space-y-4 text-white/80">
            <li>✔ Erstellung Ihres Chatbots</li>
            <li>✔ Einrichtung auf Website oder WhatsApp</li>
            <li>✔ Anpassung an Ihr Geschäftsmodell</li>
            <li>✔ Texte & Kundenführung von mir geschrieben</li>
            <li>✔ Support & Optimierung</li>
          </ul>
        </div>

        <a
          href="#cta"
          className="inline-block mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold"
        >
          Kostenlose Beratung buchen
        </a>
      </div>
    </section>
  );
}
