"use client";

import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";

export default function DemoSection() {
  return (
    <section className="py-24 bg-[#05070d] text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold"
      >
        Kostenlose Chatbot-Vorschau
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-4 text-white/70 max-w-2xl mx-auto"
      >
        Ich erstelle Ihnen eine kleine Demo mit Ihrem Firmennamen und
        3 echten Beispiel-Antworten. So sehen Sie sofort, wie ein Chatbot
        für Ihr Unternehmen aussehen kann – unverbindlich & kostenlos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-10 flex justify-center"
      >
        <a
          href="mailto:service.pachecoai@gmail.com?subject=Kostenlose%20Chatbot-Demo&body=Bitte%20nennen%20Sie%20mir%20Firmenname,%20Branche%20und%203%20häufige%20Kundenfragen."
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
        >
          <FaMagic size={20} />
          Demo kostenlos anfragen
        </a>
      </motion.div>
    </section>
  );
}
