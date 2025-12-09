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
        Mehr Kunden. Weniger Arbeit. <br /> Mit Ihrem KI-Chatbot.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 text-white/70 text-lg max-w-2xl mx-auto"
      >
        Ich erstelle Ihnen einen individuellen KI-Chatbot, der Anfragen beantwortet,
        Termine vereinbart und neue Kunden bringt – automatisch, rund um die Uhr.
      </motion.p>

      {/* CTA BUTTONS */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

        {/* BUTTON 1 – Direkte E-Mail */}
        <a
          href="mailto:service.pachecoai@gmail.com?subject=Anfrage%20KI-Chatbot&body=Hallo%2C%20ich%20möchte%20mehr%20über%20den%20Chatbot%20erfahren."
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition-all"
        >
          Kontakt per E-Mail aufnehmen
        </a>

        {/* BUTTON 2 – CTA zum Scrollen */}
        <a
          href="#cta"
          className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-lg font-semibold transition-all"
        >
          Mehr über den Chatbot erfahren
        </a>

      </div>
    </section>
  );
}
