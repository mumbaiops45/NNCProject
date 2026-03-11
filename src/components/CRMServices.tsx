"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SERVICES = [
  {
    icon: "🧭",
    title: "CRM Consulting",
    desc: "Expert CRM consulting tailored for your North American and UK market.",
  },
  {
    icon: "⚙️",
    title: "CRM Implementation",
    desc: "End-to-end CRM deployment with configuration, data migration, and team onboarding.",
  },
  {
    icon: "🎨",
    title: "CRM Customization",
    desc: "Custom CRM solutions tailored for your exact workflow and data model.",
  },
  {
    icon: "🌐",
    title: "CRM Portal Development",
    desc: "Build client-facing portals that integrate seamlessly with your CRM backend.",
  },
  {
    icon: "🚀",
    title: "CRM Deployment",
    desc: "Administer technology, people, and processes for CRM success.",
  },
  {
    icon: "📱",
    title: "CRM Mobile App Dev",
    desc: "Native and cross-platform mobile CRM apps for field and remote teams.",
  },
  {
    icon: "🖥️",
    title: "CRM UI/UX Design",
    desc: "User-friendly interfaces for modern customer expectations.",
  },
  {
    icon: "🔗",
    title: "CRM Integration Services",
    desc: "Connect your CRM with marketing, billing, ERP, and communication tools.",
  },
  {
    icon: "🔄",
    title: "CRM Migration Services",
    desc: "Securely transfer data from legacy systems with zero loss.",
  },
  {
    icon: "🛡️",
    title: "IT Mgmt Consulting",
    desc: "Strategic IT consulting to align your technology stack with business goals.",
  },
  {
    icon: "🔮",
    title: "Digital Transformation",
    desc: "End-to-end execution of your digital transformation roadmap.",
  },
  {
    icon: "📣",
    title: "Marketing Automation",
    desc: "Automate campaigns, nurture sequences, and lead flows inside your CRM.",
  },
];

export default function CRMServices() {
  return (
    <section
      id="crm-services"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 0",
        background: "linear-gradient(180deg, #030B18 0%, #040e1f 100%)",
      }}
    >
      {/* Grid bg */}
      <div
        className="bg-grid"
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      />

      {/* Top glow */}
      <div
        style={{
          position: "absolute", top: -100, left: "50%",
          transform: "translateX(-50%)", width: 800, height: 400,
          borderRadius: "50%", pointerEvents: "none", zIndex: 0,
          background: "radial-gradient(ellipse,rgba(0,201,167,0.07) 0%,transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: 1240, margin: "0 auto",
          padding: "0 48px", position: "relative", zIndex: 2,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 72px" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
            style={{ justifyContent: "center" }}
          >
            What We Deliver
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="section-heading"
            style={{ marginBottom: 18 }}
          >
            CRM Services{" "}
            <span className="grad-text">We Offer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{
              color: "rgba(255,255,255,0.55)", fontSize: 16.5,
              lineHeight: 1.75, fontFamily: "var(--font-body)",
            }}
          >
            We offer a comprehensive lineup of CRM and digital solutions for clients,
            as listed below.
          </motion.p>
        </div>

        {/* 3-column card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
          className="crm-services-grid"
        >
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, borderColor: "rgba(0,201,167,0.4)" }}
              style={{
                position: "relative", overflow: "hidden",
                borderRadius: 16, padding: "30px 28px",
                background: "rgba(6,20,37,0.85)",
                border: "1px solid rgba(0,201,167,0.12)",
                transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                cursor: "default",
              }}
            >
              {/* Corner glow */}
              <div
                style={{
                  position: "absolute", top: 0, right: 0,
                  width: 100, height: 100, pointerEvents: "none",
                  background: "radial-gradient(circle at top right,rgba(0,201,167,0.08),transparent 65%)",
                }}
              />
              {/* Number badge */}
              <div
                style={{
                  position: "absolute", top: 18, right: 20,
                  fontSize: 11, fontWeight: 700, color: "rgba(0,201,167,0.3)",
                  fontFamily: "var(--font-display)", letterSpacing: "0.06em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div style={{ fontSize: 30, marginBottom: 14 }}>{svc.icon}</div>

              <h3
                style={{
                  fontFamily: "var(--font-display)", fontSize: 17,
                  fontWeight: 700, color: "#fff",
                  marginBottom: 10, lineHeight: 1.3,
                }}
              >
                {svc.title}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.52)", fontSize: 13.5,
                  lineHeight: 1.7, fontFamily: "var(--font-body)",
                }}
              >
                {svc.desc}
              </p>

              {/* Bottom accent line on hover */}
              <div
                style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 2, borderRadius: "0 0 16px 16px",
                  background: "linear-gradient(90deg,transparent,#00C9A7,transparent)",
                  opacity: 0, transition: "opacity 0.3s",
                }}
                className="card-line"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ textAlign: "center", marginTop: 60 }}
        >
          <Link href="#consultation" className="btn-primary" style={{ fontSize: 15, padding: "15px 34px" }}>
            Discuss Your CRM Project →
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:900px){ .crm-services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:560px){ .crm-services-grid { grid-template-columns: 1fr !important; } }
        .crm-services-grid > div:hover .card-line { opacity: 1 !important; }
      `}</style>
    </section>
  );
}