"use client";

import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaClock, FaCalendarCheck } from "react-icons/fa";

export default function Features() {
  const featureList = [
    {
      icon: <FaChartLine size={30} />,
      title: "Mehr qualifizierte Leads",
      text: "Ihr Chatbot filtert automatisch Interessenten vor und sammelt die wichtigsten Informationen – ohne zusätzliche Mitarbeiter.",
    },
    {
      icon: <FaClock size={30} />,
      title: "Antwortzeiten von Sekunden",
      text: "Begeistern Sie Kunden durch sofortige Antworten. Schnellere Reaktion = höhere Abschlussquote.",
    },
    {
      icon: <FaCalendarCheck size={30} />,
      title: "Automatisierte Terminbuchung",
      text: "Ihr Chatbot vereinbart Termine, sammelt Daten und sorgt dafür, dass keine Anfrage mehr verloren geht.",
    },
    {
      icon: <FaRobot size={30} />,
      title: "24/7 Kunden- & Sales-Support",
      text: "Ihr Chatbot arbeitet rund um die Uhr, beantwortet Fragen, qualifiziert Leads und unterstützt Ihr Team aktiv.",
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
          Die Ergebnisse, die Ihr Business wirklich voranbringen
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-white/60 mt-4 max-w-2xl mx-auto"
        >
          Keine technischen Features – echte geschäftliche Resultate,
          die sich messbar auf Umsatz, Zeit und Wachstum auswirken.
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
