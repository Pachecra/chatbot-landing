"use client";

import { useState } from "react";

export default function CookieNotice() {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg text-sm flex items-center gap-4 z-50">
      <p>Diese Website verwendet keine Cookies außer technisch notwendigen Server-Logs.</p>

      <button
        onClick={() => setHidden(true)}
        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-xs"
      >
        OK
      </button>
    </div>
  );
}
