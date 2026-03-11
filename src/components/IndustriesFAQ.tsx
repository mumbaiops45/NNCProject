"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INDUSTRIES = [
  { icon: "🏥", label: "Healthcare"            },
  { icon: "🏠", label: "Real Estate"           },
  { icon: "🛒", label: "E-Commerce"            },
  { icon: "🏭", label: "Manufacturing"         },
  { icon: "🎓", label: "Education"             },
  { icon: "🏨", label: "Hospitality"           },
  { icon: "🚚", label: "Logistics"             },
  { icon: "💰", label: "Finance"               },
  { icon: "💼", label: "Professional Services" },
];

const FAQS = [
  {
    q: "What is custom CRM software, and how does it differ from off-the-shelf solutions?",
    a: "Custom CRM is built specifically for your business workflows — not the average business. It integrates with your existing tools, follows your exact processes, and scales without compounding licensing fees. Unlike Salesforce or HubSpot templates, a custom CRM is engineered around how your team actually works.",
  },
  {
    q: "How long does it typically take to develop and deploy a custom CRM system?",
    a: "A standard custom CRM takes 6–12 weeks from discovery to go-live. We provide a detailed timeline after the free discovery consultation — broken into 2-week agile sprints so you see working software at every stage.",
  },
  {
    q: "Is your CRM development compliant with GDPR, PIPEDA, and CCPA?",
    a: "Yes. Every system is engineered to comply with GDPR (UK/EU), PIPEDA (Canada), and CCPA (California/USA) from the architecture level up — not bolted on as an afterthought. Data residency, consent management, and audit logs are all built in by default.",
  },
  {
    q: "What industries do you build CRM systems for?",
    a: "We've delivered custom CRM solutions across healthcare, real estate, e-commerce, manufacturing, education, hospitality, logistics, finance, and professional services. If your business manages customers, pipelines, or service delivery — we can build a CRM for it.",
  },
  {
    q: "Do you offer ongoing support after the CRM is deployed?",
    a: "Absolutely. We provide dedicated post-launch support packages including bug fixes, feature iterations, user training, and performance monitoring. Most clients stay on a monthly retainer for continuous optimisation.",
  },
  {
    q: "Can you integrate the CRM with our existing tools?",
    a: "Yes — we specialise in API-first integrations. Common integrations include HubSpot, Mailchimp, QuickBooks, Stripe, Shopify, Xero, Zapier, Google Workspace, and custom ERP systems. If it has an API, we can connect it.",
  },
];

export default function IndustriesFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="industries-faq"
      style={{
        position: "relative", padding: "110px 0", overflow: "hidden",
        background: "linear-gradient(180deg, #030B18 0%, #061425 100%)",
      }}
    >
      <div className="bg-grid" style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>

        {/* ── Industries ── */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="section-label" style={{ justifyContent: "center" }}>
            Who We Serve
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="section-heading" style={{ marginBottom: 48 }}>
            Helping Businesses{" "}
            <span className="grad-text">Across Industries</span>
          </motion.h2>

          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14,
          }}>
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4, borderColor: "rgba(0,201,167,0.45)", background: "rgba(0,201,167,0.08)" }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "14px 22px", borderRadius: 12,
                  background: "rgba(6,20,37,0.8)",
                  border: "1px solid rgba(0,201,167,0.14)",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  cursor: "default",
                }}
              >
                <span style={{ fontSize: 20 }}>{ind.icon}</span>
                <span style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: 14, color: "rgba(255,255,255,0.75)",
                }}>
                  {ind.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: "100%", height: 1, margin: "0 0 88px",
          background: "linear-gradient(90deg, transparent, rgba(0,201,167,0.2), transparent)",
        }} />

        {/* ── FAQs ── */}
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} className="section-label" style={{ justifyContent: "center" }}>
              Common Questions
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.08 }}
              className="section-heading">
              FAQs
            </motion.h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    background: "rgba(6,20,37,0.85)",
                    border: `1px solid ${isOpen ? "rgba(0,201,167,0.35)" : "rgba(0,201,167,0.12)"}`,
                    borderRadius: 14, overflow: "hidden",
                    backdropFilter: "blur(16px)",
                    transition: "border-color 0.3s",
                  }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%", padding: "22px 26px",
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between", gap: 20,
                      background: "none", border: "none", cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
                      <span style={{
                        width: 28, height: 28, flexShrink: 0,
                        borderRadius: "50%",
                        background: isOpen
                          ? "linear-gradient(135deg,#00C9A7,#00a07a)"
                          : "rgba(0,201,167,0.1)",
                        border: "1px solid rgba(0,201,167,0.25)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: isOpen ? "#000" : "#00C9A7",
                        fontSize: 13, fontWeight: 700, fontFamily: "var(--font-body)",
                        transition: "all 0.3s",
                      }}>
                        Q
                      </span>
                      <span style={{
                        fontFamily: "var(--font-display)", fontWeight: 700,
                        fontSize: 15.5, color: isOpen ? "#fff" : "rgba(255,255,255,0.82)",
                        lineHeight: 1.4,
                      }}>
                        {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        flexShrink: 0, width: 24, height: 24,
                        borderRadius: 6, background: "rgba(0,201,167,0.1)",
                        border: "1px solid rgba(0,201,167,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#00C9A7", fontSize: 16, fontWeight: 700,
                      }}
                    >
                      +
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{
                          padding: "0 26px 24px 70px",
                          borderTop: "1px solid rgba(0,201,167,0.08)",
                          paddingTop: 20,
                        }}>
                          <p style={{
                            color: "rgba(255,255,255,0.58)", fontSize: 15,
                            lineHeight: 1.78, fontFamily: "var(--font-body)",
                          }}>
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}