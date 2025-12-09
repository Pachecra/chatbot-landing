"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ich bin dein AI-Bot 🤖 Wie kann ich dir helfen?" }
  ]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll immer nach unten
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Nachricht senden
  function sendMessage() {
    if (input.trim() === "") return;

    setMessages(prev => [...prev, { from: "user", text: input }]);
    setInput("");

    // Bot-Antwort (vorerst Dummy)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Danke für deine Nachricht! 🤖 Bald antworte ich echt." }
      ]);
    }, 600);
  }

  // ENTER-Taste abfangen
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-blue-700 transition z-50"
      >
        🤖
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-xl rounded-xl border border-gray-200 flex flex-col overflow-hidden z-50">
          
          {/* Header */}
          <div className="bg-black text-white p-4 font-semibold flex justify-between items-center">
            <span>AI Chatbot 🤖</span>
            <button onClick={() => setOpen(false)} className="text-lg">×</button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50 text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg shadow max-w-[80%] ${
                  msg.from === "bot"
                    ? "bg-white"
                    : "bg-blue-600 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              placeholder="Nachricht eingeben…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 rounded-lg"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
