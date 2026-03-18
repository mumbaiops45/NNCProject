"use client";

import { useState, useEffect } from "react";

const ContactButtons = () => {
  // Replace these with your actual numbers
  const phoneNumber = "+919900566466";     // Your phone number
  const whatsappNumber = "919900566466";    // Your WhatsApp number (without +)
  const whatsappMessage = "Hello! I'm interested in your services. Can you provide more information?";

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <style>{`
        .contact-buttons-container {
          position: fixed;
          bottom: 30px;
          right: 20px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 15px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .contact-buttons-container.hide {
          transform: translateY(100px);
          opacity: 0;
          pointer-events: none;
        }

        .contact-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          outline: none;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
        }

        .contact-btn:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .contact-btn.whatsapp {
          background: #25D366;
        }

        .contact-btn.whatsapp:hover {
          background: #128C7E;
        }

        .contact-btn.call {
          background: linear-gradient(135deg, #00C9A7, #0077b5);
        }

        .contact-btn svg {
          width: 32px;
          height: 32px;
          fill: white;
        }

        .btn-tooltip {
          position: absolute;
          right: 75px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.2);
          pointer-events: none;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .contact-btn:hover .btn-tooltip {
          opacity: 1;
          visibility: visible;
          right: 85px;
        }

        /* Pulse animation */
        .contact-btn.whatsapp {
          animation: pulse-whatsapp 2s infinite;
        }

        @keyframes pulse-whatsapp {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        .contact-btn.call {
          animation: pulse-call 2s infinite 1s;
        }

        @keyframes pulse-call {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 201, 167, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(0, 201, 167, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 201, 167, 0);
          }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .contact-buttons-container {
            bottom: 20px;
            right: 15px;
            gap: 12px;
          }

          .contact-btn {
            width: 55px;
            height: 55px;
          }

          .contact-btn svg {
            width: 28px;
            height: 28px;
          }

          .btn-tooltip {
            display: none;
          }

          .contact-btn.whatsapp,
          .contact-btn.call {
            animation: none;
          }
        }

        /* For very small screens */
        @media (max-width: 480px) {
          .contact-buttons-container {
            bottom: 15px;
            right: 12px;
          }

          .contact-btn {
            width: 50px;
            height: 50px;
          }

          .contact-btn svg {
            width: 26px;
            height: 26px;
          }
        }
      `}</style>

      <div className={`contact-buttons-container ${isVisible ? '' : 'hide'}`}>
        {/* WhatsApp Button - FIXED ICON */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24">
            <path d="M17.6 6.32C15.9 4.62 13.6 3.6 11.1 3.6c-4.8 0-8.7 3.9-8.7 8.7 0 1.5.4 3 1.1 4.3L2.5 20.4l4.2-1.1c1.3.7 2.7 1.1 4.2 1.1 4.8 0 8.7-3.9 8.7-8.7 0-2.3-.9-4.5-2.6-6.2l.6.2zM11.1 18.4c-1.2 0-2.4-.3-3.5-1l-.2-.1-2.5.7.7-2.4-.1-.2c-.7-1.1-1.1-2.4-1.1-3.7 0-3.9 3.2-7.1 7.1-7.1 1.9 0 3.7.8 5 2.1 1.3 1.3 2.1 3.1 2.1 5 0 3.9-3.1 7.1-7 7.1l.6-.4zm4-5.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.1.2-.5.7-.7.9-.1.1-.2.1-.4 0-.2-.1-.9-.3-1.7-1-.6-.5-1-1.1-1.2-1.5-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.2-.2.2-.4 0-.1 0-.2-.1-.3-.1-.1-.5-1.2-.7-1.6-.1-.4-.3-.4-.5-.4-.1 0-.3 0-.4.1-.2.1-.7.7-.7 1.7 0 .9.7 2 .9 2.3.1.1 1.5 2.3 3.6 3.2 2.1.9 2.1.6 2.5.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.2z"/>
          </svg>
          <span className="btn-tooltip">Chat on WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="contact-btn call"
          aria-label="Call us"
        >
          <svg viewBox="0 0 24 24">
            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5 5h1.5c.1.9.3 1.8.6 2.6L6.3 8.4C5.8 7.3 5.3 6.2 5 5zm14 14c-1.2-.3-2.3-.8-3.4-1.3l.8-.8c.8.3 1.7.5 2.6.6V19z"/>
          </svg>
          <span className="btn-tooltip">Call us now</span>
        </a>
      </div>
    </>
  );
};

export default ContactButtons;