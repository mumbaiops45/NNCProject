"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "CRM for Real Estate",
    desc: "Manage property inquiries, automate site visits and track broker performance using structured pipelines.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "CRM for Education Institutes",
    desc: "Streamline student inquiries, automate follow-ups and track admissions with intelligent dashboards.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    title: "CRM for Manufacturing",
    desc: "Integrate distributor networks, quotation workflows and production-sales alignment.",
    img: "/manufacturing.png",
  },
  {
    title: "Sales Automation for SMEs",
    desc: "Convert manual sales processes into predictable automated revenue systems.",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    title: "Enterprise Business Systems",
    desc: "Complete ERP & CRM ecosystem integrating HR, billing, inventory and operations.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 text-center bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#14B8A6]/10 blur-[140px] rounded-full animate-pulse" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-6xl font-bold mb-6"
        >
          Industry <span className="text-[#14B8A6]">Solutions</span>
        </motion.h1>

        <p className="relative max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Powerful CRM and automation ecosystems tailored for your industry.
        </p>
      </section>

      {/* ================= SOLUTIONS SECTION ================= */}
      <section className="py-24 px-6 space-y-32">

        {solutions.map((item, index) => (
          <div
            key={index}
            className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={700}
                height={450}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-semibold mb-6">
                {item.title}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {item.desc}
              </p>

              <button className="flex items-center gap-2 text-[#14B8A6] font-semibold hover:gap-4 transition-all">
                Explore Solution <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        ))}

      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 text-center bg-[#14B8A6] text-white">
        <h2 className="text-5xl font-semibold mb-6">
          Ready to Transform Your Business?
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-white/90 text-lg">
          Let’s design a scalable CRM & automation system for your growth.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#14B8A6] px-12 py-5 rounded-full font-semibold shadow-xl"
        >
          Schedule Consultation
        </motion.button>
      </section>

    </div>
  );
}