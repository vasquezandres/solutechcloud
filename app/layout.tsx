import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "SolutechCloud — Soluciones reales en la nube",
    template: "%s | SolutechCloud"
  },
  description: "Servicios cloud, Microsoft 365, seguridad y respaldo para empresas en Panamá."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-b from-white to-gray-50/60 text-gray-800 antialiased">
        <NavBar />
        <main className="container-limit py-10">{children}</main>
        <WhatsAppFab />
        <Footer />
      </body>
    </html>
  );
}
