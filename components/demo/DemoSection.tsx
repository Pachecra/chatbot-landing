"use client";

import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";

export default function DemoSection() {
  return (
    <section className="py-24 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Kostenlose Chatbot-Demo
        </h2>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Ich erstelle Ihnen eine kleine Demo mit Ihrem Firmennamen und drei
          echten Beispiel-Antworten. So sehen Sie sofort, wie ein Chatbot für
          Ihr Unternehmen aussehen kann – unverbindlich & kostenlos.
        </p>

        <a
          href="mailto:service.pachecoai@gmail.com?subject=Demo%20anfragen"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl text-lg font-semibold transition-all shadow-md hover:shadow-lg"
        >
          <FaMagic size={22} />
          Demo kostenlos anfragen
        </a>
      </motion.div>
    </section>
  );
}
