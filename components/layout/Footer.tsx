export default function Footer() {
  return (
    <footer className="py-10 bg-[#05070d] border-t border-white/10 text-center text-white/60 text-sm">
      <p>
        © {new Date().getFullYear()} Pacheco AI – Individuelle KI-Chatbots für
        Unternehmen
      </p>
      <p className="mt-2">Kontakt: service.pachecoai@gmail.com</p>
    </footer>
  );
}
