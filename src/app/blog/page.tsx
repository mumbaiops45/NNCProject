// // // "use client";

// // // import { useState, useEffect, useRef, CSSProperties } from "react";
// // // import Navbar from "../components/Navbar";

// // // // ─── Design tokens ────────────────────────────────────────────────────────────
// // // const T = "#00C9A7";
// // // const TD = "#00a07a";
// // // const P = "#8B5CF6";
// // // const G = "#10B981";
// // // const N0 = "#010812";
// // // const N1 = "#030B18";
// // // const N2 = "#061425";

// // // // Types
// // // interface BlogPost {
// // //   id: number;
// // //   category: string;
// // //   categoryColor: string;
// // //   title: string;
// // //   readTime: string;
// // //   excerpt: string;
// // //   author: string;
// // //   date: string;
// // //   image: string;
// // //   featured: boolean;
// // //   link: string;
// // // }

// // // export default function BlogPage() {
// // //   const [windowWidth, setWindowWidth] = useState(0);
// // //   const [activeFilter, setActiveFilter] = useState("All");
// // //   const [email, setEmail] = useState("");
// // //   const [subscribed, setSubscribed] = useState(false);
// // //   const [loading, setLoading] = useState(false);
// // //   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
// // //   const [navbarHeight, setNavbarHeight] = useState(70);
// // //   const filterRef = useRef<HTMLDivElement>(null);

// // //   useEffect(() => {
// // //     if (typeof window === "undefined") return;
// // //     setWindowWidth(window.innerWidth);

// // //     const handleResize = () => setWindowWidth(window.innerWidth);
// // //     window.addEventListener("resize", handleResize);

// // //     // Detect actual navbar height
// // //     const navbar = document.querySelector("nav") || document.querySelector("header");
// // //     if (navbar) {
// // //       setNavbarHeight(navbar.getBoundingClientRect().height);
// // //     }

// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   const isMobile = windowWidth > 0 && windowWidth <= 640;
// // //   const isTablet = windowWidth > 640 && windowWidth <= 1024;
// // //   const isDesktop = windowWidth > 1024;

// // //   const filters = ["All", "CRM", "ERP", "Web", "Mobile", "Automation", "SEO", "Strategy", "Compliance"];

// // //   const blogPosts: BlogPost[] = [
// // //     {
// // //       id: 1,
// // //       category: "CRM",
// // //       categoryColor: T,
// // //       title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
// // //       readTime: "8 min read",
// // //       excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
// // //       author: "Sarah Chen",
// // //       date: "Mar 15, 2025",
// // //       image: "crm-guide",
// // //       featured: true,
// // //       link: "/blog/crm-implementation-guide"
// // //     },
// // //     {
// // //       id: 2,
// // //       category: "Strategy",
// // //       categoryColor: P,
// // //       title: "ERP vs CRM: Which Does Your Business Need First?",
// // //       readTime: "5 min read",
// // //       excerpt: "A framework for deciding which system to build first — and exactly when you need both running together.",
// // //       author: "Michael Roberts",
// // //       date: "Mar 10, 2025",
// // //       image: "erp-vs-crm",
// // //       featured: true,
// // //       link: "/blog/erp-vs-crm"
// // //     },
// // //     {
// // //       id: 3,
// // //       category: "CRM",
// // //       categoryColor: T,
// // //       title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
// // //       readTime: "7 min read",
// // //       excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
// // //       author: "David Kumar",
// // //       date: "Mar 5, 2025",
// // //       image: "crm-cost",
// // //       featured: true,
// // //       link: "/blog/custom-crm-cost"
// // //     },
// // //     {
// // //       id: 4,
// // //       category: "Compliance",
// // //       categoryColor: "#FF6B6B",
// // //       title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
// // //       readTime: "9 min read",
// // //       excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",
// // //       author: "Emma Watson",
// // //       date: "Feb 28, 2025",
// // //       image: "compliance",
// // //       featured: true,
// // //       link: "/blog/gdpr-pipeda-guide"
// // //     },
// // //     {
// // //       id: 5,
// // //       category: "Automation",
// // //       categoryColor: G,
// // //       title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
// // //       readTime: "6 min read",
// // //       excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",
// // //       author: "James Wilson",
// // //       date: "Feb 20, 2025",
// // //       image: "automation",
// // //       featured: true,
// // //       link: "/blog/sales-automation"
// // //     },
// // //     {
// // //       id: 6,
// // //       category: "CRM",
// // //       categoryColor: T,
// // //       title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
// // //       readTime: "7 min read",
// // //       excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
// // //       author: "Priya Patel",
// // //       date: "Feb 15, 2025",
// // //       image: "whatsapp-crm",
// // //       featured: true,
// // //       link: "/blog/whatsapp-crm-integration"
// // //     },
// // //     {
// // //       id: 7,
// // //       category: "ERP",
// // //       categoryColor: "#F59E0B",
// // //       title: "ERP Implementation Pitfalls to Avoid in 2025",
// // //       readTime: "10 min read",
// // //       excerpt: "Lessons learned from 50+ ERP implementations across manufacturing, distribution, and services industries.",
// // //       author: "Robert Chen",
// // //       date: "Feb 10, 2025",
// // //       image: "erp-pitfalls",
// // //       featured: false,
// // //       link: "/blog/erp-pitfalls"
// // //     },
// // //     {
// // //       id: 8,
// // //       category: "Mobile",
// // //       categoryColor: "#EC4899",
// // //       title: "Mobile-First CRM: Why Your Field Teams Need a Native App",
// // //       readTime: "6 min read",
// // //       excerpt: "How mobile CRM apps are transforming field service, sales, and operations for businesses with remote teams.",
// // //       author: "Lisa Zhang",
// // //       date: "Feb 5, 2025",
// // //       image: "mobile-crm",
// // //       featured: false,
// // //       link: "/blog/mobile-crm"
// // //     },
// // //     {
// // //       id: 9,
// // //       category: "SEO",
// // //       categoryColor: "#3B82F6",
// // //       title: "SEO for 2025: What's Changed and What Still Works",
// // //       readTime: "8 min read",
// // //       excerpt: "An updated look at SEO strategies that drive organic traffic for B2B and e-commerce businesses.",
// // //       author: "Mark Taylor",
// // //       date: "Jan 28, 2025",
// // //       image: "seo-2025",
// // //       featured: false,
// // //       link: "/blog/seo-2025"
// // //     }
// // //   ];

// // //   const filteredPosts = activeFilter === "All"
// // //     ? blogPosts
// // //     : blogPosts.filter(post => post.category === activeFilter);

// // //   const handleSubscribe = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setTimeout(() => {
// // //       setLoading(false);
// // //       setSubscribed(true);
// // //       setEmail("");
// // //     }, 1200);
// // //   };

// // //   // ─── Responsive helpers ───────────────────────────────────────────────────
// // //   const sp = isMobile ? "48px 16px" : isTablet ? "72px 28px" : "96px 48px";

// // //   const heroFontSize = isMobile
// // //     ? "clamp(28px, 7vw, 36px)"
// // //     : isTablet
// // //     ? "clamp(36px, 5vw, 46px)"
// // //     : "clamp(44px, 4vw, 60px)";

// // //   const featuredCols = isMobile ? "1fr" : "repeat(2, 1fr)";
// // //   const allCols = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";

// // //   const baseInput: CSSProperties = {
// // //     width: "100%",
// // //     padding: isMobile ? "12px 14px" : "14px 16px",
// // //     borderRadius: "12px",
// // //     background: "rgba(255,255,255,0.05)",
// // //     border: "1px solid rgba(255,255,255,0.1)",
// // //     color: "#fff",
// // //     fontSize: isMobile ? "14px" : "15px",
// // //     fontFamily: "'Poppins', sans-serif",
// // //     outline: "none",
// // //     transition: "all 0.3s ease",
// // //     boxSizing: "border-box" as const,
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       {/* ── Global styles injected via <style> ─────────────────────────── */}
// // //       <style>{`
// // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // //         @keyframes float {
// // //           0%, 100% { transform: translate(0, 0); }
// // //           33%       { transform: translate(-18px, -18px); }
// // //           66%       { transform: translate(18px, 18px); }
// // //         }
// // //         @keyframes fadeInScale {
// // //           from { opacity: 0; transform: scale(0.92); }
// // //           to   { opacity: 1; transform: scale(1); }
// // //         }

// // //         /* ── Filter bar ─────────────────────────────────────────────────── */
// // //         .filter-bar {
// // //           position: sticky;
// // //           /* sits right below the fixed navbar */
// // //           top: ${navbarHeight}px;
// // //           z-index: 40;
// // //           background: ${N1};
// // //           border-bottom: 1px solid rgba(255,255,255,0.06);
// // //           /* prevents content bleeding through during scroll */
// // //           isolation: isolate;
// // //           /* full-width opaque backdrop so nothing shows through */
// // //           backdrop-filter: none;
// // //         }

// // //         /* ── Filter pill buttons ────────────────────────────────────────── */
// // //         .filter-btn {
// // //           padding: 8px 20px;
// // //           border-radius: 100px;
// // //           font-size: 13px;
// // //           font-weight: 600;
// // //           cursor: pointer;
// // //           border: 1px solid rgba(255,255,255,0.1);
// // //           white-space: nowrap;
// // //           transition: all 0.25s ease;
// // //           font-family: 'Poppins', sans-serif;
// // //         }
// // //         .filter-btn:hover {
// // //           border-color: ${T};
// // //           color: #fff;
// // //         }
// // //         .filter-btn.active {
// // //           background: linear-gradient(135deg, ${T}, ${P});
// // //           color: #000;
// // //           border-color: transparent;
// // //         }

// // //         /* ── Filter scroll container (mobile) ──────────────────────────── */
// // //         .filter-scroll {
// // //           display: flex;
// // //           gap: 10px;
// // //           overflow-x: auto;
// // //           padding: 4px 2px 6px;
// // //           /* hide scrollbar */
// // //           scrollbar-width: none;
// // //           -ms-overflow-style: none;
// // //         }
// // //         .filter-scroll::-webkit-scrollbar { display: none; }

// // //         /* ── Blog cards ─────────────────────────────────────────────────── */
// // //         .blog-card {
// // //           background: rgba(255,255,255,0.02);
// // //           border: 1px solid rgba(255,255,255,0.05);
// // //           border-radius: 20px;
// // //           overflow: hidden;
// // //           transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
// // //         }
// // //         @media (hover: hover) {
// // //           .blog-card:hover {
// // //             transform: translateY(-6px);
// // //           }
// // //         }

// // //         /* ── Read link ─────────────────────────────────────────────────── */
// // //         .read-link {
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 4px;
// // //           font-weight: 600;
// // //           font-size: 13px;
// // //           text-decoration: none;
// // //           transition: gap 0.25s ease;
// // //         }
// // //         @media (hover: hover) {
// // //           .read-link:hover { gap: 8px; }
// // //         }

// // //         /* ── Subscribe button ──────────────────────────────────────────── */
// // //         .sub-btn {
// // //           padding: ${isMobile ? "12px 24px" : "14px 32px"};
// // //           border-radius: 12px;
// // //           border: none;
// // //           font-weight: 700;
// // //           font-size: ${isMobile ? "14px" : "15px"};
// // //           cursor: pointer;
// // //           transition: opacity 0.3s ease;
// // //           white-space: nowrap;
// // //           font-family: 'Poppins', sans-serif;
// // //         }
// // //         .sub-btn:hover:not(:disabled) { opacity: 0.88; }

// // //         /* ── Load more button ──────────────────────────────────────────── */
// // //         .load-more {
// // //           padding: 12px 36px;
// // //           border-radius: 100px;
// // //           border: 1px solid ${T};
// // //           background: transparent;
// // //           color: ${T};
// // //           font-size: 14px;
// // //           font-weight: 600;
// // //           cursor: pointer;
// // //           transition: all 0.3s ease;
// // //           font-family: 'Poppins', sans-serif;
// // //         }
// // //         .load-more:hover {
// // //           background: ${T};
// // //           color: #000;
// // //         }

// // //         /* ── Responsive tweaks ─────────────────────────────────────────── */
// // //         @media (max-width: 640px) {
// // //           .hero-subtitle { font-size: 14px !important; }
// // //           .section-title { font-size: 22px !important; }
// // //           .card-title    { font-size: 16px !important; }
// // //         }
// // //       `}</style>

// // //       {/* ── MODULE 1 — HERO ──────────────────────────────────────────────── */}
// // //       <section style={{
// // //         padding: isMobile ? "48px 16px 56px" : isTablet ? "90px 28px 72px" : "80px 48px 88px",
// // //         background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
// // //         position: "relative",
// // //         overflow: "hidden",
// // //         textAlign: "center",
// // //       }}>
// // //         {!isMobile && (
// // //           <>
// // //             <div style={{
// // //               position: "absolute", width: "480px", height: "480px", borderRadius: "50%",
// // //               background: `radial-gradient(circle, ${T}15 0%, transparent 70%)`,
// // //               top: "-15%", right: "-4%", animation: "float 20s ease-in-out infinite", pointerEvents: "none",
// // //             }} />
// // //             <div style={{
// // //               position: "absolute", width: "280px", height: "280px", borderRadius: "50%",
// // //               background: `radial-gradient(circle, ${P}15 0%, transparent 70%)`,
// // //               bottom: "-10%", left: "-3%", animation: "float 15s ease-in-out infinite reverse", pointerEvents: "none",
// // //             }} />
// // //           </>
// // //         )}

