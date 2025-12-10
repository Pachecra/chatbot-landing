import Hero from "@/components/Hero";
import ProblemReveal from "@/components/ProblemReveal";
import Features from "@/components/Features";
import Mechanism from "@/components/Mechanism";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
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
