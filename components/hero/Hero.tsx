"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 text-center text-white bg-[#05070d]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Ich erstelle Ihnen einen KI-Chatbot,<br />
        der Ihnen Zeit spart & neue Kunden bringt.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 text-white/70 text-lg max-w-2xl mx-auto"
      >
        Automatische Antworten, Terminbuchungen und Kundenanfragen —
        ohne Extra-Arbeit für Sie und rund um die Uhr.
      </motion.p>

      <motion.a
        href="#cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="inline-block mt-10 px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
      >
        Kostenloses Beratungsgespräch buchen
      </motion.a>
    </section>
  );
}