// // //         <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 2 }}>
// // //           {/* Badge */}
// // //           <div style={{
// // //             display: "inline-flex", alignItems: "center", gap: "8px",
// // //             background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
// // //             borderRadius: "100px", padding: isMobile ? "6px 14px" : "8px 20px",
// // //             marginBottom: isMobile ? "16px" : "24px",
// // //           }}>
// // //             <span style={{ width: isMobile ? "6px" : "8px", height: isMobile ? "6px" : "8px", borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}` }} />
// // //             <span style={{ color: T, fontSize: isMobile ? "11px" : "13px", fontWeight: 600, letterSpacing: "0.1em" }}>INSIGHTS & RESOURCES</span>
// // //           </div>

// // //           <h1 style={{ fontSize: heroFontSize, fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? "14px" : "22px", color: "#fff" }}>
// // //             Insights on{" "}
// // //             <span style={{ background: `linear-gradient(135deg, ${T}, ${P})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// // //               Technology, Automation
// // //             </span>
// // //             <br />& Digital Growth
// // //           </h1>

// // //           <p className="hero-subtitle" style={{
// // //             color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "17px",
// // //             lineHeight: 1.8, maxWidth: "680px", margin: "0 auto",
// // //           }}>
// // //             Practical, experience-based articles on CRM, ERP, web development, automation, and digital strategy — written for business owners and operations leaders in Canada, the USA, and the UK. Backed by 10+ years of delivery expertise from Nakshatra Namaha Creations.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* ── MODULE 2 — FILTER BAR ────────────────────────────────────────── */}
// // //       <div className="filter-bar" ref={filterRef}>
// // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "16px 16px" : isTablet ? "20px 28px" : "20px 48px" }}>
// // //           {isMobile ? (
// // //             /* Mobile: horizontally scrollable pills */
// // //             <div className="filter-scroll">
// // //               {filters.map(f => (
// // //                 <button
// // //                   key={f}
// // //                   className={`filter-btn${activeFilter === f ? " active" : ""}`}
// // //                   onClick={() => setActiveFilter(f)}
// // //                   style={{
// // //                     background: activeFilter === f ? `linear-gradient(135deg, ${T}, ${P})` : "rgba(255,255,255,0.04)",
// // //                     color: activeFilter === f ? "#000" : "rgba(255,255,255,0.7)",
// // //                     flexShrink: 0,
// // //                   }}
// // //                 >
// // //                   {f}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           ) : (
// // //             /* Desktop/Tablet: wrapped pills */
// // //             <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
// // //               {filters.map(f => (
// // //                 <button
// // //                   key={f}
// // //                   className={`filter-btn${activeFilter === f ? " active" : ""}`}
// // //                   onClick={() => setActiveFilter(f)}
// // //                   style={{
// // //                     background: activeFilter === f ? `linear-gradient(135deg, ${T}, ${P})` : "rgba(255,255,255,0.04)",
// // //                     color: activeFilter === f ? "#000" : "rgba(255,255,255,0.7)",
// // //                   }}
// // //                 >
// // //                   {f}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* ── MODULE 3 — ARTICLES ──────────────────────────────────────────── */}
// // //       <section style={{ padding: sp, background: N2 }}>
// // //         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

// // //           {/* Section header */}
// // //           <div style={{
// // //             display: "flex", justifyContent: "space-between", alignItems: "center",
// // //             marginBottom: isMobile ? "20px" : "28px",
// // //             flexWrap: "wrap", gap: "12px",
// // //           }}>
// // //             <h2 className="section-title" style={{
// // //               fontSize: isMobile ? "22px" : isTablet ? "26px" : "30px",
// // //               fontWeight: 800, color: "#fff",
// // //             }}>
// // //               Featured <span style={{ color: T }}>Articles</span>
// // //             </h2>
// // //             <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
// // //               {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
// // //             </span>
// // //           </div>

// // //           {/* Featured (top 2) */}
// // //           {filteredPosts.filter(p => p.featured).length > 0 && (
// // //             <div style={{
// // //               display: "grid", gridTemplateColumns: featuredCols,
// // //               gap: isMobile ? "16px" : "22px", marginBottom: isMobile ? "32px" : "48px",
// // //             }}>
// // //               {filteredPosts.filter(p => p.featured).slice(0, 2).map(post => (
// // //                 <ArticleCard
// // //                   key={post.id}
// // //                   post={post}
// // //                   hovered={hoveredCard === post.id}
// // //                   onEnter={() => setHoveredCard(post.id)}
// // //                   onLeave={() => setHoveredCard(null)}
// // //                   isMobile={isMobile}
// // //                   featured
// // //                 />
// // //               ))}
// // //             </div>
// // //           )}

// // //           {/* All posts */}
// // //           <div style={{
// // //             display: "grid", gridTemplateColumns: allCols,
// // //             gap: isMobile ? "16px" : "20px",
// // //           }}>
// // //             {filteredPosts.map(post => (
// // //               <ArticleCard
// // //                 key={post.id}
// // //                 post={post}
// // //                 hovered={hoveredCard === post.id}
// // //                 onEnter={() => setHoveredCard(post.id)}
// // //                 onLeave={() => setHoveredCard(null)}
// // //                 isMobile={isMobile}
// // //               />
// // //             ))}
// // //           </div>

// // //           {filteredPosts.length > 6 && (
// // //             <div style={{ textAlign: "center", marginTop: "40px" }}>
// // //               <button className="load-more">Load More Articles</button>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* ── MODULE 4 — NEWSLETTER ────────────────────────────────────────── */}
// // //       <section style={{
// // //         padding: sp,
// // //         background: `linear-gradient(135deg, ${N1} 0%, ${N0} 100%)`,
// // //         position: "relative", overflow: "hidden",
// // //       }}>
// // //         {!isMobile && (
// // //           <div style={{
// // //             position: "absolute", width: "380px", height: "380px", borderRadius: "50%",
// // //             background: `radial-gradient(circle, ${T}10 0%, transparent 70%)`,
// // //             top: "-20%", right: "-4%", pointerEvents: "none",
// // //           }} />
// // //         )}

// // //         <div style={{
// // //           maxWidth: "560px", margin: "0 auto",
// // //           position: "relative", zIndex: 2, textAlign: "center",
// // //         }}>
// // //           <div style={{
// // //             display: "inline-flex", alignItems: "center", gap: "8px",
// // //             background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
// // //             borderRadius: "100px", padding: "7px 18px", marginBottom: "20px",
// // //           }}>
// // //             <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: T }} />
// // //             <span style={{ color: T, fontSize: "12px", fontWeight: 600 }}>STAY UPDATED</span>
// // //           </div>

// // //           <h2 style={{
// // //             fontSize: isMobile ? "22px" : isTablet ? "26px" : "30px",
// // //             fontWeight: 800, color: "#fff", marginBottom: "14px",
// // //           }}>
// // //             Get Insights Delivered to Your <span style={{ color: T }}>Inbox</span>
// // //           </h2>

// // //           <p style={{
// // //             color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "13px" : "15px",
// // //             lineHeight: 1.75, marginBottom: "28px",
// // //           }}>
// // //             Monthly articles on CRM, ERP, automation, and digital growth — for business leaders in Canada, USA, and UK.
// // //           </p>

// // //           {subscribed ? (
// // //             <div style={{
// // //               background: "rgba(0,201,167,0.08)", border: `1px solid ${T}`,
// // //               borderRadius: "16px", padding: "24px", animation: "fadeInScale 0.5s ease",
// // //             }}>
// // //               <div style={{ fontSize: "36px", marginBottom: "10px" }}>🎉</div>
// // //               <h3 style={{ color: T, fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>Subscribed Successfully!</h3>
// // //               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
// // //                 Thank you for joining. You'll receive insights monthly.
// // //               </p>
// // //             </div>
// // //           ) : (
// // //             <form
// // //               onSubmit={handleSubscribe}
// // //               style={{
// // //                 display: "flex",
// // //                 flexDirection: isMobile ? "column" : "row",
// // //                 gap: "10px",
// // //                 maxWidth: "480px",
// // //                 margin: "0 auto",
// // //               }}
// // //             >
// // //               <input
// // //                 type="email"
// // //                 required
// // //                 placeholder="Your email address"
// // //                 style={{ ...baseInput, flex: 1, border: `1px solid ${T}40` }}
// // //                 value={email}
// // //                 onChange={e => setEmail(e.target.value)}
// // //                 onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}30`; }}
// // //                 onBlur={e => { e.target.style.borderColor = `${T}40`; e.target.style.boxShadow = "none"; }}
// // //               />
// // //               <button
// // //                 type="submit"
// // //                 disabled={loading}
// // //                 className="sub-btn"
// // //                 style={{
// // //                   background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg, ${T}, ${P})`,
// // //                   color: "#000",
// // //                   cursor: loading ? "wait" : "pointer",
// // //                 }}
// // //               >
// // //                 {loading ? "Subscribing…" : "Subscribe →"}
// // //               </button>
// // //             </form>
// // //           )}

// // //           <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", marginTop: "16px" }}>
// // //             No spam. Unsubscribe anytime.
// // //           </p>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }

// // // // ─── Reusable Article Card ────────────────────────────────────────────────────
// // // function ArticleCard({
// // //   post, hovered, onEnter, onLeave, isMobile, featured = false,
// // // }: {
// // //   post: BlogPost;
// // //   hovered: boolean;
// // //   onEnter: () => void;
// // //   onLeave: () => void;
// // //   isMobile: boolean;
// // //   featured?: boolean;
// // // }) {
// // //   const N1 = "#030B18";
// // //   const P  = "#8B5CF6";

// // //   const imageHeight = featured ? (isMobile ? "150px" : "190px") : "130px";

// // //   return (
// // //     <div
// // //       className="blog-card"
// // //       onMouseEnter={onEnter}
// // //       onMouseLeave={onLeave}
// // //       style={{
// // //         borderColor: hovered ? post.categoryColor : "rgba(255,255,255,0.05)",
// // //         boxShadow: hovered ? `0 16px 36px ${post.categoryColor}22` : "none",
// // //       }}
// // //     >
// // //       {/* Colour-wash image area */}
// // //       <div style={{
// // //         height: imageHeight,
// // //         background: `linear-gradient(135deg, ${post.categoryColor}38, ${N1})`,
// // //         position: "relative",
// // //       }}>
// // //         <span style={{
// // //           position: "absolute",
// // //           ...(featured ? { bottom: "12px", left: "12px" } : { top: "10px", right: "10px" }),
// // //           background: "rgba(0,0,0,0.48)",
// // //           backdropFilter: "blur(6px)",
// // //           padding: "3px 10px",
// // //           borderRadius: "100px",
// // //           border: `1px solid ${post.categoryColor}`,
// // //           color: "#fff",
// // //           fontSize: "11px",
// // //           fontWeight: 600,
// // //         }}>
// // //           {featured ? post.category : post.readTime}
// // //         </span>
// // //       </div>

// // //       {/* Card body */}
// // //       <div style={{ padding: isMobile ? "16px" : "20px" }}>
// // //         <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
// // //           <span style={{
// // //             padding: "3px 10px",
// // //             background: `${post.categoryColor}1a`,
// // //             border: `1px solid ${post.categoryColor}40`,
// // //             borderRadius: "100px",
// // //             color: post.categoryColor,
// // //             fontSize: "11px", fontWeight: 600,
// // //           }}>{post.category}</span>
// // //           {featured && (
// // //             <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{post.readTime}</span>
// // //           )}
// // //         </div>

// // //         <h3 className="card-title" style={{
// // //           fontSize: isMobile ? "15px" : featured ? "19px" : "17px",
// // //           fontWeight: 700, color: "#fff",
// // //           marginBottom: "10px", lineHeight: 1.4,
// // //         }}>
// // //           {post.title}
// // //         </h3>

// // //         <p style={{
// // //           color: "rgba(255,255,255,0.58)",
// // //           fontSize: isMobile ? "12px" : "13px",
// // //           lineHeight: 1.65,
// // //           marginBottom: "16px",
// // //           display: "-webkit-box",
// // //           WebkitLineClamp: featured ? 4 : 3,
// // //           WebkitBoxOrient: "vertical" as const,
// // //           overflow: "hidden",
// // //         }}>
// // //           {post.excerpt}
// // //         </p>

// // //         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // //           {featured ? (
// // //             <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // //               <div style={{
// // //                 width: "30px", height: "30px", borderRadius: "50%",
// // //                 background: `linear-gradient(135deg, ${post.categoryColor}, ${P})`,
// // //                 display: "flex", alignItems: "center", justifyContent: "center",
// // //                 color: "#fff", fontSize: "13px", fontWeight: 700,
// // //               }}>
// // //                 {post.author.charAt(0)}
// // //               </div>
// // //               <div>
// // //                 <div style={{ color: "#fff", fontSize: "12px", fontWeight: 600 }}>{post.author}</div>
// // //                 <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "10px" }}>{post.date}</div>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "10px" }}>{post.date}</div>
// // //           )}

// // //           <a href={post.link} className="read-link" style={{ color: post.categoryColor }}>
// // //             Read <span>→</span>
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // "use client";

// // import { useState, useEffect, useRef, CSSProperties } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import Navbar from "../components/Navbar";

