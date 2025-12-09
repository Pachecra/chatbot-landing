"use client";

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

        {/* HERO */}
        <Hero />

        {/* PROBLEM REVEAL */}
        <ProblemReveal />

        {/* FEATURES */}
        <Features />

        {/* MECHANISM */}
        <Mechanism />

        {/* OFFER */}
        <Offer />

        {/* FAQ */}
        <FAQ />

        {/* CTA */}
        <CTABar />

      </main>

      {/* FOOTER */}
      <Footer />

      {/* CHATBOT */}
      <ChatbotWidget />
    </>
  );
}
