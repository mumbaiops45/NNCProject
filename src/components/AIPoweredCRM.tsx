"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AI_FEATURES = [
  {
    icon: "🧠",
    title: "Data Analysis",
    desc: "AI analyses vast volumes of client data from email, social media, online activity, and purchases — automating data input and surfacing insights your team can act on immediately.",
    accent: "#00C9A7",
  },
  {
    icon: "🎯",
    title: "Predictive Lead Scoring",
    desc: "Automatically rank and prioritise leads based on behaviour, engagement, and deal size — so your team focuses on the opportunities most likely to close.",
    accent: "#1fd1b5",
  },
  {
    icon: "🤖",
    title: "AI Chatbot & WhatsApp Automation",
    desc: "Deploy AI-powered chatbots and WhatsApp flows that qualify leads and book appointments — 24/7, without human input.",
    accent: "#00a07a",
  },
];

// Animated floating nodes visual
function AIVisual() {
  const nodes = [
    { x: 50,  y: 50,  size: 64, label: "AI Core",       delay: 0 },
    { x: 18,  y: 20,  size: 44, label: "Email",          delay: 0.1 },
    { x: 80,  y: 18,  size: 44, label: "Social",         delay: 0.2 },
    { x: 85,  y: 72,  size: 44, label: "Purchases",      delay: 0.3 },
    { x: 15,  y: 75,  size: 44, label: "Web Activity",   delay: 0.4 },
    { x: 50,  y: 10,  size: 36, label: "Leads",          delay: 0.5 },
    { x: 90,  y: 45,  size: 36, label: "Forecasts",      delay: 0.6 },
    { x: 10,  y: 48,  size: 36, label: "Insights",       delay: 0.7 },
    { x: 50,  y: 88,  size: 36, label: "Automation",     delay: 0.8 },
  ];

  return (
    <div
      style={{
        position: "relative", width: "100%", paddingBottom: "100%",
        borderRadius: 24,
        background: "radial-gradient(ellipse at 50% 50%, rgba(0,201,167,0.06) 0%, rgba(6,20,37,0.9) 60%)",
        border: "1px solid rgba(0,201,167,0.15)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        {/* Concentric rings */}
        {[38, 62, 86].map((r, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${50 - r / 2}%`, left: `${50 - r / 2}%`,
              width: `${r}%`, height: `${r}%`,
              borderRadius: "50%",
              border: "1px solid rgba(0,201,167,0.08)",
            }}
          />
        ))}

        {/* Connecting lines SVG */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          viewBox="0 0 100 100" preserveAspectRatio="none"
        >
          {nodes.slice(1).map((n, i) => (
            <line
              key={i}
              x1="50" y1="50" x2={n.x} y2={n.y}
              stroke="rgba(0,201,167,0.12)" strokeWidth="0.5"
              strokeDasharray="2 2"
            />
          ))}
        </svg>

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: n.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            animate={{
              y: [0, i % 2 === 0 ? -4 : 4, 0],
            }}
            // @ts-expect-error framer-motion transition type
            transition2={{
              y: { repeat: Infinity, duration: 3 + i * 0.4, ease: "easeInOut" },
            }}
            style={{
              position: "absolute",
              left: `${n.x}%`, top: `${n.y}%`,
              transform: "translate(-50%, -50%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 4,
            }}
          >
            <div
              style={{
                width: n.size, height: n.size, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: i === 0
                  ? "linear-gradient(135deg,#00C9A7,#00a07a)"
                  : "rgba(0,201,167,0.1)",
                border: `1px solid ${i === 0 ? "transparent" : "rgba(0,201,167,0.25)"}`,
                boxShadow: i === 0 ? "0 0 40px rgba(0,201,167,0.35)" : "none",
                fontSize: i === 0 ? 22 : 14,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: i === 0 ? "#000" : "#00C9A7",
              }}
            >
              {i === 0 ? "AI" : "◆"}
            </div>
            {n.label && (
              <span
                style={{
                  fontSize: 8.5, color: "rgba(255,255,255,0.45)",
                  fontFamily: "var(--font-body)", whiteSpace: "nowrap",
                  letterSpacing: "0.04em",
                }}
              >
                {n.label}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function AIPoweredCRM() {
  return (
    <section
      id="ai-crm"
      style={{
        position: "relative", overflow: "hidden", padding: "100px 0",
        background: "linear-gradient(180deg, #030B18 0%, #061425 100%)",
      }}
    >
      <div className="bg-grid" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      {/* Glow */}
      <div
        style={{
          position: "absolute", top: "20%", left: "-5%",
          width: 500, height: 500, borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle,rgba(0,201,167,0.07),transparent 70%)",
        }}
      />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="ai-crm-grid"
        >
          {/* LEFT — Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label"
            >
              Artificial Intelligence
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.08 }}
              className="section-heading" style={{ marginBottom: 18 }}
            >
              Leverage{" "}
              <span className="grad-text">AI-Powered CRM</span>{" "}
              Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.14 }}
              style={{
                color: "rgba(255,255,255,0.55)", fontSize: 16,
                lineHeight: 1.75, fontFamily: "var(--font-body)", marginBottom: 44,
              }}
            >
              Our AI-backed CRM solutions aim at simplification and higher efficiency
              for your workflows — eliminating manual tasks and giving your team real
              intelligence to act on.
            </motion.p>

            {/* Feature cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {AI_FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }}
                  whileHover={{ borderColor: "rgba(0,201,167,0.35)", x: 4 }}
                  style={{
                    display: "flex", gap: 16, alignItems: "flex-start",
                    padding: "20px 22px", borderRadius: 13,
                    background: "rgba(6,20,37,0.8)",
                    border: "1px solid rgba(0,201,167,0.12)",
                    transition: "all 0.3s",
                  }}
                >
                  <div
                    style={{
                      width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20,
                      background: "rgba(0,201,167,0.1)",
                      border: "1px solid rgba(0,201,167,0.2)",
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)", fontWeight: 700,
                        fontSize: 15.5, color: "#fff", marginBottom: 6, lineHeight: 1.3,
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.5)", fontSize: 13,
                        lineHeight: 1.7, fontFamily: "var(--font-body)",
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.45 }}
              style={{ marginTop: 36 }}
            >
              <Link href="#consultation" className="btn-primary">
                Explore AI CRM Solutions →
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Animated visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <AIVisual />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .ai-crm-grid { grid-template-columns: 1fr !important; }
          .ai-crm-grid > div:last-child { max-width: 400px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}