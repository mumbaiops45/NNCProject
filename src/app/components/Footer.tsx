"use client";
import Link from "next/link";
import Image from "next/image";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  teal: "#00C9A7",
  tealDark: "#00a07a",
  navy0: "#010812",
  navy1: "#030B18",
  navy2: "#061425",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { label: "CRM Development", href: "/crm-development" },
  { label: "ERP Development", href: "/erp-development" },
  { label: "Web Development", href: "/web-development" },
  { label: "Mobile App Development", href: "/mobile-app-development" },
  { label: "Salesforce CRM", href: "/salesforce-crm" },
  { label: "Marketing Automation", href: "/marketing-automation" },
  { label: "SEO & Digital Marketing", href: "/seo-digital-marketing" },
  { label: "Digital Transformation", href: "/digital-transformation" },
  { label: "Hire CRM Developers", href: "/hire-crm-developers" },
];

const INDUSTRIES = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "E-Commerce", href: "/industries/ecommerce" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Professional Services", href: "/industries/professional-services" },
  { label: "Education", href: "/industries/education" },
  { label: "Logistics", href: "/industries/logistics" },
  { label: "Finance", href: "/industries/finance" },
  { label: "Hospitality", href: "/industries/hospitality" },
];

const COMPANY = [
  { label: "About NNC Digital", href: "/about-us" },
  { label: "About Nakshatra Namaha Creations", href: "https://www.nakshatranamahacreations.com", external: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Partner With Us", href: "/partner" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/nncdigital", icon: "in" },
  { label: "Twitter", href: "https://twitter.com/nncdigital", icon: "𝕏" },
  { label: "Instagram", href: "https://instagram.com/nncdigital", icon: "📷" },
  { label: "YouTube", href: "https://youtube.com/@nncdigital", icon: "▶" },
];

const CONTACTS = [
  { flag: "🇨🇦", country: "Canada", phone: "+1 647-XXX-XXXX" },
  { flag: "🇺🇸", country: "USA", phone: "+1 631-XXX-XXXX" },
  { flag: "🇬🇧", country: "UK", phone: "+44 20-XXXX-XXXX" },
  { flag: "🇮🇳", country: "India", phone: "+91 9900566466" },
];

