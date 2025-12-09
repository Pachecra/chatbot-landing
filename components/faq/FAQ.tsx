"use client";

import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "Wie läuft die Zusammenarbeit ab?",
      a: "Wir analysieren Ihre Prozesse, erstellen ein individuelles Chatbot-Konzept, entwickeln, integrieren und optimieren Ihr System — alles Done-For-You.",
    },
    {
      q: "Für welche Unternehmen eignet sich ein KI-Chatbot?",
      a: "Für jede Branche, die Kundenanfragen erhält, Leads generiert oder interne Abläufe automatisieren möchte — egal ob Dienstleistung, Coaching, lokales Business oder E-Commerce.",
    },
    {
      q: "Wie schnell sehen wir Ergebnisse?",
      a: "In der Regel innerhalb weniger Tage. Viele Prozesse können sofort automatisiert werden, wodurch Sie schneller Anfragen beantworten und mehr Leads erhalten.",
    },
    {
      q: "Wie viel Zeit muss ich investieren?",
      a: "Sehr wenig. Wir übernehmen alles für Sie. Sie geben Input zu Ihren Prozessen — den Rest erledigen wir.",
    },
    {
      q: "Ist der Chatbot DSGVO-konform?",
      a: "Ja. Alle Daten werden sicher übertragen. Wir richten Ihren Chatbot vollständig DSGVO-konform ein.",
    },
  ];

  return (
    <section className="py-24 bg-[#05070d] text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">Häufige Fragen</h2>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0b0e17] p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold">{faq.q}</h3>
              <p className="text-gray-400 mt-3">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
