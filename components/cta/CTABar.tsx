"use client";

import { motion } from "framer-motion";

export default function CTABar() {
  return (
    <section id="cta" className="py-24 bg-[#0b0e17] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto"
      >
        Bereit, Ihren individuellen KI-Chatbot entwickeln zu lassen?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-gray-300 mt-4 max-w-2xl mx-auto"
      >
        Beginnen Sie mit einem kostenlosen Beratungsgespräch.
        Gemeinsam analysieren wir Ihr Unternehmen, Ihre Prozesse
        und entwickeln ein Konzept, das sofort messbare Ergebnisse liefert.
      </motion.p>

      <a
        href="#"
        className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition"
      >
        Kostenloses Beratungsgespräch buchen
      </a>
    </section>
  );
}