// // // ─── Design tokens ────────────────────────────────────────────────────────────
// // const T = "#00C9A7";
// // const TD = "#00a07a";
// // const P = "#8B5CF6";
// // const G = "#10B981";
// // const N0 = "#010812";
// // const N1 = "#030B18";
// // const N2 = "#061425";

// // // Types
// // interface BlogPost {
// //   id: number;
// //   category: string;
// //   categoryColor: string;
// //   title: string;
// //   readTime: string;
// //   excerpt: string;
// //   author: string;
// //   authorRole: string;
// //   date: string;
// //   image: string;
// //   featured: boolean;
// //   link: string;
// // }

// // export default function BlogPage() {
// //   const [windowWidth, setWindowWidth] = useState(0);
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [email, setEmail] = useState("");
// //   const [subscribed, setSubscribed] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
// //   const [navbarHeight, setNavbarHeight] = useState(70);
// //   const [visiblePosts, setVisiblePosts] = useState(6);
// //   const filterRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     if (typeof window === "undefined") return;
// //     setWindowWidth(window.innerWidth);

// //     const handleResize = () => setWindowWidth(window.innerWidth);
// //     window.addEventListener("resize", handleResize);

// //     // Detect actual navbar height
// //     const navbar = document.querySelector("nav") || document.querySelector("header");
// //     if (navbar) {
// //       setNavbarHeight(navbar.getBoundingClientRect().height);
// //     }

// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const isMobile = windowWidth > 0 && windowWidth <= 640;
// //   const isTablet = windowWidth > 640 && windowWidth <= 1024;
// //   const isDesktop = windowWidth > 1024;

// //   const filters = ["All", "CRM", "ERP", "Web", "Mobile", "Automation", "SEO", "Strategy", "Compliance"];

// //   const blogPosts: BlogPost[] = [
// //     {
// //       id: 1,
// //       category: "CRM",
// //       categoryColor: T,
// //       title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
// //       readTime: "8 min read",
// //       excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
// //       author: "Sarah Chen",
// //       authorRole: "CRM Solutions Architect",
// //       date: "Mar 15, 2025",
// //       image: "/blog1.jpg",
// //       featured: true,
// //       link: "/blog/crm-implementation-guide"
// //     },
// //     {
// //       id: 2,
// //       category: "Strategy",
// //       categoryColor: P,
// //       title: "ERP vs CRM: Which Does Your Business Need First?",
// //       readTime: "5 min read",
// //       excerpt: "A framework for deciding which system to build first — and exactly when you need both running together. Learn from real-world implementations across manufacturing and service industries.",
// //       author: "Michael Roberts",
// //       authorRole: "Senior Business Strategist",
// //       date: "Mar 10, 2025",
// //       image: "/blog2.png",
// //       featured: true,
// //       link: "/blog/erp-vs-crm"
// //     },
// //     {
// //       id: 3,
// //       category: "CRM",
// //       categoryColor: T,
// //       title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
// //       readTime: "7 min read",
// //       excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
// //       author: "David Kumar",
// //       authorRole: "Technical Director",
// //       date: "Mar 5, 2025",
// //       image: "/blog3.jpg",
// //       featured: true,
// //       link: "/blog/custom-crm-cost"
// //     },
// //     {
// //       id: 4,
// //       category: "Compliance",
// //       categoryColor: "#FF6B6B",
// //       title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
// //       readTime: "9 min read",
// //       excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK. Essential reading for compliance officers and business owners.",
// //       author: "Emma Watson",
// //       authorRole: "Data Protection Officer",
// //       date: "Feb 28, 2025",
// //       image: "/blog4.jpg",
// //       featured: true,
// //       link: "/blog/gdpr-pipeda-guide"
// //     },
// //     {
// //       id: 5,
// //       category: "Automation",
// //       categoryColor: G,
// //       title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
// //       readTime: "6 min read",
// //       excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot. Includes email templates and timing strategies.",
// //       author: "James Wilson",
// //       authorRole: "Marketing Automation Lead",
// //       date: "Feb 20, 2025",
// //       image: "/blog5.jpg",
// //       featured: true,
// //       link: "/blog/sales-automation"
// //     },
// //     {
// //       id: 6,
// //       category: "CRM",
// //       categoryColor: T,
// //       title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
// //       readTime: "7 min read",
// //       excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
// //       author: "Priya Patel",
// //       authorRole: "Digital Transformation Lead",
// //       date: "Feb 15, 2025",
// //       image: "/blog6.jpg",
// //       featured: true,
// //       link: "/blog/whatsapp-crm-integration"
// //     },
// //     {
// //       id: 7,
// //       category: "ERP",
// //       categoryColor: "#F59E0B",
// //       title: "ERP Implementation Pitfalls to Avoid in 2025",
// //       readTime: "10 min read",
// //       excerpt: "Lessons learned from 50+ ERP implementations across manufacturing, distribution, and services industries. Save time and money by avoiding these common mistakes.",
// //       author: "Robert Chen",
// //       authorRole: "ERP Practice Lead",
// //       date: "Feb 10, 2025",
// //       image: "/blog/erp-pitfalls.jpg",
// //       featured: false,
// //       link: "/blog/erp-pitfalls"
// //     },
// //     {
// //       id: 8,
// //       category: "Mobile",
// //       categoryColor: "#EC4899",
// //       title: "Mobile-First CRM: Why Your Field Teams Need a Native App",
// //       readTime: "6 min read",
// //       excerpt: "How mobile CRM apps are transforming field service, sales, and operations for businesses with remote teams. Real case studies from logistics and service companies.",
// //       author: "Lisa Zhang",
// //       authorRole: "Mobile Solutions Architect",
// //       date: "Feb 5, 2025",
// //       image: "/blog/mobile-crm.jpg",
// //       featured: false,
// //       link: "/blog/mobile-crm"
// //     },
// //     {
// //       id: 9,
// //       category: "SEO",
// //       categoryColor: "#3B82F6",
// //       title: "SEO for 2025: What's Changed and What Still Works",
// //       readTime: "8 min read",
// //       excerpt: "An updated look at SEO strategies that drive organic traffic for B2B and e-commerce businesses. Includes AI's impact on search and practical optimization tips.",
// //       author: "Mark Taylor",
// //       authorRole: "SEO Director",
// //       date: "Jan 28, 2025",
// //       image: "/blog/seo-2025.jpg",
// //       featured: false,
// //       link: "/blog/seo-2025"
// //     },
// //     {
// //       id: 10,
// //       category: "Web",
// //       categoryColor: "#6366F1",
// //       title: "Headless CMS vs Traditional CMS: Which is Right for Your Business?",
// //       readTime: "7 min read",
// //       excerpt: "A practical comparison to help you choose the right content management approach for your specific business needs, scalability requirements, and technical resources.",
// //       author: "Alex Thompson",
// //       authorRole: "Web Development Lead",
// //       date: "Jan 20, 2025",
// //       image: "/blog/headless-cms.jpg",
// //       featured: false,
// //       link: "/blog/headless-cms-comparison"
// //     },
// //     {
// //       id: 11,
// //       category: "Automation",
// //       categoryColor: G,
// //       title: "Workflow Automation: 5 Processes Every Business Should Automate First",
// //       readTime: "6 min read",
// //       excerpt: "Start your automation journey with these high-impact processes that save time, reduce errors, and improve customer satisfaction across your organization.",
// //       author: "Nina Patel",
// //       authorRole: "Automation Specialist",
// //       date: "Jan 15, 2025",
// //       image: "/blog/workflow-automation.jpg",
// //       featured: false,
// //       link: "/blog/workflow-automation"
// //     },
// //     {
// //       id: 12,
// //       category: "Strategy",
// //       categoryColor: P,
// //       title: "Digital Transformation Roadmap: A 12-Month Plan for Mid-Sized Businesses",
// //       readTime: "12 min read",
// //       excerpt: "A phased approach to digital transformation that minimizes disruption while maximizing ROI. Includes timelines, milestones, and success metrics for each phase.",
// //       author: "Michael Roberts",
// //       authorRole: "Senior Business Strategist",
// //       date: "Jan 8, 2025",
// //       image: "/blog/digital-transformation.jpg",
// //       featured: false,
// //       link: "/blog/digital-transformation-roadmap"
// //     }
// //   ];

// //   const filteredPosts = activeFilter === "All"
// //     ? blogPosts
// //     : blogPosts.filter(post => post.category === activeFilter);

// //   const featuredPosts = filteredPosts.filter(p => p.featured);
// //   const regularPosts = filteredPosts.filter(p => !p.featured);
// //   const displayedRegularPosts = regularPosts.slice(0, visiblePosts);
// //   const hasMorePosts = regularPosts.length > visiblePosts;

// //   const handleSubscribe = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       setSubscribed(true);
// //       setEmail("");
// //     }, 1200);
// //   };

// //   const loadMore = () => {
// //     setVisiblePosts(prev => prev + 3);
// //   };

// //   // ─── Responsive helpers ───────────────────────────────────────────────────
// //   const sp = isMobile ? "48px 16px" : isTablet ? "72px 28px" : "96px 48px";

// //   const heroFontSize = isMobile
// //     ? "clamp(28px, 7vw, 36px)"
// //     : isTablet
// //     ? "clamp(36px, 5vw, 46px)"
// //     : "clamp(44px, 4vw, 60px)";

// //   const featuredCols = isMobile ? "1fr" : "repeat(2, 1fr)";
// //   const allCols = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";

// //   const baseInput: CSSProperties = {
// //     width: "100%",
// //     padding: isMobile ? "12px 14px" : "14px 16px",
// //     borderRadius: "12px",
// //     background: "rgba(255,255,255,0.05)",
// //     border: "1px solid rgba(255,255,255,0.1)",
// //     color: "#fff",
// //     fontSize: isMobile ? "14px" : "15px",
// //     fontFamily: "'Poppins', sans-serif",
// //     outline: "none",
// //     transition: "all 0.3s ease",
// //     boxSizing: "border-box" as const,
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <style>{`
// //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //         @keyframes float {
// //           0%, 100% { transform: translate(0, 0); }
// //           33%       { transform: translate(-18px, -18px); }
// //           66%       { transform: translate(18px, 18px); }
// //         }
// //         @keyframes fadeInScale {
// //           from { opacity: 0; transform: scale(0.92); }
// //           to   { opacity: 1; transform: scale(1); }
// //         }
// //         @keyframes pulse {
// //           0%, 100% { opacity: 0.6; }
// //           50% { opacity: 1; }
// //         }

// //         .filter-bar {
// //           position: sticky;
// //           top: ${navbarHeight}px;
// //           z-index: 40;
// //           background: ${N1};
// //           border-bottom: 1px solid rgba(255,255,255,0.06);
// //           isolation: isolate;
// //         }

// //         .filter-btn {
// //           padding: 8px 20px;
// //           border-radius: 100px;
// //           font-size: 13px;
// //           font-weight: 600;
// //           cursor: pointer;
// //           border: 1px solid rgba(255,255,255,0.1);
// //           white-space: nowrap;
// //           transition: all 0.25s ease;
// //           font-family: 'Poppins', sans-serif;
// //         }
// //         .filter-btn:hover {
// //           border-color: ${T};
// //           color: #fff;
// //         }
// //         .filter-btn.active {
// //           background: linear-gradient(135deg, ${T}, ${P});
// //           color: #000;
// //           border-color: transparent;
// //         }

// //         .filter-scroll {
// //           display: flex;
// //           gap: 10px;
// //           overflow-x: auto;
// //           padding: 4px 2px 6px;
// //           scrollbar-width: none;
// //           -ms-overflow-style: none;
// //         }
// //         .filter-scroll::-webkit-scrollbar { display: none; }

// //         .blog-card {
// //           background: rgba(255,255,255,0.02);
// //           border: 1px solid rgba(255,255,255,0.05);
// //           border-radius: 20px;
// //           overflow: hidden;
// //           transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
// //           height: 100%;
// //           display: flex;
// //           flex-direction: column;
// //         }
// //         @media (hover: hover) {
// //           .blog-card:hover {
// //             transform: translateY(-6px);
// //           }
// //         }

// //         .read-link {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 4px;
// //           font-weight: 600;
// //           font-size: 13px;
// //           text-decoration: none;
// //           transition: gap 0.25s ease;
// //         }
// //         @media (hover: hover) {
// //           .read-link:hover { gap: 8px; }
// //         }

// //         .sub-btn {
// //           padding: ${isMobile ? "12px 24px" : "14px 32px"};
// //           border-radius: 12px;
// //           border: none;
// //           font-weight: 700;
// //           font-size: ${isMobile ? "14px" : "15px"};
// //           cursor: pointer;
// //           transition: opacity 0.3s ease;
// //           white-space: nowrap;
// //           font-family: 'Poppins', sans-serif;
// //         }
// //         .sub-btn:hover:not(:disabled) { opacity: 0.88; }

// //         .load-more {
// //           padding: 12px 36px;
// //           border-radius: 100px;
// //           border: 1px solid ${T};
// //           background: transparent;
// //           color: ${T};
// //           font-size: 14px;
// //           font-weight: 600;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           font-family: 'Poppins', sans-serif;
// //         }
// //         .load-more:hover {
// //           background: ${T};
// //           color: #000;
// //         }

// //         .image-placeholder {
// //           background: linear-gradient(135deg, ${T}20, ${P}20);
// //           animation: pulse 2s infinite;
// //         }

// //         @media (max-width: 640px) {
// //           .hero-subtitle { font-size: 14px !important; }
// //           .section-title { font-size: 22px !important; }
// //           .card-title    { font-size: 16px !important; }
// //         }
// //       `}</style>

