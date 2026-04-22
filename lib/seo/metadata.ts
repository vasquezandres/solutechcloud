import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Ruta sin dominio, ej: "/servicios/microsoft-365/" */
  path: string;
  /** Imagen OG específica de la página (opcional, usa default si no) */
  ogImage?: string;
  /** Keywords adicionales (opcional) */
  keywords?: string[];
  /** Si la página NO debe indexarse */
  noIndex?: boolean;
  /** Tipo de OG */
  ogType?: "website" | "article";
  /** Para artículos de blog */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
};

/**
 * Genera metadata completa y correcta para una página.
 * Incluye: title, description, canonical, OG, Twitter, robots.
 *
 * Uso:
 *   export const metadata = buildMetadata({
 *     title: "Microsoft 365 para empresas",
 *     description: "...",
 *     path: "/servicios/microsoft-365/",
 *   });
 */
export function buildMetadata(input: PageMetadataInput): Metadata {
  const {
    title,
    description,
    path,
    ogImage = siteConfig.ogImage,
    keywords,
    noIndex = false,
    ogType = "website",
    article,
  } = input;

  const canonicalUrl = `${siteConfig.url}${path}`;
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteConfig.url}${ogImage}`;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords?.join(", "),

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(article && {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        authors: article.author ? [article.author] : undefined,
        tags: article.tags,
      }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullOgImage],
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },

    // Idioma principal del documento
    other: {
      "content-language": "es-PA",
    },
  };

  return metadata;
}

/**
 * Metadata root del sitio. Se usa en app/layout.tsx.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Partner Microsoft 365, Azure y AWS en Panamá y Centroamérica. Licenciamiento, migraciones, seguridad y soporte para empresas y sector público.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  generator: "Next.js",
  keywords: siteConfig.topics,
  referrer: "origin-when-cross-origin",
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};
