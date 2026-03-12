

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos,      setPos]    = useState({ x: -200, y: -200 });
  const [lag,      setLag]    = useState({ x: -200, y: -200 });
  const [hov,      setHov]    = useState(false);
  const [clicking, setClick]  = useState(false);
  const [visible,  setVis]    = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";
    let rafId: number;

    const move = (e: MouseEvent) => {
      const nx = e.clientX, ny = e.clientY;
      setPos({ x: nx, y: ny });
      if (!visible) setVis(true);
      // smooth lag via rAF
      const animate = () => {
        setLag(prev => ({
          x: prev.x + (nx - prev.x) * 0.14,
          y: prev.y + (ny - prev.y) * 0.14,
        }));
      };
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    const over  = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("button,a,input,select,textarea,[data-hover]"))
        setHov(true);
    };
    const out   = () => setHov(false);
    const down  = () => setClick(true);
    const up    = () => setClick(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover",  over);
    window.addEventListener("mouseout",   out);
    window.addEventListener("mousedown",  down);
    window.addEventListener("mouseup",    up);
    return () => {
      document.body.style.cursor = "";
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover",  over);
      window.removeEventListener("mouseout",   out);
      window.removeEventListener("mousedown",  down);
      window.removeEventListener("mouseup",    up);
    };
  }, [visible]);

  if (!visible) return null;

  const sp = { type: "spring" as const, stiffness: 700, damping: 42 };
  const lg = { type: "spring" as const, stiffness: 160, damping: 22 };

  return (
    <>
      {/* Soft glow blob — slowest */}
      <div style={{
        position: "fixed",
        left: lag.x - 28, top: lag.y - 28,
        width: 56, height: 56, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,201,167,0.22) 0%, transparent 70%)",
        filter: "blur(10px)",
        zIndex: 99993, pointerEvents: "none",
        transform: `scale(${hov ? 2.4 : 1})`,
        transition: "transform 0.35s ease",
      }} />

      {/* Outer ring — lagged */}
      <motion.div
        animate={{
          x: lag.x - 20, y: lag.y - 20,
          scale: hov ? 1.9 : clicking ? 0.75 : 1,
          opacity: hov ? 0.9 : 0.5,
        }}
        transition={lg}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 40, height: 40, borderRadius: "50%",
          border: "1.5px solid #00C9A7",
          background: hov ? "rgba(0,201,167,0.07)" : "transparent",
          zIndex: 99994, pointerEvents: "none",
        }}
      />

      {/* Arrow pointer — instant */}
      <motion.div
        animate={{ x: pos.x, y: pos.y, scale: clicking ? 0.72 : 1 }}
        transition={sp}
        style={{
          position: "fixed", top: -1, left: -1,
          zIndex: 99999, pointerEvents: "none",
        }}
      >
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none"
          style={{ display: "block", filter: "drop-shadow(0 2px 10px rgba(0,201,167,0.75)) drop-shadow(0 0 20px rgba(0,201,167,0.35))" }}>
          <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#4DFFD2" />
              <stop offset="60%"  stopColor="#00C9A7" />
              <stop offset="100%" stopColor="#1B8F6E" />
            </linearGradient>
          </defs>
          <path
            d="M3 3 L3 22 L8.5 17 L12.5 25.5 L15.5 24 L11.5 15.5 L19.5 15.5 Z"
            fill="url(#cg)"
            stroke="rgba(255,255,255,0.92)"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Inner highlight */}
          <path
            d="M4.5 6 L4.5 18.5 L8.8 14.6 L12.1 21.6 L13.5 21 L10.2 14 L16 14 Z"
            fill="rgba(255,255,255,0.14)"
          />
        </svg>
      </motion.div>

      {/* Hover fill bloom */}
      <motion.div
        animate={{ x: pos.x - 5, y: pos.y - 5, scale: hov ? 5 : 0, opacity: hov ? 0.18 : 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 10, height: 10, borderRadius: "50%",
          background: "radial-gradient(circle, #00C9A7, #1B8F6E)",
          zIndex: 99996, pointerEvents: "none",
        }}
      />
    </>
  );
}