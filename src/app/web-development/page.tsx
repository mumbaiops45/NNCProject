"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What technologies do you build with?",
      a: "We use modern technologies like React, Node.js, Laravel, WordPress, Python and cloud platforms like AWS, Azure and Google Cloud to build secure and scalable solutions for businesses in Canada, USA and UK."
    },
    {
      q: "How long does a website take to build?",
      a: "Typical projects take between 3 to 8 weeks depending on complexity, features and integrations required."
    },
    {
      q: "Do you do SEO as part of the website build?",
      a: "Yes. Every website we develop includes SEO-ready architecture, fast loading speed, Core Web Vitals optimization and technical SEO setup."
    },
    {
      q: "Can you redesign our existing website?",
      a: "Yes. We specialize in redesigning outdated websites and transforming them into modern, conversion-optimized platforms."
    },
    {
      q: "Do you offer website maintenance?",
      a: "Yes. We provide long-term website maintenance including security updates, performance optimization and feature enhancements."
    }
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}>
            <h1 className="text-4xl font-bold mb-6">
              Web Development Services That Drive Real Business Results in Canada, USA & UK
            </h1>

            <p className="text-lg mb-6">
              Your website is your most important salesperson. We build enterprise websites
              and custom web apps that are fast, mobile-optimised, SEO-ready and built to convert.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span>Google Partner</span>
              <span>ISO Certified</span>
              <span>GDPR Compliant</span>
              <span>PIPEDA Ready</span>
              <span>Clutch Top Agency</span>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            className="bg-white text-black p-6 rounded-xl shadow-lg space-y-4"
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
          >
            <input className="w-full border p-3 rounded" placeholder="First Name"/>
            <input className="w-full border p-3 rounded" placeholder="Last Name"/>
            <input className="w-full border p-3 rounded" placeholder="Phone"/>
            <input className="w-full border p-3 rounded" placeholder="Business Email"/>
            <select className="w-full border p-3 rounded">
              <option>Web Development</option>
              <option>E-Commerce</option>
              <option>Web App</option>
            </select>
            <textarea className="w-full border p-3 rounded" placeholder="Message"/>
            <button className="bg-blue-700 text-white w-full py-3 rounded">
              Get Free Consultation
            </button>
          </motion.form>

        </div>
      </section>


      {/* CLIENT LOGOS */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Happy Clients</h2>
        <div className="flex gap-12 justify-center opacity-60">
          <span>Client Logo</span>
          <span>Client Logo</span>
          <span>Client Logo</span>
          <span>Client Logo</span>
        </div>
      </section>


      {/* SUCCESS STORIES */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold text-xl mb-3">Manufacturing</h3>
            <p>35% efficiency improvement through automation.</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-bold text-xl mb-3">Healthcare</h3>
            <p>42% increase in patient bookings after redesign.</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-bold text-xl mb-3">D2C Brand</h3>
            <p>2.4× conversion increase with optimized e-commerce.</p>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Web Development Services We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Enterprise Website Development",
              "Custom Web Applications",
              "E-Commerce Development",
              "WordPress Development",
              "Landing Page & Funnel Development",
              "Web Portal Development",
              "UI/UX Design & Prototyping",
              "Website Redesign",
              "Website Maintenance & Support"
            ].map((service,index)=>(
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-gray-600">
                  Tailored web solutions for businesses in Canada, USA and UK.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* KEY BENEFITS */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Key Benefits of Web Development
        </h2>

        <ol className="space-y-4 text-lg">
          <li>1. Core Web Vitals Optimised</li>
          <li>2. Mobile-First Design</li>
          <li>3. SEO-Ready Architecture</li>
          <li>4. Security First (GDPR / PIPEDA)</li>
        </ol>
      </section>


      {/* PLATFORM TOOLS */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Leading Platform Tools That We Use
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {["React","Node.js","Laravel","WordPress","Flutter","Python","MySQL","AWS","Azure","Google Cloud"]
              .map((tool,index)=>(
                <div key={index} className="bg-white p-6 rounded shadow">
                  {tool}
                </div>
              ))}
          </div>

        </div>
      </section>


      {/* AI SOLUTIONS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Leverage AI-Powered Web Development Solutions
        </h2>

        <p className="text-lg">
          AI Data Analysis · Predictive Insights · Automation at Scale · Real-Time Dashboards
        </p>
      </section>


      {/* CTA */}
      <section className="bg-blue-900 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-6">
          Want Web Development Solutions That Take Your Business to the Next Level?
        </h2>

        <button className="bg-white text-blue-900 px-8 py-3 rounded">
          Connect Now
        </button>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Us as Your Partner?
          </h2>

          <p>
            Backed by Nakshatra Namaha Creations Pvt. Ltd. with 8+ years of
            experience and 565+ completed projects. Our Bangalore HQ supports
            clients across Canada, USA and the UK.
          </p>
        </div>

        <div className="bg-gray-200 h-64 flex items-center justify-center rounded">
          Video Placeholder
        </div>

      </section>


      {/* GLOBAL PRESENCE */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Global Presence</h2>

        <p>Toronto · New York · London · Bangalore · Mumbai · Hyderabad</p>
      </section>


      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">FAQs</h2>

        {faqs.map((faq,index)=>(
          <div key={index} className="border-b py-4">

            <button
              onClick={()=>toggleFaq(index)}
              className="w-full text-left font-semibold flex justify-between"
            >
              {faq.q}
              <span>{openFaq===index ? "-" : "+"}</span>
            </button>

            {openFaq===index && (
              <p className="mt-3 text-gray-600">{faq.a}</p>
            )}

          </div>
        ))}
      </section>


      {/* CONTACT FORM */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Ready to Build Next-Level Custom Digital Solutions?
        </h2>

        <form className="max-w-2xl mx-auto space-y-4">

          <input className="w-full border p-3 rounded" placeholder="Name"/>
          <input className="w-full border p-3 rounded" placeholder="Phone"/>
          <input className="w-full border p-3 rounded" placeholder="Business Email"/>
          <textarea className="w-full border p-3 rounded" placeholder="Project Description"/>

          <button className="bg-blue-700 text-white px-8 py-3 rounded">
            Submit
          </button>

        </form>

        <p className="mt-6 text-gray-600">
          USA: +1 631-XXX | Canada: +1 647-XXX | UK: +44 20-XXX
        </p>
      </section>

      <Footer />
    </>
  );
}