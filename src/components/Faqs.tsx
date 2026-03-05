// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "How much does custom CRM development cost?",
//     answer:
//       "The cost depends on modules, integrations, automation complexity, and scalability requirements. We provide tailored solutions after understanding your business needs.",
//   },
//   {
//     question: "How long does it take to develop a CRM?",
//     answer:
//       "Typically between 6–12 weeks depending on features, automation layers, integrations, and business workflow complexity.",
//   },
//   {
//     question: "Can CRM integrate with WhatsApp?",
//     answer:
//       "Yes. We integrate WhatsApp Business API for automated communication, follow-ups, reminders, and campaign messaging directly within your CRM system.",
//   },
//   {
//     question: "Is the CRM scalable for multi-branch operations?",
//     answer:
//       "Absolutely. Our CRM systems are designed to support multi-location expansion with role-based access, branch dashboards, and centralized reporting.",
//   },
// ];

// export default function FAQPage() {
//   const [activeIndex, setActiveIndex] = useState<number | null>();

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-white text-gray-800">

//       {/* ================= HERO ================= */}
//       <section className="py-28 bg-gray-50 text-center">
//         <h1 className="text-5xl font-bold mb-6">
//           Frequently Asked <span className="text-[#14B8A6]">Questions</span>
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg text-gray-600">
//           Everything you need to know about our custom CRM development and automation solutions.
//         </p>
//       </section>

//       {/* ================= FAQ SECTION ================= */}
//       <section className="py-24">
//         <div className="max-w-4xl mx-auto px-6 space-y-6">

//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
//             >
//               {/* Question */}
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex justify-between items-center px-8 py-6 text-left font-semibold text-lg hover:bg-gray-50 transition"
//               >
//                 {faq.question}
//                 <ChevronDown
//                   className={`transition-transform duration-300 ${
//                     activeIndex === index ? "rotate-180 text-[#14B8A6]" : ""
//                   }`}
//                 />
//               </button>

//               {/* Answer */}
//               <AnimatePresence>
//                 {activeIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="px-8 pb-6 text-gray-600 leading-relaxed"
//                   >
//                     {faq.answer}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* ================= FINAL CTA ================= */}
//       <section className="py-24 bg-[#14B8A6] text-white text-center">
//         <h2 className="text-4xl font-semibold mb-6">
//           Still Have Questions?
//         </h2>
//         <p className="max-w-2xl mx-auto mb-8 text-white/90 text-lg">
//           Let’s discuss your business requirements and design a CRM solution tailored specifically for you.
//         </p>
//         <a
//           href="/contact"
//           className="bg-white text-[#14B8A6] px-10 py-4 rounded-full font-semibold hover:opacity-90 transition"
//         >
//           Schedule a Consultation
//         </a>
//       </section>

//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TEAL = "#00C9A7";
const NAVY = "#0B1525";

const FAQS = [
  {
    q: "How much does custom CRM development cost?",
    a: "The cost depends on modules, integrations, automation complexity, and scalability requirements. We provide tailored proposals after understanding your business needs — no generic quotes.",
  },
  {
    q: "How long does it take to develop a CRM?",
    a: "Typically between 6–12 weeks depending on features and integrations. We'll give you a precise timeline after the discovery session.",
  },
  {
    q: "Can the CRM integrate with WhatsApp?",
    a: "Yes. We integrate WhatsApp Business API for automated communication, follow-ups, and lead notifications directly within the CRM workflow.",
  },
  {
    q: "Is the CRM scalable for multi-branch operations?",
    a: "Absolutely. Our CRM systems are designed with branch-level dashboards, role-based access, and multi-location data management from the ground up.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every engagement includes a structured onboarding period, team training, and ongoing optimization cycles. We're your long-term technology partner, not a one-off vendor.",
  },
];

export default function Faqs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "100px 48px", background: NAVY }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div className="eye" style={{ justifyContent: "center" }}>
          <span className="eye-bar" />
          <span className="eye-txt mono">FAQ</span>
          <span className="eye-bar" />
        </div>

        <h2 className="syne" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 52, letterSpacing: "-0.02em" }}>
          Frequently Asked <span className="gtxt">Questions</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {FAQS.map((f, i) => (
            <div key={i} className="faq">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", background: "none", border: "none", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}>
                <span className="syne" style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ fontSize: 22, color: TEAL, flexShrink: 0, marginLeft: 16 }}>
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", paddingBottom: 24 }}>
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}