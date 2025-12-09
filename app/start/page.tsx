"use client";

import { useState } from "react";

export default function StartPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/new-user", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        website: formData.get("website"),
        message: formData.get("message"),
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
    } else {
      alert("Fehler beim Absenden.");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      {!success ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-xl space-y-4"
        >
          <h1 className="text-3xl font-bold mb-4">Starte jetzt kostenlos</h1>

          <input
            name="name"
            required
            placeholder="Dein Name"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="E-Mail"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <input
            name="website"
            placeholder="Deine Website (optional)"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <textarea
            name="message"
            placeholder="Wie soll dein Chatbot helfen?"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-bold"
          >
            {loading ? "Wird gesendet..." : "Absenden"}
          </button>
        </form>
      ) : (
        <h2 className="text-2xl text-center">
          🎉 Vielen Dank!  
          <br />
          Wir melden uns in Kürze bei dir.
        </h2>
      )}
    </div>
  );
}
