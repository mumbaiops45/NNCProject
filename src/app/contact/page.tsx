
// "use client";

// import { useState, useEffect, CSSProperties } from "react";
// import Navbar from "../components/Navbar";
// import SchemaMarkup from "../components/SchemaMarkup";
// import { getLocalBusinessSchema, getFAQSchema } from "../lib/schema";

// // ─── Design tokens ────────────────────────────────────────────────────────────
// const T = "#00C9A7";
// const TD = "#00a07a";
// const N0 = "#010812";
// const N1 = "#030B18";
// const N2 = "#061425";

// // Types
// interface FAQItem { q: string; a: string; }
// interface Office { country: string; city: string; address: string; phone: string; email?: string; }
// interface DialCode { code: string; flag: string; country: string; }

// export default function ContactPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [formData, setFormData] = useState({
//     firstName: "", lastName: "", phone: "", dialCode: "+1",
//     email: "", company: "", service: "", project: "", timeline: ""
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const isMobile = windowWidth <= 640;
//   const isTablet = windowWidth > 640 && windowWidth <= 1024;

//   const toggleFAQ = (i: number) => setOpenIndex(openIndex === i ? null : i);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
//   };

//   const setFormField = (k: string, v: string) => setFormData(f => ({ ...f, [k]: v }));

//   // ─── Data exactly as per spec ───
//   const faqs: FAQItem[] = [
//     {
//       q: "Do you work with businesses outside of India?",
//       a: "Yes. NNC Digital Solutions is specifically built for Canada, the United States, and the United Kingdom. Our client-facing teams operate in North American and UK time zones."
//     },
//     {
//       q: "What happens after I submit the contact form?",
//       a: "A dedicated project consultant reviews your submission and responds within 24 business hours with thoughts, relevant case studies, and a proposed next step."
//     },
//     {
//       q: "Is the initial consultation free?",
//       a: "Absolutely. Our first conversation is always free. We provide a fixed-price proposal at the end of the discovery phase — with no commitment to proceed."
//     },
//     {
//       q: "Who is behind NNC Digital Solutions?",
//       a: "NNC Digital is the international arm of Nakshatra Namaha Creations Pvt. Ltd. — Bangalore's trusted digital studio with 8+ years and 565+ projects. Visit www.nakshatranamahacreations.com to learn more."
//     }
//   ];

//   const globalOffices: Office[] = [
//     // International Offices - With original phone numbers as per spec
//     { country: "🇨🇦 Canada", city: "Toronto, Ontario", address: "Toronto, Ontario", phone: "+91 9900566466", email: "canada@nncdigital.com" },
//     { country: "🇺🇸 USA", city: "New York, NY", address: "New York, NY", phone: "+91 9900566466", email: "usa@nncdigital.com" },
//     { country: "🇬🇧 UK", city: "London, United Kingdom", address: "London, United Kingdom", phone: "91 9900566466", email: "uk@nncdigital.com" },
//     // India Offices - All with +91 9900566466
//     { country: "🇮🇳 India (HQ)", city: "Bangalore", address: "Darshan Plazza, Banashankari, Bengaluru 560061", phone: "+91 9900566466", email: "info@nakshatranamahacreations.com" },
//     { country: "🇮🇳 India", city: "Mysore", address: "SUSWANI TOWERS, JP Nagar, Mysuru 570008", phone: "+91 9900566466" },
//     { country: "🇮🇳 India", city: "Mumbai", address: "Lodha Signet, 302, Kolshet Rd, Thane West 400607", phone: "+91 9900566466" },
//     { country: "🇮🇳 India", city: "Hyderabad", address: "64/2 RT, Prakashnagar, Begumpet, Hyderabad 500016", phone: "+91 9900566466" }
//   ];

//   // Schema data for main offices only
//   const localBusinessData = [
//     { city: "Toronto", region: "ON", country: "CA", telephone: "+1-647-XXX-XXXX", email: "canada@nncdigital.com", address: "Toronto, Ontario" },
//     { city: "New York", region: "NY", country: "US", telephone: "+1-631-XXX-XXXX", email: "usa@nncdigital.com", address: "New York, NY" },
//     { city: "London", region: "", country: "GB", telephone: "+44-20-XXXX-XXXX", email: "uk@nncdigital.com", address: "London, United Kingdom" },
//     { city: "Bangalore", region: "Karnataka", country: "IN", telephone: "+91-9900566466", email: "info@nakshatranamahacreations.com", address: "Darshan Plazza, Banashankari, Bengaluru 560061" }
//   ];

//   const localBusinessSchema = getLocalBusinessSchema(localBusinessData);
//   const faqSchema = getFAQSchema(faqs);

//   const servicesList: string[] = [
//     "CRM Development", "ERP Development", "Web Development", "Mobile App Development",
//     "Digital Transformation", "SEO & Digital Marketing", "Cloud Migration", "System Integration"
//   ];

//   const timelineOptions: string[] = ["Immediately", "1-3 Months", "3-6 Months", "6-12 Months", "Just Exploring"];

//   const dialCodes: DialCode[] = [
//     { code: "+1", flag: "🇨🇦", country: "CA" },
//     { code: "+1", flag: "🇺🇸", country: "US" },
//     { code: "+44", flag: "🇬🇧", country: "UK" },
//     { code: "+91", flag: "🇮🇳", country: "IN" }
//   ];

//   // Responsive styles
//   const sectionPadding = { mobile: "40px 16px", tablet: "60px 32px", desktop: "80px 48px" };
//   const getSectionPadding = () => { if (isMobile) return sectionPadding.mobile; if (isTablet) return sectionPadding.tablet; return sectionPadding.desktop; };
//   const getGridColumns = () => { if (isMobile) return "1fr"; if (isTablet) return "1fr"; return "1fr 1.2fr"; };
//   const getOfficeGridColumns = () => { if (isMobile) return "1fr"; if (isTablet) return "repeat(2, 1fr)"; return "repeat(3, 1fr)"; };
//   const getHeroFontSize = () => { if (isMobile) return "clamp(28px, 8vw, 36px)"; if (isTablet) return "clamp(36px, 5vw, 44px)"; return "clamp(44px, 5vw, 60px)"; };

//   // Base input styles
//   const baseInputStyle: CSSProperties = {
//     width: "100%", padding: isMobile ? "14px 16px" : "16px 18px", borderRadius: "12px",
//     background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
//     color: "#fff", fontSize: isMobile ? "16px" : "15px", fontFamily: "'Poppins', sans-serif",
//     outline: "none", transition: "all 0.3s ease",
//     WebkitAppearance: "none" as const, MozAppearance: "none" as const,
//   };
//   const iS: CSSProperties = { ...baseInputStyle };
//   const selectStyle: CSSProperties = {
//     ...baseInputStyle, cursor: "pointer", appearance: "none" as const,
//     backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300C9A7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
//     backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", backgroundSize: "16px", paddingRight: "40px",
//   };
//   const optionStyle: CSSProperties = { background: N2, color: "#fff" };