// //       {/* MODULE 1 — HERO */}
// //       <section style={{
// //         padding: isMobile ? "48px 16px 56px" : isTablet ? "90px 28px 72px" : "80px 48px 88px",
// //         background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
// //         position: "relative",
// //         overflow: "hidden",
// //         textAlign: "center",
// //       }}>
// //         {!isMobile && (
// //           <>
// //             <div style={{
// //               position: "absolute", width: "480px", height: "480px", borderRadius: "50%",
// //               background: `radial-gradient(circle, ${T}15 0%, transparent 70%)`,
// //               top: "-15%", right: "-4%", animation: "float 20s ease-in-out infinite", pointerEvents: "none",
// //             }} />
// //             <div style={{
// //               position: "absolute", width: "280px", height: "280px", borderRadius: "50%",
// //               background: `radial-gradient(circle, ${P}15 0%, transparent 70%)`,
// //               bottom: "-10%", left: "-3%", animation: "float 15s ease-in-out infinite reverse", pointerEvents: "none",
// //             }} />
// //           </>
// //         )}

// //         <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 2 }}>
// //           {/* Badge */}
// //           <div style={{
// //             display: "inline-flex", alignItems: "center", gap: "8px",
// //             background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
// //             borderRadius: "100px", padding: isMobile ? "6px 14px" : "8px 20px",
// //             marginBottom: isMobile ? "16px" : "24px",
// //           }}>
// //             <span style={{ width: isMobile ? "6px" : "8px", height: isMobile ? "6px" : "8px", borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}` }} />
// //             <span style={{ color: T, fontSize: isMobile ? "11px" : "13px", fontWeight: 600, letterSpacing: "0.1em" }}>INSIGHTS & RESOURCES</span>
// //           </div>

// //           <h1 style={{ fontSize: heroFontSize, fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? "14px" : "22px", color: "#fff" }}>
// //             Insights on{" "}
// //             <span style={{ background: `linear-gradient(135deg, ${T}, ${P})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// //               Technology, Automation
// //             </span>
// //             <br />& Digital Growth
// //           </h1>

// //           <p className="hero-subtitle" style={{
// //             color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "17px",
// //             lineHeight: 1.8, maxWidth: "680px", margin: "0 auto",
// //           }}>
// //             Practical, experience-based articles on CRM, ERP, web development, automation, and digital strategy — written for business owners
// //             and operations leaders in Canada, the USA, and the UK. Backed by 10+ years of delivery expertise from Nakshatra Namaha Creations.
// //           </p>
// //         </div>
// //       </section>

// //       {/* MODULE 2 — FILTER BAR */}
// //       <div className="filter-bar" ref={filterRef}>
// //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "16px 16px" : isTablet ? "20px 28px" : "20px 48px" }}>
// //           {isMobile ? (
// //             <div className="filter-scroll">
// //               {filters.map(f => (
// //                 <button
// //                   key={f}
// //                   className={`filter-btn${activeFilter === f ? " active" : ""}`}
// //                   onClick={() => {
// //                     setActiveFilter(f);
// //                     setVisiblePosts(6);
// //                   }}
// //                   style={{
// //                     background: activeFilter === f ? `linear-gradient(135deg, ${T}, ${P})` : "rgba(255,255,255,0.04)",
// //                     color: activeFilter === f ? "#000" : "rgba(255,255,255,0.7)",
// //                     flexShrink: 0,
// //                   }}
// //                 >
// //                   {f}
// //                 </button>
// //               ))}
// //             </div>
// //           ) : (
// //             <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
// //               {filters.map(f => (
// //                 <button
// //                   key={f}
// //                   className={`filter-btn${activeFilter === f ? " active" : ""}`}
// //                   onClick={() => {
// //                     setActiveFilter(f);
// //                     setVisiblePosts(6);
// //                   }}
// //                   style={{
// //                     background: activeFilter === f ? `linear-gradient(135deg, ${T}, ${P})` : "rgba(255,255,255,0.04)",
// //                     color: activeFilter === f ? "#000" : "rgba(255,255,255,0.7)",
// //                   }}
// //                 >
// //                   {f}
// //                 </button>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* MODULE 3 — ARTICLES */}
// //       <section style={{ padding: sp, background: N2 }}>
// //         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

// //           {/* Section header */}
// //           <div style={{
// //             display: "flex", justifyContent: "space-between", alignItems: "center",
// //             marginBottom: isMobile ? "20px" : "28px",
// //             flexWrap: "wrap", gap: "12px",
// //           }}>
// //             <h2 className="section-title" style={{
// //               fontSize: isMobile ? "22px" : isTablet ? "26px" : "30px",
// //               fontWeight: 800, color: "#fff",
// //             }}>
// //               Featured <span style={{ color: T }}>Articles</span>
// //             </h2>
// //             <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
// //               {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
// //             </span>
// //           </div>

// //           {/* Featured Posts */}
// //           {featuredPosts.length > 0 && (
// //             <div style={{
// //               display: "grid", gridTemplateColumns: featuredCols,
// //               gap: isMobile ? "16px" : "22px", marginBottom: isMobile ? "32px" : "48px",
// //             }}>
// //               {featuredPosts.slice(0, 2).map(post => (
// //                 <ArticleCard
// //                   key={post.id}
// //                   post={post}
// //                   hovered={hoveredCard === post.id}
// //                   onEnter={() => setHoveredCard(post.id)}
// //                   onLeave={() => setHoveredCard(null)}
// //                   isMobile={isMobile}
// //                   featured
// //                 />
// //               ))}
// //             </div>
// //           )}

// //           {/* Regular Posts */}
// //           {displayedRegularPosts.length > 0 && (
// //             <>
// //               <h3 style={{
// //                 fontSize: isMobile ? "18px" : "20px",
// //                 fontWeight: 700, color: "#fff", marginBottom: "20px",
// //               }}>
// //                 Latest Articles
// //               </h3>
// //               <div style={{
// //                 display: "grid", gridTemplateColumns: allCols,
// //                 gap: isMobile ? "16px" : "20px",
// //               }}>
// //                 {displayedRegularPosts.map(post => (
// //                   <ArticleCard
// //                     key={post.id}
// //                     post={post}
// //                     hovered={hoveredCard === post.id}
// //                     onEnter={() => setHoveredCard(post.id)}
// //                     onLeave={() => setHoveredCard(null)}
// //                     isMobile={isMobile}
// //                   />
// //                 ))}
// //               </div>
// //             </>
// //           )}

// //           {/* Load More */}
// //           {hasMorePosts && (
// //             <div style={{ textAlign: "center", marginTop: "40px" }}>
// //               <button className="load-more" onClick={loadMore}>
// //                 Load More Articles
// //               </button>
// //             </div>
// //           )}

// //           {/* No results */}
// //           {filteredPosts.length === 0 && (
// //             <div style={{
// //               textAlign: "center", padding: "60px 20px",
// //               background: "rgba(255,255,255,0.02)", borderRadius: "20px",
// //             }}>
// //               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px" }}>
// //                 No articles found in this category. Check back soon for new content!
// //               </p>
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* MODULE 4 — NEWSLETTER */}
// //       <section style={{
// //         padding: sp,
// //         background: `linear-gradient(135deg, ${N1} 0%, ${N0} 100%)`,
// //         position: "relative", overflow: "hidden",
// //       }}>
// //         {!isMobile && (
// //           <div style={{
// //             position: "absolute", width: "380px", height: "380px", borderRadius: "50%",
// //             background: `radial-gradient(circle, ${T}10 0%, transparent 70%)`,
// //             top: "-20%", right: "-4%", pointerEvents: "none",
// //           }} />
// //         )}

// //         <div style={{
// //           maxWidth: "560px", margin: "0 auto",
// //           position: "relative", zIndex: 2, textAlign: "center",
// //         }}>
// //           <div style={{
// //             display: "inline-flex", alignItems: "center", gap: "8px",
// //             background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
// //             borderRadius: "100px", padding: "7px 18px", marginBottom: "20px",
// //           }}>
// //             <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: T }} />
// //             <span style={{ color: T, fontSize: "12px", fontWeight: 600 }}>STAY UPDATED</span>
// //           </div>

// //           <h2 style={{
// //             fontSize: isMobile ? "22px" : isTablet ? "26px" : "30px",
// //             fontWeight: 800, color: "#fff", marginBottom: "14px",
// //           }}>
// //             Get Insights Delivered to Your <span style={{ color: T }}>Inbox</span>
// //           </h2>

// //           <p style={{
// //             color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "13px" : "15px",
// //             lineHeight: 1.75, marginBottom: "28px",
// //           }}>
// //             Monthly articles on CRM, ERP, automation, and digital growth — for business leaders in Canada, USA, and UK.
// //           </p>

// //           {subscribed ? (
// //             <div style={{
// //               background: "rgba(0,201,167,0.08)", border: `1px solid ${T}`,
// //               borderRadius: "16px", padding: "24px", animation: "fadeInScale 0.5s ease",
// //             }}>
// //               <div style={{ fontSize: "36px", marginBottom: "10px" }}>🎉</div>
// //               <h3 style={{ color: T, fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>Subscribed Successfully!</h3>
// //               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
// //                 Thank you for joining. You'll receive insights monthly.
// //               </p>
// //             </div>
// //           ) : (
// //             <form
// //               onSubmit={handleSubscribe}
// //               style={{
// //                 display: "flex",
// //                 flexDirection: isMobile ? "column" : "row",
// //                 gap: "10px",
// //                 maxWidth: "480px",
// //                 margin: "0 auto",
// //               }}
// //             >
// //               <input
// //                 type="email"
// //                 required
// //                 placeholder="Your email address"
// //                 style={{ ...baseInput, flex: 1, border: `1px solid ${T}40` }}
// //                 value={email}
// //                 onChange={e => setEmail(e.target.value)}
// //                 onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}30`; }}
// //                 onBlur={e => { e.target.style.borderColor = `${T}40`; e.target.style.boxShadow = "none"; }}
// //               />
// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 className="sub-btn"
// //                 style={{
// //                   background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg, ${T}, ${P})`,
// //                   color: "#000",
// //                   cursor: loading ? "wait" : "pointer",
// //                 }}
// //               >
// //                 {loading ? "Subscribing…" : "Subscribe →"}
// //               </button>
// //             </form>
// //           )}

// //           <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", marginTop: "16px" }}>
// //             No spam. Unsubscribe anytime.
// //           </p>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // // ─── Reusable Article Card ────────────────────────────────────────────────────
// // function ArticleCard({
// //   post, hovered, onEnter, onLeave, isMobile, featured = false,
// // }: {
// //   post: BlogPost;
// //   hovered: boolean;
// //   onEnter: () => void;
// //   onLeave: () => void;
// //   isMobile: boolean;
// //   featured?: boolean;
// // }) {
// //   const N1 = "#030B18";
// //   const P  = "#8B5CF6";

// //   const imageHeight = featured ? (isMobile ? "180px" : "220px") : "160px";

// //   return (
// //     <Link href={post.link} style={{ textDecoration: "none" }}>
// //       <div
// //         className="blog-card"
// //         onMouseEnter={onEnter}
// //         onMouseLeave={onLeave}
// //         style={{
// //           borderColor: hovered ? post.categoryColor : "rgba(255,255,255,0.05)",
// //           boxShadow: hovered ? `0 16px 36px ${post.categoryColor}22` : "none",
// //         }}
// //       >
// //         {/* Image area with gradient overlay */}
// //         <div style={{
// //           height: imageHeight,
// //           background: `linear-gradient(135deg, ${post.categoryColor}30, ${N1})`,
// //           position: "relative",
// //           overflow: "hidden",
// //         }}>
// //           <div style={{
// //             position: "absolute",
// //             inset: 0,
// //             background: `url('${post.image}') center/cover`,
// //             opacity: 0.9,
// //             transition: "transform 0.5s ease",
// //             transform: hovered ? "scale(1.05)" : "scale(1)",
// //           }} />
// //           <div style={{
// //             position: "absolute",
// //             inset: 0,
// //             background: `linear-gradient(to top, ${N1}80, transparent)`,
// //           }} />
          
// //           {/* Category or read time badge */}
// //           <span style={{
// //             position: "absolute",
// //             ...(featured ? { bottom: "12px", left: "12px" } : { top: "12px", right: "12px" }),
// //             background: "rgba(0,0,0,0.6)",
// //             backdropFilter: "blur(8px)",
// //             padding: "4px 12px",
// //             borderRadius: "100px",
// //             border: `1px solid ${post.categoryColor}`,
// //             color: "#fff",
// //             fontSize: "11px",
// //             fontWeight: 600,
// //             zIndex: 2,
// //           }}>
// //             {featured ? post.category : post.readTime}
// //           </span>
// //         </div>

// //         {/* Card body */}
// //         <div style={{ padding: isMobile ? "16px" : "20px", flex: 1, display: "flex", flexDirection: "column" }}>
// //           <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
// //             <span style={{
// //               padding: "4px 12px",
// //               background: `${post.categoryColor}1a`,
// //               border: `1px solid ${post.categoryColor}40`,
// //               borderRadius: "100px",
// //               color: post.categoryColor,
// //               fontSize: "11px", fontWeight: 600,
// //             }}>{post.category}</span>
// //             {featured && (
// //               <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{post.readTime}</span>
// //             )}
// //           </div>

