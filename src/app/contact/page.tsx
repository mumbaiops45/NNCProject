

"use client";

import { useState, useEffect, CSSProperties } from "react";
import Navbar from "../components/Navbar";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// Types
interface FAQItem { q: string; a: string; }
interface Office { country: string; city: string; address: string; phone: string; email: string; }
interface DialCode { code: string; flag: string; country: string; }

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", dialCode: "+1",
    email: "", company: "", service: "", project: "", timeline: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  const toggleFAQ = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const setFormField = (k: string, v: string) => setFormData(f => ({ ...f, [k]: v }));

  const faqs: FAQItem[] = [
    {
      q: "Do you work with businesses outside of India?",
      a: "Yes. NNC Digital Solutions is specifically built for Canada, the United States, and the United Kingdom. Our client-facing teams operate in North American and UK time zones."
    },
    {
      q: "What happens after I submit the contact form?",
      a: "A dedicated project consultant reviews your submission and responds within 24 business hours with thoughts, relevant case studies, and a proposed next step."
    },
    {
      q: "Is the initial consultation free?",
      a: "Absolutely. Our first conversation is always free. We provide a fixed-price proposal at the end of the discovery phase — with no commitment to proceed."
    },
    {
      q: "Who is behind NNC Digital Solutions?",
      a: "NNC Digital is the international arm of Nakshatra Namaha Creations Pvt. Ltd. — Bangalore's trusted digital studio with 8+ years and 565+ projects."
    }
  ];

  const globalOffices: Office[] = [
    { country: "🇨🇦 Canada", city: "Toronto, Ontario", address: "Toronto, Ontario", phone: "+1 647-XXX-XXXX", email: "canada@nncdigital.com" },
    { country: "🇺🇸 USA", city: "New York, NY", address: "New York, NY", phone: "+1 631-XXX-XXXX", email: "usa@nncdigital.com" },
    { country: "🇬🇧 UK", city: "London, United Kingdom", address: "London, United Kingdom", phone: "+44 20-XXXX-XXXX", email: "uk@nncdigital.com" },
    { country: "🇮🇳 India (HQ)", city: "Bangalore", address: "Darshan Plazza, Banashankari, Bengaluru 560061", phone: "+91 9900566466", email: "info@nakshatranamahacreations.com" },
    { country: "🇮🇳 India", city: "Mysore", address: "SUSWANI TOWERS, JP Nagar, Mysuru 570008", phone: "+91 9900566466", email: "" },
    { country: "🇮🇳 India", city: "Mumbai", address: "Lodha Signet, 302, Kolshet Rd, Thane West 400607", phone: "+91 9900566466", email: "" },
    { country: "🇮🇳 India", city: "Hyderabad", address: "64/2 RT, Prakashnagar, Begumpet, Hyderabad 500016", phone: "+91 9900566466", email: "" }
  ];

  const servicesList: string[] = [
    "CRM Development", "ERP Development", "Web Development", "Mobile App Development",
    "Digital Transformation", "SEO & Digital Marketing", "Cloud Migration", "System Integration"
  ];

  const timelineOptions: string[] = ["Immediately", "1-3 Months", "3-6 Months", "6-12 Months", "Just Exploring"];

  const dialCodes: DialCode[] = [
    { code: "+1", flag: "🇨🇦", country: "CA" },
    { code: "+1", flag: "🇺🇸", country: "US" },
    { code: "+44", flag: "🇬🇧", country: "UK" },
    { code: "+91", flag: "🇮🇳", country: "IN" }
  ];

  // Responsive styles
  const sectionPadding = {
    mobile: "40px 16px",
    tablet: "60px 32px",
    desktop: "80px 48px"
  };

  const getSectionPadding = () => {
    if (isMobile) return sectionPadding.mobile;
    if (isTablet) return sectionPadding.tablet;
    return sectionPadding.desktop;
  };

  const getGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "1fr";
    return "1fr 1.2fr";
  };

  const getOfficeGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  const getHeroFontSize = () => {
    if (isMobile) return "clamp(28px, 8vw, 36px)";
    if (isTablet) return "clamp(36px, 5vw, 44px)";
    return "clamp(44px, 5vw, 60px)";
  };

  // Base input styles - Mobile optimized
  const baseInputStyle: CSSProperties = {
    width: "100%",
    padding: isMobile ? "14px 16px" : "16px 18px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    fontSize: isMobile ? "16px" : "15px", // Bigger on mobile for better touch
    fontFamily: "'Poppins', sans-serif",
    outline: "none",
    transition: "all 0.3s ease",
    WebkitAppearance: "none" as const,
    MozAppearance: "none" as const,
  };

  const iS: CSSProperties = { ...baseInputStyle };

  const selectStyle: CSSProperties = {
    ...baseInputStyle,
    cursor: "pointer",
    appearance: "none" as const,
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300C9A7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 16px center",
    backgroundSize: "16px",
    paddingRight: "40px",
  };

  const optionStyle: CSSProperties = { background: N2, color: "#fff" };

  return (
    <>
      <Navbar />

      {/* HERO SECTION - Responsive */}
      <section style={{
        padding: isMobile ? "40px 16px 40px" : isTablet ? "100px 32px 60px" : "90px 48px 80px",
        background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
        position: "relative",
        overflow: "hidden",
        textAlign: "center" as const,
        minHeight: isMobile ? "auto" : "50vh",
        display: "flex",
        alignItems: "center"
      }}>
        {/* Background orbs - hidden on mobile for performance */}
        {!isMobile && (
          <>
            <div style={{
              position: "absolute",
              width: isTablet ? "400px" : "600px",
              height: isTablet ? "400px" : "600px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${T}15 0%, transparent 70%)`,
              top: "-20%",
              right: "-10%",
              animation: "float 20s ease-in-out infinite",
              pointerEvents: "none" as const
            }} />
            <div style={{
              position: "absolute",
              width: isTablet ? "300px" : "400px",
              height: isTablet ? "300px" : "400px",
              borderRadius: "50%",
              background: `radial-gradient(circle, #8B5CF615 0%, transparent 70%)`,
              bottom: "-10%",
              left: "-5%",
              animation: "float 15s ease-in-out infinite reverse",
              pointerEvents: "none" as const
            }} />
          </>
        )}

        <div style={{
          maxWidth: isMobile ? "100%" : "800px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          width: "100%"
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,201,167,0.1)",
            border: "1px solid rgba(0,201,167,0.3)",
            borderRadius: "100px",
            padding: isMobile ? "8px 18px" : "8px 20px",
            marginBottom: isMobile ? "20px" : "24px"
          }}>
            <span style={{
              width: isMobile ? "6px" : "8px",
              height: isMobile ? "6px" : "8px",
              borderRadius: "50%",
              background: T,
              boxShadow: `0 0 10px ${T}`
            }} />
            <span style={{ 
              color: T, 
              fontSize: isMobile ? "13px" : "14px", 
              fontWeight: 600, 
              letterSpacing: "0.1em" 
            }}>
              LET'S CONNECT
            </span>
          </div>

          <h1 style={{
            fontSize: getHeroFontSize(),
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: isMobile ? "20px" : "24px",
            color: "#fff",
            padding: isMobile ? "0" : "0"
          }}>
            {isMobile ? (
              <>
                Let's Build<br />
                Something{" "}
                <span style={{
                  background: `linear-gradient(135deg, ${T}, #8B5CF6, #FF6B6B)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 8s ease infinite"
                }}>
                  Exceptional<br />
                  Together
                </span>
              </>
            ) : (
              <>
                Let's Build Something{" "}
                <span style={{
                  background: `linear-gradient(135deg, ${T}, #8B5CF6, #FF6B6B)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 8s ease infinite"
                }}>
                  Exceptional Together
                </span>
              </>
            )}
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: isMobile ? "16px" : isTablet ? "17px" : "18px",
            lineHeight: 1.7,
            maxWidth: isMobile ? "100%" : "600px",
            margin: "0 auto",
            padding: isMobile ? "0 10px" : "0"
          }}>
            {isMobile 
              ? "We respond within 24 hours with honest, practical advice."
              : "Whether you have a fully defined project or just a problem you're trying to solve — we'd love to talk. We respond within 24 business hours with honest, practical advice."
            }
          </p>
        </div>
      </section>

      {/* CONTACT + FORM SPLIT SECTION - Responsive */}
      <section style={{
        padding: getSectionPadding(),
        background: N1,
        position: "relative"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: getGridColumns(),
          gap: isMobile ? "24px" : isTablet ? "24px" : "30px"
        }}>
          {/* LEFT - Contact Details */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: isMobile ? "20px" : "32px",
            padding: isMobile ? "24px 20px" : isTablet ? "32px 28px" : "48px",
            backdropFilter: "blur(10px)",
            animation: "fadeInLeft 0.8s ease"
          }}>
            <h2 style={{
              fontSize: isMobile ? "26px" : isTablet ? "30px" : "36px",
              fontWeight: 800,
              color: "#fff",
              marginBottom: isMobile ? "24px" : "32px"
            }}>
              Get in <span style={{ color: T }}>Touch</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "28px" : "32px" }}>
              {/* Call Us */}
              <div>
                <h3 style={{
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: 700,
                  color: T,
                  marginBottom: isMobile ? "16px" : "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  <span style={{ fontSize: isMobile ? "22px" : "24px" }}>📞</span> Call Us
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "14px" }}>
                  {[
                    { flag: "🇨🇦", label: "Canada", phone: "+1 647-XXX-XXXX" },
                    { flag: "🇺🇸", label: "USA", phone: "+1 631-XXX-XXXX" },
                    { flag: "🇬🇧", label: "UK", phone: "+44 20-XXXX-XXXX" },
                    { flag: "🇮🇳", label: "India HQ", phone: "+91 9900566466" }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={`tel:${item.phone.replace(/\s|-/g, "")}`}
                      style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: isMobile ? "4px" : "12px",
                        padding: isMobile ? "14px 16px" : "12px 16px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: "12px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={e => {
                        const target = e.currentTarget;
                        target.style.background = `rgba(0,201,167,0.1)`;
                        target.style.borderColor = T;
                      }}
                      onMouseLeave={e => {
                        const target = e.currentTarget;
                        target.style.background = "rgba(255,255,255,0.03)";
                        target.style.borderColor = "rgba(255,255,255,0.05)";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: isMobile ? "20px" : "20px" }}>{item.flag}</span>
                        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? "14px" : "14px", fontWeight: 500 }}>
                          {item.label}:
                        </span>
                      </div>
                      <span style={{ 
                        color: T, 
                        fontWeight: 600, 
                        fontSize: isMobile ? "15px" : "15px",
                        marginLeft: isMobile ? "28px" : "0"
                      }}>
                        {item.phone}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 style={{
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: 700,
                  color: T,
                  marginBottom: isMobile ? "16px" : "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  <span style={{ fontSize: isMobile ? "22px" : "24px" }}>✉️</span> Email
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "14px" }}>
                  {[
                    { email: "hello@nncdigital.com", label: "General Inquiries" },
                    { email: "info@nakshatranamahacreations.com", label: "India Office" }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={`mailto:${item.email}`}
                      style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: isMobile ? "4px" : "12px",
                        padding: isMobile ? "14px 16px" : "12px 16px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: "12px",
                        textDecoration: "none",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={e => {
                        const target = e.currentTarget;
                        target.style.background = `rgba(0,201,167,0.1)`;
                        target.style.borderColor = T;
                      }}
                      onMouseLeave={e => {
                        const target = e.currentTarget;
                        target.style.background = "rgba(255,255,255,0.03)";
                        target.style.borderColor = "rgba(255,255,255,0.05)";
                      }}
                    >
                      <span style={{ color: T, fontSize: isMobile ? "16px" : "16px" }}>✉️</span>
                      <div>
                        <div style={{ 
                          color: "#fff", 
                          fontWeight: 600, 
                          fontSize: isMobile ? "15px" : "15px",
                          wordBreak: "break-all" as const
                        }}>
                          {item.email}
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "13px" : "13px" }}>
                          {item.label}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div style={{
                padding: isMobile ? "20px" : "24px",
                background: `linear-gradient(135deg, ${T}10, transparent)`,
                border: `1px solid ${T}30`,
                borderRadius: "16px",
                marginTop: isMobile ? "8px" : "12px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <span style={{ fontSize: isMobile ? "22px" : "24px" }}>⏰</span>
                  <span style={{ color: T, fontWeight: 700, fontSize: isMobile ? "18px" : "18px" }}>
                    Office Hours
                  </span>
                </div>
                <div style={{ 
                  color: "rgba(255,255,255,0.8)", 
                  fontSize: isMobile ? "15px" : "15px", 
                  lineHeight: 1.8 
                }}>
                  <div>Mon-Fri: 9am - 6pm (EST/GMT)</div>
                  <div>Sat-Sun: Closed</div>
                  <div style={{ color: T, marginTop: "12px", fontWeight: 600 }}>24hr response guaranteed</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Lead Form - FIXED for mobile */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: isMobile ? "20px" : "32px",
            padding: isMobile ? "24px 20px" : isTablet ? "32px 28px" : "48px",
            backdropFilter: "blur(10px)",
            animation: "fadeInRight 0.8s ease",
            width: "100%",
            boxSizing: "border-box" as const
          }}>
            <h3 style={{
              fontSize: isMobile ? "22px" : isTablet ? "24px" : "24px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: isMobile ? "24px" : "28px"
            }}>
              Share Your <span style={{ color: T }}>Project Idea</span>
            </h3>

            {submitted ? (
              <div style={{
                textAlign: "center",
                padding: isMobile ? "30px 10px" : "40px 20px",
                animation: "fadeInScale 0.5s ease"
              }}>
                <div style={{
                  fontSize: isMobile ? "56px" : "64px",
                  marginBottom: "20px",
                  animation: "bounce 1s ease"
                }}>✨</div>
                <h4 style={{ 
                  color: "#fff", 
                  fontSize: isMobile ? "22px" : "24px", 
                  fontWeight: 800, 
                  marginBottom: "12px" 
                }}>
                  Message Sent!
                </h4>
                <p style={{ 
                  color: "rgba(255,255,255,0.6)", 
                  fontSize: isMobile ? "15px" : "16px", 
                  marginBottom: "28px" 
                }}>
                  Thank you for reaching out. A dedicated consultant will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: "", lastName: "", phone: "", dialCode: "+1",
                      email: "", company: "", service: "", project: "", timeline: ""
                    });
                  }}
                  style={{
                    padding: isMobile ? "14px 28px" : "12px 32px",
                    borderRadius: "100px",
                    border: "none",
                    background: `linear-gradient(135deg, ${T}, #8B5CF6)`,
                    color: "#000",
                    fontWeight: 700,
                    fontSize: isMobile ? "15px" : "15px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    width: isMobile ? "100%" : "auto"
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: isMobile ? "16px" : "20px",
                width: "100%"
              }}>
                {/* Name fields - Stack on mobile */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: isMobile ? "14px" : "16px",
                  width: "100%"
                }}>
                  <input
                    required
                    style={iS}
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={e => setFormField("firstName", e.target.value)}
                    onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                  />
                  <input
                    style={iS}
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={e => setFormField("lastName", e.target.value)}
                    onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Phone with dial code - Stack on mobile */}
                <div style={{ 
                  display: "flex", 
                  gap: isMobile ? "12px" : "12px",
                  flexDirection: isMobile ? "column" : "row",
                  width: "100%"
                }}>
                  <select
                    style={{ 
                      ...selectStyle, 
                      width: isMobile ? "100%" : "110px",
                    }}
                    value={formData.dialCode}
                    onChange={e => setFormField("dialCode", e.target.value)}
                  >
                    {dialCodes.map((d, i) => (
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

                {/* Email & Company */}
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

                <input
                  style={iS}
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={e => setFormField("company", e.target.value)}
                  onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                />

                {/* Service of Interest */}
                <select
                  required
                  style={selectStyle}
                  value={formData.service}
                  onChange={e => setFormField("service", e.target.value)}
                >
                  <option value="" style={optionStyle}>Service of Interest *</option>
                  {servicesList.map((s, i) => (
                    <option key={i} value={s} style={optionStyle}>{s}</option>
                  ))}
                </select>

                {/* Project Description */}
                <textarea
                  required
                  style={{ ...iS, minHeight: isMobile ? "120px" : "140px", resize: "vertical" as const }}
                  placeholder="Project Description *"
                  value={formData.project}
                  onChange={e => setFormField("project", e.target.value)}
                  onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                />

                {/* Timeline */}
                <select
                  style={selectStyle}
                  value={formData.timeline}
                  onChange={e => setFormField("timeline", e.target.value)}
                >
                  <option value="" style={optionStyle}>Preferred Timeline</option>
                  {timelineOptions.map((t, i) => (
                    <option key={i} value={t} style={optionStyle}>{t}</option>
                  ))}
                </select>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: isMobile ? "16px" : "18px",
                    borderRadius: "12px",
                    border: "none",
                    background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg, ${T}, #8B5CF6)`,
                    color: "#000",
                    fontWeight: 800,
                    fontSize: isMobile ? "16px" : "16px",
                    cursor: loading ? "wait" : "pointer",
                    transition: "all 0.3s ease",
                    marginTop: isMobile ? "12px" : "8px"
                  }}
                >
                  {loading ? "Sending..." : "Submit — Response within 24 hours →"}
                </button>

                <p style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: isMobile ? "13px" : "13px",
                  textAlign: "center",
                  marginTop: "16px"
                }}>
                  🔒 No commitment required • 100% secure
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE - Responsive Grid */}
      <section style={{
        padding: getSectionPadding(),
        background: N2,
        position: "relative"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,201,167,0.1)",
              border: "1px solid rgba(0,201,167,0.3)",
              borderRadius: "100px",
              padding: isMobile ? "8px 18px" : "8px 20px",
              marginBottom: "16px"
            }}>
              <span style={{ 
                width: isMobile ? "6px" : "8px", 
                height: isMobile ? "6px" : "8px", 
                borderRadius: "50%", 
                background: T 
              }} />
              <span style={{ color: T, fontSize: isMobile ? "13px" : "14px", fontWeight: 600 }}>
                OUR REACH
              </span>
            </div>
            <h2 style={{
              fontSize: isMobile ? "28px" : isTablet ? "32px" : "40px",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "16px"
            }}>
              Global <span style={{ color: T }}>Presence</span>
            </h2>
          </div>

          {/* Office Cards Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: getOfficeGridColumns(),
            gap: isMobile ? "16px" : isTablet ? "20px" : "24px"
          }}>
            {globalOffices.map((office, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: isMobile ? "20px" : "24px",
                  padding: isMobile ? "20px" : "24px",
                  transition: "all 0.3s ease",
                  animation: `fadeInUp 0.5s ease ${index * 0.1}s both`
                }}
                onMouseEnter={e => {
                  const target = e.currentTarget;
                  if (!isMobile) target.style.transform = "translateY(-5px)";
                  target.style.borderColor = T;
                  target.style.boxShadow = `0 10px 30px ${T}20`;
                }}
                onMouseLeave={e => {
                  const target = e.currentTarget;
                  target.style.transform = "translateY(0)";
                  target.style.borderColor = "rgba(255,255,255,0.05)";
                  target.style.boxShadow = "none";
                }}
              >
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: isMobile ? "12px" : "12px", 
                  marginBottom: isMobile ? "16px" : "16px",
                }}>
                  <span style={{ fontSize: isMobile ? "28px" : "28px" }}>{office.country.split(' ')[0]}</span>
                  <div>
                    <div style={{ color: T, fontWeight: 700, fontSize: isMobile ? "16px" : "16px" }}>
                      {office.city}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "13px" : "13px" }}>
                      {office.country}
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: isMobile ? "12px" : "12px" }}>
                  <div style={{ 
                    color: "rgba(255,255,255,0.7)", 
                    fontSize: isMobile ? "14px" : "14px", 
                    lineHeight: 1.6,
                    wordBreak: "break-word" as const
                  }}>
                    📍 {office.address}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "8px" : "8px" }}>
                  <a
                    href={`tel:${office.phone.replace(/\s|-/g, "")}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: T,
                      fontSize: isMobile ? "14px" : "14px",
                      fontWeight: 600,
                      textDecoration: "none",
                      wordBreak: "break-all" as const
                    }}
                  >
                    📞 {office.phone}
                  </a>
                  {office.email && (
                    <a
                      href={`mailto:${office.email}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "rgba(255,255,255,0.7)",
                        fontSize: isMobile ? "14px" : "14px",
                        textDecoration: "none",
                        wordBreak: "break-all" as const
                      }}
                    >
                      ✉️ {office.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Responsive */}
      <section style={{
        padding: getSectionPadding(),
        background: `linear-gradient(180deg, ${N1} 0%, ${N0} 100%)`,
        position: "relative"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: isMobile ? "0" : "0" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,201,167,0.1)",
              border: "1px solid rgba(0,201,167,0.3)",
              borderRadius: "100px",
              padding: isMobile ? "8px 18px" : "8px 20px",
              marginBottom: "16px"
            }}>
              <span style={{ 
                width: isMobile ? "6px" : "8px", 
                height: isMobile ? "6px" : "8px", 
                borderRadius: "50%", 
                background: T 
              }} />
              <span style={{ color: T, fontSize: isMobile ? "13px" : "14px", fontWeight: 600 }}>
                BEFORE YOU REACH OUT
              </span>
            </div>
            <h2 style={{
              fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
              fontWeight: 800,
              color: "#fff"
            }}>
              Common <span style={{ color: T }}>Questions</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "16px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${openIndex === i ? T : "rgba(255,255,255,0.05)"}`,
                  borderRadius: isMobile ? "16px" : "20px",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  style={{
                    width: "100%",
                    padding: isMobile ? "18px" : "24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#fff",
                    fontSize: isMobile ? "15px" : "16px",
                    fontWeight: 600,
                    textAlign: "left" as const
                  }}
                >
                  <span style={{ flex: 1 }}>{faq.q}</span>
                  <span style={{
                    fontSize: isMobile ? "22px" : "24px",
                    color: T,
                    transition: "transform 0.3s ease",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0)"
                  }}>
                    {openIndex === i ? "✕" : "+"}
                  </span>
                </button>

                {openIndex === i && (
                  <div style={{
                    padding: isMobile ? "0 18px 18px 18px" : "0 24px 24px 24px",
                    animation: "slideDown 0.3s ease"
                  }}>
                    <p style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: isMobile ? "14px" : "15px",
                      lineHeight: 1.7,
                      margin: 0
                    }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-20px, -20px) rotate(120deg); }
          66% { transform: translate(20px, 20px) rotate(240deg); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        @media (hover: hover) {
          input:hover, select:hover, textarea:hover {
            border-color: ${T} !important;
          }
        }
        
        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none;
          }
          
          input, select, textarea {
            font-size: 16px !important; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </>
  );
}