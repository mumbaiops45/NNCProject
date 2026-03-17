

"use client";

import { useState, useEffect, CSSProperties } from "react";
import Navbar from "../components/Navbar";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = "#00C9A7";
const TD = "#00a07a";
const P = "#8B5CF6";
const G = "#10B981";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// Types
interface PricingRow {
  projectType: string;
  usd: string;
  cad: string;
  gbp: string;
}

interface EngagementModel {
  title: string;
  icon: string;
  bestFor: string;
  description: string;
  features: string[];
  gradient: string;
  color: string;
}

interface CostFactor {
  q: string;
  a: string;
  icon: string;
}

interface FAQ {
  q: string;
  a: string;
}

export default function PricingPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dialCode: "+1",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState<'USD' | 'CAD' | 'GBP'>('USD');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const setFormField = (k: string, v: string) => setFormData(f => ({ ...f, [k]: v }));

  // Engagement Models Data
  const engagementModels: EngagementModel[] = [
    {
      title: "Fixed-Price Project",
      icon: "🎯",
      bestFor: "Well-defined projects with clear requirements",
      description: "Fixed price, fixed timeline, defined deliverables. Milestone-based billing.",
      features: [
        "Fixed cost guarantee",
        "Fixed timeline",
        "Milestone billing",
        "No scope creep"
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea"
    },
    {
      title: "Dedicated Team (Retainer)",
      icon: "👥",
      bestFor: "Ongoing development with flexible requirements",
      description: "Dedicated developer or team. Flat monthly rate. Scales up or down.",
      features: [
        "Dedicated resource",
        "Rolling monthly",
        "Full or part-time",
        "Flexible scope"
      ],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f093fb"
    },
    {
      title: "Discovery Sprint",
      icon: "🔍",
      bestFor: "Complex requirements needing clarity before build",
      description: "2–4 week sprint delivering a working prototype and fixed-price proposal.",
      features: [
        "Low upfront investment",
        "Full clarity before build",
        "Working prototype",
        "Fixed proposal"
      ],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#4facfe"
    }
  ];

  // Pricing Table Data
  const pricingData: PricingRow[] = [
    { projectType: "CRM Configuration & Setup", usd: "$8,000", cad: "CA$11,000", gbp: "£6,500" },
    { projectType: "Custom CRM Development", usd: "$20,000", cad: "CA$27,000", gbp: "£16,000" },
    { projectType: "Custom ERP Development", usd: "$35,000", cad: "CA$47,000", gbp: "£28,000" },
    { projectType: "Enterprise Website", usd: "$10,000", cad: "CA$14,000", gbp: "£8,000" },
    { projectType: "Mobile App (iOS or Android)", usd: "$18,000", cad: "CA$24,000", gbp: "£15,000" },
    { projectType: "Funnel Automation Setup", usd: "$5,000", cad: "CA$7,000", gbp: "£4,000" },
    { projectType: "Dedicated Developer (monthly)", usd: "$3,500/mo", cad: "CA$4,700/mo", gbp: "£2,800/mo" }
  ];

  // Cost Factors Data
  const costFactors: CostFactor[] = [
    {
      icon: "📊",
      q: "Scope & Feature Complexity",
      a: "Number of user roles, workflows, integrations, and custom features directly impacts development time and cost."
    },
    {
      icon: "🔗",
      q: "Third-Party Integrations",
      a: "Each integration with an external system — WhatsApp, Salesforce, QuickBooks, Shopify — adds development time."
    },
    {
      icon: "🔄",
      q: "Data Migration",
      a: "Volume and complexity of your existing data affects the migration effort and testing time."
    },
    {
      icon: "🛠️",
      q: "Ongoing Support Requirements",
      a: "Post-launch packages from basic bug-fix cover to full managed service agreements."
    }
  ];

  // FAQ Data
  const faqs: FAQ[] = [
    {
      q: "What's included in the fixed-price proposal?",
      a: "Every fixed-price proposal includes detailed scope of work, project timeline, milestone deliverables, compliance documentation, and a clear payment schedule. There are absolutely no hidden costs — what we quote is what you pay."
    },
    {
      q: "How does milestone billing work?",
      a: "You pay in stages tied to completed deliverables. Typically: 30% upfront, 30% on first review, 30% on final delivery, and 10% after the 30-day support period. You never pay for work you haven't seen and approved."
    },
    {
      q: "Do you offer discounts for long-term engagements?",
      a: "Yes. For dedicated team retainers of 6+ months, we offer reduced monthly rates. For multi-project engagements, we provide package pricing. Contact us for a custom proposal tailored to your needs."
    },
    {
      q: "What currencies do you work with?",
      a: "We work in USD for US clients, CAD for Canadian clients, and GBP for UK clients. All quotes are provided in your local currency with fixed exchange rates for the duration of the project."
    }
  ];

  const dialCodes = [
    { code: "+1", flag: "🇨🇦", country: "CA" },
    { code: "+1", flag: "🇺🇸", country: "US" },
    { code: "+44", flag: "🇬🇧", country: "UK" },
    { code: "+91", flag: "🇮🇳", country: "IN" }
  ];

  const projectTypes = [
    "CRM Configuration",
    "Custom CRM Development",
    "Custom ERP Development",
    "Enterprise Website",
    "Mobile App",
    "Funnel Automation",
    "Dedicated Developer"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Need consultation"
  ];

  // Responsive styles - INCREASED FONT SIZES
  const getSectionPadding = () => {
    if (isMobile) return "50px 20px";
    if (isTablet) return "70px 32px";
    return "90px 48px";
  };

  const getHeroFontSize = () => {
    if (isMobile) return "36px";
    if (isTablet) return "48px";
    return "60px";
  };

  const getEngagementGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  const getCostFactorsGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(2, 1fr)";
  };

  const getWhyChooseGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "1fr";
    return "1fr 1fr";
  };

  // Base input styles - moderate height
  const baseInputStyle: CSSProperties = {
    width: "100%",
    padding: isMobile ? "10px 14px" : "12px 16px",
    borderRadius: "10px",
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
    backgroundPosition: "right 14px center",
    backgroundSize: "16px"
  };

  const optionStyle: CSSProperties = { background: N2, color: "#fff" };

  const textareaStyle: CSSProperties = {
    ...baseInputStyle,
    minHeight: isMobile ? "80px" : "100px",
    resize: "vertical" as const
  };

  return (
    <>
      <Navbar />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-20px, -20px) rotate(2deg); }
          66% { transform: translate(20px, 20px) rotate(-2deg); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (hover: hover) {
          input:hover, select:hover, textarea:hover {
            border-color: ${T} !important;
          }
        }
        
        .pricing-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .currency-tab {
          transition: all 0.3s ease;
        }
        
        .currency-tab.active {
          background: rgba(0,201,167,0.15);
          border-color: ${T};
          color: ${T};
        }
        
        .gradient-text {
          background: linear-gradient(135deg, ${T}, ${P}, #FF6B6B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        
        .faq-item {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .faq-item:hover {
          border-color: ${T}40;
        }
        
        .faq-item.open {
          border-color: ${T};
          background: rgba(0,201,167,0.05);
        }
        
        .faq-question {
          padding: 18px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          font-weight: 600;
          font-size: isMobile ? "15px" : "16px";
        }
        
        .faq-answer {
          padding: 0 22px 18px 22px;
          color: rgba(255,255,255,0.6);
          font-size: isMobile ? "14px" : "15px";
          line-height: 1.7;
        }
        
        .faq-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.5);
          transition: all 0.3s ease;
        }
        
        .faq-item.open .faq-icon {
          background: ${T};
          border-color: ${T};
          color: #000;
          transform: rotate(45deg);
        }
        
        /* Mobile styles */
        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none;
          }
          
          .pricing-table {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .pricing-table table {
            min-width: 550px;
          }
          
          .faq-question {
            font-size: 15px;
            padding: 14px 16px;
          }
          
          .faq-answer {
            font-size: 14px;
            padding: 0 16px 14px 16px;
          }
          
          .faq-icon {
            width: 24px;
            height: 24px;
          }
          
          .currency-tab {
            padding: 8px 16px !important;
            font-size: 14px !important;
          }
        }
        
        /* Tablet styles */
        @media (min-width: 641px) and (max-width: 1024px) {
          .pricing-table {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .pricing-table table {
            min-width: 750px;
          }
        }
        
        /* Desktop styles */
        @media (min-width: 1025px) {
          .pricing-table {
            overflow-x: visible;
          }
        }
      `}</style>

      {/* MODULE 1 — HERO */}
      <section style={{
        padding: isMobile ? "50px 20px 60px" : isTablet ? "80px 32px 70px" : "60px 48px 80px",
        background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
        position: "relative",
        overflow: "hidden",
        textAlign: "center" as const,
        minHeight: isMobile ? "auto" : isTablet ? "auto" : "auto",
        display: "flex",
        alignItems: "center"
      }}>
        {/* Animated background orbs - hidden on mobile for performance */}
        {!isMobile && (
          <>
            <div style={{
              position: "absolute",
              width: isTablet ? "400px" : "550px",
              height: isTablet ? "400px" : "550px",
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
              background: `radial-gradient(circle, ${P}15 0%, transparent 70%)`,
              bottom: "-10%",
              left: "-5%",
              animation: "float 15s ease-in-out infinite reverse",
              pointerEvents: "none" as const
            }} />
          </>
        )}

        <div style={{
          maxWidth: isMobile ? "100%" : isTablet ? "700px" : "850px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: isMobile ? "0" : "0"
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,201,167,0.1)",
            border: "1px solid rgba(0,201,167,0.3)",
            borderRadius: "100px",
            padding: isMobile ? "6px 16px" : "8px 22px",
            marginBottom: isMobile ? "18px" : "24px"
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
              fontSize: isMobile ? "12px" : "14px", 
              fontWeight: 600, 
              letterSpacing: "0.1em" 
            }}>
              TRANSPARENT PRICING
            </span>
          </div>

          <h1 style={{
            fontSize: getHeroFontSize(),
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: isMobile ? "18px" : "24px",
            color: "#fff"
          }}>
            {isMobile ? (
              <>
                Transparent<br />Pricing.
                <span className="gradient-text" style={{
                  display: "block",
                  marginTop: "8px"
                }}>
                  Flexible<br />Engagement.
                </span>
                No Surprises.
              </>
            ) : (
              <>
                Transparent Pricing.<br />
                <span className="gradient-text">
                  Flexible Engagement.
                </span><br />
                No Surprises.
              </>
            )}
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: isMobile ? "15px" : isTablet ? "16px" : "18px",
            lineHeight: 1.7,
            maxWidth: isMobile ? "100%" : isTablet ? "600px" : "650px",
            margin: "0 auto",
            padding: isMobile ? "0 10px" : "0"
          }}>
            {isMobile 
              ? "Fixed-scope proposals, milestone billing, and zero hidden costs for businesses of every size."
              : "We believe technology investment should be predictable. Fixed-scope proposals, milestone-based billing, and zero hidden costs — for businesses of every size across Canada, the USA, and the UK."
            }
          </p>
        </div>
      </section>

      {/* MODULE 2 — ENGAGEMENT MODELS */}
      <section style={{
        padding: getSectionPadding(),
        background: N1,
        position: "relative"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <h2 style={{
              fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "10px"
            }}>
              How We <span style={{ color: T }}>Engage</span>
            </h2>
            <p style={{ 
              color: "rgba(255,255,255,0.5)", 
              fontSize: isMobile ? "15px" : "16px",
              padding: isMobile ? "0" : "0"
            }}>
              Choose the engagement model that fits your needs
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: getEngagementGridColumns(),
            gap: isMobile ? "20px" : "24px"
          }}>
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="pricing-card"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "24px",
                  padding: isMobile ? "28px 22px" : "32px 28px",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={e => {
                  if (!isMobile) {
                    const target = e.currentTarget;
                    target.style.borderColor = model.color;
                  }
                }}
                onMouseLeave={e => {
                  if (!isMobile) {
                    const target = e.currentTarget;
                    target.style.borderColor = "rgba(255,255,255,0.05)";
                  }
                }}
              >
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: model.gradient
                }} />

                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{
                    width: isMobile ? "56px" : "64px",
                    height: isMobile ? "56px" : "64px",
                    borderRadius: "18px",
                    background: `linear-gradient(135deg, ${model.color}20, transparent)`,
                    border: `1px solid ${model.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isMobile ? "28px" : "32px",
                    marginBottom: "20px"
                  }}>
                    {model.icon}
                  </div>

                  <h3 style={{
                    fontSize: isMobile ? "20px" : "22px",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "6px"
                  }}>
                    {model.title}
                  </h3>

                  <p style={{
                    color: model.color,
                    fontSize: isMobile ? "13px" : "14px",
                    fontWeight: 600,
                    marginBottom: "14px",
                    lineHeight: 1.4
                  }}>
                    {model.bestFor}
                  </p>

                  <p style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: isMobile ? "14px" : "15px",
                    lineHeight: 1.6,
                    marginBottom: "20px"
                  }}>
                    {model.description}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {model.features.map((feature, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: T, fontSize: isMobile ? "15px" : "16px" }}>✓</span>
                        <span style={{ 
                          color: "rgba(255,255,255,0.8)", 
                          fontSize: isMobile ? "14px" : "15px" 
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 3 — TYPICAL INVESTMENT RANGES */}
      <section style={{
        padding: getSectionPadding(),
        background: N2,
        position: "relative"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <h2 style={{
              fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "10px"
            }}>
              Typical <span style={{ color: T }}>Investment Ranges</span>
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: isMobile ? "13px" : "14px",
              padding: isMobile ? "0 10px" : "0"
            }}>
              *All projects begin with a free scoping consultation and fixed-price proposal.
            </p>
          </div>

          {/* Currency Tabs */}
          <div style={{
            display: "flex",
            gap: isMobile ? "8px" : "12px",
            justifyContent: "center",
            marginBottom: "24px",
            flexWrap: "wrap"
          }}>
            {(['USD', 'CAD', 'GBP'] as const).map(currency => (
              <button
                key={currency}
                onClick={() => setActiveCurrency(currency)}
                className={`currency-tab ${activeCurrency === currency ? 'active' : ''}`}
                style={{
                  padding: isMobile ? "8px 18px" : "10px 24px",
                  borderRadius: "100px",
                  border: `1px solid ${activeCurrency === currency ? T : "rgba(255,255,255,0.1)"}`,
                  background: activeCurrency === currency ? "rgba(0,201,167,0.1)" : "transparent",
                  color: activeCurrency === currency ? T : "rgba(255,255,255,0.6)",
                  fontSize: isMobile ? "14px" : "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                {currency}
              </button>
            ))}
          </div>

          {/* Pricing Table */}
          <div className="pricing-table" style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "24px",
            overflowX: isMobile || isTablet ? "auto" : "hidden"
          }}>
            {isMobile ? (
              // Mobile card view
              <div style={{ 
                display: "flex", 
                flexDirection: "column",
                minWidth: "100%"
              }}>
                {pricingData.map((row, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "16px 18px",
                      borderBottom: index < pricingData.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "8px"
                    }}
                  >
                    <div style={{ 
                      color: "rgba(255,255,255,0.9)", 
                      fontSize: "14px", 
                      fontWeight: 500,
                      flex: "1",
                      minWidth: "150px"
                    }}>
                      {row.projectType}
                    </div>
                    <div style={{ 
                      color: T, 
                      fontSize: "16px", 
                      fontWeight: 700,
                      textAlign: "right" as const
                    }}>
                      {activeCurrency === 'USD' && row.usd}
                      {activeCurrency === 'CAD' && row.cad}
                      {activeCurrency === 'GBP' && row.gbp}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Desktop/Tablet table view
              <table style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: isTablet ? "750px" : "100%"
              }}>
                <thead>
                  <tr style={{
                    background: "rgba(0,201,167,0.1)",
                    borderBottom: `1px solid ${T}30`
                  }}>
                    <th style={{
                      padding: isTablet ? "14px 16px" : "16px 20px",
                      textAlign: "left" as const,
                      color: "#fff",
                      fontSize: isTablet ? "14px" : "15px",
                      fontWeight: 700
                    }}>Project Type</th>
                    <th style={{
                      padding: isTablet ? "14px 16px" : "16px 20px",
                      textAlign: "left" as const,
                      color: T,
                      fontSize: isTablet ? "14px" : "15px",
                      fontWeight: 700
                    }}>USD</th>
                    <th style={{
                      padding: isTablet ? "14px 16px" : "16px 20px",
                      textAlign: "left" as const,
                      color: T,
                      fontSize: isTablet ? "14px" : "15px",
                      fontWeight: 700
                    }}>CAD</th>
                    <th style={{
                      padding: isTablet ? "14px 16px" : "16px 20px",
                      textAlign: "left" as const,
                      color: T,
                      fontSize: isTablet ? "14px" : "15px",
                      fontWeight: 700
                    }}>GBP</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: index < pricingData.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                        transition: "background 0.3s ease"
                      }}
                      onMouseEnter={e => {
                        if (!isMobile) e.currentTarget.style.background = "rgba(0,201,167,0.05)";
                      }}
                      onMouseLeave={e => {
                        if (!isMobile) e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <td style={{
                        padding: isTablet ? "12px 16px" : "14px 20px",
                        color: "rgba(255,255,255,0.9)",
                        fontSize: isTablet ? "14px" : "15px",
                        fontWeight: 500
                      }}>{row.projectType}</td>
                      <td style={{
                        padding: isTablet ? "12px 16px" : "14px 20px",
                        color: "#fff",
                        fontSize: isTablet ? "14px" : "15px",
                        fontWeight: 600
                      }}>{row.usd}</td>
                      <td style={{
                        padding: isTablet ? "12px 16px" : "14px 20px",
                        color: "#fff",
                        fontSize: isTablet ? "14px" : "15px",
                        fontWeight: 600
                      }}>{row.cad}</td>
                      <td style={{
                        padding: isTablet ? "12px 16px" : "14px 20px",
                        color: "#fff",
                        fontSize: isTablet ? "14px" : "15px",
                        fontWeight: 600
                      }}>{row.gbp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <p style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.4)",
            fontSize: isMobile ? "12px" : "13px",
            marginTop: "16px",
            padding: isMobile ? "0" : "0"
          }}>
            All prices are starting ranges. Final pricing determined during free consultation.
          </p>
        </div>
      </section>

      {/* MODULE 4 — WHAT DRIVES COST */}
      <section style={{
        padding: getSectionPadding(),
        background: N1,
        position: "relative"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <h2 style={{
              fontSize: isMobile ? "26px" : isTablet ? "30px" : "32px",
              fontWeight: 800,
              color: "#fff",
              padding: isMobile ? "0" : "0"
            }}>
              What Determines the <span style={{ color: T }}>Cost</span> of Your Project?
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: getCostFactorsGridColumns(),
            gap: isMobile ? "18px" : "22px"
          }}>
            {costFactors.map((factor, index) => (
              <div
                key={index}
                className="pricing-card"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  padding: isMobile ? "20px" : "24px",
                  cursor: "default"
                }}
                onMouseEnter={e => {
                  if (!isMobile) {
                    e.currentTarget.style.borderColor = T;
                  }
                }}
                onMouseLeave={e => {
                  if (!isMobile) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  }
                }}
              >
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: isMobile ? "14px" : "16px", 
                  marginBottom: "10px"
                }}>
                  <span style={{ fontSize: isMobile ? "28px" : "32px" }}>{factor.icon}</span>
                  <h3 style={{
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: 700,
                    color: T,
                    flex: 1,
                    lineHeight: 1.4
                  }}>
                    {factor.q}
                  </h3>
                </div>
                <p style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: isMobile ? "14px" : "15px",
                  lineHeight: 1.6,
                  marginLeft: isMobile ? "0" : "48px"
                }}>
                  {factor.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 5 — WHY CHOOSE US + CTA FORM + FAQS */}
      <section style={{
        padding: getSectionPadding(),
        background: `linear-gradient(135deg, ${N0} 0%, ${N2} 100%)`,
        position: "relative"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {/* Why Choose Us + CTA Form in Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: getWhyChooseGridColumns(),
            gap: isMobile ? "32px" : isTablet ? "40px" : "50px",
            marginBottom: isMobile ? "40px" : "50px"
          }}>
            {/* Left Column - Why Choose Us */}
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,201,167,0.1)",
                border: "1px solid rgba(0,201,167,0.3)",
                borderRadius: "100px",
                padding: isMobile ? "6px 18px" : "8px 22px",
                marginBottom: "20px"
              }}>
                <span style={{ 
                  width: isMobile ? "6px" : "8px", 
                  height: isMobile ? "6px" : "8px", 
                  borderRadius: "50%", 
                  background: T 
                }} />
                <span style={{ 
                  color: T, 
                  fontSize: isMobile ? "12px" : "14px", 
                  fontWeight: 600 
                }}>
                  WHY CHOOSE US
                </span>
              </div>

              <h2 style={{
                fontSize: isMobile ? "24px" : isTablet ? "28px" : "30px",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "20px",
                lineHeight: 1.3
              }}>
                Why Our Pricing Works for <span style={{ color: T }}>Canadian and UK Businesses</span>
              </h2>

              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                padding: isMobile ? "22px" : "28px",
                marginBottom: "20px"
              }}>
                <p style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: isMobile ? "15px" : "16px",
                  lineHeight: 1.7,
                  marginBottom: "18px"
                }}>
                  We combine the engineering depth of a <strong style={{ color: T }}>100+ person Bangalore studio</strong> with the commercial transparency North American and UK businesses expect.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Fixed prices with no hidden costs",
                    "Milestone-based billing",
                    "You never pay for work you haven't seen",
                    "Free scoping consultation",
                    "24-hour response guarantee"
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ color: T, fontSize: isMobile ? "16px" : "18px" }}>✓</span>
                      <span style={{ 
                        color: "rgba(255,255,255,0.7)", 
                        fontSize: isMobile ? "14px" : "15px" 
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: isMobile ? "10px" : "12px"
              }}>
                {[
                  { value: "8+", label: "Years" },
                  { value: "565+", label: "Projects" },
                  { value: "100+", label: "Team" }
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    padding: isMobile ? "12px 6px" : "14px 8px",
                    textAlign: "center"
                  }}>
                    <div style={{ color: T, fontSize: isMobile ? "20px" : "24px", fontWeight: 800 }}>{stat.value}</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "12px" : "13px" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - CTA Form */}
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: isMobile ? "24px 18px" : "28px",
              backdropFilter: "blur(10px)"
            }}>
              <h3 style={{
                fontSize: isMobile ? "20px" : "22px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "18px"
              }}>
                Get Your <span style={{ color: T }}>Custom Quote</span>
              </h3>

              {submitted ? (
                <div style={{
                  textAlign: "center",
                  padding: isMobile ? "24px 0" : "32px 0",
                  animation: "fadeInScale 0.5s ease"
                }}>
                  <div style={{
                    fontSize: isMobile ? "48px" : "56px",
                    marginBottom: "16px",
                    animation: "bounce 1s ease"
                  }}>✨</div>
                  <h4 style={{ 
                    color: "#fff", 
                    fontSize: isMobile ? "18px" : "20px", 
                    fontWeight: 800, 
                    marginBottom: "8px" 
                  }}>
                    Quote Request Sent!
                  </h4>
                  <p style={{ 
                    color: "rgba(255,255,255,0.6)", 
                    fontSize: isMobile ? "14px" : "15px", 
                    marginBottom: "20px" 
                  }}>
                    We'll prepare a custom quote and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "", phone: "", dialCode: "+1", email: "",
                        projectType: "", budget: "", message: ""
                      });
                    }}
                    style={{
                      padding: isMobile ? "8px 20px" : "10px 24px",
                      borderRadius: "100px",
                      border: "none",
                      background: `linear-gradient(135deg, ${T}, ${P})`,
                      color: "#000",
                      fontWeight: 700,
                      fontSize: isMobile ? "13px" : "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      width: isMobile ? "100%" : "auto"
                    }}
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "14px" }}>
                  <input
                    required
                    style={iS}
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={e => setFormField("name", e.target.value)}
                    onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                  />

                  {/* Phone with dial code */}
                  <div style={{ 
                    display: "flex", 
                    gap: "8px", 
                    flexDirection: isMobile ? "column" : "row" 
                  }}>
                    <select
                      style={{ 
                        ...selectStyle, 
                        width: isMobile ? "100%" : "95px",
                        marginBottom: isMobile ? "8px" : "0"
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
                    value={formData.projectType}
                    onChange={e => setFormField("projectType", e.target.value)}
                  >
                    <option value="" style={optionStyle}>Project Type *</option>
                    {projectTypes.map((type, i) => (
                      <option key={i} value={type} style={optionStyle}>{type}</option>
                    ))}
                  </select>

                  <select
                    style={selectStyle}
                    value={formData.budget}
                    onChange={e => setFormField("budget", e.target.value)}
                  >
                    <option value="" style={optionStyle}>Budget Range</option>
                    {budgetRanges.map((range, i) => (
                      <option key={i} value={range} style={optionStyle}>{range}</option>
                    ))}
                  </select>

                  <textarea
                    style={textareaStyle}
                    placeholder="Tell us about your project requirements..."
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
                      padding: isMobile ? "12px" : "14px",
                      borderRadius: "10px",
                      border: "none",
                      background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg, ${T}, ${P})`,
                      color: "#000",
                      fontWeight: 800,
                      fontSize: isMobile ? "15px" : "16px",
                      cursor: loading ? "wait" : "pointer",
                      transition: "all 0.3s ease",
                      marginTop: "4px"
                    }}
                  >
                    {loading ? "Sending..." : "Get Free Quote →"}
                  </button>

                  <p style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: isMobile ? "11px" : "12px",
                    textAlign: "center",
                    marginTop: "8px"
                  }}>
                    🔒 Free consultation • No commitment required
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* FAQS Section - Below */}
          <div>
            <h3 style={{ 
              fontSize: isMobile ? "24px" : "26px", 
              fontWeight: 700, 
              color: "#fff", 
              marginBottom: "24px",
              textAlign: "center"
            }}>
              Frequently Asked <span style={{ color: T }}>Questions</span>
            </h3>
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "12px",
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFAQ === index ? 'open' : ''}`}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="faq-question" style={{
                    padding: isMobile ? "16px 18px" : "18px 22px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: isMobile ? "15px" : "16px"
                  }}>
                    <span>{faq.q}</span>
                    <div className="faq-icon" style={{
                      width: isMobile ? "24px" : "26px",
                      height: isMobile ? "24px" : "26px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: openFAQ === index ? T : "rgba(255,255,255,0.07)",
                      border: `1px solid ${openFAQ === index ? T : "rgba(255,255,255,0.12)"}`,
                      color: openFAQ === index ? "#000" : "rgba(255,255,255,0.5)",
                      transform: openFAQ === index ? "rotate(45deg)" : "none",
                      transition: "all 0.3s ease"
                    }}>
                      +
                    </div>
                  </div>
                  <div className="faq-answer" style={{
                    maxHeight: openFAQ === index ? "200px" : "0",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    padding: openFAQ === index ? (isMobile ? "0 18px 16px 18px" : "0 22px 18px 22px") : "0 22px",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: isMobile ? "14px" : "15px",
                    lineHeight: 1.6
                  }}>
                    <p style={{ margin: 0 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}