// // // // // "use client";

// // // // // import { useState, useEffect, useRef, CSSProperties } from "react";
// // // // // import Navbar from "../components/Navbar";

// // // // // // ─── Design tokens ────────────────────────────────────────────────────────────
// // // // // const T = "#00C9A7";
// // // // // const TD = "#00a07a";
// // // // // const P = "#8B5CF6";
// // // // // const G = "#10B981";
// // // // // const N0 = "#010812";
// // // // // const N1 = "#030B18";
// // // // // const N2 = "#061425";

// // // // // // Types
// // // // // interface BlogPost {
// // // // //   id: number;
// // // // //   category: string;
// // // // //   categoryColor: string;
// // // // //   title: string;
// // // // //   readTime: string;
// // // // //   excerpt: string;
// // // // //   author: string;
// // // // //   date: string;
// // // // //   image: string;
// // // // //   featured: boolean;
// // // // //   link: string;
// // // // // }

// // // // // export default function BlogPage() {
// // // // //   const [windowWidth, setWindowWidth] = useState(0);
// // // // //   const [activeFilter, setActiveFilter] = useState("All");
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [subscribed, setSubscribed] = useState(false);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
// // // // //   const [navbarHeight, setNavbarHeight] = useState(70);
// // // // //   const filterRef = useRef<HTMLDivElement>(null);

// // // // //   useEffect(() => {
// // // // //     if (typeof window === "undefined") return;
// // // // //     setWindowWidth(window.innerWidth);

// // // // //     const handleResize = () => setWindowWidth(window.innerWidth);
// // // // //     window.addEventListener("resize", handleResize);

// // // // //     // Detect actual navbar height
// // // // //     const navbar = document.querySelector("nav") || document.querySelector("header");
// // // // //     if (navbar) {
// // // // //       setNavbarHeight(navbar.getBoundingClientRect().height);
// // // // //     }

// // // // //     return () => window.removeEventListener("resize", handleResize);
// // // // //   }, []);

// // // // //   const isMobile = windowWidth > 0 && windowWidth <= 640;
// // // // //   const isTablet = windowWidth > 640 && windowWidth <= 1024;
// // // // //   const isDesktop = windowWidth > 1024;

// // // // //   const filters = ["All", "CRM", "ERP", "Web", "Mobile", "Automation", "SEO", "Strategy", "Compliance"];

// // // // //   const blogPosts: BlogPost[] = [
// // // // //     {
// // // // //       id: 1,
// // // // //       category: "CRM",
// // // // //       categoryColor: T,
// // // // //       title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
// // // // //       readTime: "8 min read",
// // // // //       excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
// // // // //       author: "Sarah Chen",
// // // // //       date: "Mar 15, 2025",
// // // // //       image: "crm-guide",
// // // // //       featured: true,
// // // // //       link: "/blog/crm-implementation-guide"
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       category: "Strategy",
// // // // //       categoryColor: P,
// // // // //       title: "ERP vs CRM: Which Does Your Business Need First?",
// // // // //       readTime: "5 min read",
// // // // //       excerpt: "A framework for deciding which system to build first — and exactly when you need both running together.",
// // // // //       author: "Michael Roberts",
// // // // //       date: "Mar 10, 2025",
// // // // //       image: "erp-vs-crm",
// // // // //       featured: true,
// // // // //       link: "/blog/erp-vs-crm"
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       category: "CRM",
// // // // //       categoryColor: T,
// // // // //       title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
// // // // //       readTime: "7 min read",
// // // // //       excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
// // // // //       author: "David Kumar",
// // // // //       date: "Mar 5, 2025",
// // // // //       image: "crm-cost",
// // // // //       featured: true,
// // // // //       link: "/blog/custom-crm-cost"
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       category: "Compliance",
// // // // //       categoryColor: "#FF6B6B",
// // // // //       title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
// // // // //       readTime: "9 min read",
// // // // //       excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",
// // // // //       author: "Emma Watson",
// // // // //       date: "Feb 28, 2025",
// // // // //       image: "compliance",
// // // // //       featured: true,
// // // // //       link: "/blog/gdpr-pipeda-guide"
// // // // //     },
// // // // //     {
// // // // //       id: 5,
// // // // //       category: "Automation",
// // // // //       categoryColor: G,
// // // // //       title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
// // // // //       readTime: "6 min read",
// // // // //       excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",
// // // // //       author: "James Wilson",
// // // // //       date: "Feb 20, 2025",
// // // // //       image: "automation",
// // // // //       featured: true,
// // // // //       link: "/blog/sales-automation"
// // // // //     },
// // // // //     {
// // // // //       id: 6,
// // // // //       category: "CRM",
// // // // //       categoryColor: T,
// // // // //       title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
// // // // //       readTime: "7 min read",
// // // // //       excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
// // // // //       author: "Priya Patel",
// // // // //       date: "Feb 15, 2025",
// // // // //       image: "whatsapp-crm",
// // // // //       featured: true,
// // // // //       link: "/blog/whatsapp-crm-integration"
// // // // //     },
// // // // //     {
// // // // //       id: 7,
// // // // //       category: "ERP",
// // // // //       categoryColor: "#F59E0B",
// // // // //       title: "ERP Implementation Pitfalls to Avoid in 2025",
// // // // //       readTime: "10 min read",
// // // // //       excerpt: "Lessons learned from 50+ ERP implementations across manufacturing, distribution, and services industries.",
// // // // //       author: "Robert Chen",
// // // // //       date: "Feb 10, 2025",
// // // // //       image: "erp-pitfalls",
// // // // //       featured: false,
// // // // //       link: "/blog/erp-pitfalls"
// // // // //     },
// // // // //     {
// // // // //       id: 8,
// // // // //       category: "Mobile",
// // // // //       categoryColor: "#EC4899",
// // // // //       title: "Mobile-First CRM: Why Your Field Teams Need a Native App",
// // // // //       readTime: "6 min read",
// // // // //       excerpt: "How mobile CRM apps are transforming field service, sales, and operations for businesses with remote teams.",
// // // // //       author: "Lisa Zhang",
// // // // //       date: "Feb 5, 2025",
// // // // //       image: "mobile-crm",
// // // // //       featured: false,
// // // // //       link: "/blog/mobile-crm"
// // // // //     },
// // // // //     {
// // // // //       id: 9,
// // // // //       category: "SEO",
// // // // //       categoryColor: "#3B82F6",
// // // // //       title: "SEO for 2025: What's Changed and What Still Works",
// // // // //       readTime: "8 min read",
// // // // //       excerpt: "An updated look at SEO strategies that drive organic traffic for B2B and e-commerce businesses.",
// // // // //       author: "Mark Taylor",
// // // // //       date: "Jan 28, 2025",
// // // // //       image: "seo-2025",
// // // // //       featured: false,
// // // // //       link: "/blog/seo-2025"
// // // // //     }
// // // // //   ];

// // // // //   const filteredPosts = activeFilter === "All"
// // // // //     ? blogPosts
// // // // //     : blogPosts.filter(post => post.category === activeFilter);

// // // // //   const handleSubscribe = (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);
// // // // //     setTimeout(() => {
// // // // //       setLoading(false);
// // // // //       setSubscribed(true);
// // // // //       setEmail("");
// // // // //     }, 1200);
// // // // //   };

// // // // //   // ─── Responsive helpers ───────────────────────────────────────────────────
// // // // //   const sp = isMobile ? "48px 16px" : isTablet ? "72px 28px" : "96px 48px";

// // // // //   const heroFontSize = isMobile
// // // // //     ? "clamp(28px, 7vw, 36px)"
// // // // //     : isTablet
// // // // //     ? "clamp(36px, 5vw, 46px)"
// // // // //     : "clamp(44px, 4vw, 60px)";

// // // // //   const featuredCols = isMobile ? "1fr" : "repeat(2, 1fr)";
// // // // //   const allCols = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";

// // // // //   const baseInput: CSSProperties = {
// // // // //     width: "100%",
// // // // //     padding: isMobile ? "12px 14px" : "14px 16px",
// // // // //     borderRadius: "12px",
// // // // //     background: "rgba(255,255,255,0.05)",
// // // // //     border: "1px solid rgba(255,255,255,0.1)",
// // // // //     color: "#fff",
// // // // //     fontSize: isMobile ? "14px" : "15px",
// // // // //     fontFamily: "'Poppins', sans-serif",
// // // // //     outline: "none",
// // // // //     transition: "all 0.3s ease",
// // // // //     boxSizing: "border-box" as const,
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />

// // // // //       {/* ── Global styles injected via <style> ─────────────────────────── */}
// // // // //       <style>{`
// // // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // // // //         @keyframes float {
// // // // //           0%, 100% { transform: translate(0, 0); }
// // // // //           33%       { transform: translate(-18px, -18px); }
// // // // //           66%       { transform: translate(18px, 18px); }
// // // // //         }
// // // // //         @keyframes fadeInScale {
// // // // //           from { opacity: 0; transform: scale(0.92); }
// // // // //           to   { opacity: 1; transform: scale(1); }
// // // // //         }

// // // // //         /* ── Filter bar ─────────────────────────────────────────────────── */
// // // // //         .filter-bar {
// // // // //           position: sticky;
// // // // //           /* sits right below the fixed navbar */
// // // // //           top: ${navbarHeight}px;
// // // // //           z-index: 40;
// // // // //           background: ${N1};
// // // // //           border-bottom: 1px solid rgba(255,255,255,0.06);
// // // // //           /* prevents content bleeding through during scroll */
// // // // //           isolation: isolate;
// // // // //           /* full-width opaque backdrop so nothing shows through */
// // // // //           backdrop-filter: none;
// // // // //         }

// // // // //         /* ── Filter pill buttons ────────────────────────────────────────── */
// // // // //         .filter-btn {
// // // // //           padding: 8px 20px;
// // // // //           border-radius: 100px;
// // // // //           font-size: 13px;
// // // // //           font-weight: 600;
// // // // //           cursor: pointer;
// // // // //           border: 1px solid rgba(255,255,255,0.1);
// // // // //           white-space: nowrap;
// // // // //           transition: all 0.25s ease;
// // // // //           font-family: 'Poppins', sans-serif;
// // // // //         }
// // // // //         .filter-btn:hover {
// // // // //           border-color: ${T};
// // // // //           color: #fff;
// // // // //         }
// // // // //         .filter-btn.active {
// // // // //           background: linear-gradient(135deg, ${T}, ${P});
// // // // //           color: #000;
// // // // //           border-color: transparent;
// // // // //         }

// // // // //         /* ── Filter scroll container (mobile) ──────────────────────────── */
// // // // //         .filter-scroll {
// // // // //           display: flex;
// // // // //           gap: 10px;
// // // // //           overflow-x: auto;
// // // // //           padding: 4px 2px 6px;
// // // // //           /* hide scrollbar */
// // // // //           scrollbar-width: none;
// // // // //           -ms-overflow-style: none;
// // // // //         }
// // // // //         .filter-scroll::-webkit-scrollbar { display: none; }

// // // // //         /* ── Blog cards ─────────────────────────────────────────────────── */
// // // // //         .blog-card {
// // // // //           background: rgba(255,255,255,0.02);
// // // // //           border: 1px solid rgba(255,255,255,0.05);
// // // // //           border-radius: 20px;
// // // // //           overflow: hidden;
// // // // //           transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
// // // // //         }
// // // // //         @media (hover: hover) {
// // // // //           .blog-card:hover {
// // // // //             transform: translateY(-6px);
// // // // //           }
// // // // //         }

// // // // //         /* ── Read link ─────────────────────────────────────────────────── */
// // // // //         .read-link {
// // // // //           display: inline-flex;
// // // // //           align-items: center;
// // // // //           gap: 4px;
// // // // //           font-weight: 600;
// // // // //           font-size: 13px;
// // // // //           text-decoration: none;
// // // // //           transition: gap 0.25s ease;
// // // // //         }
// // // // //         @media (hover: hover) {
// // // // //           .read-link:hover { gap: 8px; }
// // // // //         }

// // // // //         /* ── Subscribe button ──────────────────────────────────────────── */
// // // // //         .sub-btn {
// // // // //           padding: ${isMobile ? "12px 24px" : "14px 32px"};
// // // // //           border-radius: 12px;
// // // // //           border: none;
// // // // //           font-weight: 700;
// // // // //           font-size: ${isMobile ? "14px" : "15px"};
// // // // //           cursor: pointer;
// // // // //           transition: opacity 0.3s ease;
// // // // //           white-space: nowrap;
// // // // //           font-family: 'Poppins', sans-serif;
// // // // //         }
// // // // //         .sub-btn:hover:not(:disabled) { opacity: 0.88; }

// // // // //         /* ── Load more button ──────────────────────────────────────────── */
// // // // //         .load-more {
// // // // //           padding: 12px 36px;
// // // // //           border-radius: 100px;
// // // // //           border: 1px solid ${T};
// // // // //           background: transparent;
// // // // //           color: ${T};
// // // // //           font-size: 14px;
// // // // //           font-weight: 600;
// // // // //           cursor: pointer;
// // // // //           transition: all 0.3s ease;
// // // // //           font-family: 'Poppins', sans-serif;
// // // // //         }
// // // // //         .load-more:hover {
// // // // //           background: ${T};
// // // // //           color: #000;
// // // // //         }

// // // // //         /* ── Responsive tweaks ─────────────────────────────────────────── */
// // // // //         @media (max-width: 640px) {
// // // // //           .hero-subtitle { font-size: 14px !important; }
// // // // //           .section-title { font-size: 22px !important; }
// // // // //           .card-title    { font-size: 16px !important; }
// // // // //         }
// // // // //       `}</style>

// // // // //       {/* ── MODULE 1 — HERO ──────────────────────────────────────────────── */}
// // // // //       <section style={{
// // // // //         padding: isMobile ? "48px 16px 56px" : isTablet ? "90px 28px 72px" : "80px 48px 88px",
// // // // //         background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
// // // // //         position: "relative",
// // // // //         overflow: "hidden",
// // // // //         textAlign: "center",
// // // // //       }}>
// // // // //         {!isMobile && (
// // // // //           <>
// // // // //             <div style={{
// // // // //               position: "absolute", width: "480px", height: "480px", borderRadius: "50%",
// // // // //               background: `radial-gradient(circle, ${T}15 0%, transparent 70%)`,
// // // // //               top: "-15%", right: "-4%", animation: "float 20s ease-in-out infinite", pointerEvents: "none",
// // // // //             }} />
// // // // //             <div style={{
// // // // //               position: "absolute", width: "280px", height: "280px", borderRadius: "50%",
// // // // //               background: `radial-gradient(circle, ${P}15 0%, transparent 70%)`,
// // // // //               bottom: "-10%", left: "-3%", animation: "float 15s ease-in-out infinite reverse", pointerEvents: "none",
// // // // //             }} />
// // // // //           </>
// // // // //         )}

// // // // //         <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 2 }}>
// // // // //           {/* Badge */}
// // // // //           <div style={{
// // // // //             display: "inline-flex", alignItems: "center", gap: "8px",
// // // // //             background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
// // // // //             borderRadius: "100px", padding: isMobile ? "6px 14px" : "8px 20px",
// // // // //             marginBottom: isMobile ? "16px" : "24px",
// // // // //           }}>
// // // // //             <span style={{ width: isMobile ? "6px" : "8px", height: isMobile ? "6px" : "8px", borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}` }} />
// // // // //             <span style={{ color: T, fontSize: isMobile ? "11px" : "13px", fontWeight: 600, letterSpacing: "0.1em" }}>INSIGHTS & RESOURCES</span>
// // // // //           </div>

// // // // //           <h1 style={{ fontSize: heroFontSize, fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? "14px" : "22px", color: "#fff" }}>
// // // // //             Insights on{" "}
// // // // //             <span style={{ background: `linear-gradient(135deg, ${T}, ${P})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// // // // //               Technology, Automation
// // // // //             </span>
// // // // //             <br />& Digital Growth
// // // // //           </h1>

// // // // //           <p className="hero-subtitle" style={{
// // // // //             color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "17px",
// // // // //             lineHeight: 1.8, maxWidth: "680px", margin: "0 auto",
// // // // //           }}>
// // // // //             Practical, experience-based articles on CRM, ERP, web development, automation, and digital strategy — written for business owners and operations leaders in Canada, the USA, and the UK. Backed by 10+ years of delivery expertise from Nakshatra Namaha Creations.
// // // // //           </p>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── MODULE 2 — FILTER BAR ────────────────────────────────────────── */}
// // // // //       <div className="filter-bar" ref={filterRef}>
// // // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "16px 16px" : isTablet ? "20px 28px" : "20px 48px" }}>
// // // // //           {isMobile ? (
// // // // //             /* Mobile: horizontally scrollable pills */
// // // // //             <div className="filter-scroll">
// // // // //               {filters.map(f => (
// // // // //                 <button
// // // // //                   key={f}
// // // // //                   className={`filter-btn${activeFilter === f ? " active" : ""}`}
// // // // //                   onClick={() => setActiveFilter(f)}
// // // // //                   style={{
// // // // //                     background: activeFilter === f ? `linear-gradient(135deg, ${T}, ${P})` : "rgba(255,255,255,0.04)",
// // // // //                     color: activeFilter === f ? "#000" : "rgba(255,255,255,0.7)",
// // // // //                     flexShrink: 0,
// // // // //                   }}
// // // // //                 >
// // // // //                   {f}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           ) : (
// // // // //             /* Desktop/Tablet: wrapped pills */
// // // // //             <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
// // // // //               {filters.map(f => (
// // // // //                 <button
// // // // //                   key={f}
// // // // //                   className={`filter-btn${activeFilter === f ? " active" : ""}`}
// // // // //                   onClick={() => setActiveFilter(f)}
// // // // //                   style={{
// // // // //                     background: activeFilter === f ? `linear-gradient(135deg, ${T}, ${P})` : "rgba(255,255,255,0.04)",
// // // // //                     color: activeFilter === f ? "#000" : "rgba(255,255,255,0.7)",
// // // // //                   }}
// // // // //                 >
// // // // //                   {f}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* ── MODULE 3 — ARTICLES ──────────────────────────────────────────── */}
// // // // //       <section style={{ padding: sp, background: N2 }}>
// // // // //         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

// // // // //           {/* Section header */}
// // // // //           <div style={{
// // // // //             display: "flex", justifyContent: "space-between", alignItems: "center",
// // // // //             marginBottom: isMobile ? "20px" : "28px",
// // // // //             flexWrap: "wrap", gap: "12px",
// // // // //           }}>
// // // // //             <h2 className="section-title" style={{
// // // // //               fontSize: isMobile ? "22px" : isTablet ? "26px" : "30px",
// // // // //               fontWeight: 800, color: "#fff",
// // // // //             }}>
// // // // //               Featured <span style={{ color: T }}>Articles</span>
// // // // //             </h2>
// // // // //             <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
// // // // //               {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
// // // // //             </span>
// // // // //           </div>

// // // // //           {/* Featured (top 2) */}
// // // // //           {filteredPosts.filter(p => p.featured).length > 0 && (
// // // // //             <div style={{
// // // // //               display: "grid", gridTemplateColumns: featuredCols,
// // // // //               gap: isMobile ? "16px" : "22px", marginBottom: isMobile ? "32px" : "48px",
// // // // //             }}>
// // // // //               {filteredPosts.filter(p => p.featured).slice(0, 2).map(post => (
// // // // //                 <ArticleCard
// // // // //                   key={post.id}
// // // // //                   post={post}
// // // // //                   hovered={hoveredCard === post.id}
// // // // //                   onEnter={() => setHoveredCard(post.id)}
// // // // //                   onLeave={() => setHoveredCard(null)}
// // // // //                   isMobile={isMobile}
// // // // //                   featured
// // // // //                 />
// // // // //               ))}
// // // // //             </div>
// // // // //           )}

// // // // //           {/* All posts */}
// // // // //           <div style={{
// // // // //             display: "grid", gridTemplateColumns: allCols,
// // // // //             gap: isMobile ? "16px" : "20px",
// // // // //           }}>
// // // // //             {filteredPosts.map(post => (
// // // // //               <ArticleCard
// // // // //                 key={post.id}
// // // // //                 post={post}
// // // // //                 hovered={hoveredCard === post.id}
// // // // //                 onEnter={() => setHoveredCard(post.id)}
// // // // //                 onLeave={() => setHoveredCard(null)}
// // // // //                 isMobile={isMobile}
// // // // //               />
// // // // //             ))}
// // // // //           </div>

// // // // //           {filteredPosts.length > 6 && (
// // // // //             <div style={{ textAlign: "center", marginTop: "40px" }}>
// // // // //               <button className="load-more">Load More Articles</button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── MODULE 4 — NEWSLETTER ────────────────────────────────────────── */}
// // // // //       <section style={{
// // // // //         padding: sp,
// // // // //         background: `linear-gradient(135deg, ${N1} 0%, ${N0} 100%)`,
// // // // //         position: "relative", overflow: "hidden",
// // // // //       }}>
// // // // //         {!isMobile && (
// // // // //           <div style={{
// // // // //             position: "absolute", width: "380px", height: "380px", borderRadius: "50%",
// // // // //             background: `radial-gradient(circle, ${T}10 0%, transparent 70%)`,
// // // // //             top: "-20%", right: "-4%", pointerEvents: "none",
// // // // //           }} />
// // // // //         )}

// // // // //         <div style={{
// // // // //           maxWidth: "560px", margin: "0 auto",
// // // // //           position: "relative", zIndex: 2, textAlign: "center",
// // // // //         }}>
// // // // //           <div style={{
// // // // //             display: "inline-flex", alignItems: "center", gap: "8px",
// // // // //             background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
// // // // //             borderRadius: "100px", padding: "7px 18px", marginBottom: "20px",
// // // // //           }}>
// // // // //             <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: T }} />
// // // // //             <span style={{ color: T, fontSize: "12px", fontWeight: 600 }}>STAY UPDATED</span>
// // // // //           </div>

// // // // //           <h2 style={{
// // // // //             fontSize: isMobile ? "22px" : isTablet ? "26px" : "30px",
// // // // //             fontWeight: 800, color: "#fff", marginBottom: "14px",
// // // // //           }}>
// // // // //             Get Insights Delivered to Your <span style={{ color: T }}>Inbox</span>
// // // // //           </h2>

// // // // //           <p style={{
// // // // //             color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "13px" : "15px",
// // // // //             lineHeight: 1.75, marginBottom: "28px",
// // // // //           }}>
// // // // //             Monthly articles on CRM, ERP, automation, and digital growth — for business leaders in Canada, USA, and UK.
// // // // //           </p>

