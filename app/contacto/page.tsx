import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contacto — Solicita cotización de servicios tecnológicos",
  description:
    "Contáctanos para licenciamiento Microsoft 365, correo corporativo, Azure, AWS, seguridad y migraciones. Respondemos en menos de 24 horas hábiles.",
  path: "/contacto/",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[]} current="Contacto" />

      <section className="pt-4 pb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Conversemos
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gray-900 max-w-3xl">
          Cuéntanos qué necesitas
        </h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
          Déjanos tu consulta y te respondemos en menos de 24 horas hábiles con una propuesta clara. Si prefieres conversación directa, escríbenos por WhatsApp.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8 mt-4">
        {/* Formulario */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Datos de contacto */}
        <aside className="grid gap-4 content-start">
          <div className="card">
            <div className="flex items-center gap-2 text-brand font-semibold mb-3">
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-600" />
              WhatsApp
            </div>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-medium hover:text-brand transition-colors"
            >
              {siteConfig.contact.whatsappDisplay}
            </a>
            <p className="mt-2 text-sm text-gray-600">
              Respuesta rápida en horario laboral. Ideal para consultas cortas.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 text-brand font-semibold mb-3">
              <Mail className="size-4" />
              Correo
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-gray-900 font-medium hover:text-brand transition-colors break-all"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-2 text-sm text-gray-600">
              Para consultas técnicas detalladas, cotizaciones formales y licitaciones.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 text-brand font-semibold mb-3">
              <MapPin className="size-4" />
              Ubicación
            </div>
            <p className="text-gray-900 font-medium">
              {siteConfig.address.city}, {siteConfig.address.countryName}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Operamos en Panamá y toda Centroamérica con servicios 100% remotos y visitas locales coordinadas.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 text-brand font-semibold mb-3">
              <Clock className="size-4" />
              Horario
            </div>
            <p className="text-gray-900 font-medium">
              Lunes a viernes · 8:00 AM – 6:00 PM
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Soporte 24/7 disponible para planes administrados.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
