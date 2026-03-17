"use client";

// TermsOfService.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Main Terms of Service Component
const TermsOfService: React.FC = () => {
  const lastUpdated: string = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="terms-page">
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
              <span className="grad-text">Terms of Service</span>
            </h1>
           
          </div>

          {/* Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            {/* Introduction */}
            <section>
              <p style={paragraphStyle}>
                This agreement outlines the terms and conditions under which Nakshatra Namaha Creations 
                provides IT and software-related services to users visiting or interacting with 
                nakshatranamahacreations.com or contacting us through any communication channel.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '16px' }}>
                By using our website or availing our services, you acknowledge that you have read, 
                understood, and agreed to these Terms of Service.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 style={headingStyle}>Services</h2>
              <p style={paragraphStyle}>
                Nakshatra Namaha Creations offers IT and digital services including website development, 
                mobile app development, software solutions, UI/UX design, branding, and related technical 
                services. Service details, timelines, and deliverables may vary based on project requirements.
              </p>
            </section>

            {/* Information Accuracy */}
            <section>
              <h2 style={headingStyle}>Information Accuracy</h2>
              <p style={paragraphStyle}>
                Users must provide accurate, current, and complete information when requesting services 
                or communicating with us. We are not responsible for delays, errors, or issues caused by 
                incorrect, outdated, or incomplete information provided by the client.
              </p>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 style={headingStyle}>User Responsibilities</h2>
              <p style={paragraphStyle}>
                Users must not misuse our website or services. Prohibited activities include:
              </p>
              <ul style={listStyle}>
                <li>Unauthorized access or attempted hacking of our systems</li>
                <li>Copying, reproducing, or stealing website content, code, or designs</li>
                <li>Uploading or transmitting harmful files, viruses, or malicious code</li>
                <li>Interfering with the proper functioning of our website or services</li>
                <li>Using our services for any illegal or unauthorized purpose</li>
              </ul>
              <p style={paragraphStyle}>
                Such activities may lead to immediate service termination and possible legal action.
              </p>
            </section>

            {/* Intellectual Property Rights */}
            <section>
              <h2 style={headingStyle}>Intellectual Property Rights</h2>
              <p style={paragraphStyle}>
                All content, code, designs, graphics, logos, images, software, and materials available on 
                our website are the exclusive property of Nakshatra Namaha Creations and are protected by 
                applicable intellectual property laws.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '12px' }}>
                Users may not copy, modify, distribute, reproduce, display, or create derivative works 
                from any content on our website without our express written permission. Upon project 
                completion and full payment, clients receive the rights to the final deliverables as 
                specified in the project agreement.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 style={headingStyle}>Third-Party Services</h2>
              <p style={paragraphStyle}>
                We may utilize third-party tools, hosting services, APIs, plugins, libraries, or external 
                service providers to complete projects or enhance our website functionality. We are not 
                responsible for any downtime, data loss, errors, security breaches, or failures caused by 
                these third-party providers. Users acknowledge that third-party services are governed by 
                their own terms and privacy policies.
              </p>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 style={headingStyle}>Payment Terms</h2>
              <p style={paragraphStyle}>
                Payment terms, including fees, schedules, and methods, will be specified in individual 
                project agreements or invoices. Failure to make timely payments may result in:
              </p>
              <ul style={listStyle}>
                <li>Project delays or suspension</li>
                <li>Withholding of deliverables</li>
                <li>Service termination</li>
                <li>Legal action to recover dues</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 style={headingStyle}>Limitation of Liability</h2>
              <p style={paragraphStyle}>
                To the maximum extent permitted by law, Nakshatra Namaha Creations shall not be liable for:
              </p>
              <ul style={listStyle}>
                <li>Any data loss or corruption</li>
                <li>Downtime or service interruptions caused by hosting providers or technical issues</li>
                <li>Security breaches that are beyond our reasonable control</li>
                <li>Losses resulting from improper use or misuse of our services by users</li>
                <li>Indirect, incidental, or consequential damages arising from service use</li>
              </ul>
              <p style={{ ...paragraphStyle, marginTop: '12px' }}>
                Users access and use our website and services entirely at their own risk.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 style={headingStyle}>Indemnification</h2>
              <p style={paragraphStyle}>
                You agree to indemnify, defend, and hold harmless Nakshatra Namaha Creations, its 
                directors, employees, and affiliates from any claims, damages, losses, liabilities, 
                costs, or expenses arising from your use of our services, violation of these terms, 
                or infringement of any third-party rights.
              </p>
            </section>

            {/* Communication */}
            <section>
              <h2 style={headingStyle}>Communication</h2>
              <p style={paragraphStyle}>
                Official communication from Nakshatra Namaha Creations will only be conducted through 
                authorized email addresses (e.g., @nakshatranamahacreations.com) and verified phone 
                numbers. We are not responsible for any communication, agreements, or transactions 
                conducted through unverified or unauthorized channels.
              </p>
            </section>

            {/* Termination of Services */}
            <section>
              <h2 style={headingStyle}>Termination of Services</h2>
              <p style={paragraphStyle}>
                We reserve the right to suspend, cancel, terminate, or deny access to our services at 
                our sole discretion, without prior notice, under circumstances including but not limited to:
              </p>
              <ul style={listStyle}>
                <li>Violation of these Terms of Service</li>
                <li>Non-payment or overdue payments</li>
                <li>Detection of misuse, fraud, or illegal activity</li>
                <li>Requests from law enforcement or government authorities</li>
                <li>Technical or security concerns</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section>
              <h2 style={headingStyle}>Governing Law</h2>
              <p style={paragraphStyle}>
                These Terms of Service shall be governed by and construed in accordance with the laws of 
                Canada and the Province of Ontario. Any disputes arising under or in connection with these 
                terms shall be subject to the exclusive jurisdiction of the courts in Guelph, Ontario, Canada.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 style={headingStyle}>Changes to Terms</h2>
              <p style={paragraphStyle}>
                Nakshatra Namaha Creations reserves the right to modify, update, or change these Terms 
                of Service at any time without prior notice. Any changes will be effective immediately 
                upon posting the revised terms on this page, with an updated effective date. Your 
                continued use of our website or services after any changes constitutes acceptance of 
                the modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 style={headingStyle}>Contact Us</h2>
              <p style={paragraphStyle}>
                If you have any questions, concerns, or requests regarding these Terms of Service, 
                please contact us at:
              </p>
              <div style={{
                marginTop: '16px',
                padding: '24px',
                background: 'var(--bg-teal)',
                border: '1px solid var(--border-teal)',
                borderRadius: 'var(--radius-lg)'
              }}>
                <p style={{ ...paragraphStyle, marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--teal)' }}>Email:</strong> legal@nakshatranamahacreations.com
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

export default TermsOfService;