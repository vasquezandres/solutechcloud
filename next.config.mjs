/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera HTML estático (compatible con Cloudflare Pages)
  output: "export",

  // Next Image sin optimización del servidor (necesario para export estático)
  images: { unoptimized: true },

  // Evita 404 en rutas sin .html cuando se sirve estático
  trailingSlash: true,
};

export default nextConfig;
