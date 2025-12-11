"use client";

import { motion } from "framer-motion";

export default function Offer() {
  return (
    <section className="py-24 bg-[#05070d] text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Mein Angebot für Ihr Unternehmen
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mt-4 text-white/70 max-w-2xl mx-auto"
        >
          Wir erstellen Ihnen einen individuellen Unternehmens-Chatbot — komplett fertig eingerichtet und perfekt auf Ihr Geschäft zugeschnitten.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left"
          >
            <h3 className="text-xl font-semibold">Einrichtung & Setup</h3>
            <p className="mt-2 text-white/70">
              Wir bauen Ihren Chatbot komplett fertig — inklusive Training, Struktur und Anpassung an Ihr Unternehmen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left"
          >
            <h3 className="text-xl font-semibold">Integration auf Ihrer Website</h3>
            <p className="mt-2 text-white/70">
              Der Chatbot wird nahtlos auf Ihrer Website eingebunden — ohne technischen Aufwand für Sie.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left"
          >
            <h3 className="text-xl font-semibold">Optimierung & Support</h3>
            <p className="mt-2 text-white/70">
              Wir verbessern den Chatbot laufend und sorgen für zuverlässige Leistung — rund um die Uhr.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
