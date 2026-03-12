"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
//  INSTRUCTIONS
//  1. Place your logo files in:  public/clients/
//  2. Rename them  clients1.png … clients11.png   (or update the src values below)
//  3. Supported formats: .png  .svg  .jpg  .webp
//
//  The component shows the image when the file exists.
//  If the file is missing it automatically falls back to the text name.
// ─────────────────────────────────────────────────────────────────────────────
const CLIENTS: { src: string; name: string }[] = [
  { src: "/clients/clients1.png",  name: "Client 1"  },
  { src: "/clients2.png",  name: "Client 2"  },
  { src: "/clients3.png",  name: "Client 3"  },
  { src: "/clients4.png",  name: "Client 4"  },
  { src: "/clients5.png",  name: "Client 5"  },
  { src: "/clients6.png",  name: "Client 6"  },
  { src: "/clients7.png",  name: "Client 7"  },
  { src: "/clients8.png",  name: "Client 8"  },
  { src: "/clients9.png",  name: "Client 9"  },
  { src: "/clients10.png", name: "Client 10" },
  { src: "/clients11.png", name: "Client 11" },
];

const DOUBLED  = [...CLIENTS, ...CLIENTS];
const REVERSED = [...DOUBLED].reverse();

// ── Single logo tile ──────────────────────────────────────────────────────────
function LogoTile({ src, name }: { src: string; name: string }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "14px 28px", minWidth: 160, height: 72, flexShrink: 0,
        borderRadius: 10,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.3s", cursor: "default",
        position: "relative",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,201,167,0.3)";
        el.style.background  = "rgba(0,201,167,0.05)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.background  = "rgba(255,255,255,0.03)";
      }}
    >
      <Image
        src={src}
        alt={name}
        width={120}
        height={40}
        style={{
          objectFit: "contain",
          opacity: 0.85,
          maxHeight: 40,
          maxWidth: 120,
          transition: "opacity 0.3s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLImageElement).style.opacity = "1";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
        }}
        // Hide broken-image icon; reveal the text fallback span instead
        onError={e => {
          const img = e.currentTarget as HTMLImageElement;
          img.style.display = "none";
          const fallback = img.nextSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "block";
        }}
      />
      {/* Text fallback – hidden by default, revealed on image error */}
      <span
        style={{
          display: "none",
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
          color: "rgba(255,255,255,0.4)", letterSpacing: "0.02em", whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
    </div>
  );
}

// ── Fade gradients on left / right edges ──────────────────────────────────────
function FadeEdges() {
  return (
    <>
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 160,
        zIndex: 3, pointerEvents: "none",
        background: "linear-gradient(to right, #030B18, transparent)",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 160,
        zIndex: 3, pointerEvents: "none",
        background: "linear-gradient(to left, #030B18, transparent)",
      }} />
    </>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function ClientLogos() {
  return (
    <section style={{
      position: "relative", overflow: "hidden", padding: "88px 0",
      background: "radial-gradient(ellipse at 50% 0%, #0d1b2a 0%, #030B18 60%, #010812 100%)",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
        width: 700, height: 500, borderRadius: "50%", pointerEvents: "none", zIndex: 0,
        background: "rgba(0,201,167,0.12)", filter: "blur(180px)",
      }} />

      {/* Heading */}
      <div style={{
        maxWidth: 1240, margin: "0 auto", padding: "0 48px",
        position: "relative", zIndex: 2, textAlign: "center",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label" style={{ justifyContent: "center" }}
        >
          Client Portfolio
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.08 }}
          style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            letterSpacing: "-0.02em", marginBottom: 60,
            fontSize: "clamp(26px, 3.5vw, 40px)",
          }}
        >
          Trusted by Businesses Across{" "}
          <span className="grad-text">North America &amp; the UK</span>
          <div style={{
            width: 80, height: 3, margin: "14px auto 0", borderRadius: 10,
            background: "linear-gradient(90deg, #00C9A7, #1fd1b5)",
          }} />
        </motion.h2>
      </div>

      {/* ── Row 1 — scrolls left ── */}
      <div style={{ position: "relative", overflow: "hidden", marginBottom: 14 }}>
        <FadeEdges />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{ display: "flex", gap: 16, width: "max-content", padding: "8px 0" }}
        >
          {DOUBLED.map((c, i) => (
            <LogoTile key={i} src={c.src} name={c.name} />
          ))}
        </motion.div>
      </div>

      {/* ── Row 2 — scrolls right ── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <FadeEdges />
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
          style={{ display: "flex", gap: 16, width: "max-content", padding: "8px 0" }}
        >
          {REVERSED.map((c, i) => (
            <LogoTile key={i} src={c.src} name={c.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}