"use client";

const TEAL = "#00C9A7";
const TEAL_DARK = "#00a07a";
import Link from "next/link";

const SERVICES = [
  {
    icon: "🗂️",
    title: "CRM Consulting",
    desc: "Expert CRM consulting tailored for your North American and UK market.",
    tag: "Strategy",
  },
  {
    icon: "⚙️",
    title: "CRM Implementation",
    desc: "End-to-end CRM setup, configuration, and launch aligned to your business goals.",
    tag: "Setup",
  },
  {
    icon: "🎛️",
    title: "CRM Customization",
    desc: "Custom CRM solutions tailored for your exact workflow and data model.",
    tag: "Custom",
  },
  {
    icon: "🌐",
    title: "CRM Portal Development",
    desc: "Build client-facing portals and self-service dashboards integrated with your CRM.",
    tag: "Development",
  },
  {
    icon: "🚀",
    title: "CRM Deployment",
    desc: "Administer technology, people, and processes for CRM success.",
    tag: "Deployment",
  },
  {
    icon: "📱",
    title: "CRM Mobile App Dev",
    desc: "Native and cross-platform mobile CRM apps for your field and remote teams.",
    tag: "Mobile",
  },
  {
    icon: "🎨",
    title: "CRM UI/UX Design",
    desc: "User-friendly interfaces for modern customer expectations.",
    tag: "Design",
  },
  {
    icon: "🔗",
    title: "CRM Integration Services",
    desc: "Seamlessly connect your CRM with ERP, marketing, and third-party tools.",
    tag: "Integration",
  },
  {
    icon: "🔄",
    title: "CRM Migration Services",
    desc: "Securely transfer data from legacy systems with zero loss.",
    tag: "Migration",
  },
  {
    icon: "💼",
    title: "IT Mgmt Consulting",
    desc: "Strategic IT management and advisory services for growing businesses.",
    tag: "Consulting",
  },
  {
    icon: "🔁",
    title: "Digital Transformation",
    desc: "End-to-end execution of your digital transformation roadmap.",
    tag: "Transformation",
  },
  {
    icon: "🤖",
    title: "Marketing Automation",
    desc: "Automate lead nurturing, campaigns, and customer journeys at scale.",
    tag: "Automation",
  },
];

export default function ServicesSection() {
  return (
    <section style={{
      padding: "40px 48px 48px",
      background: "linear-gradient(180deg, #030B18 0%, #061425 60%, #030B18 100%)",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Poppins', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        /* Background grid */
        .svc-section-bg {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(0,201,167,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,201,167,.025) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        /* Card */
        .svc-card {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          cursor: default;
          overflow: hidden;
        }
        .svc-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(0,201,167,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0,201,167,0.35);
          background: rgba(0,201,167,0.04);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,201,167,0.1);
        }
        .svc-card:hover::before { opacity: 1; }

        /* Top accent line on hover */
        .svc-card::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${TEAL}, transparent);
          border-radius: 18px 18px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .svc-card:hover::after { opacity: 1; }

        /* Icon */
        .svc-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(0,201,167,0.1);
          border: 1px solid rgba(0,201,167,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
          transition: background 0.3s, transform 0.3s;
        }
        .svc-card:hover .svc-icon {
          background: rgba(0,201,167,0.18);
          transform: scale(1.08);
        }

        /* Tag */
        .svc-tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${TEAL};
          background: rgba(0,201,167,0.08);
          border: 1px solid rgba(0,201,167,0.18);
          width: fit-content;
        }

        /* Arrow */
        .svc-arrow {
          margin-top: auto;
          display: inline-flex; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.3);
          font-size: 13px; font-weight: 600;
          transition: color 0.2s, gap 0.2s;
        }
        .svc-card:hover .svc-arrow {
          color: ${TEAL};
          gap: 10px;
        }

        /* Grid */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Fade-in on load */
        @keyframes svcFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-card-anim {
          animation: svcFadeUp 0.6s ease both;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-section { padding: 64px 20px !important; }
        }
      `}</style>

      {/* BG grid */}
      <div className="svc-section-bg" />

      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,201,167,0.06) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)",
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
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: TEAL, display: "block",
              boxShadow: `0 0 8px ${TEAL}`,
            }} />
            <span style={{
              color: TEAL, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
            }}>
              What We Build
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(26px, 3vw, 42px)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 16,
          }}>
            CRM Services{" "}
            <span style={{
              background: `linear-gradient(135deg, ${TEAL}, #1fd1b5)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              We Offer
            </span>
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 16, lineHeight: 1.75,
            maxWidth: 580, margin: "0 auto",
            fontWeight: 400,
          }}>
            We offer a comprehensive lineup of CRM and digital solutions for clients across Canada, USA & UK.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="svc-grid">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className="svc-card svc-card-anim"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                <div className="svc-icon">{svc.icon}</div>
                <span className="svc-tag">{svc.tag}</span>
              </div>

              <h3 style={{
                fontSize: 17, fontWeight: 700, color: "#fff",
                lineHeight: 1.3, margin: 0,
              }}>
                {svc.title}
              </h3>

              <p style={{
                fontSize: 13.5, color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7, margin: 0, fontWeight: 400,
              }}>
                {svc.desc}
              </p>

              <span className="svc-arrow">
                Learn More <span>→</span>
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Link href="/crm-development">
            <button style={{
              padding: "14px 36px", borderRadius: 10,
              background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`,
              border: "none", color: "#000", fontWeight: 700,
              fontSize: 15, fontFamily: "'Poppins', sans-serif",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 36px rgba(0,201,167,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              View CRM Development →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}