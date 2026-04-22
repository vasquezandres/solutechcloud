import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/seo/schemas";
import { rootMetadata } from "@/lib/seo/metadata";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PA">
      <body className="min-h-screen bg-gradient-to-b from-white to-gray-50/60 text-gray-800 antialiased">
        <NavBar />
        <main className="container-limit py-10">{children}</main>
        <WhatsAppFab />
        <Footer />

        {/* Schemas globales que aplican a todo el sitio */}
        <JsonLd
          data={[
            organizationSchema(),
            localBusinessSchema(),
            websiteSchema(),
          ]}
        />
      </body>
    </html>
  );
}
