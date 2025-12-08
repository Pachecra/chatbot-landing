"use client";

import { motion } from "framer-motion";

interface PricingSwitchProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

export default function PricingSwitch({ isYearly, setIsYearly }: PricingSwitchProps) {
  return (
    <div className="flex justify-center mb-10">
      <div className="relative bg-[#0d111a] border border-white/10 rounded-full px-3 py-2 flex items-center gap-4">
        
        {/* Switch Hintergrund */}
        <motion.div
          layout
          className="absolute top-0 left-0 h-full w-1/2 bg-blue-600 rounded-full"
          animate={{
            x: isYearly ? "100%" : "0%",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        />

        {/* Monthly Button */}
        <button
          onClick={() => setIsYearly(false)}
          className={`relative z-10 px-4 py-1 text-sm font-medium transition ${
            !isYearly ? "text-white" : "text-white/40"
          }`}
        >
          Monthly
        </button>

        {/* Yearly Button */}
        <button
          onClick={() => setIsYearly(true)}
          className={`relative z-10 px-4 py-1 text-sm font-medium transition ${
            isYearly ? "text-white" : "text-white/40"
          }`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}
