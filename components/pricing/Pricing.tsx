"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import PricingSwitch from "./PricingSwitch";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  // Preispläne (Monatlich)
  const monthly = [
    {
      title: "Starter",
      price: "€19 / Monat",
      description: "Perfekt für kleine Websites.",
      features: ["300 Antworten pro Monat", "Standard Chatbot", "Email Support"],
    },
    {
      title: "Pro",
      price: "€49 / Monat",
      description: "Ideal für wachsende Businesses.",
      features: ["Unbegrenzte Antworten", "Premium Chatbot", "Priorisierter Support"],
    },
  ];

  return (
    <section className="relative py-20 text-white">
      {/* Umschalter Monthly / Yearly */}
      <PricingSwitch isYearly={isYearly} setIsYearly={setIsYearly} />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {monthly.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <PricingCard {...plan} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
