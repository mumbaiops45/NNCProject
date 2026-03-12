"use client";
import Image from "next/image";
import { T } from "./tokens";
import Reveal from "./Reveal";

const NAV_LINKS = [
  { label: "Home",            href: "#" },
  { label: "Services",        href: "#services" },
  { label: "Why Us",          href: "#why-us" },
  { label: "Industries",      href: "#industries" },
  { label: "Process",         href: "#process" },
  { label: "Pricing",         href: "#pricing" },
  { label: "Blog",            href: "#blog" },
  { label: "Contact",         href: "#contact" },
];

const SERVICES = [
  "Custom CRM Development",
  "ERP Integration",
  "Workflow Automation",
  "AI & Forecasting Layers",
  "Mobile App Development",
  "GDPR / PIPEDA / CCPA Compliance",
  "Post-Launch Support & Retainers",
];

const SOCIALS = [
  { label: "LinkedIn",  href: "#", icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )},
  { label: "Twitter/X", href: "#", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
  { label: "Instagram", href: "#", icon: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )},
  { label: "Facebook",  href: "#", icon: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )},
];

const REGIONS = [
  { flag: "🇺🇸", label: "USA",    value: "+1 631-XXX-XXXX" },
  { flag: "🇨🇦", label: "Canada", value: "+1 647-XXX-XXXX" },
  { flag: "🇬🇧", label: "UK",     value: "+44 20-XXX-XXXX" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: `linear-gradient(180deg, ${T.navy0} 0%, #020810 100%)`,
      fontFamily: "'Outfit', sans-serif",
      borderTop: "1px solid rgba(255,255,255,.06)",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .footer-link {
          color: rgba(255,255,255,.45);
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          transition: color .2s ease;
          line-height: 1;
        }
        .footer-link:hover { color: #00C9A7; }
        .social-btn {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.5);
          cursor: pointer;
          transition: background .2s ease, color .2s ease, border-color .2s ease, transform .2s ease;
          text-decoration: none;
        }
        .social-btn:hover {
          background: rgba(0,201,167,.12);
          border-color: rgba(0,201,167,.4);
          color: #00C9A7;
          transform: translateY(-2px);
        }
        .footer-bottom-link {
          color: rgba(255,255,255,.3);
          font-size: 12.5px;
          text-decoration: none;
          transition: color .2s ease;
        }
        .footer-bottom-link:hover { color: rgba(255,255,255,.7); }
        .newsletter-inp:focus { border-color: rgba(0,201,167,.6) !important; outline: none; }
        @keyframes footerGlow {
          0%,100% { opacity: .03; }
          50%      { opacity: .07; }
        }
      `}</style>

      {/* Background glow orbs */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, ${T.teal}18 0%, transparent 70%)`,
        top: -200, left: -150, pointerEvents: "none",
        animation: "footerGlow 6s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${T.tealDark}14 0%, transparent 70%)`,
        bottom: -100, right: -80, pointerEvents: "none",
        animation: "footerGlow 8s ease-in-out infinite",
        animationDelay: "2s",
      }} />

      {/* Main body */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 48px 56px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1.2fr",
          gap: 52,
        }}>

          {/* Col 1 — Brand */}
          <Reveal>
            <div>

              {/* Parent company label */}
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "rgba(255,255,255,.3)",
                marginBottom: 10, margin: 0,
              }}> Nakshatra Namaha Creations Company</p>

              {/* Logo image — prominent, below the name */}
              <div style={{
                width: 250,
                height: 100,
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid rgba(0,201,167,.25)`,
                boxShadow: `0 0 32px rgba(0,201,167,.15), 0 8px 32px rgba(0,0,0,.5)`,
                position: "relative",
                marginTop: 16,
                marginBottom: 24,
              }}>
                <Image
                  src="/NNCLOGO.jpg"
                  alt="NNC Digital Solutions"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <p style={{
                color: "rgba(255,255,255,.38)", fontSize: 13.5, lineHeight: 1.85,
                marginBottom: 28, maxWidth: 300,
              }}>
                We build custom CRM, ERP, and automation software that fits your business — not the other way around. Serving clients across Canada, USA, and UK.
              </p>

              {/* Region contacts */}
              <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 28 }}>
                {REGIONS.map(r => (
                  <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 15 }}>{r.flag}</span>
                    <span style={{
                      fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,.28)",
                      textTransform: "uppercase", letterSpacing: "0.08em", width: 48,
                    }}>{r.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: T.teal }}>{r.value}</span>
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 15 }}>✉️</span>
                  <span style={{
                    fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,.28)",
                    textTransform: "uppercase", letterSpacing: "0.08em", width: 48,
                  }}>Email</span>
                  <a href="mailto:hello@nncdigital.com" className="footer-link"
                    style={{ fontSize: 13, fontWeight: 600, color: T.teal }}>
                    hello@nncdigital.com
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: 10 }}>
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Col 2 — Navigation */}
          <Reveal delay={0.08}>
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: T.teal, marginBottom: 22,
              }}>Navigation</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                {NAV_LINKS.map(l => (
                  <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Col 3 — Services */}
          <Reveal delay={0.14}>
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: T.teal, marginBottom: 22,
              }}>Services</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                {SERVICES.map(s => (
                  <a key={s} href="#services" className="footer-link">{s}</a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Col 4 — Newsletter */}
          <Reveal delay={0.2}>
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: T.teal, marginBottom: 22,
              }}>Stay in the Loop</p>
              <p style={{
                color: "rgba(255,255,255,.38)", fontSize: 13.5, lineHeight: 1.8, marginBottom: 20,
              }}>
                Get monthly insights on CRM trends, automation, and digital growth straight to your inbox.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <input
                  type="email"
                  placeholder="Your business email"
                  className="newsletter-inp"
                  style={{
                    width: "100%", borderRadius: 8, padding: "12px 14px",
                    fontSize: 13, fontFamily: "'Outfit',sans-serif",
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.1)",
                    color: "#fff", outline: "none",
                    boxSizing: "border-box" as const,
                    transition: "border-color .2s ease",
                  }}
                />
                <button
                  style={{
                    width: "100%", padding: "12px 0", borderRadius: 8, border: "none",
                    background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
                    color: "#000", fontWeight: 700, fontSize: 13.5,
                    fontFamily: "'Outfit',sans-serif", cursor: "pointer",
                    transition: "opacity .2s ease, transform .2s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.opacity = "0.88";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Subscribe →
                </button>
              </div>

              {/* Compliance badges */}
              <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                {["GDPR Ready", "PIPEDA Compliant", "CCPA Compliant"].map(badge => (
                  <span key={badge} style={{
                    fontSize: 10.5, fontWeight: 700, color: T.teal,
                    background: "rgba(0,201,167,.07)",
                    border: "1px solid rgba(0,201,167,.2)",
                    padding: "5px 11px", borderRadius: 20,
                    letterSpacing: "0.06em",
                  }}>{badge}</span>
                ))}
              </div>

              {/* Trust block */}
              <div style={{
                marginTop: 24, padding: "14px 16px", borderRadius: 12,
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.07)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 22 }}>🏆</span>
                <p style={{
                  fontSize: 12, color: "rgba(255,255,255,.4)",
                  lineHeight: 1.5, margin: 0,
                }}>
                  <span style={{ color: "rgba(255,255,255,.75)", fontWeight: 700 }}>Fixed-price delivery.</span>{" "}
                  No hourly billing surprises. Ever.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,.06)", margin: "0 48px" }} />

      {/* Bottom bar */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "22px 48px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap" as const, gap: 12,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.22)", margin: 0 }}>
              © {year} NNC Digital Solutions · A Nakshatra Namaha Creations Company · All rights reserved.
            </p>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
}