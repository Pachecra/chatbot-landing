"use client";

import { motion } from "framer-motion";

export default function CTABar() {
  return (
    <section className="py-32 bg-[#05070d] text-white relative overflow-hidden">
      
      {/* Hintergrund Glow */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(0,122,255,0.4), transparent 60%)",
            "radial-gradient(circle at 80% 30%, rgba(155,0,255,0.4), transparent 60%)",
            "radial-gradient(circle at 50% 80%, rgba(0,122,255,0.4), transparent 60%)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Bereit, deinen Support zu automatisieren?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-white/70 mt-4 max-w-2xl mx-auto"
        >
          Starte jetzt kostenlos und füge deinen Chatbot in wenigen Sekunden zu deiner Website hinzu.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-lg shadow-xl transition"
        >
          Jetzt kostenlos starten
        </motion.button>

      </div>
    </section>
  );
}
