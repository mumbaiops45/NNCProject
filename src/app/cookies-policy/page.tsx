"use client";

// CookiesPolicy.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Main Cookies Policy Component
const CookiesPolicy: React.FC = () => {
  const lastUpdated: string = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="cookies-policy-page">
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
              <span className="grad-text">Cookies Policy</span>
            </h1>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem'
            }}>
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            {/* Introduction */}
            <section>
              <h2 style={headingStyle}>What Are Cookies?</h2>
              <p style={paragraphStyle}>
                Cookies are small text files that are placed on your computer, smartphone, or other device 
                when you visit a website. They are widely used to make websites work more efficiently, 
                enhance user experience, and provide information to the website owners. Cookies do not 
                typically contain any information that personally identifies a user, but personal information 
                that we store about you may be linked to the information stored in and obtained from cookies.
              </p>
            </section>

            {/* How We Use Cookies */}
            <section>
              <h2 style={headingStyle}>How Nakshatra Namaha Creations Uses Cookies</h2>
              <p style={paragraphStyle}>
                We use cookies for various purposes, including:
              </p>
              <ul style={listStyle}>
                <li><strong style={{ color: 'var(--teal)' }}>Essential Cookies:</strong> These are necessary for the website to function properly. They enable you to navigate our site and use its features.</li>
                <li><strong style={{ color: 'var(--teal)' }}>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information about pages visited, time spent, and error messages.</li>
                <li><strong style={{ color: 'var(--teal)' }}>Functionality Cookies:</strong> These remember choices you make (such as language preferences) to provide enhanced, personalized features.</li>
                <li><strong style={{ color: 'var(--teal)' }}>Targeting/Advertising Cookies:</strong> These are used to deliver content that is relevant to your interests and measure the effectiveness of our marketing campaigns.</li>
              </ul>
            </section>

            {/* Types of Cookies We Use */}
            <section>
              <h2 style={headingStyle}>Types of Cookies We Use</h2>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ ...headingStyle, fontSize: '1.3rem', borderBottom: 'none', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--teal)' }}>Session Cookies</span>
                </h3>
                <p style={paragraphStyle}>
                  These are temporary cookies that expire when you close your browser. They allow us to link 
                  your actions during a single browsing session and are essential for certain features to work.
                </p>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ ...headingStyle, fontSize: '1.3rem', borderBottom: 'none', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--teal)' }}>Persistent Cookies</span>
                </h3>
                <p style={paragraphStyle}>
                  These remain on your device between browsing sessions and help us remember your preferences 
                  and actions across multiple visits to our website. They have an expiration date set in the 
                  cookie itself.
                </p>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ ...headingStyle, fontSize: '1.3rem', borderBottom: 'none', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--teal)' }}>First-Party Cookies</span>
                </h3>
                <p style={paragraphStyle}>
                  These are set by our website directly and can only be read by our site.
                </p>
              </div>
              
              <div>
                <h3 style={{ ...headingStyle, fontSize: '1.3rem', borderBottom: 'none', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--teal)' }}>Third-Party Cookies</span>
                </h3>
                <p style={paragraphStyle}>
                  These are set by domains other than our website. We may use third-party services (like 
                  Google Analytics) that place cookies on your device to help us analyze website traffic 
                  and usage patterns.
                </p>
              </div>
            </section>

            {/* Specific Cookies We Use */}
            <section>
              <h2 style={headingStyle}>Specific Cookies We Use</h2>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px',
                overflowX: 'auto'
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  color: 'var(--text-muted)'
                }}>
                  <thead>
                    <tr style={{
                      borderBottom: '1px solid var(--border-teal)',
                      textAlign: 'left'
                    }}>
                      <th style={{ padding: '12px 8px', color: 'var(--teal)' }}>Cookie Name</th>
                      <th style={{ padding: '12px 8px', color: 'var(--teal)' }}>Purpose</th>
                      <th style={{ padding: '12px 8px', color: 'var(--teal)' }}>Duration</th>
                      <th style={{ padding: '12px 8px', color: 'var(--teal)' }}>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '12px 8px' }}>PHPSESSID</td>
                      <td style={{ padding: '12px 8px' }}>Maintains user session state</td>
                      <td style={{ padding: '12px 8px' }}>Session</td>
                      <td style={{ padding: '12px 8px' }}>Essential</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '12px 8px' }}>_ga</td>
                      <td style={{ padding: '12px 8px' }}>Google Analytics - distinguishes users</td>
                      <td style={{ padding: '12px 8px' }}>2 years</td>
                      <td style={{ padding: '12px 8px' }}>Performance</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '12px 8px' }}>_gid</td>
                      <td style={{ padding: '12px 8px' }}>Google Analytics - distinguishes users</td>
                      <td style={{ padding: '12px 8px' }}>24 hours</td>
                      <td style={{ padding: '12px 8px' }}>Performance</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '12px 8px' }}>cookie_consent</td>
                      <td style={{ padding: '12px 8px' }}>Stores cookie consent preferences</td>
                      <td style={{ padding: '12px 8px' }}>1 year</td>
                      <td style={{ padding: '12px 8px' }}>Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 style={headingStyle}>How to Control and Manage Cookies</h2>
              <p style={paragraphStyle}>
                You have the right to decide whether to accept or reject cookies. You can exercise your 
                cookie preferences in the following ways:
              </p>
              
              <div style={{ marginTop: '20px' }}>
                <h3 style={{ ...headingStyle, fontSize: '1.3rem', borderBottom: 'none', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--teal)' }}>Browser Settings</span>
                </h3>
                <p style={paragraphStyle}>
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul style={listStyle}>
                  <li>Delete all cookies from your browser</li>
                  <li>Block cookies from being set</li>
                  <li>Allow cookies only from specific websites</li>
                  <li>Set your browser to notify you when a cookie is being set</li>
                </ul>
                <p style={{ ...paragraphStyle, marginTop: '12px' }}>
                  To manage cookies in popular browsers:
                </p>
                <ul style={listStyle}>
                  <li><strong style={{ color: 'var(--teal)' }}>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                  <li><strong style={{ color: 'var(--teal)' }}>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong style={{ color: 'var(--teal)' }}>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong style={{ color: 'var(--teal)' }}>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
                </ul>
              </div>
              
              <div style={{ marginTop: '24px' }}>
                <h3 style={{ ...headingStyle, fontSize: '1.3rem', borderBottom: 'none', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--teal)' }}>Cookie Consent Popup</span>
                </h3>
                <p style={paragraphStyle}>
                  When you first visit our website, you will see a cookie consent popup that allows you to 
                  accept or reject non-essential cookies. You can change your preferences at any time by 
                  clicking the "Cookie Settings" link in the footer of our website.
                </p>
              </div>
            </section>

            {/* Consequences of Disabling Cookies */}
            <section>
              <h2 style={headingStyle}>What Happens If You Disable Cookies?</h2>
              <p style={paragraphStyle}>
                If you choose to disable or reject cookies, some parts of our website may become inaccessible 
                or may not function properly. For example:
              </p>
              <ul style={listStyle}>
                <li>You may not be able to log into secure areas of our website</li>
                <li>Your preferences may not be saved</li>
                <li>Some interactive features may not work</li>
                <li>The website may not remember your previous actions</li>
              </ul>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 style={headingStyle}>Updates to This Cookies Policy</h2>
              <p style={paragraphStyle}>
                We may update this Cookies Policy from time to time to reflect changes in our practices, 
                technologies, legal requirements, or for operational reasons. Any changes will be posted 
                on this page with an updated revision date. We encourage you to review this policy 
                periodically to stay informed about our use of cookies.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 style={headingStyle}>Contact Us</h2>
              <p style={paragraphStyle}>
                If you have any questions about our use of cookies or this Cookies Policy, please contact us:
              </p>
              <div style={{
                marginTop: '16px',
                padding: '24px',
                background: 'var(--bg-teal)',
                border: '1px solid var(--border-teal)',
                borderRadius: 'var(--radius-lg)'
              }}>
                <p style={{ ...paragraphStyle, marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--teal)' }}>Email:</strong> privacy@nakshatranamahacreations.com
                </p>
                <p style={{ ...paragraphStyle, marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--teal)' }}>Contact Form:</strong> www.nakshatranamahacreations.com
                </p>
                <p style={{ ...paragraphStyle, marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--teal)' }}>Phone:</strong> +1 (XXX) XXX-XXXX
                </p>
                <p style={{ ...paragraphStyle, marginBottom: '0' }}>
                  <strong style={{ color: 'var(--teal)' }}>Address:</strong> 50 Philip Ave, Guelph, ON N1E 1R4, Canada
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
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

const listStyle: React.CSSProperties = {
  color: 'var(--text-muted)',
  lineHeight: '1.8',
  fontSize: '1rem',
  marginTop: '8px',
  marginBottom: '8px',
  paddingLeft: '24px'
};

export default CookiesPolicy;