// //           <h3 className="card-title" style={{
// //             fontSize: isMobile ? "16px" : featured ? "20px" : "18px",
// //             fontWeight: 700, color: "#fff",
// //             marginBottom: "12px", lineHeight: 1.4,
// //           }}>
// //             {post.title}
// //           </h3>

// //           <p style={{
// //             color: "rgba(255,255,255,0.6)",
// //             fontSize: isMobile ? "13px" : "14px",
// //             lineHeight: 1.6,
// //             marginBottom: "20px",
// //             display: "-webkit-box",
// //             WebkitLineClamp: featured ? 4 : 3,
// //             WebkitBoxOrient: "vertical" as const,
// //             overflow: "hidden",
// //             flex: 1,
// //           }}>
// //             {post.excerpt}
// //           </p>

// //           <div style={{ 
// //             display: "flex", 
// //             justifyContent: "space-between", 
// //             alignItems: "center",
// //             marginTop: "auto",
// //             borderTop: "1px solid rgba(255,255,255,0.05)",
// //             paddingTop: "16px"
// //           }}>
// //             {featured ? (
// //               <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// //                 <div style={{
// //                   width: "36px", height: "36px", borderRadius: "50%",
// //                   background: `linear-gradient(135deg, ${post.categoryColor}, ${P})`,
// //                   display: "flex", alignItems: "center", justifyContent: "center",
// //                   color: "#fff", fontSize: "14px", fontWeight: 700,
// //                 }}>
// //                   {post.author.charAt(0)}
// //                 </div>
// //                 <div>
// //                   <div style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>{post.author}</div>
// //                   <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{post.authorRole} • {post.date}</div>
// //                 </div>
// //               </div>
// //             ) : (
// //               <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>
// //                 {post.author} • {post.date}
// //               </div>
// //             )}

// //             <span className="read-link" style={{ color: post.categoryColor }}>
// //               Read <span style={{ fontSize: "16px" }}>→</span>
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </Link>
// //   );
// // }




// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Navbar from "../components/Navbar";

// const T  = "#00C9A7";
// const P  = "#8B5CF6";
// const G  = "#10B981";
// const N0 = "#010812";
// const N1 = "#030B18";
// const N2 = "#061425";

// interface BlogPost {
//   id: number;
//   category: string;
//   color: string;
//   title: string;
//   readTime: string;
//   excerpt: string;
//   author: string;
//   authorRole: string;
//   date: string;
//   image: string;
//   featured: boolean;
//   link: string;
// }

// const POSTS: BlogPost[] = [
//   {
//     id: 1, category: "CRM", color: T,
//     title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
//     readTime: "8 min read",
//     excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
//     author: "Sarah Chen", authorRole: "CRM Solutions Architect", date: "Mar 15, 2025",
//     image: "/blog1.jpg", featured: true, link: "/blog/crm-implementation-guide",
//   },
//   {
//     id: 2, category: "Strategy", color: P,
//     title: "ERP vs CRM: Which Does Your Business Need First?",
//     readTime: "5 min read",
//     excerpt: "A framework for deciding which system to build first — and exactly when you need both running together. Learn from real-world implementations across manufacturing and service industries.",
//     author: "Michael Roberts", authorRole: "Senior Business Strategist", date: "Mar 10, 2025",
//     image: "/blog2.png", featured: true, link: "/blog/erp-vs-crm",
//   },
//   {
//     id: 3, category: "CRM", color: T,
//     title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
//     readTime: "7 min read",
//     excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
//     author: "David Kumar", authorRole: "Technical Director", date: "Mar 5, 2025",
//     image: "/blog3.jpg", featured: true, link: "/blog/custom-crm-cost",
//   },
//   {
//     id: 4, category: "Compliance", color: "#FF6B6B",
//     title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
//     readTime: "9 min read",
//     excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",
//     author: "Emma Watson", authorRole: "Data Protection Officer", date: "Feb 28, 2025",
//     image: "/blog4.jpg", featured: true, link: "/blog/gdpr-pipeda-guide",
//   },
//   {
//     id: 5, category: "Automation", color: G,
//     title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
//     readTime: "6 min read",
//     excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",
//     author: "James Wilson", authorRole: "Marketing Automation Lead", date: "Feb 20, 2025",
//     image: "/blog5.jpg", featured: true, link: "/blog/sales-automation",
//   },
//   {
//     id: 6, category: "CRM", color: T,
//     title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
//     readTime: "7 min read",
//     excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
//     author: "Priya Patel", authorRole: "Digital Transformation Lead", date: "Feb 15, 2025",
//     image: "/blog6.jpg", featured: true, link: "/blog/whatsapp-crm-integration",
//   },
//   {
//     id: 7, category: "ERP", color: "#F59E0B",
//     title: "ERP Implementation Pitfalls to Avoid in 2025",
//     readTime: "10 min read",
//     excerpt: "Lessons learned from 50+ ERP implementations across manufacturing, distribution, and services industries.",
//     author: "Robert Chen", authorRole: "ERP Practice Lead", date: "Feb 10, 2025",
//     image: "/blog1.jpg", featured: false, link: "/blog/erp-pitfalls",
//   },
//   {
//     id: 8, category: "Mobile", color: "#EC4899",
//     title: "Mobile-First CRM: Why Your Field Teams Need a Native App",
//     readTime: "6 min read",
//     excerpt: "How mobile CRM apps are transforming field service, sales, and operations for businesses with remote teams.",
//     author: "Lisa Zhang", authorRole: "Mobile Solutions Architect", date: "Feb 5, 2025",
//     image: "/blog2.png", featured: false, link: "/blog/mobile-crm",
//   },
//   {
//     id: 9, category: "SEO", color: "#3B82F6",
//     title: "SEO for 2025: What's Changed and What Still Works",
//     readTime: "8 min read",
//     excerpt: "An updated look at SEO strategies that drive organic traffic for B2B and e-commerce businesses.",
//     author: "Mark Taylor", authorRole: "SEO Director", date: "Jan 28, 2025",
//     image: "/blog3.jpg", featured: false, link: "/blog/seo-2025",
//   },
//   {
//     id: 10, category: "Web", color: "#6366F1",
//     title: "Headless CMS vs Traditional CMS: Which is Right for Your Business?",
//     readTime: "7 min read",
//     excerpt: "A practical comparison to help you choose the right content management approach for your needs.",
//     author: "Alex Thompson", authorRole: "Web Development Lead", date: "Jan 20, 2025",
//     image: "/blog4.jpg", featured: false, link: "/blog/headless-cms-comparison",
//   },
//   {
//     id: 11, category: "Automation", color: G,
//     title: "Workflow Automation: 5 Processes Every Business Should Automate First",
//     readTime: "6 min read",
//     excerpt: "Start your automation journey with these high-impact processes that save time and reduce errors.",
//     author: "Nina Patel", authorRole: "Automation Specialist", date: "Jan 15, 2025",
//     image: "/blog5.jpg", featured: false, link: "/blog/workflow-automation",
//   },
//   {
//     id: 12, category: "Strategy", color: P,
//     title: "Digital Transformation Roadmap: A 12-Month Plan for Mid-Sized Businesses",
//     readTime: "12 min read",
//     excerpt: "A phased approach to digital transformation that minimises disruption while maximising ROI.",
//     author: "Michael Roberts", authorRole: "Senior Business Strategist", date: "Jan 8, 2025",
//     image: "/blog6.jpg", featured: false, link: "/blog/digital-transformation-roadmap",
//   },
// ];

// const FILTERS = ["All","CRM","ERP","Web","Mobile","Automation","SEO","Strategy","Compliance"];

// export default function BlogPage() {
//   const [active, setActive]     = useState("All");
//   const [email, setEmail]       = useState("");
//   const [subscribed, setSub]    = useState(false);
//   const [loading, setLoading]   = useState(false);
//   const [hovered, setHovered]   = useState<number|null>(null);
//   const [showMore, setShowMore] = useState(6);

//   const filtered = active === "All" ? POSTS : POSTS.filter(p => p.category === active);
//   const featured = filtered.filter(p => p.featured);
//   const regular  = filtered.filter(p => !p.featured);
//   const shown    = regular.slice(0, showMore);
//   const hasMore  = regular.length > showMore;

//   const handleSub = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => { setLoading(false); setSub(true); setEmail(""); }, 1400);
//   };

//   return (
//     <>
//       <Navbar />

//       <style>{`
//         /* ─── Reset ─────────────────────────────────────── */
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         /* ─── Animations ────────────────────────────────── */
//         @keyframes floatA  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-22px,-22px)} }
//         @keyframes floatB  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(18px,18px)} }
//         @keyframes fadeUp  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes popIn   { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }
//         @keyframes pulse   { 0%,100%{transform:scale(1)} 50%{transform:scale(1.5)} }

//         /* ─── HERO ──────────────────────────────────────── */
//         .bh { padding:60px 20px 70px; text-align:center; position:relative; overflow:hidden;
//                background:linear-gradient(135deg,${N0} 0%,#041628 55%,${N0} 100%); }
//         .bh-g1 { position:absolute;width:480px;height:480px;border-radius:50%;pointer-events:none;
//                   background:radial-gradient(circle,${T}14 0%,transparent 70%);
//                   top:-18%;right:-5%;animation:floatA 20s ease-in-out infinite; }
//         .bh-g2 { position:absolute;width:300px;height:300px;border-radius:50%;pointer-events:none;
//                   background:radial-gradient(circle,${P}12 0%,transparent 70%);
//                   bottom:-12%;left:-4%;animation:floatB 16s ease-in-out infinite; }
//         .bh-grid { position:absolute;inset:0;pointer-events:none;
//                    background-image:linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
//                                     linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px);
//                    background-size:60px 60px; }
//         .bh-in { max-width:860px;margin:0 auto;position:relative;z-index:2;animation:fadeUp .7s ease both; }
//         .bh-badge { display:inline-flex;align-items:center;gap:8px;margin-bottom:24px;
//                     background:rgba(0,201,167,.08);border:1px solid rgba(0,201,167,.25);
//                     border-radius:100px;padding:7px 20px; }
//         .bh-dot   { width:8px;height:8px;border-radius:50%;background:${T};display:inline-block;
//                     box-shadow:0 0 10px ${T};animation:pulse 2s ease-in-out infinite; }
//         .bh-bl    { color:${T};font-size:11px;font-weight:700;letter-spacing:.12em; }
//         .bh-h1    { font-size:clamp(28px,7vw,58px);font-weight:900;line-height:1.12;color:#fff;
//                     letter-spacing:-.02em;margin-bottom:20px; }
//         .bh-grad  { background:linear-gradient(135deg,${T},${P});
//                     -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
//         .bh-sub   { color:rgba(255,255,255,.58);font-size:clamp(14px,2vw,17px);
//                     line-height:1.82;max-width:700px;margin:0 auto; }
//         .bh-stats { display:flex;justify-content:center;gap:clamp(20px,5vw,40px);
//                     margin-top:40px;flex-wrap:wrap; }
//         .bh-sn { font-size:26px;font-weight:800;color:${T}; }
//         .bh-sl { font-size:12px;color:rgba(255,255,255,.4);margin-top:2px; }

//         /* ─── FILTER BAR ────────────────────────────────────────────────────────
//            THE FIX:
//            • .bfbar  → NO overflow property at all (default is visible)
//            • .bflist → overflow-x:auto  +  overflow-y:visible
//                        This is the ONLY element that scrolls.
//            • .bfbtn  → flex-shrink:0  so buttons never collapse or hide
//            Any ancestor with overflow:hidden would break this, so we
//            explicitly set overflow:visible on .bfbar.
//         ──────────────────────────────────────────────────────────────────────── */
//         .bfbar {
//           position: sticky;
//           top: 0;
//           z-index: 40;
//           background: ${N1};
//           border-bottom: 1px solid rgba(255,255,255,.07);
//           /* CRITICAL: must NOT be overflow:hidden */
//           overflow: visible;
//         }
//         .bflist {
//           display: flex;
//           flex-wrap: nowrap;           /* single row always */
//           align-items: center;
//           gap: 8px;
//           overflow-x: auto;            /* scroll horizontally */
//           overflow-y: visible;
//           -webkit-overflow-scrolling: touch;
//           scrollbar-width: none;
//           -ms-overflow-style: none;
//           padding: 12px 16px 14px 16px;
//           /* No max-width here — let it be full width so scroll works */
//         }
//         .bflist::-webkit-scrollbar { display: none; }

//         /* On wide screens: wrap & center instead of scroll */
//         @media (min-width: 900px) {
//           .bflist {
//             flex-wrap: wrap;
//             overflow-x: visible;
//             overflow-y: visible;
//             justify-content: center;
//             max-width: 1200px;
//             margin: 0 auto;
//             padding: 16px 48px 18px;
//             gap: 10px;
//           }
//         }