// // // // //           {subscribed ? (
// // // // //             <div style={{
// // // // //               background: "rgba(0,201,167,0.08)", border: `1px solid ${T}`,
// // // // //               borderRadius: "16px", padding: "24px", animation: "fadeInScale 0.5s ease",
// // // // //             }}>
// // // // //               <div style={{ fontSize: "36px", marginBottom: "10px" }}>🎉</div>
// // // // //               <h3 style={{ color: T, fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>Subscribed Successfully!</h3>
// // // // //               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
// // // // //                 Thank you for joining. You'll receive insights monthly.
// // // // //               </p>
// // // // //             </div>
// // // // //           ) : (
// // // // //             <form
// // // // //               onSubmit={handleSubscribe}
// // // // //               style={{
// // // // //                 display: "flex",
// // // // //                 flexDirection: isMobile ? "column" : "row",
// // // // //                 gap: "10px",
// // // // //                 maxWidth: "480px",
// // // // //                 margin: "0 auto",
// // // // //               }}
// // // // //             >
// // // // //               <input
// // // // //                 type="email"
// // // // //                 required
// // // // //                 placeholder="Your email address"
// // // // //                 style={{ ...baseInput, flex: 1, border: `1px solid ${T}40` }}
// // // // //                 value={email}
// // // // //                 onChange={e => setEmail(e.target.value)}
// // // // //                 onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}30`; }}
// // // // //                 onBlur={e => { e.target.style.borderColor = `${T}40`; e.target.style.boxShadow = "none"; }}
// // // // //               />
// // // // //               <button
// // // // //                 type="submit"
// // // // //                 disabled={loading}
// // // // //                 className="sub-btn"
// // // // //                 style={{
// // // // //                   background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg, ${T}, ${P})`,
// // // // //                   color: "#000",
// // // // //                   cursor: loading ? "wait" : "pointer",
// // // // //                 }}
// // // // //               >
// // // // //                 {loading ? "Subscribing…" : "Subscribe →"}
// // // // //               </button>
// // // // //             </form>
// // // // //           )}

// // // // //           <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", marginTop: "16px" }}>
// // // // //             No spam. Unsubscribe anytime.
// // // // //           </p>
// // // // //         </div>
// // // // //       </section>
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // // ─── Reusable Article Card ────────────────────────────────────────────────────
// // // // // function ArticleCard({
// // // // //   post, hovered, onEnter, onLeave, isMobile, featured = false,
// // // // // }: {
// // // // //   post: BlogPost;
// // // // //   hovered: boolean;
// // // // //   onEnter: () => void;
// // // // //   onLeave: () => void;
// // // // //   isMobile: boolean;
// // // // //   featured?: boolean;
// // // // // }) {
// // // // //   const N1 = "#030B18";
// // // // //   const P  = "#8B5CF6";

// // // // //   const imageHeight = featured ? (isMobile ? "150px" : "190px") : "130px";

// // // // //   return (
// // // // //     <div
// // // // //       className="blog-card"
// // // // //       onMouseEnter={onEnter}
// // // // //       onMouseLeave={onLeave}
// // // // //       style={{
// // // // //         borderColor: hovered ? post.categoryColor : "rgba(255,255,255,0.05)",
// // // // //         boxShadow: hovered ? `0 16px 36px ${post.categoryColor}22` : "none",
// // // // //       }}
// // // // //     >
// // // // //       {/* Colour-wash image area */}
// // // // //       <div style={{
// // // // //         height: imageHeight,
// // // // //         background: `linear-gradient(135deg, ${post.categoryColor}38, ${N1})`,
// // // // //         position: "relative",
// // // // //       }}>
// // // // //         <span style={{
// // // // //           position: "absolute",
// // // // //           ...(featured ? { bottom: "12px", left: "12px" } : { top: "10px", right: "10px" }),
// // // // //           background: "rgba(0,0,0,0.48)",
// // // // //           backdropFilter: "blur(6px)",
// // // // //           padding: "3px 10px",
// // // // //           borderRadius: "100px",
// // // // //           border: `1px solid ${post.categoryColor}`,
// // // // //           color: "#fff",
// // // // //           fontSize: "11px",
// // // // //           fontWeight: 600,
// // // // //         }}>
// // // // //           {featured ? post.category : post.readTime}
// // // // //         </span>
// // // // //       </div>

// // // // //       {/* Card body */}
// // // // //       <div style={{ padding: isMobile ? "16px" : "20px" }}>
// // // // //         <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
// // // // //           <span style={{
// // // // //             padding: "3px 10px",
// // // // //             background: `${post.categoryColor}1a`,
// // // // //             border: `1px solid ${post.categoryColor}40`,
// // // // //             borderRadius: "100px",
// // // // //             color: post.categoryColor,
// // // // //             fontSize: "11px", fontWeight: 600,
// // // // //           }}>{post.category}</span>
// // // // //           {featured && (
// // // // //             <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{post.readTime}</span>
// // // // //           )}
// // // // //         </div>

// // // // //         <h3 className="card-title" style={{
// // // // //           fontSize: isMobile ? "15px" : featured ? "19px" : "17px",
// // // // //           fontWeight: 700, color: "#fff",
// // // // //           marginBottom: "10px", lineHeight: 1.4,
// // // // //         }}>
// // // // //           {post.title}
// // // // //         </h3>

// // // // //         <p style={{
// // // // //           color: "rgba(255,255,255,0.58)",
// // // // //           fontSize: isMobile ? "12px" : "13px",
// // // // //           lineHeight: 1.65,
// // // // //           marginBottom: "16px",
// // // // //           display: "-webkit-box",
// // // // //           WebkitLineClamp: featured ? 4 : 3,
// // // // //           WebkitBoxOrient: "vertical" as const,
// // // // //           overflow: "hidden",
// // // // //         }}>
// // // // //           {post.excerpt}
// // // // //         </p>

// // // // //         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// // // // //           {featured ? (
// // // // //             <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // // // //               <div style={{
// // // // //                 width: "30px", height: "30px", borderRadius: "50%",
// // // // //                 background: `linear-gradient(135deg, ${post.categoryColor}, ${P})`,
// // // // //                 display: "flex", alignItems: "center", justifyContent: "center",
// // // // //                 color: "#fff", fontSize: "13px", fontWeight: 700,
// // // // //               }}>
// // // // //                 {post.author.charAt(0)}
// // // // //               </div>
// // // // //               <div>
// // // // //                 <div style={{ color: "#fff", fontSize: "12px", fontWeight: 600 }}>{post.author}</div>
// // // // //                 <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "10px" }}>{post.date}</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "10px" }}>{post.date}</div>
// // // // //           )}

// // // // //           <a href={post.link} className="read-link" style={{ color: post.categoryColor }}>
// // // // //             Read <span>→</span>
// // // // //           </a>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // "use client";

// // // // import { useState, useEffect, useRef, CSSProperties } from "react";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import Navbar from "../components/Navbar";

// // // // // ─── Design tokens ────────────────────────────────────────────────────────────
// // // // const T = "#00C9A7";
// // // // const TD = "#00a07a";
// // // // const P = "#8B5CF6";
// // // // const G = "#10B981";
// // // // const N0 = "#010812";
// // // // const N1 = "#030B18";
// // // // const N2 = "#061425";

// // // // // Types
// // // // interface BlogPost {
// // // //   id: number;
// // // //   category: string;
// // // //   categoryColor: string;
// // // //   title: string;
// // // //   readTime: string;
// // // //   excerpt: string;
// // // //   author: string;
// // // //   authorRole: string;
// // // //   date: string;
// // // //   image: string;
// // // //   featured: boolean;
// // // //   link: string;
// // // // }

// // // // export default function BlogPage() {
// // // //   const [windowWidth, setWindowWidth] = useState(0);
// // // //   const [activeFilter, setActiveFilter] = useState("All");
// // // //   const [email, setEmail] = useState("");
// // // //   const [subscribed, setSubscribed] = useState(false);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
// // // //   const [navbarHeight, setNavbarHeight] = useState(70);
// // // //   const [visiblePosts, setVisiblePosts] = useState(6);
// // // //   const filterRef = useRef<HTMLDivElement>(null);

// // // //   useEffect(() => {
// // // //     if (typeof window === "undefined") return;
// // // //     setWindowWidth(window.innerWidth);

// // // //     const handleResize = () => setWindowWidth(window.innerWidth);
// // // //     window.addEventListener("resize", handleResize);

// // // //     // Detect actual navbar height
// // // //     const navbar = document.querySelector("nav") || document.querySelector("header");
// // // //     if (navbar) {
// // // //       setNavbarHeight(navbar.getBoundingClientRect().height);
// // // //     }

// // // //     return () => window.removeEventListener("resize", handleResize);
// // // //   }, []);

// // // //   const isMobile = windowWidth > 0 && windowWidth <= 640;
// // // //   const isTablet = windowWidth > 640 && windowWidth <= 1024;
// // // //   const isDesktop = windowWidth > 1024;

// // // //   const filters = ["All", "CRM", "ERP", "Web", "Mobile", "Automation", "SEO", "Strategy", "Compliance"];

// // // //   const blogPosts: BlogPost[] = [
// // // //     {
// // // //       id: 1,
// // // //       category: "CRM",
// // // //       categoryColor: T,
// // // //       title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
// // // //       readTime: "8 min read",
// // // //       excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
// // // //       author: "Sarah Chen",
// // // //       authorRole: "CRM Solutions Architect",
// // // //       date: "Mar 15, 2025",
// // // //       image: "/blog1.jpg",
// // // //       featured: true,
// // // //       link: "/blog/crm-implementation-guide"
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       category: "Strategy",
// // // //       categoryColor: P,
// // // //       title: "ERP vs CRM: Which Does Your Business Need First?",
// // // //       readTime: "5 min read",
// // // //       excerpt: "A framework for deciding which system to build first — and exactly when you need both running together. Learn from real-world implementations across manufacturing and service industries.",
// // // //       author: "Michael Roberts",
// // // //       authorRole: "Senior Business Strategist",
// // // //       date: "Mar 10, 2025",
// // // //       image: "/blog2.png",
// // // //       featured: true,
// // // //       link: "/blog/erp-vs-crm"
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       category: "CRM",
// // // //       categoryColor: T,
// // // //       title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
// // // //       readTime: "7 min read",
// // // //       excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
// // // //       author: "David Kumar",
// // // //       authorRole: "Technical Director",
// // // //       date: "Mar 5, 2025",
// // // //       image: "/blog3.jpg",
// // // //       featured: true,
// // // //       link: "/blog/custom-crm-cost"
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       category: "Compliance",
// // // //       categoryColor: "#FF6B6B",
// // // //       title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
// // // //       readTime: "9 min read",
// // // //       excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK. Essential reading for compliance officers and business owners.",
// // // //       author: "Emma Watson",
// // // //       authorRole: "Data Protection Officer",
// // // //       date: "Feb 28, 2025",
// // // //       image: "/blog4.jpg",
// // // //       featured: true,
// // // //       link: "/blog/gdpr-pipeda-guide"
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       category: "Automation",
// // // //       categoryColor: G,
// // // //       title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
// // // //       readTime: "6 min read",
// // // //       excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot. Includes email templates and timing strategies.",
// // // //       author: "James Wilson",
// // // //       authorRole: "Marketing Automation Lead",
// // // //       date: "Feb 20, 2025",
// // // //       image: "/blog5.jpg",
// // // //       featured: true,
// // // //       link: "/blog/sales-automation"
// // // //     },
// // // //     {
// // // //       id: 6,
// // // //       category: "CRM",
// // // //       categoryColor: T,
// // // //       title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
// // // //       readTime: "7 min read",
// // // //       excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
// // // //       author: "Priya Patel",
// // // //       authorRole: "Digital Transformation Lead",
// // // //       date: "Feb 15, 2025",
// // // //       image: "/blog6.jpg",
// // // //       featured: true,
// // // //       link: "/blog/whatsapp-crm-integration"
// // // //     },
// // // //     {
// // // //       id: 7,
// // // //       category: "ERP",
// // // //       categoryColor: "#F59E0B",
// // // //       title: "ERP Implementation Pitfalls to Avoid in 2025",
// // // //       readTime: "10 min read",
// // // //       excerpt: "Lessons learned from 50+ ERP implementations across manufacturing, distribution, and services industries. Save time and money by avoiding these common mistakes.",
// // // //       author: "Robert Chen",
// // // //       authorRole: "ERP Practice Lead",
// // // //       date: "Feb 10, 2025",
// // // //       image: "/blog/erp-pitfalls.jpg",
// // // //       featured: false,
// // // //       link: "/blog/erp-pitfalls"
// // // //     },
// // // //     {
// // // //       id: 8,
// // // //       category: "Mobile",
// // // //       categoryColor: "#EC4899",
// // // //       title: "Mobile-First CRM: Why Your Field Teams Need a Native App",
// // // //       readTime: "6 min read",
// // // //       excerpt: "How mobile CRM apps are transforming field service, sales, and operations for businesses with remote teams. Real case studies from logistics and service companies.",
// // // //       author: "Lisa Zhang",
// // // //       authorRole: "Mobile Solutions Architect",
// // // //       date: "Feb 5, 2025",
// // // //       image: "/blog/mobile-crm.jpg",
// // // //       featured: false,
// // // //       link: "/blog/mobile-crm"
// // // //     },
// // // //     {
// // // //       id: 9,
// // // //       category: "SEO",
// // // //       categoryColor: "#3B82F6",
// // // //       title: "SEO for 2025: What's Changed and What Still Works",
// // // //       readTime: "8 min read",
// // // //       excerpt: "An updated look at SEO strategies that drive organic traffic for B2B and e-commerce businesses. Includes AI's impact on search and practical optimization tips.",
// // // //       author: "Mark Taylor",
// // // //       authorRole: "SEO Director",
// // // //       date: "Jan 28, 2025",
// // // //       image: "/blog/seo-2025.jpg",
// // // //       featured: false,
// // // //       link: "/blog/seo-2025"
// // // //     },
// // // //     {
// // // //       id: 10,
// // // //       category: "Web",
// // // //       categoryColor: "#6366F1",
// // // //       title: "Headless CMS vs Traditional CMS: Which is Right for Your Business?",
// // // //       readTime: "7 min read",
// // // //       excerpt: "A practical comparison to help you choose the right content management approach for your specific business needs, scalability requirements, and technical resources.",
// // // //       author: "Alex Thompson",
// // // //       authorRole: "Web Development Lead",
// // // //       date: "Jan 20, 2025",
// // // //       image: "/blog/headless-cms.jpg",
// // // //       featured: false,
// // // //       link: "/blog/headless-cms-comparison"
// // // //     },
// // // //     {
// // // //       id: 11,
// // // //       category: "Automation",
// // // //       categoryColor: G,
// // // //       title: "Workflow Automation: 5 Processes Every Business Should Automate First",
// // // //       readTime: "6 min read",
// // // //       excerpt: "Start your automation journey with these high-impact processes that save time, reduce errors, and improve customer satisfaction across your organization.",
// // // //       author: "Nina Patel",
// // // //       authorRole: "Automation Specialist",
// // // //       date: "Jan 15, 2025",
// // // //       image: "/blog/workflow-automation.jpg",
// // // //       featured: false,
// // // //       link: "/blog/workflow-automation"
// // // //     },
// // // //     {
// // // //       id: 12,
// // // //       category: "Strategy",
// // // //       categoryColor: P,
// // // //       title: "Digital Transformation Roadmap: A 12-Month Plan for Mid-Sized Businesses",
// // // //       readTime: "12 min read",
// // // //       excerpt: "A phased approach to digital transformation that minimizes disruption while maximizing ROI. Includes timelines, milestones, and success metrics for each phase.",
// // // //       author: "Michael Roberts",
// // // //       authorRole: "Senior Business Strategist",
// // // //       date: "Jan 8, 2025",
// // // //       image: "/blog/digital-transformation.jpg",
// // // //       featured: false,
// // // //       link: "/blog/digital-transformation-roadmap"
// // // //     }
// // // //   ];

// // // //   const filteredPosts = activeFilter === "All"
// // // //     ? blogPosts
// // // //     : blogPosts.filter(post => post.category === activeFilter);

// // // //   const featuredPosts = filteredPosts.filter(p => p.featured);
// // // //   const regularPosts = filteredPosts.filter(p => !p.featured);
// // // //   const displayedRegularPosts = regularPosts.slice(0, visiblePosts);
// // // //   const hasMorePosts = regularPosts.length > visiblePosts;

// // // //   const handleSubscribe = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setTimeout(() => {
// // // //       setLoading(false);
// // // //       setSubscribed(true);
// // // //       setEmail("");
// // // //     }, 1200);
// // // //   };

// // // //   const loadMore = () => {
// // // //     setVisiblePosts(prev => prev + 3);
// // // //   };

// // // //   // ─── Responsive helpers ───────────────────────────────────────────────────
// // // //   const sp = isMobile ? "48px 16px" : isTablet ? "72px 28px" : "96px 48px";

// // // //   const heroFontSize = isMobile
// // // //     ? "clamp(28px, 7vw, 36px)"
// // // //     : isTablet
// // // //     ? "clamp(36px, 5vw, 46px)"
// // // //     : "clamp(44px, 4vw, 60px)";

// // // //   const featuredCols = isMobile ? "1fr" : "repeat(2, 1fr)";
// // // //   const allCols = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";

// // // //   const baseInput: CSSProperties = {
// // // //     width: "100%",
// // // //     padding: isMobile ? "12px 14px" : "14px 16px",
// // // //     borderRadius: "12px",
// // // //     background: "rgba(255,255,255,0.05)",
// // // //     border: "1px solid rgba(255,255,255,0.1)",
// // // //     color: "#fff",
// // // //     fontSize: isMobile ? "14px" : "15px",
// // // //     fontFamily: "'Poppins', sans-serif",
// // // //     outline: "none",
// // // //     transition: "all 0.3s ease",
// // // //     boxSizing: "border-box" as const,
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <style>{`
// // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // // //         @keyframes float {
// // // //           0%, 100% { transform: translate(0, 0); }
// // // //           33%       { transform: translate(-18px, -18px); }
// // // //           66%       { transform: translate(18px, 18px); }
// // // //         }
// // // //         @keyframes fadeInScale {
// // // //           from { opacity: 0; transform: scale(0.92); }
// // // //           to   { opacity: 1; transform: scale(1); }
// // // //         }
// // // //         @keyframes pulse {
// // // //           0%, 100% { opacity: 0.6; }
// // // //           50% { opacity: 1; }
// // // //         }

// // // //         .filter-bar {
// // // //           position: sticky;
// // // //           top: ${navbarHeight}px;
// // // //           z-index: 40;
// // // //           background: ${N1};
// // // //           border-bottom: 1px solid rgba(255,255,255,0.06);
// // // //           isolation: isolate;
// // // //         }

// // // //         .filter-btn {
// // // //           padding: 8px 20px;
// // // //           border-radius: 100px;
// // // //           font-size: 13px;
// // // //           font-weight: 600;
// // // //           cursor: pointer;
// // // //           border: 1px solid rgba(255,255,255,0.1);
// // // //           white-space: nowrap;
// // // //           transition: all 0.25s ease;
// // // //           font-family: 'Poppins', sans-serif;
// // // //         }
// // // //         .filter-btn:hover {
// // // //           border-color: ${T};
// // // //           color: #fff;
// // // //         }
// // // //         .filter-btn.active {
// // // //           background: linear-gradient(135deg, ${T}, ${P});
// // // //           color: #000;
// // // //           border-color: transparent;
// // // //         }

// // // //         .filter-scroll {
// // // //           display: flex;
// // // //           gap: 10px;
// // // //           overflow-x: auto;
// // // //           padding: 4px 2px 6px;
// // // //           scrollbar-width: none;
// // // //           -ms-overflow-style: none;
// // // //         }
// // // //         .filter-scroll::-webkit-scrollbar { display: none; }

// // // //         .blog-card {
// // // //           background: rgba(255,255,255,0.02);
// // // //           border: 1px solid rgba(255,255,255,0.05);
// // // //           border-radius: 20px;
// // // //           overflow: hidden;
// // // //           transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
// // // //           height: 100%;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //         }
// // // //         @media (hover: hover) {
// // // //           .blog-card:hover {
// // // //             transform: translateY(-6px);
// // // //           }
// // // //         }

// // // //         .read-link {
// // // //           display: inline-flex;
// // // //           align-items: center;
// // // //           gap: 4px;
// // // //           font-weight: 600;
// // // //           font-size: 13px;
// // // //           text-decoration: none;
// // // //           transition: gap 0.25s ease;
// // // //         }
// // // //         @media (hover: hover) {
// // // //           .read-link:hover { gap: 8px; }
// // // //         }

// // // //         .sub-btn {
// // // //           padding: ${isMobile ? "12px 24px" : "14px 32px"};
// // // //           border-radius: 12px;
// // // //           border: none;
// // // //           font-weight: 700;
// // // //           font-size: ${isMobile ? "14px" : "15px"};
// // // //           cursor: pointer;
// // // //           transition: opacity 0.3s ease;
// // // //           white-space: nowrap;
// // // //           font-family: 'Poppins', sans-serif;
// // // //         }
// // // //         .sub-btn:hover:not(:disabled) { opacity: 0.88; }

// // // //         .load-more {
// // // //           padding: 12px 36px;
// // // //           border-radius: 100px;
// // // //           border: 1px solid ${T};
// // // //           background: transparent;
// // // //           color: ${T};
// // // //           font-size: 14px;
// // // //           font-weight: 600;
// // // //           cursor: pointer;
// // // //           transition: all 0.3s ease;
// // // //           font-family: 'Poppins', sans-serif;
// // // //         }
// // // //         .load-more:hover {
// // // //           background: ${T};
// // // //           color: #000;
// // // //         }

// // // //         .image-placeholder {
// // // //           background: linear-gradient(135deg, ${T}20, ${P}20);
// // // //           animation: pulse 2s infinite;
// // // //         }

// // // //         @media (max-width: 640px) {
// // // //           .hero-subtitle { font-size: 14px !important; }
// // // //           .section-title { font-size: 22px !important; }
// // // //           .card-title    { font-size: 16px !important; }
// // // //         }
// // // //       `}</style>

// // // //       {/* MODULE 1 — HERO */}
// // // //       <section style={{
// // // //         padding: isMobile ? "48px 16px 56px" : isTablet ? "90px 28px 72px" : "80px 48px 88px",
// // // //         background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
// // // //         position: "relative",
// // // //         overflow: "hidden",
// // // //         textAlign: "center",
// // // //       }}>
// // // //         {!isMobile && (
// // // //           <>
// // // //             <div style={{
// // // //               position: "absolute", width: "480px", height: "480px", borderRadius: "50%",
// // // //               background: `radial-gradient(circle, ${T}15 0%, transparent 70%)`,
// // // //               top: "-15%", right: "-4%", animation: "float 20s ease-in-out infinite", pointerEvents: "none",
// // // //             }} />
// // // //             <div style={{
// // // //               position: "absolute", width: "280px", height: "280px", borderRadius: "50%",
// // // //               background: `radial-gradient(circle, ${P}15 0%, transparent 70%)`,
// // // //               bottom: "-10%", left: "-3%", animation: "float 15s ease-in-out infinite reverse", pointerEvents: "none",
// // // //             }} />
// // // //           </>
// // // //         )}

// // // //         <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 2 }}>
// // // //           {/* Badge */}
// // // //           <div style={{
// // // //             display: "inline-flex", alignItems: "center", gap: "8px",
// // // //             background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
// // // //             borderRadius: "100px", padding: isMobile ? "6px 14px" : "8px 20px",
// // // //             marginBottom: isMobile ? "16px" : "24px",
// // // //           }}>
// // // //             <span style={{ width: isMobile ? "6px" : "8px", height: isMobile ? "6px" : "8px", borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}` }} />
// // // //             <span style={{ color: T, fontSize: isMobile ? "11px" : "13px", fontWeight: 600, letterSpacing: "0.1em" }}>INSIGHTS & RESOURCES</span>
// // // //           </div>

// // // //           <h1 style={{ fontSize: heroFontSize, fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? "14px" : "22px", color: "#fff" }}>
// // // //             Insights on{" "}
// // // //             <span style={{ background: `linear-gradient(135deg, ${T}, ${P})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// // // //               Technology, Automation
// // // //             </span>
// // // //             <br />& Digital Growth
// // // //           </h1>

