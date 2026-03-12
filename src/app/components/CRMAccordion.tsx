"use client";
import { useState } from "react";

const TEAL = "#00C9A7";

const LEFT_ITEMS = [
  {
    title: "Email Integration",
    icon: "📧",
    desc: "Sync your inbox directly with your CRM — track every email, automate follow-ups, and never lose a conversation thread with a client.",
  },
  {
    title: "Workflow and Approvals",
    icon: "✅",
    desc: "Automate multi-step approval workflows across sales, finance, and operations. Reduce manual handoffs and speed up decision-making.",
  },
  {
    title: "Reports and Dashboards",
    icon: "📊",
    desc: "Build real-time dashboards and custom reports to monitor KPIs, pipeline health, and team performance at a glance.",
  },
  {
    title: "Sales Forecasting",
    icon: "📈",
    desc: "Use historical data and AI-driven models to predict revenue, identify risks, and plan resources with confidence.",
  },
];

const RIGHT_ITEMS = [
  {
    title: "Field Service",
    icon: "🛠️",
    desc: "Equip field teams with mobile CRM tools, job scheduling, and real-time updates to deliver exceptional on-site service.",
  },
  {
    title: "CPQ and Billing",
    icon: "💰",
    desc: "Configure, price, and quote accurately every time. Streamline billing cycles and eliminate pricing errors across your sales team.",
  },
  {
    title: "Lead Scoring & Prioritisation",
    icon: "🎯",
    desc: "Automatically score and rank leads based on behaviour and fit so your sales team always focuses on the highest-value opportunities.",
  },
  {
    title: "WhatsApp Integration",
    icon: "💬",
    desc: "Connect WhatsApp Business to your CRM for seamless customer communication, automated responses, and conversation tracking.",
  },
];

function AccordionItem({
  item, index, isOpen, onToggle,
}: {
  item: { title: string; icon: string; desc: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        border: `1px solid ${isOpen ? "rgba(0,201,167,0.35)" : "rgba(255,255,255,0.08)"}`,
        background: isOpen ? "rgba(0,201,167,0.05)" : "rgba(255,255,255,0.02)",
        overflow: "hidden",
        transition: "border-color 0.25s, background 0.25s",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 22px", gap: 14,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 11, flexShrink: 0,
            background: isOpen ? "rgba(0,201,167,0.18)" : "rgba(255,255,255,0.06)",
            border: `1px solid ${isOpen ? "rgba(0,201,167,0.3)" : "rgba(255,255,255,0.1)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, transition: "background 0.25s, border-color 0.25s",
          }}>
            {item.icon}
          </div>
          <span style={{
            fontSize: 15, fontWeight: 700,
            color: isOpen ? "#fff" : "rgba(255,255,255,0.75)",
            fontFamily: "'Poppins', sans-serif",
            transition: "color 0.2s",
          }}>
            {item.title}
          </span>
        </div>

        {/* Plus / Minus */}
        <div style={{
          width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
          background: isOpen ? TEAL : "rgba(255,255,255,0.08)",
          border: `1px solid ${isOpen ? TEAL : "rgba(255,255,255,0.15)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: isOpen ? "#000" : "rgba(255,255,255,0.6)",
          fontSize: 18, fontWeight: 700, lineHeight: 1,
          transition: "background 0.25s, color 0.25s, transform 0.25s",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          +
        </div>
      </div>

      {/* Body */}
      <div style={{
        maxHeight: isOpen ? 200 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease",
      }}>
        <p style={{
          padding: "0 22px 20px 78px",
          color: "rgba(255,255,255,0.5)",
          fontSize: 14, lineHeight: 1.75,
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400, margin: 0,
        }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function CRMAccordion() {
  const [leftOpen,  setLeftOpen]  = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(0);

  return (
    <section style={{
      padding: "96px 48px",
      background: "#030B18",
      position: "relative", overflow: "hidden",
      fontFamily: "'Poppins', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .ca-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 768px) {
          .ca-grid { grid-template-columns: 1fr !important; }
          .ca-section { padding: 64px 20px !important; }
        }
      `}</style>

      {/* Glow */}
      <div style={{
        position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)",
        width: 600, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,201,167,0.05) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.22)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 16,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, display: "block", boxShadow: `0 0 8px ${TEAL}` }} />
            <span style={{ color: TEAL, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              CRM Capabilities
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16,
          }}>
            A Good CRM Software Always{" "}
            <span style={{
              background: `linear-gradient(135deg, ${TEAL}, #1fd1b5)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Allows You to Do More
            </span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.7,
            maxWidth: 520, margin: "0 auto", fontWeight: 400,
          }}>
            Explore the key capabilities that make our CRM solutions stand out for businesses in Canada, USA & UK.
          </p>
        </div>

        {/* Two-column accordion */}
        <div className="ca-grid">
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {LEFT_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.title}
                item={item}
                index={i}
                isOpen={leftOpen === i}
                onToggle={() => setLeftOpen(leftOpen === i ? null : i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {RIGHT_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.title}
                item={item}
                index={i}
                isOpen={rightOpen === i}
                onToggle={() => setRightOpen(rightOpen === i ? null : i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}