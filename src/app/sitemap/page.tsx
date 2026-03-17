"use client";

// Sitemap.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Main Sitemap Component
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
    <div className="sitemap-page">
      <Navbar />
      
      <main className="sec" style={{
        padding: '80px 24px',
        background: 'var(--n1)',
        minHeight: 'calc(100vh - 400px)'
      }}>
        <div className="sec-content" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <div className="section-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--bg-teal)',
              border: '1px solid var(--border-teal)',
              borderRadius: '100px',
              padding: '8px 24px',
              marginBottom: '20px'
            }}>
              <span className="section-badge__dot" style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--teal)',
                boxShadow: '0 0 10px var(--teal)'
              }} />
              <span className="section-badge__text" style={{
                color: 'var(--teal)',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>Site Navigation</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '16px',
              color: '#fff'
            }}>
              <span className="grad-text">Sitemap</span>
            </h1>
            
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              Find your way around our website. Browse all pages and resources available.
            </p>
          </div>

          {/* Sitemap Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {sitemapSections.map((section, index) => (
              <div
                key={index}
                className="card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '28px',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  animation: `fadeUp 0.5s ease ${index * 0.1}s both`
                }}
              >
                {/* Section Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '16px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'var(--bg-teal)',
                    border: '1px solid var(--border-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>
                    {section.icon}
                  </div>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#fff',
                    margin: 0
                  }}>
                    {section.title}
                  </h2>
                </div>

                {/* Links List */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} style={{
                      marginBottom: linkIndex === section.links.length - 1 ? 0 : '16px'
                    }}>
                      <a
                        href={link.path}
                        style={{
                          display: 'block',
                          textDecoration: 'none',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid transparent',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--bg-teal)';
                          e.currentTarget.style.borderColor = 'var(--border-teal)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                          e.currentTarget.style.borderColor = 'transparent';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}>
                          <span style={{
                            color: 'var(--teal)',
                            fontSize: '14px'
                          }}>▶</span>
                          <div>
                            <span style={{
                              color: '#fff',
                              fontWeight: '600',
                              fontSize: '1rem',
                              display: 'block',
                              marginBottom: '4px'
                            }}>
                              {link.name}
                            </span>
                            <span style={{
                              color: 'var(--text-muted)',
                              fontSize: '0.85rem'
                            }}>
                              {link.description}
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links Section */}
          <div className="card-teal" style={{
            background: 'linear-gradient(135deg, rgba(0,201,167,0.1) 0%, rgba(0,201,167,0.02) 100%)',
            border: '1px solid var(--border-teal)',
            borderRadius: 'var(--radius-2xl)',
            padding: '40px',
            marginTop: '20px'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '12px'
                }}>
                  Quick Access
                </h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '1rem',
                  maxWidth: '500px',
                  lineHeight: '1.8'
                }}>
                  Can't find what you're looking for? Visit our contact page or check out our most popular pages below.
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <a
                  href="/contact"
                  className="btn-teal"
                  style={{
                    padding: '14px 32px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, var(--teal), var(--teal-dark))',
                    color: '#000',
                    fontWeight: '700',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,201,167,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Contact Us
                </a>
                
                <a
                  href="/services"
                  style={{
                    padding: '14px 32px',
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    background: 'transparent',
                    color: '#fff',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--teal)';
                    e.currentTarget.style.background = 'rgba(0,201,167,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Popular Links Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '16px',
              marginTop: '32px',
              paddingTop: '32px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              {[
                { name: "Web Development", path: "/services/web-development" },
                { name: "Mobile Apps", path: "/services/mobile-apps" },
                { name: "UI/UX Design", path: "/services/ui-ux-design" },
                { name: "Branding", path: "/services/branding" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms", path: "/terms-of-service" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  style={{
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-teal)';
                    e.currentTarget.style.borderColor = 'var(--border-teal)';
                    e.currentTarget.style.color = 'var(--teal)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* XML Sitemap Note */}
          <div style={{
            marginTop: '40px',
            textAlign: 'center',
            padding: '20px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed var(--border-subtle)'
          }}>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem'
            }}>
              🔍 Looking for XML sitemap? Access our{' '}
              <a 
                href="/sitemap.xml" 
                style={{ 
                  color: 'var(--teal)', 
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                XML Sitemap
              </a>{' '}
              for search engines.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default Sitemap;