// // // //           <p className="hero-subtitle" style={{
// // // //             color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "17px",
// // // //             lineHeight: 1.8, maxWidth: "680px", margin: "0 auto",
// // // //           }}>
// // // //             Practical, experience-based articles on CRM, ERP, web development, automation, and digital strategy — written for business owners
// // // //             and operations leaders in Canada, the USA, and the UK. Backed by 10+ years of delivery expertise from Nakshatra Namaha Creations.
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* MODULE 2 — FILTER BAR */}
// // // //       <div className="filter-bar" ref={filterRef}>
// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "16px 16px" : isTablet ? "20px 28px" : "20px 48px" }}>
// // // //           {isMobile ? (
// // // //             <div className="filter-scroll">
// // // //               {filters.map(f => (
// // // //                 <button
// // // //                   key={f}
// // // //                   className={`filter-btn${activeFilter === f ? " active" : ""}`}
// // // //                   onClick={() => {
// // // //                     setActiveFilter(f);
// // // //                     setVisiblePosts(6);
// // // //                   }}
// // // //                   style={{
// // // //                     background: activeFilter === f ? `linear-gradient(135deg, ${T}, ${P})` : "rgba(255,255,255,0.04)",
// // // //                     color: activeFilter === f ? "#000" : "rgba(255,255,255,0.7)",
// // // //                     flexShrink: 0,
// // // //                   }}
// // // //                 >
// // // //                   {f}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           ) : (
// // // //             <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
// // // //               {filters.map(f => (
// // // //                 <button
// // // //                   key={f}
// // // //                   className={`filter-btn${activeFilter === f ? " active" : ""}`}
// // // //                   onClick={() => {
// // // //                     setActiveFilter(f);
// // // //                     setVisiblePosts(6);
// // // //                   }}
// // // //                   style={{
// // // //                     background: activeFilter === f ? `linear-gradient(135deg, ${T}, ${P})` : "rgba(255,255,255,0.04)",
// // // //                     color: activeFilter === f ? "#000" : "rgba(255,255,255,0.7)",
// // // //                   }}
// // // //                 >
// // // //                   {f}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* MODULE 3 — ARTICLES */}
// // // //       <section style={{ padding: sp, background: N2 }}>
// // // //         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

// // // //           {/* Section header */}
// // // //           <div style={{
// // // //             display: "flex", justifyContent: "space-between", alignItems: "center",
// // // //             marginBottom: isMobile ? "20px" : "28px",
// // // //             flexWrap: "wrap", gap: "12px",
// // // //           }}>
// // // //             <h2 className="section-title" style={{
// // // //               fontSize: isMobile ? "22px" : isTablet ? "26px" : "30px",
// // // //               fontWeight: 800, color: "#fff",
// // // //             }}>
// // // //               Featured <span style={{ color: T }}>Articles</span>
// // // //             </h2>
// // // //             <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
// // // //               {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
// // // //             </span>
// // // //           </div>

// // // //           {/* Featured Posts */}
// // // //           {featuredPosts.length > 0 && (
// // // //             <div style={{
// // // //               display: "grid", gridTemplateColumns: featuredCols,
// // // //               gap: isMobile ? "16px" : "22px", marginBottom: isMobile ? "32px" : "48px",
// // // //             }}>
// // // //               {featuredPosts.slice(0, 2).map(post => (
// // // //                 <ArticleCard
// // // //                   key={post.id}
// // // //                   post={post}
// // // //                   hovered={hoveredCard === post.id}
// // // //                   onEnter={() => setHoveredCard(post.id)}
// // // //                   onLeave={() => setHoveredCard(null)}
// // // //                   isMobile={isMobile}
// // // //                   featured
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //           )}

// // // //           {/* Regular Posts */}
// // // //           {displayedRegularPosts.length > 0 && (
// // // //             <>
// // // //               <h3 style={{
// // // //                 fontSize: isMobile ? "18px" : "20px",
// // // //                 fontWeight: 700, color: "#fff", marginBottom: "20px",
// // // //               }}>
// // // //                 Latest Articles
// // // //               </h3>
// // // //               <div style={{
// // // //                 display: "grid", gridTemplateColumns: allCols,
// // // //                 gap: isMobile ? "16px" : "20px",
// // // //               }}>
// // // //                 {displayedRegularPosts.map(post => (
// // // //                   <ArticleCard
// // // //                     key={post.id}
// // // //                     post={post}
// // // //                     hovered={hoveredCard === post.id}
// // // //                     onEnter={() => setHoveredCard(post.id)}
// // // //                     onLeave={() => setHoveredCard(null)}
// // // //                     isMobile={isMobile}
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             </>
// // // //           )}

// // // //           {/* Load More */}
// // // //           {hasMorePosts && (
// // // //             <div style={{ textAlign: "center", marginTop: "40px" }}>
// // // //               <button className="load-more" onClick={loadMore}>
// // // //                 Load More Articles
// // // //               </button>
// // // //             </div>
// // // //           )}

// // // //           {/* No results */}
// // // //           {filteredPosts.length === 0 && (
// // // //             <div style={{
// // // //               textAlign: "center", padding: "60px 20px",
// // // //               background: "rgba(255,255,255,0.02)", borderRadius: "20px",
// // // //             }}>
// // // //               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px" }}>
// // // //                 No articles found in this category. Check back soon for new content!
// // // //               </p>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>

// // // //       {/* MODULE 4 — NEWSLETTER */}
// // // //       <section style={{
// // // //         padding: sp,
// // // //         background: `linear-gradient(135deg, ${N1} 0%, ${N0} 100%)`,
// // // //         position: "relative", overflow: "hidden",
// // // //       }}>
// // // //         {!isMobile && (
// // // //           <div style={{
// // // //             position: "absolute", width: "380px", height: "380px", borderRadius: "50%",
// // // //             background: `radial-gradient(circle, ${T}10 0%, transparent 70%)`,
// // // //             top: "-20%", right: "-4%", pointerEvents: "none",
// // // //           }} />
// // // //         )}

// // // //         <div style={{
// // // //           maxWidth: "560px", margin: "0 auto",
// // // //           position: "relative", zIndex: 2, textAlign: "center",
// // // //         }}>
// // // //           <div style={{
// // // //             display: "inline-flex", alignItems: "center", gap: "8px",
// // // //             background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)",
// // // //             borderRadius: "100px", padding: "7px 18px", marginBottom: "20px",
// // // //           }}>
// // // //             <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: T }} />
// // // //             <span style={{ color: T, fontSize: "12px", fontWeight: 600 }}>STAY UPDATED</span>
// // // //           </div>

// // // //           <h2 style={{
// // // //             fontSize: isMobile ? "22px" : isTablet ? "26px" : "30px",
// // // //             fontWeight: 800, color: "#fff", marginBottom: "14px",
// // // //           }}>
// // // //             Get Insights Delivered to Your <span style={{ color: T }}>Inbox</span>
// // // //           </h2>

// // // //           <p style={{
// // // //             color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "13px" : "15px",
// // // //             lineHeight: 1.75, marginBottom: "28px",
// // // //           }}>
// // // //             Monthly articles on CRM, ERP, automation, and digital growth — for business leaders in Canada, USA, and UK.
// // // //           </p>

// // // //           {subscribed ? (
// // // //             <div style={{
// // // //               background: "rgba(0,201,167,0.08)", border: `1px solid ${T}`,
// // // //               borderRadius: "16px", padding: "24px", animation: "fadeInScale 0.5s ease",
// // // //             }}>
// // // //               <div style={{ fontSize: "36px", marginBottom: "10px" }}>🎉</div>
// // // //               <h3 style={{ color: T, fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>Subscribed Successfully!</h3>
// // // //               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
// // // //                 Thank you for joining. You'll receive insights monthly.
// // // //               </p>
// // // //             </div>
// // // //           ) : (
// // // //             <form
// // // //               onSubmit={handleSubscribe}
// // // //               style={{
// // // //                 display: "flex",
// // // //                 flexDirection: isMobile ? "column" : "row",
// // // //                 gap: "10px",
// // // //                 maxWidth: "480px",
// // // //                 margin: "0 auto",
// // // //               }}
// // // //             >
// // // //               <input
// // // //                 type="email"
// // // //                 required
// // // //                 placeholder="Your email address"
// // // //                 style={{ ...baseInput, flex: 1, border: `1px solid ${T}40` }}
// // // //                 value={email}
// // // //                 onChange={e => setEmail(e.target.value)}
// // // //                 onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}30`; }}
// // // //                 onBlur={e => { e.target.style.borderColor = `${T}40`; e.target.style.boxShadow = "none"; }}
// // // //               />
// // // //               <button
// // // //                 type="submit"
// // // //                 disabled={loading}
// // // //                 className="sub-btn"
// // // //                 style={{
// // // //                   background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg, ${T}, ${P})`,
// // // //                   color: "#000",
// // // //                   cursor: loading ? "wait" : "pointer",
// // // //                 }}
// // // //               >
// // // //                 {loading ? "Subscribing…" : "Subscribe →"}
// // // //               </button>
// // // //             </form>
// // // //           )}

// // // //           <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", marginTop: "16px" }}>
// // // //             No spam. Unsubscribe anytime.
// // // //           </p>
// // // //         </div>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // }

// // // // // ─── Reusable Article Card ────────────────────────────────────────────────────
// // // // function ArticleCard({
// // // //   post, hovered, onEnter, onLeave, isMobile, featured = false,
// // // // }: {
// // // //   post: BlogPost;
// // // //   hovered: boolean;
// // // //   onEnter: () => void;
// // // //   onLeave: () => void;
// // // //   isMobile: boolean;
// // // //   featured?: boolean;
// // // // }) {
// // // //   const N1 = "#030B18";
// // // //   const P  = "#8B5CF6";

// // // //   const imageHeight = featured ? (isMobile ? "180px" : "220px") : "160px";

// // // //   return (
// // // //     <Link href={post.link} style={{ textDecoration: "none" }}>
// // // //       <div
// // // //         className="blog-card"
// // // //         onMouseEnter={onEnter}
// // // //         onMouseLeave={onLeave}
// // // //         style={{
// // // //           borderColor: hovered ? post.categoryColor : "rgba(255,255,255,0.05)",
// // // //           boxShadow: hovered ? `0 16px 36px ${post.categoryColor}22` : "none",
// // // //         }}
// // // //       >
// // // //         {/* Image area with gradient overlay */}
// // // //         <div style={{
// // // //           height: imageHeight,
// // // //           background: `linear-gradient(135deg, ${post.categoryColor}30, ${N1})`,
// // // //           position: "relative",
// // // //           overflow: "hidden",
// // // //         }}>
// // // //           <div style={{
// // // //             position: "absolute",
// // // //             inset: 0,
// // // //             background: `url('${post.image}') center/cover`,
// // // //             opacity: 0.9,
// // // //             transition: "transform 0.5s ease",
// // // //             transform: hovered ? "scale(1.05)" : "scale(1)",
// // // //           }} />
// // // //           <div style={{
// // // //             position: "absolute",
// // // //             inset: 0,
// // // //             background: `linear-gradient(to top, ${N1}80, transparent)`,
// // // //           }} />
          
// // // //           {/* Category or read time badge */}
// // // //           <span style={{
// // // //             position: "absolute",
// // // //             ...(featured ? { bottom: "12px", left: "12px" } : { top: "12px", right: "12px" }),
// // // //             background: "rgba(0,0,0,0.6)",
// // // //             backdropFilter: "blur(8px)",
// // // //             padding: "4px 12px",
// // // //             borderRadius: "100px",
// // // //             border: `1px solid ${post.categoryColor}`,
// // // //             color: "#fff",
// // // //             fontSize: "11px",
// // // //             fontWeight: 600,
// // // //             zIndex: 2,
// // // //           }}>
// // // //             {featured ? post.category : post.readTime}
// // // //           </span>
// // // //         </div>

// // // //         {/* Card body */}
// // // //         <div style={{ padding: isMobile ? "16px" : "20px", flex: 1, display: "flex", flexDirection: "column" }}>
// // // //           <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
// // // //             <span style={{
// // // //               padding: "4px 12px",
// // // //               background: `${post.categoryColor}1a`,
// // // //               border: `1px solid ${post.categoryColor}40`,
// // // //               borderRadius: "100px",
// // // //               color: post.categoryColor,
// // // //               fontSize: "11px", fontWeight: 600,
// // // //             }}>{post.category}</span>
// // // //             {featured && (
// // // //               <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{post.readTime}</span>
// // // //             )}
// // // //           </div>

// // // //           <h3 className="card-title" style={{
// // // //             fontSize: isMobile ? "16px" : featured ? "20px" : "18px",
// // // //             fontWeight: 700, color: "#fff",
// // // //             marginBottom: "12px", lineHeight: 1.4,
// // // //           }}>
// // // //             {post.title}
// // // //           </h3>

// // // //           <p style={{
// // // //             color: "rgba(255,255,255,0.6)",
// // // //             fontSize: isMobile ? "13px" : "14px",
// // // //             lineHeight: 1.6,
// // // //             marginBottom: "20px",
// // // //             display: "-webkit-box",
// // // //             WebkitLineClamp: featured ? 4 : 3,
// // // //             WebkitBoxOrient: "vertical" as const,
// // // //             overflow: "hidden",
// // // //             flex: 1,
// // // //           }}>
// // // //             {post.excerpt}
// // // //           </p>

// // // //           <div style={{ 
// // // //             display: "flex", 
// // // //             justifyContent: "space-between", 
// // // //             alignItems: "center",
// // // //             marginTop: "auto",
// // // //             borderTop: "1px solid rgba(255,255,255,0.05)",
// // // //             paddingTop: "16px"
// // // //           }}>
// // // //             {featured ? (
// // // //               <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// // // //                 <div style={{
// // // //                   width: "36px", height: "36px", borderRadius: "50%",
// // // //                   background: `linear-gradient(135deg, ${post.categoryColor}, ${P})`,
// // // //                   display: "flex", alignItems: "center", justifyContent: "center",
// // // //                   color: "#fff", fontSize: "14px", fontWeight: 700,
// // // //                 }}>
// // // //                   {post.author.charAt(0)}
// // // //                 </div>
// // // //                 <div>
// // // //                   <div style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>{post.author}</div>
// // // //                   <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{post.authorRole} • {post.date}</div>
// // // //                 </div>
// // // //               </div>
// // // //             ) : (
// // // //               <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>
// // // //                 {post.author} • {post.date}
// // // //               </div>
// // // //             )}

// // // //             <span className="read-link" style={{ color: post.categoryColor }}>
// // // //               Read <span style={{ fontSize: "16px" }}>→</span>
// // // //             </span>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </Link>
// // // //   );
// // // // }




// // // "use client";

// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import Navbar from "../components/Navbar";

// // // const T  = "#00C9A7";
// // // const P  = "#8B5CF6";
// // // const G  = "#10B981";
// // // const N0 = "#010812";
// // // const N1 = "#030B18";
// // // const N2 = "#061425";

// // // interface BlogPost {
// // //   id: number;
// // //   category: string;
// // //   color: string;
// // //   title: string;
// // //   readTime: string;
// // //   excerpt: string;
// // //   author: string;
// // //   authorRole: string;
// // //   date: string;
// // //   image: string;
// // //   featured: boolean;
// // //   link: string;
// // // }

// // // const POSTS: BlogPost[] = [
// // //   {
// // //     id: 1, category: "CRM", color: T,
// // //     title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
// // //     readTime: "8 min read",
// // //     excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
// // //     author: "Sarah Chen", authorRole: "CRM Solutions Architect", date: "Mar 15, 2025",
// // //     image: "/blog1.jpg", featured: true, link: "/blog/crm-implementation-guide",
// // //   },
// // //   {
// // //     id: 2, category: "Strategy", color: P,
// // //     title: "ERP vs CRM: Which Does Your Business Need First?",
// // //     readTime: "5 min read",
// // //     excerpt: "A framework for deciding which system to build first — and exactly when you need both running together. Learn from real-world implementations across manufacturing and service industries.",
// // //     author: "Michael Roberts", authorRole: "Senior Business Strategist", date: "Mar 10, 2025",
// // //     image: "/blog2.png", featured: true, link: "/blog/erp-vs-crm",
// // //   },
// // //   {
// // //     id: 3, category: "CRM", color: T,
// // //     title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
// // //     readTime: "7 min read",
// // //     excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
// // //     author: "David Kumar", authorRole: "Technical Director", date: "Mar 5, 2025",
// // //     image: "/blog3.jpg", featured: true, link: "/blog/custom-crm-cost",
// // //   },
// // //   {
// // //     id: 4, category: "Compliance", color: "#FF6B6B",
// // //     title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
// // //     readTime: "9 min read",
// // //     excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",
// // //     author: "Emma Watson", authorRole: "Data Protection Officer", date: "Feb 28, 2025",
// // //     image: "/blog4.jpg", featured: true, link: "/blog/gdpr-pipeda-guide",
// // //   },
// // //   {
// // //     id: 5, category: "Automation", color: G,
// // //     title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
// // //     readTime: "6 min read",
// // //     excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",
// // //     author: "James Wilson", authorRole: "Marketing Automation Lead", date: "Feb 20, 2025",
// // //     image: "/blog5.jpg", featured: true, link: "/blog/sales-automation",
// // //   },
// // //   {
// // //     id: 6, category: "CRM", color: T,
// // //     title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
// // //     readTime: "7 min read",
// // //     excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
// // //     author: "Priya Patel", authorRole: "Digital Transformation Lead", date: "Feb 15, 2025",
// // //     image: "/blog6.jpg", featured: true, link: "/blog/whatsapp-crm-integration",
// // //   },
// // //   {
// // //     id: 7, category: "ERP", color: "#F59E0B",
// // //     title: "ERP Implementation Pitfalls to Avoid in 2025",
// // //     readTime: "10 min read",
// // //     excerpt: "Lessons learned from 50+ ERP implementations across manufacturing, distribution, and services industries.",
// // //     author: "Robert Chen", authorRole: "ERP Practice Lead", date: "Feb 10, 2025",
// // //     image: "/blog1.jpg", featured: false, link: "/blog/erp-pitfalls",
// // //   },
// // //   {
// // //     id: 8, category: "Mobile", color: "#EC4899",
// // //     title: "Mobile-First CRM: Why Your Field Teams Need a Native App",
// // //     readTime: "6 min read",
// // //     excerpt: "How mobile CRM apps are transforming field service, sales, and operations for businesses with remote teams.",
// // //     author: "Lisa Zhang", authorRole: "Mobile Solutions Architect", date: "Feb 5, 2025",
// // //     image: "/blog2.png", featured: false, link: "/blog/mobile-crm",
// // //   },
// // //   {
// // //     id: 9, category: "SEO", color: "#3B82F6",
// // //     title: "SEO for 2025: What's Changed and What Still Works",
// // //     readTime: "8 min read",
// // //     excerpt: "An updated look at SEO strategies that drive organic traffic for B2B and e-commerce businesses.",
// // //     author: "Mark Taylor", authorRole: "SEO Director", date: "Jan 28, 2025",
// // //     image: "/blog3.jpg", featured: false, link: "/blog/seo-2025",
// // //   },
// // //   {
// // //     id: 10, category: "Web", color: "#6366F1",
// // //     title: "Headless CMS vs Traditional CMS: Which is Right for Your Business?",
// // //     readTime: "7 min read",
// // //     excerpt: "A practical comparison to help you choose the right content management approach for your needs.",
// // //     author: "Alex Thompson", authorRole: "Web Development Lead", date: "Jan 20, 2025",
// // //     image: "/blog4.jpg", featured: false, link: "/blog/headless-cms-comparison",
// // //   },
// // //   {
// // //     id: 11, category: "Automation", color: G,
// // //     title: "Workflow Automation: 5 Processes Every Business Should Automate First",
// // //     readTime: "6 min read",
// // //     excerpt: "Start your automation journey with these high-impact processes that save time and reduce errors.",
// // //     author: "Nina Patel", authorRole: "Automation Specialist", date: "Jan 15, 2025",
// // //     image: "/blog5.jpg", featured: false, link: "/blog/workflow-automation",
// // //   },
// // //   {
// // //     id: 12, category: "Strategy", color: P,
// // //     title: "Digital Transformation Roadmap: A 12-Month Plan for Mid-Sized Businesses",
// // //     readTime: "12 min read",
// // //     excerpt: "A phased approach to digital transformation that minimises disruption while maximising ROI.",
// // //     author: "Michael Roberts", authorRole: "Senior Business Strategist", date: "Jan 8, 2025",
// // //     image: "/blog6.jpg", featured: false, link: "/blog/digital-transformation-roadmap",
// // //   },
// // // ];

// // // const FILTERS = ["All","CRM","ERP","Web","Mobile","Automation","SEO","Strategy","Compliance"];

// // // export default function BlogPage() {
// // //   const [active, setActive]     = useState("All");
// // //   const [email, setEmail]       = useState("");
// // //   const [subscribed, setSub]    = useState(false);
// // //   const [loading, setLoading]   = useState(false);
// // //   const [hovered, setHovered]   = useState<number|null>(null);
// // //   const [showMore, setShowMore] = useState(6);

// // //   const filtered = active === "All" ? POSTS : POSTS.filter(p => p.category === active);
// // //   const featured = filtered.filter(p => p.featured);
// // //   const regular  = filtered.filter(p => !p.featured);
// // //   const shown    = regular.slice(0, showMore);
// // //   const hasMore  = regular.length > showMore;

