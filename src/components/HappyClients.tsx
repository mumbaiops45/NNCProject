"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Client logos (2 rows × 6) ───────────────────────────────── */
const LOGOS: { src: string; name: string }[] = [
  { src: "/clients/clients1.png",  name: "Client 1"  },
  { src: "/clients/clients2.png",  name: "Client 2"  },
  { src: "/clients/clients3.png",  name: "Client 3"  },
  { src: "/clients/clients4.png",  name: "Client 4"  },
  { src: "/clients/clients5.png",  name: "Client 5"  },
  { src: "/clients/clients6.png",  name: "Client 6"  },
  { src: "/clients/clients7.png",  name: "Client 7"  },
  { src: "/clients/clients8.png",  name: "Client 8"  },
  { src: "/clients/clients9.png",  name: "Client 9"  },
  { src: "/clients/clients10.png", name: "Client 10" },
  { src: "/clients/clients11.png", name: "Client 11" },
  { src: "/clients/clients12.png", name: "Client 12" },
];

/* ── Case study cards ────────────────────────────────────────── */
const CASES = [
  {
    industry: "Manufacturing",
    emoji: "🏭",
    title: "35% Operational Efficiency Gain",
    desc: "A mid-sized Ontario manufacturer replaced disconnected spreadsheets with a custom ERP-CRM hybrid. Production tracking, supplier management, and sales pipelines unified — cycle times cut by 35% in 90 days.",
    stat: "35%",
    statLabel: "Efficiency Increase",
    tags: ["ERP + CRM", "Ontario, Canada", "90-day delivery"],
    color: "#00C9A7",
  },
  {
    industry: "Healthcare",
    emoji: "🏥",
    title: "42% Increase in Appointment Bookings",
    desc: "A multi-location UK healthcare provider deployed our patient CRM with automated reminders, referral tracking, and GDPR-compliant data handling — driving a 42% jump in monthly bookings.",
    stat: "42%",
    statLabel: "More Bookings",
    tags: ["Patient CRM", "London, UK", "GDPR Compliant"],
    color: "#1fd1b5",
  },
  {
    industry: "D2C E-Commerce",
    emoji: "📦",
    title: "2.4× Conversion Rate Improvement",
    desc: "A New York D2C brand integrated a behavioural CRM with their Shopify store — personalised follow-ups, cart-recovery workflows, and LTV segmentation doubled their conversion rate in one quarter.",
    stat: "2.4×",
    statLabel: "Conversion Growth",
    tags: ["Shopify CRM", "New York, USA", "Behavioural AI"],
    color: "#00a07a",
  },
];

function LogoCard({ src, name }: { src: string; name: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, borderColor: "rgba(0,201,167,0.35)", background: "rgba(0,201,167,0.05)" }}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        height: 80, borderRadius: 12,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
        overflow: "hidden", padding: "12px 20px",
      }}
    >
      <Image
        src={src} alt={name} width={120} height={44}
        style={{ objectFit: "contain", maxHeight: 44, maxWidth: 120 }}
        onError={e => {
          const img = e.currentTarget as HTMLImageElement;
          img.style.display = "none";
          const fb = img.nextSibling as HTMLElement | null;
          if (fb) fb.style.display = "block";
        }}
      />
      <span style={{
        display: "none", fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: 13, color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap",
      }}>
        {name}
      </span>
    </motion.div>
  );
}

export default function HappyClients() {
  const [active, setActive] = useState(0);
  const c = CASES[active];

  return (
    <section
      id="happy-clients"
      style={{
        position: "relative", padding: "110px 0", overflow: "hidden",
        background: "linear-gradient(180deg, #061425 0%, #030B18 100%)",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", left: "50%", top: "30%", transform: "translate(-50%,-50%)",
        width: 800, height: 500, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(0,201,167,0.06) 0%, transparent 65%)",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>

        {/* ── Logo Grid ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="section-label" style={{ justifyContent: "center" }}>
            Our Clients
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="section-heading" style={{ marginBottom: 52 }}>
            Our <span className="grad-text">Happy Clients</span>
          </motion.h2>

          {/* 2 rows × 6 logos */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 14,
          }} className="logo-grid">
            {LOGOS.map((l, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}>
                <LogoCard src={l.src} name={l.name} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: "100%", height: 1, margin: "80px 0",
          background: "linear-gradient(90deg, transparent, rgba(0,201,167,0.2), transparent)",
        }} />

        {/* ── Success Stories ── */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="section-label" style={{ justifyContent: "center" }}>
            Proven Results
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="section-heading">
            Success <span className="grad-text">Stories</span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 44 }}>
          {CASES.map((cs, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: "10px 22px", borderRadius: 100, cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 600,
                border: `1.5px solid ${i === active ? cs.color : "rgba(255,255,255,0.1)"}`,
                background: i === active ? `${cs.color}18` : "transparent",
                color: i === active ? cs.color : "rgba(255,255,255,0.5)",
                transition: "all 0.25s",
              }}
            >
              {cs.emoji} {cs.industry}
            </button>
          ))}
        </div>

        {/* Active card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52,
              alignItems: "center",
              background: "rgba(6,20,37,0.85)",
              border: `1px solid ${c.color}30`,
              borderRadius: 20, padding: "52px 56px",
              backdropFilter: "blur(20px)",
              boxShadow: `0 0 80px ${c.color}0d`,
            }}
            className="story-card"
          >
            {/* Left */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: `${c.color}15`,
                border: `1px solid ${c.color}30`,
                borderRadius: 100, padding: "5px 16px", marginBottom: 24,
              }}>
                <span style={{ fontSize: 14 }}>{c.emoji}</span>
                <span style={{ color: c.color, fontSize: 11.5, fontWeight: 700,
                  letterSpacing: "0.1em", fontFamily: "var(--font-body)", textTransform: "uppercase" }}>
                  {c.industry}
                </span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26,
                color: "#fff", marginBottom: 18, lineHeight: 1.25,
              }}>
                {c.title}
              </h3>
              <p style={{
                color: "rgba(255,255,255,0.58)", fontSize: 15.5, lineHeight: 1.78,
                fontFamily: "var(--font-body)", marginBottom: 28,
              }}>
                {c.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {c.tags.map(tag => (
                  <span key={tag} style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 6, padding: "4px 12px",
                    color: "rgba(255,255,255,0.5)", fontSize: 12,
                    fontFamily: "var(--font-body)", fontWeight: 500,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — stat */}
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 200, height: 200, borderRadius: "50%", margin: "0 auto 24px",
                background: `radial-gradient(circle, ${c.color}20 0%, transparent 70%)`,
                border: `2px solid ${c.color}40`,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                boxShadow: `0 0 60px ${c.color}20`,
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 52, color: c.color, lineHeight: 1,
                }}>
                  {c.stat}
                </span>
                <span style={{
                  color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "var(--font-body)",
                  marginTop: 6, maxWidth: 100, textAlign: "center", lineHeight: 1.4,
                }}>
                  {c.statLabel}
                </span>
              </div>
              <a href="#consultation" className="btn-primary" style={{ display: "inline-flex" }}>
                See How We Did It →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media(max-width:900px){
          .logo-grid { grid-template-columns: repeat(3,1fr) !important; }
          .story-card { grid-template-columns: 1fr !important; padding: 36px 28px !important; }
        }
        @media(max-width:560px){
          .logo-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}