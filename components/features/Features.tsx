"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Beantwortet häufige Fragen automatisch",
  "Nimmt Termine direkt entgegen",
  "Sammelt Kundendaten für Sie",
  "Bringt mehr Anfragen ohne zusätzlichen Aufwand",
];

export default function Features() {
  return (
    <section className="py-24 text-white bg-[#05070d]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Was Ihr neuer Chatbot für Sie übernimmt
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.1 }}
              className="flex items-start gap-4 bg-[#0a0f1c]/50 p-6 rounded-xl border border-white/10"
            >
              <FaCheckCircle className="text-blue-500 mt-1" size={26} />
              <p className="text-lg text-white/80">{f}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
