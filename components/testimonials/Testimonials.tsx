"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lisa M.",
      role: "E-Commerce Owner",
      text: "Der Chatbot hat meinen Support-Aufwand um 70% reduziert. Unglaublich effizient!",
    },
    {
      name: "Daniel K.",
      role: "Marketing Agentur",
      text: "Wir integrieren den Bot mittlerweile bei jedem Kundenprojekt. Conversion steigt sofort.",
    },
    {
      name: "Sarah T.",
      role: "Fitness Coach",
      text: "Endlich muss ich nicht mehr jede Frage manuell beantworten. Spart mir täglich 1–2 Stunden.",
    },
    {
      name: "Marco L.",
      role: "Tech Startup",
      text: "Wir nutzen den Chatbot für Sales. Der ROI ist gigantisch.",
    },
  ];

  return (
    <section className="py-32 bg-[#05070d] text-white relative z-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Was Kunden sagen</h2>

        <p className="text-white/60 mt-4 mb-16 max-w-xl mx-auto">
          Echte Erfahrungen von Nutzern, die ihren Support automatisiert haben.
        </p>

        {/* Slider Container */}
        <motion.div
          className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          animate={{ x: [0, -400, 0] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] md:min-w-[380px] bg-[#0a0f1c] border border-white/10 p-8 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <p className="text-white/80 italic mb-6">"{t.text}"</p>
              <div className="text-left">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-white/40 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
