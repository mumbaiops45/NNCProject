"use client";
import { useState } from "react";

const TEAL      = "#00C9A7";
const TEAL_DARK = "#00a07a";

const LEFT_ITEMS = [
  {
    icon: "🏢",
    title: "Enterprises",
    desc: "Digital CRM built for vendors, suppliers, and partners — with complex permission hierarchies, multi-entity management, and enterprise-grade integrations.",
  },
  {
    icon: "🎯",
    title: "Agencies",
    desc: "Client pipelines, retainer billing, and performance dashboards — CRM designed to manage and grow your book of business with ease.",
  },
  {
    icon: "🚀",
    title: "Start-ups",
    desc: "CRM that scales without outgrowing in 12 months. Lightweight to start, powerful when you need it — built to grow with your team.",
  },
];

const RIGHT_ITEMS = [
  {
    icon: "📊",
    title: "Analytical CRM",
    desc: "Turn raw customer data into business intelligence. Identify trends, segment audiences, and make data-driven decisions with confidence.",
  },
  {
    icon: "🤝",
    title: "Collaborative CRM",
    desc: "Unify sales, support, marketing, and operations around a single customer view — breaking down silos and improving team alignment.",
  },
  {
    icon: "⚙️",
    title: "Operational CRM",
    desc: "Automate day-to-day sales and service processes — from lead capture to ticket resolution — so your team focuses on what matters most.",
  },
];

function AccItem({
  item, isOpen, onToggle, accent,
}: {
  item: { icon: string; title: string; desc: string };
  isOpen: boolean;
  onToggle: () => void;
  accent: string;
}) {
  return (
    <div
      onClick={onToggle}
      style={{
        borderRadius: 14,
        border: `1px solid ${isOpen ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.08)"}`,
        background: isOpen ? "rgba(0,201,167,0.06)" : "rgba(255,255,255,0.02)",
        overflow: "hidden", cursor: "pointer",
        transition: "border-color .25s, background .25s",
      }}
    >
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 22px", gap: 14,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, flexShrink: 0,
            background: isOpen ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${isOpen ? "rgba(0,201,167,0.3)" : "rgba(255,255,255,0.1)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, transition: "background .25s, border-color .25s",
          }}>
            {item.icon}
          </div>
          <span style={{
            fontSize: 15, fontWeight: 700,
            color: isOpen ? "#fff" : "rgba(255,255,255,0.72)",
            fontFamily: "'Poppins',sans-serif",
            transition: "color .2s",
          }}>
            {item.title}
          </span>
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
          background: isOpen ? TEAL : "rgba(255,255,255,0.07)",
          border: `1px solid ${isOpen ? TEAL : "rgba(255,255,255,0.14)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: isOpen ? "#000" : "rgba(255,255,255,0.55)",
          fontSize: 18, fontWeight: 700, lineHeight: 1,
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          transition: "all .25s ease",
        }}>+</div>
      </div>

      {/* Body */}
      <div style={{
        maxHeight: isOpen ? 180 : 0,
        overflow: "hidden",
        transition: "max-height .35s ease",
      }}>
        <p style={{
          padding: "0 22px 20px 80px",
          color: "rgba(255,255,255,0.5)",
          fontSize: 14, lineHeight: 1.75,
          fontFamily: "'Poppins',sans-serif",
          fontWeight: 400, margin: 0,
        }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function HireCRMDev() {
  const [leftOpen,  setLeftOpen]  = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(0);

  return (
    <section style={{
      padding: "80px 48px",
      background: "linear-gradient(180deg,#010812 0%,#030B18 100%)",
      position: "relative", overflow: "hidden",
      fontFamily: "'Poppins',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .hcd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        .hcd-cta-btn { transition: transform .2s, box-shadow .2s; }
        .hcd-cta-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 28px rgba(0,201,167,0.35) !important;
        }
        .hcd-outline-btn { transition: border-color .2s, color .2s, background .2s; }
        .hcd-outline-btn:hover {
          border-color: ${TEAL} !important;
          background: rgba(0,201,167,0.07) !important;
        }

        @media (max-width: 768px) {
          .hcd-grid { grid-template-columns: 1fr !important; }
          .hcd-btns { flex-direction: column !important; }
        }
        @media (max-width: 480px) {
          .hcd-section { padding: 56px 20px !important; }
        }
      `}</style>

      {/* Glow orbs */}
      <div style={{ position:"absolute", top:"10%", left:"5%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents:"none", zIndex:0 }}/>
      <div style={{ position:"absolute", bottom:"10%", right:"5%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.05) 0%,transparent 65%)", pointerEvents:"none", zIndex:0 }}/>

      <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2 }}>

        {/* Heading */}
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(0,201,167,0.08)", border:"1px solid rgba(0,201,167,0.22)",
            borderRadius:100, padding:"6px 18px", marginBottom:16,
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:TEAL, display:"block", boxShadow:`0 0 8px ${TEAL}` }}/>
            <span style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
              Hire Developers
            </span>
          </div>
          <h2 style={{
            fontSize:"clamp(24px,3vw,40px)", fontWeight:900, color:"#fff",
            letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:16,
          }}>
            Hire CRM Software Developers{" "}
            <span style={{ background:`linear-gradient(135deg,${TEAL},#1fd1b5)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Tailored to Your Needs
            </span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:16, lineHeight:1.75, maxWidth:560, margin:"0 auto", fontWeight:400 }}>
            Whether you&apos;re an enterprise, agency, or fast-scaling start-up — we have the right CRM developer for your exact challenge.
          </p>
        </div>

        {/* Column labels */}
        <div className="hcd-grid" style={{ marginBottom:16 }}>
          <p style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
            By Business Type
          </p>
          <p style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
            By CRM Type
          </p>
        </div>

        {/* Two-column accordion */}
        <div className="hcd-grid">
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {LEFT_ITEMS.map((item, i) => (
              <AccItem
                key={item.title}
                item={item}
                isOpen={leftOpen === i}
                onToggle={() => setLeftOpen(leftOpen === i ? null : i)}
                accent={TEAL}
              />
            ))}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {RIGHT_ITEMS.map((item, i) => (
              <AccItem
                key={item.title}
                item={item}
                isOpen={rightOpen === i}
                onToggle={() => setRightOpen(rightOpen === i ? null : i)}
                accent={TEAL}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="hcd-btns" style={{ display:"flex", gap:16, marginTop:48, justifyContent:"center", flexWrap:"wrap" }}>
          <button className="hcd-cta-btn" style={{
            padding:"14px 32px", borderRadius:10, border:"none",
            background:`linear-gradient(135deg,${TEAL},${TEAL_DARK})`,
            color:"#000", fontWeight:700, fontSize:15,
            fontFamily:"'Poppins',sans-serif", cursor:"pointer",
          }}>
            📅 Hire a CRM Developer
          </button>
          <button className="hcd-outline-btn" style={{
            padding:"14px 32px", borderRadius:10,
            border:"1.5px solid rgba(0,201,167,0.35)",
            background:"transparent", color:TEAL,
            fontWeight:600, fontSize:15,
            fontFamily:"'Poppins',sans-serif", cursor:"pointer",
          }}>
            View Pricing →
          </button>
        </div>

      </div>
    </section>
  );
}