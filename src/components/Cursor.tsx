"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TEAL = "#00C9A7";
const GREEN = "#1B8F6E";

export default function Cursor() {
  const [pos, setPos]       = useState({ x: -100, y: -100 });
  const [hov, setHov]       = useState(false);
  const [clicking, setClick] = useState(false);

  useEffect(() => {
    // Hide the default OS cursor globally
    document.body.style.cursor = "none";

    const onMove  = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver  = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("button, a, input, select, textarea, [data-hover]")) setHov(true);
    };
    const onOut   = () => setHov(false);
    const onDown  = () => setClick(true);
    const onUp    = () => setClick(false);

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseover",  onOver);
    window.addEventListener("mouseout",   onOut);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseover",  onOver);
      window.removeEventListener("mouseout",   onOut);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
    };
  }, []);

  /* ── shared spring config ── */
  const spring = { type: "spring" as const, stiffness: 600, damping: 36 };
  const lagSpr = { type: "spring" as const, stiffness: 180, damping: 22 };

  return (
    <>
      {/* ── 1. Sharp pointer tip ── */}
      <motion.div
        animate={{
          x: pos.x,
          y: pos.y,
          scale: clicking ? 0.7 : 1,
        }}
        transition={spring}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: "none",
          /* offset so the tip of the triangle is the hotspot */
          transform: "translate(-2px, -2px)",
        }}
      >
        {/* SVG arrow pointer */}
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          style={{ display: "block", filter: "drop-shadow(0 2px 6px rgba(0,201,167,0.55))" }}
        >
          <defs>
            <linearGradient id="ptr-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00C9A7" />
              <stop offset="100%" stopColor="#1B8F6E" />
            </linearGradient>
          </defs>
          {/* Main arrow body */}
          <path
            d="M2 2 L2 20 L7.5 15.5 L11.5 23.5 L14 22.5 L10 14.5 L17.5 14.5 Z"
            fill="url(#ptr-g)"
            stroke="#fff"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* ── 2. Trailing ring (lagged) ── */}
      <motion.div
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          scale: hov ? 1.8 : clicking ? 0.85 : 1,
          opacity: hov ? 0.85 : 0.45,
        }}
        transition={lagSpr}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `1.5px solid ${TEAL}`,
          zIndex: 99998,
          pointerEvents: "none",
          background: hov ? "rgba(0,201,167,0.08)" : "transparent",
        }}
      />

      {/* ── 3. Dot that fills on hover ── */}
      <motion.div
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: hov ? 3 : clicking ? 1.5 : 1,
          opacity: hov ? 0.25 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${TEAL}, ${GREEN})`,
          zIndex: 99997,
          pointerEvents: "none",
        }}
      />
    </>
  );
}