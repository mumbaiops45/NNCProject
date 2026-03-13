"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// ─── Data ─────────────────────────────────────────────────────────────────────
const FILTERS = ["All", "CRM", "ERP", "Web", "Mobile", "Automation", "Industry"];

const CASE_STUDIES = [
  {
    id: 1,
    category: "CRM",
    industry: "Manufacturing",
    icon: "🏭",
    title: "Enterprise CRM for a Manufacturing Client",
    result: "35% Efficiency Gain",
    challenge: "A mid-sized manufacturer managing their dealer network across spreadsheets and disconnected email chains — poor pipeline visibility, no mobile access, no leadership reporting.",
    solution: "Custom CRM with automated dealer management, lead assignment, real-time sales tracking, and a field rep mobile app — fully integrated with their existing ERP.",
    results: [
      "35% improvement in operational efficiency",
      "Sales pipeline visibility from zero to real-time",
      "Field rep response time reduced by 60%",
      "Full dealer network performance visibility for leadership"
    ],
    link: "/case-studies/manufacturing-crm"
  },
  {
    id: 2,
    category: "Mobile + CRM",
    industry: "Healthcare",
    icon: "🏥",
    title: "Mobile App + CRM for Healthcare Provider",
    result: "42% Increase in Repeat Bookings",
    challenge: "A multi-location allied health clinic losing patients between appointments — poor follow-up and no digital touchpoints between visits.",
    solution: "Patient-facing mobile app with WhatsApp automated reminders, online booking, and a backend CRM tracking patient history and triggering follow-up sequences automatically.",
    results: [
      "42% increase in repeat bookings within 90 days",
      "WhatsApp reminder open rates above 85%",
      "Front desk workload reduced by 30%"
    ],
    link: "/case-studies/healthcare-mobile-crm"
  },
  {
    id: 3,
    category: "Automation",
    industry: "E-Commerce",
    icon: "🛒",
    title: "Full Funnel Automation for D2C Brand",
    result: "2.4× Lead Conversion",
    challenge: "D2C brand generating ad traffic but converting fewer than 3% of leads into customers. CRM disconnected from ad platforms. Follow-up entirely manual.",
    solution: "End-to-end funnel automation — Google and Meta ads connected to CRM, automated email and WhatsApp nurture sequences, redesigned landing pages for conversion.",
    results: [
      "2.4× improvement in lead-to-customer conversion",
      "Cost per acquisition reduced by 38%",
      "Full ad spend attribution to closed revenue for the first time"
    ],
    link: "/case-studies/d2c-automation"
  },
  {
    id: 4,
    category: "ERP",
    industry: "Distribution",
    icon: "📦",
    title: "Custom ERP for Distribution Company",
    result: "28% Inventory Reduction",
    challenge: "A distribution company with 5 warehouses had no real-time inventory visibility, leading to stockouts, over-ordering, and delayed customer shipments.",
    solution: "Cloud-based ERP with real-time inventory tracking, automated reorder points, warehouse management system, and customer portal for order tracking.",
    results: [
      "28% reduction in overall inventory levels",
      "Stockouts eliminated entirely",
      "Order fulfilment time reduced from 3 days to 6 hours",
      "Customer satisfaction score increased by 34%"
    ],
    link: "/case-studies/distribution-erp"
  },
  {
    id: 5,
    category: "Web",
    industry: "Professional Services",
    icon: "💼",
    title: "Client Portal for Professional Services Firm",
    result: "52% Faster Client Onboarding",
    challenge: "A professional services firm onboarding new clients with PDF forms, email attachments, and manual data entry — leading to errors and slow turnaround.",
    solution: "Custom client portal with digital forms, automated workflows, document management, and integration with their practice management system.",
    results: [
      "52% faster client onboarding time",
      "Data entry errors reduced by 97%",
      "Client satisfaction score improved from 3.8 to 4.9",
      "Administrative time saved: 18 hours per week"
    ],
    link: "/case-studies/professional-services-portal"
  },
  {
    id: 6,
    category: "Mobile",
    industry: "Field Service",
    icon: "🔧",
    title: "Field Service Mobile App",
    result: "41% More Jobs Per Day",
    challenge: "Field service technicians using paper job sheets and manual scheduling — jobs lost, duplicate visits, and no real-time visibility for dispatchers.",
    solution: "Native mobile app with offline capability, GPS-optimised scheduling, digital job sign-off, and real-time sync with back-office systems.",
    results: [
      "41% increase in jobs completed per technician per day",
      "Travel time reduced by 28%",
      "Paperwork eliminated completely",
      "First-time fix rate improved from 72% to 91%"
    ],
    link: "/case-studies/field-service-app"
  }
];

