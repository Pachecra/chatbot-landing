"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "backdrop-blur-md bg-[#0a0f1c]/70 shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl tracking-tight">
          ChatSupport AI
        </h1>

        <div className="flex gap-6 text-white/80">
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-white transition">
            FAQ
          </Link>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition shadow-md">
            Start Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
