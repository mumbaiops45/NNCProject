// // "use client";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { useState, useEffect } from "react";

// // // ─── Design tokens ────────────────────────────────────────────────────────────
// // const T = {
// //   teal: "#00C9A7",
// //   tealDark: "#00a07a",
// //   navy0: "#010812",
// //   navy1: "#030B18",
// //   navy2: "#061425",
// // };

// // // ─── Data ─────────────────────────────────────────────────────────────────────
// // const SERVICES = [
// //   { label: "CRM Development", href: "/crm-development" },
// //   { label: "ERP Development", href: "/erp-development" },
// //   { label: "Web Development", href: "/web-development" },
// //   { label: "Mobile App Development", href: "/mobile-app-development" },
// //   { label: "Salesforce CRM", href: "/salesforce-crm" },
// //   { label: "Marketing Automation", href: "/marketing-automation" },
// //   { label: "SEO & Digital Marketing", href: "/seo-digital-marketing" },
// //   { label: "Digital Transformation", href: "/digital-transformation" },
// //   { label: "Hire CRM Developers", href: "/hire-crm-developers" },
// // ];

// // const INDUSTRIES = [
// //   { label: "Healthcare", href: "/industries/healthcare" },
// //   { label: "Real Estate", href: "/industries/real-estate" },
// //   { label: "E-Commerce", href: "/industries/ecommerce" },
// //   { label: "Manufacturing", href: "/industries/manufacturing" },
// //   { label: "Professional Services", href: "/industries/professional-services" },
// // ];

// // const COMPANY = [
// //   { label: "About NNC Digital", href: "/about-us" },
// //   { label: "About Nakshatra Namaha Creations", href: "https://www.nakshatranamahacreations.com", external: true },
// //   { label: "Case Studies", href: "/case-studies" },
// //   { label: "Blog", href: "/blog" },
// //   { label: "Pricing", href: "/pricing" },
// //   { label: "Careers", href: "/hire-crm-developers" },
// // ];

// // // Social Media Icons with PNG images from public folder
// // const SOCIALS = [
// //   { 
// //     label: "LinkedIn", 
// //     href: "https://linkedin.com/company/nncdigital", 
// //     icon: "/linkdine.png",
// //     isImage: true,
// //     color: "#0077b5",
// //     bgColor: "rgba(0,119,181,0.15)",
// //     borderColor: "rgba(0,119,181,0.3)"
// //   },
// //   { 
// //     label: "Twitter", 
// //     href: "https://twitter.com/nncdigital", 
// //     icon: "/twitter.png",
// //     isImage: true,
// //     color: "#1DA1F2",
// //     bgColor: "rgba(29,161,242,0.15)",
// //     borderColor: "rgba(29,161,242,0.3)"
// //   },
// //   { 
// //     label: "Instagram", 
// //     href: "https://instagram.com/nncdigital", 
// //     icon: "/instagram.png",
// //     isImage: true,
// //     color: "#E4405F",
// //     bgColor: "rgba(228,64,95,0.15)",
// //     borderColor: "rgba(228,64,95,0.3)"
// //   },
// //   { 
// //     label: "Facebook", 
// //     href: "https://facebook.com/nncdigital", 
// //     icon: "/facebook.png",
// //     isImage: true,
// //     color: "#1877F2",
// //     bgColor: "rgba(24,119,242,0.15)",
// //     borderColor: "rgba(24,119,242,0.3)"
// //   },
// // ];

// // const CONTACTS = [
// //   { flag: "🇨🇦", country: "Canada", phone: "+1 647-XXX-XXXX" },
// //   { flag: "🇺🇸", country: "USA", phone: "+1 631-XXX-XXXX" },
// //   { flag: "🇬🇧", country: "UK", phone: "+44 20-XXXX-XXXX" },
// //   { flag: "🇮🇳", country: "India", phone: "+91 9900566466" },
// // ];

// // const TRUST_BADGES = ["GDPR Compliant", "PIPEDA Compliant", "CCPA Ready", "ISO Certified"];

// // export default function Footer() {
// //   const year = new Date().getFullYear();
// //   const [windowWidth, setWindowWidth] = useState(0);

// //   useEffect(() => {
// //     setWindowWidth(window.innerWidth);
// //     const handleResize = () => setWindowWidth(window.innerWidth);
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const isMobile = windowWidth <= 480;
// //   const isTablet = windowWidth > 480 && windowWidth <= 768;
// //   const isLaptop = windowWidth > 768 && windowWidth <= 1024;

// //   return (
// //     <footer style={{
// //       background: `linear-gradient(180deg, ${T.navy0} 0%, #020810 100%)`,
// //       fontFamily: "'Poppins', sans-serif",
// //       borderTop: "1px solid rgba(255,255,255,.06)",
// //       position: "relative",
// //       overflow: "hidden",
// //     }}>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

// //         .footer-link {
// //           color: rgba(255,255,255,.6);
// //           text-decoration: none;
// //           font-size: ${isMobile ? '13px' : '14px'};
// //           font-weight: 400;
// //           transition: color .2s ease, transform .2s ease;
// //           line-height: 1.8;
// //           display: inline-block;
// //         }
// //         .footer-link:hover {
// //           color: ${T.teal} !important;
// //           transform: translateX(4px);
// //         }
// //         .footer-heading {
// //           color: ${T.teal};
// //           font-size: ${isMobile ? '14px' : '15px'};
// //           font-weight: 700;
// //           letter-spacing: 0.08em;
// //           text-transform: uppercase;
// //           margin-bottom: ${isMobile ? '12px' : '16px'};
// //         }
// //         .social-container {
// //           display: flex;
// //           flex-wrap: nowrap;
// //           gap: ${isMobile ? '10px' : '12px'};
// //           margin-top: ${isMobile ? '10px' : '15px'};
// //           justify-content: flex-start;
// //           width: 100%;
// //         }
// //         .social-btn {
// //           width: ${isMobile ? '48px' : '52px'}; 
// //           height: ${isMobile ? '48px' : '52px'}; 
// //           border-radius: 50%;
// //           display: flex; 
// //           align-items: center; 
// //           justify-content: center;
// //           transition: all 0.3s ease;
// //           text-decoration: none;
// //           box-shadow: 0 6px 16px rgba(0,0,0,0.2);
// //           backdrop-filter: blur(5px);
// //           border: 1px solid;
// //           overflow: hidden;
// //           flex-shrink: 0;
// //         }
// //         .social-btn:hover {
// //           transform: translateY(-5px) scale(1.05);
// //           box-shadow: 0 15px 30px rgba(0,0,0,0.3) !important;
// //         }
// //         .social-icon-img {
// //           width: ${isMobile ? '26px' : '30px'};
// //           height: ${isMobile ? '26px' : '30px'};
// //           object-fit: contain;
// //           transition: all 0.3s ease;
// //         }
// //         .social-btn:hover .social-icon-img {
// //           transform: scale(1.1);
// //         }
// //         .footer-bottom-link {
// //           color: rgba(255,255,255,.4);
// //           font-size: ${isMobile ? '11px' : '12px'};
// //           text-decoration: none;
// //           transition: color .2s ease;
// //         }
// //         .footer-bottom-link:hover { color: ${T.teal} !important; }

// //         .badge {
// //           font-size: ${isMobile ? '9px' : '11px'};
// //           font-weight: 600;
// //           padding: ${isMobile ? '3px 8px' : '4px 12px'};
// //           border-radius: 100px;
// //           background: rgba(0,201,167,0.08);
// //           border: 1px solid rgba(0,201,167,0.2);
// //           color: ${T.teal};
// //           display: inline-flex;
// //           align-items: center;
// //           white-space: nowrap;
// //         }

