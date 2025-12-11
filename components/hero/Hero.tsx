"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] pt-28 pb-32">
      {/* dezenter Glow-Hintergrund */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-80px] h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
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
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-6 text-white/70 text-lg max-w-2xl"
        >
          Ich erstelle Ihnen einen individuellen KI-Chatbot, der Anfragen beantwortet,
          Termine vereinbart und neue Kunden bringt – automatisch, rund um die Uhr.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {/* Auto-Mail: Kontakt */}
          <a
            href={
              "mailto:service.pachecoai@gmail.com" +
              "?subject=Anfrage%20KI-Chatbot" +
              "&body=Hallo%20Raul,%0D%0A%0D%0Aich%20interessiere%20mich%20für%20Ihren%20KI-Chatbot.%20" +
              "Bitte%20melden%20Sie%20sich%20kurz%20zurück.%0D%0A%0D%0ABeste%20Grüße,"
            }
            className="px-8 py-4 rounded-xl text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/40 transition"
          >
            Kontakt per E-Mail aufnehmen
          </a>

          <a
            href="#demo"
            className="px-8 py-4 rounded-xl text-lg font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-sm transition"
          >
            Mehr über den Chatbot erfahren
          </a>
        </motion.div>
      </div>
    </section>
  );
}