//   // Office Card Component
//   const OfficeCard = ({ office, isMobile, T, index }: { office: Office; isMobile: boolean; T: string; index: number }) => (
//     <div style={{
//       background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
//       borderRadius: isMobile ? "20px" : "24px", padding: isMobile ? "20px" : "24px",
//       transition: "all 0.3s ease", animation: `fadeInUp 0.5s ease ${index * 0.1}s both`
//     }}
//       onMouseEnter={e => { const target = e.currentTarget; if (!isMobile) target.style.transform = "translateY(-5px)"; target.style.borderColor = T; target.style.boxShadow = `0 10px 30px ${T}20`; }}
//       onMouseLeave={e => { const target = e.currentTarget; target.style.transform = "translateY(0)"; target.style.borderColor = "rgba(255,255,255,0.05)"; target.style.boxShadow = "none"; }}
//     >
//       <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "12px" : "12px", marginBottom: isMobile ? "16px" : "16px" }}>
//         <span style={{ fontSize: isMobile ? "28px" : "28px" }}>{office.country.split(' ')[0]}</span>
//         <div>
//           <div style={{ color: T, fontWeight: 700, fontSize: isMobile ? "16px" : "16px" }}>{office.city}</div>
//           <div style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "13px" : "13px" }}>{office.country}</div>
//         </div>
//       </div>
//       <div style={{ marginBottom: isMobile ? "12px" : "12px" }}>
//         <div style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? "14px" : "14px", lineHeight: 1.6, wordBreak: "break-word" as const }}>
//           📍 {office.address}
//         </div>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "8px" : "8px" }}>
//         <a href={`tel:${office.phone.replace(/\s|-/g, "")}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: T, fontSize: isMobile ? "14px" : "14px", fontWeight: 600, textDecoration: "none", wordBreak: "break-all" as const }}>
//           📞 {office.phone}
//         </a>
//         {office.email && (
//           <a href={`mailto:${office.email}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.7)", fontSize: isMobile ? "14px" : "14px", textDecoration: "none", wordBreak: "break-all" as const }}>
//             ✉️ {office.email}
//           </a>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <Navbar />
//       <SchemaMarkup schema={localBusinessSchema} id="local-business-schema" />
//       <SchemaMarkup schema={faqSchema} id="faq-schema" />

//       {/* MODULE 1 — HERO */}
//       <section style={{
//         padding: isMobile ? "40px 16px 40px" : isTablet ? "100px 32px 60px" : "90px 48px 80px",
//         background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
//         position: "relative", overflow: "hidden", textAlign: "center" as const,
//         minHeight: isMobile ? "auto" : "50vh", display: "flex", alignItems: "center"
//       }}>
//         {/* Background orbs */}
//         {!isMobile && (
//           <>
//             <div style={{
//               position: "absolute", width: isTablet ? "400px" : "600px", height: isTablet ? "400px" : "600px",
//               borderRadius: "50%", background: `radial-gradient(circle, ${T}15 0%, transparent 70%)`,
//               top: "-20%", right: "-10%", animation: "float 20s ease-in-out infinite", pointerEvents: "none" as const
//             }} />
//             <div style={{
//               position: "absolute", width: isTablet ? "300px" : "400px", height: isTablet ? "300px" : "400px",
//               borderRadius: "50%", background: `radial-gradient(circle, #8B5CF615 0%, transparent 70%)`,
//               bottom: "-10%", left: "-5%", animation: "float 15s ease-in-out infinite reverse", pointerEvents: "none" as const
//             }} />
//           </>
//         )}

//         <div style={{ maxWidth: isMobile ? "100%" : "800px", margin: "0 auto", position: "relative", zIndex: 2, width: "100%" }}>
//           <div style={{
//             display: "inline-flex", alignItems: "center", gap: "8px",
//             background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
//             borderRadius: "100px", padding: isMobile ? "8px 18px" : "8px 20px",
//             marginBottom: isMobile ? "20px" : "24px"
//           }}>
//             <span style={{ width: isMobile ? "6px" : "8px", height: isMobile ? "6px" : "8px", borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}` }} />
//             <span style={{ color: T, fontSize: isMobile ? "13px" : "14px", fontWeight: 600, letterSpacing: "0.1em" }}>LET'S CONNECT</span>
//           </div>

//           <h1 style={{
//             fontSize: getHeroFontSize(), fontWeight: 900, lineHeight: 1.2,
//             marginBottom: isMobile ? "20px" : "24px", color: "#fff", padding: isMobile ? "0" : "0"
//           }}>
//             Let's Build Something{" "}
//             <span style={{
//               background: `linear-gradient(135deg, ${T}, #8B5CF6, #FF6B6B)`,
//               WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//               backgroundSize: "200% 200%", animation: "gradientShift 8s ease infinite"
//             }}>
//               Exceptional Together
//             </span>
//           </h1>

//           <p style={{
//             color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "16px" : isTablet ? "17px" : "18px",
//             lineHeight: 1.7, maxWidth: isMobile ? "100%" : "600px", margin: "0 auto", padding: isMobile ? "0 10px" : "0"
//           }}>
//             Whether you have a fully defined project or just a problem you're trying to solve — we'd love to talk. We respond within 24 business hours with honest, practical advice.
//           </p>
//         </div>
//       </section>

//       {/* MODULE 2 — SPLIT LAYOUT - Contact Details + Lead Form */}
//       <section style={{ padding: getSectionPadding(), background: N1, position: "relative" }}>
//         <div style={{
//           maxWidth: "1200px", margin: "0 auto",
//           display: "grid", gridTemplateColumns: getGridColumns(),
//           gap: isMobile ? "24px" : isTablet ? "24px" : "30px"
//         }}>

//           {/* LEFT - Contact Details */}
//           <div style={{
//             background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
//             borderRadius: isMobile ? "20px" : "32px", padding: isMobile ? "24px 20px" : isTablet ? "32px 28px" : "48px",
//             backdropFilter: "blur(10px)", animation: "fadeInLeft 0.8s ease"
//           }}>
//             <h2 style={{
//               fontSize: isMobile ? "26px" : isTablet ? "30px" : "36px",
//               fontWeight: 800, color: "#fff", marginBottom: isMobile ? "24px" : "32px"
//             }}>
//               Get in <span style={{ color: T }}>Touch</span>
//             </h2>

//             <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "28px" : "32px" }}>

//               {/* Call Us */}
//               <div>
//                 <h3 style={{
//                   fontSize: isMobile ? "18px" : "20px", fontWeight: 700, color: T,
//                   marginBottom: isMobile ? "16px" : "20px", display: "flex", alignItems: "center", gap: "10px"
//                 }}>
//                   <span style={{ fontSize: isMobile ? "22px" : "24px" }}>📞</span> Call Us
//                 </h3>
//                 <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "14px" }}>
//                   {[
//                     { flag: "🇨🇦", label: "Canada", phone: "+91 9900566466" },
//                     { flag: "🇺🇸", label: "USA", phone: "+91 9900566466" },
//                     { flag: "🇬🇧", label: "UK", phone: "+91 9900566466" },
//                     { flag: "🇮🇳", label: "India HQ", phone: "+91 9900566466" }
//                   ].map((item, i) => (
//                     <a key={i} href={`tel:${item.phone.replace(/\s|-/g, "")}`} style={{
//                       display: "flex", flexDirection: isMobile ? "column" : "row",
//                       alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? "4px" : "12px",
//                       padding: isMobile ? "14px 16px" : "12px 16px",
//                       background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)",
//                       borderRadius: "12px", textDecoration: "none", transition: "all 0.3s ease",
//                     }}
//                       onMouseEnter={e => { const target = e.currentTarget; target.style.background = `rgba(0,201,167,0.1)`; target.style.borderColor = T; }}
//                       onMouseLeave={e => { const target = e.currentTarget; target.style.background = "rgba(255,255,255,0.03)"; target.style.borderColor = "rgba(255,255,255,0.05)"; }}
//                     >
//                       <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                         <span style={{ fontSize: isMobile ? "20px" : "20px" }}>{item.flag}</span>
//                         <span style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? "14px" : "14px", fontWeight: 500 }}>
//                           {item.label}:
//                         </span>
//                       </div>
//                       <span style={{ color: T, fontWeight: 600, fontSize: isMobile ? "15px" : "15px", marginLeft: isMobile ? "28px" : "0" }}>
//                         {item.phone}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Email - Both emails as per spec */}
//               <div>
//                 <h3 style={{
//                   fontSize: isMobile ? "18px" : "20px", fontWeight: 700, color: T,
//                   marginBottom: isMobile ? "16px" : "20px", display: "flex", alignItems: "center", gap: "10px"
//                 }}>
//                   <span style={{ fontSize: isMobile ? "22px" : "24px" }}>✉️</span> Email
//                 </h3>
//                 <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "14px" }}>
//                   {[
//                     { email: "hello@nncdigital.com", label: "General Inquiries" },
//                     { email: "info@nakshatranamahacreations.com", label: "India Office" }
//                   ].map((item, i) => (
//                     <a key={i} href={`mailto:${item.email}`} style={{
//                       display: "flex", flexDirection: isMobile ? "column" : "row",
//                       alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? "4px" : "12px",
//                       padding: isMobile ? "14px 16px" : "12px 16px",
//                       background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)",
//                       borderRadius: "12px", textDecoration: "none", transition: "all 0.3s ease"
//                     }}
//                       onMouseEnter={e => { const target = e.currentTarget; target.style.background = `rgba(0,201,167,0.1)`; target.style.borderColor = T; }}
//                       onMouseLeave={e => { const target = e.currentTarget; target.style.background = "rgba(255,255,255,0.03)"; target.style.borderColor = "rgba(255,255,255,0.05)"; }}
//                     >
//                       <span style={{ color: T, fontSize: isMobile ? "16px" : "16px" }}>✉️</span>
//                       <div>
//                         <div style={{ color: "#fff", fontWeight: 600, fontSize: isMobile ? "15px" : "15px", wordBreak: "break-all" as const }}>
//                           {item.email}
//                         </div>
//                         <div style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "13px" : "13px" }}>
//                           {item.label}
//                         </div>
//                       </div>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT - Lead Form */}
//           <div style={{
//             background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
//             borderRadius: isMobile ? "20px" : "32px", padding: isMobile ? "24px 20px" : isTablet ? "32px 28px" : "48px",
//             backdropFilter: "blur(10px)", animation: "fadeInRight 0.8s ease",
//             width: "100%", boxSizing: "border-box" as const
//           }}>
//             <h3 style={{
//               fontSize: isMobile ? "22px" : isTablet ? "24px" : "24px",
//               fontWeight: 700, color: "#fff", marginBottom: isMobile ? "24px" : "28px"
//             }}>
//               Share Your <span style={{ color: T }}>Project Idea</span>
//             </h3>

