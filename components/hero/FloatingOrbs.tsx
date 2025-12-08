"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blue-700/20 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "20%", left: "10%" }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"
        animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "15%" }}
      />
    </div>
  );
}
