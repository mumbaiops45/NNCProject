"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Database,
  Workflow,
  BarChart3,
  Layers,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-[#f8fafc] text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 text-center bg-white overflow-hidden">

        {/* Soft Teal Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#14B8A6]/10 blur-[140px] rounded-full" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-5xl font-bold mb-6 tracking-tight"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
        >
          We build structured CRM and automation ecosystems that
          transform sales operations into predictable revenue systems.
        </motion.p>
      </section>

      {/* ================= SERVICE 1 ================= */}
      <section className="py-28 px-6 bg-white border-t">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Custom CRM Development
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Fully customized CRM systems built around your workflow —
              including pipelines, dashboards, reporting modules and
              role-based access control.
            </p>

            <div className="space-y-3">
              {[
                "Lead Management Systems",
                "Multi-Stage Sales Pipelines",
                "Custom Reporting Dashboards",
                "KPI Monitoring"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Database size={18} className="text-[#14B8A6]" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-lg border"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="CRM Dashboard"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICE 2 ================= */}
      <section className="py-28 px-6 bg-[#f8fafc] border-t">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-lg border order-2 md:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1556155092-8707de31f9c4"
              alt="Sales Automation"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl font-semibold mb-6">
              Sales & Marketing Automation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Convert your sales team into a structured revenue engine
              with automated lead allocation, follow-up tracking and
              campaign performance analytics.
            </p>

            <div className="space-y-3">
              {[
                "Automated Follow-ups",
                "WhatsApp API Integration",
                "Email Automation",
                "Campaign Tracking"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Workflow size={18} className="text-[#14B8A6]" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICE 3 ================= */}
      <section className="py-28 px-6 bg-white border-t">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              CRM Integration & Migration
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We integrate your CRM with ERP systems, websites,
              billing software and third-party APIs to ensure
              complete operational synchronization.
            </p>

            <div className="space-y-3">
              {[
                "ERP Integration",
                "Billing & Inventory Sync",
                "Payment Gateway Integration",
                "Legacy CRM Modernization"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Layers size={18} className="text-[#14B8A6]" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-lg border"
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Integration Systems"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 text-center bg-[#14B8A6] text-white">
        <h2 className="text-4xl font-semibold mb-6">
          Build a Scalable Revenue System
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-white/90">
          Let’s transform your business operations into
          a structured, automated growth engine.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-[#14B8A6] px-10 py-4 rounded-full font-semibold shadow-md"
        >
          Schedule Strategy Consultation
        </motion.button>
      </section>

    </div>
  );
}