//             {submitted ? (
//               <div style={{ textAlign: "center", padding: isMobile ? "30px 10px" : "40px 20px", animation: "fadeInScale 0.5s ease" }}>
//                 <div style={{ fontSize: isMobile ? "56px" : "64px", marginBottom: "20px", animation: "bounce 1s ease" }}>✨</div>
//                 <h4 style={{ color: "#fff", fontSize: isMobile ? "22px" : "24px", fontWeight: 800, marginBottom: "12px" }}>Message Sent!</h4>
//                 <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "15px" : "16px", marginBottom: "28px" }}>
//                   Thank you for reaching out. A dedicated consultant will contact you within 24 hours.
//                 </p>
//                 <button onClick={() => { setSubmitted(false); setFormData({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", company: "", service: "", project: "", timeline: "" }); }}
//                   style={{
//                     padding: isMobile ? "14px 28px" : "12px 32px", borderRadius: "100px", border: "none",
//                     background: `linear-gradient(135deg, ${T}, #8B5CF6)`, color: "#000", fontWeight: 700,
//                     fontSize: isMobile ? "15px" : "15px", cursor: "pointer", transition: "all 0.3s ease",
//                     width: isMobile ? "100%" : "auto"
//                   }}
//                 >Send Another Message</button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: isMobile ? "16px" : "20px", width: "100%" }}>
//                 {/* Name fields */}
//                 <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "14px" : "16px", width: "100%" }}>
//                   <input required style={iS} placeholder="First Name *" value={formData.firstName} onChange={e => setFormField("firstName", e.target.value)}
//                     onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
//                     onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
//                   <input style={iS} placeholder="Last Name" value={formData.lastName} onChange={e => setFormField("lastName", e.target.value)}
//                     onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
//                     onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
//                 </div>

//                 {/* Phone with dial code */}
//                 <div style={{ display: "flex", gap: isMobile ? "12px" : "12px", flexDirection: isMobile ? "column" : "row", width: "100%" }}>
//                   <select style={{ ...selectStyle, width: isMobile ? "100%" : "110px" }} value={formData.dialCode} onChange={e => setFormField("dialCode", e.target.value)}>
//                     {dialCodes.map((d, i) => (<option key={i} value={d.code} style={optionStyle}>{d.flag} {d.code}</option>))}
//                   </select>
//                   <input required type="tel" style={{ ...iS, flex: 1 }} placeholder="Phone Number *" value={formData.phone} onChange={e => setFormField("phone", e.target.value)}
//                     onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
//                     onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
//                 </div>

//                 {/* Email & Company */}
//                 <input required type="email" style={iS} placeholder="Business Email *" value={formData.email} onChange={e => setFormField("email", e.target.value)}
//                   onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
//                   onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
//                 <input style={iS} placeholder="Company Name" value={formData.company} onChange={e => setFormField("company", e.target.value)}
//                   onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
//                   onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />

//                 {/* Service of Interest */}
//                 <select required style={selectStyle} value={formData.service} onChange={e => setFormField("service", e.target.value)}>
//                   <option value="" style={optionStyle}>Service of Interest *</option>
//                   {servicesList.map((s, i) => (<option key={i} value={s} style={optionStyle}>{s}</option>))}
//                 </select>

//                 {/* Project Description */}
//                 <textarea required style={{ ...iS, minHeight: isMobile ? "120px" : "140px", resize: "vertical" as const }}
//                   placeholder="Project Description *" value={formData.project} onChange={e => setFormField("project", e.target.value)}
//                   onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
//                   onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />

//                 {/* Timeline */}
//                 <select style={selectStyle} value={formData.timeline} onChange={e => setFormField("timeline", e.target.value)}>
//                   <option value="" style={optionStyle}>Preferred Timeline</option>
//                   {timelineOptions.map((t, i) => (<option key={i} value={t} style={optionStyle}>{t}</option>))}
//                 </select>

//                 {/* Submit Button */}
//                 <button type="submit" disabled={loading} style={{
//                   width: "100%", padding: isMobile ? "16px" : "18px", borderRadius: "12px", border: "none",
//                   background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg, ${T}, #8B5CF6)`,
//                   color: "#000", fontWeight: 800, fontSize: isMobile ? "16px" : "16px",
//                   cursor: loading ? "wait" : "pointer", transition: "all 0.3s ease", marginTop: isMobile ? "12px" : "8px"
//                 }}>
//                   {loading ? "Sending..." : "Submit — Response within 24 hours →"}
//                 </button>

//                 <p style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? "13px" : "13px", textAlign: "center", marginTop: "16px" }}>
//                   🔒 No commitment required • 100% secure
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* MODULE 3 — GLOBAL PRESENCE with India Grouped */}
//       <section style={{ padding: getSectionPadding(), background: N2, position: "relative" }}>
//         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//           <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
//             <div style={{
//               display: "inline-flex", alignItems: "center", gap: "8px",
//               background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
//               borderRadius: "100px", padding: isMobile ? "8px 18px" : "8px 20px", marginBottom: "16px"
//             }}>
//               <span style={{ width: isMobile ? "6px" : "8px", height: isMobile ? "6px" : "8px", borderRadius: "50%", background: T }} />
//               <span style={{ color: T, fontSize: isMobile ? "13px" : "14px", fontWeight: 600 }}>OUR REACH</span>
//             </div>
//             <h2 style={{
//               fontSize: isMobile ? "28px" : isTablet ? "32px" : "40px",
//               fontWeight: 800, color: "#fff", marginBottom: "16px"
//             }}>
//               Global <span style={{ color: T }}>Presence</span>
//             </h2>
//           </div>

//           {(() => {
//             const indiaOffices = globalOffices.filter(office => office.country.includes('🇮🇳'));
//             const internationalOffices = globalOffices.filter(office => !office.country.includes('🇮🇳'));

