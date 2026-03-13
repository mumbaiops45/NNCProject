"use client";

import { useState, useEffect, CSSProperties } from "react";
import Navbar from "@/app/components/Navbar";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = "#00C9A7";
const TD = "#00a07a";
const P = "#8B5CF6";
const G = "#10B981";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// Types
interface Solution {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface Compliance {
  region: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Office {
  flag: string;
  city: string;
  phone: string;
  email: string;
  tz: string;
}

interface FAQ {
  q: string;
  a: string;
}

export default function HealthcareIndustryPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dialCode: "+1",
    email: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState(0);
  const [faq, setFaq] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  // Client logos (using emoji placeholders - replace with actual images)
  const LOGOS = ["🏥", "⚕️", "💊", "🩺", "🏨", "🔬", "🧬", "🫀"];

  // Success stories data
  const SUCCESS_STORIES = [
    {
      icon: "🏥",
      title: "42% Increase in Repeat Bookings",
      description: "Multi-location clinic group implemented patient CRM with automated reminders and follow-ups.",
      metrics: [
        { label: "Bookings", value: "+42%", icon: "📅" },
        { label: "No-shows", value: "-67%", icon: "📉" },
        { label: "Satisfaction", value: "4.9★", icon: "⭐" }
      ]
    },
    {
      icon: "🩺",
      title: "55% Faster Patient Onboarding",
      description: "Digital intake forms and automated verification reduced admin time for a UK hospital.",
      metrics: [
        { label: "Onboarding", value: "-55%", icon: "⚡" },
        { label: "Errors", value: "-92%", icon: "✅" },
        { label: "ROI", value: "312%", icon: "💰" }
      ]
    },
    {
      icon: "💊",
      title: "2.8× Referral Conversion",
      description: "Referral management system for a Canadian specialty clinic with automated tracking.",
      metrics: [
        { label: "Conversion", value: "2.8×", icon: "📈" },
        { label: "Response", value: "-78%", icon: "⏱️" },
        { label: "Referrals", value: "+145%", icon: "🔄" }
      ]
    }
  ];

