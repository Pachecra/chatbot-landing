"use client";

import { motion } from "framer-motion";

export default function Mechanism() {
  const steps = [
    "Kurzes Beratungsgespräch — wir prüfen, ob ein Chatbot sinnvoll ist",
    "Ich erstelle Ihren Chatbot komplett individuell",
    "Ich richte alles auf Ihrer Website ein — Sie müssen nichts tun",
    "Sie erhalten mehr Anfragen & sparen täglich Zeit",
  ];

  return (
    <section className="py-24 bg-[#05070d] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          So läuft die Zusammenarbeit ab
        </motion.h2>

        <div className="mt-16 grid gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.1 }}
              className="p-6 bg-[#0a0f1c]/50 rounded-xl border border-white/10 text-left"
            >
              <p className="text-lg text-white/80">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
