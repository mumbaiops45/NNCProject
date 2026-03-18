"use client";

// CookiesPolicy.tsx
import React from 'react';
import Navbar from '../components/Navbar';

// Color tokens
const COLORS = {
  teal: "#00C9A7",
  navy2: "#061425",
};

const CookiesPolicy: React.FC = () => {
  const lastUpdated: string = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

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

        .cookies-page {
          background: ${COLORS.navy2};
          min-height: 100vh;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          width: 100%;
          overflow-x: hidden;
        }

        .cookies-container {
          max-width: 850px;
          width: 100%;
          margin: 0 auto;
          padding: 20px 20px 60px;
        }

        /* Header */
        .cookies-header {
          text-align: center;
          margin-bottom: 40px;
          padding-top: 20px;
        }

        .cookies-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #fff;
          line-height: 1.2;
        }

        .cookies-title span {
          background: linear-gradient(135deg, ${COLORS.teal}, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cookies-date {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px;
          display: inline-block;
        }

        .cookies-date strong {
          color: ${COLORS.teal};
          font-weight: 600;
        }

        /* Sections */
        .cookies-section {
          margin-bottom: 32px;
        }

        .cookies-section h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${COLORS.teal};
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .cookies-section h3 {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }

        .cookies-section h3 span {
          color: ${COLORS.teal};
        }

        .cookies-section p {
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          font-size: 15px;
          margin: 0 0 14px 0;
        }

        .cookies-section ul {
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          font-size: 15px;
          margin: 8px 0 14px 0;
          padding-left: 24px;
          list-style-type: disc;
        }

        .cookies-section li {
          margin-bottom: 8px;
          color: rgba(255,255,255,0.75);
        }

        .cookies-section li strong {
          color: ${COLORS.teal};
          font-weight: 600;
        }

        /* Table */
        .table-wrapper {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 16px;
          overflow-x: auto;
          margin: 16px 0;
        }

        .cookies-table {
          width: 100%;
          border-collapse: collapse;
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          min-width: 600px;
        }

        .cookies-table th {
          padding: 12px 8px;
          color: ${COLORS.teal};
          font-weight: 600;
          text-align: left;
          border-bottom: 1px solid ${COLORS.teal}40;
        }

        .cookies-table td {
          padding: 12px 8px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        /* Contact box */
        .contact-box {
          margin-top: 16px;
          padding: 20px;
          background: rgba(0,201,167,0.05);
          border: 1px solid ${COLORS.teal}30;
          border-radius: 16px;
        }

        .contact-box p {
          margin-bottom: 12px;
          color: rgba(255,255,255,0.8);
        }

        .contact-box strong {
          color: ${COLORS.teal};
          font-weight: 600;
          min-width: 100px;
          display: inline-block;
        }

        /* Mobile Styles - 480px and below */
        @media screen and (max-width: 480px) {
          .cookies-container {
            padding: 12px 16px 40px;
          }

          .cookies-header {
            margin-bottom: 30px;
            padding-top: 10px;
          }

          .cookies-title {
            font-size: 26px;
            word-break: break-word;
          }

          .cookies-date {
            font-size: 12px;
            padding: 8px 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
          }

          .cookies-section {
            margin-bottom: 28px;
          }

          .cookies-section h2 {
            font-size: 18px;
            margin-bottom: 12px;
          }

          .cookies-section h3 {
            font-size: 16px;
          }

          .cookies-section p {
            font-size: 14px;
            line-height: 1.7;
            word-break: break-word;
          }

          .cookies-section ul {
            font-size: 14px;
            padding-left: 20px;
          }

          .cookies-section li {
            margin-bottom: 6px;
            word-break: break-word;
          }

          .table-wrapper {
            padding: 12px;
            margin: 12px 0;
          }

          .cookies-table {
            font-size: 13px;
            min-width: 500px;
          }

          .cookies-table th,
          .cookies-table td {
            padding: 8px 6px;
          }

          .contact-box {
            padding: 16px;
          }

          .contact-box p {
            font-size: 14px;
            margin-bottom: 10px;
            word-break: break-word;
          }

          .contact-box strong {
            min-width: 85px;
            font-size: 14px;
          }
        }

        /* Tablet Styles - 481px to 768px */
        @media screen and (min-width: 481px) and (max-width: 768px) {
          .cookies-container {
            padding: 16px 20px 50px;
          }

          .cookies-title {
            font-size: 36px;
          }

          .cookies-section h2 {
            font-size: 22px;
          }

          .cookies-section h3 {
            font-size: 18px;
          }

          .table-wrapper {
            padding: 14px;
          }
        }

        /* Small Mobile - 360px and below */
        @media screen and (max-width: 360px) {
          .cookies-title {
            font-size: 24px;
          }

          .cookies-date {
            font-size: 11px;
            padding: 6px 12px;
            white-space: normal;
          }

          .cookies-table {
            min-width: 400px;
            font-size: 12px;
          }

          .contact-box strong {
            min-width: 70px;
          }
        }
      `}</style>

      <main className="cookies-page">
        <div className="cookies-container">
          {/* Header */}
          <div className="cookies-header">
            <h1 className="cookies-title">
              <span>Cookies Policy</span>
            </h1>
           
          </div>

          {/* What Are Cookies */}
          <div className="cookies-section">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer, smartphone, or other device 
              when you visit a website. They are widely used to make websites work more efficiently, 
              enhance user experience, and provide information to the website owners. Cookies do not 
              typically contain any information that personally identifies a user, but personal information 
              that we store about you may be linked to the information stored in and obtained from cookies.
            </p>
          </div>

          {/* How We Use Cookies */}
          <div className="cookies-section">
            <h2>How Nakshatra Namaha Creations Uses Cookies</h2>
            <p>We use cookies for various purposes, including:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable you to navigate our site and use its features.</li>
              <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information about pages visited, time spent, and error messages.</li>
              <li><strong>Functionality Cookies:</strong> These remember choices you make (such as language preferences) to provide enhanced, personalized features.</li>
              <li><strong>Targeting/Advertising Cookies:</strong> These are used to deliver content that is relevant to your interests and measure the effectiveness of our marketing campaigns.</li>
            </ul>
          </div>

          {/* Types of Cookies */}
          <div className="cookies-section">
            <h2>Types of Cookies We Use</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <h3><span>Session Cookies</span></h3>
              <p>
                These are temporary cookies that expire when you close your browser. They allow us to link 
                your actions during a single browsing session and are essential for certain features to work.
              </p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <h3><span>Persistent Cookies</span></h3>
              <p>
                These remain on your device between browsing sessions and help us remember your preferences 
                and actions across multiple visits to our website. They have an expiration date set in the 
                cookie itself.
              </p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <h3><span>First-Party Cookies</span></h3>
              <p>
                These are set by our website directly and can only be read by our site.
              </p>
            </div>
            
            <div>
              <h3><span>Third-Party Cookies</span></h3>
              <p>
                These are set by domains other than our website. We may use third-party services (like 
                Google Analytics) that place cookies on your device to help us analyze website traffic 
                and usage patterns.
              </p>
            </div>
          </div>

          {/* Specific Cookies */}
          <div className="cookies-section">
            <h2>Specific Cookies We Use</h2>
            <div className="table-wrapper">
              <table className="cookies-table">
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PHPSESSID</td>
                    <td>Maintains user session state</td>
                    <td>Session</td>
                    <td>Essential</td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>Google Analytics - distinguishes users</td>
                    <td>2 years</td>
                    <td>Performance</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Google Analytics - distinguishes users</td>
                    <td>24 hours</td>
                    <td>Performance</td>
                  </tr>
                  <tr>
                    <td>cookie_consent</td>
                    <td>Stores cookie consent preferences</td>
                    <td>1 year</td>
                    <td>Essential</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="cookies-section">
            <h2>How to Control and Manage Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your 
              cookie preferences in the following ways:
            </p>
            
            <div style={{ marginTop: '16px' }}>
              <h3><span>Browser Settings</span></h3>
              <p>
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul>
                <li>Delete all cookies from your browser</li>
                <li>Block cookies from being set</li>
                <li>Allow cookies only from specific websites</li>
                <li>Set your browser to notify you when a cookie is being set</li>
              </ul>
              <p style={{ marginTop: '12px' }}>
                To manage cookies in popular browsers:
              </p>
              <ul>
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
              </ul>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <h3><span>Cookie Consent Popup</span></h3>
              <p>
                When you first visit our website, you will see a cookie consent popup that allows you to 
                accept or reject non-essential cookies. You can change your preferences at any time by 
                clicking the "Cookie Settings" link in the footer of our website.
              </p>
            </div>
          </div>

          {/* Consequences */}
          <div className="cookies-section">
            <h2>What Happens If You Disable Cookies?</h2>
            <p>
              If you choose to disable or reject cookies, some parts of our website may become inaccessible 
              or may not function properly. For example:
            </p>
            <ul>
              <li>You may not be able to log into secure areas of our website</li>
              <li>Your preferences may not be saved</li>
              <li>Some interactive features may not work</li>
              <li>The website may not remember your previous actions</li>
            </ul>
          </div>

          {/* Updates */}
          <div className="cookies-section">
            <h2>Updates to This Cookies Policy</h2>
            <p>
              We may update this Cookies Policy from time to time to reflect changes in our practices, 
              technologies, legal requirements, or for operational reasons. Any changes will be posted 
              on this page with an updated revision date. We encourage you to review this policy 
              periodically to stay informed about our use of cookies.
            </p>
          </div>

          {/* Contact */}
          <div className="cookies-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookies Policy, please contact us:
            </p>
            <div className="contact-box">
              <p><strong>Email:</strong> privacy@nakshatranamahacreations.com</p>
              <p><strong>Contact Form:</strong> www.nakshatranamahacreations.com</p>
              <p><strong>Address:</strong> 50 Philip Ave, Guelph, ON N1E 1R4, Canada</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CookiesPolicy;