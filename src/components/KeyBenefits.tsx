"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BENEFITS = [
  {
    num: "01",
    title: "Secure Data",
    desc: "Cloud-connected system built with enterprise-grade encryption. GDPR, PIPEDA, and CCPA compliant from the architecture level up. Zero data loss — guaranteed.",
    icon: "🔐",
    tags: ["GDPR", "PIPEDA", "CCPA", "Zero Data Loss"],
  },
  {
    num: "02",
    title: "Lead Management",
    desc: "All customer data centralised in one intelligent CRM. Smart priority pipelines ensure your team focuses on the right deals at the right time — faster closure, higher revenue.",
    icon: "📊",
    tags: ["Unified Data", "Smart Pipelines", "Deal Tracking"],
  },
  {
    num: "03",
    title: "Easy Integration",
    desc: "Seamless plugin architecture for every department — marketing, sales, finance, and ops. One centralised data ecosystem that eliminates silos and duplication.",
    icon: "🔗",
    tags: ["API-First", "Plug & Play", "Zero Silos"],
  },
  {
    num: "04",
    title: "Relentless Support",
    desc: "Dedicated support doesn't stop at go-live. We stay on to ensure maximum CRM adoption, handle edge cases, train your team, and iterate based on real usage data.",
    icon: "🤝",
    tags: ["Post Go-Live", "Training", "Max Adoption"],
  },
];

export default function KeyBenefits() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="key-benefits"
      style={{
        position: "relative",
        padding: "110px 0",
        overflow: "hidden",
        background: "linear-gradient(180deg, #030B18 0%, #061425 100%)",
      }}
    >
      {/* Vertical teal line — left gutter */}
      <div style={{
        position: "absolute", left: "calc(50% - 620px)", top: "15%", bottom: "15%",
        width: 2, borderRadius: 2,
        background: "linear-gradient(180deg, transparent, rgba(0,201,167,0.35), transparent)",
        pointerEvents: "none",
      }} />

      {/* Glow */}
      <div style={{
        position: "absolute", right: "-10%", top: "20%",
        width: 500, height: 500, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(0,201,167,0.07) 0%, transparent 65%)",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ maxWidth: 640, marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }} className="section-label"
          >
            Why It Matters
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="section-heading" style={{ marginBottom: 18 }}
          >
            Key Benefits of{" "}
            <span className="grad-text">CRM Development</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            style={{
              color: "rgba(255,255,255,0.55)", fontSize: 16.5, lineHeight: 1.75,
              fontFamily: "var(--font-body)",
            }}
          >
            Here&apos;s what you gain with advanced, next-gen CRM development services.
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical connector line */}
          <motion.div
            initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute", left: 27, top: 28, bottom: 28,
              width: 2, transformOrigin: "top",
              background: "linear-gradient(180deg, #00C9A7, rgba(0,201,167,0.2))",
              borderRadius: 2,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "flex", gap: 40, alignItems: "flex-start", paddingBottom: 48 }}
              >
                {/* Number node */}
                <div style={{ flexShrink: 0, position: "relative", zIndex: 2 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: "linear-gradient(135deg, #00C9A7, #00a07a)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 0 28px rgba(0,201,167,0.35)",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: 16, color: "#000", letterSpacing: "-0.02em",
                    }}>
                      {b.num}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6, borderColor: "rgba(0,201,167,0.35)" }}
                  style={{
                    flex: 1, padding: "28px 32px",
                    background: "rgba(6,20,37,0.8)",
                    border: "1px solid rgba(0,201,167,0.12)",
                    borderRadius: 16, backdropFilter: "blur(12px)",
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                    <span style={{ fontSize: 26 }}>{b.icon}</span>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: 22, color: "#fff", margin: 0,
                    }}>
                      {b.title}
                    </h3>
                  </div>
                  <p style={{
                    color: "rgba(255,255,255,0.58)", fontSize: 15, lineHeight: 1.75,
                    fontFamily: "var(--font-body)", marginBottom: 18,
                  }}>
                    {b.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {b.tags.map(tag => (
                      <span key={tag} style={{
                        background: "rgba(0,201,167,0.08)",
                        border: "1px solid rgba(0,201,167,0.18)",
                        borderRadius: 6, padding: "3px 11px",
                        color: "#00C9A7", fontSize: 11.5,
                        fontWeight: 600, fontFamily: "var(--font-body)", letterSpacing: "0.04em",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}