//             return (
//               <>
//                 {/* Our India Section */}
//                 {indiaOffices.length > 0 && (
//                   <div style={{ marginBottom: isMobile ? "40px" : "48px" }}>
//                     <div style={{
//                       display: "flex", alignItems: "center", gap: "12px",
//                       marginBottom: isMobile ? "20px" : "24px",
//                       borderBottom: `2px solid ${T}30`, paddingBottom: "12px"
//                     }}>
//                       <span style={{ fontSize: isMobile ? "32px" : "36px" }}>🇮🇳</span>
//                       <h3 style={{ fontSize: isMobile ? "24px" : "28px", fontWeight: 700, color: "#fff", margin: 0 }}>
//                         Our <span style={{ color: T }}>India</span>
//                       </h3>
//                       <span style={{
//                         background: T, color: N0, padding: "4px 12px", borderRadius: "100px",
//                         fontSize: isMobile ? "12px" : "14px", fontWeight: 600, marginLeft: "auto"
//                       }}>
//                         {indiaOffices.length} Locations
//                       </span>
//                     </div>

//                     <div style={{
//                       display: "grid", gridTemplateColumns: getOfficeGridColumns(),
//                       gap: isMobile ? "16px" : isTablet ? "20px" : "24px"
//                     }}>
//                       {indiaOffices.map((office, index) => {
//                         return <OfficeCard key={`india-${index}`} office={office} isMobile={isMobile} T={T} index={index} />
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 {/* International Offices Section */}
//                 {internationalOffices.length > 0 && (
//                   <div>
//                     <div style={{
//                       display: "flex", alignItems: "center", gap: "12px",
//                       marginBottom: isMobile ? "20px" : "24px",
//                       borderBottom: `2px solid ${T}30`, paddingBottom: "12px"
//                     }}>
//                       <span style={{ fontSize: isMobile ? "32px" : "36px" }}>🌏</span>
//                       <h3 style={{ fontSize: isMobile ? "24px" : "28px", fontWeight: 700, color: "#fff", margin: 0 }}>
//                         International <span style={{ color: T }}>Offices</span>
//                       </h3>
//                       <span style={{
//                         background: T, color: N0, padding: "4px 12px", borderRadius: "100px",
//                         fontSize: isMobile ? "12px" : "14px", fontWeight: 600, marginLeft: "auto"
//                       }}>
//                         {internationalOffices.length} Countries
//                       </span>
//                     </div>

//                     <div style={{
//                       display: "grid", gridTemplateColumns: getOfficeGridColumns(),
//                       gap: isMobile ? "16px" : isTablet ? "20px" : "24px"
//                     }}>
//                       {internationalOffices.map((office, index) => (
//                         <OfficeCard key={`intl-${index}`} office={office} isMobile={isMobile} T={T} index={index} />
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </>
//             );
//           })()}
//         </div>
//       </section>

//       {/* MODULE 4 — FAQs */}
//       {/* MODULE 4 — FAQs */}
//       <section style={{
//         padding: getSectionPadding(),
//         background: `linear-gradient(180deg, ${N1} 0%, ${N0} 100%)`,
//         position: "relative"
//       }}>
//         <div style={{ maxWidth: "800px", margin: "0 auto", padding: isMobile ? "0" : "0" }}>
//           <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
//             <div style={{
//               display: "inline-flex", alignItems: "center", gap: "8px",
//               background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
//               borderRadius: "100px", padding: isMobile ? "8px 18px" : "8px 20px", marginBottom: "16px"
//             }}>
//               <span style={{ width: isMobile ? "6px" : "8px", height: isMobile ? "6px" : "8px", borderRadius: "50%", background: T }} />
//               <span style={{ color: T, fontSize: isMobile ? "13px" : "14px", fontWeight: 600 }}>BEFORE YOU REACH OUT</span>
//             </div>
//             <h2 style={{
//               fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
//               fontWeight: 800, color: "#fff"
//             }}>
//               Common <span style={{ color: T }}>Questions</span>
//             </h2>
//           </div>

//           <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "16px" }}>
//             {faqs.map((faq, i) => (
//               <div key={i} style={{
//                 background: "rgba(255,255,255,0.02)",
//                 border: `1px solid ${openIndex === i ? T : "rgba(255,255,255,0.05)"}`,
//                 borderRadius: isMobile ? "16px" : "20px", overflow: "hidden", transition: "all 0.3s ease"
//               }}>
//                 <button onClick={() => toggleFAQ(i)} style={{
//                   width: "100%", padding: isMobile ? "18px" : "24px",
//                   display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px",
//                   background: "transparent", border: "none", cursor: "pointer",
//                   color: "#fff", fontSize: isMobile ? "15px" : "16px", fontWeight: 600, textAlign: "left" as const
//                 }}>
//                   <span style={{ flex: 1, display: "flex", alignItems: "center", gap: "12px" }}>
//                     <span style={{
//                       display: "inline-flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       width: isMobile ? "28px" : "32px",
//                       height: isMobile ? "28px" : "32px",
//                       borderRadius: "50%",
//                       background: openIndex === i ? T : "rgba(0,201,167,0.2)",
//                       color: openIndex === i ? N0 : T,
//                       fontSize: isMobile ? "14px" : "15px",
//                       fontWeight: 700,
//                       flexShrink: 0
//                     }}>
//                       {i + 1}
//                     </span>
//                     <span>{faq.q}</span>
//                   </span>
//                   <span style={{
//                     fontSize: isMobile ? "22px" : "24px", color: T,
//                     transition: "transform 0.3s ease", transform: openIndex === i ? "rotate(45deg)" : "rotate(0)"
//                   }}>
//                     {openIndex === i ? "✕" : "+"}
//                   </span>
//                 </button>

//                 {openIndex === i && (
//                   <div style={{
//                     padding: isMobile ? "0 18px 18px 18px" : "0 24px 24px 24px",
//                     animation: "slideDown 0.3s ease"
//                   }}>
//                     <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? "14px" : "15px", lineHeight: 1.7, margin: 0, paddingLeft: isMobile ? "40px" : "44px" }}>
//                       {faq.a}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           33% { transform: translate(-20px, -20px) rotate(120deg); }
//           66% { transform: translate(20px, 20px) rotate(240deg); }
//         }
        
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes fadeInRight {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes fadeInScale {
//           from { opacity: 0; transform: scale(0.9); }
//           to { opacity: 1; transform: scale(1); }
//         }
        
//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes bounce {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.2); }
//         }
        
//         @media (hover: hover) {
//           input:hover, select:hover, textarea:hover {
//             border-color: ${T} !important;
//           }
//         }
        
//         @media (max-width: 640px) {
//           .hide-on-mobile { display: none; }
//           input, select, textarea { font-size: 16px !important; }
//         }
//       `}</style>
//     </>
//   );
// }



"use client";

import { useState, useEffect, CSSProperties } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import SchemaMarkup from "../components/SchemaMarkup";
import { getLocalBusinessSchema, getFAQSchema } from "../lib/schema";

// ─── EmailJS Config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_pklyrv6";
const EMAILJS_TEMPLATE_ID = "template_de6srqh";
const EMAILJS_PUBLIC_KEY  = "oY8s46fogw6l5q1b4";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T  = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// Types
interface FAQItem { q: string; a: string; }
interface Office { country: string; city: string; address: string; phone: string; email?: string; }
interface DialCode { code: string; flag: string; country: string; }

// ─── Validation helpers ────────────────────────────────────────────────────────
const vName  = (v: string) => { if (!v.trim()) return "Name is required"; if (!/^[A-Za-z\s]{2,60}$/.test(v.trim())) return "Letters only (min 2 chars)"; return ""; };
const vEmail = (v: string) => { if (!v.trim()) return "Email is required"; if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)) return "Enter a valid email"; return ""; };
const vPhone = (v: string, cc: string) => {
  const d = v.replace(/\D/g,""); if (!d) return "Phone is required";
  const rules: Record<string,[number,number]> = { "+1":[10,10],"+44":[10,11],"+91":[10,10] };
  const [mn,mx] = rules[cc] ?? [7,15];
  if (d.length<mn||d.length>mx) return `Must be ${mn===mx?mn:mn+"–"+mx} digits`;
  return "";
};
const vMsg = (v: string) => { if (!v.trim()) return "Description is required"; if (v.trim().length<10) return "At least 10 characters"; return ""; };

