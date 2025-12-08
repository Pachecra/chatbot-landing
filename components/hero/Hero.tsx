"use client";

import { motion } from "framer-motion";
import ParallaxSpotlight from "./ParallaxSpotlight";
import FloatingOrbs from "./FloatingOrbs";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#05070d]"
    >
      {/* Hintergrund Effekte */}
      <ParallaxSpotlight />
      <FloatingOrbs />

      {/* Inhalt */}
      <div className="relative z-20 max-w-3xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          Dein smarter Chatbot für{" "}
          <span className="text-blue-500">Support & Sales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-white/70 mt-6"
        >
          Automatisiere Kundenanfragen, steigere Conversions und biete
          sofortige Antworten – 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10"
        >
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition text-lg font-semibold rounded-xl shadow-lg text-white">
            Kostenlos starten
          </button>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070d]" />
    </section>
  );
}
