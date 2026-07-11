import { siteConfig } from "@/data/site";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.linkedIn],
    knowsAbout: [
      "Custom Web Application Development",
      "Admin Dashboard Development",
      "Backend Development",
      "Python",
      "FastAPI",
      "Django",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — Freelance Web Development`,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "Worldwide",
    provider: {
      "@type": "Person",
      name: siteConfig.name,
    },
    serviceType: [
      "Custom Web Application Development",
      "Admin Dashboard Development",
      "Backend Development",
      "Existing Application Enhancement",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
