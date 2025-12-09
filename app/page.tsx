"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import CTABar from "@/components/cta/CTABar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="relative bg-[#05070d] min-h-screen overflow-hidden">
        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <Hero />

        {/* FEATURES */}
        <Features />

        {/* PRICING */}
        <Pricing />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* CTA */}
        <CTABar />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
