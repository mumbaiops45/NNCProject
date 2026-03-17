"use client";

// CookieConsentPopup.tsx
import React, { useState, useEffect } from 'react';

interface CookieConsentPopupProps {
  onAccept?: () => void;
  onReject?: () => void;
}

const CookieConsentPopup: React.FC<CookieConsentPopupProps> = ({
  onAccept,
  onReject
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    if (onReject) onReject();
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '450px',
      width: '90%',
      background: 'linear-gradient(135deg, var(--n2) 0%, var(--n3) 100%)',
      border: '1px solid var(--border-teal)',
      borderRadius: 'var(--radius-xl)',
      padding: '32px',
      boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,201,167,0.3)',
      zIndex: 9999,
      backdropFilter: 'blur(10px)',
      animation: 'fadeInScale 0.4s ease',
      textAlign: 'center'
    }}>
      {/* Decorative top line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '20%',
        right: '20%',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--teal), transparent)',
        borderRadius: '3px'
      }} />

      {/* Cookie Icon */}
      <div style={{
        width: '70px',
        height: '70px',
        borderRadius: '20px',
        background: 'var(--bg-teal)',
        border: '2px solid var(--border-teal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        margin: '0 auto 20px',
        boxShadow: '0 10px 20px rgba(0,201,167,0.2)'
      }}>
        🍪
      </div>

      {/* Title */}
      <h3 style={{
        color: '#fff',
        fontSize: '1.8rem',
        fontWeight: '800',
        marginBottom: '12px',
        letterSpacing: '-0.02em'
      }}>
        <span className="grad-text">Cookie Consent</span>
      </h3>

      {/* Message */}
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '1rem',
        lineHeight: '1.7',
        marginBottom: '28px',
        padding: '0 10px'
      }}>
        We use cookies to enhance your browsing experience and analyze our traffic. 
        Please choose whether to accept or reject cookies.
      </p>

      {/* Accept & Reject Buttons */}
      <div style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <button
          onClick={handleAccept}
          style={{
            padding: '14px 32px',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            background: 'linear-gradient(135deg, var(--teal), var(--teal-dark))',
            color: '#000',
            fontWeight: '700',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            flex: '1',
            maxWidth: '160px',
            boxShadow: '0 4px 15px rgba(0,201,167,0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,201,167,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,201,167,0.3)';
          }}
        >
          Accept
        </button>

        <button
          onClick={handleReject}
          style={{
            padding: '14px 32px',
            borderRadius: 'var(--radius-md)',
            border: '2px solid rgba(255,255,255,0.2)',
            background: 'transparent',
            color: '#fff',
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            flex: '1',
            maxWidth: '160px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Reject
        </button>
      </div>

      {/* Footer Links */}
      <p style={{
        color: 'var(--text-dim)',
        fontSize: '0.8rem',
        marginTop: '16px',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '16px'
      }}>
        By continuing, you agree to our{' '}
        <a href="/privacy-policy" style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: '500' }}>
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms-of-service" style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: '500' }}>
          Terms of Service
        </a>
      </p>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CookieConsentPopup;