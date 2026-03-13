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
interface BlogPost {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  readTime: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  featured: boolean;
  link: string;
}

export default function BlogPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
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

  // Filter categories
  const filters = ["All", "CRM", "ERP", "Web", "Mobile", "Automation", "SEO", "Strategy", "Compliance"];

  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: "CRM",
      categoryColor: T,
      title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
      readTime: "8 min read",
      excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to go-live and adoption. Most CRM implementations fail because of people, not technology.",
      author: "Sarah Chen",
      date: "Mar 15, 2025",
      image: "crm-guide",
      featured: true,
      link: "/blog/crm-implementation-guide"
    },
    {
      id: 2,
      category: "Strategy",
      categoryColor: P,
      title: "ERP vs CRM: Which Does Your Business Need First?",
      readTime: "5 min read",
      excerpt: "A framework for deciding which system to build first — and exactly when you need both running together.",
      author: "Michael Roberts",
      date: "Mar 10, 2025",
      image: "erp-vs-crm",
      featured: true,
      link: "/blog/erp-vs-crm"
    },
    {
      id: 3,
      category: "CRM",
      categoryColor: T,
      title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
      readTime: "7 min read",
      excerpt: "A transparent breakdown of what drives CRM development costs — and how to scope a project that fits your budget without cutting corners.",
      author: "David Kumar",
      date: "Mar 5, 2025",
      image: "crm-cost",
      featured: true,
      link: "/blog/custom-crm-cost"
    },
    {
      id: 4,
      category: "Compliance",
      categoryColor: "#FF6B6B",
      title: "GDPR and PIPEDA: What Businesses Need to Know Before Building a CRM",
      readTime: "9 min read",
      excerpt: "A plain-English guide to the data protection requirements your CRM must meet if you operate in Canada, the USA, or the UK.",
      author: "Emma Watson",
      date: "Feb 28, 2025",
      image: "compliance",
      featured: true,
      link: "/blog/gdpr-pipeda-guide"
    },
    {
      id: 5,
      category: "Automation",
      categoryColor: G,
      title: "How to Automate Your Sales Follow-Up Without Losing the Personal Touch",
      readTime: "6 min read",
      excerpt: "The exact automation workflows that help our clients follow up with every lead within minutes — without sounding like a robot.",
      author: "James Wilson",
      date: "Feb 20, 2025",
      image: "automation",
      featured: true,
      link: "/blog/sales-automation"
    },
    {
      id: 6,
      category: "CRM",
      categoryColor: T,
      title: "WhatsApp CRM Integration: The Complete Guide for Canadian and UK Businesses",
      readTime: "7 min read",
      excerpt: "How businesses in North America and the UK are using WhatsApp Business API integrated with their CRM to reach customers where they actually are.",
      author: "Priya Patel",
      date: "Feb 15, 2025",
      image: "whatsapp-crm",
      featured: true,
      link: "/blog/whatsapp-crm-integration"
    },
    {
      id: 7,
      category: "ERP",
      categoryColor: "#F59E0B",
      title: "ERP Implementation Pitfalls to Avoid in 2025",
      readTime: "10 min read",
      excerpt: "Lessons learned from 50+ ERP implementations across manufacturing, distribution, and services industries.",
      author: "Robert Chen",
      date: "Feb 10, 2025",
      image: "erp-pitfalls",
      featured: false,
      link: "/blog/erp-pitfalls"
    },
    {
      id: 8,
      category: "Mobile",
      categoryColor: "#EC4899",
      title: "Mobile-First CRM: Why Your Field Teams Need a Native App",
      readTime: "6 min read",
      excerpt: "How mobile CRM apps are transforming field service, sales, and operations for businesses with remote teams.",
      author: "Lisa Zhang",
      date: "Feb 5, 2025",
      image: "mobile-crm",
      featured: false,
      link: "/blog/mobile-crm"
    },
    {
      id: 9,
      category: "SEO",
      categoryColor: "#3B82F6",
      title: "SEO for 2025: What's Changed and What Still Works",
      readTime: "8 min read",
      excerpt: "An updated look at SEO strategies that drive organic traffic for B2B and e-commerce businesses.",
      author: "Mark Taylor",
      date: "Jan 28, 2025",
      image: "seo-2025",
      featured: false,
      link: "/blog/seo-2025"
    }
  ];

  // Filter posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 1200);
  };

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

  const getFeaturedGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(2, 1fr)";
  };

  const getAllPostsGridColumns = () => {
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

  return (
    <>
      <Navbar />

      {/* MODULE 1 — HERO */}
      <section style={{
        padding: isMobile ? "40px 20px 60px" : isTablet ? "100px 32px 70px" : "40px 48px 80px",
        background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
        position: "relative",
        overflow: "hidden",
        textAlign: "center" as const
      }}>
        {/* Animated background elements */}
        {!isMobile && (
          <>
            <div style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${T}15 0%, transparent 70%)`,
              top: "-20%",
              right: "-5%",
              animation: "float 20s ease-in-out infinite",
              pointerEvents: "none" as const
            }} />
            <div style={{
              position: "absolute",
              width: "300px",
              height: "300px",
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
          maxWidth: isMobile ? "100%" : "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,201,167,0.1)",
            border: "1px solid rgba(0,201,167,0.3)",
            borderRadius: "100px",
            padding: isMobile ? "6px 16px" : "8px 20px",
            marginBottom: isMobile ? "16px" : "24px"
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
              INSIGHTS & RESOURCES
            </span>
          </div>

          <h1 style={{
            fontSize: getHeroFontSize(),
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: isMobile ? "16px" : "24px",
            color: "#fff"
          }}>
            Insights on <span style={{
              background: `linear-gradient(135deg, ${T}, ${P})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Technology, Automation</span><br />
            & Digital Growth
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: isMobile ? "15px" : isTablet ? "16px" : "18px",
            lineHeight: 1.8,
            maxWidth: isMobile ? "100%" : "700px",
            margin: "0 auto",
            padding: isMobile ? "0 10px" : "0"
          }}>
            Practical, experience-based articles on CRM, ERP, web development, automation, and digital strategy — written for business owners and operations leaders in Canada, the USA, and the UK. Backed by 10+ years of delivery expertise from Nakshatra Namaha Creations.
          </p>
        </div>
      </section>

      {/* MODULE 2 — CATEGORY FILTER BAR */}
      <section style={{
        padding: isMobile ? "30px 20px" : "40px 48px",
        background: N1,
        position: "sticky",
        top: "70px",
        zIndex: 10,
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {/* Mobile filter dropdown */}
          {isMobile ? (
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "100px",
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${T}`,
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                outline: "none"
              }}
            >
              {filters.map(filter => (
                <option key={filter} value={filter} style={{ background: N2, color: "#fff" }}>
                  {filter}
                </option>
              ))}
            </select>
          ) : (
            <div style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: isTablet ? "8px 16px" : "10px 24px",
                    borderRadius: "100px",
                    background: activeFilter === filter 
                      ? `linear-gradient(135deg, ${T}, ${P})`
                      : "rgba(255,255,255,0.03)",
                    color: activeFilter === filter ? "#000" : "rgba(255,255,255,0.7)",
                    fontSize: isTablet ? "13px" : "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MODULE 3 — FEATURED ARTICLES */}
      <section style={{
        padding: getSectionPadding(),
        background: N2
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginBottom: isMobile ? "24px" : "32px",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "16px" : "0"
          }}>
            <h2 style={{
              fontSize: isMobile ? "24px" : isTablet ? "28px" : "32px",
              fontWeight: 800,
              color: "#fff"
            }}>
              Featured <span style={{ color: T }}>Articles</span>
            </h2>
            <div style={{
              display: "flex",
              gap: "8px",
              color: "rgba(255,255,255,0.4)",
              fontSize: "14px"
            }}>
              <span>{filteredPosts.length} articles</span>
            </div>
          </div>

          {/* Featured Posts Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: getFeaturedGridColumns(),
            gap: isMobile ? "20px" : "24px",
            marginBottom: isMobile ? "40px" : "60px"
          }}>
            {filteredPosts.filter(post => post.featured).slice(0, 2).map((post) => (
              <div
                key={post.id}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${hoveredCard === post.id ? post.categoryColor : "rgba(255,255,255,0.05)"}`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  transform: hoveredCard === post.id && !isMobile ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: hoveredCard === post.id && !isMobile ? `0 20px 40px ${post.categoryColor}20` : "none"
                }}
              >
                {/* Featured image placeholder with gradient */}
                <div style={{
                  height: isMobile ? "160px" : "200px",
                  background: `linear-gradient(135deg, ${post.categoryColor}40, ${N1})`,
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <div style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(10px)",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    border: `1px solid ${post.categoryColor}`,
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 600
                  }}>
                    {post.category}
                  </div>
                </div>

                <div style={{ padding: isMobile ? "20px" : "24px" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px"
                  }}>
                    <span style={{
                      padding: "4px 12px",
                      background: `${post.categoryColor}20`,
                      border: `1px solid ${post.categoryColor}40`,
                      borderRadius: "100px",
                      color: post.categoryColor,
                      fontSize: "12px",
                      fontWeight: 600
                    }}>
                      {post.category}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: isMobile ? "18px" : "20px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "12px",
                    lineHeight: 1.4
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: isMobile ? "13px" : "14px",
                    lineHeight: 1.7,
                    marginBottom: "16px"
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}>
                      <div style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${post.categoryColor}, ${P})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: 600
                      }}>
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>{post.author}</div>
                        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{post.date}</div>
                      </div>
                    </div>

                    <a
                      href={post.link}
                      style={{
                        color: post.categoryColor,
                        fontSize: "14px",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        transition: "gap 0.3s ease"
                      }}
                      onMouseEnter={e => {
                        if (!isMobile) e.currentTarget.style.gap = "8px";
                      }}
                      onMouseLeave={e => {
                        if (!isMobile) e.currentTarget.style.gap = "4px";
                      }}
                    >
                      Read <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Articles Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: getAllPostsGridColumns(),
            gap: isMobile ? "20px" : "24px"
          }}>
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${hoveredCard === post.id ? post.categoryColor : "rgba(255,255,255,0.05)"}`,
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  transform: hoveredCard === post.id && !isMobile ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: hoveredCard === post.id && !isMobile ? `0 15px 30px ${post.categoryColor}20` : "none"
                }}
              >
                <div style={{
                  height: "140px",
                  background: `linear-gradient(135deg, ${post.categoryColor}30, ${N1})`,
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(5px)",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    border: `1px solid ${post.categoryColor}`,
                    color: "#fff",
                    fontSize: "11px"
                  }}>
                    {post.readTime}
                  </div>
                </div>

                <div style={{ padding: isMobile ? "16px" : "20px" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                    flexWrap: "wrap"
                  }}>
                    <span style={{
                      padding: "4px 10px",
                      background: `${post.categoryColor}20`,
                      border: `1px solid ${post.categoryColor}40`,
                      borderRadius: "100px",
                      color: post.categoryColor,
                      fontSize: "11px",
                      fontWeight: 600
                    }}>
                      {post.category}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "10px",
                    lineHeight: 1.4
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: isMobile ? "12px" : "13px",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden"
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>
                      {post.date}
                    </div>
                    <a
                      href={post.link}
                      style={{
                        color: post.categoryColor,
                        fontSize: "13px",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        transition: "gap 0.3s ease"
                      }}
                      onMouseEnter={e => {
                        if (!isMobile) e.currentTarget.style.gap = "8px";
                      }}
                      onMouseLeave={e => {
                        if (!isMobile) e.currentTarget.style.gap = "4px";
                      }}
                    >
                      Read <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredPosts.length > 6 && (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button style={{
                padding: "12px 32px",
                borderRadius: "100px",
                border: `1px solid ${T}`,
                background: "transparent",
                color: T,
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = T;
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = T;
              }}>
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* MODULE 4 — NEWSLETTER SUBSCRIPTION */}
      <section style={{
        padding: getSectionPadding(),
        background: `linear-gradient(135deg, ${N1} 0%, ${N0} 100%)`,
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative elements */}
        {!isMobile && (
          <div style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${T}10 0%, transparent 70%)`,
            top: "-20%",
            right: "-5%",
            pointerEvents: "none" as const
          }} />
        )}

        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          textAlign: "center"
        }}>
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
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: T
            }} />
            <span style={{ color: T, fontSize: "12px", fontWeight: 600 }}>
              STAY UPDATED
            </span>
          </div>

          <h2 style={{
            fontSize: isMobile ? "24px" : isTablet ? "28px" : "32px",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "16px"
          }}>
            Get Insights Delivered to Your <span style={{ color: T }}>Inbox</span>
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: 1.7,
            marginBottom: "32px",
            padding: isMobile ? "0 10px" : "0"
          }}>
            Monthly articles on CRM, ERP, automation, and digital growth — for business leaders in Canada, USA, and UK.
          </p>

          {subscribed ? (
            <div style={{
              background: "rgba(0,201,167,0.1)",
              border: `1px solid ${T}`,
              borderRadius: "16px",
              padding: "24px",
              animation: "fadeInScale 0.5s ease"
            }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>🎉</div>
              <h3 style={{ color: T, fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>
                Subscribed Successfully!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                Thank you for joining our newsletter. You'll receive insights monthly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "12px",
              maxWidth: "500px",
              margin: "0 auto"
            }}>
              <input
                type="email"
                required
                placeholder="Your email address"
                style={{
                  flex: 1,
                  ...baseInputStyle,
                  border: `1px solid ${T}40`
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={e => { e.target.style.borderColor = T; e.target.style.boxShadow = `0 0 0 2px ${T}40`; }}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: isMobile ? "12px 24px" : "14px 32px",
                  borderRadius: "12px",
                  border: "none",
                  background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg, ${T}, ${P})`,
                  color: "#000",
                  fontWeight: 700,
                  fontSize: isMobile ? "14px" : "15px",
                  cursor: loading ? "wait" : "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap" as const
                }}
              >
                {loading ? "Subscribing..." : "Subscribe →"}
              </button>
            </form>
          )}

          <p style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "12px",
            marginTop: "20px"
          }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-20px, -20px); }
          66% { transform: translate(20px, 20px); }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @media (hover: hover) {
          input:hover, select:hover {
            border-color: ${T} !important;
          }
        }
      `}</style>
    </>
  );
}