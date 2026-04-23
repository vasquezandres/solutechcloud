// app/sitemap.ts
import type { MetadataRoute } from 'next';

const BASE = 'https://solutechcloud.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Si tienes posts dinámicos, genera los slugs desde tu fuente de datos
  const posts = [
    'como-adquirir-microsoft-365-sector-publico-panama',
  ];

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    { url: `${BASE}/microsoft-365-gobierno-panama.html`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/seguridad-backup.html`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/nube.html`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/licencias-microsoft.html`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contacto.html`, lastModified: now, changeFrequency: 'monthly', priority: 0.64 },

    { url: `${BASE}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((slug) => ({
      url: `${BASE}/blog/${slug}.html`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.72,
    })),

    { url: `${BASE}/politica-de-privacidad.html`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/terminos-y-condiciones.html`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/politica-de-cookies.html`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
