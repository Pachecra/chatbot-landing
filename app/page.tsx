"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import ProblemReveal from "@/components/problem-reveal/ProblemReveal";
import Features from "@/components/features/Features";
import Mechanism from "@/components/mechanism/Mechanism";
import Offer from "@/components/offer/Offer";
import FAQ from "@/components/faq/FAQ";
import CTABar from "@/components/cta/CTABar";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  return (
    <>
      <main className="relative bg-[#05070d] min-h-screen overflow-hidden">
        
        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <Hero />

        {/* PROBLEM REVEAL */}
        <ProblemReveal />

        {/* HIGH-TICKET FEATURES (Ergebnisse statt SaaS-Features) */}
        <Features />

        {/* MECHANISM SECTION */}
        <Mechanism />

        {/* HIGH-TICKET OFFER SECTION */}
        <Offer />

        {/* FAQ */}
        <FAQ />

        {/* CTA - Beratung buchen */}
        <CTABar />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CHATBOT */}
      <ChatbotWidget />
    </>
  );
}