// // //   const handleSub = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setTimeout(() => { setLoading(false); setSub(true); setEmail(""); }, 1400);
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <style>{`
// // //         /* ─── Reset ─────────────────────────────────────── */
// // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// // //         /* ─── Animations ────────────────────────────────── */
// // //         @keyframes floatA  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-22px,-22px)} }
// // //         @keyframes floatB  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(18px,18px)} }
// // //         @keyframes fadeUp  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
// // //         @keyframes popIn   { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }
// // //         @keyframes pulse   { 0%,100%{transform:scale(1)} 50%{transform:scale(1.5)} }

// // //         /* ─── HERO ──────────────────────────────────────── */
// // //         .bh { padding:60px 20px 70px; text-align:center; position:relative; overflow:hidden;
// // //                background:linear-gradient(135deg,${N0} 0%,#041628 55%,${N0} 100%); }
// // //         .bh-g1 { position:absolute;width:480px;height:480px;border-radius:50%;pointer-events:none;
// // //                   background:radial-gradient(circle,${T}14 0%,transparent 70%);
// // //                   top:-18%;right:-5%;animation:floatA 20s ease-in-out infinite; }
// // //         .bh-g2 { position:absolute;width:300px;height:300px;border-radius:50%;pointer-events:none;
// // //                   background:radial-gradient(circle,${P}12 0%,transparent 70%);
// // //                   bottom:-12%;left:-4%;animation:floatB 16s ease-in-out infinite; }
// // //         .bh-grid { position:absolute;inset:0;pointer-events:none;
// // //                    background-image:linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
// // //                                     linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px);
// // //                    background-size:60px 60px; }
// // //         .bh-in { max-width:860px;margin:0 auto;position:relative;z-index:2;animation:fadeUp .7s ease both; }
// // //         .bh-badge { display:inline-flex;align-items:center;gap:8px;margin-bottom:24px;
// // //                     background:rgba(0,201,167,.08);border:1px solid rgba(0,201,167,.25);
// // //                     border-radius:100px;padding:7px 20px; }
// // //         .bh-dot   { width:8px;height:8px;border-radius:50%;background:${T};display:inline-block;
// // //                     box-shadow:0 0 10px ${T};animation:pulse 2s ease-in-out infinite; }
// // //         .bh-bl    { color:${T};font-size:11px;font-weight:700;letter-spacing:.12em; }
// // //         .bh-h1    { font-size:clamp(28px,7vw,58px);font-weight:900;line-height:1.12;color:#fff;
// // //                     letter-spacing:-.02em;margin-bottom:20px; }
// // //         .bh-grad  { background:linear-gradient(135deg,${T},${P});
// // //                     -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
// // //         .bh-sub   { color:rgba(255,255,255,.58);font-size:clamp(14px,2vw,17px);
// // //                     line-height:1.82;max-width:700px;margin:0 auto; }
// // //         .bh-stats { display:flex;justify-content:center;gap:clamp(20px,5vw,40px);
// // //                     margin-top:40px;flex-wrap:wrap; }
// // //         .bh-sn { font-size:26px;font-weight:800;color:${T}; }
// // //         .bh-sl { font-size:12px;color:rgba(255,255,255,.4);margin-top:2px; }

// // //         /* ─── FILTER BAR ────────────────────────────────────────────────────────
// // //            THE FIX:
// // //            • .bfbar  → NO overflow property at all (default is visible)
// // //            • .bflist → overflow-x:auto  +  overflow-y:visible
// // //                        This is the ONLY element that scrolls.
// // //            • .bfbtn  → flex-shrink:0  so buttons never collapse or hide
// // //            Any ancestor with overflow:hidden would break this, so we
// // //            explicitly set overflow:visible on .bfbar.
// // //         ──────────────────────────────────────────────────────────────────────── */
// // //         .bfbar {
// // //           position: sticky;
// // //           top: 0;
// // //           z-index: 40;
// // //           background: ${N1};
// // //           border-bottom: 1px solid rgba(255,255,255,.07);
// // //           /* CRITICAL: must NOT be overflow:hidden */
// // //           overflow: visible;
// // //         }
// // //         .bflist {
// // //           display: flex;
// // //           flex-wrap: nowrap;           /* single row always */
// // //           align-items: center;
// // //           gap: 8px;
// // //           overflow-x: auto;            /* scroll horizontally */
// // //           overflow-y: visible;
// // //           -webkit-overflow-scrolling: touch;
// // //           scrollbar-width: none;
// // //           -ms-overflow-style: none;
// // //           padding: 12px 16px 14px 16px;
// // //           /* No max-width here — let it be full width so scroll works */
// // //         }
// // //         .bflist::-webkit-scrollbar { display: none; }

// // //         /* On wide screens: wrap & center instead of scroll */
// // //         @media (min-width: 900px) {
// // //           .bflist {
// // //             flex-wrap: wrap;
// // //             overflow-x: visible;
// // //             overflow-y: visible;
// // //             justify-content: center;
// // //             max-width: 1200px;
// // //             margin: 0 auto;
// // //             padding: 16px 48px 18px;
// // //             gap: 10px;
// // //           }
// // //         }

// // //         .bfbtn {
// // //           /* CRITICAL: flex-shrink:0 means button width is NEVER reduced */
// // //           flex-shrink: 0;
// // //           white-space: nowrap;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           padding: 8px 18px;
// // //           border-radius: 100px;
// // //           font-size: 13px;
// // //           font-weight: 600;
// // //           font-family: 'Poppins', sans-serif;
// // //           cursor: pointer;
// // //           border: 1px solid rgba(255,255,255,.12);
// // //           background: rgba(255,255,255,.04);
// // //           color: rgba(255,255,255,.65);
// // //           transition: border-color .25s, color .25s, background .25s;
// // //         }
// // //         .bfbtn:hover  { border-color:${T}; color:#fff; }
// // //         .bfbtn.active {
// // //           background: linear-gradient(135deg,${T},${P}) !important;
// // //           color: #000 !important;
// // //           border-color: transparent !important;
// // //           font-weight: 700;
// // //         }

// // //         /* ─── ARTICLES ──────────────────────────────────── */
// // //         .ba { padding:clamp(40px,6vw,80px) clamp(16px,4vw,48px); background:${N2}; }
// // //         .ba-in { max-width:1200px; margin:0 auto; }
// // //         .ba-hd { display:flex;justify-content:space-between;align-items:flex-end;
// // //                  flex-wrap:wrap;gap:12px;margin-bottom:clamp(20px,3vw,32px); }
// // //         .ba-title { font-size:clamp(22px,4vw,30px);font-weight:800;color:#fff;line-height:1.2; }
// // //         .ba-count { background:rgba(0,201,167,.1);border:1px solid rgba(0,201,167,.2);
// // //                     border-radius:100px;padding:5px 14px;color:${T};font-size:12px;font-weight:600; }

// // //         /* Featured grid: 1 col → 2 col */
// // //         .ba-featured { display:grid;grid-template-columns:1fr;gap:16px;margin-bottom:clamp(32px,5vw,52px); }
// // //         @media (min-width:640px) { .ba-featured { grid-template-columns:repeat(2,1fr);gap:22px; } }

// // //         /* Regular grid: 1 → 2 → 3 col */
// // //         .ba-regular { display:grid;grid-template-columns:1fr;gap:16px; }
// // //         @media (min-width:600px)  { .ba-regular { grid-template-columns:repeat(2,1fr);gap:18px; } }
// // //         @media (min-width:1024px) { .ba-regular { grid-template-columns:repeat(3,1fr);gap:20px; } }

// // //         .ba-lath { font-size:clamp(18px,3vw,22px);font-weight:700;color:#fff;
// // //                    margin-bottom:20px;display:flex;align-items:center;gap:10px; }
// // //         .ba-latb { width:4px;height:22px;background:linear-gradient(${T},${P});
// // //                    border-radius:4px;flex-shrink:0; }

// // //         /* ─── CARD ──────────────────────────────────────── */
// // //         .bc { display:flex;flex-direction:column;height:100%;text-decoration:none;
// // //                background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);
// // //                border-radius:20px;overflow:hidden;
// // //                transition:transform .32s ease,border-color .32s ease,box-shadow .32s ease; }
// // //         @media (hover:hover) {
// // //           .bc:hover { transform:translateY(-6px); }
// // //           .bc:hover .bc-thumb { transform:scale(1.05); }
// // //         }
// // //         .bc-iw   { position:relative;overflow:hidden;flex-shrink:0; }
// // //         .bc-thumb{ position:absolute;inset:0;background-size:cover;background-position:center;
// // //                    opacity:.88;transition:transform .5s ease; }
// // //         .bc-fade { position:absolute;inset:0;
// // //                    background:linear-gradient(to top,${N1}95 0%,transparent 55%); }
// // //         .bc-tag  { position:absolute;z-index:2;padding:4px 12px;border-radius:100px;
// // //                    background:rgba(5,15,30,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
// // //                    color:#fff;font-size:11px;font-weight:700;letter-spacing:.03em; }
// // //         .bc-body { padding:16px;flex:1;display:flex;flex-direction:column; }
// // //         @media (min-width:768px) { .bc-body { padding:20px 22px; } }
// // //         .bc-cat  { display:inline-flex;align-items:center;padding:3px 11px;border-radius:100px;
// // //                    font-size:11px;font-weight:700;letter-spacing:.04em; }
// // //         .bc-meta { display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:12px; }
// // //         .bc-rt   { color:rgba(255,255,255,.35);font-size:11px; }
// // //         .bc-ttl  { font-size:clamp(15px,2.5vw,19px);font-weight:700;color:#fff;
// // //                    line-height:1.4;margin-bottom:10px;letter-spacing:-.01em; }
// // //         .bc-ttls { font-size:clamp(14px,2vw,17px) !important; }
// // //         .bc-exc  { color:rgba(255,255,255,.52);font-size:14px;line-height:1.65;
// // //                    margin-bottom:18px;flex:1;
// // //                    display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden; }
// // //         .bc-ft   { display:flex;justify-content:space-between;align-items:center;
// // //                    flex-wrap:wrap;gap:8px;
// // //                    border-top:1px solid rgba(255,255,255,.06);padding-top:14px;margin-top:auto; }
// // //         .bc-avr  { display:flex;align-items:center;gap:10px;min-width:0; }
// // //         .bc-av   { width:34px;height:34px;border-radius:50%;flex-shrink:0;
// // //                    display:flex;align-items:center;justify-content:center;
// // //                    color:#fff;font-size:13px;font-weight:800; }
// // //         .bc-an   { color:#fff;font-size:12px;font-weight:600; }
// // //         .bc-as   { color:rgba(255,255,255,.38);font-size:11px; }
// // //         .bc-ap   { color:rgba(255,255,255,.35);font-size:11px;line-height:1.5; }
// // //         .bc-rl   { display:inline-flex;align-items:center;gap:5px;font-weight:600;
// // //                    font-size:13px;text-decoration:none;flex-shrink:0;transition:gap .2s; }
// // //         @media (hover:hover) { .bc-rl:hover { gap:10px; } }

// // //         .b-loadmore { padding:12px 40px;border-radius:100px;border:1.5px solid ${T};
// // //                       background:transparent;color:${T};font-size:14px;font-weight:600;
// // //                       cursor:pointer;font-family:'Poppins',sans-serif;transition:all .3s; }
// // //         .b-loadmore:hover { background:${T};color:#000;box-shadow:0 0 24px ${T}40; }

// // //         .b-empty { text-align:center;padding:64px 24px;
// // //                    background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);
// // //                    border-radius:20px; }

// // //         /* ─── NEWSLETTER ────────────────────────────────── */
// // //         .bnl { padding:clamp(48px,6vw,80px) clamp(16px,4vw,48px);position:relative;overflow:hidden;
// // //                background:linear-gradient(135deg,${N1} 0%,${N0} 100%); }
// // //         .bnl-gw { position:absolute;width:380px;height:380px;border-radius:50%;pointer-events:none;
// // //                   background:radial-gradient(circle,${T}10 0%,transparent 70%);top:-25%;right:-5%; }
// // //         .bnl-in { max-width:560px;margin:0 auto;position:relative;z-index:2;text-align:center; }
// // //         .bnl-badge { display:inline-flex;align-items:center;gap:8px;margin-bottom:20px;
// // //                      background:rgba(0,201,167,.08);border:1px solid rgba(0,201,167,.22);
// // //                      border-radius:100px;padding:7px 18px; }
// // //         .bnl-dot { width:6px;height:6px;border-radius:50%;background:${T};display:inline-block; }
// // //         .bnl-bl  { color:${T};font-size:11px;font-weight:700;letter-spacing:.1em; }
// // //         .bnl-h2  { font-size:clamp(22px,4vw,32px);font-weight:800;color:#fff;
// // //                    line-height:1.18;margin-bottom:14px;letter-spacing:-.01em; }
// // //         .bnl-sub { color:rgba(255,255,255,.55);font-size:clamp(13px,2vw,15px);
// // //                    line-height:1.8;margin-bottom:30px; }
// // //         .bnl-form { display:flex;flex-direction:column;gap:10px;max-width:480px;margin:0 auto; }
// // //         @media (min-width:540px) { .bnl-form { flex-direction:row; } }
// // //         .bnl-inp { flex:1;padding:13px 16px;border-radius:12px;width:100%;
// // //                    background:rgba(255,255,255,.05);border:1px solid ${T}40;
// // //                    color:#fff;font-size:15px;font-family:'Poppins',sans-serif;
// // //                    outline:none;transition:all .3s; }
// // //         .bnl-inp:focus { border-color:${T};box-shadow:0 0 0 3px ${T}25; }
// // //         .bnl-inp::placeholder { color:rgba(255,255,255,.35); }
// // //         .bnl-btn { padding:13px 28px;border-radius:12px;border:none;cursor:pointer;
// // //                    background:linear-gradient(135deg,${T},${P});
// // //                    color:#000;font-weight:700;font-size:15px;white-space:nowrap;
// // //                    font-family:'Poppins',sans-serif;transition:opacity .3s,transform .2s; }
// // //         .bnl-btn:hover:not(:disabled) { opacity:.88;transform:translateY(-1px); }
// // //         .bnl-btn:disabled { opacity:.5;cursor:wait; }
// // //         .bnl-fine { color:rgba(255,255,255,.25);font-size:11px;margin-top:16px; }
// // //         .bnl-ok   { background:rgba(0,201,167,.07);border:1px solid ${T}60;
// // //                     border-radius:18px;padding:28px 24px;animation:popIn .5s ease; }
// // //         .bnl-ok-t { color:${T};font-size:18px;font-weight:700;margin-bottom:8px; }
// // //         .bnl-ok-s { color:rgba(255,255,255,.5);font-size:13px; }
// // //       `}</style>

// // //       {/* ══ HERO ════════════════════════════════════════════════════ */}
// // //       <section className="bh">
// // //         <div className="bh-g1" />
// // //         <div className="bh-g2" />
// // //         <div className="bh-grid" />
// // //         <div className="bh-in">
// // //           <div className="bh-badge">
// // //             <span className="bh-dot" />
// // //             <span className="bh-bl">INSIGHTS &amp; RESOURCES</span>
// // //           </div>
// // //           <h1 className="bh-h1">
// // //             Insights on{" "}
// // //             <span className="bh-grad">Technology, Automation</span>
// // //             <br />&amp; Digital Growth
// // //           </h1>
// // //           <p className="bh-sub">
// // //             Practical, experience-based articles on CRM, ERP, web development,
// // //             automation, and digital strategy — written for business owners and
// // //             operations leaders in Canada, the USA, and the UK. Backed by{" "}
// // //             <strong style={{ color: T }}>10+ years</strong> of delivery expertise
// // //             from Nakshatra Namaha Creations.
// // //           </p>
// // //           <div className="bh-stats">
// // //             {[["12+","Articles Published"],["9","Topic Categories"],["10+","Years of Expertise"]].map(([n,l]) => (
// // //               <div key={l}>
// // //                 <div className="bh-sn">{n}</div>
// // //                 <div className="bh-sl">{l}</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ══ FILTER BAR ══════════════════════════════════════════════ */}
// // //       {/*
// // //         ARCHITECTURE:
// // //         .bfbar  = sticky wrapper, overflow:visible (never clips children)
// // //         .bflist = the actual scrollable row, overflow-x:auto
// // //         .bfbtn  = flex-shrink:0 so every button keeps its full width
// // //       */}
// // //       <div className="bfbar">
// // //         <div className="bflist">
// // //           {FILTERS.map(f => (
// // //             <button
// // //               key={f}
// // //               className={`bfbtn${active === f ? " active" : ""}`}
// // //               onClick={() => { setActive(f); setShowMore(6); }}
// // //               aria-pressed={active === f}
// // //             >
// // //               {f}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* ══ ARTICLES ════════════════════════════════════════════════ */}
// // //       <section className="ba">
// // //         <div className="ba-in">

// // //           <div className="ba-hd">
// // //             <div>
// // //               <h2 className="ba-title">
// // //                 Featured <span style={{ color: T }}>Articles</span>
// // //               </h2>
// // //               <p style={{ color:"rgba(255,255,255,.35)",fontSize:"13px",marginTop:"4px" }}>
// // //                 In-depth guides written by specialists
// // //               </p>
// // //             </div>
// // //             <span className="ba-count">
// // //               {filtered.length} article{filtered.length !== 1 ? "s" : ""}
// // //             </span>
// // //           </div>

// // //           {featured.length > 0 && (
// // //             <div className="ba-featured">
// // //               {featured.map(p => (
// // //                 <Card key={p.id} post={p} featured
// // //                   hovered={hovered===p.id}
// // //                   onEnter={() => setHovered(p.id)}
// // //                   onLeave={() => setHovered(null)}
// // //                 />
// // //               ))}
// // //             </div>
// // //           )}

// // //           {shown.length > 0 && (
// // //             <>
// // //               <div className="ba-lath">
// // //                 <span className="ba-latb" />
// // //                 Latest Articles
// // //               </div>
// // //               <div className="ba-regular">
// // //                 {shown.map(p => (
// // //                   <Card key={p.id} post={p}
// // //                     hovered={hovered===p.id}
// // //                     onEnter={() => setHovered(p.id)}
// // //                     onLeave={() => setHovered(null)}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </>
// // //           )}

// // //           {hasMore && (
// // //             <div style={{ textAlign:"center",marginTop:"44px" }}>
// // //               <button className="b-loadmore" onClick={() => setShowMore(v => v+3)}>
// // //                 Load More Articles ↓
// // //               </button>
// // //             </div>
// // //           )}

// // //           {filtered.length === 0 && (
// // //             <div className="b-empty">
// // //               <div style={{ fontSize:"40px",marginBottom:"12px" }}>📭</div>
// // //               <p style={{ color:"rgba(255,255,255,.5)",fontSize:"16px",fontWeight:500 }}>
// // //                 No articles in this category yet.
// // //               </p>
// // //               <p style={{ color:"rgba(255,255,255,.3)",fontSize:"13px",marginTop:"6px" }}>
// // //                 New content published monthly — check back soon.
// // //               </p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* ══ NEWSLETTER ══════════════════════════════════════════════ */}
// // //       <section className="bnl">
// // //         <div className="bnl-gw" />
// // //         <div className="bnl-in">
// // //           <div className="bnl-badge">
// // //             <span className="bnl-dot" />
// // //             <span className="bnl-bl">STAY UPDATED</span>
// // //           </div>
// // //           <h2 className="bnl-h2">
// // //             Get Insights Delivered to Your <span style={{ color: T }}>Inbox</span>
// // //           </h2>
// // //           <p className="bnl-sub">
// // //             Monthly articles on CRM, ERP, automation, and digital growth — for business
// // //             leaders in <strong style={{ color:"rgba(255,255,255,.8)" }}>Canada, USA, and UK</strong>.
// // //           </p>
// // //           {subscribed ? (
// // //             <div className="bnl-ok">
// // //               <div style={{ fontSize:"40px",marginBottom:"12px" }}>🎉</div>
// // //               <div className="bnl-ok-t">Subscribed Successfully!</div>
// // //               <div className="bnl-ok-s">Monthly insights will arrive in your inbox.</div>
// // //             </div>
// // //           ) : (
// // //             <form className="bnl-form" onSubmit={handleSub}>
// // //               <input type="email" required placeholder="Your email address"
// // //                 className="bnl-inp" value={email}
// // //                 onChange={e => setEmail(e.target.value)} aria-label="Email address" />
// // //               <button type="submit" disabled={loading} className="bnl-btn">
// // //                 {loading ? "Subscribing…" : "Subscribe →"}
// // //               </button>
// // //             </form>
// // //           )}
// // //           <p className="bnl-fine">No spam, ever. Unsubscribe anytime.</p>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }

// // // /* ─── Card ───────────────────────────────────────────────────────────────── */
// // // function Card({ post, hovered, onEnter, onLeave, featured = false }: {
// // //   post: BlogPost; hovered: boolean;
// // //   onEnter: () => void; onLeave: () => void; featured?: boolean;
// // // }) {
// // //   const imgH = featured ? "clamp(180px,25vw,228px)" : "168px";
// // //   return (
// // //     <Link href={post.link} className="bc"
// // //       style={{
// // //         borderColor: hovered ? `${post.color}80` : "rgba(255,255,255,.06)",
// // //         boxShadow:   hovered ? `0 18px 40px ${post.color}1a` : "none",
// // //       }}
// // //       onMouseEnter={onEnter} onMouseLeave={onLeave}
// // //     >
// // //       <div className="bc-iw" style={{ height: imgH }}>
// // //         <div className="bc-thumb"
// // //           style={{ backgroundImage:`url('${post.image}')`, backgroundColor:`${post.color}20` }} />
// // //         <div className="bc-fade" />
// // //         <span className="bc-tag"
// // //           style={{
// // //             border:`1px solid ${post.color}70`,
// // //             ...(featured ? { bottom:"12px",left:"12px" } : { top:"12px",right:"12px" }),
// // //           }}>
// // //           {featured ? post.category : post.readTime}
// // //         </span>
// // //       </div>

// // //       <div className="bc-body">
// // //         <div className="bc-meta">
// // //           <span className="bc-cat"
// // //             style={{ background:`${post.color}18`, border:`1px solid ${post.color}38`, color:post.color }}>
// // //             {post.category}
// // //           </span>
// // //           {featured && <span className="bc-rt">{post.readTime}</span>}
// // //         </div>

// // //         <h3 className={`bc-ttl${featured ? "" : " bc-ttls"}`}>{post.title}</h3>

// // //         <p className="bc-exc" style={{ WebkitLineClamp: featured ? 4 : 3 }}>
// // //           {post.excerpt}
// // //         </p>

// // //         <div className="bc-ft">
// // //           {featured ? (
// // //             <div className="bc-avr">
// // //               <div className="bc-av"
// // //                 style={{ background:`linear-gradient(135deg,${post.color},#8B5CF6)` }}>
// // //                 {post.author.charAt(0)}
// // //               </div>
// // //               <div>
// // //                 <div className="bc-an">{post.author}</div>
// // //                 <div className="bc-as">{post.authorRole} · {post.date}</div>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <div className="bc-ap">
// // //               <div>{post.author}</div><div>{post.date}</div>
// // //             </div>
// // //           )}
// // //           <span className="bc-rl" style={{ color:post.color }}>
// // //             Read <span style={{ fontSize:"15px" }}>→</span>
// // //           </span>
// // //         </div>
// // //       </div>
// // //     </Link>
// // //   );
// // // }


// // // "use client";

// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import Navbar from "../components/Navbar";

// // // const T  = "#00C9A7";
// // // const P  = "#8B5CF6";
// // // const G  = "#10B981";
// // // const N0 = "#010812";
// // // const N1 = "#030B18";
// // // const N2 = "#061425";

// // // interface BlogPost {
// // //   id: number; category: string; color: string;
// // //   title: string; readTime: string; excerpt: string;
// // //   author: string; authorRole: string; date: string;
// // //   image: string; featured: boolean; link: string;
// // // }