//         .bfbtn {
//           /* CRITICAL: flex-shrink:0 means button width is NEVER reduced */
//           flex-shrink: 0;
//           white-space: nowrap;
//           display: inline-flex;
//           align-items: center;
//           padding: 8px 18px;
//           border-radius: 100px;
//           font-size: 13px;
//           font-weight: 600;
//           font-family: 'Poppins', sans-serif;
//           cursor: pointer;
//           border: 1px solid rgba(255,255,255,.12);
//           background: rgba(255,255,255,.04);
//           color: rgba(255,255,255,.65);
//           transition: border-color .25s, color .25s, background .25s;
//         }
//         .bfbtn:hover  { border-color:${T}; color:#fff; }
//         .bfbtn.active {
//           background: linear-gradient(135deg,${T},${P}) !important;
//           color: #000 !important;
//           border-color: transparent !important;
//           font-weight: 700;
//         }

//         /* ─── ARTICLES ──────────────────────────────────── */
//         .ba { padding:clamp(40px,6vw,80px) clamp(16px,4vw,48px); background:${N2}; }
//         .ba-in { max-width:1200px; margin:0 auto; }
//         .ba-hd { display:flex;justify-content:space-between;align-items:flex-end;
//                  flex-wrap:wrap;gap:12px;margin-bottom:clamp(20px,3vw,32px); }
//         .ba-title { font-size:clamp(22px,4vw,30px);font-weight:800;color:#fff;line-height:1.2; }
//         .ba-count { background:rgba(0,201,167,.1);border:1px solid rgba(0,201,167,.2);
//                     border-radius:100px;padding:5px 14px;color:${T};font-size:12px;font-weight:600; }

//         /* Featured grid: 1 col → 2 col */
//         .ba-featured { display:grid;grid-template-columns:1fr;gap:16px;margin-bottom:clamp(32px,5vw,52px); }
//         @media (min-width:640px) { .ba-featured { grid-template-columns:repeat(2,1fr);gap:22px; } }

//         /* Regular grid: 1 → 2 → 3 col */
//         .ba-regular { display:grid;grid-template-columns:1fr;gap:16px; }
//         @media (min-width:600px)  { .ba-regular { grid-template-columns:repeat(2,1fr);gap:18px; } }
//         @media (min-width:1024px) { .ba-regular { grid-template-columns:repeat(3,1fr);gap:20px; } }

//         .ba-lath { font-size:clamp(18px,3vw,22px);font-weight:700;color:#fff;
//                    margin-bottom:20px;display:flex;align-items:center;gap:10px; }
//         .ba-latb { width:4px;height:22px;background:linear-gradient(${T},${P});
//                    border-radius:4px;flex-shrink:0; }

//         /* ─── CARD ──────────────────────────────────────── */
//         .bc { display:flex;flex-direction:column;height:100%;text-decoration:none;
//                background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);
//                border-radius:20px;overflow:hidden;
//                transition:transform .32s ease,border-color .32s ease,box-shadow .32s ease; }
//         @media (hover:hover) {
//           .bc:hover { transform:translateY(-6px); }
//           .bc:hover .bc-thumb { transform:scale(1.05); }
//         }
//         .bc-iw   { position:relative;overflow:hidden;flex-shrink:0; }
//         .bc-thumb{ position:absolute;inset:0;background-size:cover;background-position:center;
//                    opacity:.88;transition:transform .5s ease; }
//         .bc-fade { position:absolute;inset:0;
//                    background:linear-gradient(to top,${N1}95 0%,transparent 55%); }
//         .bc-tag  { position:absolute;z-index:2;padding:4px 12px;border-radius:100px;
//                    background:rgba(5,15,30,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
//                    color:#fff;font-size:11px;font-weight:700;letter-spacing:.03em; }
//         .bc-body { padding:16px;flex:1;display:flex;flex-direction:column; }
//         @media (min-width:768px) { .bc-body { padding:20px 22px; } }
//         .bc-cat  { display:inline-flex;align-items:center;padding:3px 11px;border-radius:100px;
//                    font-size:11px;font-weight:700;letter-spacing:.04em; }
//         .bc-meta { display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:12px; }
//         .bc-rt   { color:rgba(255,255,255,.35);font-size:11px; }
//         .bc-ttl  { font-size:clamp(15px,2.5vw,19px);font-weight:700;color:#fff;
//                    line-height:1.4;margin-bottom:10px;letter-spacing:-.01em; }
//         .bc-ttls { font-size:clamp(14px,2vw,17px) !important; }
//         .bc-exc  { color:rgba(255,255,255,.52);font-size:14px;line-height:1.65;
//                    margin-bottom:18px;flex:1;
//                    display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden; }
//         .bc-ft   { display:flex;justify-content:space-between;align-items:center;
//                    flex-wrap:wrap;gap:8px;
//                    border-top:1px solid rgba(255,255,255,.06);padding-top:14px;margin-top:auto; }
//         .bc-avr  { display:flex;align-items:center;gap:10px;min-width:0; }
//         .bc-av   { width:34px;height:34px;border-radius:50%;flex-shrink:0;
//                    display:flex;align-items:center;justify-content:center;
//                    color:#fff;font-size:13px;font-weight:800; }
//         .bc-an   { color:#fff;font-size:12px;font-weight:600; }
//         .bc-as   { color:rgba(255,255,255,.38);font-size:11px; }
//         .bc-ap   { color:rgba(255,255,255,.35);font-size:11px;line-height:1.5; }
//         .bc-rl   { display:inline-flex;align-items:center;gap:5px;font-weight:600;
//                    font-size:13px;text-decoration:none;flex-shrink:0;transition:gap .2s; }
//         @media (hover:hover) { .bc-rl:hover { gap:10px; } }

//         .b-loadmore { padding:12px 40px;border-radius:100px;border:1.5px solid ${T};
//                       background:transparent;color:${T};font-size:14px;font-weight:600;
//                       cursor:pointer;font-family:'Poppins',sans-serif;transition:all .3s; }
//         .b-loadmore:hover { background:${T};color:#000;box-shadow:0 0 24px ${T}40; }

//         .b-empty { text-align:center;padding:64px 24px;
//                    background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);
//                    border-radius:20px; }

//         /* ─── NEWSLETTER ────────────────────────────────── */
//         .bnl { padding:clamp(48px,6vw,80px) clamp(16px,4vw,48px);position:relative;overflow:hidden;
//                background:linear-gradient(135deg,${N1} 0%,${N0} 100%); }
//         .bnl-gw { position:absolute;width:380px;height:380px;border-radius:50%;pointer-events:none;
//                   background:radial-gradient(circle,${T}10 0%,transparent 70%);top:-25%;right:-5%; }
//         .bnl-in { max-width:560px;margin:0 auto;position:relative;z-index:2;text-align:center; }
//         .bnl-badge { display:inline-flex;align-items:center;gap:8px;margin-bottom:20px;
//                      background:rgba(0,201,167,.08);border:1px solid rgba(0,201,167,.22);
//                      border-radius:100px;padding:7px 18px; }
//         .bnl-dot { width:6px;height:6px;border-radius:50%;background:${T};display:inline-block; }
//         .bnl-bl  { color:${T};font-size:11px;font-weight:700;letter-spacing:.1em; }
//         .bnl-h2  { font-size:clamp(22px,4vw,32px);font-weight:800;color:#fff;
//                    line-height:1.18;margin-bottom:14px;letter-spacing:-.01em; }
//         .bnl-sub { color:rgba(255,255,255,.55);font-size:clamp(13px,2vw,15px);
//                    line-height:1.8;margin-bottom:30px; }
//         .bnl-form { display:flex;flex-direction:column;gap:10px;max-width:480px;margin:0 auto; }
//         @media (min-width:540px) { .bnl-form { flex-direction:row; } }
//         .bnl-inp { flex:1;padding:13px 16px;border-radius:12px;width:100%;
//                    background:rgba(255,255,255,.05);border:1px solid ${T}40;
//                    color:#fff;font-size:15px;font-family:'Poppins',sans-serif;
//                    outline:none;transition:all .3s; }
//         .bnl-inp:focus { border-color:${T};box-shadow:0 0 0 3px ${T}25; }
//         .bnl-inp::placeholder { color:rgba(255,255,255,.35); }
//         .bnl-btn { padding:13px 28px;border-radius:12px;border:none;cursor:pointer;
//                    background:linear-gradient(135deg,${T},${P});
//                    color:#000;font-weight:700;font-size:15px;white-space:nowrap;
//                    font-family:'Poppins',sans-serif;transition:opacity .3s,transform .2s; }
//         .bnl-btn:hover:not(:disabled) { opacity:.88;transform:translateY(-1px); }
//         .bnl-btn:disabled { opacity:.5;cursor:wait; }
//         .bnl-fine { color:rgba(255,255,255,.25);font-size:11px;margin-top:16px; }
//         .bnl-ok   { background:rgba(0,201,167,.07);border:1px solid ${T}60;
//                     border-radius:18px;padding:28px 24px;animation:popIn .5s ease; }
//         .bnl-ok-t { color:${T};font-size:18px;font-weight:700;margin-bottom:8px; }
//         .bnl-ok-s { color:rgba(255,255,255,.5);font-size:13px; }
//       `}</style>

//       {/* ══ HERO ════════════════════════════════════════════════════ */}
//       <section className="bh">
//         <div className="bh-g1" />
//         <div className="bh-g2" />
//         <div className="bh-grid" />
//         <div className="bh-in">
//           <div className="bh-badge">
//             <span className="bh-dot" />
//             <span className="bh-bl">INSIGHTS &amp; RESOURCES</span>
//           </div>
//           <h1 className="bh-h1">
//             Insights on{" "}
//             <span className="bh-grad">Technology, Automation</span>
//             <br />&amp; Digital Growth
//           </h1>
//           <p className="bh-sub">
//             Practical, experience-based articles on CRM, ERP, web development,
//             automation, and digital strategy — written for business owners and
//             operations leaders in Canada, the USA, and the UK. Backed by{" "}
//             <strong style={{ color: T }}>10+ years</strong> of delivery expertise
//             from Nakshatra Namaha Creations.
//           </p>
//           <div className="bh-stats">
//             {[["12+","Articles Published"],["9","Topic Categories"],["10+","Years of Expertise"]].map(([n,l]) => (
//               <div key={l}>
//                 <div className="bh-sn">{n}</div>
//                 <div className="bh-sl">{l}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══ FILTER BAR ══════════════════════════════════════════════ */}
//       {/*
//         ARCHITECTURE:
//         .bfbar  = sticky wrapper, overflow:visible (never clips children)
//         .bflist = the actual scrollable row, overflow-x:auto
//         .bfbtn  = flex-shrink:0 so every button keeps its full width
//       */}
//       <div className="bfbar">
//         <div className="bflist">
//           {FILTERS.map(f => (
//             <button
//               key={f}
//               className={`bfbtn${active === f ? " active" : ""}`}
//               onClick={() => { setActive(f); setShowMore(6); }}
//               aria-pressed={active === f}
//             >
//               {f}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ══ ARTICLES ════════════════════════════════════════════════ */}
//       <section className="ba">
//         <div className="ba-in">

//           <div className="ba-hd">
//             <div>
//               <h2 className="ba-title">
//                 Featured <span style={{ color: T }}>Articles</span>
//               </h2>
//               <p style={{ color:"rgba(255,255,255,.35)",fontSize:"13px",marginTop:"4px" }}>
//                 In-depth guides written by specialists
//               </p>
//             </div>
//             <span className="ba-count">
//               {filtered.length} article{filtered.length !== 1 ? "s" : ""}
//             </span>
//           </div>

//           {featured.length > 0 && (
//             <div className="ba-featured">
//               {featured.map(p => (
//                 <Card key={p.id} post={p} featured
//                   hovered={hovered===p.id}
//                   onEnter={() => setHovered(p.id)}
//                   onLeave={() => setHovered(null)}
//                 />
//               ))}
//             </div>
//           )}

//           {shown.length > 0 && (
//             <>
//               <div className="ba-lath">
//                 <span className="ba-latb" />
//                 Latest Articles
//               </div>
//               <div className="ba-regular">
//                 {shown.map(p => (
//                   <Card key={p.id} post={p}
//                     hovered={hovered===p.id}
//                     onEnter={() => setHovered(p.id)}
//                     onLeave={() => setHovered(null)}
//                   />
//                 ))}
//               </div>
//             </>
//           )}

//           {hasMore && (
//             <div style={{ textAlign:"center",marginTop:"44px" }}>
//               <button className="b-loadmore" onClick={() => setShowMore(v => v+3)}>
//                 Load More Articles ↓
//               </button>
//             </div>
//           )}

