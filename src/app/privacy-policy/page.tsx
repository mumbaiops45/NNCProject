"use client";

// PrivacyPolicy.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Main Privacy Policy Component
const PrivacyPolicy: React.FC = () => {
  const lastUpdated: string = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="privacy-policy-page">
      <Navbar />
      
      <main className="sec" style={{
        padding: '80px 24px',
        background: 'var(--n1)'
      }}>
        <div className="sec-content-sm" style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: '800',
              marginBottom: '16px',
              color: '#fff'
            }}>
              <span className="grad-text">Privacy Policy</span>
            </h1>
           
          </div>

          {/* Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            <p style={paragraphStyle}>
              This Privacy Policy explains how Nakshatra Namaha Creations collects, uses, shares, 
              and protects the personal information of users who visit or interact with 
              nakshatranamahacreations.com or use our IT and software services. By accessing our 
              website or submitting your information to us, you agree to the terms outlined in 
              this Privacy Policy.
            </p>

            <section>
              <h2 style={headingStyle}>Information We Collect</h2>
              <p style={paragraphStyle}>
                We collect personal information such as your name, email address, phone number, 
                business details, project requirements, and any other information you voluntarily 
                share with us through contact forms, service inquiries, or communication channels. 
                Additionally, we may collect non-personal data such as browser type, IP address, 
                device details, and interaction logs to improve the performance, security, and user 
                experience of our website.
              </p>
            </section>

            <section>
              <h2 style={headingStyle}>How We Use Your Information</h2>
              <p style={paragraphStyle}>
                Nakshatra Namaha Creations uses the collected data to understand your requirements, 
                respond to inquiries, deliver services, process communication, and improve our 
                website's functionality. We may also use your data for internal research, analytics, 
                marketing communication, or service-related updates, but only with your consent or 
                when legally allowed.
              </p>
            </section>

            <section>
              <h2 style={headingStyle}>Information Sharing and Disclosure</h2>
              <p style={paragraphStyle}>
                We may share your information with trusted third-party service providers such as 
                hosting companies, email service platforms, payment processors, or analytics tools 
                when necessary for service delivery. These third parties are required to maintain 
                confidentiality and are not permitted to use your data for any unrelated purposes. 
                We do not sell, rent, or trade your personal information to any external parties.
              </p>
            </section>

            <section>
              <h2 style={headingStyle}>Data Security</h2>
              <p style={paragraphStyle}>
                We take reasonable security measures to protect your data from unauthorized access, 
                misuse, data loss, or alteration. However, no online system is completely secure, 
                and we cannot guarantee absolute protection. Users are responsible for maintaining 
                the confidentiality of passwords or sensitive login details used for accessing any 
                client portals or project dashboards.
              </p>
            </section>

            <section>
              <h2 style={headingStyle}>Third-Party Links</h2>
              <p style={paragraphStyle}>
                Our website may contain links to third-party websites or services. Nakshatra Namaha 
                Creations is not responsible for the privacy practices, content, or policies of 
                these external websites. Users should review the privacy policies of any third-party 
                sites before sharing personal information.
              </p>
            </section>

            <section>
              <h2 style={headingStyle}>Your Rights</h2>
              <p style={paragraphStyle}>
                You have the right to access, update, or request deletion of your personal information 
                stored with us. You may also request clarification on how your data is collected or 
                used. To exercise these rights, you can contact us using the information provided on 
                our website.
              </p>
            </section>

            <section>
              <h2 style={headingStyle}>Changes to This Privacy Policy</h2>
              <p style={paragraphStyle}>
                We may update this Privacy Policy from time to time to reflect changes in our services, 
                legal requirements, or business practices. The latest version will always be available 
                on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 style={headingStyle}>Contact Us</h2>
              <p style={paragraphStyle}>
                If you have any questions or concerns regarding this Privacy Policy or the handling of 
                your personal information, you may contact Nakshatra Namaha Creations using our official 
                email or contact form available on nakshatranamahacreations.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      
    </div>
  );
};

// Reusable styles
const headingStyle: React.CSSProperties = {
  fontSize: '1.6rem',
  fontWeight: '700',
  marginBottom: '16px',
  color: '#fff',
  borderBottom: '1px solid var(--border-subtle)',
  paddingBottom: '8px'
};

const paragraphStyle: React.CSSProperties = {
  color: 'var(--text-muted)',
  lineHeight: '1.8',
  fontSize: '1rem',
  margin: 0
};

export default PrivacyPolicy;