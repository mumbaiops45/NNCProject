// ALL YOUR SCHEMA FUNCTIONS GO HERE
export function getOrganisationSchema() {
  return {
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
      "email": "hello@nncdigital.com"
    }
  };
}

export function getServiceSchema(serviceType: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": "NNC Digital Solutions"
    },
    "areaServed": ["CA", "US", "GB"],
    "description": description || `${serviceType} services`
  };
}

export function getFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function getBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://nncdigital.com${item.url}`
    }))
  };
}

export function getLocalBusinessSchema(offices: Array<{
  city: string; region: string; country: string; 
  telephone: string; email: string; address: string;
}>) {
  return offices.map(office => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `NNC Digital Solutions - ${office.city}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": office.city,
      "addressRegion": office.region,
      "addressCountry": office.country,
      "streetAddress": office.address
    },
    "telephone": office.telephone,
    "email": office.email
  }));
}