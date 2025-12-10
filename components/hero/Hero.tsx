"use client";

import { motion } from "framer-motion";

export default function ProblemReveal() {
  return (
    <section className="py-24 text-white bg-[#05070d]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Viele Unternehmen verlieren täglich Kunden — ohne es zu merken.
        </motion.h2>

        <p className="mt-6 text-white/60 max-w-3xl mx-auto">
          Anrufe werden verpasst. Nachrichten bleiben unbeantwortet.
          Termine müssen manuell eingetragen werden. Immer die gleichen Fragen.
        </p>

        <p className="mt-6 text-white/80 text-xl font-semibold">
          Ihr Chatbot übernimmt das für Sie — sofort und rund um die Uhr.
        </p>
      </div>
    </section>
  );
}
