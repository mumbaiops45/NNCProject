"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DIAL_CODES = ["+1 (CA)", "+1 (US)", "+44 (UK)", "+91 (IN)", "+61 (AU)"];

const BLOG_POSTS = [
  {
    category: "CRM",
    date:      "Feb 2025",
    title:     "Why Custom CRM Beats Off-the-Shelf in 2025",
    desc:      "HubSpot and Salesforce work for average businesses. Here's why fast-scaling companies are choosing custom — and saving 40% on licensing.",
    readTime:  "5 min read",
    emoji:     "⚙️",
  },
  {
    category:  "Automation",
    date:      "Jan 2025",
    title:     "The 7 Business Workflows You Should Automate Today",
    desc:      "From lead nurturing to invoice reconciliation — the exact workflows that eat 12+ hours per week and can be eliminated with smart automation.",
    readTime:  "7 min read",
    emoji:     "🔄",
  },
  {
    category:  "Digital Growth",
    date:      "Dec 2024",
    title:     "How a D2C Brand 2.4× Conversions with CRM Personalisation",
    desc:      "A deep-dive into how one of our New York clients used behavioural segmentation and CRM-driven follow-ups to transform their email funnel.",
    readTime:  "6 min read",
    emoji:     "📈",
  },
];

type Form = {
  name: string; phone: string; dialCode: string;
  email: string; description: string;
};

const inputStyle: React.CSSProperties = {
  width: "100%", background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
  padding: "13px 16px", color: "#fff", fontSize: 14,
  fontFamily: "var(--font-body)", outline: "none",
  boxSizing: "border-box", transition: "border-color 0.2s",
};

