"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const colors = [
  "#ff255e",
  "#ff7f11",
  "#f7d002",
  "#0adf76",
  "#14b9ff",
  "#7f5cff",
  "#ff4dd8",
  "#00c2a8",
];

export default function HomePage() {
  const balloons = useMemo(() => {
    return Array.from({ length: 48 }, (_, id) => {
      const size = 34 + Math.random() * 56;
      return {
        id,
        left: Math.random() * 100,
        delay: Math.random() * 2.6,
        duration: 3.2 + Math.random() * 3,
        drift: -80 + Math.random() * 160,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });
  }, []);

  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNext(true), 4300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="holi-stage">
      <div className="holi-title">
        <h1>Happy Holi</h1>
        <p>Colors are flying everywhere. A surprise is waiting for you.</p>
      </div>

      {balloons.map((b) => (
        <span
          key={b.id}
          className="balloon"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size * 1.26}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            background: b.color,
            "--drift": `${b.drift}px`,
          }}
        />
      ))}

      <div className={`next-wrap ${showNext ? "show" : ""}`}>
        <Link href="/wish" className="next-btn">
          Next
        </Link>
      </div>
    </main>
  );
}