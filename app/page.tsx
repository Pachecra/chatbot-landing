import Hero from "@/components/hero/Hero";
import ProblemReveal from "@/components/problem-reveal/ProblemReveal";
import Features from "@/components/features/Features";
import Mechanism from "@/components/mechanism/Mechanism";
import Offer from "@/components/offer/Offer";
import FAQ from "@/components/faq/FAQ";
import CTABar from "@/components/cta/CTABar";
import DemoSection from "@/components/demo/DemoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemReveal />
      <DemoSection />
      <Features />
      <Mechanism />
      <Offer />
      <FAQ />
      <CTABar />
    </>
  );
}
