"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "1500+", label: "Web Projects",   icon: "🌐" },
  { value: "500+",  label: "Mobile Apps",    icon: "📱" },
  { value: "1800+", label: "IT Talents",     icon: "👨‍💻" },
  { value: "25+",   label: "Industries",     icon: "🏭" },
];

const PILLARS = [
  { icon: "🏆", title: "8+ Years of Proven Excellence",   desc: "565+ projects delivered across India through Nakshatra Namaha Creations Pvt. Ltd. — our parent studio in Bangalore." },
  { icon: "🌍", title: "International Arm. Local Trust.",  desc: "NNC Digital is our dedicated international division serving Canada, USA, and the UK with Western-standard accountability." },
  { icon: "⚙️", title: "End-to-End Ownership",            desc: "From discovery to deployment to post-launch support — one team, one contract, zero hand-off surprises." },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="why-choose-us"
      style={{
        position: "relative", padding: "110px 0", overflow: "hidden",
        background: "linear-gradient(180deg, #030B18 0%, #040d1c 100%)",
      }}
    >
      {/* Grid bg */}
      <div className="bg-grid" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      {/* Left glow */}
      <div style={{
        position: "absolute", left: "-5%", top: "30%",
        width: 500, height: 500, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(0,201,167,0.07) 0%, transparent 65%)",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="why-cus-grid">

          {/* ── LEFT: Text ── */}
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }} className="section-label">
              Our Background
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="section-heading" style={{ marginBottom: 20 }}>
              Why Choose Us as Your{" "}
              <span className="grad-text">CRM Software Development Agency?</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              style={{
                color: "rgba(255,255,255,0.58)", fontSize: 15.5, lineHeight: 1.8,
                fontFamily: "var(--font-body)", marginBottom: 36,
              }}>
              NNC Digital Solutions is backed by{" "}
              <span style={{ color: "#00C9A7", fontWeight: 600 }}>
                Nakshatra Namaha Creations Pvt. Ltd.
              </span>{" "}
              — one of Bangalore&apos;s most respected digital studios with 8+ years of experience and{" "}
              <span style={{ color: "#fff", fontWeight: 600 }}>565+ projects delivered</span>{" "}
              across India. To serve growing businesses in North America and the United Kingdom,
              we launched NNC Digital as our international arm — bringing the same proven technical
              expertise and client-first culture to the Canadian, US, and UK markets.
            </motion.p>

            {/* Pillar cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PILLARS.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.28 + i * 0.1, duration: 0.55 }}
                  whileHover={{ x: 4, borderColor: "rgba(0,201,167,0.3)" }}
                  style={{
                    display: "flex", gap: 16, alignItems: "flex-start",
                    background: "rgba(6,20,37,0.75)",
                    border: "1px solid rgba(0,201,167,0.1)",
                    borderRadius: 13, padding: "18px 20px",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  }}>
                  <div style={{
                    fontSize: 20, flexShrink: 0, width: 42, height: 42,
                    borderRadius: 10, background: "rgba(0,201,167,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: 14.5, color: "#fff", marginBottom: 4,
                    }}>
                      {p.title}
                    </p>
                    <p style={{
                      color: "rgba(255,255,255,0.48)", fontSize: 13,
                      fontFamily: "var(--font-body)", lineHeight: 1.65,
                    }}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Founder video + stats ── */}
          <div>
            {/* Video placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: "relative", borderRadius: 20, overflow: "hidden",
                border: "1px solid rgba(0,201,167,0.2)",
                background: "rgba(6,20,37,0.9)",
                marginBottom: 28,
                boxShadow: "0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,201,167,0.08)",
              }}
            >
              {/* Replace src with your actual video embed or <video> tag */}
              <div style={{
                aspectRatio: "16/9",
                background: "linear-gradient(135deg, #061425 0%, #030B18 100%)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 16,
              }}>
                {/* Play button */}
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "linear-gradient(135deg, #00C9A7, #00a07a)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 40px rgba(0,201,167,0.4)",
                  cursor: "pointer",
                }}>
                  <div style={{
                    width: 0, height: 0, marginLeft: 5,
                    borderTop: "14px solid transparent",
                    borderBottom: "14px solid transparent",
                    borderLeft: "22px solid #000",
                  }} />
                </div>
                <p style={{
                  color: "rgba(255,255,255,0.4)", fontSize: 13,
                  fontFamily: "var(--font-body)", letterSpacing: "0.05em",
                }}>
                  Founder&apos;s Message — [Add your video here]
                </p>
              </div>

              {/* Overlay label */}
              <div style={{
                position: "absolute", bottom: 16, left: 16,
                background: "rgba(3,11,24,0.85)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,201,167,0.2)",
                borderRadius: 10, padding: "10px 16px",
              }}>
                <p style={{
                  color: "#fff", fontSize: 14, fontWeight: 700,
                  fontFamily: "var(--font-display)", marginBottom: 2,
                }}>
                  Nakshatra Namaha Creations
                </p>
                <p style={{ color: "#00C9A7", fontSize: 11.5, fontFamily: "var(--font-body)" }}>
                  Bangalore, India · Est. 2016
                </p>
              </div>
            </motion.div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {STATS.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.08 }}
                  style={{
                    textAlign: "center", padding: "18px 10px",
                    background: "rgba(6,20,37,0.7)",
                    border: "1px solid rgba(0,201,167,0.12)",
                    borderRadius: 12, backdropFilter: "blur(10px)",
                  }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                  <div className="grad-text" style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: 22, lineHeight: 1, marginBottom: 5,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    color: "rgba(255,255,255,0.45)", fontSize: 11,
                    fontFamily: "var(--font-body)", lineHeight: 1.4,
                  }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .why-cus-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
        }
      `}</style>
    </section>
  );
}