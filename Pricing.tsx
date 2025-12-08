"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import PricingSwitch from "./PricingSwitch";
import { AnimatePresence, motion } from "framer-motion";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

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
      features: [
        "2.000 Antworten pro Monat",
        "Personalisierter Bot",
        "Priorisierter Support",
      ],
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "€149 / Monat",
      description: "Für große Teams & Agenturen.",
      features: [
        "Unbegrenzte Antworten",
        "Mehrere Bots",
        "Premium Support 24/7",
      ],
    },
  ];

  const yearly = [
    {
      title: "Starter",
      price: "€190 / Jahr",
      description: "2 Monate gratis.",
      features: monthly[0].features,
    },
    {
      title: "Pro",
      price: "€490 / Jahr",
      description: "4 Monate gratis.",
      features: monthly[1].features,
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "€1490 / Jahr",
      description: "Große Ersparnis.",
      features: monthly[2].features,
    },
  ];

  const plans = isYearly ? yearly : monthly;

  return (
    <section id="pricing" className="py-32 bg-[#05070d] text-white relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titel */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Flexible Pricing
        </h2>

        {/* Switch */}
        <PricingSwitch isYearly={isYearly} setIsYearly={setIsYearly} />

        {/* Pricing Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10"
        >
          <AnimatePresence mode="popLayout">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title + (isYearly ? "y" : "m")}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import PricingSwitch from "./PricingSwitch";
import { AnimatePresence, motion } from "framer-motion";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

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
      features: [
        "2.000 Antworten pro Monat",
        "Personalisierter Bot",
        "Priorisierter Support",
      ],
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "€149 / Monat",
      description: "Für große Teams & Agenturen.",
      features: [
        "Unbegrenzte Antworten",
        "Mehrere Bots",
        "Premium Support 24/7",
      ],
    },
  ];

  const yearly = [
    {
      title: "Starter",
      price: "€190 / Jahr",
      description: "2 Monate gratis.",
      features: monthly[0].features,
    },
    {
      title: "Pro",
      price: "€490 / Jahr",
      description: "4 Monate gratis.",
      features: monthly[1].features,
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "€1490 / Jahr",
      description: "Große Ersparnis.",
      features: monthly[2].features,
    },
  ];

  const plans = isYearly ? yearly : monthly;

  return (
    <section id="pricing" className="py-32 bg-[#05070d] text-white relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titel */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Flexible Pricing
        </h2>

        {/* Switch */}
        <PricingSwitch isYearly={isYearly} setIsYearly={setIsYearly} />

        {/* Pricing Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10"
        >
          <AnimatePresence mode="popLayout">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title + (isYearly ? "y" : "m")}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
