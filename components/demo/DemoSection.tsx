"use client";

import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";

export default function DemoSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-blue-50/40">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-indigo-400/20 blur-[180px] rounded-full"></div>
      </div>

      {/* Floating Orb */}
      <motion.div
        initial={{ y: -10, opacity: 0.6 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 4 }}
        className="absolute top-10 right-10 w-32 h-32 bg-blue-300/40 blur-3xl rounded-full -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Kostenlose <span className="text-blue-600">Chatbot-Demo</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
          Erleben Sie, wie ein moderner KI-Chatbot für Ihr Unternehmen aussehen kann.  
          Mit echtem Firmennamen, realistischen Antworten und maßgeschneidertem Dialog-Flow.
          <br />
          <span className="font-semibold text-gray-900">
            100% kostenlos & unverbindlich.
          </span>
        </p>

        {/* Call to Action Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="mailto:service.pachecoai@gmail.com?subject=Demo%20anfragen"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
        >
          <FaMagic size={22} />
          Demo kostenlos anfragen
        </motion.a>
      </motion.div>

      {/* Spotlight Effect Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-100/60 to-transparent pointer-events-none"></div>
    </section>
  );
}
