"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does custom CRM development cost?",
    answer:
      "The cost depends on modules, integrations, automation complexity, and scalability requirements. We provide tailored solutions after understanding your business needs.",
  },
  {
    question: "How long does it take to develop a CRM?",
    answer:
      "Typically between 6–12 weeks depending on features, automation layers, integrations, and business workflow complexity.",
  },
  {
    question: "Can CRM integrate with WhatsApp?",
    answer:
      "Yes. We integrate WhatsApp Business API for automated communication, follow-ups, reminders, and campaign messaging directly within your CRM system.",
  },
  {
    question: "Is the CRM scalable for multi-branch operations?",
    answer:
      "Absolutely. Our CRM systems are designed to support multi-location expansion with role-based access, branch dashboards, and centralized reporting.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>();

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-gray-50 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Frequently Asked <span className="text-[#14B8A6]">Questions</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Everything you need to know about our custom CRM development and automation solutions.
        </p>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left font-semibold text-lg hover:bg-gray-50 transition"
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-[#14B8A6]" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-8 pb-6 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-[#14B8A6] text-white text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Still Have Questions?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90 text-lg">
          Let’s discuss your business requirements and design a CRM solution tailored specifically for you.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#14B8A6] px-10 py-4 rounded-full font-semibold hover:opacity-90 transition"
        >
          Schedule a Consultation
        </a>
      </section>

    </div>
  );
}