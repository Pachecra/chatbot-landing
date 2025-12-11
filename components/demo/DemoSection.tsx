"use client";

import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";

export default function DemoSection() {
  return (
    <section
      id="demo"
      className="py-24 bg-[#05070d] text-white"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
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
          Ich erstelle Ihnen eine kleine Demo mit Ihrem Firmennamen und
          3 echten Beispiel-Antworten – unverbindlich &amp; kostenlos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10"
        >
          <a
            href={
              "mailto:service.pachecoai@gmail.com" +
              "?subject=Kostenlose%20Chatbot-Demo" +
              "&body=Hallo%20Raul,%0D%0A%0D%0Abitte%20erstellen%20Sie%20mir%20eine%20kostenlose%20Chatbot-Demo.%0D%0A" +
              "Firmenname:%20_________________%0D%0AWebsite:%20_________________%0D%0ABranche:%20_________________%0D%0A%0D%0AVielen%20Dank!"
            }
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-600/40 transition"
          >
            <FaMagic />
            Demo kostenlos anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
