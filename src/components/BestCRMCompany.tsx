"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  {
    id: "custom",
    label: "Custom CRM Solutions",
    items: [
      { icon: "📱", title: "CRM Mobile App System",    desc: "Native iOS and Android CRM apps built around your field and remote team workflows." },
      { icon: "🛠️", title: "Custom CRM Development",   desc: "100% bespoke CRM architecture — no templates, no off-the-shelf compromises." },
      { icon: "☁️", title: "Cloud-Based CRM Services",  desc: "Fully managed cloud CRM infrastructure with 99.9% uptime and auto-scaling." },
      { icon: "📊", title: "Real-Time Dashboards",      desc: "Live sales, support, and pipeline dashboards that update without page refresh." },
    ],
  },
  {
    id: "management",
    label: "CRM Software Management",
    items: [
      { icon: "🔐", title: "User Role & Permission Mgmt",   desc: "Granular role-based access — control exactly who sees, edits, and exports data." },
      { icon: "🧹", title: "Data Quality & Deduplication",  desc: "Automated dedup, normalisation, and enrichment to keep your CRM data clean." },
      { icon: "⚡", title: "Workflow Automation Mgmt",      desc: "Build, test, and maintain complex multi-step automation flows inside your CRM." },
      { icon: "🔗", title: "Third-Party App Management",    desc: "Manage all your integrations — billing, comms, ERP — from a single control plane." },
    ],
  },
  {
    id: "optimization",
    label: "CRM Software Optimization",
    items: [
      { icon: "🚀", title: "Performance Tuning",         desc: "Query optimisation, indexing, and caching to make your CRM blazing fast." },
      { icon: "📈", title: "Conversion Rate Optimisation", desc: "A/B test CRM workflows and sales sequences to lift pipeline conversion." },
      { icon: "🔍", title: "Audit & Health Checks",      desc: "Comprehensive CRM audits that surface bloat, inefficiencies, and security gaps." },
      { icon: "🤖", title: "AI & Automation Upgrades",   desc: "Layer predictive scoring, chatbots, and AI-driven nudges into your existing CRM." },
    ],
  },
];

const STATS = [
  { value: 1500, suffix: "+", label: "Web Projects"  },
  { value: 500,  suffix: "+", label: "Mobile Apps"   },
  { value: 10,   suffix: "+", label: "Years"         },
  { value: 25,   suffix: "+", label: "Industries"    },
];

function Counter({ value, suffix, trigger }: { value: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    let step = 0;
    const steps = 64, duration = 1800;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(eased * value));
      if (step >= steps) { setCount(value); clearInterval(timer); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [trigger, value]);
  return <>{count}{suffix}</>;
}

export default function BestCRMCompany() {
  const [active, setActive] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) ob.observe(statsRef.current);
    return () => ob.disconnect();
  }, []);

  const tab = TABS[active];

  return (
    <section
      id="best-crm"
      style={{
        position: "relative", overflow: "hidden", padding: "100px 0",
        background: "linear-gradient(180deg, #040e1f 0%, #030B18 100%)",
      }}
    >
      {/* Side glow */}
      <div style={{
        position: "absolute", right: -150, top: "30%", width: 500, height: 500,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(0,201,167,0.07),transparent 70%)",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 64px" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-label" style={{ justifyContent: "center" }}
          >
            Why Choose NNC
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="section-heading" style={{ marginBottom: 16 }}
          >
            Your Best <span className="grad-text">Custom CRM Development</span> Company
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.16 }}
            style={{ color: "rgba(255,255,255,0.52)", fontSize: 16, lineHeight: 1.75, fontFamily: "var(--font-body)" }}
          >
            Here&apos;s what we bring to the table in terms of custom CRM development.
          </motion.p>
        </div>

        {/* Main layout: stats left + tabs right */}
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 60, alignItems: "start" }} className="crm-best-grid">

          {/* LEFT — Stats counters */}
          <div ref={statsRef} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{
                  padding: "28px 24px",
                  borderBottom: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  background: "rgba(6,20,37,0.6)",
                  borderLeft: "3px solid",
                  borderLeftColor: "#00C9A7",
                  marginBottom: 12, borderRadius: "0 10px 10px 0",
                }}
              >
                <div
                  className="grad-text"
                  style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: 36, lineHeight: 1, marginBottom: 4,
                  }}
                >
                  <Counter value={s.value} suffix={s.suffix} trigger={statsVisible} />
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12.5, fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Tabs */}
          <div>
            {/* Tab buttons */}
            <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
              {TABS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  style={{
                    padding: "10px 20px", borderRadius: 8, border: "1px solid",
                    borderColor: i === active ? "rgba(0,201,167,0.5)" : "rgba(255,255,255,0.1)",
                    background: i === active ? "rgba(0,201,167,0.12)" : "rgba(255,255,255,0.03)",
                    color: i === active ? "#00C9A7" : "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 600,
                    cursor: "pointer", transition: "all 0.25s", whiteSpace: "nowrap",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
                className="tab-cards-grid"
              >
                {tab.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ borderColor: "rgba(0,201,167,0.35)", y: -3 }}
                    style={{
                      padding: "24px 22px", borderRadius: 14,
                      background: "rgba(6,20,37,0.8)",
                      border: "1px solid rgba(0,201,167,0.12)",
                      transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                    <h4 style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: 15, color: "#fff", marginBottom: 8, lineHeight: 1.3,
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      color: "rgba(255,255,255,0.5)", fontSize: 13,
                      lineHeight: 1.65, fontFamily: "var(--font-body)",
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .crm-best-grid { grid-template-columns: 1fr !important; }
          .crm-best-grid > div:first-child { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
        }
        @media(max-width:560px){
          .tab-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}