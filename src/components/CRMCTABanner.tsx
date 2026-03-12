"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CRMCTABanner() {
  return (
    <section
      id="crm-cta"
      style={{
        position: "relative", overflow: "hidden", padding: "90px 48px",
        // Bold blue gradient as specified
        background: "linear-gradient(135deg, #0a2463 0%, #1351a8 35%, #1565C0 60%, #0d47a1 100%)",
        textAlign: "center",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: [
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow overlays */}
      <div style={{
        position: "absolute", top: "50%", left: "20%",
        transform: "translate(-50%,-50%)", width: 600, height: 400,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(ellipse,rgba(255,255,255,0.07) 0%,transparent 65%)",
      }} />
      <div style={{
        position: "absolute", top: "50%", right: "-10%",
        transform: "translateY(-50%)", width: 500, height: 500,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(ellipse,rgba(0,201,167,0.12) 0%,transparent 60%)",
      }} />

      {/* Top scan line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg,transparent,rgba(0,201,167,0.6),rgba(255,255,255,0.3),rgba(0,201,167,0.6),transparent)",
      }} />
      {/* Bottom scan line */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg,transparent,rgba(0,201,167,0.4),transparent)",
      }} />

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 28,
          }}
        >
          <span style={{
            width: 7, height: 7, borderRadius: "50%", background: "#00C9A7",
            boxShadow: "0 0 8px #00C9A7", display: "inline-block",
            animation: "pulse-glow 2s ease-in-out infinite",
          }} />
          <span style={{
            color: "rgba(255,255,255,0.9)", fontSize: 11.5, fontWeight: 700,
            letterSpacing: "0.1em", fontFamily: "var(--font-body)", textTransform: "uppercase",
          }}>
            CRM Solutions That Scale
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            letterSpacing: "-0.02em", lineHeight: 1.1,
            color: "#fff", margin: "0 auto 22px",
            fontSize: "clamp(28px, 4.5vw, 52px)",
          }}
        >
          Want CRM Solutions That Take Your{" "}
          <br />
          <span style={{
            background: "linear-gradient(120deg,#00C9A7,#7fffed)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Business to the Next Level?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.18 }}
          style={{
            color: "rgba(255,255,255,0.72)", fontSize: 17, lineHeight: 1.75,
            fontFamily: "var(--font-body)", maxWidth: 560, margin: "0 auto 44px",
          }}
        >
          Connect with NNC Digital today for a free strategy consultation.
          No commitment, no pressure — just honest advice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.26 }}
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}
        >
          {/* White CTA button — as specified */}
          <Link
            href="#consultation"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#ffffff", color: "#0a2463",
              fontFamily: "var(--font-body)", fontWeight: 800,
              fontSize: 15, padding: "15px 34px", borderRadius: 9,
              textDecoration: "none", letterSpacing: "0.01em",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
            }}
          >
            Connect Now →
          </Link>

          <Link href="tel:+16470000000" className="btn-outline"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.9)", fontSize: 14 }}>
            📞 Call Us Free
          </Link>
        </motion.div>

        {/* Trust chips */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.38 }}
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 28, marginTop: 44 }}
        >
          {[
            "✓  Free 30-min strategy call",
            "✓  Response within 24 hrs",
            "✓  No long-term contracts",
            "✓  GDPR & PIPEDA compliant",
          ].map(item => (
            <span
              key={item}
              style={{
                color: "rgba(255,255,255,0.55)", fontSize: 12.5,
                fontFamily: "var(--font-body)",
              }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}