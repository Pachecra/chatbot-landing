"use client";

export default function CTABar() {
  return (
    <section id="cta" className="py-24 text-center bg-[#05070d] text-white">
      <h2 className="text-3xl md:text-4xl font-bold">
        Bereit für mehr Kunden & weniger Stress?
      </h2>

      <p className="mt-4 text-white/70 max-w-xl mx-auto">
        Lassen Sie uns in einem kurzen Gespräch herausfinden,
        wie ein Chatbot Ihrem Unternehmen helfen kann.
      </p>

      <a
        href="https://calendly.com/"
        target="_blank"
        className="mt-10 inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold"
      >
        Kostenloses Beratungsgespräch buchen
      </a>
    </section>
  );
}
