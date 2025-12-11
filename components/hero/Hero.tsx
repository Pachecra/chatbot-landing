"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-28 pb-32 text-center bg-[#05070d]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold leading-tight text-white"
      >
        Mehr Kunden. Weniger Arbeit. <br /> Mit Ihrem KI-Chatbot.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 text-white/70 text-lg max-w-2xl mx-auto"
      >
        Ich erstelle Ihnen einen individuellen KI-Chatbot, der Anfragen beantwortet,
        Termine vereinbart und neue Kunden bringt – automatisch, rund um die Uhr.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <a
          href="mailto:service.pachecoai@gmail.com?subject=Anfrage%20KI-Chatbot"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold text-white transition"
        >
          Kontakt per E-Mail aufnehmen
        </a>

        <a
          href="#demo"
          className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-lg font-semibold text-white transition"
        >
          Mehr über den Chatbot erfahren
        </a>
      </motion.div>
    </section>
  );
}