// // // const POSTS: BlogPost[] = [
// // //   { id:1,  category:"CRM",        color:T,         title:"CRM Implementation Guide for Growing Businesses in Canada and the UK",             readTime:"8 min read",  excerpt:"A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",                                                   author:"Sarah Chen",     authorRole:"CRM Solutions Architect",    date:"Mar 15, 2025", image:"/blog1.jpg",  featured:true,  link:"/blog/crm-implementation-guide" },
// // //   { id:2,  category:"Strategy",   color:P,         title:"ERP vs CRM: Which Does Your Business Need First?",                                 readTime:"5 min read",  excerpt:"A framework for deciding which system to build first — and exactly when you need both running together. Learn from real-world implementations across manufacturing and service industries.",                                                    author:"Michael Roberts",authorRole:"Senior Business Strategist",  date:"Mar 10, 2025", image:"/blog2.png",  featured:true,  link:"/blog/erp-vs-crm" },
// // //   { id:3,  category:"CRM",        color:T,         title:"What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",               readTime:"7 min read",  excerpt:"A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",                                                                                                   author:"David Kumar",    authorRole:"Technical Director",          date:"Mar 5, 2025",  image:"/blog3.jpg",  featured:true,  link:"/blog/custom-crm-cost" },
// // //   { id:4,  category:"Compliance", color:"#FF6B6B", title:"GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",              readTime:"9 min read",  excerpt:"A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",                                                                                                                    author:"Emma Watson",    authorRole:"Data Protection Officer",     date:"Feb 28, 2025", image:"/blog4.jpg",  featured:true,  link:"/blog/gdpr-pipeda-guide" },
// // //   { id:5,  category:"Automation", color:G,         title:"How to Automate Your Sales Follow-Up Without Losing the Personal Touch",           readTime:"6 min read",  excerpt:"The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",                                                                                                                   author:"James Wilson",   authorRole:"Marketing Automation Lead",   date:"Feb 20, 2025", image:"/blog5.jpg",  featured:true,  link:"/blog/sales-automation" },
// // //   { id:6,  category:"CRM",        color:T,         title:"WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",      readTime:"7 min read",  excerpt:"How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",                                                                                              author:"Priya Patel",    authorRole:"Digital Transformation Lead", date:"Feb 15, 2025", image:"/blog6.jpg",  featured:true,  link:"/blog/whatsapp-crm-integration" },
// // //   { id:7,  category:"ERP",        color:"#F59E0B", title:"ERP Implementation Pitfalls to Avoid in 2025",                                    readTime:"10 min read", excerpt:"Lessons learned from 50+ ERP implementations across manufacturing, distribution, and services industries.",                                                                                                                                               author:"Robert Chen",    authorRole:"ERP Practice Lead",           date:"Feb 10, 2025", image:"/blog1.jpg",  featured:false, link:"/blog/erp-pitfalls" },
// // //   { id:8,  category:"Mobile",     color:"#EC4899", title:"Mobile-First CRM: Why Your Field Teams Need a Native App",                        readTime:"6 min read",  excerpt:"How mobile CRM apps are transforming field service, sales, and operations for businesses with remote teams.",                                                                                                                                        author:"Lisa Zhang",     authorRole:"Mobile Solutions Architect",  date:"Feb 5, 2025",  image:"/blog2.png",  featured:false, link:"/blog/mobile-crm" },
// // //   { id:9,  category:"SEO",        color:"#3B82F6", title:"SEO for 2025: What's Changed and What Still Works",                               readTime:"8 min read",  excerpt:"An updated look at SEO strategies that drive organic traffic for B2B and e-commerce businesses.",                                                                                                                                                    author:"Mark Taylor",    authorRole:"SEO Director",                date:"Jan 28, 2025", image:"/blog3.jpg",  featured:false, link:"/blog/seo-2025" },
// // //   { id:10, category:"Web",        color:"#6366F1", title:"Headless CMS vs Traditional CMS: Which is Right for Your Business?",              readTime:"7 min read",  excerpt:"A practical comparison to help you choose the right content management approach for your specific business needs.",                                                                                                                                    author:"Alex Thompson",  authorRole:"Web Development Lead",        date:"Jan 20, 2025", image:"/blog4.jpg",  featured:false, link:"/blog/headless-cms-comparison" },
// // //   { id:11, category:"Automation", color:G,         title:"Workflow Automation: 5 Processes Every Business Should Automate First",           readTime:"6 min read",  excerpt:"Start your automation journey with these high-impact processes that save time and reduce errors.",                                                                                                                                                   author:"Nina Patel",     authorRole:"Automation Specialist",       date:"Jan 15, 2025", image:"/blog5.jpg",  featured:false, link:"/blog/workflow-automation" },
// // //   { id:12, category:"Strategy",   color:P,         title:"Digital Transformation Roadmap: A 12-Month Plan for Mid-Sized Businesses",        readTime:"12 min read", excerpt:"A phased approach to digital transformation that minimises disruption while maximising ROI.",                                                                                                                                                             author:"Michael Roberts",authorRole:"Senior Business Strategist",  date:"Jan 8, 2025",  image:"/blog6.jpg",  featured:false, link:"/blog/digital-transformation-roadmap" },
// // // ];

// // // const FILTERS = ["All","CRM","ERP","Web","Mobile","Automation","SEO","Strategy","Compliance"];

// // // export default function BlogPage() {
// // //   const [active,    setActive]   = useState("All");
// // //   const [email,     setEmail]    = useState("");
// // //   const [subscribed,setSub]      = useState(false);
// // //   const [loading,   setLoading]  = useState(false);
// // //   const [hovered,   setHovered]  = useState<number|null>(null);
// // //   const [showMore,  setShowMore] = useState(6);

// // //   const filtered = active === "All" ? POSTS : POSTS.filter(p => p.category === active);
// // //   const featured = filtered.filter(p => p.featured);
// // //   const regular  = filtered.filter(p => !p.featured);
// // //   const shown    = regular.slice(0, showMore);
// // //   const hasMore  = regular.length > showMore;

// // //   const handleSub = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setTimeout(() => { setLoading(false); setSub(true); setEmail(""); }, 1400);
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <style>{`
// // //         *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
// // //         @keyframes floatA{0%,100%{transform:translate(0,0)}50%{transform:translate(-22px,-22px)}}
// // //         @keyframes floatB{0%,100%{transform:translate(0,0)}50%{transform:translate(18px,18px)}}
// // //         @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
// // //         @keyframes popIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
// // //         @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.5)}}

// // //         /* hero */
// // //         .bh{padding:60px 20px 70px;text-align:center;position:relative;overflow:hidden;background:linear-gradient(135deg,${N0} 0%,#041628 55%,${N0} 100%)}
// // //         .bh-g1{position:absolute;width:480px;height:480px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,${T}14 0%,transparent 70%);top:-18%;right:-5%;animation:floatA 20s ease-in-out infinite}
// // //         .bh-g2{position:absolute;width:300px;height:300px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,${P}12 0%,transparent 70%);bottom:-12%;left:-4%;animation:floatB 16s ease-in-out infinite}
// // //         .bh-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px);background-size:60px 60px}
// // //         .bh-in{max-width:860px;margin:0 auto;position:relative;z-index:2;animation:fadeUp .7s ease both}
// // //         .bh-badge{display:inline-flex;align-items:center;gap:8px;margin-bottom:24px;background:rgba(0,201,167,.08);border:1px solid rgba(0,201,167,.25);border-radius:100px;padding:7px 20px}
// // //         .bh-dot{width:8px;height:8px;border-radius:50%;background:${T};display:inline-block;box-shadow:0 0 10px ${T};animation:pulse 2s ease-in-out infinite}
// // //         .bh-bl{color:${T};font-size:11px;font-weight:700;letter-spacing:.12em}
// // //         .bh-h1{font-size:clamp(28px,7vw,58px);font-weight:900;line-height:1.12;color:#fff;letter-spacing:-.02em;margin-bottom:20px}
// // //         .bh-grad{background:linear-gradient(135deg,${T},${P});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
// // //         .bh-sub{color:rgba(255,255,255,.58);font-size:clamp(14px,2vw,17px);line-height:1.82;max-width:700px;margin:0 auto}
// // //         .bh-stats{display:flex;justify-content:center;gap:clamp(20px,5vw,40px);margin-top:40px;flex-wrap:wrap}
// // //         .bh-sn{font-size:26px;font-weight:800;color:${T}}
// // //         .bh-sl{font-size:12px;color:rgba(255,255,255,.4);margin-top:2px}

// // //         /* articles */
// // //         .ba{padding:clamp(40px,6vw,80px) clamp(16px,4vw,48px);background:${N2}}
// // //         .ba-in{max-width:1200px;margin:0 auto}
// // //         .ba-hd{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;margin-bottom:clamp(20px,3vw,32px)}
// // //         .ba-title{font-size:clamp(22px,4vw,30px);font-weight:800;color:#fff;line-height:1.2}
// // //         .ba-count{background:rgba(0,201,167,.1);border:1px solid rgba(0,201,167,.2);border-radius:100px;padding:5px 14px;color:${T};font-size:12px;font-weight:600}
// // //         .ba-featured{display:grid;grid-template-columns:1fr;gap:16px;margin-bottom:clamp(32px,5vw,52px)}
// // //         @media(min-width:640px){.ba-featured{grid-template-columns:repeat(2,1fr);gap:22px}}
// // //         .ba-regular{display:grid;grid-template-columns:1fr;gap:16px}
// // //         @media(min-width:600px){.ba-regular{grid-template-columns:repeat(2,1fr);gap:18px}}
// // //         @media(min-width:1024px){.ba-regular{grid-template-columns:repeat(3,1fr);gap:20px}}
// // //         .ba-lath{font-size:clamp(18px,3vw,22px);font-weight:700;color:#fff;margin-bottom:20px;display:flex;align-items:center;gap:10px}
// // //         .ba-latb{width:4px;height:22px;background:linear-gradient(${T},${P});border-radius:4px;flex-shrink:0}
// // //         .b-loadmore{padding:12px 40px;border-radius:100px;border:1.5px solid ${T};background:transparent;color:${T};font-size:14px;font-weight:600;cursor:pointer;font-family:'Poppins',sans-serif;transition:all .3s}
// // //         .b-loadmore:hover{background:${T};color:#000;box-shadow:0 0 24px ${T}40}
// // //         .b-empty{text-align:center;padding:64px 24px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:20px}

// // //         /* card */
// // //         .bc{display:flex;flex-direction:column;height:100%;text-decoration:none;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);border-radius:20px;overflow:hidden;transition:transform .32s ease,border-color .32s ease,box-shadow .32s ease}
// // //         @media(hover:hover){.bc:hover{transform:translateY(-6px)}.bc:hover .bc-thumb{transform:scale(1.05)}}
// // //         .bc-iw{position:relative;overflow:hidden;flex-shrink:0}
// // //         .bc-thumb{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.88;transition:transform .5s ease}
// // //         .bc-fade{position:absolute;inset:0;background:linear-gradient(to top,${N1}95 0%,transparent 55%)}
// // //         .bc-tag{position:absolute;z-index:2;padding:4px 12px;border-radius:100px;background:rgba(5,15,30,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;font-size:11px;font-weight:700;letter-spacing:.03em}
// // //         .bc-body{padding:16px;flex:1;display:flex;flex-direction:column}
// // //         @media(min-width:768px){.bc-body{padding:20px 22px}}
// // //         .bc-cat{display:inline-flex;align-items:center;padding:3px 11px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.04em}
// // //         .bc-meta{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:12px}
// // //         .bc-rt{color:rgba(255,255,255,.35);font-size:11px}
// // //         .bc-ttl{font-size:clamp(15px,2.5vw,19px);font-weight:700;color:#fff;line-height:1.4;margin-bottom:10px;letter-spacing:-.01em}
// // //         .bc-ttls{font-size:clamp(14px,2vw,17px)!important}
// // //         .bc-exc{color:rgba(255,255,255,.52);font-size:14px;line-height:1.65;margin-bottom:18px;flex:1;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}
// // //         .bc-ft{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;border-top:1px solid rgba(255,255,255,.06);padding-top:14px;margin-top:auto}
// // //         .bc-avr{display:flex;align-items:center;gap:10px;min-width:0}
// // //         .bc-av{width:34px;height:34px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800}
// // //         .bc-an{color:#fff;font-size:12px;font-weight:600}
// // //         .bc-as{color:rgba(255,255,255,.38);font-size:11px}
// // //         .bc-ap{color:rgba(255,255,255,.35);font-size:11px;line-height:1.5}
// // //         .bc-rl{display:inline-flex;align-items:center;gap:5px;font-weight:600;font-size:13px;text-decoration:none;flex-shrink:0;transition:gap .2s}
// // //         @media(hover:hover){.bc-rl:hover{gap:10px}}

// // //         /* newsletter */
// // //         .bnl{padding:clamp(48px,6vw,80px) clamp(16px,4vw,48px);position:relative;overflow:hidden;background:linear-gradient(135deg,${N1} 0%,${N0} 100%)}
// // //         .bnl-gw{position:absolute;width:380px;height:380px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,${T}10 0%,transparent 70%);top:-25%;right:-5%}
// // //         .bnl-in{max-width:560px;margin:0 auto;position:relative;z-index:2;text-align:center}
// // //         .bnl-badge{display:inline-flex;align-items:center;gap:8px;margin-bottom:20px;background:rgba(0,201,167,.08);border:1px solid rgba(0,201,167,.22);border-radius:100px;padding:7px 18px}
// // //         .bnl-dot{width:6px;height:6px;border-radius:50%;background:${T};display:inline-block}
// // //         .bnl-bl{color:${T};font-size:11px;font-weight:700;letter-spacing:.1em}
// // //         .bnl-h2{font-size:clamp(22px,4vw,32px);font-weight:800;color:#fff;line-height:1.18;margin-bottom:14px;letter-spacing:-.01em}
// // //         .bnl-sub{color:rgba(255,255,255,.55);font-size:clamp(13px,2vw,15px);line-height:1.8;margin-bottom:30px}
// // //         .bnl-form{display:flex;flex-direction:column;gap:10px;max-width:480px;margin:0 auto}
// // //         @media(min-width:540px){.bnl-form{flex-direction:row}}
// // //         .bnl-inp{flex:1;padding:13px 16px;border-radius:12px;width:100%;background:rgba(255,255,255,.05);border:1px solid ${T}40;color:#fff;font-size:15px;font-family:'Poppins',sans-serif;outline:none;transition:all .3s}
// // //         .bnl-inp:focus{border-color:${T};box-shadow:0 0 0 3px ${T}25}
// // //         .bnl-inp::placeholder{color:rgba(255,255,255,.35)}
// // //         .bnl-btn{padding:13px 28px;border-radius:12px;border:none;cursor:pointer;background:linear-gradient(135deg,${T},${P});color:#000;font-weight:700;font-size:15px;white-space:nowrap;font-family:'Poppins',sans-serif;transition:opacity .3s,transform .2s}
// // //         .bnl-btn:hover:not(:disabled){opacity:.88;transform:translateY(-1px)}
// // //         .bnl-btn:disabled{opacity:.5;cursor:wait}
// // //         .bnl-fine{color:rgba(255,255,255,.25);font-size:11px;margin-top:16px}
// // //         .bnl-ok{background:rgba(0,201,167,.07);border:1px solid ${T}60;border-radius:18px;padding:28px 24px;animation:popIn .5s ease}
// // //         .bnl-ok-t{color:${T};font-size:18px;font-weight:700;margin-bottom:8px}
// // //         .bnl-ok-s{color:rgba(255,255,255,.5);font-size:13px}
// // //       `}</style>

// // //       {/* ── HERO ──────────────────────────────────────────────────── */}
// // //       <section className="bh">
// // //         <div className="bh-g1" /><div className="bh-g2" /><div className="bh-grid" />
// // //         <div className="bh-in">
// // //           <div className="bh-badge">
// // //             <span className="bh-dot" />
// // //             <span className="bh-bl">INSIGHTS &amp; RESOURCES</span>
// // //           </div>
// // //           <h1 className="bh-h1">
// // //             Insights on <span className="bh-grad">Technology, Automation</span>
// // //             <br />&amp; Digital Growth
// // //           </h1>
// // //           <p className="bh-sub">
// // //             Practical, experience-based articles on CRM, ERP, web development,
// // //             automation, and digital strategy — written for business owners and
// // //             operations leaders in Canada, the USA, and the UK. Backed by{" "}
// // //             <strong style={{color:T}}>10+ years</strong> of delivery expertise from
// // //             Nakshatra Namaha Creations.
// // //           </p>
// // //           <div className="bh-stats">
// // //             {[["12+","Articles Published"],["9","Topic Categories"],["10+","Years of Expertise"]].map(([n,l])=>(
// // //               <div key={l}><div className="bh-sn">{n}</div><div className="bh-sl">{l}</div></div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── FILTER BAR ────────────────────────────────────────────────
// // //           ALL STYLES ARE INLINE — no CSS class, no cascade, no inheritance.
// // //           This is the only 100% reliable way to guarantee scroll on mobile
// // //           when parent components (Navbar wrappers, layout divs) may have
// // //           overflow:hidden set.
// // //       ──────────────────────────────────────────────────────────────── */}
// // //       <div
// // //         style={{
// // //           position:   "sticky",
// // //           top:        0,
// // //           zIndex:     40,
// // //           background: N1,
// // //           borderBottom: "1px solid rgba(255,255,255,0.07)",
// // //         }}
// // //       >
// // //         {/* This div is the ONLY scrolling element */}
// // //         <div
// // //           style={{
// // //             display:                    "flex",
// // //             flexWrap:                   "nowrap",   /* single row, never wraps */
// // //             alignItems:                 "center",
// // //             gap:                        "8px",
// // //             overflowX:                  "auto",     /* horizontal scroll */
// // //             overflowY:                  "visible",
// // //             WebkitOverflowScrolling:    "touch",    /* smooth iOS momentum */
// // //             scrollbarWidth:             "none",     /* Firefox */
// // //             msOverflowStyle:            "none",     /* IE/Edge */
// // //             padding:                    "12px 16px 14px",
// // //           }}
// // //         >
// // //           {FILTERS.map(f => (
// // //             <button
// // //               key={f}
// // //               onClick={() => { setActive(f); setShowMore(6); }}
// // //               aria-pressed={active === f}
// // //               style={{
// // //                 /* flex-shrink:0 is the critical property —
// // //                    it means this button will NEVER be squished
// // //                    or hidden regardless of container width    */
// // //                 flexShrink:     0,
// // //                 whiteSpace:     "nowrap",
// // //                 display:        "inline-flex",
// // //                 alignItems:     "center",
// // //                 padding:        "8px 18px",
// // //                 borderRadius:   "100px",
// // //                 fontSize:       "13px",
// // //                 fontWeight:     active === f ? 700 : 600,
// // //                 fontFamily:     "'Poppins', sans-serif",
// // //                 cursor:         "pointer",
// // //                 border:         active === f ? "1px solid transparent" : "1px solid rgba(255,255,255,0.12)",
// // //                 background:     active === f
// // //                                   ? `linear-gradient(135deg, ${T}, ${P})`
// // //                                   : "rgba(255,255,255,0.04)",
// // //                 color:          active === f ? "#000" : "rgba(255,255,255,0.65)",
// // //                 transition:     "all 0.25s ease",
// // //               }}
// // //             >
// // //               {f}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* ── ARTICLES ──────────────────────────────────────────────── */}
// // //       <section className="ba">
// // //         <div className="ba-in">
// // //           <div className="ba-hd">
// // //             <div>
// // //               <h2 className="ba-title">Featured <span style={{color:T}}>Articles</span></h2>
// // //               <p style={{color:"rgba(255,255,255,.35)",fontSize:"13px",marginTop:"4px"}}>
// // //                 In-depth guides written by specialists
// // //               </p>
// // //             </div>
// // //             <span className="ba-count">
// // //               {filtered.length} article{filtered.length!==1?"s":""}
// // //             </span>
// // //           </div>

// // //           {featured.length>0 && (
// // //             <div className="ba-featured">
// // //               {featured.map(p=>(
// // //                 <Card key={p.id} post={p} featured
// // //                   hovered={hovered===p.id}
// // //                   onEnter={()=>setHovered(p.id)}
// // //                   onLeave={()=>setHovered(null)}
// // //                 />
// // //               ))}
// // //             </div>
// // //           )}

// // //           {shown.length>0 && (
// // //             <>
// // //               <div className="ba-lath"><span className="ba-latb"/>Latest Articles</div>
// // //               <div className="ba-regular">
// // //                 {shown.map(p=>(
// // //                   <Card key={p.id} post={p}
// // //                     hovered={hovered===p.id}
// // //                     onEnter={()=>setHovered(p.id)}
// // //                     onLeave={()=>setHovered(null)}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </>
// // //           )}

// // //           {hasMore && (
// // //             <div style={{textAlign:"center",marginTop:"44px"}}>
// // //               <button className="b-loadmore" onClick={()=>setShowMore(v=>v+3)}>
// // //                 Load More Articles ↓
// // //               </button>
// // //             </div>
// // //           )}

// // //           {filtered.length===0 && (
// // //             <div className="b-empty">
// // //               <div style={{fontSize:"40px",marginBottom:"12px"}}>📭</div>
// // //               <p style={{color:"rgba(255,255,255,.5)",fontSize:"16px",fontWeight:500}}>
// // //                 No articles in this category yet.
// // //               </p>
// // //               <p style={{color:"rgba(255,255,255,.3)",fontSize:"13px",marginTop:"6px"}}>
// // //                 New content published monthly — check back soon.
// // //               </p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* ── NEWSLETTER ────────────────────────────────────────────── */}
// // //       <section className="bnl">
// // //         <div className="bnl-gw"/>
// // //         <div className="bnl-in">
// // //           <div className="bnl-badge">
// // //             <span className="bnl-dot"/><span className="bnl-bl">STAY UPDATED</span>
// // //           </div>
// // //           <h2 className="bnl-h2">
// // //             Get Insights Delivered to Your <span style={{color:T}}>Inbox</span>
// // //           </h2>
// // //           <p className="bnl-sub">
// // //             Monthly articles on CRM, ERP, automation, and digital growth — for business
// // //             leaders in <strong style={{color:"rgba(255,255,255,.8)"}}>Canada, USA, and UK</strong>.
// // //           </p>
// // //           {subscribed ? (
// // //             <div className="bnl-ok">
// // //               <div style={{fontSize:"40px",marginBottom:"12px"}}>🎉</div>
// // //               <div className="bnl-ok-t">Subscribed Successfully!</div>
// // //               <div className="bnl-ok-s">Monthly insights will arrive in your inbox.</div>
// // //             </div>
// // //           ) : (
// // //             <form className="bnl-form" onSubmit={handleSub}>
// // //               <input type="email" required placeholder="Your email address"
// // //                 className="bnl-inp" value={email}
// // //                 onChange={e=>setEmail(e.target.value)} aria-label="Email address"/>
// // //               <button type="submit" disabled={loading} className="bnl-btn">
// // //                 {loading?"Subscribing…":"Subscribe →"}
// // //               </button>
// // //             </form>
// // //           )}
// // //           <p className="bnl-fine">No spam, ever. Unsubscribe anytime.</p>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }

// // // /* ── Card ──────────────────────────────────────────────────────────────────── */
// // // function Card({post,hovered,onEnter,onLeave,featured=false}:{
// // //   post:BlogPost; hovered:boolean; onEnter:()=>void; onLeave:()=>void; featured?:boolean
// // // }) {
// // //   const imgH = featured?"clamp(180px,25vw,228px)":"168px";
// // //   return (
// // //     <Link href={post.link} className="bc"
// // //       style={{
// // //         borderColor: hovered?`${post.color}80`:"rgba(255,255,255,.06)",
// // //         boxShadow:   hovered?`0 18px 40px ${post.color}1a`:"none",
// // //       }}
// // //       onMouseEnter={onEnter} onMouseLeave={onLeave}
// // //     >
// // //       <div className="bc-iw" style={{height:imgH}}>
// // //         <div className="bc-thumb"
// // //           style={{backgroundImage:`url('${post.image}')`,backgroundColor:`${post.color}20`}}/>
// // //         <div className="bc-fade"/>
// // //         <span className="bc-tag"
// // //           style={{
// // //             border:`1px solid ${post.color}70`,
// // //             ...(featured?{bottom:"12px",left:"12px"}:{top:"12px",right:"12px"}),
// // //           }}>
// // //           {featured?post.category:post.readTime}
// // //         </span>
// // //       </div>
// // //       <div className="bc-body">
// // //         <div className="bc-meta">
// // //           <span className="bc-cat"
// // //             style={{background:`${post.color}18`,border:`1px solid ${post.color}38`,color:post.color}}>
// // //             {post.category}
// // //           </span>
// // //           {featured&&<span className="bc-rt">{post.readTime}</span>}
// // //         </div>
// // //         <h3 className={`bc-ttl${featured?"":" bc-ttls"}`}>{post.title}</h3>
// // //         <p className="bc-exc" style={{WebkitLineClamp:featured?4:3}}>{post.excerpt}</p>
// // //         <div className="bc-ft">
// // //           {featured?(
// // //             <div className="bc-avr">
// // //               <div className="bc-av"
// // //                 style={{background:`linear-gradient(135deg,${post.color},#8B5CF6)`}}>
// // //                 {post.author.charAt(0)}
// // //               </div>
// // //               <div>
// // //                 <div className="bc-an">{post.author}</div>
// // //                 <div className="bc-as">{post.authorRole} · {post.date}</div>
// // //               </div>
// // //             </div>
// // //           ):(
// // //             <div className="bc-ap"><div>{post.author}</div><div>{post.date}</div></div>
// // //           )}
// // //           <span className="bc-rl" style={{color:post.color}}>
// // //             Read <span style={{fontSize:"15px"}}>→</span>
// // //           </span>
// // //         </div>
// // //       </div>
// // //     </Link>
// // //   );
// // // }



// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import Navbar from "../components/Navbar";
// // import Head from "next/head";
// // import Image from "next/image";

// // const T = "#00C9A7";
// // const P = "#8B5CF6";
// // const G = "#10B981";
// // const N0 = "#010812";
// // const N1 = "#030B18";
// // const N2 = "#061425";

// // interface BlogPost {
// //   id: number;
// //   category: string;
// //   color: string;
// //   title: string;
// //   readTime: string;
// //   excerpt: string;
// //   date: string;
// //   featured: boolean;
// //   link: string;
// //   image: string;
// //   imageAlt: string;
// // }

// // const POSTS: BlogPost[] = [
// //   {
// //     id: 1,
// //     category: "CRM",
// //     color: T,
// //     title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
// //     readTime: "8 min read",
// //     excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
// //     date: "Mar 15, 2025",
// //     featured: true,
// //     link: "/blog/crm-implementation-guide",
// //     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
// //     imageAlt: "CRM implementation strategy meeting with team"
// //   },
// //   {
// //     id: 2,
// //     category: "Strategy",
// //     color: P,
// //     title: "ERP vs CRM: Which Does Your Business Need First?",
// //     readTime: "5 min read",
// //     excerpt: "A framework for deciding which system to build first — and exactly when you need both running together. Learn from real-world implementations across manufacturing and service industries.",
// //     date: "Mar 10, 2025",
// //     featured: true,
// //     link: "/blog/erp-vs-crm",
// //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
// //     imageAlt: "ERP vs CRM comparison chart on laptop"
// //   },
// //   {
// //     id: 3,
// //     category: "CRM",
// //     color: T,
// //     title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
// //     readTime: "7 min read",
// //     excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
// //     date: "Mar 5, 2025",
// //     featured: true,
// //     link: "/blog/custom-crm-cost",
// //     image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2065&auto=format&fit=crop",
// //     imageAlt: "Cost analysis and financial planning for CRM"
// //   },
// //   {
// //     id: 4,
// //     category: "Compliance",
// //     color: "#FF6B6B",
// //     title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
// //     readTime: "9 min read",
// //     excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",
// //     date: "Feb 28, 2025",
// //     featured: true,
// //     link: "/blog/gdpr-pipeda-guide",
// //     image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop",
// //     imageAlt: "Data protection and GDPR compliance concept"
// //   },
// //   {
// //     id: 5,
// //     category: "Automation",
// //     color: G,
// //     title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
// //     readTime: "6 min read",
// //     excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",
// //     date: "Feb 20, 2025",
// //     featured: true,
// //     link: "/blog/sales-automation",
// //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
// //     imageAlt: "Sales automation workflow diagram"
// //   },
// //   {
// //     id: 6,
// //     category: "CRM",
// //     color: T,
// //     title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
// //     readTime: "7 min read",
// //     excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
// //     date: "Feb 15, 2025",
// //     featured: true,
// //     link: "/blog/whatsapp-crm-integration",
// //     image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
// //     imageAlt: "WhatsApp integration on smartphone showing CRM"
// //   }
// // ];

// // const FILTERS = ["All", "CRM", "ERP", "Web", "Mobile", "Automation", "SEO", "Strategy", "Compliance"];

// // export default function BlogPage() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [email, setEmail] = useState("");
// //   const [subscribed, setSubscribed] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [hoveredId, setHoveredId] = useState<number | null>(null);

// //   const filteredPosts = activeFilter === "All"
// //     ? POSTS
// //     : POSTS.filter(p => p.category === activeFilter);

// //   const handleSubscribe = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       setSubscribed(true);
// //       setEmail("");
// //     }, 1400);
// //   };

// //   return (
// //     <>
// //       <Head>
// //         <title>Blog — CRM, ERP, Automation & Digital Growth Insights | NNC Digital Solutions</title>
// //         <meta name="description" content="Expert insights on CRM, ERP, marketing automation, and digital transformation for businesses in Canada, USA, and UK. Backed by Nakshatra Namaha Creations. Read the NNC Digital blog." />
// //       </Head>

// //       <Navbar />

// //       <style>{`
// //         * {
// //           box-sizing: border-box;
// //           margin: 0;
// //           padding: 0;
// //         }

// //         @keyframes fadeUp {
// //           from { opacity: 0; transform: translateY(20px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         @keyframes pulse {
// //           0%, 100% { transform: scale(1); }
// //           50% { transform: scale(1.5); }
// //         }

// //         @keyframes float {
// //           0%, 100% { transform: translate(0, 0); }
// //           50% { transform: translate(-10px, -10px); }
// //         }

// //         /* MODULE 1: HERO */
// //         .hero {
// //           padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 48px);
// //           text-align: center;
// //           background: linear-gradient(135deg, ${N0} 0%, #041628 55%, ${N0} 100%);
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .hero-bg-1 {
// //           position: absolute;
// //           width: min(480px, 80vw);
// //           height: min(480px, 80vw);
// //           border-radius: 50%;
// //           pointer-events: none;
// //           background: radial-gradient(circle, ${T}14 0%, transparent 70%);
// //           top: -18%;
// //           right: -5%;
// //           animation: float 20s ease-in-out infinite;
// //         }

// //         .hero-bg-2 {
// //           position: absolute;
// //           width: min(300px, 60vw);
// //           height: min(300px, 60vw);
// //           border-radius: 50%;
// //           pointer-events: none;
// //           background: radial-gradient(circle, ${P}12 0%, transparent 70%);
// //           bottom: -12%;
// //           left: -4%;
// //           animation: float 16s ease-in-out infinite reverse;
// //         }

// //         .hero-grid {
// //           position: absolute;
// //           inset: 0;
// //           pointer-events: none;
// //           background-image: 
// //             linear-gradient(rgba(0,201,167,.03) 1px, transparent 1px),
// //             linear-gradient(90deg, rgba(0,201,167,.03) 1px, transparent 1px);
// //           background-size: clamp(40px, 6vw, 60px) clamp(40px, 6vw, 60px);
// //         }

// //         .hero-content {
// //           max-width: 900px;
// //           margin: 0 auto;
// //           position: relative;
// //           z-index: 2;
// //           animation: fadeUp 0.7s ease;
// //         }

// //         .hero-badge {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 8px;
// //           margin-bottom: 24px;
// //           background: rgba(0,201,167,.08);
// //           border: 1px solid rgba(0,201,167,.25);
// //           border-radius: 100px;
// //           padding: 7px 20px;
// //         }

// //         .hero-dot {
// //           width: 8px;
// //           height: 8px;
// //           border-radius: 50%;
// //           background: ${T};
// //           display: inline-block;
// //           box-shadow: 0 0 10px ${T};
// //           animation: pulse 2s ease-in-out infinite;
// //         }

// //         .hero-badge-text {
// //           color: ${T};
// //           font-size: 11px;
// //           font-weight: 700;
// //           letter-spacing: 0.12em;
// //         }

// //         .hero h1 {
// //           font-size: clamp(32px, 7vw, 58px);
// //           font-weight: 900;
// //           line-height: 1.2;
// //           color: #fff;
// //           letter-spacing: -0.02em;
// //           margin-bottom: 20px;
// //         }

// //         .hero-gradient {
// //           background: linear-gradient(135deg, ${T}, ${P});
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //         }

// //         .hero p {
// //           color: rgba(255,255,255,0.7);
// //           font-size: clamp(14px, 2vw, 17px);
// //           line-height: 1.8;
// //           max-width: 800px;
// //           margin: 0 auto;
// //         }

// //         .hero strong {
// //           color: ${T};
// //           font-weight: 600;
// //         }

// //         /* MODULE 2: FILTER BAR */
// //         .filter-wrapper {
// //           position: sticky;
// //           top: 0;
// //           z-index: 40;
// //           background: ${N1};
// //           border-bottom: 1px solid rgba(255,255,255,0.07);
// //         }

// //         .filter-scroll {
// //           display: flex;
// //           flex-wrap: nowrap;
// //           gap: 8px;
// //           overflow-x: auto;
// //           overflow-y: hidden;
// //           -webkit-overflow-scrolling: touch;
// //           scrollbar-width: none;
// //           padding: 12px 20px;
// //           max-width: 1200px;
// //           margin: 0 auto;
// //         }

// //         .filter-scroll::-webkit-scrollbar {
// //           display: none;
// //         }

// //         @media (min-width: 768px) {
// //           .filter-scroll {
// //             justify-content: center;
// //             padding: 16px 24px;
// //           }
// //         }

// //         .filter-btn {
// //           flex-shrink: 0;
// //           white-space: nowrap;
// //           padding: 8px 20px;
// //           border-radius: 100px;
// //           font-size: 13px;
// //           font-weight: 600;
// //           font-family: 'Poppins', sans-serif;
// //           border: 1px solid transparent;
// //           cursor: pointer;
// //           transition: all 0.25s ease;
// //         }

// //         .filter-btn.active {
// //           background: linear-gradient(135deg, ${T}, ${P});
// //           color: #000;
// //         }

// //         .filter-btn.inactive {
// //           background: rgba(255,255,255,0.04);
// //           border-color: rgba(255,255,255,0.12);
// //           color: rgba(255,255,255,0.65);
// //         }

// //         .filter-btn.inactive:hover {
// //           background: rgba(255,255,255,0.08);
// //           border-color: rgba(255,255,255,0.2);
// //         }

// //         /* MODULE 3: FEATURED ARTICLES */
// //         .articles-section {
// //           padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px);
// //           background: ${N2};
// //         }

// //         .articles-container {
// //           max-width: 1200px;
// //           margin: 0 auto;
// //         }

// //         .section-header {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: flex-end;
// //           flex-wrap: wrap;
// //           gap: 12px;
// //           margin-bottom: clamp(20px, 3vw, 32px);
// //         }

// //         .section-header h2 {
// //           font-size: clamp(24px, 4vw, 32px);
// //           font-weight: 800;
// //           color: #fff;
// //           line-height: 1.2;
// //         }

// //         .section-header h2 span {
// //           color: ${T};
// //         }

// //         .section-sub {
// //           color: rgba(255,255,255,0.35);
// //           font-size: 13px;
// //           margin-top: 4px;
// //         }

// //         .article-count {
// //           background: rgba(0,201,167,0.1);
// //           border: 1px solid rgba(0,201,167,0.2);
// //           border-radius: 100px;
// //           padding: 5px 14px;
// //           color: ${T};
// //           font-size: 12px;
// //           font-weight: 600;
// //         }

// //         .articles-grid {
// //           display: grid;
// //           grid-template-columns: 1fr;
// //           gap: 24px;
// //         }

// //         @media (min-width: 640px) {
// //           .articles-grid {
// //             grid-template-columns: repeat(2, 1fr);
// //             gap: 28px;
// //           }
// //         }

// //         /* Article Card */
// //         .article-card {
// //           background: rgba(255,255,255,0.025);
// //           border: 1px solid rgba(255,255,255,0.06);
// //           border-radius: 24px;
// //           overflow: hidden;
// //           transition: all 0.3s ease;
// //           cursor: pointer;
// //           height: 100%;
// //           display: flex;
// //           flex-direction: column;
// //           text-decoration: none;
// //         }

// //         .article-card:hover {
// //           transform: translateY(-6px);
// //           border-color: ${T}80;
// //           box-shadow: 0 20px 40px rgba(0,0,0,0.4);
// //         }

// //         .card-image {
// //           position: relative;
// //           width: 100%;
// //           height: 200px;
// //           overflow: hidden;
// //         }

// //         @media (min-width: 768px) {
// //           .card-image {
// //             height: 220px;
// //           }
// //         }

// //         .card-image img {
// //           width: 100%;
// //           height: 100%;
// //           object-fit: cover;
// //           transition: transform 0.5s ease;
// //         }

// //         .article-card:hover .card-image img {
// //           transform: scale(1.05);
// //         }

// //         .card-image-overlay {
// //           position: absolute;
// //           inset: 0;
// //           background: linear-gradient(to top, ${N1}95 0%, transparent 50%);
// //         }

// //         .card-category-badge {
// //           position: absolute;
// //           bottom: 16px;
// //           left: 16px;
// //           z-index: 2;
// //           padding: 4px 12px;
// //           border-radius: 100px;
// //           background: rgba(5,15,30,0.9);
// //           backdrop-filter: blur(4px);
// //           border: 1px solid rgba(255,255,255,0.1);
// //           color: #fff;
// //           font-size: 11px;
// //           font-weight: 700;
// //           letter-spacing: 0.5px;
// //         }

// //         .card-content {
// //           padding: 24px;
// //           flex: 1;
// //           display: flex;
// //           flex-direction: column;
// //         }

// //         @media (min-width: 768px) {
// //           .card-content {
// //             padding: 28px;
// //           }
// //         }

// //         .card-meta {
// //           display: flex;
// //           align-items: center;
// //           gap: 12px;
// //           margin-bottom: 12px;
// //           flex-wrap: wrap;
// //         }

// //         .category-tag {
// //           padding: 4px 12px;
// //           border-radius: 100px;
// //           font-size: 11px;
// //           font-weight: 700;
// //           letter-spacing: 0.04em;
// //         }

// //         .read-time {
// //           color: rgba(255,255,255,0.35);
// //           font-size: 11px;
// //         }

// //         .article-card h3 {
// //           font-size: clamp(16px, 2.5vw, 20px);
// //           font-weight: 700;
// //           color: #fff;
// //           line-height: 1.4;
// //           margin-bottom: 14px;
// //           letter-spacing: -0.01em;
// //         }

// //         .article-excerpt {
// //           color: rgba(255,255,255,0.6);
// //           font-size: 14px;
// //           line-height: 1.7;
// //           margin-bottom: 24px;
// //           flex: 1;
// //           display: -webkit-box;
// //           -webkit-line-clamp: 3;
// //           -webkit-box-orient: vertical;
// //           overflow: hidden;
// //         }

// //         .card-footer {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           border-top: 1px solid rgba(255,255,255,0.06);
// //           padding-top: 20px;
// //           margin-top: auto;
// //         }

// //         .article-date {
// //           color: rgba(255,255,255,0.35);
// //           font-size: 12px;
// //         }

// //         .read-link {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 6px;
// //           font-weight: 600;
// //           font-size: 13px;
// //           transition: gap 0.2s ease;
// //         }

// //         .article-card:hover .read-link {
// //           gap: 10px;
// //         }

// //         /* MODULE 4: NEWSLETTER */
// //         .newsletter {
// //           padding: clamp(50px, 8vw, 90px) clamp(20px, 4vw, 48px);
// //           background: linear-gradient(135deg, ${N1} 0%, ${N0} 100%);
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .newsletter-bg {
// //           position: absolute;
// //           width: min(380px, 70vw);
// //           height: min(380px, 70vw);
// //           border-radius: 50%;
// //           pointer-events: none;
// //           background: radial-gradient(circle, ${T}10 0%, transparent 70%);
// //           top: -25%;
// //           right: -5%;
// //           animation: float 18s ease-in-out infinite;
// //         }

// //         .newsletter-container {
// //           max-width: 560px;
// //           margin: 0 auto;
// //           position: relative;
// //           z-index: 2;
// //           text-align: center;
// //         }

// //         .newsletter-badge {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 8px;
// //           margin-bottom: 20px;
// //           background: rgba(0,201,167,.08);
// //           border: 1px solid rgba(0,201,167,.22);
// //           border-radius: 100px;
// //           padding: 7px 18px;
// //         }

// //         .newsletter-dot {
// //           width: 6px;
// //           height: 6px;
// //           border-radius: 50%;
// //           background: ${T};
// //           display: inline-block;
// //         }

// //         .newsletter-badge span {
// //           color: ${T};
// //           font-size: 11px;
// //           font-weight: 700;
// //           letter-spacing: 0.1em;
// //         }

// //         .newsletter h2 {
// //           font-size: clamp(24px, 5vw, 36px);
// //           font-weight: 800;
// //           color: #fff;
// //           line-height: 1.2;
// //           margin-bottom: 16px;
// //         }

// //         .newsletter h2 span {
// //           color: ${T};
// //         }

// //         .newsletter p {
// //           color: rgba(255,255,255,0.6);
// //           font-size: clamp(14px, 2vw, 16px);
// //           line-height: 1.8;
// //           margin-bottom: 32px;
// //         }

// //         .newsletter p strong {
// //           color: rgba(255,255,255,0.8);
// //         }

// //         .newsletter-form {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 12px;
// //           max-width: 480px;
// //           margin: 0 auto;
// //         }

// //         @media (min-width: 520px) {
// //           .newsletter-form {
// //             flex-direction: row;
// //           }
// //         }

// //         .newsletter-input {
// //           flex: 1;
// //           padding: 14px 18px;
// //           border-radius: 12px;
// //           background: rgba(255,255,255,0.05);
// //           border: 1px solid ${T}40;
// //           color: #fff;
// //           font-size: 15px;
// //           font-family: 'Poppins', sans-serif;
// //           outline: none;
// //           transition: all 0.3s ease;
// //           width: 100%;
// //         }

// //         .newsletter-input:focus {
// //           border-color: ${T};
// //           box-shadow: 0 0 0 3px ${T}25;
// //         }

// //         .newsletter-input::placeholder {
// //           color: rgba(255,255,255,0.35);
// //         }

// //         .newsletter-btn {
// //           padding: 14px 28px;
// //           border-radius: 12px;
// //           border: none;
// //           background: linear-gradient(135deg, ${T}, ${P});
// //           color: #000;
// //           font-weight: 700;
// //           font-size: 15px;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //           white-space: nowrap;
// //           font-family: 'Poppins', sans-serif;
// //         }

// //         .newsletter-btn:hover:not(:disabled) {
// //           opacity: 0.9;
// //           transform: translateY(-2px);
// //           box-shadow: 0 10px 20px rgba(0,201,167,0.2);
// //         }

// //         .newsletter-btn:disabled {
// //           opacity: 0.5;
// //           cursor: wait;
// //         }

// //         .success-message {
// //           background: rgba(0,201,167,0.07);
// //           border: 1px solid ${T}60;
// //           border-radius: 18px;
// //           padding: 32px 24px;
// //           animation: fadeUp 0.5s ease;
// //         }

// //         .success-emoji {
// //           font-size: 48px;
// //           margin-bottom: 12px;
// //         }

// //         .success-title {
// //           color: ${T};
// //           font-size: 20px;
// //           font-weight: 700;
// //           margin-bottom: 8px;
// //         }

// //         .success-text {
// //           color: rgba(255,255,255,0.6);
// //           font-size: 15px;
// //         }

// //         .fine-print {
// //           color: rgba(255,255,255,0.25);
// //           font-size: 11px;
// //           margin-top: 20px;
// //         }
// //       `}</style>

// //       {/* MODULE 1: HERO */}
// //       <section className="hero">
// //         <div className="hero-bg-1" />
// //         <div className="hero-bg-2" />
// //         <div className="hero-grid" />
// //         <div className="hero-content">
// //           <div className="hero-badge">
// //             <span className="hero-dot" />
// //             <span className="hero-badge-text">INSIGHTS & RESOURCES</span>
// //           </div>
// //           <h1>
// //             Insights on <span className="hero-gradient">Technology, Automation</span>
// //             <br />& Digital Growth
// //           </h1>
// //           <p>
// //             Practical, experience-based articles on CRM, ERP, web development, automation, and digital strategy — written for business owners and operations leaders in <strong>Canada, the USA, and the UK</strong>. Backed by 10+ years of delivery expertise from Nakshatra Namaha Creations.
// //           </p>
// //         </div>
// //       </section>

// //       {/* MODULE 2: FILTER BAR */}
// //       <div className="filter-wrapper">
// //         <div className="filter-scroll">
// //           {FILTERS.map(filter => (
// //             <button
// //               key={filter}
// //               onClick={() => setActiveFilter(filter)}
// //               className={`filter-btn ${activeFilter === filter ? 'active' : 'inactive'}`}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* MODULE 3: FEATURED ARTICLES */}
// //       <section className="articles-section">
// //         <div className="articles-container">
// //           <div className="section-header">
// //             <div>
// //               <h2>Featured <span>Articles</span></h2>
// //               <p className="section-sub">In-depth guides written by specialists</p>
// //             </div>
// //             <span className="article-count">
// //               {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
// //             </span>
// //           </div>

// //           <div className="articles-grid">
// //             {filteredPosts.map(post => (
// //               <Link
// //                 key={post.id}
// //                 href={post.link}
// //                 className="article-card"
// //                 onMouseEnter={() => setHoveredId(post.id)}
// //                 onMouseLeave={() => setHoveredId(null)}
// //                 style={{
// //                   borderColor: hoveredId === post.id ? `${post.color}80` : 'rgba(255,255,255,0.06)',
// //                   boxShadow: hoveredId === post.id ? `0 20px 40px ${post.color}20` : 'none'
// //                 }}
// //               >
// //                 <div className="card-image">
// //                                   <img 
// //                     src={post.image} 
// //                     alt={post.imageAlt}
// //                     loading="lazy"
// //                   />
// //                   <div className="card-image-overlay" />
// //                   <span 
// //                     className="card-category-badge"
// //                     style={{
// //                       borderColor: `${post.color}40`,
// //                       color: post.color
// //                     }}
// //                   >
// //                     {post.category}
// //                   </span>
// //                 </div>

// //                 <div className="card-content">
// //                   <div className="card-meta">
// //                     <span
// //                       className="category-tag"
// //                       style={{
// //                         background: `${post.color}18`,
// //                         border: `1px solid ${post.color}38`,
// //                         color: post.color
// //                       }}
// //                     >
// //                       {post.category}
// //                     </span>
// //                     <span className="read-time">{post.readTime}</span>
// //                   </div>

// //                   <h3>{post.title}</h3>

// //                   <p className="article-excerpt">
// //                     {post.excerpt}
// //                   </p>

// //                   <div className="card-footer">
// //                     <span className="article-date">{post.date}</span>
// //                     <span className="read-link" style={{ color: post.color }}>
// //                       Read article <span style={{ fontSize: '18px' }}>→</span>
// //                     </span>
// //                   </div>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* MODULE 4: NEWSLETTER */}
// //       <section className="newsletter">
// //         <div className="newsletter-bg" />
// //         <div className="newsletter-container">
// //           <div className="newsletter-badge">
// //             <span className="newsletter-dot" />
// //             <span>STAY UPDATED</span>
// //           </div>

// //           <h2>Get Insights Delivered to Your <span>Inbox</span></h2>

// //           <p>
// //             Monthly articles on CRM, ERP, automation, and digital growth — for business leaders in <strong>Canada, USA, and UK</strong>.
// //           </p>

// //           {subscribed ? (
// //             <div className="success-message">
// //               <div className="success-emoji">🎉</div>
// //               <div className="success-title">Subscribed Successfully!</div>
// //               <div className="success-text">Monthly insights will arrive in your inbox.</div>
// //             </div>
// //           ) : (
// //             <form className="newsletter-form" onSubmit={handleSubscribe}>
// //               <input
// //                 type="email"
// //                 required
// //                 placeholder="Your email address"
// //                 className="newsletter-input"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 disabled={loading}
// //               />
// //               <button type="submit" disabled={loading} className="newsletter-btn">
// //                 {loading ? 'Subscribing…' : 'Subscribe →'}
// //               </button>
// //             </form>
// //           )}

// //           <p className="fine-print">No spam, ever. Unsubscribe anytime.</p>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Navbar from "../components/Navbar";
// import Head from "next/head";

// const T = "#00C9A7";
// const P = "#8B5CF6";
// const G = "#10B981";
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
//   date: string;
//   featured: boolean;
//   link: string;
//   image: string;
//   imageAlt: string;
//   fullContent?: {
//     introduction: string;
//     sections: { title: string; content: string }[];
//     conclusion: string;
//     authorNote?: string;
//   };
// }

// const POSTS: BlogPost[] = [
//   {
//     id: 1,
//     category: "CRM",
//     color: T,
//     title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
//     readTime: "8 min read",
//     excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
//     date: "Mar 15, 2025",
//     featured: true,
//     link: "/blog/crm-implementation-guide",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
//     imageAlt: "CRM implementation strategy meeting with team",
//     fullContent: {
//       introduction: "Implementing a CRM system is one of the most significant technology investments a growing business can make. Yet, according to industry studies, nearly 30% of CRM implementations fail to deliver the expected ROI. The difference between success and failure often comes down to preparation, people, and process — not the software itself.",
//       sections: [
//         {
//           title: "Phase 1: Requirements Gathering",
//           content: "Before evaluating any CRM platform, you need to understand exactly what your business needs. This means interviewing key stakeholders across sales, marketing, customer service, and leadership. Document current workflows, pain points, and desired outcomes. Create user personas and map out customer journeys to identify where CRM can make the biggest impact."
//         },
//         {
//           title: "Phase 2: Platform Selection",
//           content: "For Canadian and UK businesses, considerations include data residency requirements, multi-currency support, and compliance with local regulations. Custom-built CRMs offer maximum flexibility but require more upfront investment. Off-the-shelf solutions like Salesforce or HubSpot provide faster deployment but may need extensive customization."
//         },
//         {
//           title: "Phase 3: Data Migration",
//           content: "Clean, accurate data is the foundation of any successful CRM. This phase involves auditing existing data, removing duplicates, standardizing formats, and establishing data governance policies. Plan for multiple test migrations before the final cutover."
//         },
//         {
//           title: "Phase 4: Integration",
//           content: "Your CRM shouldn't exist in isolation. Key integrations include email, calendar, accounting software, marketing automation tools, and customer support platforms. Map out data flows between systems and establish synchronization rules."
//         },
//         {
//           title: "Phase 5: Training & Adoption",
//           content: "The most common reason CRM implementations fail is low user adoption. Develop role-based training programs, identify CRM champions within each team, and establish metrics to track usage and ROI. Plan for ongoing support and continuous improvement."
//         }
//       ],
//       conclusion: "Successful CRM implementation is a journey, not a destination. By following this structured approach and focusing on people and processes as much as technology, growing businesses in Canada and the UK can build CRM systems that scale with them for years to come.",
//       authorNote: "Sarah Chen has led 25+ CRM implementations for businesses across North America and Europe. She specializes in helping mid-market companies select and deploy CRM solutions that drive real business results."
//     }
//   },
//   {
//     id: 2,
//     category: "Strategy",
//     color: P,
//     title: "ERP vs CRM: Which Does Your Business Need First?",
//     readTime: "5 min read",
//     excerpt: "A framework for deciding which system to build first — and exactly when you need both running together. Learn from real-world implementations across manufacturing and service industries.",
//     date: "Mar 10, 2025",
//     featured: true,
//     link: "/blog/erp-vs-crm",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     imageAlt: "ERP vs CRM comparison chart on laptop",
//     fullContent: {
//       introduction: "One of the most common questions we hear from growing businesses is whether to implement CRM or ERP first. The answer depends on your business model, growth stage, and biggest operational pain points.",
//       sections: [
//         {
//           title: "When to Choose CRM First",
//           content: "CRM should be your priority if: Your sales team lacks visibility into their pipeline, leads are falling through the cracks, you have no centralized customer data, or marketing can't measure campaign ROI. CRM first is typically right for sales-driven organizations and professional services firms."
//         },
//         {
//           title: "When to Choose ERP First",
//           content: "ERP should come first if: You're struggling with inventory management, financial reporting is manual and error-prone, supply chain visibility is limited, or you need better cost control. Product-based businesses and manufacturers usually benefit from ERP first."
//         },
//         {
//           title: "The Integration Point",
//           content: "Most businesses eventually need both systems working together. The key integration point is when customer data needs to flow seamlessly into financial systems — quotes becoming orders, orders becoming invoices, invoices becoming revenue."
//         }
//       ],
//       conclusion: "There's no one-size-fits-all answer, but by understanding your core business model and biggest pain points, you can make an informed decision about which system to implement first — and plan for the integration that will eventually connect them.",
//       authorNote: "Michael Roberts has advised 100+ businesses on digital transformation strategy, helping them sequence technology investments for maximum ROI and minimum disruption."
//     }
//   },
//   {
//     id: 3,
//     category: "CRM",
//     color: T,
//     title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
//     readTime: "7 min read",
//     excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
//     date: "Mar 5, 2025",
//     featured: true,
//     link: "/blog/custom-crm-cost",
//     image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2065&auto=format&fit=crop",
//     imageAlt: "Cost analysis and financial planning for CRM",
//     fullContent: {
//       introduction: "One of the first questions businesses ask about custom CRM is 'how much will it cost?' The honest answer is that it varies widely based on your requirements, but understanding what drives costs helps you make better decisions.",
//       sections: [
//         {
//           title: "Cost Drivers",
//           content: "The main factors affecting cost include: number of users, complexity of workflows, integration requirements, mobile access needs, data migration complexity, and compliance requirements (GDPR, PIPEDA, etc.)."
//         },
//         {
//           title: "Typical Price Ranges",
//           content: "For Canadian and UK businesses, custom CRM development typically ranges from £30,000-£150,000+ depending on scope. A basic CRM with core functionality might start at £30,000-£50,000, while enterprise systems with advanced features can exceed £150,000."
//         },
//         {
//           title: "Hidden Costs",
//           content: "Beyond development, budget for ongoing costs: hosting, maintenance, support, training, and future enhancements. Plan for 15-20% of the initial build cost annually for ongoing support and improvements."
//         }
//       ],
//       conclusion: "The most cost-effective approach is to start with a well-defined MVP (Minimum Viable Product) that addresses your core needs, then iterate based on user feedback and business growth.",
//       authorNote: "David Kumar has delivered 50+ custom CRM projects across North America and Europe, helping businesses maximize ROI through smart scoping and phased delivery."
//     }
//   },
//   {
//     id: 4,
//     category: "Compliance",
//     color: "#FF6B6B",
//     title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
//     readTime: "9 min read",
//     excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",
//     date: "Feb 28, 2025",
//     featured: true,
//     link: "/blog/gdpr-pipeda-guide",
//     image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop",
//     imageAlt: "Data protection and GDPR compliance concept",
//     fullContent: {
//       introduction: "Data protection regulations are no longer optional considerations—they're fundamental requirements that shape how CRMs must be built. For businesses operating across Canada, the UK, and the USA, understanding the interplay between PIPEDA, GDPR, and emerging US state laws is essential.",
//       sections: [
//         {
//           title: "Key Requirements",
//           content: "Both GDPR and PIPEDA require: lawful basis for processing, consent management, data minimization, purpose limitation, accuracy, storage limitation, security, and accountability. Your CRM must support all these principles by design."
//         },
//         {
//           title: "Data Subject Rights",
//           content: "Your CRM must enable you to respond to data subject requests: right to access, rectification, erasure, restriction, portability, and objection. Build features that allow you to easily find, export, and delete customer data."
//         },
//         {
//           title: "Cross-Border Data Transfer",
//           content: "For businesses operating across Canada, UK, and USA, data transfer mechanisms are critical. Ensure your CRM architecture accounts for data residency requirements and includes appropriate safeguards for international transfers."
//         }
//       ],
//       conclusion: "Building compliance into your CRM from day one is far more efficient than retrofitting it later. Work with legal counsel to understand your specific obligations and ensure your technical architecture supports them.",
//       authorNote: "Emma Watson specializes in data protection for technology companies, advising clients on GDPR, PIPEDA, and emerging privacy regulations worldwide."
//     }
//   },
//   {
//     id: 5,
//     category: "Automation",
//     color: G,
//     title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
//     readTime: "6 min read",
//     excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",
//     date: "Feb 20, 2025",
//     featured: true,
//     link: "/blog/sales-automation",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     imageAlt: "Sales automation workflow diagram",
//     fullContent: {
//       introduction: "Speed-to-lead is critical—research shows following up within 5 minutes increases conversion rates by 9x. But automation shouldn't mean robotic, impersonal communication. Here's how to strike the right balance.",
//       sections: [
//         {
//           title: "Immediate Response Automation",
//           content: "Set up automated responses that acknowledge receipt and set expectations. Use personalization tokens creatively—reference specific form fields or website behavior to show you were paying attention."
//         },
//         {
//           title: "Lead Scoring and Routing",
//           content: "Automate the process of identifying hot leads and routing them to the right salesperson based on territory, industry, or deal size. This ensures leads reach humans quickly when it matters most."
//         },
//         {
//           title: "Nurture Sequences",
//           content: "For leads not ready to buy, automated nurture sequences keep you top-of-mind. The key is providing genuine value—share relevant content, industry insights, and helpful resources, not just sales pitches."
//         }
//       ],
//       conclusion: "The most effective sales automation feels personal because it's triggered by specific behaviors and delivers genuinely useful content. Test and refine continuously to find the right balance for your audience.",
//       authorNote: "James Wilson has built marketing automation systems for B2B and B2C companies across North America, focusing on measurable ROI and genuine customer engagement."
//     }
//   },
//   {
//     id: 6,
//     category: "CRM",
//     color: T,
//     title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
//     readTime: "7 min read",
//     excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
//     date: "Feb 15, 2025",
//     featured: true,
//     link: "/blog/whatsapp-crm-integration",
//     image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
//     imageAlt: "WhatsApp integration on smartphone showing CRM",
//     fullContent: {
//       introduction: "With over 2 billion users worldwide, WhatsApp has become an essential channel for customer communication. Integrating WhatsApp with your CRM opens up powerful possibilities for personalized, real-time engagement.",
//       sections: [
//         {
//           title: "Benefits of Integration",
//           content: "WhatsApp-CRM integration enables: two-way conversation logging, automated message templates, rich media sharing, click-to-chat links, and seamless handoffs between bots and humans—all within a channel customers already use daily."
//         },
//         {
//           title: "Use Cases",
//           content: "Canadian and UK businesses are using WhatsApp CRM integration for: appointment reminders, order confirmations, delivery updates, customer support, and even lead generation through WhatsApp click-to-chat ads."
//         },
//         {
//           title: "Implementation Considerations",
//           content: "WhatsApp Business API requires approval from Meta and has specific requirements around message templates and response times. Work with a Meta Business Solution Provider to navigate the approval process and ensure compliance."
//         }
//       ],
//       conclusion: "WhatsApp CRM integration represents a significant opportunity to meet customers where they already spend time. Start with a specific use case, measure results, and expand based on customer response.",
//       authorNote: "Priya Patel specializes in digital transformation for customer-facing operations, helping businesses leverage new channels to improve customer experience and operational efficiency."
//     }
//   }
// ];

// const FILTERS = ["All", "CRM", "ERP", "Web", "Mobile", "Automation", "SEO", "Strategy", "Compliance"];

// export default function BlogPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [hoveredId, setHoveredId] = useState<number | null>(null);
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

//   const filteredPosts = activeFilter === "All"
//     ? POSTS
//     : POSTS.filter(p => p.category === activeFilter);

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSubscribed(true);
//       setEmail("");
//     }, 1400);
//   };

//   const openBlogModal = (post: BlogPost) => {
//     setSelectedPost(post);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeBlogModal = () => {
//     setSelectedPost(null);
//     document.body.style.overflow = 'unset';
//   };

//   return (
//     <>
//       <Head>
//         <title>Blog — CRM, ERP, Automation & Digital Growth Insights | NNC Digital Solutions</title>
//         <meta name="description" content="Expert insights on CRM, ERP, marketing automation, and digital transformation for businesses in Canada, USA, and UK. Backed by Nakshatra Namaha Creations. Read the NNC Digital blog." />
//       </Head>

//       <Navbar />

//       <style>{`
//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(50px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.5); }
//         }

//         @keyframes float {
//           0%, 100% { transform: translate(0, 0); }
//           50% { transform: translate(-10px, -10px); }
//         }

//         /* MODULE 1: HERO */
//         .hero {
//           padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 48px);
//           text-align: center;
//           background: linear-gradient(135deg, ${N0} 0%, #041628 55%, ${N0} 100%);
//           position: relative;
//           overflow: hidden;
//         }

//         .hero-bg-1 {
//           position: absolute;
//           width: min(480px, 80vw);
//           height: min(480px, 80vw);
//           border-radius: 50%;
//           pointer-events: none;
//           background: radial-gradient(circle, ${T}14 0%, transparent 70%);
//           top: -18%;
//           right: -5%;
//           animation: float 20s ease-in-out infinite;
//         }

//         .hero-bg-2 {
//           position: absolute;
//           width: min(300px, 60vw);
//           height: min(300px, 60vw);
//           border-radius: 50%;
//           pointer-events: none;
//           background: radial-gradient(circle, ${P}12 0%, transparent 70%);
//           bottom: -12%;
//           left: -4%;
//           animation: float 16s ease-in-out infinite reverse;
//         }

//         .hero-grid {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//           background-image: 
//             linear-gradient(rgba(0,201,167,.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,201,167,.03) 1px, transparent 1px);
//           background-size: clamp(40px, 6vw, 60px) clamp(40px, 6vw, 60px);
//         }

//         .hero-content {
//           max-width: 900px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 2;
//           animation: fadeUp 0.7s ease;
//         }

//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 24px;
//           background: rgba(0,201,167,.08);
//           border: 1px solid rgba(0,201,167,.25);
//           border-radius: 100px;
//           padding: 7px 20px;
//         }

//         .hero-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: ${T};
//           display: inline-block;
//           box-shadow: 0 0 10px ${T};
//           animation: pulse 2s ease-in-out infinite;
//         }

//         .hero-badge-text {
//           color: ${T};
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.12em;
//         }

//         .hero h1 {
//           font-size: clamp(32px, 7vw, 58px);
//           font-weight: 900;
//           line-height: 1.2;
//           color: #fff;
//           letter-spacing: -0.02em;
//           margin-bottom: 20px;
//         }

//         .hero-gradient {
//           background: linear-gradient(135deg, ${T}, ${P});
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .hero p {
//           color: rgba(255,255,255,0.7);
//           font-size: clamp(14px, 2vw, 17px);
//           line-height: 1.8;
//           max-width: 800px;
//           margin: 0 auto;
//         }

//         .hero strong {
//           color: ${T};
//           font-weight: 600;
//         }

//         /* MODULE 2: FILTER BAR */
//         .filter-wrapper {
//           position: sticky;
//           top: 0;
//           z-index: 40;
//           background: ${N1};
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }

//         .filter-scroll {
//           display: flex;
//           flex-wrap: nowrap;
//           gap: 8px;
//           overflow-x: auto;
//           overflow-y: hidden;
//           -webkit-overflow-scrolling: touch;
//           scrollbar-width: none;
//           padding: 12px 20px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .filter-scroll::-webkit-scrollbar {
//           display: none;
//         }

//         @media (min-width: 768px) {
//           .filter-scroll {
//             justify-content: center;
//             padding: 16px 24px;
//           }
//         }

//         .filter-btn {
//           flex-shrink: 0;
//           white-space: nowrap;
//           padding: 8px 20px;
//           border-radius: 100px;
//           font-size: 13px;
//           font-weight: 600;
//           font-family: 'Poppins', sans-serif;
//           border: 1px solid transparent;
//           cursor: pointer;
//           transition: all 0.25s ease;
//         }

//         .filter-btn.active {
//           background: linear-gradient(135deg, ${T}, ${P});
//           color: #000;
//         }

//         .filter-btn.inactive {
//           background: rgba(255,255,255,0.04);
//           border-color: rgba(255,255,255,0.12);
//           color: rgba(255,255,255,0.65);
//         }

//         .filter-btn.inactive:hover {
//           background: rgba(255,255,255,0.08);
//           border-color: rgba(255,255,255,0.2);
//         }

//         /* MODULE 3: FEATURED ARTICLES */
//         .articles-section {
//           padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px);
//           background: ${N2};
//         }

//         .articles-container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .section-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-end;
//           flex-wrap: wrap;
//           gap: 12px;
//           margin-bottom: clamp(20px, 3vw, 32px);
//         }

//         .section-header h2 {
//           font-size: clamp(24px, 4vw, 32px);
//           font-weight: 800;
//           color: #fff;
//           line-height: 1.2;
//         }

//         .section-header h2 span {
//           color: ${T};
//         }

//         .section-sub {
//           color: rgba(255,255,255,0.35);
//           font-size: 13px;
//           margin-top: 4px;
//         }

//         .article-count {
//           background: rgba(0,201,167,0.1);
//           border: 1px solid rgba(0,201,167,0.2);
//           border-radius: 100px;
//           padding: 5px 14px;
//           color: ${T};
//           font-size: 12px;
//           font-weight: 600;
//         }

//         .articles-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 24px;
//         }

//         @media (min-width: 640px) {
//           .articles-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 28px;
//           }
//         }

//         /* Article Card */
//         .article-card {
//           background: rgba(255,255,255,0.025);
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 24px;
//           overflow: hidden;
//           transition: all 0.3s ease;
//           cursor: pointer;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//           text-decoration: none;
//         }

//         .article-card:hover {
//           transform: translateY(-6px);
//           border-color: ${T}80;
//           box-shadow: 0 20px 40px rgba(0,0,0,0.4);
//         }

//         .card-image {
//           position: relative;
//           width: 100%;
//           height: 200px;
//           overflow: hidden;
//         }

//         @media (min-width: 768px) {
//           .card-image {
//             height: 220px;
//           }
//         }

//         .card-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }

//         .article-card:hover .card-image img {
//           transform: scale(1.05);
//         }

//         .card-image-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, ${N1}95 0%, transparent 50%);
//         }

//         .card-category-badge {
//           position: absolute;
//           bottom: 16px;
//           left: 16px;
//           z-index: 2;
//           padding: 4px 12px;
//           border-radius: 100px;
//           background: rgba(5,15,30,0.9);
//           backdrop-filter: blur(4px);
//           border: 1px solid rgba(255,255,255,0.1);
//           color: #fff;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.5px;
//         }

//         .card-content {
//           padding: 24px;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         @media (min-width: 768px) {
//           .card-content {
//             padding: 28px;
//           }
//         }

//         .card-meta {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 12px;
//           flex-wrap: wrap;
//         }

//         .category-tag {
//           padding: 4px 12px;
//           border-radius: 100px;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.04em;
//         }

//         .read-time {
//           color: rgba(255,255,255,0.35);
//           font-size: 11px;
//         }

//         .article-card h3 {
//           font-size: clamp(16px, 2.5vw, 20px);
//           font-weight: 700;
//           color: #fff;
//           line-height: 1.4;
//           margin-bottom: 14px;
//           letter-spacing: -0.01em;
//         }

//         .article-excerpt {
//           color: rgba(255,255,255,0.6);
//           font-size: 14px;
//           line-height: 1.7;
//           margin-bottom: 24px;
//           flex: 1;
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         .card-footer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           border-top: 1px solid rgba(255,255,255,0.06);
//           padding-top: 20px;
//           margin-top: auto;
//         }

//         .article-date {
//           color: rgba(255,255,255,0.35);
//           font-size: 12px;
//         }

//         .read-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           font-weight: 600;
//           font-size: 13px;
//           transition: gap 0.2s ease;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//         }

//         .article-card:hover .read-link {
//           gap: 10px;
//         }

//         /* MODULE 4: NEWSLETTER */
//         .newsletter {
//           padding: clamp(50px, 8vw, 90px) clamp(20px, 4vw, 48px);
//           background: linear-gradient(135deg, ${N1} 0%, ${N0} 100%);
//           position: relative;
//           overflow: hidden;
//         }

//         .newsletter-bg {
//           position: absolute;
//           width: min(380px, 70vw);
//           height: min(380px, 70vw);
//           border-radius: 50%;
//           pointer-events: none;
//           background: radial-gradient(circle, ${T}10 0%, transparent 70%);
//           top: -25%;
//           right: -5%;
//           animation: float 18s ease-in-out infinite;
//         }

//         .newsletter-container {
//           max-width: 560px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 2;
//           text-align: center;
//         }

//         .newsletter-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 20px;
//           background: rgba(0,201,167,.08);
//           border: 1px solid rgba(0,201,167,.22);
//           border-radius: 100px;
//           padding: 7px 18px;
//         }

//         .newsletter-dot {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: ${T};
//           display: inline-block;
//         }

//         .newsletter-badge span {
//           color: ${T};
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//         }

//         .newsletter h2 {
//           font-size: clamp(24px, 5vw, 36px);
//           font-weight: 800;
//           color: #fff;
//           line-height: 1.2;
//           margin-bottom: 16px;
//         }

//         .newsletter h2 span {
//           color: ${T};
//         }

//         .newsletter p {
//           color: rgba(255,255,255,0.6);
//           font-size: clamp(14px, 2vw, 16px);
//           line-height: 1.8;
//           margin-bottom: 32px;
//         }

//         .newsletter p strong {
//           color: rgba(255,255,255,0.8);
//         }

//         .newsletter-form {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//           max-width: 480px;
//           margin: 0 auto;
//         }

//         @media (min-width: 520px) {
//           .newsletter-form {
//             flex-direction: row;
//           }
//         }

//         .newsletter-input {
//           flex: 1;
//           padding: 14px 18px;
//           border-radius: 12px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid ${T}40;
//           color: #fff;
//           font-size: 15px;
//           font-family: 'Poppins', sans-serif;
//           outline: none;
//           transition: all 0.3s ease;
//           width: 100%;
//         }

//         .newsletter-input:focus {
//           border-color: ${T};
//           box-shadow: 0 0 0 3px ${T}25;
//         }

//         .newsletter-input::placeholder {
//           color: rgba(255,255,255,0.35);
//         }

//         .newsletter-btn {
//           padding: 14px 28px;
//           border-radius: 12px;
//           border: none;
//           background: linear-gradient(135deg, ${T}, ${P});
//           color: #000;
//           font-weight: 700;
//           font-size: 15px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           white-space: nowrap;
//           font-family: 'Poppins', sans-serif;
//         }

//         .newsletter-btn:hover:not(:disabled) {
//           opacity: 0.9;
//           transform: translateY(-2px);
//           box-shadow: 0 10px 20px rgba(0,201,167,0.2);
//         }

//         .newsletter-btn:disabled {
//           opacity: 0.5;
//           cursor: wait;
//         }

//         .success-message {
//           background: rgba(0,201,167,0.07);
//           border: 1px solid ${T}60;
//           border-radius: 18px;
//           padding: 32px 24px;
//           animation: fadeUp 0.5s ease;
//         }

//         .success-emoji {
//           font-size: 48px;
//           margin-bottom: 12px;
//         }

//         .success-title {
//           color: ${T};
//           font-size: 20px;
//           font-weight: 700;
//           margin-bottom: 8px;
//         }

//         .success-text {
//           color: rgba(255,255,255,0.6);
//           font-size: 15px;
//         }

//         .fine-print {
//           color: rgba(255,255,255,0.25);
//           font-size: 11px;
//           margin-top: 20px;
//         }

//         /* MODAL STYLES */
//         .modal-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.85);
//           backdrop-filter: blur(8px);
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//           animation: fadeIn 0.3s ease;
//           overflow-y: auto;
//         }

//         .modal-content {
//           max-width: 900px;
//           width: 100%;
//           max-height: 90vh;
//           overflow-y: auto;
//           background: ${N1};
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 32px;
//           animation: slideUp 0.4s ease;
//           position: relative;
//         }

//         .modal-close {
//           position: sticky;
//           top: 20px;
//           float: right;
//           right: 20px;
//           z-index: 10;
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.1);
//           border: 1px solid rgba(255,255,255,0.2);
//           color: #fff;
//           font-size: 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           margin: 20px 20px 0 0;
//         }

//         .modal-close:hover {
//           background: rgba(255,255,255,0.2);
//           transform: scale(1.1);
//         }

//         .modal-image {
//           width: 100%;
//           height: 300px;
//           position: relative;
//           overflow: hidden;
//           border-radius: 32px 32px 0 0;
//         }

//         @media (min-width: 768px) {
//           .modal-image {
//             height: 400px;
//           }
//         }

//         .modal-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .modal-image-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, ${N1} 0%, transparent 50%);
//         }

//         .modal-body {
//           padding: clamp(24px, 5vw, 48px);
//           color: #fff;
//         }

//         .modal-header {
//           margin-bottom: 32px;
//         }

//         .modal-meta {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           margin-bottom: 16px;
//           flex-wrap: wrap;
//         }

//         .modal-category {
//           padding: 6px 16px;
//           border-radius: 100px;
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 0.5px;
//         }

//         .modal-date {
//           color: rgba(255,255,255,0.5);
//           font-size: 13px;
//         }

//         .modal-title {
//           font-size: clamp(28px, 4vw, 42px);
//           font-weight: 800;
//           line-height: 1.2;
//           margin-bottom: 16px;
//           letter-spacing: -0.02em;
//         }

//         .modal-introduction {
//           font-size: 18px;
//           line-height: 1.7;
//           color: rgba(255,255,255,0.8);
//           margin-bottom: 40px;
//           padding-bottom: 24px;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//         }

//         .modal-section {
//           margin-bottom: 32px;
//         }

//         .modal-section h3 {
//           font-size: 22px;
//           font-weight: 700;
//           color: ${T};
//           margin-bottom: 12px;
//         }

//         .modal-section p {
//           font-size: 16px;
//           line-height: 1.8;
//           color: rgba(255,255,255,0.7);
//         }

//         .modal-conclusion {
//           margin: 40px 0 32px;
//           padding: 24px;
//           background: rgba(0,201,167,0.05);
//           border-left: 4px solid ${T};
//           border-radius: 12px;
//           font-size: 17px;
//           line-height: 1.8;
//           color: rgba(255,255,255,0.9);
//           font-style: italic;
//         }

//         .modal-author-note {
//           padding: 20px;
//           background: rgba(255,255,255,0.03);
//           border-radius: 16px;
//           border: 1px solid rgba(255,255,255,0.1);
//           margin-top: 24px;
//         }

//         .modal-author-note strong {
//           color: ${T};
//           display: block;
//           margin-bottom: 8px;
//           font-size: 15px;
//         }

//         .modal-author-note p {
//           color: rgba(255,255,255,0.6);
//           font-size: 14px;
//           line-height: 1.7;
//         }

//         .modal-footer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-top: 40px;
//           padding-top: 24px;
//           border-top: 1px solid rgba(255,255,255,0.1);
//         }

//         .modal-share {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }

//         .modal-share span {
//           color: rgba(255,255,255,0.5);
//           font-size: 13px;
//         }

//         .modal-share button {
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1);
//           color: #fff;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-size: 16px;
//         }

