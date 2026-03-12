"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LEFT_ITEMS = [
  {
    icon: "🏢",
    title: "Enterprises",
    desc: "Digital CRM for managing vendors, suppliers, and partners at scale. We build systems that handle complex approval hierarchies, multi-region pipelines, and enterprise-grade security.",
  },
  {
    icon: "🏆",
    title: "Agencies",
    desc: "Client pipelines, retainer billing, and performance tracking — all unified in one custom CRM built around how agencies actually work.",
  },
  {
    icon: "🚀",
    title: "Start-ups",
    desc: "CRM that scales without outgrowing in 12 months. Lean architecture that grows with you — from 5 users to 500 without a rebuild.",
  },
];

const RIGHT_ITEMS = [
  {
    icon: "📊",
    title: "Analytical CRM",
    desc: "Turn raw customer data into actionable business intelligence. Segment audiences, identify trends, and make decisions backed by live data — not gut instinct.",
  },
  {
    icon: "🤝",
    title: "Collaborative CRM",
    desc: "Unify your sales, support, marketing, and operations teams on one shared platform. Break down silos and give every department a single view of the customer.",
  },
  {
    icon: "⚡",
    title: "Operational CRM",
    desc: "Automate day-to-day sales and service workflows — lead routing, follow-up sequences, ticket escalation, and renewal reminders run themselves.",
  },
];

function AccordionItem({
  icon, title, desc, isOpen, onClick,
}: {
  icon: string; title: string; desc: string; isOpen: boolean; onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={!isOpen ? { borderColor: "rgba(0,201,167,0.25)" } : {}}
      style={{
        borderRadius: 12, overflow: "hidden", marginBottom: 12,
        border: `1px solid ${isOpen ? "rgba(0,201,167,0.35)" : "rgba(255,255,255,0.07)"}`,
        background: isOpen
          ? "linear-gradient(135deg, rgba(0,201,167,0.06), rgba(6,20,37,0.95))"
          : "rgba(255,255,255,0.025)",
        transition: "all 0.3s",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: 16,
          padding: "20px 24px", background: "none", border: "none",
          cursor: "pointer", textAlign: "left",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 44, height: 44, borderRadius: 10, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20,
            background: isOpen ? "rgba(0,201,167,0.2)" : "rgba(255,255,255,0.06)",
            border: `1px solid ${isOpen ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.1)"}`,
            transition: "all 0.25s",
          }}
        >
          {icon}
        </div>

        <span
          style={{
            flex: 1, fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 15.5, lineHeight: 1.3,
            color: isOpen ? "#00C9A7" : "rgba(255,255,255,0.85)",
            transition: "color 0.2s",
          }}
        >
          {title}
        </span>

        {/* Chevron */}
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          style={{
            flexShrink: 0, transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: isOpen ? "#00C9A7" : "rgba(255,255,255,0.3)",
          }}
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                padding: "0 24px 22px 84px",
                color: "rgba(255,255,255,0.55)", fontSize: 13.5,
                lineHeight: 1.75, fontFamily: "var(--font-body)",
              }}
            >
              {desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HireCRMDevelopers() {
  const [leftOpen,  setLeftOpen]  = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(0);

  return (
    <section
      id="hire-crm"
      style={{
        position: "relative", overflow: "hidden", padding: "100px 0",
        background: "linear-gradient(160deg, #010812 0%, #030B18 50%, #061425 100%)",
      }}
    >
      <div className="bg-grid" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      {/* Glow left & right */}
      <div style={{
        position: "absolute", left: -200, top: "30%", width: 500, height: 500,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(0,201,167,0.06),transparent 70%)",
      }} />
      <div style={{
        position: "absolute", right: -150, bottom: "10%", width: 400, height: 400,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(31,209,181,0.05),transparent 70%)",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 72px" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-label" style={{ justifyContent: "center" }}
          >
            Built for Your Business
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="section-heading" style={{ marginBottom: 18 }}
          >
            Hire CRM Software Developers{" "}
            <span className="grad-text">Tailored to Your Needs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.16 }}
            style={{
              color: "rgba(255,255,255,0.52)", fontSize: 16.5,
              lineHeight: 1.75, fontFamily: "var(--font-body)",
            }}
          >
            Whether you&apos;re an enterprise, agency, or fast-scaling start-up — we build
            the CRM that fits your exact operational model.
          </motion.p>
        </div>

        {/* 2-column accordions */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}
          className="hire-accordion-grid"
        >
          {/* Left — Business Types */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 12, color: "#00C9A7", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 20,
              }}
            >
              — By Business Type
            </p>
            {LEFT_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.title}
                {...item}
                isOpen={leftOpen === i}
                onClick={() => setLeftOpen(leftOpen === i ? null : i)}
              />
            ))}
          </motion.div>

          {/* Right — CRM Types */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 12, color: "#00C9A7", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 20,
              }}
            >
              — By CRM Type
            </p>
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

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{
            marginTop: 64, borderRadius: 16, padding: "36px 40px",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: 24,
            background: "rgba(0,201,167,0.06)",
            border: "1px solid rgba(0,201,167,0.2)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 20, color: "#fff", marginBottom: 6,
              }}
            >
              Not sure which CRM type fits your business?
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, fontFamily: "var(--font-body)" }}>
              Book a free 30-min consultation — we&apos;ll map the right approach for your workflow.
            </p>
          </div>
          <Link href="#consultation" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
            Get Free Advice →
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:768px){ .hire-accordion-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}