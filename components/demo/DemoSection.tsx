"use client";

import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";
import { sendEmail } from "@/utils/sendEmail";

export default function DemoSection() {
  const handleDemoClick = () => {
    sendEmail(
      "Kostenlose Chatbot-Demo",
      `Hallo,

wir möchten eine kostenlose Chatbot-Demo anfordern.

Firmenname:
Website:
Branche:

Vielen Dank!`
    );
  };

  return (
    <section id="demo" className="py-24 bg-[#05070d] text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold"
      >
        Kostenlose Chatbot-Demo
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mt-4 text-white/70 max-w-2xl mx-auto"
      >
        Wir erstellen Ihnen eine Demo mit Ihrem Firmennamen und drei realistischen
        Beispiel-Antworten – unverbindlich & kostenlos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-10"
      >
        <button
          onClick={handleDemoClick}
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-600/40 transition"
        >
          <FaMagic /> Demo kostenlos anfragen
        </button>
      </motion.div>
    </section>
  );
}
