"use client";
import { useState } from "react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-blue-700 transition"
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
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2 bg-gray-50">
            <div className="bg-white p-2 rounded-lg shadow w-fit">
              Hi! Ich bin dein AI-Bot 🤖  
              <br />Wie kann ich dir helfen?
            </div>
          </div>

          {/* Input Field */}
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              placeholder="Nachricht eingeben…"
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
            />
            <button className="bg-blue-600 text-white px-3 rounded-lg">➤</button>
          </div>
        </div>
      )}
    </>
  );
}