//           {filtered.length === 0 && (
//             <div className="b-empty">
//               <div style={{ fontSize:"40px",marginBottom:"12px" }}>📭</div>
//               <p style={{ color:"rgba(255,255,255,.5)",fontSize:"16px",fontWeight:500 }}>
//                 No articles in this category yet.
//               </p>
//               <p style={{ color:"rgba(255,255,255,.3)",fontSize:"13px",marginTop:"6px" }}>
//                 New content published monthly — check back soon.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ══ NEWSLETTER ══════════════════════════════════════════════ */}
//       <section className="bnl">
//         <div className="bnl-gw" />
//         <div className="bnl-in">
//           <div className="bnl-badge">
//             <span className="bnl-dot" />
//             <span className="bnl-bl">STAY UPDATED</span>
//           </div>
//           <h2 className="bnl-h2">
//             Get Insights Delivered to Your <span style={{ color: T }}>Inbox</span>
//           </h2>
//           <p className="bnl-sub">
//             Monthly articles on CRM, ERP, automation, and digital growth — for business
//             leaders in <strong style={{ color:"rgba(255,255,255,.8)" }}>Canada, USA, and UK</strong>.
//           </p>
//           {subscribed ? (
//             <div className="bnl-ok">
//               <div style={{ fontSize:"40px",marginBottom:"12px" }}>🎉</div>
//               <div className="bnl-ok-t">Subscribed Successfully!</div>
//               <div className="bnl-ok-s">Monthly insights will arrive in your inbox.</div>
//             </div>
//           ) : (
//             <form className="bnl-form" onSubmit={handleSub}>
//               <input type="email" required placeholder="Your email address"
//                 className="bnl-inp" value={email}
//                 onChange={e => setEmail(e.target.value)} aria-label="Email address" />
//               <button type="submit" disabled={loading} className="bnl-btn">
//                 {loading ? "Subscribing…" : "Subscribe →"}
//               </button>
//             </form>
//           )}
//           <p className="bnl-fine">No spam, ever. Unsubscribe anytime.</p>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ─── Card ───────────────────────────────────────────────────────────────── */
// function Card({ post, hovered, onEnter, onLeave, featured = false }: {
//   post: BlogPost; hovered: boolean;
//   onEnter: () => void; onLeave: () => void; featured?: boolean;
// }) {
//   const imgH = featured ? "clamp(180px,25vw,228px)" : "168px";
//   return (
//     <Link href={post.link} className="bc"
//       style={{
//         borderColor: hovered ? `${post.color}80` : "rgba(255,255,255,.06)",
//         boxShadow:   hovered ? `0 18px 40px ${post.color}1a` : "none",
//       }}
//       onMouseEnter={onEnter} onMouseLeave={onLeave}
//     >
//       <div className="bc-iw" style={{ height: imgH }}>
//         <div className="bc-thumb"
//           style={{ backgroundImage:`url('${post.image}')`, backgroundColor:`${post.color}20` }} />
//         <div className="bc-fade" />
//         <span className="bc-tag"
//           style={{
//             border:`1px solid ${post.color}70`,
//             ...(featured ? { bottom:"12px",left:"12px" } : { top:"12px",right:"12px" }),
//           }}>
//           {featured ? post.category : post.readTime}
//         </span>
//       </div>

//       <div className="bc-body">
//         <div className="bc-meta">
//           <span className="bc-cat"
//             style={{ background:`${post.color}18`, border:`1px solid ${post.color}38`, color:post.color }}>
//             {post.category}
//           </span>
//           {featured && <span className="bc-rt">{post.readTime}</span>}
//         </div>

//         <h3 className={`bc-ttl${featured ? "" : " bc-ttls"}`}>{post.title}</h3>

//         <p className="bc-exc" style={{ WebkitLineClamp: featured ? 4 : 3 }}>
//           {post.excerpt}
//         </p>

//         <div className="bc-ft">
//           {featured ? (
//             <div className="bc-avr">
//               <div className="bc-av"
//                 style={{ background:`linear-gradient(135deg,${post.color},#8B5CF6)` }}>
//                 {post.author.charAt(0)}
//               </div>
//               <div>
//                 <div className="bc-an">{post.author}</div>
//                 <div className="bc-as">{post.authorRole} · {post.date}</div>
//               </div>
//             </div>
//           ) : (
//             <div className="bc-ap">
//               <div>{post.author}</div><div>{post.date}</div>
//             </div>
//           )}
//           <span className="bc-rl" style={{ color:post.color }}>
//             Read <span style={{ fontSize:"15px" }}>→</span>
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const T  = "#00C9A7";
const P  = "#8B5CF6";
const G  = "#10B981";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

interface BlogPost {
  id: number; category: string; color: string;
  title: string; readTime: string; excerpt: string;
  author: string; authorRole: string; date: string;
  image: string; featured: boolean; link: string;
}

const POSTS: BlogPost[] = [
  { id:1,  category:"CRM",        color:T,         title:"CRM Implementation Guide for Growing Businesses in Canada and the UK",             readTime:"8 min read",  excerpt:"A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",                                                   author:"Sarah Chen",     authorRole:"CRM Solutions Architect",    date:"Mar 15, 2025", image:"/blog1.jpg",  featured:true,  link:"/blog/crm-implementation-guide" },
  { id:2,  category:"Strategy",   color:P,         title:"ERP vs CRM: Which Does Your Business Need First?",                                 readTime:"5 min read",  excerpt:"A framework for deciding which system to build first — and exactly when you need both running together. Learn from real-world implementations across manufacturing and service industries.",                                                    author:"Michael Roberts",authorRole:"Senior Business Strategist",  date:"Mar 10, 2025", image:"/blog2.png",  featured:true,  link:"/blog/erp-vs-crm" },
  { id:3,  category:"CRM",        color:T,         title:"What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",               readTime:"7 min read",  excerpt:"A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",                                                                                                   author:"David Kumar",    authorRole:"Technical Director",          date:"Mar 5, 2025",  image:"/blog3.jpg",  featured:true,  link:"/blog/custom-crm-cost" },
  { id:4,  category:"Compliance", color:"#FF6B6B", title:"GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",              readTime:"9 min read",  excerpt:"A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",                                                                                                                    author:"Emma Watson",    authorRole:"Data Protection Officer",     date:"Feb 28, 2025", image:"/blog4.jpg",  featured:true,  link:"/blog/gdpr-pipeda-guide" },
  { id:5,  category:"Automation", color:G,         title:"How to Automate Your Sales Follow-Up Without Losing the Personal Touch",           readTime:"6 min read",  excerpt:"The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",                                                                                                                   author:"James Wilson",   authorRole:"Marketing Automation Lead",   date:"Feb 20, 2025", image:"/blog5.jpg",  featured:true,  link:"/blog/sales-automation" },
  { id:6,  category:"CRM",        color:T,         title:"WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",      readTime:"7 min read",  excerpt:"How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",                                                                                              author:"Priya Patel",    authorRole:"Digital Transformation Lead", date:"Feb 15, 2025", image:"/blog6.jpg",  featured:true,  link:"/blog/whatsapp-crm-integration" },
  { id:7,  category:"ERP",        color:"#F59E0B", title:"ERP Implementation Pitfalls to Avoid in 2025",                                    readTime:"10 min read", excerpt:"Lessons learned from 50+ ERP implementations across manufacturing, distribution, and services industries.",                                                                                                                                               author:"Robert Chen",    authorRole:"ERP Practice Lead",           date:"Feb 10, 2025", image:"/blog1.jpg",  featured:false, link:"/blog/erp-pitfalls" },
  { id:8,  category:"Mobile",     color:"#EC4899", title:"Mobile-First CRM: Why Your Field Teams Need a Native App",                        readTime:"6 min read",  excerpt:"How mobile CRM apps are transforming field service, sales, and operations for businesses with remote teams.",                                                                                                                                        author:"Lisa Zhang",     authorRole:"Mobile Solutions Architect",  date:"Feb 5, 2025",  image:"/blog2.png",  featured:false, link:"/blog/mobile-crm" },
  { id:9,  category:"SEO",        color:"#3B82F6", title:"SEO for 2025: What's Changed and What Still Works",                               readTime:"8 min read",  excerpt:"An updated look at SEO strategies that drive organic traffic for B2B and e-commerce businesses.",                                                                                                                                                    author:"Mark Taylor",    authorRole:"SEO Director",                date:"Jan 28, 2025", image:"/blog3.jpg",  featured:false, link:"/blog/seo-2025" },
  { id:10, category:"Web",        color:"#6366F1", title:"Headless CMS vs Traditional CMS: Which is Right for Your Business?",              readTime:"7 min read",  excerpt:"A practical comparison to help you choose the right content management approach for your specific business needs.",                                                                                                                                    author:"Alex Thompson",  authorRole:"Web Development Lead",        date:"Jan 20, 2025", image:"/blog4.jpg",  featured:false, link:"/blog/headless-cms-comparison" },
  { id:11, category:"Automation", color:G,         title:"Workflow Automation: 5 Processes Every Business Should Automate First",           readTime:"6 min read",  excerpt:"Start your automation journey with these high-impact processes that save time and reduce errors.",                                                                                                                                                   author:"Nina Patel",     authorRole:"Automation Specialist",       date:"Jan 15, 2025", image:"/blog5.jpg",  featured:false, link:"/blog/workflow-automation" },
  { id:12, category:"Strategy",   color:P,         title:"Digital Transformation Roadmap: A 12-Month Plan for Mid-Sized Businesses",        readTime:"12 min read", excerpt:"A phased approach to digital transformation that minimises disruption while maximising ROI.",                                                                                                                                                             author:"Michael Roberts",authorRole:"Senior Business Strategist",  date:"Jan 8, 2025",  image:"/blog6.jpg",  featured:false, link:"/blog/digital-transformation-roadmap" },
];

const FILTERS = ["All","CRM","ERP","Web","Mobile","Automation","SEO","Strategy","Compliance"];

