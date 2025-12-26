"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "1ª Igreja Batista Bíblica Fundamentalista de Canoas",
      "alternateName": "IBBF Canoas",
      "url": baseUrl,
      "logo": `${baseUrl}/assets/logo-web.png`,
      "image": `${baseUrl}/assets/logo-web.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. Benjamin Franklin, 73",
        "addressLocality": "Harmonia",
        "addressRegion": "RS",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Igreja",
        "areaServed": "BR",
        "availableLanguage": "pt-BR"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    script.id = 'structured-data-org';
    
    const existing = document.getElementById('structured-data-org');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
    
    return () => {
      const toRemove = document.getElementById('structured-data-org');
      if (toRemove) toRemove.remove();
    };
  }, []);

  return null;
}

