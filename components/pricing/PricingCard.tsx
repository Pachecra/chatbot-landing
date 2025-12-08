"use client";

import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted,
}: PricingCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-2xl p-8 border shadow-xl transition-all ${
        highlighted
          ? "border-blue-500 bg-blue-600/10 shadow-blue-500/20"
          : "border-white/10 bg-[#0a0f1c]"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="text-white/60 text-sm mt-2">{description}</p>

      <div className="text-4xl font-bold text-white mt-6">{price}</div>

      <ul className="mt-6 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="text-white/70 text-sm">
            • {f}
          </li>
        ))}
      </ul>

      <button className="mt-8 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition">
        Start Now
      </button>
    </motion.div>
  );
}