// ─── Build EmailJS templateParams ─────────────────────────────────────────────
function buildParams(data: {
  firstName: string; lastName: string; email: string; phone: string;
  service: string; message: string; company?: string; timeline?: string;
}) {
  return {
    first_name:      data.firstName,
    last_name:       data.lastName || "—",
    email:           data.email,
    phone:           data.phone,
    service:         data.service || "Not specified",
    message:         `${data.timeline ? `Timeline: ${data.timeline}\nCompany: ${data.company || "—"}\n\n` : ""}${data.message}`,
    submission_time: new Date().toLocaleString("en-US",{ weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit" }),
    name:            `${data.firstName} ${data.lastName}`.trim(),
    title:           `New Contact Enquiry from ${data.firstName} ${data.lastName}`.trim(),
    reply_to:        data.email,
  };
}

// ─── Inline field error ────────────────────────────────────────────────────────
function FieldErr({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <p style={{ color:"#ff6b6b",fontSize:11,marginTop:4,fontFamily:"'Poppins',sans-serif",display:"flex",alignItems:"center",gap:4 }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      {msg}
    </p>
  );
}

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  // ── Form state ──────────────────────────────────────────────────────────────
  const [formData, setFormData] = useState({
    firstName:"", lastName:"", phone:"", dialCode:"+1",
    email:"", company:"", service:"", project:"", timeline:""
  });
  const [errors,  setErrors ] = useState({ firstName:"", phone:"", email:"", project:"" });
  const [touched, setTouched] = useState({ firstName:false, phone:false, email:false, project:false });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading  ] = useState(false);

  // Init EmailJS
  useEffect(()=>{ emailjs.init(EMAILJS_PUBLIC_KEY); },[]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const h = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;
  const toggleFAQ = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // ── Validation ──────────────────────────────────────────────────────────────
  const runValidate = (k: string, v: string): boolean => {
    const msgs: Record<string,string> = {
      firstName: vName(v),
      phone:     vPhone(v, formData.dialCode),
      email:     vEmail(v),
      project:   vMsg(v),
    };
    if (k in msgs) { setErrors(p=>({...p,[k]:msgs[k]})); return !msgs[k]; }
    return true;
  };

  const setFormField = (k: string, v: string) => {
    setFormData(f=>({...f,[k]:v}));
    if (touched[k as keyof typeof touched]) runValidate(k, v);
  };

  const handleBlur = (k: string) => () => {
    setTouched(p=>({...p,[k]:true}));
    runValidate(k, formData[k as keyof typeof formData] as string);
  };

  const validateAll = (): boolean => {
    setTouched({ firstName:true, phone:true, email:true, project:true });
    const e = {
      firstName: vName(formData.firstName),
      phone:     vPhone(formData.phone, formData.dialCode),
      email:     vEmail(formData.email),
      project:   vMsg(formData.project),
    };
    setErrors(e);
    return Object.values(e).every(v=>!v);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildParams({
        firstName: formData.firstName,
        lastName:  formData.lastName,
        email:     formData.email,
        phone:     `${formData.dialCode} ${formData.phone}`,
        service:   formData.service,
        message:   formData.project,
        company:   formData.company,
        timeline:  formData.timeline,
      }));
      setSubmitted(true);
      setFormData({ firstName:"", lastName:"", phone:"", dialCode:"+1", email:"", company:"", service:"", project:"", timeline:"" });
      setTouched({ firstName:false, phone:false, email:false, project:false });
      setErrors({ firstName:"", phone:"", email:"", project:"" });
    } catch (err) {
      console.error("EmailJS contact:", err);
      alert("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ─── Data ──────────────────────────────────────────────────────────────────
  const faqs: FAQItem[] = [
    { q:"Do you work with businesses outside of India?", a:"Yes. NNC Digital Solutions is specifically built for Canada, the United States, and the United Kingdom. Our client-facing teams operate in North American and UK time zones." },
    { q:"What happens after I submit the contact form?", a:"A dedicated project consultant reviews your submission and responds within 24 business hours with thoughts, relevant case studies, and a proposed next step." },
    { q:"Is the initial consultation free?", a:"Absolutely. Our first conversation is always free. We provide a fixed-price proposal at the end of the discovery phase — with no commitment to proceed." },
    { q:"Who is behind NNC Digital Solutions?", a:"NNC Digital is the international arm of Nakshatra Namaha Creations Pvt. Ltd. — Bangalore's trusted digital studio with 8+ years and 565+ projects. Visit www.nakshatranamahacreations.com to learn more." },
  ];

  const globalOffices: Office[] = [
    { country:"🇨🇦 Canada",       city:"Toronto, Ontario",   address:"Toronto, Ontario",                                                    phone:"+91 9900566466", email:"canada@nncdigital.com" },
    { country:"🇺🇸 USA",          city:"New York, NY",        address:"New York, NY",                                                        phone:"+91 9900566466", email:"usa@nncdigital.com" },
    { country:"🇬🇧 UK",           city:"London, United Kingdom", address:"London, United Kingdom",                                           phone:"+91 9900566466", email:"uk@nncdigital.com" },
    { country:"🇮🇳 India (HQ)",   city:"Bangalore",           address:"Darshan Plazza, Banashankari, Bengaluru 560061",                       phone:"+91 9900566466", email:"info@nakshatranamahacreations.com" },
    { country:"🇮🇳 India",        city:"Mysore",              address:"SUSWANI TOWERS, JP Nagar, Mysuru 570008",                              phone:"+91 9900566466" },
    { country:"🇮🇳 India",        city:"Mumbai",              address:"Lodha Signet, 302, Kolshet Rd, Thane West 400607",                     phone:"+91 9900566466" },
    { country:"🇮🇳 India",        city:"Hyderabad",           address:"64/2 RT, Prakashnagar, Begumpet, Hyderabad 500016",                    phone:"+91 9900566466" },
  ];

  const localBusinessData = [
    { city:"Toronto",   region:"ON",        country:"CA", telephone:"+1-647-XXX-XXXX",    email:"canada@nncdigital.com",                    address:"Toronto, Ontario" },
    { city:"New York",  region:"NY",        country:"US", telephone:"+1-631-XXX-XXXX",    email:"usa@nncdigital.com",                       address:"New York, NY" },
    { city:"London",    region:"",          country:"GB", telephone:"+44-20-XXXX-XXXX",   email:"uk@nncdigital.com",                        address:"London, United Kingdom" },
    { city:"Bangalore", region:"Karnataka", country:"IN", telephone:"+91-9900566466",     email:"info@nakshatranamahacreations.com",         address:"Darshan Plazza, Banashankari, Bengaluru 560061" },
  ];

  const localBusinessSchema = getLocalBusinessSchema(localBusinessData);
  const faqSchema = getFAQSchema(faqs);

  const servicesList: string[] = [
    "CRM Development","ERP Development","Web Development","Mobile App Development",
    "Digital Transformation","SEO & Digital Marketing","Cloud Migration","System Integration",
  ];
  const timelineOptions: string[] = ["Immediately","1-3 Months","3-6 Months","6-12 Months","Just Exploring"];
  const dialCodes: DialCode[] = [
    { code:"+1",  flag:"🇨🇦", country:"CA" },
    { code:"+1",  flag:"🇺🇸", country:"US" },
    { code:"+44", flag:"🇬🇧", country:"UK" },
    { code:"+91", flag:"🇮🇳", country:"IN" },
  ];

  // Responsive helpers
  const getSectionPadding = () => { if (isMobile) return "40px 16px"; if (isTablet) return "60px 32px"; return "80px 48px"; };
  const getGridColumns     = () => { if (isMobile||isTablet) return "1fr"; return "1fr 1.2fr"; };
  const getOfficeGridColumns = () => { if (isMobile) return "1fr"; if (isTablet) return "repeat(2,1fr)"; return "repeat(3,1fr)"; };
  const getHeroFontSize    = () => { if (isMobile) return "clamp(28px,8vw,36px)"; if (isTablet) return "clamp(36px,5vw,44px)"; return "clamp(44px,5vw,60px)"; };

  // Base input styles
  const baseInputStyle: CSSProperties = {
    width:"100%", padding:isMobile?"14px 16px":"16px 18px", borderRadius:"12px",
    background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)",
    color:"#fff", fontSize:isMobile?"16px":"15px", fontFamily:"'Poppins',sans-serif",
    outline:"none", transition:"all 0.3s ease",
    WebkitAppearance:"none" as const, MozAppearance:"none" as const,
  };
  const iS: CSSProperties     = { ...baseInputStyle };
  const iSErr: CSSProperties  = { ...baseInputStyle, borderColor:"#ff4444", background:"rgba(255,68,68,.08)" };
  const selectStyle: CSSProperties = {
    ...baseInputStyle, cursor:"pointer", appearance:"none" as const,
    backgroundImage:`url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300C9A7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat:"no-repeat", backgroundPosition:"right 16px center", backgroundSize:"16px", paddingRight:"40px",
  };
  const optionStyle: CSSProperties = { background:N2, color:"#fff" };

  // Office Card
  const OfficeCard = ({ office, isMobile, T, index }: { office:Office; isMobile:boolean; T:string; index:number }) => (
    <div style={{
      background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)",
      borderRadius:isMobile?"20px":"24px", padding:isMobile?"20px":"24px",
      transition:"all 0.3s ease", animation:`fadeInUp 0.5s ease ${index*0.1}s both`
    }}
      onMouseEnter={e=>{ const t=e.currentTarget;if(!isMobile)t.style.transform="translateY(-5px)";t.style.borderColor=T;t.style.boxShadow=`0 10px 30px ${T}20`; }}
      onMouseLeave={e=>{ const t=e.currentTarget;t.style.transform="translateY(0)";t.style.borderColor="rgba(255,255,255,0.05)";t.style.boxShadow="none"; }}
    >
      <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"}}>
        <span style={{fontSize:"28px"}}>{office.country.split(" ")[0]}</span>
        <div>
          <div style={{color:T,fontWeight:700,fontSize:"16px"}}>{office.city}</div>
          <div style={{color:"rgba(255,255,255,0.5)",fontSize:"13px"}}>{office.country}</div>
        </div>
      </div>
      <div style={{marginBottom:"12px"}}>
        <div style={{color:"rgba(255,255,255,0.7)",fontSize:"14px",lineHeight:1.6,wordBreak:"break-word" as const}}>📍 {office.address}</div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
        <a href={`tel:${office.phone.replace(/\s|-/g,"")}`} style={{display:"flex",alignItems:"center",gap:"8px",color:T,fontSize:"14px",fontWeight:600,textDecoration:"none",wordBreak:"break-all" as const}}>📞 {office.phone}</a>
        {office.email&&(<a href={`mailto:${office.email}`} style={{display:"flex",alignItems:"center",gap:"8px",color:"rgba(255,255,255,0.7)",fontSize:"14px",textDecoration:"none",wordBreak:"break-all" as const}}>✉️ {office.email}</a>)}
      </div>
    </div>
  );

  return (
    <>
      <Navbar/>
      <SchemaMarkup schema={localBusinessSchema} id="local-business-schema"/>
      <SchemaMarkup schema={faqSchema} id="faq-schema"/>

      {/* ══ MODULE 1 — HERO ════════════════════════════════════════════════════ */}
      <section style={{
        padding:isMobile?"40px 16px 40px":isTablet?"100px 32px 60px":"90px 48px 80px",
        background:`linear-gradient(135deg,${N0} 0%,#041628 50%,${N0} 100%)`,
        position:"relative", overflow:"hidden", textAlign:"center" as const,
        minHeight:isMobile?"auto":"50vh", display:"flex", alignItems:"center"
      }}>
        {!isMobile&&(
          <>
            <div style={{position:"absolute",width:isTablet?"400px":"600px",height:isTablet?"400px":"600px",borderRadius:"50%",background:`radial-gradient(circle,${T}15 0%,transparent 70%)`,top:"-20%",right:"-10%",animation:"float 20s ease-in-out infinite",pointerEvents:"none" as const}}/>
            <div style={{position:"absolute",width:isTablet?"300px":"400px",height:isTablet?"300px":"400px",borderRadius:"50%",background:"radial-gradient(circle,#8B5CF615 0%,transparent 70%)",bottom:"-10%",left:"-5%",animation:"float 15s ease-in-out infinite reverse",pointerEvents:"none" as const}}/>
          </>
        )}
        <div style={{maxWidth:isMobile?"100%":"800px",margin:"0 auto",position:"relative",zIndex:2,width:"100%"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.3)",borderRadius:"100px",padding:isMobile?"8px 18px":"8px 20px",marginBottom:isMobile?"20px":"24px"}}>
            <span style={{width:isMobile?"6px":"8px",height:isMobile?"6px":"8px",borderRadius:"50%",background:T,boxShadow:`0 0 10px ${T}`}}/>
            <span style={{color:T,fontSize:isMobile?"13px":"14px",fontWeight:600,letterSpacing:"0.1em"}}>LET'S CONNECT</span>
          </div>
          <h1 style={{fontSize:getHeroFontSize(),fontWeight:900,lineHeight:1.2,marginBottom:isMobile?"20px":"24px",color:"#fff"}}>
            Let's Build Something{" "}
            <span style={{background:`linear-gradient(135deg,${T},#8B5CF6,#FF6B6B)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200% 200%",animation:"gradientShift 8s ease infinite"}}>
              Exceptional Together
            </span>
          </h1>
          <p style={{color:"rgba(255,255,255,0.6)",fontSize:isMobile?"16px":isTablet?"17px":"18px",lineHeight:1.7,maxWidth:isMobile?"100%":"600px",margin:"0 auto",padding:isMobile?"0 10px":"0"}}>
            Whether you have a fully defined project or just a problem you're trying to solve — we'd love to talk. We respond within 24 business hours with honest, practical advice.
          </p>
        </div>
      </section>

      {/* ══ MODULE 2 — CONTACT DETAILS + LEAD FORM ═════════════════════════════ */}
      <section style={{padding:getSectionPadding(),background:N1,position:"relative"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:getGridColumns(),gap:isMobile?"24px":isTablet?"24px":"30px"}}>

          {/* LEFT — Contact Details */}
          <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:isMobile?"20px":"32px",padding:isMobile?"24px 20px":isTablet?"32px 28px":"48px",backdropFilter:"blur(10px)",animation:"fadeInLeft 0.8s ease"}}>
            <h2 style={{fontSize:isMobile?"26px":isTablet?"30px":"36px",fontWeight:800,color:"#fff",marginBottom:isMobile?"24px":"32px"}}>
              Get in <span style={{color:T}}>Touch</span>
            </h2>
            <div style={{display:"flex",flexDirection:"column",gap:isMobile?"28px":"32px"}}>
              {/* Call Us */}
              <div>
                <h3 style={{fontSize:isMobile?"18px":"20px",fontWeight:700,color:T,marginBottom:isMobile?"16px":"20px",display:"flex",alignItems:"center",gap:"10px"}}>
                  <span style={{fontSize:isMobile?"22px":"24px"}}>📞</span> Call Us
                </h3>
                <div style={{display:"flex",flexDirection:"column",gap:isMobile?"12px":"14px"}}>
                  {[{flag:"🇨🇦",label:"Canada",phone:"+91 9900566466"},{flag:"🇺🇸",label:"USA",phone:"+91 9900566466"},{flag:"🇬🇧",label:"UK",phone:"+91 9900566466"},{flag:"🇮🇳",label:"India HQ",phone:"+91 9900566466"}].map((item,i)=>(
                    <a key={i} href={`tel:${item.phone.replace(/\s|-/g,"")}`} style={{display:"flex",flexDirection:isMobile?"column":"row",alignItems:isMobile?"flex-start":"center",gap:isMobile?"4px":"12px",padding:isMobile?"14px 16px":"12px 16px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"12px",textDecoration:"none",transition:"all 0.3s ease"}}
                      onMouseEnter={e=>{const t=e.currentTarget;t.style.background=`rgba(0,201,167,0.1)`;t.style.borderColor=T;}}
                      onMouseLeave={e=>{const t=e.currentTarget;t.style.background="rgba(255,255,255,0.03)";t.style.borderColor="rgba(255,255,255,0.05)";}}>
                      <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                        <span style={{fontSize:"20px"}}>{item.flag}</span>
                        <span style={{color:"rgba(255,255,255,0.7)",fontSize:"14px",fontWeight:500}}>{item.label}:</span>
                      </div>
                      <span style={{color:T,fontWeight:600,fontSize:"15px",marginLeft:isMobile?"28px":"0"}}>{item.phone}</span>
                    </a>
                  ))}
                </div>
              </div>
              {/* Email */}
              <div>
                <h3 style={{fontSize:isMobile?"18px":"20px",fontWeight:700,color:T,marginBottom:isMobile?"16px":"20px",display:"flex",alignItems:"center",gap:"10px"}}>
                  <span style={{fontSize:isMobile?"22px":"24px"}}>✉️</span> Email
                </h3>
                <div style={{display:"flex",flexDirection:"column",gap:isMobile?"12px":"14px"}}>
                  {[{email:"hello@nncdigital.com",label:"General Inquiries"},{email:"info@nakshatranamahacreations.com",label:"India Office"}].map((item,i)=>(
                    <a key={i} href={`mailto:${item.email}`} style={{display:"flex",flexDirection:isMobile?"column":"row",alignItems:isMobile?"flex-start":"center",gap:isMobile?"4px":"12px",padding:isMobile?"14px 16px":"12px 16px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"12px",textDecoration:"none",transition:"all 0.3s ease"}}
                      onMouseEnter={e=>{const t=e.currentTarget;t.style.background=`rgba(0,201,167,0.1)`;t.style.borderColor=T;}}
                      onMouseLeave={e=>{const t=e.currentTarget;t.style.background="rgba(255,255,255,0.03)";t.style.borderColor="rgba(255,255,255,0.05)";}}>
                      <span style={{color:T,fontSize:"16px"}}>✉️</span>
                      <div>
                        <div style={{color:"#fff",fontWeight:600,fontSize:"15px",wordBreak:"break-all" as const}}>{item.email}</div>
                        <div style={{color:"rgba(255,255,255,0.5)",fontSize:"13px"}}>{item.label}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Lead Form with EmailJS */}
          <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:isMobile?"20px":"32px",padding:isMobile?"24px 20px":isTablet?"32px 28px":"48px",backdropFilter:"blur(10px)",animation:"fadeInRight 0.8s ease",width:"100%",boxSizing:"border-box" as const}}>
            <h3 style={{fontSize:isMobile?"22px":isTablet?"24px":"24px",fontWeight:700,color:"#fff",marginBottom:isMobile?"24px":"28px"}}>
              Share Your <span style={{color:T}}>Project Idea</span>
            </h3>

            {submitted ? (
              <div style={{textAlign:"center",padding:isMobile?"30px 10px":"40px 20px",animation:"fadeInScale 0.5s ease"}}>
                <div style={{fontSize:isMobile?"56px":"64px",marginBottom:"20px",animation:"bounce 1s ease"}}>✨</div>
                <h4 style={{color:"#fff",fontSize:isMobile?"22px":"24px",fontWeight:800,marginBottom:"12px"}}>Message Sent!</h4>
                <p style={{color:"rgba(255,255,255,0.6)",fontSize:isMobile?"15px":"16px",marginBottom:"28px"}}>
                  Thank you for reaching out. A dedicated consultant will contact you within 24 hours.
                </p>
                <button onClick={()=>setSubmitted(false)} style={{padding:isMobile?"14px 28px":"12px 32px",borderRadius:"100px",border:"none",background:`linear-gradient(135deg,${T},#8B5CF6)`,color:"#000",fontWeight:700,fontSize:isMobile?"15px":"15px",cursor:"pointer",transition:"all 0.3s ease",width:isMobile?"100%":"auto"}}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{display:"flex",flexDirection:"column",gap:isMobile?"16px":"20px",width:"100%"}}>

                {/* Name */}
                <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?"14px":"16px",width:"100%"}}>
                  <div>
                    <input
                      style={touched.firstName&&errors.firstName?iSErr:iS}
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={e=>setFormField("firstName",e.target.value)}
                      onBlur={handleBlur("firstName")}
                      onFocus={e=>{e.target.style.borderColor=T;e.target.style.boxShadow=`0 0 0 2px ${T}40`;}}
                    />
                    {touched.firstName&&<FieldErr msg={errors.firstName}/>}
                  </div>
                  <input
                    style={iS}
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={e=>setFormField("lastName",e.target.value)}
                    onFocus={e=>{e.target.style.borderColor=T;e.target.style.boxShadow=`0 0 0 2px ${T}40`;}}
                    onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.boxShadow="none";}}
                  />
                </div>

                {/* Phone with dial code */}
                <div>
                  <div style={{display:"flex",gap:isMobile?"12px":"12px",flexDirection:isMobile?"column":"row",width:"100%"}}>
                    <select style={{...selectStyle,width:isMobile?"100%":"110px"}} value={formData.dialCode} onChange={e=>setFormField("dialCode",e.target.value)}>
                      {dialCodes.map((d,i)=>(<option key={i} value={d.code} style={optionStyle}>{d.flag} {d.code}</option>))}
                    </select>
                    <input
                      type="tel"
                      style={touched.phone&&errors.phone?{...iSErr,flex:1}:{...iS,flex:1}}
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={e=>setFormField("phone",e.target.value)}
                      onBlur={handleBlur("phone")}
                      onFocus={e=>{e.target.style.borderColor=T;e.target.style.boxShadow=`0 0 0 2px ${T}40`;}}
                    />
                  </div>
                  {touched.phone&&<FieldErr msg={errors.phone}/>}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    style={touched.email&&errors.email?iSErr:iS}
                    placeholder="Business Email *"
                    value={formData.email}
                    onChange={e=>setFormField("email",e.target.value)}
                    onBlur={handleBlur("email")}
                    onFocus={e=>{e.target.style.borderColor=T;e.target.style.boxShadow=`0 0 0 2px ${T}40`;}}
                  />
                  {touched.email&&<FieldErr msg={errors.email}/>}
                </div>

                {/* Company */}
                <input
                  style={iS}
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={e=>setFormField("company",e.target.value)}
                  onFocus={e=>{e.target.style.borderColor=T;e.target.style.boxShadow=`0 0 0 2px ${T}40`;}}
                  onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.boxShadow="none";}}
                />

                {/* Service */}
                <select style={selectStyle} value={formData.service} onChange={e=>setFormField("service",e.target.value)}>
                  <option value="" style={optionStyle}>Service of Interest</option>
                  {servicesList.map((s,i)=>(<option key={i} value={s} style={optionStyle}>{s}</option>))}
                </select>

                {/* Project Description */}
                <div>
                  <textarea
                    style={{...(touched.project&&errors.project?iSErr:iS),minHeight:isMobile?"120px":"140px",resize:"vertical" as const}}
                    placeholder="Project Description *"
                    value={formData.project}
                    onChange={e=>setFormField("project",e.target.value)}
                    onBlur={handleBlur("project")}
                    onFocus={e=>{e.target.style.borderColor=T;e.target.style.boxShadow=`0 0 0 2px ${T}40`;}}
                  />
                  {touched.project&&<FieldErr msg={errors.project}/>}
                </div>

                {/* Timeline */}
                <select style={selectStyle} value={formData.timeline} onChange={e=>setFormField("timeline",e.target.value)}>
                  <option value="" style={optionStyle}>Preferred Timeline</option>
                  {timelineOptions.map((t,i)=>(<option key={i} value={t} style={optionStyle}>{t}</option>))}
                </select>

                {/* Submit */}
                <button type="submit" disabled={loading} style={{
                  width:"100%", padding:isMobile?"16px":"18px", borderRadius:"12px", border:"none",
                  background:loading?"rgba(0,201,167,0.5)":`linear-gradient(135deg,${T},#8B5CF6)`,
                  color:"#000", fontWeight:800, fontSize:isMobile?"16px":"16px",
                  cursor:loading?"wait":"pointer", transition:"all 0.3s ease", marginTop:isMobile?"12px":"8px",
                  opacity:loading?0.7:1
                }}>
                  {loading?"Sending…":"Submit — Response within 24 hours →"}
                </button>

                <p style={{color:"rgba(255,255,255,0.4)",fontSize:isMobile?"13px":"13px",textAlign:"center",marginTop:"16px"}}>
                  🔒 No commitment required • 100% secure
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══ MODULE 3 — GLOBAL PRESENCE ═════════════════════════════════════════ */}
      <section style={{padding:getSectionPadding(),background:N2,position:"relative"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:isMobile?"32px":"48px"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.3)",borderRadius:"100px",padding:isMobile?"8px 18px":"8px 20px",marginBottom:"16px"}}>
              <span style={{width:isMobile?"6px":"8px",height:isMobile?"6px":"8px",borderRadius:"50%",background:T}}/>
              <span style={{color:T,fontSize:isMobile?"13px":"14px",fontWeight:600}}>OUR REACH</span>
            </div>
            <h2 style={{fontSize:isMobile?"28px":isTablet?"32px":"40px",fontWeight:800,color:"#fff",marginBottom:"16px"}}>
              Global <span style={{color:T}}>Presence</span>
            </h2>
          </div>

          {(()=>{
            const indiaOffices        = globalOffices.filter(o=>o.country.includes("🇮🇳"));
            const internationalOffices= globalOffices.filter(o=>!o.country.includes("🇮🇳"));
            return (
              <>
                {/* India */}
                {indiaOffices.length>0&&(
                  <div style={{marginBottom:isMobile?"40px":"48px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:isMobile?"20px":"24px",borderBottom:`2px solid ${T}30`,paddingBottom:"12px"}}>
                      <span style={{fontSize:isMobile?"32px":"36px"}}>🇮🇳</span>
                      <h3 style={{fontSize:isMobile?"24px":"28px",fontWeight:700,color:"#fff",margin:0}}>Our <span style={{color:T}}>India</span></h3>
                      <span style={{background:T,color:N0,padding:"4px 12px",borderRadius:"100px",fontSize:isMobile?"12px":"14px",fontWeight:600,marginLeft:"auto"}}>{indiaOffices.length} Locations</span>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:getOfficeGridColumns(),gap:isMobile?"16px":isTablet?"20px":"24px"}}>
                      {indiaOffices.map((office,index)=><OfficeCard key={`india-${index}`} office={office} isMobile={isMobile} T={T} index={index}/>)}
                    </div>
                  </div>
                )}
                {/* International */}
                {internationalOffices.length>0&&(
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:isMobile?"20px":"24px",borderBottom:`2px solid ${T}30`,paddingBottom:"12px"}}>
                      <span style={{fontSize:isMobile?"32px":"36px"}}>🌏</span>
                      <h3 style={{fontSize:isMobile?"24px":"28px",fontWeight:700,color:"#fff",margin:0}}>International <span style={{color:T}}>Offices</span></h3>
                      <span style={{background:T,color:N0,padding:"4px 12px",borderRadius:"100px",fontSize:isMobile?"12px":"14px",fontWeight:600,marginLeft:"auto"}}>{internationalOffices.length} Countries</span>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:getOfficeGridColumns(),gap:isMobile?"16px":isTablet?"20px":"24px"}}>
                      {internationalOffices.map((office,index)=><OfficeCard key={`intl-${index}`} office={office} isMobile={isMobile} T={T} index={index}/>)}
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </section>

      {/* ══ MODULE 4 — FAQs ════════════════════════════════════════════════════ */}
      <section style={{padding:getSectionPadding(),background:`linear-gradient(180deg,${N1} 0%,${N0} 100%)`,position:"relative"}}>
        <div style={{maxWidth:"800px",margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:isMobile?"32px":"48px"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.3)",borderRadius:"100px",padding:isMobile?"8px 18px":"8px 20px",marginBottom:"16px"}}>
              <span style={{width:isMobile?"6px":"8px",height:isMobile?"6px":"8px",borderRadius:"50%",background:T}}/>
              <span style={{color:T,fontSize:isMobile?"13px":"14px",fontWeight:600}}>BEFORE YOU REACH OUT</span>
            </div>
            <h2 style={{fontSize:isMobile?"28px":isTablet?"32px":"36px",fontWeight:800,color:"#fff"}}>
              Common <span style={{color:T}}>Questions</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:isMobile?"12px":"16px"}}>
            {faqs.map((faq,i)=>(
              <div key={i} style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${openIndex===i?T:"rgba(255,255,255,0.05)"}`,borderRadius:isMobile?"16px":"20px",overflow:"hidden",transition:"all 0.3s ease"}}>
                <button onClick={()=>toggleFAQ(i)} style={{width:"100%",padding:isMobile?"18px":"24px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"12px",background:"transparent",border:"none",cursor:"pointer",color:"#fff",fontSize:isMobile?"15px":"16px",fontWeight:600,textAlign:"left" as const}}>
                  <span style={{flex:1,display:"flex",alignItems:"center",gap:"12px"}}>
                    <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:isMobile?"28px":"32px",height:isMobile?"28px":"32px",borderRadius:"50%",background:openIndex===i?T:"rgba(0,201,167,0.2)",color:openIndex===i?N0:T,fontSize:isMobile?"14px":"15px",fontWeight:700,flexShrink:0}}>{i+1}</span>
                    <span>{faq.q}</span>
                  </span>
                  <span style={{fontSize:isMobile?"22px":"24px",color:T,transition:"transform 0.3s ease",transform:openIndex===i?"rotate(45deg)":"rotate(0)"}}>
                    {openIndex===i?"✕":"+"}
                  </span>
                </button>
                {openIndex===i&&(
                  <div style={{padding:isMobile?"0 18px 18px 18px":"0 24px 24px 24px",animation:"slideDown 0.3s ease"}}>
                    <p style={{color:"rgba(255,255,255,0.7)",fontSize:isMobile?"14px":"15px",lineHeight:1.7,margin:0,paddingLeft:isMobile?"40px":"44px"}}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(-20px,-20px) rotate(120deg)} 66%{transform:translate(20px,20px) rotate(240deg)} }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes fadeInLeft  { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeInRight { from{opacity:0;transform:translateX(30px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes fadeInUp    { from{opacity:0;transform:translateY(30px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInScale { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
        @keyframes slideDown   { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes bounce      { 0%,100%{transform:scale(1)} 50%{transform:scale(1.2)} }
        @media(hover:hover){ input:hover,select:hover,textarea:hover{ border-color:${T}!important; } }
        @media(max-width:640px){ input,select,textarea{ font-size:16px!important; } }
      `}</style>
    </>
  );
}