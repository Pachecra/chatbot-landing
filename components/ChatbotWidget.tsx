"use client";

import { useEffect, useRef, useState, KeyboardEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

type Sender = "bot" | "user";

interface ChatMessage {
  id: number;
  sender: Sender;
  text: string;
}

const SUGGESTED_QUESTIONS: string[] = [
  "Was kostet euer Service?",
  "Welches Angebot passt zu meinem Unternehmen?",
  "Wie sieht eine Zusammenarbeit konkret aus?",
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    sender: "bot",
    text: "Hi! Ich bin dein AI-Bot 🤖 — womit kann ich dir helfen?",
  },
];

/* Intelligente Antwortlogik */
function getBotReply(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes("kosten") || msg.includes("preis")) {
    return "Unsere Chatbots starten ab 400–900 € einmalig und 49–149 € monatlich. Ich erstelle Ihnen gern ein individuelles Angebot basierend auf Ihrem Unternehmen.";
  }

  if (msg.includes("angebot") || msg.includes("unternehmen") || msg.includes("passt")) {
    return "Das passende Angebot hängt von Ihrem Anfragevolumen und Ihren Zielen ab. Viele Unternehmen starten mit einer kostenlosen Demo und einem Standard-Setup. Wenn Sie möchten, erstelle ich Ihnen eine Demo, die zu Ihrem Unternehmen passt.";
  }

  if (msg.includes("zusammenarbeit") || msg.includes("ablauf") || msg.includes("prozess")) {
    return "Der Ablauf ist einfach: 1) Kurzes Gespräch, 2) Ich baue Ihren Chatbot, 3) Integration auf Ihrer Website, 4) Optimierung und laufender Support. So gewinnen Sie schnell mehr qualifizierte Anfragen.";
  }

  if (msg.includes("demo") || msg.includes("kostenlose")) {
    return "Sehr gerne! Ich erstelle Ihnen innerhalb von 24 Stunden eine kostenlose Demo mit Ihrem Firmennamen und realistischen Beispielantworten. Schreiben Sie mir einfach kurz Ihre Branche und ggf. Ihre Website.";
  }

  if (msg.includes("schnell") || msg.includes("zeit") || msg.includes("dauer")) {
    return "Ein funktionierender Chatbot ist in der Regel innerhalb von 24–48 Stunden einsatzbereit. Anpassungen und Feinschliff übernehme ich für Sie.";
  }

  if (msg.includes("dsgvo") || msg.includes("daten")) {
    return "Ja. Alle Chatbots sind vollständig DSGVO-konform eingerichtet. Es werden nur die Daten verarbeitet, die für Ihre Prozesse nötig sind – alles andere wird nicht gespeichert.";
  }

  if (msg.includes("bild") || msg.includes("foto") || msg.includes("screenshot") || msg.includes("logo")) {
    return "Danke für den Hinweis auf das Bild! Ich kann Ihr Logo oder Bild sehr gerne in die Demo und den finalen Chatbot einbauen. Schreiben Sie mir kurz Ihren Firmennamen und Ihre Website, dann berücksichtige ich das direkt.";
  }

  if (msg.includes("kontakt") || msg.includes("email") || msg.includes("mail")) {
    return "Sie erreichen mich jederzeit unter: service.pachecoai@gmail.com — ich melde mich schnellstmöglich bei Ihnen zurück.";
  }

  return "Danke für Ihre Nachricht! Ich melde mich persönlich bei Ihnen und zeige Ihnen, wie ein Chatbot in Ihrem Unternehmen aussehen kann. Auf Wunsch erstelle ich Ihnen eine kostenlose Demo.";
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [idCounter, setIdCounter] = useState(2);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const sendMessage = (text?: string) => {
    const trimmed = (text ?? input).trim();
    if (!trimmed) return;

    const newUserMessage: ChatMessage = {
      id: idCounter,
      sender: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIdCounter((prev) => prev + 1);
    setInput("");

    const botReply = getBotReply(trimmed);

    const botMessage: ChatMessage = {
      id: idCounter + 1,
      sender: "bot",
      text: botReply,
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 600);

    setIdCounter((prev) => prev + 2);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestedClick = (question: string) => {
    sendMessage(question);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-[350px] md:w-[380px] rounded-2xl bg-[#0c0f17] border border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 backdrop-blur border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 flex items-center justify-center rounded-full bg-blue-600">
                  <FaRobot className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AI Chatbot</p>
                  <p className="text-[11px] text-white/60">
                    Beantwortet Fragen zu Angebot &amp; Ablauf
                  </p>
                </div>
              </div>

              <button
                onClick={toggleOpen}
                className="text-xs text-white/60 hover:text-white"
              >
                Schließen
              </button>
            </div>

            {/* Suggested questions */}
            <div className="px-4 pt-3 pb-2 border-b border-white/10 bg-[#05070d]">
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSuggestedClick(q)}
                    className="text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 max-h-80 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-snug ${
                      m.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-white rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-end gap-2 border-t border-white/10 bg-[#05070d] px-3 py-3"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Nachricht eingeben… (Enter zum Senden)"
                className="flex-1 resize-none rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={!input.trim()}
                className="h-9 w-9 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition disabled:opacity-30"
              >
                <FaPaperPlane className="text-white text-xs" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={toggleOpen}
        className="h-14 w-14 rounded-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 shadow-[0_18px_30px_rgba(0,0,0,0.7)] transition relative"
      >
        <FaRobot className="text-white text-2xl" />
        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-[#05070d]" />
      </button>
    </div>
  );
}