// //         .newsletter-input {
// //           flex: 1;
// //           min-width: 0;
// //           padding: ${isMobile ? '10px 12px' : '12px 16px'};
// //           border-radius: 10px;
// //           background: rgba(255,255,255,0.05);
// //           border: 1px solid rgba(255,255,255,0.1);
// //           color: #fff;
// //           font-size: ${isMobile ? '12px' : '14px'};
// //           font-family: 'Poppins', sans-serif;
// //           outline: none;
// //           transition: all 0.2s ease;
// //         }
// //         .newsletter-input::placeholder { color: rgba(255,255,255,0.3); }
// //         .newsletter-input:focus {
// //           border-color: ${T.teal} !important;
// //           box-shadow: 0 0 0 2px ${T.teal}30;
// //         }

// //         .book-btn {
// //           width: 100%;
// //           padding: ${isMobile ? '12px' : '14px'};
// //           border-radius: 10px;
// //           border: none;
// //           background: linear-gradient(135deg, ${T.teal}, ${T.tealDark});
// //           color: #000;
// //           font-weight: 700;
// //           font-size: ${isMobile ? '14px' : '15px'};
// //           font-family: 'Poppins', sans-serif;
// //           cursor: pointer;
// //           transition: all 0.2s ease;
// //           margin-top: ${isMobile ? '8px' : '12px'};
// //         }
// //         .book-btn:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 8px 20px ${T.teal}40;
// //         }

// //         .subscribe-btn {
// //           padding: 0 ${isMobile ? '14px' : '16px'};
// //           border-radius: 10px;
// //           border: none;
// //           background: ${T.teal};
// //           color: #000;
// //           font-weight: 700;
// //           font-size: ${isMobile ? '12px' : '14px'};
// //           font-family: 'Poppins', sans-serif;
// //           cursor: pointer;
// //           white-space: nowrap;
// //           height: ${isMobile ? '42px' : '46px'};
// //           transition: background 0.2s;
// //           flex-shrink: 0;
// //         }
// //         .subscribe-btn:hover { background: ${T.tealDark} !important; }

// //         .address-block {
// //           display: flex;
// //           align-items: flex-start;
// //           gap: 10px;
// //           margin-bottom: ${isMobile ? '12px' : '16px'};
// //           color: rgba(255,255,255,.7);
// //           font-size: ${isMobile ? '12px' : '14px'};
// //           line-height: 1.6;
// //         }
// //         .address-icon {
// //           font-size: ${isMobile ? '16px' : '18px'};
// //           flex-shrink: 0;
// //         }

// //         @keyframes footerGlow {
// //           0%,100% { opacity: .03; }
// //           50%      { opacity: .07; }
// //         }

// //         /* ── Footer main grid ── */
// //         .footer-grid {
// //           display: grid;
// //           grid-template-columns: 1.5fr 1.2fr 1.2fr 1fr 1.8fr;
// //           gap: ${isMobile ? '20px' : isTablet ? '24px' : '30px'};
// //         }

// //         /* ── Brand column specific ── */
// //         .footer-brand-left {
// //           display: flex;
// //           flex-direction: column;
// //           height: 100%;
// //         }

// //         /* ── Bottom bar ── */
// //         .footer-bottom-bar {
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           flex-wrap: wrap;
// //           gap: ${isMobile ? '10px' : '12px'};
// //         }
// //         .footer-legal-links {
// //           display: flex;
// //           gap: ${isMobile ? '12px' : '20px'};
// //           flex-wrap: wrap;
// //         }

// //         /* Responsive Breakpoints */
// //         @media (max-width: 1280px) {
// //           .footer-grid { gap: 25px; }
// //         }

// //         @media (max-width: 1024px) {
// //           .footer-grid {
// //             grid-template-columns: repeat(3, 1fr);
// //             gap: 25px;
// //           }
// //           .footer-col-brand {
// //             grid-column: 1 / -1;
// //             display: grid;
// //             grid-template-columns: 1fr 1fr;
// //             gap: 30px;
// //             align-items: start;
// //             padding-bottom: 25px;
// //             border-bottom: 1px solid rgba(255,255,255,0.06);
// //           }
// //           .footer-brand-left {
// //             width: 100%;
// //           }
// //           .social-container {
// //             margin-top: 15px;
// //           }
// //         }

// //         @media (max-width: 768px) {
// //           .footer-grid {
// //             grid-template-columns: repeat(2, 1fr);
// //             gap: 25px;
// //           }
// //           .footer-col-brand {
// //             grid-column: 1 / -1;
// //             grid-template-columns: 1fr;
// //             gap: 20px;
// //           }
// //           .footer-bottom-bar {
// //             flex-direction: column;
// //             align-items: center;
// //             text-align: center;
// //           }
// //           .footer-legal-links {
// //             justify-content: center;
// //             gap: 15px;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .footer-grid {
// //             grid-template-columns: 1fr;
// //             gap: 25px;
// //           }
// //           .footer-col-brand {
// //             grid-column: 1;
// //           }
// //           .footer-legal-links {
// //             flex-direction: column;
// //             gap: 8px;
// //             align-items: center;
// //           }
// //           .phone-row {
// //             flex-direction: column;
// //             align-items: flex-start !important;
// //             gap: 5px !important;
// //           }
// //           .social-container {
// //             justify-content: center;
// //           }
// //         }
// //       `}</style>

// //       {/* Background glow orbs */}
// //       <div style={{
// //         position: "absolute", width: isMobile ? 300 : 600, height: isMobile ? 300 : 600, borderRadius: "50%",
// //         background: `radial-gradient(circle, ${T.teal}18 0%, transparent 70%)`,
// //         top: -200, left: -150, pointerEvents: "none",
// //         animation: "footerGlow 6s ease-in-out infinite",
// //       }} />
// //       <div style={{
// //         position: "absolute", width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: "50%",
// //         background: `radial-gradient(circle, ${T.tealDark}14 0%, transparent 70%)`,
// //         bottom: -100, right: -80, pointerEvents: "none",
// //         animation: "footerGlow 8s ease-in-out infinite",
// //         animationDelay: "2s",
// //       }} />

// //       {/* ── Main Footer ── */}
// //       <div style={{ 
// //         maxWidth: 1280, 
// //         margin: "0 auto", 
// //         padding: isMobile ? "40px 20px 30px" : isTablet ? "50px 30px 40px" : "70px 40px 50px", 
// //         position: "relative", 
// //         zIndex: 1 
// //       }}>
// //         <div className="footer-grid">

// //           {/* COLUMN 1: Brand */}
// //           <div className="footer-col-brand">
// //             <div className="footer-brand-left">
// //               <Link href="/" style={{ textDecoration: "none" }}>
// //                 <Image
// //                   src="/NNCLOGO.jpg"
// //                   alt="NNC Digital Solutions"
// //                   width={isMobile ? 140 : 160}
// //                   height={isMobile ? 50 : 58}
// //                   style={{ objectFit: "contain", borderRadius: "10px", marginBottom: isMobile ? "15px" : "20px" }}
// //                   priority={false}
// //                 />
// //               </Link>
// //               <p style={{ 
// //                 color: "rgba(255,255,255,0.5)", 
// //                 fontSize: isMobile ? '13px' : '14px', 
// //                 lineHeight: 1.7, 
// //                 marginBottom: isMobile ? "15px" : "20px",
// //                 maxWidth: "300px"
// //               }}>
// //                 A subsidiary of <strong style={{ color: T.teal }}>Nakshatra Namaha Creations Pvt. Ltd.</strong>
// //               </p>
// //               {/* Trust Badges */}
// //               <div style={{ 
// //                 display: "flex", 
// //                 flexWrap: "wrap", 
// //                 gap: isMobile ? "6px" : "8px", 
// //                 marginBottom: isMobile ? "15px" : "20px" 
// //               }}>
// //                 {TRUST_BADGES.map(badge => (
// //                   <span key={badge} className="badge">{badge}</span>
// //                 ))}
// //               </div>
// //               {/* Social Media Icons - One Line */}
// //               <div className="social-container">
// //                 {SOCIALS.map(s => (
// //                   <a 
// //                     key={s.label} 
// //                     href={s.href} 
// //                     className="social-btn" 
// //                     target="_blank" 
// //                     rel="noopener noreferrer" 
// //                     aria-label={s.label}
// //                     style={{ 
// //                       background: s.bgColor,
// //                       borderColor: s.borderColor,
// //                     }}
// //                     onMouseEnter={(e) => {
// //                       e.currentTarget.style.background = s.color;
// //                       e.currentTarget.style.borderColor = s.color;
// //                       e.currentTarget.style.boxShadow = `0 15px 30px ${s.color}80`;
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.currentTarget.style.background = s.bgColor;
// //                       e.currentTarget.style.borderColor = s.borderColor;
// //                       e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
// //                     }}
// //                   >
// //                     <Image 
// //                       src={s.icon} 
// //                       alt={s.label}
// //                       width={isMobile ? 26 : 30}
// //                       height={isMobile ? 26 : 30}
// //                       className="social-icon-img"
// //                     />
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="footer-brand-right" style={{ display: "none" }} />
// //           </div>

