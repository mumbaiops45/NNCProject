"use client";

import { motion } from "framer-motion";

const TOOLS = [
  {
    icon: "☁️",
    name: "Salesforce",
    desc: "World's #1 CRM — configured for your exact sales process.",
    color: "#00A1E0",
    badge: "Most Popular",
  },
  {
    icon: "🟠",
    name: "HubSpot",
    desc: "Inbound-focused CRM ideal for marketing-led growth.",
    color: "#FF7A59",
    badge: null,
  },
  {
    icon: "🔵",
    name: "MS Dynamics 365",
    desc: "Enterprise CRM integrated with Microsoft 365 & Azure.",
    color: "#00BCF2",
    badge: "Enterprise",
  },
  {
    icon: "🟢",
    name: "Zoho CRM",
    desc: "Flexible, cost-effective CRM for scaling SMEs.",
    color: "#E42527",
    badge: null,
  },
  {
    icon: "🍬",
    name: "SugarCRM",
    desc: "Open-source CRM for sales force automation.",
    color: "#E8373B",
    badge: null,
  },
  {
    icon: "🌐",
    name: "SuiteCRM",
    desc: "Community edition — conversions and customer interactions.",
    color: "#6C9FD9",
    badge: "Open Source",
  },
  {
    icon: "🚀",
    name: "Pipedrive",
    desc: "Visual pipeline CRM ideal for SME sales teams.",
    color: "#22A745",
    badge: null,
  },
  {
    icon: "⚙️",
    name: "Custom CRM",
    desc: "100% bespoke when off-the-shelf doesn't fit.",
    color: "#00C9A7",
    badge: "Our Specialty",
  },
];

export default function CRMPlatformTools() {
  return (
    <section
      id="crm-tools"
      style={{
        position: "relative", overflow: "hidden", padding: "100px 0",
        background: "linear-gradient(180deg, #061425 0%, #030B18 100%)",
      }}
    >
      <div className="bg-grid" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      {/* Centre glow */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)", width: 700, height: 400,
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(ellipse,rgba(0,201,167,0.06) 0%,transparent 65%)",
        }}
      />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 72px" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-label" style={{ justifyContent: "center" }}
          >
            Technology Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="section-heading" style={{ marginBottom: 18 }}
          >
            Leading CRM Platform{" "}
            <span className="grad-text">Tools That We Use</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.15 }}
            style={{
              color: "rgba(255,255,255,0.52)", fontSize: 16.5,
              lineHeight: 1.75, fontFamily: "var(--font-body)",
            }}
          >
            Here is a closer look at some of the tools we leverage for the best
            possible business outcomes.
          </motion.p>
        </div>

        {/* 4-column grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}
          className="tools-grid"
        >
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: `${tool.color}40` }}
              style={{
                position: "relative", borderRadius: 16,
                padding: "28px 24px 24px",
                background: "rgba(6,20,37,0.85)",
                border: "1px solid rgba(0,201,167,0.1)",
                transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                cursor: "default", overflow: "hidden",
                textAlign: "center",
              }}
            >
              {/* Top colour bar */}
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: 3, borderRadius: "16px 16px 0 0",
                  background: `linear-gradient(90deg, ${tool.color}88, ${tool.color})`,
                  opacity: 0.7,
                }}
              />

              {/* Badge */}
              {tool.badge && (
                <div
                  style={{
                    position: "absolute", top: 14, right: 14,
                    background: "rgba(0,201,167,0.12)",
                    border: "1px solid rgba(0,201,167,0.25)",
                    borderRadius: 5, padding: "2px 8px",
                    fontSize: 9.5, fontWeight: 700, color: "#00C9A7",
                    fontFamily: "var(--font-body)", letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {tool.badge}
                </div>
              )}

              {/* Icon circle */}
              <div
                style={{
                  width: 60, height: 60, borderRadius: "50%",
                  margin: "0 auto 16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26,
                  background: `${tool.color}15`,
                  border: `1px solid ${tool.color}30`,
                }}
              >
                {tool.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 16, color: "#fff", marginBottom: 10, lineHeight: 1.3,
                }}
              >
                {tool.name}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.5)", fontSize: 13,
                  lineHeight: 1.65, fontFamily: "var(--font-body)",
                }}
              >
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){ .tools-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media(max-width:768px){  .tools-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:480px){  .tools-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}