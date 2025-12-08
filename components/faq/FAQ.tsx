"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqList = [
    {
      question: "Wie lange dauert die Einrichtung?",
      answer: "Die Integration dauert unter 60 Sekunden. Einfach das Script einbetten – fertig.",
    },
    {
      question: "Muss ich programmieren können?",
      answer: "Nein. Dein Chatbot funktioniert ohne technische Kenntnisse. Alles ist Plug & Play.",
    },
    {
      question: "Kann ich mehrere Chatbots erstellen?",
      answer: "Ja. Je nach Plan kannst du mehrere Bots für verschiedene Websites erzeugen.",
    },
    {
      question: "Wie funktioniert die Abrechnung?",
      answer: "Über Stripe. Deine Kunden bezahlen monatlich oder jährlich automatisch.",
    },
  ];

  return (
    <section id="faq" className="py-32 bg-[#05070d] text-white relative z-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center">Häufige Fragen</h2>

        <p className="text-white/60 text-center mt-4 mb-12">
          Alles, was du über dein Chatbot-System wissen musst.
        </p>

        <div className="space-y-4">
          {faqList.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl bg-[#0b0f18] overflow-hidden">
              
              {/* FAQ Header */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="text-lg font-semibold">{item.question}</span>

                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white/60 text-2xl select-none"
                >
                  ▼
                </motion.span>
              </button>

              {/* FAQ Content */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-white/70"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
