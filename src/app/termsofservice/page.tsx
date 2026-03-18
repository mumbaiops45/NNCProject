"use client";

// TermsOfService.tsx
import React from 'react';
import Navbar from '../components/Navbar';

// Color tokens
const COLORS = {
  teal: "#00C9A7",
  navy2: "#061425",
};

const TermsOfService: React.FC = () => {
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

        .tos-page {
          background: ${COLORS.navy2};
          min-height: 100vh;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          width: 100%;
          overflow-x: hidden;
        }

        .tos-container {
          max-width: 850px;
          width: 100%;
          margin: 0 auto;
          padding: 20px 20px 60px;
        }

        /* Header */
        .tos-header {
          text-align: center;
          margin-bottom: 40px;
          padding-top: 20px;
        }

        .tos-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #fff;
          line-height: 1.2;
        }

        .tos-title span {
          background: linear-gradient(135deg, ${COLORS.teal}, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tos-date {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px;
          display: inline-block;
        }

        .tos-date strong {
          color: ${COLORS.teal};
          font-weight: 600;
        }

        /* Sections */
        .tos-section {
          margin-bottom: 32px;
        }

        .tos-section h2 {
          font-size: 20px;
          font-weight: 700;
          color: ${COLORS.teal};
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .tos-section p {
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          font-size: 15px;
          margin: 0 0 14px 0;
        }

        .tos-section ul {
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          font-size: 15px;
          margin: 8px 0 14px 0;
          padding-left: 24px;
          list-style-type: disc;
        }

        .tos-section li {
          margin-bottom: 8px;
          color: rgba(255,255,255,0.75);
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
          .tos-container {
            padding: 12px 16px 40px;
          }

          .tos-header {
            margin-bottom: 30px;
            padding-top: 10px;
          }

          .tos-title {
            font-size: 26px;
            word-break: break-word;
          }

          .tos-date {
            font-size: 12px;
            padding: 8px 16px;
            width: auto;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
          }

          .tos-section {
            margin-bottom: 28px;
          }

          .tos-section h2 {
            font-size: 18px;
            margin-bottom: 12px;
          }

          .tos-section p {
            font-size: 14px;
            line-height: 1.7;
            word-break: break-word;
          }

          .tos-section ul {
            font-size: 14px;
            padding-left: 20px;
          }

          .tos-section li {
            margin-bottom: 6px;
            word-break: break-word;
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
          .tos-container {
            padding: 16px 20px 50px;
          }

          .tos-title {
            font-size: 36px;
          }

          .tos-section h2 {
            font-size: 22px;
          }
        }

        /* Small Mobile - 360px and below */
        @media screen and (max-width: 360px) {
          .tos-title {
            font-size: 24px;
          }

          .tos-date {
            font-size: 11px;
            padding: 6px 12px;
            white-space: normal;
          }

          .contact-box strong {
            min-width: 70px;
          }
        }
      `}</style>

      <main className="tos-page">
        <div className="tos-container">
          {/* Header */}
          <div className="tos-header">
            <h1 className="tos-title">
              <span>Terms of Service</span>
            </h1>
           
          </div>

          {/* Introduction */}
          <div className="tos-section">
            <h2>Introduction</h2>
            <p>
              This agreement outlines the terms and conditions under which Nakshatra Namaha Creations 
              provides IT and software-related services to users visiting or interacting with 
              nakshatranamahacreations.com or contacting us through any communication channel.
            </p>
            <p>
              By using our website or availing our services, you acknowledge that you have read, 
              understood, and agreed to these Terms of Service.
            </p>
          </div>

          {/* Services */}
          <div className="tos-section">
            <h2>Services</h2>
            <p>
              Nakshatra Namaha Creations offers IT and digital services including website development, 
              mobile app development, software solutions, UI/UX design, branding, and related technical 
              services. Service details, timelines, and deliverables may vary based on project requirements.
            </p>
          </div>

          {/* Information Accuracy */}
          <div className="tos-section">
            <h2>Information Accuracy</h2>
            <p>
              Users must provide accurate, current, and complete information when requesting services 
              or communicating with us. We are not responsible for delays, errors, or issues caused by 
              incorrect, outdated, or incomplete information provided by the client.
            </p>
          </div>

          {/* User Responsibilities */}
          <div className="tos-section">
            <h2>User Responsibilities</h2>
            <p>Users must not misuse our website or services. Prohibited activities include:</p>
            <ul>
              <li>Unauthorized access or attempted hacking of our systems</li>
              <li>Copying, reproducing, or stealing website content, code, or designs</li>
              <li>Uploading or transmitting harmful files, viruses, or malicious code</li>
              <li>Interfering with the proper functioning of our website or services</li>
              <li>Using our services for any illegal or unauthorized purpose</li>
            </ul>
            <p>Such activities may lead to immediate service termination and possible legal action.</p>
          </div>

          {/* Intellectual Property */}
          <div className="tos-section">
            <h2>Intellectual Property Rights</h2>
            <p>
              All content, code, designs, graphics, logos, images, software, and materials available on 
              our website are the exclusive property of Nakshatra Namaha Creations and are protected by 
              applicable intellectual property laws.
            </p>
            <p>
              Users may not copy, modify, distribute, reproduce, display, or create derivative works 
              from any content on our website without our express written permission. Upon project 
              completion and full payment, clients receive the rights to the final deliverables as 
              specified in the project agreement.
            </p>
          </div>

          {/* Third-Party Services */}
          <div className="tos-section">
            <h2>Third-Party Services</h2>
            <p>
              We may utilize third-party tools, hosting services, APIs, plugins, libraries, or external 
              service providers to complete projects or enhance our website functionality. We are not 
              responsible for any downtime, data loss, errors, security breaches, or failures caused by 
              these third-party providers. Users acknowledge that third-party services are governed by 
              their own terms and privacy policies.
            </p>
          </div>

          {/* Payment Terms */}
          <div className="tos-section">
            <h2>Payment Terms</h2>
            <p>
              Payment terms, including fees, schedules, and methods, will be specified in individual 
              project agreements or invoices. Failure to make timely payments may result in:
            </p>
            <ul>
              <li>Project delays or suspension</li>
              <li>Withholding of deliverables</li>
              <li>Service termination</li>
              <li>Legal action to recover dues</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="tos-section">
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Nakshatra Namaha Creations shall not be liable for:
            </p>
            <ul>
              <li>Any data loss or corruption</li>
              <li>Downtime or service interruptions caused by hosting providers or technical issues</li>
              <li>Security breaches that are beyond our reasonable control</li>
              <li>Losses resulting from improper use or misuse of our services by users</li>
              <li>Indirect, incidental, or consequential damages arising from service use</li>
            </ul>
            <p>Users access and use our website and services entirely at their own risk.</p>
          </div>

          {/* Indemnification */}
          <div className="tos-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Nakshatra Namaha Creations, its 
              directors, employees, and affiliates from any claims, damages, losses, liabilities, 
              costs, or expenses arising from your use of our services, violation of these terms, 
              or infringement of any third-party rights.
            </p>
          </div>

          {/* Communication */}
          <div className="tos-section">
            <h2>Communication</h2>
            <p>
              Official communication from Nakshatra Namaha Creations will only be conducted through 
              authorized email addresses (e.g., @nakshatranamahacreations.com) and verified phone 
              numbers. We are not responsible for any communication, agreements, or transactions 
              conducted through unverified or unauthorized channels.
            </p>
          </div>

          {/* Termination */}
          <div className="tos-section">
            <h2>Termination of Services</h2>
            <p>
              We reserve the right to suspend, cancel, terminate, or deny access to our services at 
              our sole discretion, without prior notice, under circumstances including but not limited to:
            </p>
            <ul>
              <li>Violation of these Terms of Service</li>
              <li>Non-payment or overdue payments</li>
              <li>Detection of misuse, fraud, or illegal activity</li>
              <li>Requests from law enforcement or government authorities</li>
              <li>Technical or security concerns</li>
            </ul>
          </div>

          {/* Governing Law */}
          <div className="tos-section">
            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of 
              Canada and the Province of Ontario. Any disputes arising under or in connection with these 
              terms shall be subject to the exclusive jurisdiction of the courts in Guelph, Ontario, Canada.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="tos-section">
            <h2>Changes to Terms</h2>
            <p>
              Nakshatra Namaha Creations reserves the right to modify, update, or change these Terms 
              of Service at any time without prior notice. Any changes will be effective immediately 
              upon posting the revised terms on this page, with an updated effective date. Your 
              continued use of our website or services after any changes constitutes acceptance of 
              the modified terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="tos-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding these Terms of Service, 
              please contact us at:
            </p>
            <div className="contact-box">
              <p><strong>Email:</strong> legal@nakshatranamahacreations.com</p>
              <p><strong>Contact Form:</strong> www.nakshatranamahacreations.com</p>
              <p><strong>Address:</strong> 50 Philip Ave, Guelph, ON N1E 1R4, Canada</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfService;