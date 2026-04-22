import { siteConfig } from "@/lib/site-config";

/* ------------------------------------------------------------------ */
/* Tipos                                                              */
/* ------------------------------------------------------------------ */

type FAQItem = { question: string; answer: string };
type BreadcrumbItem = { name: string; url: string };

/* ------------------------------------------------------------------ */
/* Organization — schema global del sitio                             */
/* ------------------------------------------------------------------ */

export function organizationSchema() {
  const socials = [
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
    siteConfig.social.solutechPanama,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
      width: 512,
      height: 512,
    },
    description:
      "Partner Microsoft 365, Azure y AWS. Licenciamiento, migraciones, seguridad y soporte para empresas y sector público en Panamá y Centroamérica.",
    foundingDate: `${siteConfig.business.foundingYear}-01-01`,
    areaServed: siteConfig.areaServed,
    knowsAbout: siteConfig.topics,
    sameAs: socials,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.whatsapp,
        contactType: "customer support",
        email: siteConfig.contact.email,
        availableLanguage: ["Spanish"],
        areaServed: "CA", // Centroamérica
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/* LocalBusiness — para ranking local en Panamá                       */
/* ------------------------------------------------------------------ */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.legalName,
    image: `${siteConfig.url}/og-default.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.contact.whatsapp,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.address.country,
      addressRegion: siteConfig.address.region,
      addressLocality: siteConfig.address.city,
      streetAddress: siteConfig.address.streetAddress || undefined,
      postalCode: siteConfig.address.postalCode || undefined,
    },
    areaServed: siteConfig.areaServed,
    knowsAbout: siteConfig.topics,
  };
}

/* ------------------------------------------------------------------ */
/* WebSite — habilita sitelinks searchbox en Google                   */
/* ------------------------------------------------------------------ */

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "es-PA",
  };
}

/* ------------------------------------------------------------------ */
/* Service — para cada página de servicio                             */
/* ------------------------------------------------------------------ */

type ServiceSchemaInput = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  /** Opcional: catálogo de ofertas dentro del servicio */
  offerCatalog?: Array<{ name: string; description?: string }>;
};

export function serviceSchema(input: ServiceSchemaInput) {
  const fullUrl = input.url.startsWith("http")
    ? input.url
    : `${siteConfig.url}${input.url}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: fullUrl,
    serviceType: input.serviceType,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: siteConfig.areaServed,
    ...(input.offerCatalog && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Opciones de ${input.name}`,
        itemListElement: input.offerCatalog.map((offer) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            ...(offer.description && { description: offer.description }),
          },
        })),
      },
    }),
  };
}

/* ------------------------------------------------------------------ */
/* FAQPage — rich results en Google                                   */
/* ------------------------------------------------------------------ */

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/* ------------------------------------------------------------------ */
/* BreadcrumbList — navegación estructurada                           */
/* ------------------------------------------------------------------ */

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteConfig.url}${item.url}`,
    })),
  };
}

/* ------------------------------------------------------------------ */
/* Article — para posts de blog                                       */
/* ------------------------------------------------------------------ */

type ArticleSchemaInput = {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
};

export function articleSchema(input: ArticleSchemaInput) {
  const fullUrl = input.url.startsWith("http")
    ? input.url
    : `${siteConfig.url}${input.url}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: fullUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
    image: input.image
      ? input.image.startsWith("http")
        ? input.image
        : `${siteConfig.url}${input.image}`
      : `${siteConfig.url}/og-default.jpg`,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: {
      "@type": input.authorName ? "Person" : "Organization",
      name: input.authorName || siteConfig.legalName,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "es-PA",
  };
}

/* ------------------------------------------------------------------ */
/* CaseStudy — para casos de éxito                                    */
/* ------------------------------------------------------------------ */

type CaseStudyInput = {
  name: string;
  description: string;
  url: string;
  clientName?: string; // puede ser anónimo
  clientIndustry: string;
  datePublished: string;
};

export function caseStudySchema(input: CaseStudyInput) {
  const fullUrl = input.url.startsWith("http")
    ? input.url
    : `${siteConfig.url}${input.url}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": fullUrl,
    headline: input.name,
    description: input.description,
    url: fullUrl,
    articleSection: "Casos de éxito",
    about: {
      "@type": "Thing",
      name: input.clientIndustry,
    },
    datePublished: input.datePublished,
    author: {
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