// ─── Animation Hook ───────────────────────────────────────────────────────────
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

// ─── Helper Components ────────────────────────────────────────────────────────
function SectionBadge({ label }) {
  return (
    <div style={{ 
      display: "inline-flex", 
      alignItems: "center", 
      gap: "8px", 
      background: "rgba(0,201,167,0.08)", 
      border: "1px solid rgba(0,201,167,0.22)", 
      borderRadius: "100px", 
      padding: "6px 18px", 
      marginBottom: "16px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease"
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = `0 0 20px ${T}40`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "none";
    }}
    >
      <span style={{ 
        width: "6px", 
        height: "6px", 
        borderRadius: "50%", 
        background: T, 
        display: "block", 
        boxShadow: `0 0 8px ${T}`,
        animation: "pulseDot 2s ease-in-out infinite"
      }} />
      <span style={{ color: T, fontSize: "clamp(10px, 2.5vw, 11px)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

function SectionH2({ children }) {
  return <h2 style={{ fontSize: "clamp(24px, 5vw, 40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "14px" }}>{children}</h2>;
}

function GradText({ children }) {
  return <span style={{ background: `linear-gradient(135deg,${T},#1fd1b5)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{children}</span>;
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({ name: "", phone: "", dialCode: "+1", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filterHover, setFilterHover] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredCases = activeFilter === "All"
    ? CASE_STUDIES
    : CASE_STORIES.filter(c => c.category.includes(activeFilter) || c.category === activeFilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const setFormField = (k, v) => setFormData(f => ({ ...f, [k]: v }));

  const iS = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: "9px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "#fff",
    fontSize: "clamp(14px, 3.5vw, 14.5px)",
    fontFamily: "'Poppins', sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.3s ease"
  };

  const DIAL_CODES = [
    { code: "+1", flag: "🇨🇦" },
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+91", flag: "🇮🇳" }
  ];

  // Responsive breakpoints
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const isTablet = typeof window !== "undefined" && window.innerWidth > 768 && window.innerWidth <= 1024;

  return (
    <>
      <Navbar />

      {/* M1 — HERO WITH ANIMATIONS - RESPONSIVE */}
      <section style={{
        padding: isMobile ? "40px 20px 60px" : "96px 48px 80px",
        background: `linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`,
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Animated background particles - hidden on mobile for performance */}
        {!isMobile && (
          <>
            <div style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 1,
              backgroundImage: `linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`,
              backgroundSize: "60px 60px",
              animation: "gridShift 20s linear infinite"
            }} />
            <div style={{
              position: "absolute",
              width: isMobile ? "300px" : "650px",
              height: isMobile ? "300px" : "650px",
              borderRadius: "50%",
              background: `radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)`,
              top: "40%",
              left: "-10%",
              transform: "translateY(-50%)",
              animation: "heroPulse 8s ease-in-out infinite",
              pointerEvents: "none",
              zIndex: 1
            }} />
          </>
        )}

        <div style={{ 
          maxWidth: "960px", 
          margin: "0 auto", 
          position: "relative", 
          zIndex: 2, 
          textAlign: "center",
          animation: "fadeInUp 1s ease-out"
        }}>
          <div style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <SectionBadge label="Our Work" />
          </div>
          <h1 style={{
            fontSize: isMobile ? "clamp(28px, 8vw, 32px)" : "clamp(32px, 4.5vw, 58px)",
            fontWeight: 900,
            lineHeight: 1.12,
            marginBottom: "22px",
            letterSpacing: "-0.025em",
            color: "#fff",
            animation: "fadeInUp 0.8s ease-out 0.2s both"
          }}>
            Real Systems. <GradText>Measurable Results.</GradText> Real Businesses.
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.52)",
            fontSize: isMobile ? "clamp(14px, 4vw, 15px)" : "clamp(15px, 1.3vw, 17px)",
            lineHeight: 1.85,
            margin: "0 auto 20px",
            maxWidth: isMobile ? "100%" : "720px",
            padding: isMobile ? "0 10px" : "0",
            animation: "fadeInUp 0.8s ease-out 0.3s both"
          }}>
            We don't just build technology — we build outcomes. Here are results our clients across North America, the UK, and beyond have achieved working with NNC Digital, backed by Nakshatra Namaha Creations.
          </p>
          <div style={{ 
            display: "flex", 
            gap: isMobile ? "8px" : "10px", 
            justifyContent: "center", 
            flexWrap: "wrap", 
            marginTop: "32px",
            animation: "fadeInUp 0.8s ease-out 0.4s both"
          }}>
            {["🏆 8+ Years", "🌍 3 Continents", "⚡ 565+ Projects", "🤝 98% Retention"].map((b, i) => (
              <span 
                key={b} 
                style={{
                  padding: isMobile ? "6px 12px" : "8px 18px",
                  borderRadius: "100px",
                  border: "1px solid rgba(0,201,167,0.25)",
                  background: "rgba(0,201,167,0.06)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: isMobile ? "clamp(11px, 3vw, 12px)" : "13.5px",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  animation: `fadeInScale 0.5s ease-out ${0.5 + i * 0.1}s both`,
                  cursor: "default"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.background = "rgba(0,201,167,0.15)";
                  e.currentTarget.style.borderColor = T;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "rgba(0,201,167,0.06)";
                  e.currentTarget.style.borderColor = "rgba(0,201,167,0.25)";
                }}
              >{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* M2 — FILTER BAR WITH ANIMATIONS - RESPONSIVE */}
      <section style={{ 
        padding: isMobile ? "30px 20px 15px" : "40px 48px 20px", 
        background: N1, 
        borderBottom: `1px solid rgba(0,201,167,0.1)`,
        position: "relative"
      }}>
        <div style={{ 
          maxWidth: "1280px", 
          margin: "0 auto",
          animation: "fadeInUp 0.8s ease-out"
        }}>
          {/* Mobile filter dropdown */}
          {isMobile ? (
            <div style={{ position: "relative", width: "100%" }}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  borderRadius: "100px",
                  border: `1px solid ${T}`,
                  background: "rgba(0,201,167,0.1)",
                  color: T,
                  fontSize: "14px",
                  fontWeight: 600,
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span>Filter: {activeFilter}</span>
                <span style={{ transform: mobileMenuOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}>▼</span>
              </button>
              {mobileMenuOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  marginTop: "8px",
                  background: N2,
                  border: `1px solid rgba(0,201,167,0.3)`,
                  borderRadius: "12px",
                  zIndex: 10,
                  overflow: "hidden"
                }}>
                  {FILTERS.map(filter => (
                    <button
                      key={filter}
                      onClick={() => {
                        setActiveFilter(filter);
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        width: "100%",
                        padding: "12px 20px",
                        background: activeFilter === filter ? "rgba(0,201,167,0.12)" : "transparent",
                        color: activeFilter === filter ? T : "rgba(255,255,255,0.8)",
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: 600,
                        cursor: "pointer"
                      }}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div style={{ 
              display: "flex", 
              gap: "12px", 
              justifyContent: "center", 
              flexWrap: "wrap" 
            }}>
              {FILTERS.map((filter, index) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  onMouseEnter={() => setFilterHover(filter)}
                  onMouseLeave={() => setFilterHover(null)}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "100px",
                    border: `1px solid ${activeFilter === filter ? "rgba(0,201,167,0.5)" : "rgba(255,255,255,0.1)"}`,
                    background: activeFilter === filter ? "rgba(0,201,167,0.12)" : "rgba(255,255,255,0.03)",
                    color: activeFilter === filter ? T : filterHover === filter ? T : "rgba(255,255,255,0.7)",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: filterHover === filter ? "scale(1.05)" : "scale(1)",
                    boxShadow: filterHover === filter ? `0 0 20px ${T}40` : "none",
                    animation: `fadeInScale 0.5s ease-out ${index * 0.05}s both`
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
          <p style={{ 
            textAlign: "center", 
            color: "rgba(255,255,255,0.3)", 
            fontSize: isMobile ? "12px" : "13px", 
            marginTop: "20px",
            transition: "color 0.3s ease"
          }}>
            Showing <span style={{ color: T, fontWeight: 600 }}>{filteredCases.length}</span> case {filteredCases.length === 1 ? 'study' : 'studies'}
          </p>
        </div>
      </section>

      {/* M3 — CASE STUDY CARDS WITH ANIMATIONS - RESPONSIVE */}
      <section style={{ 
        padding: isMobile ? "40px 20px 60px" : "60px 48px 80px", 
        background: N2, 
        position: "relative",
        overflow: "hidden"
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            animation: "gridShift 30s linear infinite"
          }} />
        )}
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ 
            textAlign: "center", 
            marginBottom: isMobile ? "32px" : "48px",
            animation: "fadeInUp 0.8s ease-out"
          }}>
            <SectionH2>Featured <GradText>Case Studies</GradText></SectionH2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "24px" : "40px" }}>
            {filteredCases.map((cs, index) => {
              const cardRef = useRef(null);
              const [isCardVisible, setIsCardVisible] = useState(false);

              useEffect(() => {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      setIsCardVisible(true);
                    }
                  },
                  { threshold: 0.1 }
                );

                if (cardRef.current) {
                  observer.observe(cardRef.current);
                }

                return () => {
                  if (cardRef.current) {
                    observer.unobserve(cardRef.current);
                  }
                };
              }, []);

              return (
                <div
                  ref={cardRef}
                  key={cs.id}
                  onMouseEnter={() => setHoveredCard(cs.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${hoveredCard === cs.id ? T : "rgba(0,201,167,0.15)"}`,
                    borderRadius: "24px",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hoveredCard === cs.id && !isMobile ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                    boxShadow: hoveredCard === cs.id && !isMobile ? `0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px ${T} inset` : "none",
                    opacity: isCardVisible ? 1 : 0,
                    transform: isCardVisible ? "translateY(0)" : "translateY(30px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s, box-shadow 0.3s"
                  }}
                >
                  <div style={{ 
                    height: "3px", 
                    background: `linear-gradient(90deg,transparent,${T},transparent)`,
                    animation: hoveredCard === cs.id && !isMobile ? "gradientShift 2s linear infinite" : "none"
                  }} />
                  <div style={{ padding: isMobile ? "24px 20px" : "40px 40px 36px" }}>
                    {/* Header */}
                    <div style={{ 
                      display: "flex", 
                      flexDirection: isMobile ? "column" : "row",
                      alignItems: isMobile ? "flex-start" : "center", 
                      gap: isMobile ? "12px" : "16px", 
                      marginBottom: isMobile ? "20px" : "28px", 
                      flexWrap: "wrap" 
                    }}>
                      <div style={{
                        width: isMobile ? "48px" : "64px",
                        height: isMobile ? "48px" : "64px",
                        borderRadius: "16px",
                        background: "rgba(0,201,167,0.1)",
                        border: `1px solid ${hoveredCard === cs.id ? T : "rgba(0,201,167,0.25)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: isMobile ? "24px" : "32px",
                        transition: "all 0.3s ease",
                        transform: hoveredCard === cs.id && !isMobile ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0)",
                        animation: isCardVisible && !isMobile ? "floatIcon 3s ease-in-out infinite" : "none"
                      }}>{cs.icon}</div>
                      <div style={{ width: isMobile ? "100%" : "auto" }}>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", marginBottom: "6px" }}>
                          <span style={{
                            padding: isMobile ? "4px 10px" : "4px 12px",
                            borderRadius: "100px",
                            background: "rgba(0,201,167,0.1)",
                            border: `1px solid ${hoveredCard === cs.id ? T : "rgba(0,201,167,0.25)"}`,
                            color: T,
                            fontSize: isMobile ? "11px" : "12px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            transition: "all 0.3s ease"
                          }}>{cs.category}</span>
                          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? "11px" : "12px" }}>•</span>
                          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "12px" : "13px" }}>{cs.industry}</span>
                        </div>
                        <h2 style={{ 
                          color: "#fff", 
                          fontSize: isMobile ? "clamp(18px, 5vw, 22px)" : "clamp(22px, 2.5vw, 28px)", 
                          fontWeight: 800, 
                          margin: 0,
                          lineHeight: 1.3,
                          transition: "color 0.3s ease"
                        }}>{cs.title}</h2>
                        <p style={{ 
                          color: T, 
                          fontSize: isMobile ? "14px" : "15px", 
                          fontWeight: 700, 
                          margin: "6px 0 0",
                          transition: "transform 0.3s ease",
                          transform: hoveredCard === cs.id && !isMobile ? "translateX(5px)" : "translateX(0)"
                        }}>{cs.result}</p>
                      </div>
                    </div>

                    {/* Grid Layout - Stack on mobile */}
                    <div style={{ 
                      display: "grid", 
                      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
                      gap: isMobile ? "20px" : "28px", 
                      marginBottom: isMobile ? "20px" : "28px" 
                    }}>
                      {/* Challenge */}
                      <div style={{
                        transition: "transform 0.3s ease",
                        transform: hoveredCard === cs.id && !isMobile ? "translateY(-5px)" : "translateY(0)"
                      }}>
                        <h4 style={{
                          color: T,
                          fontSize: isMobile ? "12px" : "13px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}>
                          <span style={{ 
                            display: "inline-block",
                            animation: hoveredCard === cs.id && !isMobile ? "pulseDot 2s ease-in-out infinite" : "none"
                          }}>⚠️</span> The Challenge
                        </h4>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? "14px" : "15px", lineHeight: 1.7, margin: 0 }}>{cs.challenge}</p>
                      </div>
                      {/* Solution */}
                      <div style={{
                        transition: "transform 0.3s ease 0.1s",
                        transform: hoveredCard === cs.id && !isMobile ? "translateY(-5px)" : "translateY(0)"
                      }}>
                        <h4 style={{
                          color: T,
                          fontSize: isMobile ? "12px" : "13px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}>
                          <span style={{ 
                            display: "inline-block",
                            animation: hoveredCard === cs.id && !isMobile ? "pulseDot 2s ease-in-out infinite 0.3s" : "none"
                          }}>💡</span> The Solution
                        </h4>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? "14px" : "15px", lineHeight: 1.7, margin: 0 }}>{cs.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div style={{ marginBottom: isMobile ? "20px" : "28px" }}>
                      <h4 style={{
                        color: T,
                        fontSize: isMobile ? "12px" : "13px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}>
                        <span style={{ 
                          display: "inline-block",
                          animation: hoveredCard === cs.id && !isMobile ? "pulseDot 2s ease-in-out infinite 0.6s" : "none"
                        }}>📊</span> The Results
                      </h4>
                      <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(200px,1fr))", 
                        gap: isMobile ? "12px" : "16px" 
                      }}>
                        {cs.results.map((r, i) => (
                          <div 
                            key={i} 
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: isMobile ? "12px 14px" : "14px 18px",
                              borderRadius: "12px",
                              background: "rgba(255,255,255,0.03)",
                              border: `1px solid ${hoveredCard === cs.id ? T + "40" : "rgba(255,255,255,0.06)"}`,
                              transition: "all 0.3s ease",
                              animation: isCardVisible && !isMobile ? `slideInResult 0.5s ease-out ${i * 0.1}s both` : "none",
                              transform: hoveredCard === cs.id && !isMobile ? "scale(1.02)" : "scale(1)"
                            }}
                          >
                            <span style={{ 
                              color: T, 
                              fontSize: isMobile ? "18px" : "20px",
                              animation: hoveredCard === cs.id && !isMobile ? "spinCheck 0.5s ease" : "none"
                            }}>✅</span>
                            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? "13px" : "14px", fontWeight: 500 }}>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Link */}
                    <div style={{ textAlign: isMobile ? "center" : "right" }}>
                      <a
                        href={cs.link}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          color: T,
                          fontSize: isMobile ? "14px" : "15px",
                          fontWeight: 700,
                          textDecoration: "none",
                          padding: "8px 0",
                          borderBottom: `1px solid rgba(0,201,167,0.3)`,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: hoveredCard === cs.id && !isMobile ? "translateX(10px)" : "translateX(0)"
                        }}
                        onMouseEnter={e => {
                          if (!isMobile) {
                            e.currentTarget.style.gap = "12px";
                            e.currentTarget.style.borderBottomColor = T;
                            e.currentTarget.style.transform = "translateX(15px)";
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isMobile) {
                            e.currentTarget.style.gap = "8px";
                            e.currentTarget.style.borderBottomColor = "rgba(0,201,167,0.3)";
                            e.currentTarget.style.transform = "translateX(0)";
                          }
                        }}
                      >
                        View Full Case Study <span style={{ fontSize: isMobile ? "16px" : "18px", transition: "transform 0.3s ease" }}>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCases.length === 0 && (
            <div style={{ 
              textAlign: "center", 
              padding: "60px 20px",
              animation: "fadeInScale 0.5s ease-out"
            }}>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "14px" : "16px" }}>No case studies match the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* M4 — CTA + CONTACT FORM WITH ANIMATIONS - RESPONSIVE */}
      <section style={{
        padding: isMobile ? "60px 20px" : "80px 48px",
        background: `linear-gradient(180deg,${N1} 0%,${N0} 100%)`,
        position: "relative",
        overflow: "hidden"
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",
            pointerEvents: "none",
            zIndex: 0,
            animation: "pulseGlow 4s ease-in-out infinite"
          }} />
        )}
        <div style={{ 
          maxWidth: "1000px", 
          margin: "0 auto", 
          position: "relative", 
          zIndex: 2,
          animation: "fadeInUp 0.8s ease-out"
        }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <SectionBadge label="Work With Us" />
            <SectionH2>Ready to Be Our <GradText>Next Success Story?</GradText></SectionH2>
            <p style={{ 
              color: "rgba(255,255,255,0.5)", 
              fontSize: isMobile ? "14px" : "16px", 
              maxWidth: isMobile ? "100%" : "600px", 
              margin: "0 auto",
              padding: isMobile ? "0 10px" : "0"
            }}>
              Tell us about your project. We'll respond within 24 hours with a free consultation and honest advice.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: isMobile ? "24px 20px" : "40px 48px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            animation: "fadeInScale 0.5s ease-out 0.2s both"
          }}
          onMouseEnter={e => {
            if (!isMobile) {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${T}40`;
            }
          }}
          onMouseLeave={e => {
            if (!isMobile) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }
          }}
          >
            {submitted ? (
              <div style={{ 
                textAlign: "center", 
                padding: isMobile ? "20px 0" : "40px 20px",
                animation: "fadeInScale 0.5s ease-out"
              }}>
                <div style={{ 
                  fontSize: isMobile ? "48px" : "64px", 
                  marginBottom: "20px",
                  animation: "spinCheck 0.5s ease"
                }}>🎉</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "20px" : "24px", fontWeight: 800, marginBottom: "12px" }}>Message Sent!</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "14px" : "16px", marginBottom: "28px" }}>
                  Thank you for reaching out. A member of our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", dialCode: "+1", email: "", project: "" });
                  }}
                  style={{
                    padding: isMobile ? "10px 24px" : "12px 32px",
                    borderRadius: "10px",
                    border: "none",
                    background: `linear-gradient(135deg,${T},${TD})`,
                    color: "#000",
                    fontWeight: 700,
                    fontSize: isMobile ? "14px" : "15px",
                    fontFamily: "'Poppins', sans-serif",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={e => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = `0 10px 20px ${T}80`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
                  gap: isMobile ? "16px" : "24px", 
                  marginBottom: "24px" 
                }}>
                  <div style={{ animation: "fadeInUp 0.5s ease-out" }}>
                    <label style={{
                      display: "block",
                      fontSize: "clamp(11px, 3vw, 12.5px)",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}>Full Name *</label>
                    <input
                      required
                      style={iS}
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={e => setFormField("name", e.target.value)}
                      onFocus={e => {
                        e.target.style.borderColor = T;
                        e.target.style.boxShadow = `0 0 0 2px ${T}40`;
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = "rgba(255,255,255,0.14)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div style={{ animation: "fadeInUp 0.5s ease-out 0.1s both" }}>
                    <label style={{
                      display: "block",
                      fontSize: "clamp(11px, 3vw, 12.5px)",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}>Phone</label>
                    <div style={{ display: "flex", gap: "8px", flexDirection: isMobile ? "column" : "row" }}>
                      <select
                        style={{ 
                          ...iS, 
                          width: isMobile ? "100%" : "90px", 
                          flexShrink: 0, 
                          padding: "13px 8px", 
                          cursor: "pointer" 
                        }}
                        value={formData.dialCode}
                        onChange={e => setFormField("dialCode", e.target.value)}
                        onFocus={e => {
                          e.target.style.borderColor = T;
                          e.target.style.boxShadow = `0 0 0 2px ${T}40`;
                        }}
                        onBlur={e => {
                          e.target.style.borderColor = "rgba(255,255,255,0.14)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                      </select>
                      <input
                        style={iS}
                        type="tel"
                        placeholder="647 XXX XXXX"
                        value={formData.phone}
                        onChange={e => setFormField("phone", e.target.value)}
                        onFocus={e => {
                          e.target.style.borderColor = T;
                          e.target.style.boxShadow = `0 0 0 2px ${T}40`;
                        }}
                        onBlur={e => {
                          e.target.style.borderColor = "rgba(255,255,255,0.14)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: "24px", animation: "fadeInUp 0.5s ease-out 0.2s both" }}>
                  <label style={{
                    display: "block",
                    fontSize: "clamp(11px, 3vw, 12.5px)",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em"
                  }}>Business Email *</label>
                  <input
                    required
                    type="email"
                    style={iS}
                    placeholder="jane@yourcompany.com"
                    value={formData.email}
                    onChange={e => setFormField("email", e.target.value)}
                    onFocus={e => {
                      e.target.style.borderColor = T;
                      e.target.style.boxShadow = `0 0 0 2px ${T}40`;
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = "rgba(255,255,255,0.14)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div style={{ marginBottom: "28px", animation: "fadeInUp 0.5s ease-out 0.3s both" }}>
                  <label style={{
                    display: "block",
                    fontSize: "clamp(11px, 3vw, 12.5px)",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em"
                  }}>Project Description</label>
                  <textarea
                    style={{ ...iS, minHeight: isMobile ? "100px" : "120px", resize: "vertical" }}
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.project}
                    onChange={e => setFormField("project", e.target.value)}
                    onFocus={e => {
                      e.target.style.borderColor = T;
                      e.target.style.boxShadow = `0 0 0 2px ${T}40`;
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = "rgba(255,255,255,0.14)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: isMobile ? "14px" : "16px",
                    borderRadius: "12px",
                    border: "none",
                    background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg,${T},${TD})`,
                    color: "#000",
                    fontWeight: 800,
                    fontSize: isMobile ? "15px" : "16px",
                    fontFamily: "'Poppins', sans-serif",
                    cursor: loading ? "wait" : "pointer",
                    transition: "all 0.3s ease",
                    animation: "fadeInUp 0.5s ease-out 0.4s both",
                    transform: "scale(1)",
                    boxShadow: "none"
                  }}
                  onMouseEnter={e => {
                    if (!isMobile && !loading) {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow = `0 10px 30px ${T}80`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isMobile && !loading) {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  {loading ? "Sending..." : "Submit — Let's Build Something Great →"}
                </button>

                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? "11px" : "12px", textAlign: "center", marginTop: "16px" }}>
                  🔒 Your information is 100% secure and never shared.
                </p>
              </form>
            )}
          </div>

          {/* Direct Contacts - Responsive */}
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "center",
            gap: isMobile ? "16px" : "32px",
            marginTop: "32px",
            flexWrap: "wrap",
            animation: "fadeInUp 0.5s ease-out 0.5s both"
          }}>
            {[
              { flag: "🇨🇦", label: "Canada", phone: "+1 647-XXX-XXXX" },
              { flag: "🇺🇸", label: "USA", phone: "+1 631-XXX-XXXX" },
              { flag: "🇬🇧", label: "UK", phone: "+44 20-XXXX-XXXX" }
            ].map((c, i) => (
              <div 
                key={c.label} 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px",
                  transition: "transform 0.3s ease",
                  animation: `fadeInScale 0.5s ease-out ${0.6 + i * 0.1}s both`,
                  width: isMobile ? "100%" : "auto",
                  justifyContent: isMobile ? "center" : "flex-start"
                }}
                onMouseEnter={e => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }
                }}
                onMouseLeave={e => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              >
                <span style={{ fontSize: "18px" }}>{c.flag}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{c.label}:</span>
                <a 
                  href={`tel:${c.phone.replace(/\s|-/g, "")}`} 
                  style={{ 
                    color: T, 
                    fontSize: "clamp(13px, 3.5vw, 14px)", 
                    fontWeight: 600, 
                    textDecoration: "none",
                    transition: "color 0.3s ease"
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = T}
                >
                  {c.phone}
                </a>
              </div>
            ))}
          </div>
          <div style={{ 
            textAlign: "center", 
            marginTop: "16px",
            animation: "fadeInUp 0.5s ease-out 0.7s both"
          }}>
            <a 
              href="mailto:hello@nncdigital.com" 
              style={{ 
                color: "rgba(255,255,255,0.5)", 
                fontSize: isMobile ? "13px" : "14px", 
                textDecoration: "none",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={e => e.currentTarget.style.color = T}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
            >
              ✉️ hello@nncdigital.com
            </a>
          </div>
        </div>
      </section>

    
    </>
  );
}