  // Healthcare solutions data
  const solutions: Solution[] = [
    {
      icon: "👥",
      title: "Patient Management CRM",
      description: "Purpose-built for businesses in Canada, USA & UK. Complete patient history, treatment tracking, and communication logs.",
      gradient: "linear-gradient(135deg, #00C9A7, #8B5CF6)"
    },
    {
      icon: "📅",
      title: "Appointment Booking System",
      description: "Purpose-built for businesses in Canada, USA & UK. Online scheduling, automated reminders, and calendar integration.",
      gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)"
    },
    {
      icon: "💻",
      title: "Telehealth & Patient Portal",
      description: "Purpose-built for businesses in Canada, USA & UK. Secure video consultations, messaging, and document sharing.",
      gradient: "linear-gradient(135deg, #EC4899, #F59E0B)"
    },
    {
      icon: "📱",
      title: "Healthcare Mobile Apps",
      description: "Purpose-built for businesses in Canada, USA & UK. iOS and Android apps for patients and healthcare providers.",
      gradient: "linear-gradient(135deg, #F59E0B, #3B82F6)"
    },
    {
      icon: "🔄",
      title: "Referral Management System",
      description: "Purpose-built for businesses in Canada, USA & UK. Track referrals, automate follow-ups, and measure conversion.",
      gradient: "linear-gradient(135deg, #3B82F6, #00C9A7)"
    },
    {
      icon: "📊",
      title: "Healthcare Analytics & Reporting",
      description: "Purpose-built for businesses in Canada, USA & UK. Real-time dashboards for patient outcomes and operational KPIs.",
      gradient: "linear-gradient(135deg, #00C9A7, #10B981)"
    },
    {
      icon: "🔗",
      title: "EMR/EHR Integration",
      description: "Purpose-built for businesses in Canada, USA & UK. Seamless integration with existing electronic medical record systems.",
      gradient: "linear-gradient(135deg, #10B981, #8B5CF6)"
    },
    {
      icon: "💬",
      title: "WhatsApp Patient Communication",
      description: "Purpose-built for businesses in Canada, USA & UK. Automated appointment reminders and two-way secure messaging.",
      gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)"
    },
    {
      icon: "☁️",
      title: "HIPAA-Compliant Cloud Storage",
      description: "Purpose-built for businesses in Canada, USA & UK. Encrypted storage with access controls and audit logging.",
      gradient: "linear-gradient(135deg, #EC4899, #F59E0B)"
    }
  ];

  // Compliance data
  const compliance: Compliance[] = [
    {
      region: "USA",
      title: "HIPAA",
      description: "All patient data encrypted in transit and at rest. Role-based access, audit logging, and BAA support.",
      icon: "🇺🇸",
      color: "#3B82F6"
    },
    {
      region: "Canada",
      title: "PIPEDA",
      description: "Systems built to comply with Canada's Personal Information Protection and Electronic Documents Act.",
      icon: "🇨🇦",
      color: "#F59E0B"
    },
    {
      region: "UK",
      title: "NHS Data Security",
      description: "Aligned with NHS DSPT requirements and UK GDPR for healthcare data.",
      icon: "🇬🇧",
      color: "#EC4899"
    }
  ];

  // Global offices
  const INT_OFFICES: Office[] = [
    { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX", email: "healthcare@nncdigital.com", tz: "EST / EDT" },
    { flag: "🇺🇸", city: "New York, USA", phone: "+1 631-XXX-XXXX", email: "healthcare@nncdigital.com", tz: "EST / EDT" },
    { flag: "🇬🇧", city: "London, UK", phone: "+44 20-XXXX-XXXX", email: "healthcare@nncdigital.com", tz: "GMT / BST" },
  ];

  // FAQ data
  const FAQS: FAQ[] = [
    {
      q: "How long does a healthcare CRM implementation take?",
      a: "A focused patient management system typically takes 8-14 weeks. This includes requirements gathering, development, compliance validation, and staff training. For UK clients, we align with NHS timelines; for Canadian clients, we ensure PIPEDA compliance throughout."
    },
    {
      q: "Are your systems HIPAA, PIPEDA, and NHS compliant?",
      a: "Yes. All healthcare systems we build are compliant by design. For US clients: HIPAA with BAA support. For Canadian clients: full PIPEDA compliance. For UK clients: NHS DSPT and UK GDPR alignment. We provide documentation and audit trails for regulatory review."
    },
    {
      q: "Can you integrate with our existing EMR/EHR?",
      a: "Absolutely. We've integrated with major EMR systems including Epic, Cerner, Allscripts, and custom hospital systems. Using HL7/FHIR standards, we ensure secure, real-time data exchange between your CRM and existing clinical systems."
    },
    {
      q: "What does a healthcare CRM cost in Canada or the UK?",
      a: "A comprehensive patient management CRM starts from CAD $25,000–$45,000 / £18,000–£32,000. This includes compliance features, appointment management, and patient portal. Enterprise systems with EMR integration and telehealth are scoped individually. All quotes include compliance validation."
    },
    {
      q: "Do you offer telehealth solutions?",
      a: "Yes. Our telehealth modules include secure video consultations, waiting room management, screen sharing, and digital prescriptions. All video data is encrypted end-to-end, and consultations can be recorded for clinical records (with patient consent)."
    }
  ];

  const DIAL_CODES = [
    { code: "+1", flag: "🇨🇦" },
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+91", flag: "🇮🇳" }
  ];

  const SERVICES_LIST = [
    "Patient Management CRM",
    "Appointment System",
    "Telehealth Portal",
    "Mobile App",
    "Referral System",
    "EMR Integration",
    "Compliance Consulting"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const setFormField = (k: string, v: string) => setFormData(f => ({ ...f, [k]: v }));

  // Responsive styles
  const sectionPadding = {
    mobile: "60px 20px",
    tablet: "80px 32px",
    desktop: "100px 48px"
  };

  const getSectionPadding = () => {
    if (isMobile) return sectionPadding.mobile;
    if (isTablet) return sectionPadding.tablet;
    return sectionPadding.desktop;
  };

  const getHeroFontSize = () => {
    if (isMobile) return "clamp(32px, 8vw, 40px)";
    if (isTablet) return "clamp(40px, 5vw, 48px)";
    return "clamp(48px, 5vw, 64px)";
  };

  const getSolutionsGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  // Base input styles
  const baseInputStyle: CSSProperties = {
    width: "100%",
    padding: isMobile ? "12px 14px" : "14px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    fontSize: isMobile ? "14px" : "15px",
    fontFamily: "'Poppins', sans-serif",
    outline: "none",
    transition: "all 0.3s ease"
  };

  const iS: CSSProperties = { ...baseInputStyle };

  const selectStyle: CSSProperties = {
    ...baseInputStyle,
    cursor: "pointer",
    appearance: "none" as const,
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300C9A7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 16px center",
    backgroundSize: "16px"
  };

  const optionStyle: CSSProperties = { background: N2, color: "#fff" };

  return (
    <>
      <Navbar />

      {/* MODULE 1 — HERO + INLINE FORM */}
      <section style={{
        padding: isMobile ? "80px 20px 60px" : isTablet ? "100px 32px 70px" : "120px 48px 80px",
        background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      }}>
        {/* Background medical pattern */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 20px 20px, ${T} 2px, transparent 2px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none"
        }} />

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "32px" : "48px",
          alignItems: "center",
          width: "100%"
        }}>
          {/* Left - Hero Text */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,201,167,0.1)",
              border: "1px solid rgba(0,201,167,0.3)",
              borderRadius: "100px",
              padding: isMobile ? "6px 16px" : "8px 20px",
              marginBottom: "24px"
            }}>
              <span style={{
                width: isMobile ? "6px" : "8px",
                height: isMobile ? "6px" : "8px",
                borderRadius: "50%",
                background: T,
                boxShadow: `0 0 10px ${T}`
              }} />
              <span style={{ color: T, fontSize: isMobile ? "12px" : "14px", fontWeight: 600 }}>
                HEALTHCARE TECHNOLOGY
              </span>
            </div>

            <h1 style={{
              fontSize: getHeroFontSize(),
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "24px",
              color: "#fff"
            }}>
              Digital Systems for{" "}
              <span style={{
                background: `linear-gradient(135deg, ${T}, ${P})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Healthcare Providers
              </span>{" "}
              in Canada, USA & UK
            </h1>

            <p style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: isMobile ? "15px" : "16px",
              lineHeight: 1.8,
              marginBottom: "32px"
            }}>
              Healthcare organisations face unique challenges — patient data privacy, appointment management, referral tracking, and regulatory compliance. We build custom digital systems that address these head-on.
            </p>

            {/* Trust badges */}
            <div style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap"
            }}>
              {[
                { icon: "🔒", label: "HIPAA Ready" },
                { icon: "🍁", label: "PIPEDA Compliant" },
                { icon: "🇬🇧", label: "NHS Aligned" },
                { icon: "🏆", label: "ISO Certified" }
              ].map((badge, i) => (
                <span key={i} style={{
                  padding: "6px 14px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "100px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                  fontWeight: 500
                }}>
                  {badge.icon} {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Lead Form */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "32px",
            padding: isMobile ? "24px 20px" : "32px",
            backdropFilter: "blur(10px)"
          }}>
            <h3 style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "24px"
            }}>
              Get a Free <span style={{ color: T }}>Consultation</span>
            </h3>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "30px 20px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏥</div>
                <h4 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>
                  Request Received!
                </h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "20px" }}>
                  A healthcare technology specialist will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
                  }}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "100px",
                    border: "none",
                    background: `linear-gradient(135deg, ${T}, ${P})`,
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer"
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <input
                  required
                  style={iS}
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={e => setFormField("name", e.target.value)}
                  onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                />

                <div style={{ display: "flex", gap: "8px", flexDirection: isMobile ? "column" : "row" }}>
                  <select
                    style={{ ...selectStyle, width: isMobile ? "100%" : "100px" }}
                    value={formData.dialCode}
                    onChange={e => setFormField("dialCode", e.target.value)}
                  >
                    {DIAL_CODES.map((d, i) => (
                      <option key={i} value={d.code} style={optionStyle}>
                        {d.flag} {d.code}
                      </option>
                    ))}
                  </select>
                  <input
                    required
                    type="tel"
                    style={{ ...iS, flex: 1 }}
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={e => setFormField("phone", e.target.value)}
                    onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <input
                  required
                  type="email"
                  style={iS}
                  placeholder="Business Email *"
                  value={formData.email}
                  onChange={e => setFormField("email", e.target.value)}
                  onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                />

                <select
                  required
                  style={selectStyle}
                  value={formData.service}
                  onChange={e => setFormField("service", e.target.value)}
                >
                  <option value="" style={optionStyle}>Service of Interest *</option>
                  {SERVICES_LIST.map((s, i) => (
                    <option key={i} value={s} style={optionStyle}>{s}</option>
                  ))}
                </select>

                <textarea
                  style={{ ...iS, minHeight: "100px", resize: "vertical" as const }}
                  placeholder="Tell us about your healthcare project..."
                  value={formData.message}
                  onChange={e => setFormField("message", e.target.value)}
                  onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                />

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "none",
                    background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg, ${T}, ${P})`,
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: loading ? "wait" : "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  {loading ? "Sending..." : "Get Free Healthcare Consultation →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MODULE 2 — OUR HAPPY CLIENTS + SUCCESS STORIES */}
      <section style={{
        padding: getSectionPadding(),
        background: N1
      }}>
        {/* Client Logos */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{
            fontSize: isMobile ? "24px" : "28px",
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            marginBottom: "32px"
          }}>
            Our <span style={{ color: T }}>Happy Clients</span>
          </h2>
          <div style={{
            display: "flex",
            gap: isMobile ? "16px" : "24px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                style={{
                  width: isMobile ? "60px" : "80px",
                  height: isMobile ? "60px" : "80px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isMobile ? "30px" : "40px",
                  color: T,
                  transition: "all 0.3s ease"
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <h2 style={{
            fontSize: isMobile ? "24px" : "28px",
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            marginBottom: "32px"
          }}>
            Healthcare <span style={{ color: T }}>Success Stories</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: "24px"
          }}>
            {SUCCESS_STORIES.map((story, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${hoveredCard === index ? T : "rgba(255,255,255,0.05)"}`,
                  borderRadius: "24px",
                  padding: "24px",
                  transition: "all 0.3s ease",
                  transform: hoveredCard === index && !isMobile ? "translateY(-8px)" : "translateY(0)"
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{story.icon}</div>
                <h3 style={{ color: T, fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>
                  {story.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                  {story.description}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {story.metrics.map((metric, i) => (
                    <div key={i} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "20px", marginBottom: "4px" }}>{metric.icon}</div>
                      <div style={{ color: T, fontSize: "16px", fontWeight: 700 }}>{metric.value}</div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 3 — DIGITAL SOLUTIONS WE BUILD */}
      <section style={{
        padding: getSectionPadding(),
        background: N2
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            marginBottom: "48px"
          }}>
            Healthcare <span style={{ color: T }}>Digital Solutions</span> We Build
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: getSolutionsGridColumns(),
            gap: "24px"
          }}>
            {solutions.map((solution, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index + 10)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${hoveredCard === index + 10 ? T : "rgba(255,255,255,0.05)"}`,
                  borderRadius: "24px",
                  padding: "28px",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: solution.gradient
                }} />
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>{solution.icon}</div>
                <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>
                  {solution.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 4 — COMPLIANCE & DATA SECURITY */}
      <section style={{
        padding: getSectionPadding(),
        background: `linear-gradient(135deg, ${N1} 0%, ${N0} 100%)`
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            marginBottom: "16px"
          }}>
            Built for Compliance in{" "}
            <span style={{
              background: `linear-gradient(135deg, ${T}, ${P})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Canada, USA & UK
            </span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "24px",
            marginTop: "48px"
          }}>
            {compliance.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${item.color}30`,
                  borderRadius: "24px",
                  padding: "32px 24px",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{item.icon}</div>
                <h3 style={{ color: item.color, fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginBottom: "16px" }}>
                  {item.region}
                </p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 5 — WHY CHOOSE US | GLOBAL PRESENCE | FAQS | CTA */}
      <section style={{
        padding: getSectionPadding(),
        background: N1
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Why Choose Us */}
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{
              fontSize: isMobile ? "28px" : "32px",
              fontWeight: 800,
              color: "#fff",
              textAlign: "center",
              marginBottom: "32px"
            }}>
              Why Choose <span style={{ color: T }}>NNC Digital</span> for Healthcare?
            </h2>

            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: isMobile ? "24px" : "40px",
              textAlign: "center"
            }}>
              <p style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: isMobile ? "16px" : "18px",
                lineHeight: 1.8,
                maxWidth: "800px",
                margin: "0 auto"
              }}>
                Backed by <strong style={{ color: T }}>Nakshatra Namaha Creations Pvt. Ltd.</strong> — 8+ years, 565+ projects. Dedicated client teams in Canada, USA, and UK. Fully compliant with HIPAA, PIPEDA, and NHS standards. Long-term partnership focused on your success.
              </p>
            </div>
          </div>

          {/* Global Presence */}
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{
              fontSize: isMobile ? "24px" : "28px",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              marginBottom: "32px"
            }}>
              Our <span style={{ color: T }}>Global Presence</span>
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "20px"
            }}>
              {INT_OFFICES.map((office, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "20px",
                    padding: "24px"
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "12px" }}>{office.flag}</div>
                  <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "4px" }}>
                    {office.city}
                  </h3>
                  <p style={{ color: T, fontSize: "12px", marginBottom: "16px" }}>{office.tz}</p>
                  <a href={`tel:${office.phone.replace(/\s|-/g, "")}`} style={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                    textDecoration: "none",
                    marginBottom: "8px"
                  }}>
                    📞 {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} style={{
                    color: T,
                    fontSize: "13px",
                    textDecoration: "none"
                  }}>
                    ✉️ {office.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{
              fontSize: isMobile ? "24px" : "28px",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              marginBottom: "32px"
            }}>
              Frequently Asked <span style={{ color: T }}>Questions</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {FAQS.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${faq === index ? T : "rgba(255,255,255,0.05)"}`,
                    borderRadius: "16px",
                    overflow: "hidden"
                  }}
                >
                  <button
                    onClick={() => setFaq(faq === index ? null : index)}
                    style={{
                      width: "100%",
                      padding: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                      fontSize: isMobile ? "14px" : "16px",
                      fontWeight: 600,
                      textAlign: "left",
                      cursor: "pointer"
                    }}
                  >
                    <span>{item.q}</span>
                    <span style={{ color: T, fontSize: "20px" }}>
                      {faq === index ? "−" : "+"}
                    </span>
                  </button>
                  {faq === index && (
                    <div style={{ padding: "0 20px 20px 20px" }}>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Form */}
          <div style={{
            background: `linear-gradient(135deg, ${T}10, ${P}10)`,
            border: `1px solid ${T}30`,
            borderRadius: "32px",
            padding: isMobile ? "32px 20px" : "48px",
            textAlign: "center"
          }}>
            <h2 style={{
              fontSize: isMobile ? "24px" : "32px",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "16px"
            }}>
              Ready to Build Your <span style={{ color: T }}>Healthcare Solution?</span>
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: isMobile ? "14px" : "16px",
              marginBottom: "32px"
            }}>
              Tell us about your project. We'll respond within 24 hours with a free consultation.
            </p>

            <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <input
                  required
                  style={iS}
                  placeholder="Full Name *"
                />
                <div style={{ display: "flex", gap: "8px", flexDirection: isMobile ? "column" : "row" }}>
                  <select style={{ ...selectStyle, width: isMobile ? "100%" : "100px" }}>
                    {DIAL_CODES.map((d, i) => (
                      <option key={i} value={d.code}>{d.flag} {d.code}</option>
                    ))}
                  </select>
                  <input style={{ ...iS, flex: 1 }} placeholder="Phone Number" />
                </div>
                <input style={iS} type="email" placeholder="Business Email" />
                <textarea style={{ ...iS, minHeight: "100px" }} placeholder="Project Description" />
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "none",
                    background: `linear-gradient(135deg, ${T}, ${P})`,
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: "pointer"
                  }}
                >
                  Submit — Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @media (hover: hover) {
          input:hover, select:hover, textarea:hover {
            border-color: ${T} !important;
          }
        }
      `}</style>
    </>
  );
}