// //           {/* COLUMN 2: Services */}
// //           <div>
// //             <h3 className="footer-heading">Services</h3>
// //             <div style={{ display: "flex", flexDirection: "column" }}>
// //               {SERVICES.slice(0, isMobile ? 5 : 9).map(s => (
// //                 <Link key={s.href} href={s.href} className="footer-link" style={{ marginBottom: isMobile ? "8px" : "10px" }}>
// //                   {s.label}
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>

// //           {/* COLUMN 3: Industries */}
// //           <div>
// //             <h3 className="footer-heading">Industries</h3>
// //             <div style={{ display: "flex", flexDirection: "column" }}>
// //               {INDUSTRIES.map(i => (
// //                 <Link key={i.href} href={i.href} className="footer-link" style={{ marginBottom: isMobile ? "8px" : "10px" }}>
// //                   {i.label}
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>

// //           {/* COLUMN 4: Company */}
// //           <div>
// //             <h3 className="footer-heading">Company</h3>
// //             <div style={{ display: "flex", flexDirection: "column" }}>
// //               {COMPANY.map(c => (
// //                 c.external ? (
// //                   <a key={c.label} href={c.href} className="footer-link" style={{ marginBottom: isMobile ? "8px" : "10px" }} target="_blank" rel="noopener noreferrer">
// //                     {c.label} <span style={{ fontSize: isMobile ? "10px" : "12px", opacity: 0.6 }}>↗</span>
// //                   </a>
// //                 ) : (
// //                   <Link key={c.href} href={c.href} className="footer-link" style={{ marginBottom: isMobile ? "8px" : "10px" }}>
// //                     {c.label}
// //                   </Link>
// //                 )
// //               ))}
// //             </div>
// //           </div>

// //           {/* COLUMN 5: Contact */}
// //           <div>
// //             <h3 className="footer-heading">Contact</h3>

// //             {/* Address Section */}
// //             <div className="address-block">
// //               <span className="address-icon">📍</span>
// //               <span>
// //                 <strong style={{ color: T.teal }}>Headquarters:</strong><br />
// //                 50 Philip Ave, Guelph, ON N1E 1R4, Canada
// //               </span>
// //             </div>

// //             {/* Phone numbers */}
// //             <div style={{ marginBottom: isMobile ? "15px" : "20px" }}>
// //               {CONTACTS.map(c => (
// //                 <div key={c.country} className="phone-row" style={{ 
// //                   display: "flex", 
// //                   alignItems: "center", 
// //                   gap: isMobile ? "8px" : "10px", 
// //                   marginBottom: isMobile ? "8px" : "10px",
// //                   flexWrap: isMobile ? "wrap" : "nowrap"
// //                 }}>
// //                   <span style={{ fontSize: isMobile ? "16px" : "18px" }}>{c.flag}</span>
// //                   <span style={{
// //                     fontSize: isMobile ? "11px" : "12px", 
// //                     fontWeight: 600,
// //                     color: "rgba(255,255,255,0.4)",
// //                     textTransform: "uppercase", 
// //                     letterSpacing: "0.06em",
// //                     minWidth: isMobile ? "40px" : "45px",
// //                   }}>
// //                     {c.country}:
// //                   </span>
// //                   <a href={`tel:${c.phone.replace(/\s|-/g, "")}`} style={{ 
// //                     color: T.teal, 
// //                     fontSize: isMobile ? '13px' : '14px', 
// //                     fontWeight: 600, 
// //                     textDecoration: "none",
// //                     wordBreak: "break-word"
// //                   }}>
// //                     {c.phone}
// //                   </a>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Email */}
// //             <div style={{ 
// //               display: "flex", 
// //               alignItems: "center", 
// //               gap: "10px", 
// //               marginBottom: isMobile ? "15px" : "20px",
// //               flexWrap: isMobile ? "wrap" : "nowrap"
// //             }}>
// //               <span style={{ fontSize: isMobile ? "16px" : "18px" }}>✉️</span>
// //               <a href="mailto:hello@nncdigital.com" style={{ 
// //                 color: T.teal, 
// //                 fontSize: isMobile ? '13px' : '14px', 
// //                 fontWeight: 600, 
// //                 textDecoration: "none",
// //                 wordBreak: "break-word"
// //               }}>
// //                 hello@nncdigital.com
// //               </a>
// //             </div>

// //             {/* Book a Free Call */}
// //             <Link href="/contact">
// //               <button className="book-btn">Book a Free Call →</button>
// //             </Link>

// //             {/* Newsletter */}
// //             <div style={{ marginTop: isMobile ? "20px" : "25px" }}>
// //               <h4 style={{ 
// //                 color: "#fff", 
// //                 fontSize: isMobile ? '13px' : '14px', 
// //                 fontWeight: 600, 
// //                 marginBottom: isMobile ? "10px" : "12px" 
// //               }}>
// //                 Newsletter
// //               </h4>
// //               <div style={{ 
// //                 display: "flex", 
// //                 gap: isMobile ? "8px" : "10px", 
// //                 alignItems: "stretch",
// //                 flexDirection: isMobile ? "column" : "row"
// //               }}>
// //                 <input type="email" placeholder="Your email" className="newsletter-input" />
// //                 <button className="subscribe-btn" style={{ width: isMobile ? "100%" : "auto" }}>Subscribe</button>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>

// //       {/* Divider */}
// //       <div style={{ height: "1px", background: "rgba(255,255,255,.06)", margin: "0 clamp(16px,3vw,32px)" }} />

// //       {/* ── Bottom Bar ── */}
// //       <div style={{ 
// //         maxWidth: 1280, 
// //         margin: "0 auto", 
// //         padding: isMobile ? "25px 20px 30px" : "25px 40px 30px", 
// //         position: "relative", 
// //         zIndex: 1 
// //       }}>
// //         <div className="footer-bottom-bar">
// //           {/* Copyright */}
// //           <div style={{ 
// //             fontSize: isMobile ? '12px' : '13px', 
// //             color: "rgba(255,255,255,0.4)", 
// //             lineHeight: 1.6,
// //             textAlign: isMobile ? "center" : "left"
// //           }}>
// //             © {year} NNC Digital Solutions. All rights reserved. | A{" "}
// //             <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer"
// //               style={{ color: T.teal, textDecoration: "none" }}>
// //               Nakshatra Namaha Creations Pvt. Ltd.
// //             </a>{" "}Company
// //           </div>

// //           {/* Legal links */}
// //           <div className="footer-legal-links">
// //             <Link href="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
// //             <Link href="/termsofservice" className="footer-bottom-link">Terms of Service</Link>
// //             <Link href="/cookies-policy" className="footer-bottom-link">Cookie Policy</Link>
// //             <Link href="/sitemap" className="footer-bottom-link">Sitemap</Link>
// //           </div>
// //         </div>

// //         {/* Serving regions */}
// //         <div style={{
// //           marginTop: isMobile ? "15px" : "20px", 
// //           fontSize: isMobile ? '11px' : '12px', 
// //           color: "rgba(255,255,255,0.3)",
// //           display: "flex", 
// //           alignItems: "center", 
// //           gap: "8px", 
// //           flexWrap: "wrap", 
// //           lineHeight: 1.7,
// //           justifyContent: isMobile ? "center" : "flex-start"
// //         }}>
// //           <span>🌍</span>
// //           <span>Serving businesses in Canada, United States, United Kingdom, UAE & Australia.</span>
// //         </div>

