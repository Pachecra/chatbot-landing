"use client";

import { motion } from "framer-motion";
import { FaRobot, FaBolt, FaComments, FaLock } from "react-icons/fa";

export default function Features() {
  const featureList = [
    {
      icon: <FaRobot size={30} />,
      title: "Automatisierte Antworten",
      text: "Beantworte Kundenanfragen sofort – 24/7, ohne Wartezeit.",
    },
    {
      icon: <FaBolt size={30} />,
      title: "Schnelle Integration",
      text: "Füge deinen Chatbot mit nur einem Script-Snippet zu jeder Website hinzu.",
    },
    {
      icon: <FaComments size={30} />,
      title: "Verkaufsstarker Chat",
      text: "Lenke Kunden gezielt zu Angeboten, Formularen oder Terminen.",
    },
    {
      icon: <FaLock size={30} />,
      title: "Sicher & DSGVO-konform",
      text: "Alle Daten werden verschlüsselt übertragen – maximale Sicherheit.",
    },
  ];

  return (
    <section
      id="features"
      className="py-32 bg-[#05070d] text-white relative z-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Leistungsstarke Features
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-white/60 mt-4 max-w-2xl mx-auto"
        >
          Alles, was du brauchst, um Kundenservice und Sales zu automatisieren.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {featureList.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#0a0f1c]/50 border border-white/5 rounded-xl p-8 shadow-xl hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="text-blue-400 mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
