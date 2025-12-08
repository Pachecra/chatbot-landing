"use client";

import { useEffect, useState } from "react";

export default function ParallaxSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(0,120,255,0.25), transparent 60%)`,
        transition: "background 0.1s ease-out",
      }}
    />
  );
}
