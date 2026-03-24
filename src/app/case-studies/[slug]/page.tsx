"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const T = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// Case studies data with enhanced information
const CASES = [
  { 
    id: 1, 
    slug: "manufacturing-crm",
    category: "CRM", 
    industry: "Manufacturing", 
    icon: "🏭", 
    title: "Enterprise CRM for a Manufacturing Client", 
    result: "35% Efficiency Gain",
    duration: "4 months",
    team: "4 developers, 1 project manager",
    keyFeatures: ["Dealer Management", "Lead Assignment Engine", "Mobile Field App", "Real-time Dashboard", "ERP Integration"],
    roi: "320% ROI in first year",
    testimonial: "NNC Digital transformed our dealer management. We now have real-time visibility and our field reps are 60% faster. The mobile app has been a game-changer for our team in the field.",
    testimonialAuthor: "John Matthews",
    challenge: "A mid-sized manufacturer managing their dealer network across spreadsheets and disconnected email chains — poor pipeline visibility, no mobile access, no leadership reporting.", 
    solution: "Custom CRM with automated dealer management, lead assignment, real-time sales tracking, and a field rep mobile app — fully integrated with their existing ERP.", 
    results: [
      "35% improvement in operational efficiency",
      "Sales pipeline visibility from zero to real-time",
      "Field rep response time reduced by 60%",
      "Full dealer network performance visibility for leadership"
    ] 
  },
  { 
    id: 2, 
    slug: "healthcare-mobile-crm",
    category: "Mobile + CRM", 
    industry: "Healthcare", 
    icon: "🏥", 
    title: "Mobile App + CRM for Healthcare Provider", 
    result: "42% Increase in Repeat Bookings",
    duration: "5 months",
    team: "3 developers, 1 UI/UX designer",
    keyFeatures: ["Patient Mobile App", "WhatsApp Integration", "Automated Reminders", "Online Booking", "Patient History Tracking"],
    roi: "285% ROI within 6 months",
    testimonial: "Patient engagement has never been easier. The WhatsApp integration alone saved us 30% on front desk workload. Our patients love the convenience of booking through the app.",
    testimonialAuthor: "Dr. Sarah Chen",
    challenge: "A multi-location allied health clinic losing patients between appointments — poor follow-up and no digital touchpoints between visits.", 
    solution: "Patient-facing mobile app with WhatsApp automated reminders, online booking, and a backend CRM tracking patient history and triggering follow-up sequences automatically.", 
    results: [
      "42% increase in repeat bookings within 90 days",
      "WhatsApp reminder open rates above 85%",
      "Front desk workload reduced by 30%"
    ] 
  },
  { 
    id: 3, 
    slug: "d2c-automation",
    category: "Automation", 
    industry: "E-Commerce", 
    icon: "🛒", 
    title: "Full Funnel Automation for D2C Brand", 
    result: "2.4× Lead Conversion",
    duration: "3 months",
    team: "2 developers, 1 marketing automation specialist",
    keyFeatures: ["Ad Platform Integration", "Automated Nurture Sequences", "Conversion-Optimized Landing Pages", "Revenue Attribution", "Multi-channel Follow-up"],
    roi: "412% ROI in first 90 days",
    testimonial: "We finally have full attribution from ad spend to revenue. Our CPA dropped 38% almost immediately. The automation has freed up our team to focus on strategy.",
    testimonialAuthor: "Marcus Lee",
    challenge: "D2C brand generating ad traffic but converting fewer than 3% of leads into customers. CRM disconnected from ad platforms. Follow-up entirely manual.", 
    solution: "End-to-end funnel automation — Google and Meta ads connected to CRM, automated email and WhatsApp nurture sequences, redesigned landing pages for conversion.", 
    results: [
      "2.4× improvement in lead-to-customer conversion",
      "Cost per acquisition reduced by 38%",
      "Full ad spend attribution to closed revenue for the first time"
    ] 
  },
  { 
    id: 4, 
    slug: "distribution-erp",
    category: "ERP", 
    industry: "Distribution", 
    icon: "📦", 
    title: "Custom ERP for Distribution Company", 
    result: "28% Inventory Reduction",
    duration: "8 months",
    team: "5 developers, 1 business analyst",
    keyFeatures: ["Real-time Inventory Tracking", "Automated Reorder Points", "Warehouse Management", "Customer Portal", "Analytics Dashboard"],
    roi: "560% ROI over 2 years",
    testimonial: "Real-time inventory visibility eliminated stockouts completely. We saved millions in carrying costs and our fulfillment speed is now industry-leading.",
    testimonialAuthor: "Robert Hayes",
    challenge: "A distribution company with 5 warehouses had no real-time inventory visibility, leading to stockouts, over-ordering, and delayed customer shipments.", 
    solution: "Cloud-based ERP with real-time inventory tracking, automated reorder points, warehouse management system, and customer portal for order tracking.", 
    results: [
      "28% reduction in overall inventory levels",
      "Stockouts eliminated entirely",
      "Order fulfilment time reduced from 3 days to 6 hours",
      "Customer satisfaction score increased by 34%"
    ] 
  },
  { 
    id: 5, 
    slug: "professional-services-portal",
    category: "Web", 
    industry: "Professional Services", 
    icon: "💼", 
    title: "Client Portal for Professional Services Firm", 
    result: "52% Faster Client Onboarding",
    duration: "4 months",
    team: "3 developers, 1 QA engineer",
    keyFeatures: ["Digital Forms", "Automated Workflows", "Document Management", "eSignature Integration", "Client Dashboard"],
    roi: "450% ROI in first year",
    testimonial: "Onboarding used to take days with PDF forms and emails. Now it's a seamless 15-minute digital experience. Our clients consistently mention how smooth the process is.",
    testimonialAuthor: "Jennifer Walsh",
    challenge: "A professional services firm onboarding new clients with PDF forms, email attachments, and manual data entry — leading to errors and slow turnaround.", 
    solution: "Custom client portal with digital forms, automated workflows, document management, and integration with their practice management system.", 
    results: [
      "52% faster client onboarding time",
      "Data entry errors reduced by 97%",
      "Client satisfaction score improved from 3.8 to 4.9",
      "Administrative time saved: 18 hours per week"
    ] 
  },
  { 
    id: 6, 
    slug: "field-service-app",
    category: "Mobile", 
    industry: "Field Service", 
    icon: "🔧", 
    title: "Field Service Mobile App", 
    result: "41% More Jobs Per Day",
    duration: "6 months",
    team: "4 developers, 1 UI/UX designer",
    keyFeatures: ["Offline Mode", "GPS Scheduling", "Digital Sign-off", "Real-time Sync", "Route Optimization"],
    roi: "390% ROI in first 8 months",
    testimonial: "Our technicians love the offline capability. They're completing 41% more jobs daily with no paperwork. Dispatchers finally have real-time visibility into field operations.",
    testimonialAuthor: "Mike Peterson",
    challenge: "Field service technicians using paper job sheets and manual scheduling — jobs lost, duplicate visits, and no real-time visibility for dispatchers.", 
    solution: "Native mobile app with offline capability, GPS-optimised scheduling, digital job sign-off, and real-time sync with back-office systems.", 
    results: [
      "41% increase in jobs completed per technician per day",
      "Travel time reduced by 28%",
      "Paperwork eliminated completely",
      "First-time fix rate improved from 72% to 91%"
    ] 
  },
];

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const caseStudy = CASES.find(c => c.slug === slug);
  
  if (!caseStudy) {
    return (
      <>
        <Navbar />
        <div style={{ 
          minHeight: "100vh", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          background: N0,
          padding: "40px",
          textAlign: "center"
        }}>
          <div>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px,5vw,48px)", marginBottom: "20px" }}>Case Study Not Found</h1>
            <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "30px" }}>The case study you're looking for doesn't exist.</p>
            <Link href="/case-studies" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              background: `linear-gradient(135deg, ${T}, ${TD})`,
              borderRadius: "40px",
              color: "#000",
              fontWeight: 600,
              textDecoration: "none"
            }}>
              ← Back to All Case Studies
            </Link>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatA {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-20px,-20px); }
        }
        @keyframes floatB {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(18px,18px); }
        }
        @keyframes pulseDot {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.6); }
        }
      `}</style>
      
      {/* Hero Section with Floating Elements */}
      <section style={{ 
        padding: "clamp(60px,8vw,100px) clamp(20px,5vw,48px)", 
        background: `linear-gradient(135deg, ${N0} 0%, #041628 45%, ${N0} 100%)`,
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Floating Background Elements */}
        <div style={{ 
          position: "absolute", 
          width: "600px", 
          height: "600px", 
          borderRadius: "50%", 
          background: `radial-gradient(circle, ${T}12 0%, transparent 65%)`, 
          top: "-20%", 
          right: "-8%", 
          pointerEvents: "none", 
          animation: "floatA 22s ease-in-out infinite" 
        }}/>
        <div style={{ 
          position: "absolute", 
          width: "340px", 
          height: "340px", 
          borderRadius: "50%", 
          background: "radial-gradient(circle, #8B5CF620 0%, transparent 65%)", 
          bottom: "-12%", 
          left: "-5%", 
          pointerEvents: "none", 
          animation: "floatB 17s ease-in-out infinite" 
        }}/>
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Link href="/case-studies" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: T,
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            marginBottom: "40px",
            transition: "gap 0.3s"
          }}
          onMouseEnter={e => { e.currentTarget.style.gap = "10px"; }}
          onMouseLeave={e => { e.currentTarget.style.gap = "6px"; }}>
            ← Back to All Case Studies
          </Link>
          
          <div style={{ animation: "fadeUp 0.6s ease both" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,201,167,.08)",
                border: "1px solid rgba(0,201,167,.25)",
                borderRadius: "100px",
                padding: "6px 20px"
              }}>
                <span style={{ 
                  width: "7px", 
                  height: "7px", 
                  borderRadius: "50%", 
                  background: T, 
                  display: "inline-block", 
                  boxShadow: `0 0 8px ${T}`, 
                  animation: "pulseDot 2s ease-in-out infinite" 
                }}/>
                <span style={{ color: T, fontSize: "11px", fontWeight: 700, letterSpacing: ".12em" }}>{caseStudy.category}</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>•</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>{caseStudy.industry}</span>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px", marginBottom: "32px" }}>
              <div style={{
                width: "clamp(80px,10vw,100px)",
                height: "clamp(80px,10vw,100px)",
                borderRadius: "24px",
                background: "rgba(0,201,167,0.1)",
                border: `2px solid ${T}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "clamp(44px,8vw,56px)"
              }}>
                {caseStudy.icon}
              </div>
              <div>
                <h1 style={{
                  fontSize: "clamp(32px,6vw,52px)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.2,
                  margin: 0,
                  letterSpacing: "-0.02em"
                }}>
                  {caseStudy.title}
                </h1>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
                  <span style={{
                    padding: "4px 12px",
                    background: `${T}20`,
                    borderRadius: "20px",
                    color: T,
                    fontSize: "14px",
                    fontWeight: 500
                  }}>
                    ⏱️ {caseStudy.duration}
                  </span>
                  <span style={{
                    padding: "4px 12px",
                    background: `${T}20`,
                    borderRadius: "20px",
                    color: T,
                    fontSize: "14px",
                    fontWeight: 500
                  }}>
                    👥 {caseStudy.team}
                  </span>
                  <span style={{
                    padding: "4px 12px",
                    background: `${T}20`,
                    borderRadius: "20px",
                    color: T,
                    fontSize: "14px",
                    fontWeight: 500
                  }}>
                    💰 {caseStudy.roi}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Key Result Banner */}
            <div style={{
              background: `linear-gradient(135deg, ${T}15, transparent)`,
              borderLeft: `4px solid ${T}`,
              padding: "20px 24px",
              borderRadius: "12px",
              marginTop: "16px"
            }}>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(16px,2.5vw,20px)", fontWeight: 600, margin: 0 }}>
                🎯 Key Result: <span style={{ color: T }}>{caseStudy.result}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section style={{ padding: "clamp(48px,6vw,80px) clamp(20px,5vw,48px)", background: N2, position: "relative", overflow: "hidden" }}>
        {/* Grid Background Pattern */}
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          pointerEvents: "none", 
          backgroundImage: "linear-gradient(rgba(0,201,167,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.018) 1px,transparent 1px)", 
          backgroundSize: "56px 56px" 
        }}/>
        
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          
          {/* Challenge & Solution */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(24px,4vw,40px)",
            marginBottom: "clamp(40px,6vw,64px)"
          }}>
            <div style={{
              background: "rgba(255,255,255,0.025)",
              borderRadius: "24px",
              padding: "clamp(28px,5vw,40px)",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease"
            }}>
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>⚠️</div>
              <h2 style={{ color: T, fontSize: "clamp(20px,3vw,24px)", fontWeight: 700, marginBottom: "20px" }}>The Challenge</h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(15px,2vw,17px)", lineHeight: 1.7, margin: 0 }}>
                {caseStudy.challenge}
              </p>
            </div>
            
            <div style={{
              background: "rgba(255,255,255,0.025)",
              borderRadius: "24px",
              padding: "clamp(28px,5vw,40px)",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease"
            }}>
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>💡</div>
              <h2 style={{ color: T, fontSize: "clamp(20px,3vw,24px)", fontWeight: 700, marginBottom: "20px" }}>The Solution</h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(15px,2vw,17px)", lineHeight: 1.7, margin: 0 }}>
                {caseStudy.solution}
              </p>
            </div>
          </div>
          
          {/* Key Features */}
          <div style={{
            background: "rgba(255,255,255,0.025)",
            borderRadius: "24px",
            padding: "clamp(28px,5vw,40px)",
            border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "clamp(40px,6vw,64px)",
            transition: "all 0.3s ease"
          }}>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>✨</div>
            <h2 style={{ color: T, fontSize: "clamp(20px,3vw,24px)", fontWeight: 700, marginBottom: "24px" }}>Key Features</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px"
            }}>
              {caseStudy.keyFeatures.map((feature, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  background: "rgba(0,201,167,0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(0,201,167,0.15)"
                }}>
                  <span style={{ color: T, fontSize: "18px" }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: 500 }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Results */}
          <div style={{
            background: `linear-gradient(135deg, ${T}08, transparent)`,
            borderRadius: "24px",
            padding: "clamp(32px,5vw,48px)",
            border: `1px solid ${T}30`,
            marginBottom: "clamp(40px,6vw,64px)"
          }}>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>📈</div>
            <h2 style={{ color: T, fontSize: "clamp(20px,3vw,24px)", fontWeight: 700, marginBottom: "32px" }}>Measurable Results</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px"
            }}>
              {caseStudy.results.map((result, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px 20px",
                  background: "rgba(0,201,167,0.05)",
                  borderRadius: "16px",
                  border: "1px solid rgba(0,201,167,0.2)"
                }}>
                  <span style={{ color: T, fontSize: "22px" }}>📊</span>
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(14px,2vw,16px)", fontWeight: 500 }}>{result}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial */}
          <div style={{
            background: `linear-gradient(135deg, ${T}08, transparent)`,
            borderRadius: "24px",
            padding: "clamp(32px,5vw,48px)",
            border: `1px solid ${T}20`,
            marginBottom: "clamp(40px,6vw,64px)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "56px", marginBottom: "20px" }}>💬</div>
            <blockquote style={{
              fontSize: "clamp(18px,3vw,22px)",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.85)",
              maxWidth: "800px",
              margin: "0 auto 24px",
              fontStyle: "italic"
            }}>
              "{caseStudy.testimonial}"
            </blockquote>
            <p style={{ color: T, fontWeight: 700, fontSize: "18px", margin: 0 }}>
              {caseStudy.testimonialAuthor}
            </p>
          </div>
          
          {/* CTA Section */}
          <div style={{
            textAlign: "center",
            background: "rgba(0,201,167,0.03)",
            borderRadius: "24px",
            padding: "clamp(40px,6vw,60px)",
            border: "1px solid rgba(0,201,167,0.15)"
          }}>
            <h3 style={{ color: "#fff", fontSize: "clamp(24px,4vw,32px)", fontWeight: 800, marginBottom: "16px" }}>
              Ready to Achieve Similar Results?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(14px,2vw,16px)", maxWidth: "600px", margin: "0 auto 32px" }}>
              Let's discuss how NNC Digital can help your business achieve {caseStudy.result} and beyond.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/case-studies#contact-form" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 36px",
                background: `linear-gradient(135deg, ${T}, ${TD})`,
                borderRadius: "50px",
                color: "#000",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 10px 28px ${T}50`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                Start Your Project →
              </Link>
              <Link href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 36px",
                background: "transparent",
                borderRadius: "50px",
                color: T,
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                border: `1px solid ${T}`,
                transition: "all 0.3s ease"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${T}20`; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
                Schedule a Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}