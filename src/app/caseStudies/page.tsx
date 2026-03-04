"use client";

import { motion } from "framer-motion";

const stories = [
  {
    industry: "Manufacturing Enterprise",
    title: "End-to-End Distribution CRM Implementation",
    challenge:
      "Manual dealer coordination, delayed reporting cycles, and lack of sales visibility across branches.",
    implementation: [
      "Centralized dealer & distributor management system",
      "Automated quotation & dispatch workflows",
      "Branch-level sales dashboards",
      "Inventory & billing integration",
    ],
    impact: [
      "35% operational efficiency improvement",
      "Real-time sales visibility",
      "Reduced manual coordination",
      "Improved management decision-making",
    ],
  },
  {
    industry: "Healthcare Multi-Clinic Network",
    title: "Mobile App + CRM Automation Ecosystem",
    challenge:
      "Missed follow-ups, disconnected patient data, and no performance tracking across clinics.",
    implementation: [
      "Integrated appointment booking mobile app",
      "Automated WhatsApp reminders",
      "Centralized CRM patient tracking",
      "Doctor & admin KPI dashboards",
    ],
    impact: [
      "42% increase in repeat bookings",
      "Structured follow-up system",
      "Improved patient retention",
      "Clear performance monitoring",
    ],
  },
];

export default function SuccessStories() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-6">
            Real Systems. <span className="text-[#14B8A6]">Measurable Impact.</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We engineer business growth systems — not just software.
          </p>
        </div>

        {/* Case Blocks */}
        <div className="space-y-24">

          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-14"
            >
              <p className="text-sm text-[#14B8A6] font-semibold mb-4">
                {story.industry}
              </p>

              <h3 className="text-3xl font-semibold mb-10">
                {story.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-12">

                {/* Challenge */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-800">
                    Business Challenge
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {story.challenge}
                  </p>
                </div>

                {/* Implementation */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-800">
                    Our Implementation
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    {story.implementation.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="w-2 h-2 bg-[#14B8A6] rounded-full mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-800">
                    Measurable Impact
                  </h4>
                  <ul className="space-y-3">
                    {story.impact.map((item, i) => (
                      <li key={i} className="text-[#14B8A6] font-semibold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}