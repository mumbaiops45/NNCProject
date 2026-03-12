"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REGIONS = [
  {
    id: "north-america",
    label: "North America",
    flag: "🌎",
    offices: [
      { city: "Toronto, Canada",  flag: "🇨🇦", phone: "+1 647-XXX-XXXX",    role: "Head Office — North America" },
      { city: "New York, USA",    flag: "🇺🇸", phone: "+1 631-XXX-XXXX",    role: "US Operations"               },
    ],
    mapHint: "Canada & United States",
    color: "#00C9A7",
  },
  {
    id: "emea",
    label: "EMEA",
    flag: "🌍",
    offices: [
      { city: "London, UK",       flag: "🇬🇧", phone: "+44 20-XXXX-XXXX",   role: "UK & Europe Hub"             },
    ],
    mapHint: "United Kingdom & Europe",
    color: "#1fd1b5",
  },
  {
    id: "india",
    label: "India (HQ)",
    flag: "🇮🇳",
    offices: [
      { city: "Bangalore",        flag: "🇮🇳", phone: "+91 9900566466",      role: "Global HQ · Engineering Hub" },
      { city: "Mysore, Karnataka",flag: "🇮🇳", phone: "",                   role: "Development Centre"          },
      { city: "Mumbai, Maharashtra", flag: "🇮🇳", phone: "",                role: "West India Office"           },
      { city: "Hyderabad, Telangana", flag: "🇮🇳", phone: "",              role: "South India Office"          },
    ],
    mapHint: "India · Bangalore HQ",
    color: "#00a07a",
  },
];

export default function GlobalPresence() {
  const [active, setActive] = useState(0);
  const region = REGIONS[active];

  return (
    <section
      id="global-presence"
      style={{
        position: "relative", padding: "110px 0", overflow: "hidden",
        background: "linear-gradient(180deg, #040d1c 0%, #030B18 100%)",
      }}
    >
      {/* Bg decorations */}
      <div className="bg-grid" style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.5, pointerEvents: "none" }} />
      <div style={{
        position: "absolute", right: "5%", bottom: "10%",
        width: 600, height: 600, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(0,201,167,0.06) 0%, transparent 65%)",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="section-label" style={{ justifyContent: "center" }}>
            Where We Operate
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="section-heading">
            Global <span className="grad-text">Presence</span>
          </motion.h2>
        </div>

        {/* Tab buttons */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 8, marginBottom: 52,
          background: "rgba(6,20,37,0.7)",
          border: "1px solid rgba(0,201,167,0.12)",
          borderRadius: 14, padding: 6,
          backdropFilter: "blur(12px)",
          width: "fit-content", margin: "0 auto 52px",
        }}>
          {REGIONS.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActive(i)}
              style={{
                padding: "12px 28px", borderRadius: 10, cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
                border: "none", transition: "all 0.25s",
                background: i === active
                  ? `linear-gradient(135deg, ${r.color}22, ${r.color}10)`
                  : "transparent",
                color: i === active ? r.color : "rgba(255,255,255,0.45)",
                boxShadow: i === active ? `0 0 0 1px ${r.color}40` : "none",
              }}
            >
              <span style={{ marginRight: 7 }}>{r.flag}</span>
              {r.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "start",
            }}
            className="presence-grid"
          >
            {/* Left — office cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {region.offices.map((office, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 18,
                    background: "rgba(6,20,37,0.85)",
                    border: `1px solid ${region.color}20`,
                    borderRadius: 14, padding: "22px 26px",
                    backdropFilter: "blur(16px)",
                    transition: "border-color 0.3s",
                  }}
                  whileHover={{ borderColor: `${region.color}50` }}
                >
                  {/* Flag circle */}
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                    background: `${region.color}15`,
                    border: `1.5px solid ${region.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22,
                  }}>
                    {office.flag}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: 16, color: "#fff", marginBottom: 3,
                    }}>
                      {office.city}
                    </p>
                    <p style={{
                      color: "rgba(255,255,255,0.4)", fontSize: 12.5,
                      fontFamily: "var(--font-body)", marginBottom: office.phone ? 6 : 0,
                    }}>
                      {office.role}
                    </p>
                    {office.phone && (
                      <a href={`tel:${office.phone}`} style={{
                        color: region.color, fontSize: 13.5, fontFamily: "var(--font-body)",
                        fontWeight: 600, textDecoration: "none", display: "inline-flex",
                        alignItems: "center", gap: 6,
                      }}>
                        📞 {office.phone}
                      </a>
                    )}
                  </div>
                  {/* Active dot */}
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: region.color,
                    boxShadow: `0 0 8px ${region.color}`,
                    animation: "pulse-glow 2s ease-in-out infinite",
                  }} />
                </motion.div>
              ))}
            </div>

            {/* Right — visual map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                borderRadius: 20, overflow: "hidden",
                background: "rgba(6,20,37,0.85)",
                border: `1px solid ${region.color}20`,
                aspectRatio: "4/3",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                position: "relative",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Decorative world-map grid */}
              <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.06 }}
                viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                {Array.from({ length: 20 }).map((_, r) =>
                  Array.from({ length: 30 }).map((_, c) => (
                    <circle key={`${r}-${c}`} cx={c * 14 + 7} cy={r * 16 + 8}
                      r={1} fill={region.color} />
                  ))
                )}
              </svg>

              <div style={{ position: "relative", textAlign: "center", padding: 32 }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>{region.flag}</div>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 20, color: "#fff", marginBottom: 8,
                }}>
                  {region.mapHint}
                </p>
                <p style={{
                  color: "rgba(255,255,255,0.4)", fontSize: 13,
                  fontFamily: "var(--font-body)", marginBottom: 24,
                }}>
                  {region.offices.length} office{region.offices.length > 1 ? "s" : ""} · Active
                </p>
                <a href="#consultation" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  color: region.color, fontSize: 13.5, fontWeight: 600,
                  fontFamily: "var(--font-body)", textDecoration: "none",
                  border: `1px solid ${region.color}30`,
                  borderRadius: 8, padding: "9px 20px",
                  background: `${region.color}10`,
                  transition: "all 0.2s",
                }}>
                  Contact This Office →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media(max-width:900px){
          .presence-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}