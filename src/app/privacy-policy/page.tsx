"use client";

// PrivacyPolicy.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Color tokens
const COLORS = {
  teal: "#00C9A7",
  navy0: "#010812",
  navy1: "#030B18",
  navy2: "#061425",
};

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
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .privacy-policy-page {
          background: ${COLORS.navy2};
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
        }

        .pp-main {
          padding: clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px) clamp(60px, 8vw, 100px);
        }

        .pp-container {
          max-width: 850px;
          margin: 0 auto;
        }

        /* Header */
        .pp-header {
          text-align: center;
          margin-bottom: clamp(40px, 6vw, 60px);
        }

        .pp-title {
          font-size: clamp(32px, 6vw, 48px);
          font-weight: 800;
          margin-bottom: 16px;
          color: #fff;
        }

        .pp-title span {
          background: linear-gradient(135deg, ${COLORS.teal}, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pp-date {
          color: rgba(255,255,255,0.5);
          font-size: clamp(13px, 2vw, 15px);
          padding: 10px 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px;
          display: inline-block;
        }

        .pp-date strong {
          color: ${COLORS.teal};
          font-weight: 600;
        }

        /* Section */
        .pp-section {
          margin-bottom: clamp(32px, 5vw, 48px);
        }

        .pp-section h2 {
          font-size: clamp(20px, 3vw, 24px);
          font-weight: 700;
          color: ${COLORS.teal};
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .pp-section p {
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          font-size: clamp(14px, 1.8vw, 16px);
          margin: 0;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .pp-main {
            padding: 20px 20px 50px;
          }

          .pp-section h2 {
            border-bottom-width: 1px;
          }
        }

        @media (max-width: 480px) {
          .pp-main {
            padding: 16px 16px 40px;
          }

          .pp-date {
            padding: 8px 18px;
            width: 100%;
          }
        }
      `}</style>

      <main className="pp-main">
        <div className="pp-container">
          {/* Header */}
          <div className="pp-header">
            <h1 className="pp-title">
              <span>Privacy Policy</span>
            </h1>
           
          </div>

          {/* Content Sections */}
          <div className="pp-section">
            <h2>Introduction</h2>
            <p>
              This Privacy Policy explains how Nakshatra Namaha Creations collects, uses, shares, 
              and protects the personal information of users who visit or interact with 
              nakshatranamahacreations.com or use our IT and software services. By accessing our 
              website or submitting your information to us, you agree to the terms outlined in 
              this Privacy Policy.
            </p>
          </div>

          <div className="pp-section">
            <h2>Information We Collect</h2>
            <p>
              We collect personal information such as your name, email address, phone number, 
              business details, project requirements, and any other information you voluntarily 
              share with us through contact forms, service inquiries, or communication channels. 
              Additionally, we may collect non-personal data such as browser type, IP address, 
              device details, and interaction logs to improve the performance, security, and user 
              experience of our website.
            </p>
          </div>

          <div className="pp-section">
            <h2>How We Use Your Information</h2>
            <p>
              Nakshatra Namaha Creations uses the collected data to understand your requirements, 
              respond to inquiries, deliver services, process communication, and improve our 
              website's functionality. We may also use your data for internal research, analytics, 
              marketing communication, or service-related updates, but only with your consent or 
              when legally allowed.
            </p>
          </div>

          <div className="pp-section">
            <h2>Information Sharing and Disclosure</h2>
            <p>
              We may share your information with trusted third-party service providers such as 
              hosting companies, email service platforms, payment processors, or analytics tools 
              when necessary for service delivery. These third parties are required to maintain 
              confidentiality and are not permitted to use your data for any unrelated purposes. 
              We do not sell, rent, or trade your personal information to any external parties.
            </p>
          </div>

          <div className="pp-section">
            <h2>Data Security</h2>
            <p>
              We take reasonable security measures to protect your data from unauthorized access, 
              misuse, data loss, or alteration. However, no online system is completely secure, 
              and we cannot guarantee absolute protection. Users are responsible for maintaining 
              the confidentiality of passwords or sensitive login details used for accessing any 
              client portals or project dashboards.
            </p>
          </div>

          <div className="pp-section">
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. Nakshatra Namaha 
              Creations is not responsible for the privacy practices, content, or policies of 
              these external websites. Users should review the privacy policies of any third-party 
              sites before sharing personal information.
            </p>
          </div>

          <div className="pp-section">
            <h2>Your Rights</h2>
            <p>
              You have the right to access, update, or request deletion of your personal information 
              stored with us. You may also request clarification on how your data is collected or 
              used. To exercise these rights, you can contact us using the information provided on 
              our website.
            </p>
          </div>

          <div className="pp-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, 
              legal requirements, or business practices. The latest version will always be available 
              on this page with an updated date.
            </p>
          </div>

          <div className="pp-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or the handling of 
              your personal information, you may contact Nakshatra Namaha Creations using our official 
              email or contact form available on nakshatranamahacreations.com.
            </p>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default PrivacyPolicy;