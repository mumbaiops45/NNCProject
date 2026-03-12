"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LEFT_ITEMS = [
  {
    icon: "📧",
    title: "Email Integration",
    desc: "Sync Gmail, Outlook, and custom SMTP directly into your CRM. Log every email automatically, track open rates, and trigger follow-up sequences without leaving your sales pipeline.",
  },
  {
    icon: "⚙️",
    title: "Workflow and Approvals",
    desc: "Automate deal stage progressions, internal approvals, and task assignments. Set conditional logic so the right action always happens at the right time — no manual oversight needed.",
  },
  {
    icon: "📊",
    title: "Reports and Dashboards",
    desc: "Build real-time visual dashboards for revenue, pipeline velocity, rep performance, and customer health. Export to PDF or share live links with stakeholders.",
  },
  {
    icon: "📈",
    title: "Sales Forecasting",
    desc: "AI-powered revenue projections based on pipeline stage, historical close rates, and deal value. Give your leadership team the confidence to plan and invest.",
  },
];

const RIGHT_ITEMS = [
  {
    icon: "🔧",
    title: "Field Service",
    desc: "Dispatch field technicians, track job status in real time, and close service tickets from mobile. Your CRM becomes the single source of truth for on-site operations.",
  },
  {
    icon: "🧾",
    title: "CPQ and Billing",
    desc: "Configure, price, and quote complex products in minutes. Generate proposals, get e-signatures, and trigger invoicing — all from inside the CRM without switching tools.",
  },
  {
    icon: "🎯",
    title: "Lead Scoring & Prioritisation",
    desc: "Rank every inbound lead automatically based on firmographics, behaviour, and engagement signals. Your reps always know exactly who to call next.",
  },
  {
    icon: "💬",
    title: "WhatsApp Integration",
    desc: "Send automated WhatsApp messages for lead follow-up, appointment reminders, and support — all logged back to the CRM contact record in real time.",
  },
];

function AccordionItem({
  icon, title, desc, isOpen, onClick,
}: {
  icon: string; title: string; desc: string; isOpen: boolean; onClick: () => void;
}) {
  return (
    <div
      style={{
        borderRadius: 12, overflow: "hidden", marginBottom: 10,
        border: `1px solid ${isOpen ? "rgba(0,201,167,0.3)" : "rgba(255,255,255,0.08)"}`,
        background: isOpen ? "rgba(6,20,37,0.95)" : "rgba(6,20,37,0.5)",
        transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: 14,
          padding: "18px 22px", background: "none", border: "none",
          cursor: "pointer", textAlign: "left",
        }}
      >
        <span
          style={{
            width: 38, height: 38, borderRadius: 9, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
            background: isOpen ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${isOpen ? "rgba(0,201,167,0.3)" : "rgba(255,255,255,0.08)"}`,
            transition: "all 0.25s",
          }}
        >
          {icon}
        </span>
        <span
          style={{
            flex: 1, fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 15, color: isOpen ? "#00C9A7" : "rgba(255,255,255,0.85)",
            transition: "color 0.2s",
          }}
        >
          {title}
        </span>
        <span
          style={{
            width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: isOpen ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.06)",
            color: isOpen ? "#00C9A7" : "rgba(255,255,255,0.4)",
            fontSize: 14, fontWeight: 700, transition: "all 0.25s",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 22px 20px 74px",
                color: "rgba(255,255,255,0.55)", fontSize: 13.5,
                lineHeight: 1.75, fontFamily: "var(--font-body)",
              }}
            >
              {desc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CRMDoMore() {
  const [leftOpen,  setLeftOpen]  = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(0);

  return (
    <section
      id="crm-do-more"
      style={{
        position: "relative", overflow: "hidden", padding: "100px 0",
        background: "#030B18",
      }}
    >
      {/* Vertical accent line */}
      <div
        style={{
          position: "absolute", left: "50%", top: "10%", bottom: "10%",
          width: 1, background: "linear-gradient(180deg,transparent,rgba(0,201,167,0.15),transparent)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 72px" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-label" style={{ justifyContent: "center" }}
          >
            CRM Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="section-heading" style={{ marginBottom: 16 }}
          >
            A Good CRM Software Always{" "}
            <span className="grad-text">Allows You to Do More</span>
          </motion.h2>
        </div>

        {/* 2-column accordion layout */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
          className="crm-accordion-grid"
        >
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            {LEFT_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.title}
                {...item}
                isOpen={leftOpen === i}
                onClick={() => setLeftOpen(leftOpen === i ? null : i)}
              />
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            {RIGHT_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.title}
                {...item}
                isOpen={rightOpen === i}
                onClick={() => setRightOpen(rightOpen === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .crm-accordion-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}