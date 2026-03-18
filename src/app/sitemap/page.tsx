"use client";

// Sitemap.tsx
import React from 'react';
import Navbar from '../components/Navbar';

// Color tokens
const COLORS = {
  teal: "#00C9A7",
  tealDark: "#00a07a",
  navy2: "#061425",
};

const Sitemap: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  // Sitemap sections data
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: "🏠",
      links: [
        { name: "Home", path: "/", description: "Return to homepage" },
        { name: "About Us", path: "/about-us", description: "Learn about our company" },
        { name: "Services", path: "/services", description: "Explore our IT services" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" }
      ]
    },
    {
      title: "Our Services",
      icon: "⚙️",
      links: [
        { name: "Web Development", path: "/services/web-development", description: "Custom website development" },
        { name: "Mobile App Development", path: "/services/mobile-apps", description: "iOS and Android apps" },
        { name: "Software Solutions", path: "/services/software-solutions", description: "Enterprise software" },
        { name: "UI/UX Design", path: "/services/ui-ux-design", description: "User-centered design" },
        { name: "Branding", path: "/services/branding", description: "Brand identity and strategy" },
        { name: "IT Consulting", path: "/services/it-consulting", description: "Expert IT advice" }
      ]
    },
    {
      title: "Legal & Policies",
      icon: "📜",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy", description: "How we handle your data" },
        { name: "Terms of Service", path: "/terms-of-service", description: "Terms and conditions" },
        { name: "Cookies Policy", path: "/cookies-policy", description: "Cookie usage information" }
      ]
    },
    {
      title: "Resources",
      icon: "📚",
      links: [
        { name: "Blog", path: "/blog", description: "Latest articles and news" },
        { name: "Case Studies", path: "/case-studies", description: "Client success stories" },
        { name: "FAQs", path: "/faqs", description: "Frequently asked questions" },
        { name: "Support", path: "/support", description: "Get help and support" }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: ${COLORS.navy2};
        }

        .sitemap-page {
          background: ${COLORS.navy2};
          min-height: 100vh;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          width: 100%;
          overflow-x: hidden;
        }

        .sitemap-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 20px 20px 60px;
        }

        /* Header */
        .sitemap-header {
          text-align: center;
          margin-bottom: 40px;
          padding-top: 20px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0,201,167,0.1);
          border: 1px solid ${COLORS.teal}40;
          border-radius: 100px;
          padding: 8px 20px;
          margin-bottom: 20px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${COLORS.teal};
          box-shadow: 0 0 10px ${COLORS.teal};
        }

        .badge-text {
          color: ${COLORS.teal};
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .sitemap-title {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #fff;
          line-height: 1.2;
        }

        .sitemap-title span {
          background: linear-gradient(135deg, ${COLORS.teal}, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sitemap-description {
          color: rgba(255,255,255,0.6);
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Grid */
        .sitemap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        /* Cards */
        .sitemap-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 24px;
          transition: all 0.3s ease;
          height: fit-content;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(0,201,167,0.1);
          border: 1px solid ${COLORS.teal}40;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        /* Links */
        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-item {
          margin-bottom: 12px;
        }

        .link-item:last-child {
          margin-bottom: 0;
        }

        .sitemap-link {
          display: block;
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .sitemap-link:hover {
          background: rgba(0,201,167,0.1);
          border-color: ${COLORS.teal}40;
          transform: translateX(5px);
        }

        .link-content {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .link-arrow {
          color: ${COLORS.teal};
          font-size: 14px;
          line-height: 1.5;
        }

        .link-text {
          flex: 1;
        }

        .link-name {
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          display: block;
          margin-bottom: 4px;
        }

        .link-desc {
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          line-height: 1.5;
        }

        /* Quick Access Section */
        .quick-access {
          background: linear-gradient(135deg, rgba(0,201,167,0.1) 0%, rgba(0,201,167,0.02) 100%);
          border: 1px solid ${COLORS.teal}40;
          border-radius: 32px;
          padding: 32px;
          margin-top: 20px;
        }

        .quick-header {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .quick-title {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .quick-text {
          color: rgba(255,255,255,0.6);
          font-size: 15px;
          max-width: 500px;
          line-height: 1.7;
        }

        .quick-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 12px 28px;
          border-radius: 12px;
          background: linear-gradient(135deg, ${COLORS.teal}, ${COLORS.tealDark});
          color: #000;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
          display: inline-block;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px ${COLORS.teal}40;
        }

        .btn-secondary {
          padding: 12px 28px;
          border-radius: 12px;
          border: 2px solid rgba(255,255,255,0.2);
          background: transparent;
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .btn-secondary:hover {
          border-color: ${COLORS.teal};
          background: rgba(0,201,167,0.1);
        }

        /* Popular Links */
        .popular-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .popular-link {
          padding: 10px 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          transition: all 0.2s ease;
        }

        .popular-link:hover {
          background: rgba(0,201,167,0.1);
          border-color: ${COLORS.teal}40;
          color: ${COLORS.teal};
        }

        /* XML Note */
        .xml-note {
          margin-top: 32px;
          padding: 20px;
          text-align: center;
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
          border: 1px dashed rgba(255,255,255,0.1);
        }

        .xml-note p {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
        }

        .xml-link {
          color: ${COLORS.teal};
          text-decoration: none;
          font-weight: 600;
        }

        .xml-link:hover {
          text-decoration: underline;
        }

        /* Desktop Large */
        @media screen and (max-width: 1200px) {
          .sitemap-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .popular-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Tablet */
        @media screen and (max-width: 768px) {
          .sitemap-container {
            padding: 16px 20px 50px;
          }

          .sitemap-title {
            font-size: 36px;
          }

          .sitemap-description {
            font-size: 15px;
            padding: 0 10px;
          }

          .sitemap-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .sitemap-card {
            padding: 20px;
          }

          .card-icon {
            width: 44px;
            height: 44px;
            font-size: 22px;
          }

          .card-title {
            font-size: 18px;
          }

          .quick-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .quick-title {
            font-size: 24px;
          }

          .quick-buttons {
            width: 100%;
          }

          .btn-primary, .btn-secondary {
            flex: 1;
            text-align: center;
          }

          .popular-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Mobile */
        @media screen and (max-width: 480px) {
          .sitemap-container {
            padding: 12px 16px 40px;
          }

          .sitemap-header {
            margin-bottom: 30px;
            padding-top: 10px;
          }

          .header-badge {
            padding: 6px 16px;
          }

          .badge-text {
            font-size: 11px;
          }

          .sitemap-title {
            font-size: 28px;
          }

          .sitemap-description {
            font-size: 14px;
            line-height: 1.6;
          }

          .sitemap-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sitemap-card {
            padding: 18px;
          }

          .card-header {
            gap: 10px;
          }

          .card-icon {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .card-title {
            font-size: 18px;
          }

          .link-name {
            font-size: 14px;
          }

          .link-desc {
            font-size: 12px;
          }

          .quick-access {
            padding: 24px 16px;
          }

          .quick-title {
            font-size: 22px;
          }

          .quick-text {
            font-size: 14px;
          }

          .quick-buttons {
            flex-direction: column;
            gap: 12px;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
            padding: 12px 20px;
          }

          .popular-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .popular-link {
            font-size: 13px;
            padding: 8px 10px;
          }

          .xml-note {
            padding: 16px;
          }

          .xml-note p {
            font-size: 13px;
            line-height: 1.6;
          }
        }

        /* Small Mobile */
        @media screen and (max-width: 360px) {
          .sitemap-title {
            font-size: 24px;
          }

          .popular-grid {
            grid-template-columns: 1fr;
          }

          .card-icon {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }
        }

        /* Animation */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.5s ease forwards;
        }
      `}</style>

      <main className="sitemap-page">
        <div className="sitemap-container">
          {/* Header */}
          <div className="sitemap-header">
            <div className="header-badge">
              <span className="badge-dot" />
              <span className="badge-text">Site Navigation</span>
            </div>

            <h1 className="sitemap-title">
              <span>Sitemap</span>
            </h1>
            
            <p className="sitemap-description">
              Find your way around our website. Browse all pages and resources available.
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="sitemap-grid">
            {sitemapSections.map((section, index) => (
              <div
                key={index}
                className="sitemap-card fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Section Header */}
                <div className="card-header">
                  <div className="card-icon">
                    {section.icon}
                  </div>
                  <h2 className="card-title">
                    {section.title}
                  </h2>
                </div>

                {/* Links List */}
                <ul className="links-list">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="link-item">
                      <a href={link.path} className="sitemap-link">
                        <div className="link-content">
                          <span className="link-arrow">▶</span>
                          <div className="link-text">
                            <span className="link-name">{link.name}</span>
                            <span className="link-desc">{link.description}</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Access Section */}
          <div className="quick-access">
            <div className="quick-header">
              <div>
                <h3 className="quick-title">Quick Access</h3>
                <p className="quick-text">
                  Can't find what you're looking for? Visit our contact page or check out our most popular pages below.
                </p>
              </div>
              
              <div className="quick-buttons">
                <a href="/contact" className="btn-primary">
                  Contact Us
                </a>
                
                <a href="/services" className="btn-secondary">
                  View Services
                </a>
              </div>
            </div>

            {/* Popular Links Grid */}
            <div className="popular-grid">
              {[
                { name: "Web Development", path: "/services/web-development" },
                { name: "Mobile Apps", path: "/services/mobile-apps" },
                { name: "UI/UX Design", path: "/services/ui-ux-design" },
                { name: "Branding", path: "/services/branding" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms", path: "/terms-of-service" }
              ].map((link, index) => (
                <a key={index} href={link.path} className="popular-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* XML Sitemap Note */}
          <div className="xml-note">
            <p>
              🔍 Looking for XML sitemap? Access our{' '}
              <a href="/sitemap.xml" className="xml-link">
                XML Sitemap
              </a>{' '}
              for search engines.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sitemap;