const TRUST_BADGES = [
  "GDPR Compliant",
  "PIPEDA Compliant",
  "CCPA Ready",
  "ISO Certified"
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: `linear-gradient(180deg, ${T.navy0} 0%, #020810 100%)`,
      fontFamily: "'Poppins', sans-serif",
      borderTop: "1px solid rgba(255,255,255,.06)",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .footer-link {
          color: rgba(255,255,255,.6);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: color .2s ease, transform .2s ease;
          line-height: 1.8;
          display: inline-block;
        }
        .footer-link:hover { 
          color: ${T.teal}; 
          transform: translateX(4px);
        }
        .footer-heading {
          color: ${T.teal};
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .social-btn {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.7);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          font-size: 18px;
        }
        .social-btn:hover {
          background: ${T.teal}20;
          border-color: ${T.teal}60;
          color: ${T.teal};
          transform: translateY(-3px);
        }
        .footer-bottom-link {
          color: rgba(255,255,255,.4);
          font-size: 13px;
          text-decoration: none;
          transition: color .2s ease;
        }
        .footer-bottom-link:hover { color: ${T.teal}; }
        .badge {
          font-size: 11px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 100px;
          background: rgba(0,201,167,0.08);
          border: 1px solid rgba(0,201,167,0.2);
          color: ${T.teal};
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }
        .newsletter-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-size: 14px;
          font-family: 'Poppins', sans-serif;
          outline: none;
          transition: all 0.2s ease;
        }
        .newsletter-input:focus {
          border-color: ${T.teal};
          box-shadow: 0 0 0 2px ${T.teal}30;
        }
        .book-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, ${T.teal}, ${T.tealDark});
          color: #000;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 12px;
        }
        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px ${T.teal}40;
        }
        @keyframes footerGlow {
          0%,100% { opacity: .03; }
          50%      { opacity: .07; }
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
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

      {/* Main Footer - 5 Columns */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "70px 32px 50px", position: "relative", zIndex: 1 }}>
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1.5fr 1.2fr 1fr 1.5fr",
          gap: 30,
        }}>
          
          {/* COLUMN 1: Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Image
                src="/NNCLOGO.jpg"
                alt="NNC Digital Solutions"
                width={160}
                height={60}
                style={{ 
                  objectFit: "contain",
                  borderRadius: "10px",
                  marginBottom: "16px"
                }}
                priority={false}
              />
            </Link>
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "13px",
              lineHeight: 1.7,
              marginBottom: "16px"
            }}>
              A subsidiary of <strong style={{ color: T.teal }}>Nakshatra Namaha Creations Pvt. Ltd.</strong>
            </p>
            
            {/* Trust Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
              {TRUST_BADGES.map(badge => (
                <span key={badge} className="badge">{badge}</span>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "8px" }}>
              {SOCIALS.map(s => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  className="social-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Services */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {SERVICES.map(s => (
                <Link key={s.href} href={s.href} className="footer-link" style={{ marginBottom: "10px" }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Industries */}
          <div>
            <h3 className="footer-heading">Industries</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {INDUSTRIES.map(i => (
                <Link key={i.href} href={i.href} className="footer-link" style={{ marginBottom: "10px" }}>
                  {i.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 4: Company */}
          <div>
            <h3 className="footer-heading">Company</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {COMPANY.map(c => (
                c.external ? (
                  <a 
                    key={c.label} 
                    href={c.href} 
                    className="footer-link" 
                    style={{ marginBottom: "10px" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {c.label} <span style={{ fontSize: "12px", opacity: 0.6 }}>↗</span>
                  </a>
                ) : (
                  <Link key={c.href} href={c.href} className="footer-link" style={{ marginBottom: "10px" }}>
                    {c.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* COLUMN 5: Contact */}
          <div>
            <h3 className="footer-heading">Contact</h3>
            
            {/* Phone numbers */}
            <div style={{ marginBottom: "16px" }}>
              {CONTACTS.map(c => (
                <div key={c.country} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px",
                  marginBottom: "10px"
                }}>
                  <span style={{ fontSize: "16px" }}>{c.flag}</span>
                  <span style={{ 
                    fontSize: "11px", 
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    width: "45px"
                  }}>
                    {c.country}:
                  </span>
                  <a href={`tel:${c.phone.replace(/\s|-/g, "")}`} style={{
                    color: T.teal,
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none"
                  }}>
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>

            {/* Email */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px",
              marginBottom: "20px"
            }}>
              <span style={{ fontSize: "16px" }}>✉️</span>
              <a href="mailto:hello@nncdigital.com" style={{
                color: T.teal,
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none"
              }}>
                hello@nncdigital.com
              </a>
            </div>

            {/* Book a Free Call Button */}
            <Link href="/contact">
              <button className="book-btn">
                Book a Free Call →
              </button>
            </Link>

            {/* Newsletter */}
            <div style={{ marginTop: "20px" }}>
              <h4 style={{
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "10px"
              }}>
                Newsletter
              </h4>
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="newsletter-input"
                />
                <button style={{
                  padding: "0 16px",
                  borderRadius: "10px",
                  border: "none",
                  background: T.teal,
                  color: "#000",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,.06)", margin: "0 32px" }} />

      {/* Footer Bottom Bar */}
      <div style={{ 
        maxWidth: 1280, 
        margin: "0 auto", 
        padding: "24px 32px",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px"
        }}>
          {/* Copyright */}
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            © {year} NNC Digital Solutions. All rights reserved. | A{" "}
            <a 
              href="https://www.nakshatranamahacreations.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: T.teal, textDecoration: "none" }}
            >
              Nakshatra Namaha Creations Pvt. Ltd.
            </a> Company
          </div>

          {/* Legal Links */}
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <Link href="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-bottom-link">Terms of Service</Link>
            <Link href="/cookies" className="footer-bottom-link">Cookie Policy</Link>
            <Link href="/sitemap" className="footer-bottom-link">Sitemap</Link>
          </div>
        </div>

        {/* Serving regions */}
        <div style={{
          marginTop: "16px",
          fontSize: "12px",
          color: "rgba(255,255,255,0.3)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap"
        }}>
          <span>🌍</span>
          <span>Serving businesses in Canada, United States, United Kingdom, UAE & Australia.</span>
        </div>
      </div>
    </footer>
  );
} 