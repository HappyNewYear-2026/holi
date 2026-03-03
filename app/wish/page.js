"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const colors = [
  "#32c5ff",
  "#ff4d6d",
  "#f9d423",
  "#42e695",
  "#7f5cff",
  "#ff8a00",
  "#00d2b2",
  "#f857a6",
];

const guns = [
  { side: "left", top: "14%", rotate: -14, hue: 0 },
  { side: "left", top: "44%", rotate: -4, hue: 25 },
  { side: "left", top: "74%", rotate: 8, hue: 45 },
  { side: "right", top: "18%", rotate: 194, hue: 80 },
  { side: "right", top: "50%", rotate: 182, hue: 120 },
  { side: "right", top: "78%", rotate: 168, hue: 160 },
];

function createOffset() {
  const x = Math.round((Math.random() * 2 - 1) * 48);
  const y = Math.round((Math.random() * 2 - 1) * 36);
  if (Math.abs(x) < 20 && Math.abs(y) < 16) {
    return createOffset();
  }
  return { x, y };
}

export default function WishPage() {
  const jets = useMemo(() => {
    return Array.from({ length: 68 }, (_, id) => {
      const offset = createOffset();
      return {
        id,
        x: offset.x,
        y: offset.y,
        size: 10 + Math.random() * 22,
        delay: Math.random() * 9.2,
        duration: 0.8 + Math.random() * 1.4,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });
  }, []);

  const balloons = useMemo(() => {
    return Array.from({ length: 24 }, (_, id) => {
      const offset = createOffset();
      return {
        id,
        x: offset.x,
        y: offset.y,
        size: 30 + Math.random() * 48,
        delay: Math.random() * 9,
        duration: 1.2 + Math.random() * 1.6,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });
  }, []);

  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNext(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="action-page">
      <div className="action-title">
        <h2>Color Attack</h2>
        <p>Water guns and balloons are splashing toward you from all directions.</p>
      </div>

      <div className="guns-layer">
        {guns.map((gun, idx) => (
          <div
            key={idx}
            className={`water-gun ${gun.side}`}
            style={{
              top: gun.top,
              transform: `translateY(-50%) rotate(${gun.rotate}deg)`,
              filter: `hue-rotate(${gun.hue}deg)`,
            }}
          >
            <span className="gun-body" />
            <span className="gun-nozzle" />
            <span className="gun-handle" />
            <span className="gun-tank" />
          </div>
        ))}
      </div>

      <div className="projectile-layer" aria-hidden="true">
        {jets.map((jet) => (
          <span
            key={`jet-${jet.id}`}
            className="splash-dot"
            style={{
              width: `${jet.size}px`,
              height: `${jet.size}px`,
              background: jet.color,
              animationDelay: `${jet.delay}s`,
              animationDuration: `${jet.duration}s`,
              "--sx": `${jet.x}vw`,
              "--sy": `${jet.y}vh`,
            }}
          />
        ))}

        {balloons.map((balloon) => (
          <span
            key={`balloon-${balloon.id}`}
            className="strike-balloon"
            style={{
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.18}px`,
              background: balloon.color,
              animationDelay: `${balloon.delay}s`,
              animationDuration: `${balloon.duration}s`,
              "--bx": `${balloon.x}vw`,
              "--by": `${balloon.y}vh`,
            }}
          />
        ))}
      </div>

      <div className={`next-wrap action-next ${showNext ? "show" : ""}`}>
        <Link href="/final" className="next-btn">
          Next
        </Link>
      </div>
    </main>
  );
}
