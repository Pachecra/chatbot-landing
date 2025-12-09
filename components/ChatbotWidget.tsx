"use client";
import { useState } from "react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#2563EB",  // blau
          color: "white",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          zIndex: 9999,
        }}
      >
        🤖
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",  // über dem Button
            right: "24px",
            width: "320px",
            height: "480px",
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#000",
              color: "white",
              padding: "16px",
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>AI Chatbot 🤖</span>
            <button
              onClick={() => setOpen(false)}
              style={{ fontSize: "18px", color: "white" }}
            >
              ×
            </button>
          </div>

          {/* Chat Body */}
          <div
            style={{
              flex: 1,
              padding: "12px",
              overflowY: "auto",
              backgroundColor: "#f3f4f6",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "8px 12px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                display: "inline-block",
                maxWidth: "90%",
              }}
            >
              Hi! Ich bin dein AI-Bot 🤖<br />
              Wie kann ich dir helfen?
            </div>
          </div>

          {/* Input Footer */}
          <div style={{ padding: "12px", borderTop: "1px solid #e5e7eb", display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="Nachricht eingeben…"
              style={{
                flex: 1,
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "8px",
                fontSize: "14px",
              }}
            />
            <button
              style={{
                backgroundColor: "#2563EB",
                color: "white",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