// //         {/* Address in bottom bar */}
// //         <div style={{
// //           marginTop: isMobile ? "8px" : "10px", 
// //           fontSize: isMobile ? '10px' : '11px', 
// //           color: "rgba(255,255,255,0.2)",
// //           display: "flex", 
// //           alignItems: "center", 
// //           gap: "8px", 
// //           flexWrap: "wrap",
// //           justifyContent: isMobile ? "center" : "flex-start"
// //         }}>
// //           <span>🏢</span>
// //           <span>50 Philip Ave, Guelph, ON N1E 1R4, Canada</span>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// // ─── Design tokens ────────────────────────────────────────────────────────────
// const T = {
//   teal: "#00C9A7",
//   tealDark: "#00a07a",
//   navy0: "#010812",
//   navy1: "#030B18",
//   navy2: "#061425",
// };

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const SERVICES = [
//   { label: "CRM Development", href: "/crm-development" },
//   { label: "ERP Development", href: "/erp-development" },
//   { label: "Web Development", href: "/web-development" },
//   { label: "Mobile App Development", href: "/mobile-app-development" },
//   { label: "Salesforce CRM", href: "/salesforce-crm" },
//   { label: "Marketing Automation", href: "/marketing-automation" },
//   { label: "SEO & Digital Marketing", href: "/seo-digital-marketing" },
//   { label: "Digital Transformation", href: "/digital-transformation" },
//   { label: "Hire CRM Developers", href: "/hire-crm-developers" },
// ];

// const INDUSTRIES = [
//   { label: "Healthcare", href: "/industries/healthcare" },
//   { label: "Real Estate", href: "/industries/real-estate" },
//   { label: "E-Commerce", href: "/industries/ecommerce" },
//   { label: "Manufacturing", href: "/industries/manufacturing" },
//   { label: "Professional Services", href: "/industries/professional-services" },
// ];

// const COMPANY = [
//   { label: "About NNC Digital", href: "/about-us" },
//   { label: "About Nakshatra Namaha Creations", href: "https://www.nakshatranamahacreations.com", external: true },
//   { label: "Case Studies", href: "/case-studies" },
//   { label: "Blog", href: "/blog" },
//   { label: "Pricing", href: "/pricing" },
//   { label: "Careers", href: "/careers" },
// ];

// // Social Media Icons with PNG images from public folder
// const SOCIALS = [
//   { 
//     label: "LinkedIn", 
//     href: "https://linkedin.com/company/nncdigital", 
//     icon: "/linkdine.png",
//     isImage: true,
//     color: "#0077b5",
//     bgColor: "rgba(0,119,181,0.15)",
//     borderColor: "rgba(0,119,181,0.3)"
//   },
//   { 
//     label: "Twitter", 
//     href: "https://twitter.com/nncdigital", 
//     icon: "/twitter.png",
//     isImage: true,
//     color: "#1DA1F2",
//     bgColor: "rgba(29,161,242,0.15)",
//     borderColor: "rgba(29,161,242,0.3)"
//   },
//   { 
//     label: "Instagram", 
//     href: "https://instagram.com/nncdigital", 
//     icon: "/instagram.png",
//     isImage: true,
//     color: "#E4405F",
//     bgColor: "rgba(228,64,95,0.15)",
//     borderColor: "rgba(228,64,95,0.3)"
//   },
//   { 
//     label: "Facebook", 
//     href: "https://facebook.com/nncdigital", 
//     icon: "/facebook.png",
//     isImage: true,
//     color: "#1877F2",
//     bgColor: "rgba(24,119,242,0.15)",
//     borderColor: "rgba(24,119,242,0.3)"
//   },
// ];

// const CONTACTS = [
//   { flag: "🇨🇦", country: "Canada", phone: "+1 647-XXX-XXXX" },
//   { flag: "🇺🇸", country: "USA", phone: "+1 631-XXX-XXXX" },
//   { flag: "🇬🇧", country: "UK", phone: "+44 20-XXXX-XXXX" },
//   { flag: "🇮🇳", country: "India", phone: "+91 9900566466" },
// ];

// const TRUST_BADGES = ["GDPR Compliant", "PIPEDA Compliant", "CCPA Ready", "ISO Certified"];

// export default function Footer() {
//   const year = new Date().getFullYear();
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isMobile = windowWidth <= 480;
//   const isTablet = windowWidth > 480 && windowWidth <= 768;
//   const isLaptop = windowWidth > 768 && windowWidth <= 1024;

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add newsletter subscription logic here
//     setSubscribed(true);
//     setTimeout(() => setSubscribed(false), 3000);
//   };

//   return (
//     <footer style={{
//       background: `linear-gradient(180deg, ${T.navy0} 0%, #020810 100%)`,
//       fontFamily: "'Poppins', sans-serif",
//       borderTop: "1px solid rgba(255,255,255,.06)",
//       position: "relative",
//       overflow: "hidden",
//       width: "100%",
//     }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

//         .footer-link {
//           color: rgba(255,255,255,.6);
//           text-decoration: none;
//           font-size: 14px;
//           font-weight: 400;
//           transition: color .2s ease, transform .2s ease;
//           line-height: 1.8;
//           display: inline-block;
//           width: fit-content;
//         }
//         .footer-link:hover {
//           color: ${T.teal} !important;
//           transform: translateX(4px);
//         }
//         .footer-heading {
//           color: ${T.teal};
//           font-size: 15px;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           margin-bottom: 16px;
//         }
//         .social-container {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 15px;
//           margin-top: 20px;
//           justify-content: flex-start;
//         }
//         .social-btn {
//           width: 56px; 
//           height: 56px; 
//           border-radius: 50%;
//           display: flex; 
//           align-items: center; 
//           justify-content: center;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           box-shadow: 0 6px 16px rgba(0,0,0,0.2);
//           backdrop-filter: blur(5px);
//           border: 1px solid;
//           overflow: hidden;
//           flex-shrink: 0;
//         }
//         .social-btn:hover {
//           transform: translateY(-5px) scale(1.08);
//           box-shadow: 0 15px 30px rgba(0,0,0,0.3) !important;
//         }
//         .social-icon-img {
//           width: 32px;
//           height: 32px;
//           object-fit: contain;
//           transition: all 0.3s ease;
//         }
//         .social-btn:hover .social-icon-img {
//           transform: scale(1.1);
//         }
//         .footer-bottom-link {
//           color: rgba(255,255,255,.4);
//           font-size: 12px;
//           text-decoration: none;
//           transition: color .2s ease;
//         }
//         .footer-bottom-link:hover { color: ${T.teal} !important; }

//         .badge {
//           font-size: 11px;
//           font-weight: 600;
//           padding: 6px 14px;
//           border-radius: 100px;
//           background: rgba(0,201,167,0.08);
//           border: 1px solid rgba(0,201,167,0.2);
//           color: ${T.teal};
//           display: inline-flex;
//           align-items: center;
//           white-space: nowrap;
//         }

//         .newsletter-input {
//           flex: 1;
//           min-width: 0;
//           padding: 14px 18px;
//           border-radius: 10px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1);
//           color: #fff;
//           font-size: 14px;
//           font-family: 'Poppins', sans-serif;
//           outline: none;
//           transition: all 0.2s ease;
//         }
//         .newsletter-input::placeholder { color: rgba(255,255,255,0.3); }
//         .newsletter-input:focus {
//           border-color: ${T.teal} !important;
//           box-shadow: 0 0 0 2px ${T.teal}30;
//         }

//         .book-btn {
//           width: 100%;
//           padding: 16px;
//           border-radius: 10px;
//           border: none;
//           background: linear-gradient(135deg, ${T.teal}, ${T.tealDark});
//           color: #000;
//           font-weight: 700;
//           font-size: 16px;
//           font-family: 'Poppins', sans-serif;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           margin-top: 15px;
//         }
//         .book-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 20px ${T.teal}40;
//         }

//         .subscribe-btn {
//           padding: 0 24px;
//           border-radius: 10px;
//           border: none;
//           background: ${T.teal};
//           color: #000;
//           font-weight: 700;
//           font-size: 15px;
//           font-family: 'Poppins', sans-serif;
//           cursor: pointer;
//           white-space: nowrap;
//           height: 52px;
//           transition: background 0.2s;
//           flex-shrink: 0;
//         }
//         .subscribe-btn:hover { background: ${T.tealDark} !important; }
//         .subscribe-btn:disabled {
//           opacity: 0.5;
//           cursor: wait;
//         }

//         .address-block {
//           display: flex;
//           align-items: flex-start;
//           gap: 12px;
//           margin-bottom: 20px;
//           color: rgba(255,255,255,.7);
//           font-size: 14px;
//           line-height: 1.6;
//         }
//         .address-icon {
//           font-size: 20px;
//           flex-shrink: 0;
//         }

//         @keyframes footerGlow {
//           0%,100% { opacity: .03; }
//           50%      { opacity: .07; }
//         }

//         /* ── Footer main grid ── */
//         .footer-grid {
//           display: grid;
//           grid-template-columns: 1.8fr 1.2fr 1.2fr 1fr 2fr;
//           gap: 30px;
//         }

//         /* ── Brand column specific ── */
//         .footer-brand-left {
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//         }

//         /* ── Bottom bar ── */
//         .footer-bottom-bar {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           flex-wrap: wrap;
//           gap: 15px;
//         }
//         .footer-legal-links {
//           display: flex;
//           gap: 25px;
//           flex-wrap: wrap;
//         }

//         /* Phone row styling */
//         .phone-row {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 12px;
//           flex-wrap: nowrap;
//         }

//         /* Logo styling */
//         .footer-logo {
//           width: ${isMobile ? '180px' : '220px'};
//           height: auto;
//           border-radius: 12px;
//           margin-bottom: 20px;
//         }

//         /* Tablet Styles */
//         @media (max-width: 1024px) {
//           .footer-grid {
//             grid-template-columns: repeat(3, 1fr);
//             gap: 25px;
//           }
//           .footer-col-brand {
//             grid-column: 1 / -1;
//             display: grid;
//             grid-template-columns: 1fr 1fr;
//             gap: 30px;
//             align-items: start;
//             padding-bottom: 25px;
//             border-bottom: 1px solid rgba(255,255,255,0.06);
//           }
//           .footer-brand-left {
//             width: 100%;
//           }
//           .social-container {
//             margin-top: 15px;
//           }
//           .phone-row {
//             flex-wrap: wrap;
//             gap: 8px;
//           }
//           .footer-logo {
//             width: 200px;
//           }
//         }

//         /* Mobile Styles */
//         @media (max-width: 768px) {
//           .footer-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 25px;
//           }
//           .footer-col-brand {
//             grid-column: 1 / -1;
//             grid-template-columns: 1fr;
//             gap: 20px;
//             padding-bottom: 20px;
//           }
//           .footer-heading {
//             font-size: 14px;
//             margin-bottom: 12px;
//           }
//           .footer-link {
//             font-size: 13px;
//             line-height: 1.6;
//             margin-bottom: 6px;
//           }
//           .badge {
//             font-size: 10px;
//             padding: 4px 12px;
//           }
//           .social-container {
//             justify-content: center;
//             margin-top: 15px;
//             gap: 12px;
//           }
//           .social-btn {
//             width: 48px;
//             height: 48px;
//           }
//           .social-icon-img {
//             width: 26px;
//             height: 26px;
//           }
//           .book-btn {
//             font-size: 15px;
//             padding: 14px;
//           }
//           .newsletter-input {
//             font-size: 13px;
//             padding: 12px 16px;
//           }
//           .subscribe-btn {
//             height: 48px;
//             font-size: 14px;
//             padding: 0 20px;
//           }
//           .footer-bottom-bar {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//             gap: 15px;
//           }
//           .footer-legal-links {
//             justify-content: center;
//             gap: 15px;
//           }
//           .footer-logo {
//             width: 180px;
//           }
//         }

//         /* Small Mobile Styles */
//         @media (max-width: 480px) {
//           .footer-grid {
//             grid-template-columns: 1fr;
//             gap: 35px;
//           }
//           .footer-col-brand {
//             grid-column: 1;
//             padding-bottom: 0;
//             border-bottom: none;
//           }
//           .footer-heading {
//             font-size: 15px;
//             margin-bottom: 15px;
//             text-align: left;
//           }
//           .footer-link {
//             font-size: 14px;
//             margin-bottom: 10px;
//           }
//           .badge {
//             font-size: 10px;
//             padding: 4px 10px;
//           }
//           .social-container {
//             justify-content: flex-start;
//             gap: 15px;
//           }
//           .social-btn {
//             width: 52px;
//             height: 52px;
//           }
//           .social-icon-img {
//             width: 28px;
//             height: 28px;
//           }
//           .phone-row {
//             flex-wrap: wrap;
//             gap: 8px;
//           }
//           .address-block {
//             font-size: 14px;
//             margin-bottom: 15px;
//           }
//           .footer-legal-links {
//             flex-direction: column;
//             gap: 12px;
//             align-items: center;
//           }
//           .footer-legal-links a {
//             font-size: 12px;
//           }
//           .footer-bottom-bar > div:first-child {
//             font-size: 12px;
//           }
//           .newsletter-form {
//             flex-direction: column;
//           }
//           .subscribe-btn {
//             width: 100%;
//             height: 50px;
//           }
//           .footer-logo {
//             width: 200px;
//           }
//         }
//       `}</style>

//       {/* Background glow orbs */}
//       <div style={{
//         position: "absolute", 
//         width: isMobile ? 300 : 600, 
//         height: isMobile ? 300 : 600, 
//         borderRadius: "50%",
//         background: `radial-gradient(circle, ${T.teal}18 0%, transparent 70%)`,
//         top: -200, 
//         left: -150, 
//         pointerEvents: "none",
//         animation: "footerGlow 6s ease-in-out infinite",
//       }} />
//       <div style={{
//         position: "absolute", 
//         width: isMobile ? 200 : 400, 
//         height: isMobile ? 200 : 400, 
//         borderRadius: "50%",
//         background: `radial-gradient(circle, ${T.tealDark}14 0%, transparent 70%)`,
//         bottom: -100, 
//         right: -80, 
//         pointerEvents: "none",
//         animation: "footerGlow 8s ease-in-out infinite",
//         animationDelay: "2s",
//       }} />

//       {/* ── Main Footer ── */}
//       <div style={{ 
//         maxWidth: 1280, 
//         margin: "0 auto", 
//         padding: isMobile ? "50px 20px 40px" : isTablet ? "60px 30px 50px" : "80px 40px 60px", 
//         position: "relative", 
//         zIndex: 1 
//       }}>
//         <div className="footer-grid">

//           {/* COLUMN 1: Brand */}
//           <div className="footer-col-brand">
//             <div className="footer-brand-left">
//               <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
//                 <Image
//                   src="/NNCLOGO.jpg"
//                   alt="NNC Digital Solutions"
//                   width={isMobile ? 200 : 240}
//                   height={isMobile ? 70 : 84}
//                   className="footer-logo"
//                   style={{ 
//                     objectFit: "contain", 
//                     borderRadius: "12px",
//                     width: "auto",
//                     height: "auto"
//                   }}
//                   priority={false}
//                 />
//               </Link>
//               <p style={{ 
//                 color: "rgba(255,255,255,0.5)", 
//                 fontSize: isMobile ? '14px' : '15px', 
//                 lineHeight: 1.7, 
//                 marginBottom: isMobile ? "20px" : "25px",
//                 maxWidth: "320px"
//               }}>
//                 A subsidiary of <strong style={{ color: T.teal }}>Nakshatra Namaha Creations Pvt. Ltd.</strong>
//               </p>
//               {/* Trust Badges */}
//               <div style={{ 
//                 display: "flex", 
//                 flexWrap: "wrap", 
//                 gap: isMobile ? "8px" : "10px", 
//                 marginBottom: isMobile ? "20px" : "25px" 
//               }}>
//                 {TRUST_BADGES.map(badge => (
//                   <span key={badge} className="badge">{badge}</span>
//                 ))}
//               </div>
//               {/* Social Media Icons - Larger with better spacing */}
//               <div className="social-container">
//                 {SOCIALS.map(s => (
//                   <a 
//                     key={s.label} 
//                     href={s.href} 
//                     className="social-btn" 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     aria-label={s.label}
//                     style={{ 
//                       background: s.bgColor,
//                       borderColor: s.borderColor,
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = s.color;
//                       e.currentTarget.style.borderColor = s.color;
//                       e.currentTarget.style.boxShadow = `0 15px 30px ${s.color}80`;
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = s.bgColor;
//                       e.currentTarget.style.borderColor = s.borderColor;
//                       e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
//                     }}
//                   >
//                     <Image 
//                       src={s.icon} 
//                       alt={s.label}
//                       width={isMobile ? 28 : 32}
//                       height={isMobile ? 28 : 32}
//                       className="social-icon-img"
//                       style={{ width: "auto", height: "auto" }}
//                     />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* COLUMN 2: Services */}
//           <div>
//             <h3 className="footer-heading">Services</h3>
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               {SERVICES.slice(0, isMobile ? 6 : 9).map(s => (
//                 <Link key={s.href} href={s.href} className="footer-link" style={{ marginBottom: isMobile ? "10px" : "12px" }}>
//                   {s.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* COLUMN 3: Industries */}
//           <div>
//             <h3 className="footer-heading">Industries</h3>
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               {INDUSTRIES.map(i => (
//                 <Link key={i.href} href={i.href} className="footer-link" style={{ marginBottom: isMobile ? "10px" : "12px" }}>
//                   {i.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* COLUMN 4: Company */}
//           <div>
//             <h3 className="footer-heading">Company</h3>
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               {COMPANY.map(c => (
//                 c.external ? (
//                   <a key={c.label} href={c.href} className="footer-link" style={{ marginBottom: isMobile ? "10px" : "12px" }} target="_blank" rel="noopener noreferrer">
//                     {c.label} <span style={{ fontSize: "12px", opacity: 0.6 }}>↗</span>
//                   </a>
//                 ) : (
//                   <Link key={c.href} href={c.href} className="footer-link" style={{ marginBottom: isMobile ? "10px" : "12px" }}>
//                     {c.label}
//                   </Link>
//                 )
//               ))}
//             </div>
//           </div>

//           {/* COLUMN 5: Contact */}
//           <div>
//             <h3 className="footer-heading">Contact</h3>

//             {/* Address Section */}
//             <div className="address-block">
//               <span className="address-icon">📍</span>
//               <span>
//                 <strong style={{ color: T.teal }}>Headquarters:</strong><br />
//                 50 Philip Ave, Guelph, ON N1E 1R4, Canada
//               </span>
//             </div>

//             {/* Phone numbers */}
//             <div style={{ marginBottom: isMobile ? "20px" : "25px" }}>
//               {CONTACTS.map(c => (
//                 <div key={c.country} className="phone-row">
//                   <span style={{ fontSize: "18px" }}>{c.flag}</span>
//                   <span style={{
//                     fontSize: "13px", 
//                     fontWeight: 600,
//                     color: "rgba(255,255,255,0.4)",
//                     textTransform: "uppercase", 
//                     letterSpacing: "0.06em",
//                     minWidth: "50px",
//                   }}>
//                     {c.country}:
//                   </span>
//                   <a href={`tel:${c.phone.replace(/\s|-/g, "")}`} style={{ 
//                     color: T.teal, 
//                     fontSize: '15px', 
//                     fontWeight: 600, 
//                     textDecoration: "none",
//                     wordBreak: "break-word"
//                   }}>
//                     {c.phone}
//                   </a>
//                 </div>
//               ))}
//             </div>

//             {/* Email */}
//             <div style={{ 
//               display: "flex", 
//               alignItems: "center", 
//               gap: "12px", 
//               marginBottom: isMobile ? "20px" : "25px",
//               flexWrap: isMobile ? "wrap" : "nowrap"
//             }}>
//               <span style={{ fontSize: "18px" }}>✉️</span>
//               <a href="mailto:hello@nncdigital.com" style={{ 
//                 color: T.teal, 
//                 fontSize: '15px', 
//                 fontWeight: 600, 
//                 textDecoration: "none",
//                 wordBreak: "break-word"
//               }}>
//                 hello@nncdigital.com
//               </a>
//             </div>

//             {/* Book a Free Call */}
//             <Link href="/contact" style={{ textDecoration: "none" }}>
//               <button className="book-btn">Book a Free Call →</button>
//             </Link>

//             {/* Newsletter */}
//             <div style={{ marginTop: isMobile ? "25px" : "30px" }}>
//               <h4 style={{ 
//                 color: "#fff", 
//                 fontSize: '15px', 
//                 fontWeight: 600, 
//                 marginBottom: "15px" 
//               }}>
//                 Newsletter
//               </h4>
//               <form onSubmit={handleSubscribe} className="newsletter-form" style={{ 
//                 display: "flex", 
//                 gap: "12px", 
//                 alignItems: "stretch",
//                 flexDirection: isMobile ? "column" : "row"
//               }}>
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="newsletter-input"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <button 
//                   type="submit" 
//                   className="subscribe-btn" 
//                   style={{ width: isMobile ? "100%" : "auto" }}
//                   disabled={subscribed}
//                 >
//                   {subscribed ? 'Subscribed!' : 'Subscribe'}
//                 </button>
//               </form>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Divider */}
//       <div style={{ height: "1px", background: "rgba(255,255,255,.06)", margin: "0 clamp(16px,3vw,32px)" }} />

//       {/* ── Bottom Bar ── */}
//       <div style={{ 
//         maxWidth: 1280, 
//         margin: "0 auto", 
//         padding: isMobile ? "30px 20px 35px" : "30px 40px 35px", 
//         position: "relative", 
//         zIndex: 1 
//       }}>
//         <div className="footer-bottom-bar">
//           {/* Copyright */}
//           <div style={{ 
//             fontSize: isMobile ? '13px' : '14px', 
//             color: "rgba(255,255,255,0.4)", 
//             lineHeight: 1.6,
//             textAlign: isMobile ? "center" : "left"
//           }}>
//             © {year} NNC Digital Solutions. All rights reserved. | A{" "}
//             <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer"
//               style={{ color: T.teal, textDecoration: "none" }}>
//               Nakshatra Namaha Creations Pvt. Ltd.
//             </a>{" "}Company
//           </div>

//           {/* Legal links */}
//           <div className="footer-legal-links">
//             <Link href="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
//             <Link href="/termsofservice" className="footer-bottom-link">Terms of Service</Link>
//             <Link href="/cookies-policy" className="footer-bottom-link">Cookie Policy</Link>
//             <Link href="/sitemap" className="footer-bottom-link">Sitemap</Link>
//           </div>
//         </div>

//         {/* Serving regions */}
//         <div style={{
//           marginTop: isMobile ? "20px" : "25px", 
//           fontSize: isMobile ? '12px' : '13px', 
//           color: "rgba(255,255,255,0.3)",
//           display: "flex", 
//           alignItems: "center", 
//           gap: "10px", 
//           flexWrap: "wrap", 
//           lineHeight: 1.7,
//           justifyContent: isMobile ? "center" : "flex-start"
//         }}>
//           <span>🌍</span>
//           <span>Serving businesses in Canada, United States, United Kingdom, UAE & Australia.</span>
//         </div>

//         {/* Address in bottom bar */}
//         <div style={{
//           marginTop: isMobile ? "10px" : "12px", 
//           fontSize: isMobile ? '11px' : '12px', 
//           color: "rgba(255,255,255,0.2)",
//           display: "flex", 
//           alignItems: "center", 
//           gap: "10px", 
//           flexWrap: "wrap",
//           justifyContent: isMobile ? "center" : "flex-start"
//         }}>
//           <span>🏢</span>
//           <span>50 Philip Ave, Guelph, ON N1E 1R4, Canada</span>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
];

const COMPANY = [
  { label: "About NNC Digital", href: "/about-us" },
  { label: "About Nakshatra Namaha Creations", href: "https://www.nakshatranamahacreations.com", external: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
];

// Social Media Icons with PNG images from public folder - NO CIRCLES
const SOCIALS = [
  { 
    label: "LinkedIn", 
    href: "https://linkedin.com/company/nncdigital", 
    icon: "/linkdine.png",
    isImage: true,
    color: "#0077b5"
  },
  { 
    label: "Twitter", 
    href: "https://twitter.com/nncdigital", 
    icon: "/twitter.png",
    isImage: true,
    color: "#1DA1F2"
  },
  { 
    label: "Instagram", 
    href: "https://instagram.com/nncdigital", 
    icon: "/instagram.png",
    isImage: true,
    color: "#E4405F"
  },
  { 
    label: "Facebook", 
    href: "https://facebook.com/nncdigital", 
    icon: "/facebook.png",
    isImage: true,
    color: "#1877F2"
  },
];

const CONTACTS = [
  { flag: "🇨🇦", country: "Canada", phone: "+1 647-XXX-XXXX" },
  { flag: "🇺🇸", country: "USA", phone: "+1 631-XXX-XXXX" },
  { flag: "🇬🇧", country: "UK", phone: "+44 20-XXXX-XXXX" },
  { flag: "🇮🇳", country: "India", phone: "+91 9900566466" },
];

const TRUST_BADGES = ["GDPR Compliant", "PIPEDA Compliant", "CCPA Ready", "ISO Certified"];

export default function Footer() {
  const year = new Date().getFullYear();
  const [windowWidth, setWindowWidth] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;
  const isLaptop = windowWidth > 768 && windowWidth <= 1024;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer style={{
      background: `linear-gradient(180deg, ${T.navy0} 0%, #020810 100%)`,
      fontFamily: "'Poppins', sans-serif",
      borderTop: "1px solid rgba(255,255,255,.06)",
      position: "relative",
      overflow: "hidden",
      width: "100%",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .footer-link {
          color: rgba(255,255,255,.6);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: color .2s ease, transform .2s ease;
          line-height: 1.8;
          display: inline-block;
          width: fit-content;
        }
        .footer-link:hover {
          color: ${T.teal} !important;
          transform: translateX(4px);
        }
        .footer-heading {
          color: ${T.teal};
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        
        /* Social Media Container - No circles, just icons */
        .social-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
          justify-content: flex-start;
          align-items: center;
        }
        
        /* Social Link - No background, no border, just the icon */
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          text-decoration: none;
          line-height: 1;
        }
        
        .social-link:hover {
          transform: translateY(-5px) scale(1.1);
        }
        
        /* Icon inside link - larger size */
        .social-icon-img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          transition: all 0.3s ease;
          display: block;
        }
        
        .social-link:hover .social-icon-img {
          filter: brightness(1.2);
        }

        .footer-bottom-link {
          color: rgba(255,255,255,.4);
          font-size: 12px;
          text-decoration: none;
          transition: color .2s ease;
        }
        .footer-bottom-link:hover { color: ${T.teal} !important; }

        .badge {
          font-size: 11px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(0,201,167,0.08);
          border: 1px solid rgba(0,201,167,0.2);
          color: ${T.teal};
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }

        .newsletter-input {
          flex: 1;
          min-width: 0;
          padding: 14px 18px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-size: 14px;
          font-family: 'Poppins', sans-serif;
          outline: none;
          transition: all 0.2s ease;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.3); }
        .newsletter-input:focus {
          border-color: ${T.teal} !important;
          box-shadow: 0 0 0 2px ${T.teal}30;
        }

        .book-btn {
          width: 100%;
          padding: 16px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, ${T.teal}, ${T.tealDark});
          color: #000;
          font-weight: 700;
          font-size: 16px;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 15px;
        }
        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px ${T.teal}40;
        }

        .subscribe-btn {
          padding: 0 24px;
          border-radius: 10px;
          border: none;
          background: ${T.teal};
          color: #000;
          font-weight: 700;
          font-size: 15px;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          white-space: nowrap;
          height: 52px;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .subscribe-btn:hover { background: ${T.tealDark} !important; }
        .subscribe-btn:disabled {
          opacity: 0.5;
          cursor: wait;
        }

        .address-block {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 20px;
          color: rgba(255,255,255,.7);
          font-size: 14px;
          line-height: 1.6;
        }
        .address-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        @keyframes footerGlow {
          0%,100% { opacity: .03; }
          50%      { opacity: .07; }
        }

        /* ── Footer main grid ── */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1.2fr 1.2fr 1fr 2fr;
          gap: 30px;
        }

        /* ── Brand column specific ── */
        .footer-brand-left {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* ── Bottom bar ── */
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
        }
        .footer-legal-links {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }

        /* Phone row styling */
        .phone-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          flex-wrap: nowrap;
        }

        /* Logo styling */
        .footer-logo {
          width: ${isMobile ? '180px' : '220px'};
          height: auto;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }
          .footer-col-brand {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            align-items: start;
            padding-bottom: 25px;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .footer-brand-left {
            width: 100%;
          }
          .social-container {
            margin-top: 15px;
            gap: 18px;
          }
          .social-icon-img {
            width: 38px;
            height: 38px;
          }
          .phone-row {
            flex-wrap: wrap;
            gap: 8px;
          }
          .footer-logo {
            width: 200px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          .footer-col-brand {
            grid-column: 1 / -1;
            grid-template-columns: 1fr;
            gap: 20px;
            padding-bottom: 20px;
          }
          .footer-heading {
            font-size: 14px;
            margin-bottom: 12px;
          }
          .footer-link {
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 6px;
          }
          .badge {
            font-size: 10px;
            padding: 4px 12px;
          }
          .social-container {
            justify-content: center;
            margin-top: 15px;
            gap: 20px;
          }
          .social-icon-img {
            width: 36px;
            height: 36px;
          }
          .book-btn {
            font-size: 15px;
            padding: 14px;
          }
          .newsletter-input {
            font-size: 13px;
            padding: 12px 16px;
          }
          .subscribe-btn {
            height: 48px;
            font-size: 14px;
            padding: 0 20px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 15px;
          }
          .footer-legal-links {
            justify-content: center;
            gap: 15px;
          }
          .footer-logo {
            width: 180px;
          }
        }

        /* Small Mobile Styles - Even larger icons */
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }
          .footer-col-brand {
            grid-column: 1;
            padding-bottom: 0;
            border-bottom: none;
          }
          .footer-heading {
            font-size: 15px;
            margin-bottom: 15px;
            text-align: left;
          }
          .footer-link {
            font-size: 14px;
            margin-bottom: 10px;
          }
          .badge {
            font-size: 10px;
            padding: 4px 10px;
          }
          .social-container {
            justify-content: flex-start;
            gap: 25px;
          }
          .social-icon-img {
            width: 44px;
            height: 44px;
          }
          .phone-row {
            flex-wrap: wrap;
            gap: 8px;
          }
          .address-block {
            font-size: 14px;
            margin-bottom: 15px;
          }
          .footer-legal-links {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
          .footer-legal-links a {
            font-size: 12px;
          }
          .footer-bottom-bar > div:first-child {
            font-size: 12px;
          }
          .newsletter-form {
            flex-direction: column;
          }
          .subscribe-btn {
            width: 100%;
            height: 50px;
          }
          .footer-logo {
            width: 200px;
          }
        }
      `}</style>

      {/* Background glow orbs */}
      <div style={{
        position: "absolute", 
        width: isMobile ? 300 : 600, 
        height: isMobile ? 300 : 600, 
        borderRadius: "50%",
        background: `radial-gradient(circle, ${T.teal}18 0%, transparent 70%)`,
        top: -200, 
        left: -150, 
        pointerEvents: "none",
        animation: "footerGlow 6s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", 
        width: isMobile ? 200 : 400, 
        height: isMobile ? 200 : 400, 
        borderRadius: "50%",
        background: `radial-gradient(circle, ${T.tealDark}14 0%, transparent 70%)`,
        bottom: -100, 
        right: -80, 
        pointerEvents: "none",
        animation: "footerGlow 8s ease-in-out infinite",
        animationDelay: "2s",
      }} />

      {/* ── Main Footer ── */}
      <div style={{ 
        maxWidth: 1280, 
        margin: "0 auto", 
        padding: isMobile ? "50px 20px 40px" : isTablet ? "60px 30px 50px" : "80px 40px 60px", 
        position: "relative", 
        zIndex: 1 
      }}>
        <div className="footer-grid">

          {/* COLUMN 1: Brand */}
          <div className="footer-col-brand">
            <div className="footer-brand-left">
              <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
                <Image
                  src="/NNCLOGO.jpg"
                  alt="NNC Digital Solutions"
                  width={isMobile ? 200 : 240}
                  height={isMobile ? 70 : 84}
                  className="footer-logo"
                  style={{ 
                    objectFit: "contain", 
                    borderRadius: "12px",
                    width: "auto",
                    height: "auto"
                  }}
                  priority={false}
                />
              </Link>
              <p style={{ 
                color: "rgba(255,255,255,0.5)", 
                fontSize: isMobile ? '14px' : '15px', 
                lineHeight: 1.7, 
                marginBottom: isMobile ? "20px" : "25px",
                maxWidth: "320px"
              }}>
                A subsidiary of <strong style={{ color: T.teal }}>Nakshatra Namaha Creations Pvt. Ltd.</strong>
              </p>
              {/* Trust Badges */}
              <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: isMobile ? "8px" : "10px", 
                marginBottom: isMobile ? "20px" : "25px" 
              }}>
                {TRUST_BADGES.map(badge => (
                  <span key={badge} className="badge">{badge}</span>
                ))}
              </div>
              {/* Social Media Icons - NO CIRCLES, just large icons */}
              <div className="social-container">
                {SOCIALS.map(s => (
                  <a 
                    key={s.label} 
                    href={s.href} 
                    className="social-link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={s.label}
                  >
                    <Image 
                      src={s.icon} 
                      alt={s.label}
                      width={isMobile ? 44 : 40}
                      height={isMobile ? 44 : 40}
                      className="social-icon-img"
                      style={{ 
                        width: "auto", 
                        height: "auto"
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Services */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {SERVICES.slice(0, isMobile ? 6 : 9).map(s => (
                <Link key={s.href} href={s.href} className="footer-link" style={{ marginBottom: isMobile ? "10px" : "12px" }}>
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
                <Link key={i.href} href={i.href} className="footer-link" style={{ marginBottom: isMobile ? "10px" : "12px" }}>
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
                  <a key={c.label} href={c.href} className="footer-link" style={{ marginBottom: isMobile ? "10px" : "12px" }} target="_blank" rel="noopener noreferrer">
                    {c.label} <span style={{ fontSize: "12px", opacity: 0.6 }}>↗</span>
                  </a>
                ) : (
                  <Link key={c.href} href={c.href} className="footer-link" style={{ marginBottom: isMobile ? "10px" : "12px" }}>
                    {c.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* COLUMN 5: Contact */}
          <div>
            <h3 className="footer-heading">Contact</h3>

            {/* Address Section */}
            <div className="address-block">
              <span className="address-icon">📍</span>
              <span>
                <strong style={{ color: T.teal }}>Headquarters:</strong><br />
                50 Philip Ave, Guelph, ON N1E 1R4, Canada
              </span>
            </div>

            {/* Phone numbers */}
            <div style={{ marginBottom: isMobile ? "20px" : "25px" }}>
              {CONTACTS.map(c => (
                <div key={c.country} className="phone-row">
                  <span style={{ fontSize: "18px" }}>{c.flag}</span>
                  <span style={{
                    fontSize: "13px", 
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase", 
                    letterSpacing: "0.06em",
                    minWidth: "50px",
                  }}>
                    {c.country}:
                  </span>
                  <a href={`tel:${c.phone.replace(/\s|-/g, "")}`} style={{ 
                    color: T.teal, 
                    fontSize: '15px', 
                    fontWeight: 600, 
                    textDecoration: "none",
                    wordBreak: "break-word"
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
              gap: "12px", 
              marginBottom: isMobile ? "20px" : "25px",
              flexWrap: isMobile ? "wrap" : "nowrap"
            }}>
              <span style={{ fontSize: "18px" }}>✉️</span>
              <a href="mailto:hello@nncdigital.com" style={{ 
                color: T.teal, 
                fontSize: '15px', 
                fontWeight: 600, 
                textDecoration: "none",
                wordBreak: "break-word"
              }}>
                hello@nncdigital.com
              </a>
            </div>

            {/* Book a Free Call */}
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="book-btn">Book a Free Call →</button>
            </Link>

            {/* Newsletter */}
            <div style={{ marginTop: isMobile ? "25px" : "30px" }}>
              <h4 style={{ 
                color: "#fff", 
                fontSize: '15px', 
                fontWeight: 600, 
                marginBottom: "15px" 
              }}>
                Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="newsletter-form" style={{ 
                display: "flex", 
                gap: "12px", 
                alignItems: "stretch",
                flexDirection: isMobile ? "column" : "row"
              }}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="subscribe-btn" 
                  style={{ width: isMobile ? "100%" : "auto" }}
                  disabled={subscribed}
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,.06)", margin: "0 clamp(16px,3vw,32px)" }} />

      {/* ── Bottom Bar ── */}
      <div style={{ 
        maxWidth: 1280, 
        margin: "0 auto", 
        padding: isMobile ? "30px 20px 35px" : "30px 40px 35px", 
        position: "relative", 
        zIndex: 1 
      }}>
        <div className="footer-bottom-bar">
          {/* Copyright */}
          <div style={{ 
            fontSize: isMobile ? '13px' : '14px', 
            color: "rgba(255,255,255,0.4)", 
            lineHeight: 1.6,
            textAlign: isMobile ? "center" : "left"
          }}>
            © {year} NNC Digital Solutions. All rights reserved. | A{" "}
            <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer"
              style={{ color: T.teal, textDecoration: "none" }}>
              Nakshatra Namaha Creations Pvt. Ltd.
            </a>{" "}Company
          </div>

          {/* Legal links */}
          <div className="footer-legal-links">
            <Link href="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="/termsofservice" className="footer-bottom-link">Terms of Service</Link>
            <Link href="/cookies-policy" className="footer-bottom-link">Cookie Policy</Link>
            <Link href="/sitemap" className="footer-bottom-link">Sitemap</Link>
          </div>
        </div>

        {/* Serving regions */}
        <div style={{
          marginTop: isMobile ? "20px" : "25px", 
          fontSize: isMobile ? '12px' : '13px', 
          color: "rgba(255,255,255,0.3)",
          display: "flex", 
          alignItems: "center", 
          gap: "10px", 
          flexWrap: "wrap", 
          lineHeight: 1.7,
          justifyContent: isMobile ? "center" : "flex-start"
        }}>
          <span>🌍</span>
          <span>Serving businesses in Canada, United States, United Kingdom, UAE & Australia.</span>
        </div>

        {/* Address in bottom bar */}
        <div style={{
          marginTop: isMobile ? "10px" : "12px", 
          fontSize: isMobile ? '11px' : '12px', 
          color: "rgba(255,255,255,0.2)",
          display: "flex", 
          alignItems: "center", 
          gap: "10px", 
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "flex-start"
        }}>
          {/* <span>🏢</span> */}
          {/* <span>50 Philip Ave, Guelph, ON N1E 1R4, Canada</span> */}
        </div>
      </div>
    </footer>
  );
}