export default function ReadyToBuild() {
  const [form, setForm] = useState<Form>({
    name: "", phone: "", dialCode: "+1 (CA)", email: "", description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (!form.email || !form.name) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1100);
  };

  return (
    <>
      {/* ── Module 19A: CTA + Form ── */}
      <section
        id="ready-to-build"
        style={{
          position: "relative", padding: "110px 0", overflow: "hidden",
          background: "linear-gradient(180deg, #061425 0%, #030B18 100%)",
        }}
      >
        <div className="bg-grid" style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.6, pointerEvents: "none" }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 900, height: 500, borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(ellipse, rgba(0,201,167,0.08) 0%, transparent 65%)",
        }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}
            className="rtb-grid">

            {/* LEFT — headline */}
            <div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} className="section-label">
                Get Started Today
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="section-heading" style={{ marginBottom: 22 }}>
                Ready to Build{" "}
                <span className="grad-text">Next-Level Custom Digital Solutions?</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.16 }}
                style={{
                  color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.8,
                  fontFamily: "var(--font-body)", marginBottom: 40,
                }}>
                Tell us about your project and we&apos;ll get back to you within 24 hours
                with a clear, actionable roadmap — no fluff, no sales pressure.
              </motion.p>

              {/* Contact chips */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.26 }}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { flag: "🇺🇸", label: "USA",    phone: "+1 631-XXX-XXXX" },
                  { flag: "🇨🇦", label: "Canada", phone: "+1 647-XXX-XXXX" },
                  { flag: "🇬🇧", label: "UK",     phone: "+44 20-XXXX-XXXX" },
                ].map(c => (
                  <div key={c.label} style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "14px 20px", borderRadius: 12,
                    background: "rgba(6,20,37,0.7)",
                    border: "1px solid rgba(0,201,167,0.12)",
                    backdropFilter: "blur(10px)",
                  }}>
                    <span style={{ fontSize: 22 }}>{c.flag}</span>
                    <div>
                      <p style={{
                        color: "rgba(255,255,255,0.4)", fontSize: 11,
                        fontFamily: "var(--font-body)", fontWeight: 600,
                        letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2,
                      }}>
                        {c.label}
                      </p>
                      <a href={`tel:${c.phone}`} style={{
                        color: "#00C9A7", fontSize: 15, fontWeight: 700,
                        fontFamily: "var(--font-body)", textDecoration: "none",
                      }}>
                        {c.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.12 }}
              style={{
                background: "rgba(6,20,37,0.9)",
                border: "1px solid rgba(0,201,167,0.2)",
                borderRadius: 20, padding: "40px 36px",
                backdropFilter: "blur(24px)",
                boxShadow: "0 0 80px rgba(0,201,167,0.06)",
                position: "relative",
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
                background: "linear-gradient(90deg,transparent,#00C9A7,transparent)", opacity: 0.5,
              }} />

              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: 22, color: "#fff", marginBottom: 6,
              }}>
                Start Your Project
              </h3>
              <p style={{
                color: "rgba(255,255,255,0.4)", fontSize: 13,
                fontFamily: "var(--font-body)", marginBottom: 28,
              }}>
                Free consultation · Response within 24 hours
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: 48, marginBottom: 14 }}>✅</div>
                    <p style={{ color: "#00C9A7", fontSize: 19, fontWeight: 700,
                      fontFamily: "var(--font-display)", marginBottom: 8 }}>Sent! We&apos;ll be in touch.</p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13.5, fontFamily: "var(--font-body)" }}>
                      Expect a reply within 24 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form" style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                    <input style={inputStyle} placeholder="Full Name *"
                      value={form.name} onChange={set("name")}
                      onFocus={e => (e.target.style.borderColor = "rgba(0,201,167,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />

                    {/* Phone with dial code */}
                    <div style={{ display: "flex", gap: 10 }}>
                      <select style={{ ...inputStyle, width: 120, flexShrink: 0, padding: "13px 10px", color: "rgba(255,255,255,0.75)" }}
                        value={form.dialCode} onChange={set("dialCode")}>
                        {DIAL_CODES.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                      <input style={{ ...inputStyle, flex: 1 }} placeholder="Phone Number"
                        value={form.phone} onChange={set("phone")}
                        onFocus={e => (e.target.style.borderColor = "rgba(0,201,167,0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>

                    <input style={inputStyle} type="email" placeholder="Business Email *"
                      value={form.email} onChange={set("email")}
                      onFocus={e => (e.target.style.borderColor = "rgba(0,201,167,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />

                    <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                      rows={4} placeholder="Describe your project — what do you need built?"
                      value={form.description} onChange={set("description")}
                      onFocus={e => (e.target.style.borderColor = "rgba(0,201,167,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />

                    <motion.button
                      whileHover={{ boxShadow: "0 0 32px rgba(0,201,167,0.45)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={submit}
                      disabled={loading}
                      style={{
                        width: "100%", padding: "15px", borderRadius: 9,
                        background: loading ? "rgba(0,201,167,0.4)" : "linear-gradient(135deg,#00C9A7,#00a07a)",
                        border: "none", color: "#000", fontWeight: 700, fontSize: 15,
                        cursor: loading ? "not-allowed" : "pointer",
                        fontFamily: "var(--font-body)", letterSpacing: "0.02em",
                      }}>
                      {loading ? "Sending…" : "🚀 Submit & Get Free Consultation"}
                    </motion.button>

                    <p style={{
                      textAlign: "center", color: "rgba(255,255,255,0.28)",
                      fontSize: 11, fontFamily: "var(--font-body)",
                    }}>
                      🔒 Secure · GDPR & PIPEDA compliant · No spam
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <style>{`@media(max-width:900px){ .rtb-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── Module 19B: Blog Cards ── */}
      <section
        id="blog"
        style={{
          position: "relative", padding: "100px 0 120px", overflow: "hidden",
          background: "linear-gradient(180deg, #030B18 0%, #040d1c 100%)",
          borderTop: "1px solid rgba(0,201,167,0.08)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} className="section-label">
                From the Blog
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="section-heading">
                Insights on Technology,{" "}
                <span className="grad-text">Automation &amp; Digital Growth</span>
              </motion.h2>
            </div>
            <motion.a
              href="#" className="btn-outline"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}>
              View All Posts →
            </motion.a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}
            className="blog-grid">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, borderColor: "rgba(0,201,167,0.35)" }}
                style={{
                  background: "rgba(6,20,37,0.8)",
                  border: "1px solid rgba(0,201,167,0.12)",
                  borderRadius: 18, overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  cursor: "pointer",
                }}
              >
                {/* Card image / hero */}
                <div style={{
                  height: 140, background: "linear-gradient(135deg,#061425,#0a1f38)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 48, position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(circle at 30% 50%, rgba(0,201,167,0.1), transparent 60%)",
                  }} />
                  {post.emoji}
                </div>

                <div style={{ padding: "26px 26px 28px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                    <span style={{
                      background: "rgba(0,201,167,0.1)",
                      border: "1px solid rgba(0,201,167,0.2)",
                      borderRadius: 5, padding: "3px 10px",
                      color: "#00C9A7", fontSize: 10.5, fontWeight: 700,
                      fontFamily: "var(--font-body)", letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}>
                      {post.category}
                    </span>
                    <span style={{
                      color: "rgba(255,255,255,0.3)", fontSize: 11.5,
                      fontFamily: "var(--font-body)", alignSelf: "center",
                    }}>
                      {post.date}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 17, color: "#fff", lineHeight: 1.35,
                    marginBottom: 12,
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    color: "rgba(255,255,255,0.48)", fontSize: 13.5,
                    lineHeight: 1.7, fontFamily: "var(--font-body)", marginBottom: 20,
                  }}>
                    {post.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, fontFamily: "var(--font-body)" }}>
                      ⏱ {post.readTime}
                    </span>
                    <span style={{
                      color: "#00C9A7", fontSize: 13, fontWeight: 600,
                      fontFamily: "var(--font-body)",
                    }}>
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <style>{`@media(max-width:900px){ .blog-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}