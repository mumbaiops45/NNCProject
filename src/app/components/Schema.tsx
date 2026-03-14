"use client";
// app/components/Schema.tsx

interface SchemaProps {
  serviceType?: string;
  description?: string;
  faqs?: Array<{ q: string; a: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  isContactPage?: boolean;
  offices?: Array<{
    city: string;
    region: string;
    country: string;
    telephone: string;
    email: string;
    address: string;
  }>;
}

export default function Schema({
  serviceType,
  description,
  faqs,
  breadcrumbs,
  isContactPage,
  offices
}: SchemaProps) {
  const schemas = [];

  // 1. Add Organisation Schema to EVERY page
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NNC Digital Solutions",
    "url": "https://nncdigital.com",
    "logo": "https://nncdigital.com/NNCLOGO.jpg",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Nakshatra Namaha Creations Pvt. Ltd.",
      "url": "https://www.nakshatranamahacreations.com"
    },
    "areaServed": ["CA", "US", "GB"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1-647-XXX-XXXX",
      "email": "hello@nncdigital.com",
      "availableLanguage": "English"
    }
  });

  // 2. Add Service Schema for service pages
  if (serviceType) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceType,
      "provider": {
        "@type": "Organization",
        "name": "NNC Digital Solutions",
        "url": "https://nncdigital.com"
      },
      "areaServed": ["CA", "US", "GB"],
      "description": description || `${serviceType} services for Canada, USA, and UK`
    });
  }

  // 3. Add FAQ Schema for pages with FAQs
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    });
  }

  // 4. Add Breadcrumb Schema for navigation
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": b.name,
        "item": `https://nncdigital.com${b.url}`
      }))
    });
  }

  // 5. Add Local Business Schema for Contact page
  if (isContactPage && offices && offices.length > 0) {
    offices.forEach(office => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `NNC Digital Solutions - ${office.city}`,
        "parentOrganization": {
          "@type": "Organization",
          "name": "NNC Digital Solutions"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": office.city,
          "addressRegion": office.region,
          "addressCountry": office.country,
          "streetAddress": office.address
        },
        "telephone": office.telephone,
        "email": office.email,
        "url": "https://nncdigital.com/contact"
      });
    });
  }

  // Return the schema as a script tag
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) 
      }}
    />
  );
}