//         .modal-share button:hover {
//           background: ${T};
//           border-color: ${T};
//           transform: translateY(-2px);
//         }

//         .modal-read-time {
//           color: rgba(255,255,255,0.5);
//           font-size: 14px;
//         }

//         @media (max-width: 640px) {
//           .modal-content {
//             border-radius: 24px;
//           }
          
//           .modal-body {
//             padding: 20px;
//           }
          
//           .modal-introduction {
//             font-size: 16px;
//           }
          
//           .modal-section h3 {
//             font-size: 20px;
//           }
//         }
//       `}</style>

//       {/* MODULE 1: HERO */}
//       <section className="hero">
//         <div className="hero-bg-1" />
//         <div className="hero-bg-2" />
//         <div className="hero-grid" />
//         <div className="hero-content">
//           <div className="hero-badge">
//             <span className="hero-dot" />
//             <span className="hero-badge-text">INSIGHTS & RESOURCES</span>
//           </div>
//           <h1>
//             Insights on <span className="hero-gradient">Technology, Automation</span>
//             <br />& Digital Growth
//           </h1>
//           <p>
//             Practical, experience-based articles on CRM, ERP, web development, automation, and digital strategy — written for business owners and operations leaders in <strong>Canada, the USA, and the UK</strong>. Backed by 10+ years of delivery expertise from Nakshatra Namaha Creations.
//           </p>
//         </div>
//       </section>

//       {/* MODULE 2: FILTER BAR */}
//       <div className="filter-wrapper">
//         <div className="filter-scroll">
//           {FILTERS.map(filter => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`filter-btn ${activeFilter === filter ? 'active' : 'inactive'}`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* MODULE 3: FEATURED ARTICLES */}
//       <section className="articles-section">
//         <div className="articles-container">
//           <div className="section-header">
//             <div>
//               <h2>Featured <span>Articles</span></h2>
//               <p className="section-sub">In-depth guides written by specialists</p>
//             </div>
//             <span className="article-count">
//               {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
//             </span>
//           </div>

//           <div className="articles-grid">
//             {filteredPosts.map(post => (
//               <div
//                 key={post.id}
//                 className="article-card"
//                 onMouseEnter={() => setHoveredId(post.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//                 style={{
//                   borderColor: hoveredId === post.id ? `${post.color}80` : 'rgba(255,255,255,0.06)',
//                   boxShadow: hoveredId === post.id ? `0 20px 40px ${post.color}20` : 'none'
//                 }}
//               >
//                 <div className="card-image">
//                   <img 
//                     src={post.image} 
//                     alt={post.imageAlt}
//                     loading="lazy"
//                   />
//                   <div className="card-image-overlay" />
//                   <span 
//                     className="card-category-badge"
//                     style={{
//                       borderColor: `${post.color}40`,
//                       color: post.color
//                     }}
//                   >
//                     {post.category}
//                   </span>
//                 </div>

//                 <div className="card-content">
//                   <div className="card-meta">
//                     <span
//                       className="category-tag"
//                       style={{
//                         background: `${post.color}18`,
//                         border: `1px solid ${post.color}38`,
//                         color: post.color
//                       }}
//                     >
//                       {post.category}
//                     </span>
//                     <span className="read-time">{post.readTime}</span>
//                   </div>

//                   <h3>{post.title}</h3>

//                   <p className="article-excerpt">
//                     {post.excerpt}
//                   </p>

//                   <div className="card-footer">
//                     <span className="article-date">{post.date}</span>
//                     <button 
//                       className="read-link" 
//                       style={{ color: post.color }}
//                       onClick={() => openBlogModal(post)}
//                     >
//                       Read article <span style={{ fontSize: '18px' }}>→</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MODULE 4: NEWSLETTER */}
//       <section className="newsletter">
//         <div className="newsletter-bg" />
//         <div className="newsletter-container">
//           <div className="newsletter-badge">
//             <span className="newsletter-dot" />
//             <span>STAY UPDATED</span>
//           </div>

//           <h2>Get Insights Delivered to Your <span>Inbox</span></h2>

//           <p>
//             Monthly articles on CRM, ERP, automation, and digital growth — for business leaders in <strong>Canada, USA, and UK</strong>.
//           </p>

//           {subscribed ? (
//             <div className="success-message">
//               <div className="success-emoji">🎉</div>
//               <div className="success-title">Subscribed Successfully!</div>
//               <div className="success-text">Monthly insights will arrive in your inbox.</div>
//             </div>
//           ) : (
//             <form className="newsletter-form" onSubmit={handleSubscribe}>
//               <input
//                 type="email"
//                 required
//                 placeholder="Your email address"
//                 className="newsletter-input"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 disabled={loading}
//               />
//               <button type="submit" disabled={loading} className="newsletter-btn">
//                 {loading ? 'Subscribing…' : 'Subscribe →'}
//               </button>
//             </form>
//           )}

//           <p className="fine-print">No spam, ever. Unsubscribe anytime.</p>
//         </div>
//       </section>

//       {/* BLOG MODAL */}
//       {selectedPost && selectedPost.fullContent && (
//         <div className="modal-overlay" onClick={closeBlogModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close" onClick={closeBlogModal}>×</button>
            
//             <div className="modal-image">
//               <img src={selectedPost.image} alt={selectedPost.imageAlt} />
//               <div className="modal-image-overlay" />
//             </div>

//             <div className="modal-body">
//               <div className="modal-header">
//                 <div className="modal-meta">
//                   <span 
//                     className="modal-category"
//                     style={{
//                       background: `${selectedPost.color}20`,
//                       border: `1px solid ${selectedPost.color}40`,
//                       color: selectedPost.color
//                     }}
//                   >
//                     {selectedPost.category}
//                   </span>
//                   <span className="modal-date">{selectedPost.date}</span>
//                 </div>
//                 <h2 className="modal-title">{selectedPost.title}</h2>
//               </div>

//               <div className="modal-introduction">
//                 {selectedPost.fullContent.introduction}
//               </div>

//               {selectedPost.fullContent.sections.map((section, index) => (
//                 <div key={index} className="modal-section">
//                   <h3>{section.title}</h3>
//                   <p>{section.content}</p>
//                 </div>
//               ))}

//               <div className="modal-conclusion">
//                 {selectedPost.fullContent.conclusion}
//               </div>

//               {selectedPost.fullContent.authorNote && (
//                 <div className="modal-author-note">
//                   <strong>About the Author</strong>
//                   <p>{selectedPost.fullContent.authorNote}</p>
//                 </div>
//               )}

//               <div className="modal-footer">
//                 <div className="modal-share">
//                   <span>Share:</span>
//                   <button onClick={() => {
//                     navigator.clipboard.writeText(window.location.origin + selectedPost.link);
//                     alert('Link copied to clipboard!');
//                   }}>🔗</button>
//                   <button onClick={() => {
//                     window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedPost.title)}&url=${encodeURIComponent(window.location.origin + selectedPost.link)}`, '_blank');
//                   }}>𝕏</button>
//                   <button onClick={() => {
//                     window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + selectedPost.link)}`, '_blank');
//                   }}>in</button>
//                 </div>
//                 <span className="modal-read-time">{selectedPost.readTime}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

const T = "#00C9A7";
const P = "#8B5CF6";
const G = "#10B981";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

interface BlogPost {
  id: number;
  category: string;
  color: string;
  title: string;
  readTime: string;
  excerpt: string;
  date: string;
  featured: boolean;
  link: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const POSTS: BlogPost[] = [
  {
    id: 1,
    category: "CRM",
    color: T,
    title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
    readTime: "8 min read",
    excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
    date: "Mar 15, 2025",
    featured: true,
    link: "/blog/crm-implementation-guide",
    slug: "crm-implementation-guide",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "CRM implementation strategy meeting with team"
  },
  {
    id: 2,
    category: "Strategy",
    color: P,
    title: "ERP vs CRM: Which Does Your Business Need First?",
    readTime: "5 min read",
    excerpt: "A framework for deciding which system to build first — and exactly when you need both running together. Learn from real-world implementations across manufacturing and service industries.",
    date: "Mar 10, 2025",
    featured: true,
    link: "/blog/erp-vs-crm",
    slug: "erp-vs-crm",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    imageAlt: "ERP vs CRM comparison chart on laptop"
  },
  {
    id: 3,
    category: "CRM",
    color: T,
    title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
    readTime: "7 min read",
    excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
    date: "Mar 5, 2025",
    featured: true,
    link: "/blog/custom-crm-cost",
    slug: "custom-crm-cost",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2065&auto=format&fit=crop",
    imageAlt: "Cost analysis and financial planning for CRM"
  },
  {
    id: 4,
    category: "Compliance",
    color: "#FF6B6B",
    title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
    readTime: "9 min read",
    excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",
    date: "Feb 28, 2025",
    featured: true,
    link: "/blog/gdpr-pipeda-guide",
    slug: "gdpr-pipeda-guide",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Data protection and GDPR compliance concept"
  },
  {
    id: 5,
    category: "Automation",
    color: G,
    title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
    readTime: "6 min read",
    excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",
    date: "Feb 20, 2025",
    featured: true,
    link: "/blog/sales-automation",
    slug: "sales-automation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    imageAlt: "Sales automation workflow diagram"
  },
  {
    id: 6,
    category: "CRM",
    color: T,
    title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
    readTime: "7 min read",
    excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
    date: "Feb 15, 2025",
    featured: true,
    link: "/blog/whatsapp-crm-integration",
    slug: "whatsapp-crm-integration",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "WhatsApp integration on smartphone showing CRM"
  }
];

const FILTERS = ["All", "CRM", "ERP", "Web", "Mobile", "Automation", "SEO", "Strategy", "Compliance"];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredPosts = activeFilter === "All"
    ? POSTS
    : POSTS.filter(p => p.category === activeFilter);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 1400);
  };

  return (
    <>
      <Head>
        <title>Blog — CRM, ERP, Automation & Digital Growth Insights | NNC Digital Solutions</title>
        <meta name="description" content="Expert insights on CRM, ERP, marketing automation, and digital transformation for businesses in Canada, USA, and UK. Backed by Nakshatra Namaha Creations. Read the NNC Digital blog." />
      </Head>

      <Navbar />

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.5); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -10px); }
        }

        /* MODULE 1: HERO */
        .hero {
          padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 48px);
          text-align: center;
          background: linear-gradient(135deg, ${N0} 0%, #041628 55%, ${N0} 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-bg-1 {
          position: absolute;
          width: min(480px, 80vw);
          height: min(480px, 80vw);
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, ${T}14 0%, transparent 70%);
          top: -18%;
          right: -5%;
          animation: float 20s ease-in-out infinite;
        }

        .hero-bg-2 {
          position: absolute;
          width: min(300px, 60vw);
          height: min(300px, 60vw);
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, ${P}12 0%, transparent 70%);
          bottom: -12%;
          left: -4%;
          animation: float 16s ease-in-out infinite reverse;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: 
            linear-gradient(rgba(0,201,167,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,201,167,.03) 1px, transparent 1px);
          background-size: clamp(40px, 6vw, 60px) clamp(40px, 6vw, 60px);
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          animation: fadeUp 0.7s ease;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          background: rgba(0,201,167,.08);
          border: 1px solid rgba(0,201,167,.25);
          border-radius: 100px;
          padding: 7px 20px;
        }

        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${T};
          display: inline-block;
          box-shadow: 0 0 10px ${T};
          animation: pulse 2s ease-in-out infinite;
        }

        .hero-badge-text {
          color: ${T};
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .hero h1 {
          font-size: clamp(32px, 7vw, 58px);
          font-weight: 900;
          line-height: 1.2;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .hero-gradient {
          background: linear-gradient(135deg, ${T}, ${P});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          color: rgba(255,255,255,0.7);
          font-size: clamp(14px, 2vw, 17px);
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero strong {
          color: ${T};
          font-weight: 600;
        }

        /* MODULE 2: FILTER BAR */
        .filter-wrapper {
          position: sticky;
          top: 0;
          z-index: 40;
          background: ${N1};
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .filter-scroll {
          display: flex;
          flex-wrap: nowrap;
          gap: 8px;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 12px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .filter-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 768px) {
          .filter-scroll {
            justify-content: center;
            padding: 16px 24px;
          }
        }

        .filter-btn {
          flex-shrink: 0;
          white-space: nowrap;
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, ${T}, ${P});
          color: #000;
        }

        .filter-btn.inactive {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.65);
        }

        .filter-btn.inactive:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
        }

        /* MODULE 3: FEATURED ARTICLES */
        .articles-section {
          padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px);
          background: ${N2};
        }

        .articles-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: clamp(20px, 3vw, 32px);
        }

        .section-header h2 {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
        }

        .section-header h2 span {
          color: ${T};
        }

        .section-sub {
          color: rgba(255,255,255,0.35);
          font-size: 13px;
          margin-top: 4px;
        }

        .article-count {
          background: rgba(0,201,167,0.1);
          border: 1px solid rgba(0,201,167,0.2);
          border-radius: 100px;
          padding: 5px 14px;
          color: ${T};
          font-size: 12px;
          font-weight: 600;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 640px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        /* Article Card */
        .article-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }

        .article-card:hover {
          transform: translateY(-6px);
          border-color: ${T}80;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .card-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .card-image {
            height: 220px;
          }
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .article-card:hover .card-image img {
          transform: scale(1.05);
        }

        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, ${N1}95 0%, transparent 50%);
        }

        .card-category-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          z-index: 2;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(5,15,30,0.9);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .card-content {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .card-content {
            padding: 28px;
          }
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .category-tag {
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .read-time {
          color: rgba(255,255,255,0.35);
          font-size: 11px;
        }

        .article-card h3 {
          font-size: clamp(16px, 2.5vw, 20px);
          font-weight: 700;
          color: #fff;
          line-height: 1.4;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
        }

        .article-excerpt {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 24px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 20px;
          margin-top: auto;
        }

        .article-date {
          color: rgba(255,255,255,0.35);
          font-size: 12px;
        }

        .read-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 13px;
          transition: gap 0.2s ease;
          color: inherit;
          text-decoration: none;
        }

        .article-card:hover .read-link {
          gap: 10px;
        }

        /* MODULE 4: NEWSLETTER */
        .newsletter {
          padding: clamp(50px, 8vw, 90px) clamp(20px, 4vw, 48px);
          background: linear-gradient(135deg, ${N1} 0%, ${N0} 100%);
          position: relative;
          overflow: hidden;
        }

        .newsletter-bg {
          position: absolute;
          width: min(380px, 70vw);
          height: min(380px, 70vw);
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, ${T}10 0%, transparent 70%);
          top: -25%;
          right: -5%;
          animation: float 18s ease-in-out infinite;
        }

        .newsletter-container {
          max-width: 560px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .newsletter-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          background: rgba(0,201,167,.08);
          border: 1px solid rgba(0,201,167,.22);
          border-radius: 100px;
          padding: 7px 18px;
        }

        .newsletter-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T};
          display: inline-block;
        }

        .newsletter-badge span {
          color: ${T};
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .newsletter h2 {
          font-size: clamp(24px, 5vw, 36px);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .newsletter h2 span {
          color: ${T};
        }

        .newsletter p {
          color: rgba(255,255,255,0.6);
          font-size: clamp(14px, 2vw, 16px);
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .newsletter p strong {
          color: rgba(255,255,255,0.8);
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 480px;
          margin: 0 auto;
        }

        @media (min-width: 520px) {
          .newsletter-form {
            flex-direction: row;
          }
        }

        .newsletter-input {
          flex: 1;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid ${T}40;
          color: #fff;
          font-size: 15px;
          font-family: 'Poppins', sans-serif;
          outline: none;
          transition: all 0.3s ease;
          width: 100%;
        }

        .newsletter-input:focus {
          border-color: ${T};
          box-shadow: 0 0 0 3px ${T}25;
        }

        .newsletter-input::placeholder {
          color: rgba(255,255,255,0.35);
        }

        .newsletter-btn {
          padding: 14px 28px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, ${T}, ${P});
          color: #000;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-family: 'Poppins', sans-serif;
        }

        .newsletter-btn:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,201,167,0.2);
        }

        .newsletter-btn:disabled {
          opacity: 0.5;
          cursor: wait;
        }

        .success-message {
          background: rgba(0,201,167,0.07);
          border: 1px solid ${T}60;
          border-radius: 18px;
          padding: 32px 24px;
          animation: fadeUp 0.5s ease;
        }

        .success-emoji {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .success-title {
          color: ${T};
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .success-text {
          color: rgba(255,255,255,0.6);
          font-size: 15px;
        }

        .fine-print {
          color: rgba(255,255,255,0.25);
          font-size: 11px;
          margin-top: 20px;
        }
      `}</style>

      {/* MODULE 1: HERO */}
      <section className="hero">
        <div className="hero-bg-1" />
        <div className="hero-bg-2" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-dot" />
            <span className="hero-badge-text">INSIGHTS & RESOURCES</span>
          </div>
          <h1>
            Insights on <span className="hero-gradient">Technology, Automation</span>
            <br />& Digital Growth
          </h1>
          <p>
            Practical, experience-based articles on CRM, ERP, web development, automation, and digital strategy — written for business owners and operations leaders in <strong>Canada, the USA, and the UK</strong>. Backed by 10+ years of delivery expertise from Nakshatra Namaha Creations.
          </p>
        </div>
      </section>

      {/* MODULE 2: FILTER BAR */}
      <div className="filter-wrapper">
        <div className="filter-scroll">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : 'inactive'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* MODULE 3: FEATURED ARTICLES */}
      <section className="articles-section">
        <div className="articles-container">
          <div className="section-header">
            <div>
              <h2>Featured <span>Articles</span></h2>
              <p className="section-sub">In-depth guides written by specialists</p>
            </div>
            <span className="article-count">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="articles-grid">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="article-card"
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  borderColor: hoveredId === post.id ? `${post.color}80` : 'rgba(255,255,255,0.06)',
                  boxShadow: hoveredId === post.id ? `0 20px 40px ${post.color}20` : 'none'
                }}
              >
                <div className="card-image">
                  <img 
                    src={post.image} 
                    alt={post.imageAlt}
                    loading="lazy"
                  />
                  <div className="card-image-overlay" />
                  <span 
                    className="card-category-badge"
                    style={{
                      borderColor: `${post.color}40`,
                      color: post.color
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="card-content">
                  <div className="card-meta">
                    <span
                      className="category-tag"
                      style={{
                        background: `${post.color}18`,
                        border: `1px solid ${post.color}38`,
                        color: post.color
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="read-time">{post.readTime}</span>
                  </div>

                  <h3>{post.title}</h3>

                  <p className="article-excerpt">
                    {post.excerpt}
                  </p>

                  <div className="card-footer">
                    <span className="article-date">{post.date}</span>
                    <span className="read-link" style={{ color: post.color }}>
                      Read article <span style={{ fontSize: '18px' }}>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 4: NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-bg" />
        <div className="newsletter-container">
          <div className="newsletter-badge">
            <span className="newsletter-dot" />
            <span>STAY UPDATED</span>
          </div>

          <h2>Get Insights Delivered to Your <span>Inbox</span></h2>

          <p>
            Monthly articles on CRM, ERP, automation, and digital growth — for business leaders in <strong>Canada, USA, and UK</strong>.
          </p>

          {subscribed ? (
            <div className="success-message">
              <div className="success-emoji">🎉</div>
              <div className="success-title">Subscribed Successfully!</div>
              <div className="success-text">Monthly insights will arrive in your inbox.</div>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                placeholder="Your email address"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <button type="submit" disabled={loading} className="newsletter-btn">
                {loading ? 'Subscribing…' : 'Subscribe →'}
              </button>
            </form>
          )}

          <p className="fine-print">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}