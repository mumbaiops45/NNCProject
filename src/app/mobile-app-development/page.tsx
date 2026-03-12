"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MobileAppDevelopment() {

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index:number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How much does a mobile app cost in Canada or UK?",
      a: "The cost of mobile app development varies depending on features, integrations and complexity. Most business apps range between $8,000 to $50,000. We provide a detailed quote after understanding your requirements."
    },
    {
      q: "How long does mobile app development take?",
      a: "Most mobile apps take 8–16 weeks depending on features, integrations and testing requirements."
    },
    {
      q: "Do you publish to the App Store and Google Play?",
      a: "Yes. We handle the entire process including testing, app store optimisation and publishing to Apple App Store and Google Play Store."
    },
    {
      q: "Can the app work offline?",
      a: "Yes. We can build apps with offline functionality so users can access data even without internet connectivity."
    }
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div>
            <h1 className="text-4xl font-bold mb-6">
              Custom Mobile App Development for Businesses in Canada, USA & UK
            </h1>

            <p className="mb-6">
              Your customers and your team live on mobile. We build iOS and Android
              applications that are fast, reliable and designed around real user behaviour.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span>Google Partner</span>
              <span>ISO Certified</span>
              <span>GDPR Compliant</span>
              <span>PIPEDA Ready</span>
              <span>Clutch Top Agency</span>
            </div>
          </div>

          {/* FORM */}

          <form className="bg-white text-black p-6 rounded-lg space-y-4">

            <input className="w-full border p-3 rounded" placeholder="First Name"/>
            <input className="w-full border p-3 rounded" placeholder="Last Name"/>
            <input className="w-full border p-3 rounded" placeholder="Phone"/>
            <input className="w-full border p-3 rounded" placeholder="Business Email"/>

            <select className="w-full border p-3 rounded">
              <option>Mobile App Development</option>
              <option>iOS App Development</option>
              <option>Android App Development</option>
            </select>

            <textarea
              className="w-full border p-3 rounded"
              placeholder="Message"
            />

            <button className="bg-blue-700 text-white w-full py-3 rounded">
              Get Free Consultation
            </button>

          </form>

        </div>
      </section>


      {/* CLIENT LOGOS */}

      <section className="py-16 bg-gray-100 text-center">

        <h2 className="text-3xl font-bold mb-8">
          Our Happy Clients
        </h2>

        <div className="flex justify-center gap-12 opacity-60">
          <span>Client Logo</span>
          <span>Client Logo</span>
          <span>Client Logo</span>
          <span>Client Logo</span>
        </div>

      </section>


      {/* SUCCESS STORIES */}

      <section className="py-16 max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border p-6 rounded-lg">
            <h3 className="font-bold mb-3">Manufacturing</h3>
            <p>35% efficiency improvement through automation.</p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="font-bold mb-3">Healthcare</h3>
            <p>42% increase in bookings with mobile scheduling.</p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="font-bold mb-3">D2C Brand</h3>
            <p>2.4× increase in mobile conversion rates.</p>
          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Mobile App Development Services We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "iOS App Development",
              "Android App Development",
              "Cross Platform (React Native / Flutter)",
              "CRM Integrated Mobile Apps",
              "Mobile UI/UX Design",
              "App Maintenance & Support"
            ].map((service,index)=>(
              <div key={index} className="bg-white p-6 rounded shadow">
                <h3 className="font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Tailored for businesses in Canada, USA and UK.
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* BENEFITS */}

      <section className="py-16 max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Key Benefits of Mobile App Development
        </h2>

        <ol className="space-y-4 text-lg">

          <li>1. Native Performance</li>
          <li>2. CRM Integration</li>
          <li>3. App Store Optimisation</li>
          <li>4. Post Launch Support</li>

        </ol>

      </section>


      {/* PLATFORM TOOLS */}

      <section className="bg-gray-100 py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Leading Platform Tools That We Use
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Flutter",
              "React Native",
              "Swift (iOS)",
              "Kotlin (Android)",
              "Firebase",
              "AWS Amplify",
              "Stripe",
              "Twilio",
              "WhatsApp API"
            ].map((tool,index)=>(
              <div key={index} className="bg-white p-6 rounded shadow">
                {tool}
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* AI SECTION */}

      <section className="py-16 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Leverage AI Powered Mobile App Development Solutions
        </h2>

        <p>
          AI Data Analysis · Predictive Insights · Automation at Scale · Real-Time Dashboards
        </p>

      </section>


      {/* CTA */}

      <section className="bg-blue-900 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-6">
          Want Mobile App Development Solutions That Take Your Business to the Next Level?
        </h2>

        <button className="bg-white text-blue-900 px-8 py-3 rounded">
          Connect Now
        </button>

      </section>


      {/* FAQ */}

      <section className="py-20 max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          FAQs
        </h2>

        {faqs.map((faq,index)=>(
          <div key={index} className="border-b py-4">

            <button
              onClick={()=>toggleFaq(index)}
              className="w-full text-left flex justify-between font-semibold"
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
          Ready to Build Next Level Custom Digital Solutions?
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
          USA: +1 631-XXX | Canada: +1 647-XXX | UK: +44 20-XXX | hello@nncdigital.com
        </p>

      </section>

      <Footer />
    </>
  );
}