/**
 * Configuración central del sitio.
 * Fuente única de verdad para datos corporativos, contacto y URLs.
 * Cualquier cambio en branding / contacto / dirección se hace AQUÍ.
 */

export const siteConfig = {
  // Identidad
  name: "SolutechCloud",
  legalName: "Solutech Panamá",
  shortName: "Solutech",
  tagline: "Soluciones reales en la nube para empresas y gobierno",

  // URLs
  url: "https://solutechcloud.com",
  ogImage: "https://cdn.solutechcloud.com/img/og-default.png",
  locale: "es_PA",

  // Contacto
  contact: {
    whatsapp: "+50768886778",
    whatsappDisplay: "+507 6888-6778",
    whatsappUrl: "https://wa.me/50768886778",
    email: "soporte@solutechpanama.com",
    supportEmail: "soporte@solutechpanama.com",
  },

  // Ubicación (ajustar con datos reales cuando los tengas)
  address: {
    country: "PA",
    countryName: "Panamá",
    region: "Panamá",
    city: "Ciudad de Panamá",
    // TODO: reemplazar con dirección real verificable
    streetAddress: "PH Central Park, Transistmica",
    postalCode: "",
  },

  // Área de servicio
  areaServed: [
    { "@type": "Country", name: "Panamá" },
    { "@type": "Country", name: "Guatemala" },
    { "@type": "Country", name: "Costa Rica" },
    { "@type": "Country", name: "Honduras" },
    { "@type": "Country", name: "El Salvador" },
    { "@type": "Country", name: "Nicaragua" },
  ],

  // Redes sociales
  social: {
    instagram: "https://www.instagram.com/solutechpanama/",
    // Agregar LinkedIn cuando exista (muy importante para B2B/gobierno)
    linkedin: "https://linkedin.com/company/solutechpanama",
    // Dominio relacionado corporativo
    solutechPanama: "https://www.solutech.com.pa/",
  },

  // Datos fiscales (rellenar con datos reales antes de publicar schema)
  business: {
    // TODO: RUC real
    taxId: "E8150576DV85",
    // TODO: año de fundación real
    foundingYear: 2015,
    // Ejemplo; ajustar
    employeesRange: "2-10",
  },

  // Keywords / topics principales del sitio
  topics: [
    "Microsoft 365",
    "Licenciamiento Microsoft",
    "Azure",
    "AWS",
    "Correo corporativo",
    "Seguridad y backup",
    "Migraciones cloud",
    "Sector público Panamá",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
