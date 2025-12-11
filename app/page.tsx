"use client";

import Hero from "@/components/hero/Hero";
import ProblemReveal from "@/components/problem-reveal/ProblemReveal";
import DemoSection from "@/components/demo/DemoSection";
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
        {/* Hero: Mehr Kunden. Weniger Arbeit. Mit Ihrem KI-Chatbot. */}
        <Hero />

        {/* Problem-Section */}
        <ProblemReveal />

        {/* Demo-Angebot */}
        <DemoSection />

        {/* Features / Nutzen */}
        <Features />

        {/* So arbeiten wir zusammen */}
        <Mechanism />

        {/* Angebot / Pricing */}
        <Offer />

        {/* Häufige Fragen */}
        <FAQ />

        {/* Letzter CTA */}
        <CTABar />
      </main>

      <Footer />

      {/* Immer unten rechts eingeblendet */}
      <ChatbotWidget />
    </>
  );
}