export default function BlogPage() {
  const [active,    setActive]   = useState("All");
  const [email,     setEmail]    = useState("");
  const [subscribed,setSub]      = useState(false);
  const [loading,   setLoading]  = useState(false);
  const [hovered,   setHovered]  = useState<number|null>(null);
  const [showMore,  setShowMore] = useState(6);

  const filtered = active === "All" ? POSTS : POSTS.filter(p => p.category === active);
  const featured = filtered.filter(p => p.featured);
  const regular  = filtered.filter(p => !p.featured);
  const shown    = regular.slice(0, showMore);
  const hasMore  = regular.length > showMore;

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSub(true); setEmail(""); }, 1400);
  };

  return (
    <>
      <Navbar />

      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        @keyframes floatA{0%,100%{transform:translate(0,0)}50%{transform:translate(-22px,-22px)}}
        @keyframes floatB{0%,100%{transform:translate(0,0)}50%{transform:translate(18px,18px)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes popIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.5)}}

        /* hero */
        .bh{padding:60px 20px 70px;text-align:center;position:relative;overflow:hidden;background:linear-gradient(135deg,${N0} 0%,#041628 55%,${N0} 100%)}
        .bh-g1{position:absolute;width:480px;height:480px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,${T}14 0%,transparent 70%);top:-18%;right:-5%;animation:floatA 20s ease-in-out infinite}
        .bh-g2{position:absolute;width:300px;height:300px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,${P}12 0%,transparent 70%);bottom:-12%;left:-4%;animation:floatB 16s ease-in-out infinite}
        .bh-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px);background-size:60px 60px}
        .bh-in{max-width:860px;margin:0 auto;position:relative;z-index:2;animation:fadeUp .7s ease both}
        .bh-badge{display:inline-flex;align-items:center;gap:8px;margin-bottom:24px;background:rgba(0,201,167,.08);border:1px solid rgba(0,201,167,.25);border-radius:100px;padding:7px 20px}
        .bh-dot{width:8px;height:8px;border-radius:50%;background:${T};display:inline-block;box-shadow:0 0 10px ${T};animation:pulse 2s ease-in-out infinite}
        .bh-bl{color:${T};font-size:11px;font-weight:700;letter-spacing:.12em}
        .bh-h1{font-size:clamp(28px,7vw,58px);font-weight:900;line-height:1.12;color:#fff;letter-spacing:-.02em;margin-bottom:20px}
        .bh-grad{background:linear-gradient(135deg,${T},${P});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .bh-sub{color:rgba(255,255,255,.58);font-size:clamp(14px,2vw,17px);line-height:1.82;max-width:700px;margin:0 auto}
        .bh-stats{display:flex;justify-content:center;gap:clamp(20px,5vw,40px);margin-top:40px;flex-wrap:wrap}
        .bh-sn{font-size:26px;font-weight:800;color:${T}}
        .bh-sl{font-size:12px;color:rgba(255,255,255,.4);margin-top:2px}

        /* articles */
        .ba{padding:clamp(40px,6vw,80px) clamp(16px,4vw,48px);background:${N2}}
        .ba-in{max-width:1200px;margin:0 auto}
        .ba-hd{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;margin-bottom:clamp(20px,3vw,32px)}
        .ba-title{font-size:clamp(22px,4vw,30px);font-weight:800;color:#fff;line-height:1.2}
        .ba-count{background:rgba(0,201,167,.1);border:1px solid rgba(0,201,167,.2);border-radius:100px;padding:5px 14px;color:${T};font-size:12px;font-weight:600}
        .ba-featured{display:grid;grid-template-columns:1fr;gap:16px;margin-bottom:clamp(32px,5vw,52px)}
        @media(min-width:640px){.ba-featured{grid-template-columns:repeat(2,1fr);gap:22px}}
        .ba-regular{display:grid;grid-template-columns:1fr;gap:16px}
        @media(min-width:600px){.ba-regular{grid-template-columns:repeat(2,1fr);gap:18px}}
        @media(min-width:1024px){.ba-regular{grid-template-columns:repeat(3,1fr);gap:20px}}
        .ba-lath{font-size:clamp(18px,3vw,22px);font-weight:700;color:#fff;margin-bottom:20px;display:flex;align-items:center;gap:10px}
        .ba-latb{width:4px;height:22px;background:linear-gradient(${T},${P});border-radius:4px;flex-shrink:0}
        .b-loadmore{padding:12px 40px;border-radius:100px;border:1.5px solid ${T};background:transparent;color:${T};font-size:14px;font-weight:600;cursor:pointer;font-family:'Poppins',sans-serif;transition:all .3s}
        .b-loadmore:hover{background:${T};color:#000;box-shadow:0 0 24px ${T}40}
        .b-empty{text-align:center;padding:64px 24px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:20px}

        /* card */
        .bc{display:flex;flex-direction:column;height:100%;text-decoration:none;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);border-radius:20px;overflow:hidden;transition:transform .32s ease,border-color .32s ease,box-shadow .32s ease}
        @media(hover:hover){.bc:hover{transform:translateY(-6px)}.bc:hover .bc-thumb{transform:scale(1.05)}}
        .bc-iw{position:relative;overflow:hidden;flex-shrink:0}
        .bc-thumb{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.88;transition:transform .5s ease}
        .bc-fade{position:absolute;inset:0;background:linear-gradient(to top,${N1}95 0%,transparent 55%)}
        .bc-tag{position:absolute;z-index:2;padding:4px 12px;border-radius:100px;background:rgba(5,15,30,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;font-size:11px;font-weight:700;letter-spacing:.03em}
        .bc-body{padding:16px;flex:1;display:flex;flex-direction:column}
        @media(min-width:768px){.bc-body{padding:20px 22px}}
        .bc-cat{display:inline-flex;align-items:center;padding:3px 11px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.04em}
        .bc-meta{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:12px}
        .bc-rt{color:rgba(255,255,255,.35);font-size:11px}
        .bc-ttl{font-size:clamp(15px,2.5vw,19px);font-weight:700;color:#fff;line-height:1.4;margin-bottom:10px;letter-spacing:-.01em}
        .bc-ttls{font-size:clamp(14px,2vw,17px)!important}
        .bc-exc{color:rgba(255,255,255,.52);font-size:14px;line-height:1.65;margin-bottom:18px;flex:1;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}
        .bc-ft{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;border-top:1px solid rgba(255,255,255,.06);padding-top:14px;margin-top:auto}
        .bc-avr{display:flex;align-items:center;gap:10px;min-width:0}
        .bc-av{width:34px;height:34px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800}
        .bc-an{color:#fff;font-size:12px;font-weight:600}
        .bc-as{color:rgba(255,255,255,.38);font-size:11px}
        .bc-ap{color:rgba(255,255,255,.35);font-size:11px;line-height:1.5}
        .bc-rl{display:inline-flex;align-items:center;gap:5px;font-weight:600;font-size:13px;text-decoration:none;flex-shrink:0;transition:gap .2s}
        @media(hover:hover){.bc-rl:hover{gap:10px}}

        /* newsletter */
        .bnl{padding:clamp(48px,6vw,80px) clamp(16px,4vw,48px);position:relative;overflow:hidden;background:linear-gradient(135deg,${N1} 0%,${N0} 100%)}
        .bnl-gw{position:absolute;width:380px;height:380px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,${T}10 0%,transparent 70%);top:-25%;right:-5%}
        .bnl-in{max-width:560px;margin:0 auto;position:relative;z-index:2;text-align:center}
        .bnl-badge{display:inline-flex;align-items:center;gap:8px;margin-bottom:20px;background:rgba(0,201,167,.08);border:1px solid rgba(0,201,167,.22);border-radius:100px;padding:7px 18px}
        .bnl-dot{width:6px;height:6px;border-radius:50%;background:${T};display:inline-block}
        .bnl-bl{color:${T};font-size:11px;font-weight:700;letter-spacing:.1em}
        .bnl-h2{font-size:clamp(22px,4vw,32px);font-weight:800;color:#fff;line-height:1.18;margin-bottom:14px;letter-spacing:-.01em}
        .bnl-sub{color:rgba(255,255,255,.55);font-size:clamp(13px,2vw,15px);line-height:1.8;margin-bottom:30px}
        .bnl-form{display:flex;flex-direction:column;gap:10px;max-width:480px;margin:0 auto}
        @media(min-width:540px){.bnl-form{flex-direction:row}}
        .bnl-inp{flex:1;padding:13px 16px;border-radius:12px;width:100%;background:rgba(255,255,255,.05);border:1px solid ${T}40;color:#fff;font-size:15px;font-family:'Poppins',sans-serif;outline:none;transition:all .3s}
        .bnl-inp:focus{border-color:${T};box-shadow:0 0 0 3px ${T}25}
        .bnl-inp::placeholder{color:rgba(255,255,255,.35)}
        .bnl-btn{padding:13px 28px;border-radius:12px;border:none;cursor:pointer;background:linear-gradient(135deg,${T},${P});color:#000;font-weight:700;font-size:15px;white-space:nowrap;font-family:'Poppins',sans-serif;transition:opacity .3s,transform .2s}
        .bnl-btn:hover:not(:disabled){opacity:.88;transform:translateY(-1px)}
        .bnl-btn:disabled{opacity:.5;cursor:wait}
        .bnl-fine{color:rgba(255,255,255,.25);font-size:11px;margin-top:16px}
        .bnl-ok{background:rgba(0,201,167,.07);border:1px solid ${T}60;border-radius:18px;padding:28px 24px;animation:popIn .5s ease}
        .bnl-ok-t{color:${T};font-size:18px;font-weight:700;margin-bottom:8px}
        .bnl-ok-s{color:rgba(255,255,255,.5);font-size:13px}
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bh">
        <div className="bh-g1" /><div className="bh-g2" /><div className="bh-grid" />
        <div className="bh-in">
          <div className="bh-badge">
            <span className="bh-dot" />
            <span className="bh-bl">INSIGHTS &amp; RESOURCES</span>
          </div>
          <h1 className="bh-h1">
            Insights on <span className="bh-grad">Technology, Automation</span>
            <br />&amp; Digital Growth
          </h1>
          <p className="bh-sub">
            Practical, experience-based articles on CRM, ERP, web development,
            automation, and digital strategy — written for business owners and
            operations leaders in Canada, the USA, and the UK. Backed by{" "}
            <strong style={{color:T}}>10+ years</strong> of delivery expertise from
            Nakshatra Namaha Creations.
          </p>
          <div className="bh-stats">
            {[["12+","Articles Published"],["9","Topic Categories"],["10+","Years of Expertise"]].map(([n,l])=>(
              <div key={l}><div className="bh-sn">{n}</div><div className="bh-sl">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ────────────────────────────────────────────────
          ALL STYLES ARE INLINE — no CSS class, no cascade, no inheritance.
          This is the only 100% reliable way to guarantee scroll on mobile
          when parent components (Navbar wrappers, layout divs) may have
          overflow:hidden set.
      ──────────────────────────────────────────────────────────────── */}
      <div
        style={{
          position:   "sticky",
          top:        0,
          zIndex:     40,
          background: N1,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* This div is the ONLY scrolling element */}
        <div
          style={{
            display:                    "flex",
            flexWrap:                   "nowrap",   /* single row, never wraps */
            alignItems:                 "center",
            gap:                        "8px",
            overflowX:                  "auto",     /* horizontal scroll */
            overflowY:                  "visible",
            WebkitOverflowScrolling:    "touch",    /* smooth iOS momentum */
            scrollbarWidth:             "none",     /* Firefox */
            msOverflowStyle:            "none",     /* IE/Edge */
            padding:                    "12px 16px 14px",
          }}
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => { setActive(f); setShowMore(6); }}
              aria-pressed={active === f}
              style={{
                /* flex-shrink:0 is the critical property —
                   it means this button will NEVER be squished
                   or hidden regardless of container width    */
                flexShrink:     0,
                whiteSpace:     "nowrap",
                display:        "inline-flex",
                alignItems:     "center",
                padding:        "8px 18px",
                borderRadius:   "100px",
                fontSize:       "13px",
                fontWeight:     active === f ? 700 : 600,
                fontFamily:     "'Poppins', sans-serif",
                cursor:         "pointer",
                border:         active === f ? "1px solid transparent" : "1px solid rgba(255,255,255,0.12)",
                background:     active === f
                                  ? `linear-gradient(135deg, ${T}, ${P})`
                                  : "rgba(255,255,255,0.04)",
                color:          active === f ? "#000" : "rgba(255,255,255,0.65)",
                transition:     "all 0.25s ease",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── ARTICLES ──────────────────────────────────────────────── */}
      <section className="ba">
        <div className="ba-in">
          <div className="ba-hd">
            <div>
              <h2 className="ba-title">Featured <span style={{color:T}}>Articles</span></h2>
              <p style={{color:"rgba(255,255,255,.35)",fontSize:"13px",marginTop:"4px"}}>
                In-depth guides written by specialists
              </p>
            </div>
            <span className="ba-count">
              {filtered.length} article{filtered.length!==1?"s":""}
            </span>
          </div>

          {featured.length>0 && (
            <div className="ba-featured">
              {featured.map(p=>(
                <Card key={p.id} post={p} featured
                  hovered={hovered===p.id}
                  onEnter={()=>setHovered(p.id)}
                  onLeave={()=>setHovered(null)}
                />
              ))}
            </div>
          )}

          {shown.length>0 && (
            <>
              <div className="ba-lath"><span className="ba-latb"/>Latest Articles</div>
              <div className="ba-regular">
                {shown.map(p=>(
                  <Card key={p.id} post={p}
                    hovered={hovered===p.id}
                    onEnter={()=>setHovered(p.id)}
                    onLeave={()=>setHovered(null)}
                  />
                ))}
              </div>
            </>
          )}

          {hasMore && (
            <div style={{textAlign:"center",marginTop:"44px"}}>
              <button className="b-loadmore" onClick={()=>setShowMore(v=>v+3)}>
                Load More Articles ↓
              </button>
            </div>
          )}

          {filtered.length===0 && (
            <div className="b-empty">
              <div style={{fontSize:"40px",marginBottom:"12px"}}>📭</div>
              <p style={{color:"rgba(255,255,255,.5)",fontSize:"16px",fontWeight:500}}>
                No articles in this category yet.
              </p>
              <p style={{color:"rgba(255,255,255,.3)",fontSize:"13px",marginTop:"6px"}}>
                New content published monthly — check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────────── */}
      <section className="bnl">
        <div className="bnl-gw"/>
        <div className="bnl-in">
          <div className="bnl-badge">
            <span className="bnl-dot"/><span className="bnl-bl">STAY UPDATED</span>
          </div>
          <h2 className="bnl-h2">
            Get Insights Delivered to Your <span style={{color:T}}>Inbox</span>
          </h2>
          <p className="bnl-sub">
            Monthly articles on CRM, ERP, automation, and digital growth — for business
            leaders in <strong style={{color:"rgba(255,255,255,.8)"}}>Canada, USA, and UK</strong>.
          </p>
          {subscribed ? (
            <div className="bnl-ok">
              <div style={{fontSize:"40px",marginBottom:"12px"}}>🎉</div>
              <div className="bnl-ok-t">Subscribed Successfully!</div>
              <div className="bnl-ok-s">Monthly insights will arrive in your inbox.</div>
            </div>
          ) : (
            <form className="bnl-form" onSubmit={handleSub}>
              <input type="email" required placeholder="Your email address"
                className="bnl-inp" value={email}
                onChange={e=>setEmail(e.target.value)} aria-label="Email address"/>
              <button type="submit" disabled={loading} className="bnl-btn">
                {loading?"Subscribing…":"Subscribe →"}
              </button>
            </form>
          )}
          <p className="bnl-fine">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}

/* ── Card ──────────────────────────────────────────────────────────────────── */
function Card({post,hovered,onEnter,onLeave,featured=false}:{
  post:BlogPost; hovered:boolean; onEnter:()=>void; onLeave:()=>void; featured?:boolean
}) {
  const imgH = featured?"clamp(180px,25vw,228px)":"168px";
  return (
    <Link href={post.link} className="bc"
      style={{
        borderColor: hovered?`${post.color}80`:"rgba(255,255,255,.06)",
        boxShadow:   hovered?`0 18px 40px ${post.color}1a`:"none",
      }}
      onMouseEnter={onEnter} onMouseLeave={onLeave}
    >
      <div className="bc-iw" style={{height:imgH}}>
        <div className="bc-thumb"
          style={{backgroundImage:`url('${post.image}')`,backgroundColor:`${post.color}20`}}/>
        <div className="bc-fade"/>
        <span className="bc-tag"
          style={{
            border:`1px solid ${post.color}70`,
            ...(featured?{bottom:"12px",left:"12px"}:{top:"12px",right:"12px"}),
          }}>
          {featured?post.category:post.readTime}
        </span>
      </div>
      <div className="bc-body">
        <div className="bc-meta">
          <span className="bc-cat"
            style={{background:`${post.color}18`,border:`1px solid ${post.color}38`,color:post.color}}>
            {post.category}
          </span>
          {featured&&<span className="bc-rt">{post.readTime}</span>}
        </div>
        <h3 className={`bc-ttl${featured?"":" bc-ttls"}`}>{post.title}</h3>
        <p className="bc-exc" style={{WebkitLineClamp:featured?4:3}}>{post.excerpt}</p>
        <div className="bc-ft">
          {featured?(
            <div className="bc-avr">
              <div className="bc-av"
                style={{background:`linear-gradient(135deg,${post.color},#8B5CF6)`}}>
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="bc-an">{post.author}</div>
                <div className="bc-as">{post.authorRole} · {post.date}</div>
              </div>
            </div>
          ):(
            <div className="bc-ap"><div>{post.author}</div><div>{post.date}</div></div>
          )}
          <span className="bc-rl" style={{color:post.color}}>
            Read <span style={{fontSize:"15px"}}>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}