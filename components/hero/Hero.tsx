"use client";

import { motion } from "framer-motion";
import { sendEmail } from "@/utils/sendEmail";

export default function Hero() {
  const handleEmailClick = () => {
    sendEmail(
      "Anfrage KI-Chatbot",
      `Hallo,

wir interessieren uns für einen individuellen KI-Chatbot.
Bitte melden Sie sich kurz bei uns zurück.

Beste Grüße`
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#05070d] pt-28 pb-32">
      {/* Glow-BG */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-80px] h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center">
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
          className="mt-6 text-white/70 text-lg max-w-2xl mx-auto"
        >
          Wir erstellen Ihnen einen professionellen KI-Chatbot, der Anfragen beantwortet,
          Termine vereinbart und neue Kunden bringt – automatisch, rund um die Uhr.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleEmailClick}
            className="px-8 py-4 rounded-xl text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/40 transition"
          >
            Kontakt per E-Mail aufnehmen
          </button>

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
