"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const BotAvatar = () => (
  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
    🤖
  </div>
);

// Typing with avatar
const TypingIndicator = () => (
  <div className="flex items-center gap-2 p-2">
    <BotAvatar />
    <div className="flex space-x-1 bg-blue-200/70 p-2 rounded-xl">
      <motion.span
        className="w-2 h-2 bg-blue-600 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
      <motion.span
        className="w-2 h-2 bg-blue-600 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
      />
      <motion.span
        className="w-2 h-2 bg-blue-600 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  </div>
);

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const chatRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: "landingUser",
          messages: [
            {
              role: "user",
              content: userMessage.text
            }
          ]
        })
      });

      const data = await res.json();

      const botReply =
        data?.messages?.[0]?.content || "Ich bin bereit dir zu helfen! 😊";

      const botMessage = { sender: "bot", text: botReply };

      setTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setTyping(false);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, -4, 0], transition: { duration: 3, repeat: Infinity }}}
        className="
          fixed bottom-6 right-6 p-4 rounded-full shadow-2xl
          bg-gradient-to-br from-blue-500 to-blue-600 
          text-white backdrop-blur-xl
          border border-white/20
        "
      >
        <MessageCircle size={26} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="
              fixed bottom-24 right-6 w-96 h-[600px]
              bg-white/80 backdrop-blur-2xl 
              rounded-3xl shadow-2xl border border-white/30
              flex flex-col
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-4 bg-white/40 backdrop-blur-xl rounded-t-3xl border-b border-white/20">
              <div className="flex items-center gap-3">
                <BotAvatar />
                <div>
                  <p className="font-semibold text-gray-900">ChatSupport AI</p>
                  <p className="text-xs text-green-600">● Online</p>
                </div>
              </div>

              <button onClick={() => setOpen(false)}>
                <X className="text-gray-700" />
              </button>
            </div>

            {/* MESSAGES */}
            <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-start gap-3 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && <BotAvatar />}

                  <div
                    className={`px-4 py-3 max-w-[70%] rounded-2xl shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gray-900 text-white ml-auto"
                        : "bg-blue-100 text-gray-900"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {typing && <TypingIndicator />}
            </div>

            {/* INPUT */}
            <div className="p-4 border-t border-white/20">
              <input
                type="text"
                placeholder="Schreib eine Nachricht…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="
                  w-full px-4 py-3 rounded-2xl
                  bg-white/90 backdrop-blur-xl
                  border border-gray-300 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
