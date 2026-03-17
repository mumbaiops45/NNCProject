"use client";
import Link from "next/link";
import { T } from "./tokens";
import Reveal from "./Reveal";

const BLOGS = [
  {
    tag: "CRM Development",
    date: "March 5, 2026",
    title: "Why Off-the-Shelf CRMs Fail Growing Businesses (And What to Do Instead)",
    excerpt: "Salesforce and HubSpot work — until they don't. Here's why scaling businesses hit a wall with generic CRM tools and how custom-built systems eliminate the friction.",
    readTime: "5 min read",
    gradient: `linear-gradient(135deg, ${T.teal}22, ${T.tealDark}44)`,
    accent: T.teal,
    slug: "why-off-the-shelf-crms-fail",
  },
  {
    tag: "Automation",
    date: "February 20, 2026",
    title: "The 7 Business Processes You Should Automate Before Hiring Your Next Employee",
    excerpt: "Before expanding headcount, smart operators automate. We break down the seven workflows where automation delivers the fastest ROI — from lead follow-up to invoice generation.",
    readTime: "6 min read",
    gradient: `linear-gradient(135deg, #1a3a6b33, #0a1f4488)`,
    accent: "#4f9cff",
    slug: "business-processes-to-automate",
  },
  {
    tag: "Digital Growth",
    date: "February 8, 2026",
    title: "GDPR, PIPEDA & CCPA: How to Build Software That's Compliant from Day One",
    excerpt: "Compliance retrofitted after launch is expensive and fragile. Here's how to architect data privacy into your digital systems from the ground up — without slowing development.",
    readTime: "7 min read",
    gradient: `linear-gradient(135deg, #2d1b6933, #1a0f4488)`,
    accent: "#a78bfa",
    slug: "gdpr-pipeda-ccpa-compliance",
  },
];

export default function BlogSection() {
  const handleBlogClick = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <section style={{
      padding: "40px 48px",
      background: T.navy0,
      fontFamily: "'Outfit', sans-serif",
    }}>
      <style>{`
        .blog-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(0,0,0,.4);
        }
        .blog-read-btn {
          transition: gap .2s ease, color .2s ease;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .blog-card:hover .blog-read-btn {
          gap: 10px;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Heading */}
        <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{
            color: T.teal, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14,
          }}>— From the Blog —</p>
          <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 900, color: "#fff", margin: 0 }}>
            Insights on Technology,{" "}
            <span style={{
              background: `linear-gradient(135deg,${T.teal},${T.tealLight})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Automation & Digital Growth
            </span>
          </h2>
        </Reveal>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {BLOGS.map((b, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <div
                className="blog-card"
                onClick={() => handleBlogClick(b.slug)}
                style={{
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 18,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Card hero gradient */}
                <div style={{
                  height: 160,
                  background: b.gradient,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(255,255,255,.06)",
                }}>
                  {/* Decorative circles */}
                  <div style={{
                    position: "absolute", width: 120, height: 120, borderRadius: "50%",
                    border: `1px solid ${b.accent}33`, top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                  }} />
                  <div style={{
                    position: "absolute", width: 80, height: 80, borderRadius: "50%",
                    border: `1px solid ${b.accent}55`, top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                  }} />
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: b.accent,
                    background: `${b.accent}18`,
                    border: `1px solid ${b.accent}44`,
                    padding: "5px 12px", borderRadius: 20,
                    position: "relative", zIndex: 1,
                  }}>{b.tag}</span>
                </div>

                {/* Card body */}
                <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 12,
                    marginBottom: 14,
                  }}>
                    <span style={{ fontSize: 11.5, color: "rgba(255,255,255,.35)", fontWeight: 500 }}>{b.date}</span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,.2)" }} />
                    <span style={{ fontSize: 11.5, color: "rgba(255,255,255,.35)", fontWeight: 500 }}>{b.readTime}</span>
                  </div>

                  <h3 style={{
                    fontSize: 16.5, fontWeight: 800, color: "#fff",
                    lineHeight: 1.45, marginBottom: 14, flex: 1,
                  }}>{b.title}</h3>

                  <p style={{
                    fontSize: 13.5, color: "rgba(255,255,255,.5)",
                    lineHeight: 1.75, marginBottom: 24,
                  }}>{b.excerpt}</p>

                  <div className="blog-read-btn" style={{
                    fontSize: 13, fontWeight: 700, color: b.accent,
                    marginTop: "auto",
                  }}>
                    Read Article
                    <span style={{ fontSize: 16 }}>→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View all */}
        <Reveal delay={0.3} style={{ textAlign: "center", marginTop: 52 }}>
          <Link href="/blog">
            <button style={{
              padding: "13px 36px", borderRadius: 10,
              background: "transparent",
              border: `1px solid rgba(0,201,167,.4)`,
              color: T.teal, fontWeight: 700, fontSize: 14,
              fontFamily: "'Outfit',sans-serif", cursor: "pointer",
              transition: "background .2s ease, border-color .2s ease",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,201,167,.08)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = T.teal;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,201,167,.4)";
              }}
            >
              View All Articles →
            </button>
          </Link>
        </Reveal>

      </div>
    </section>
  );
}