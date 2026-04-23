import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/lib/site-config";

const serviceLinks = [
  { href: "/servicios/microsoft-365/", label: "Microsoft 365" },
  { href: "/servicios/correo-corporativo/", label: "Correo corporativo" },
  { href: "/servicios/azure/", label: "Azure" },
  { href: "/servicios/aws/", label: "AWS" },
  { href: "/servicios/seguridad-y-backup/", label: "Seguridad y backup" },
  { href: "/servicios/migraciones/", label: "Migraciones" },
];

const solutionLinks = [
  { href: "/soluciones/sector-publico/", label: "Sector público" },
  { href: "/soluciones/empresas/", label: "Empresas" },
  { href: "/soluciones/pymes/", label: "PyMEs" },
  { href: "/soluciones/educacion/", label: "Educación" },
  { href: "/soluciones/salud/", label: "Salud" },
];

const companyLinks = [
  { href: "/sobre-nosotros/", label: "Nosotros" },
  { href: "/casos-de-exito/", label: "Casos de éxito" },
  { href: "/recursos/blog/", label: "Blog" },
  { href: "/contacto/", label: "Contacto" },
];

const legalLinks = [
  { href: "/legal/privacidad/", label: "Privacidad" },
  { href: "/legal/cookies/", label: "Cookies" },
  { href: "/legal/terminos/", label: "Términos" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-gray-100 bg-gray-50/50">
      <div className="container-limit py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
          {/* Columna 1: Branding + contacto */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="size-9 grid place-items-center rounded-xl bg-brand text-white font-black text-lg">
                S
              </div>
              <span className="font-bold text-gray-900">
                Solutech<span className="text-brand">Cloud</span>
              </span>
            </Link>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-sm">
              Partner Microsoft 365, Azure y AWS en Panamá y Centroamérica.
              Licenciamiento, migraciones, seguridad y soporte profesional para
              empresas y sector público.
            </p>

            <div className="mt-5 grid gap-2.5 text-gray-600">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand transition-colors w-fit"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-green-600"
                />
                {siteConfig.contact.whatsappDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-brand transition-colors w-fit"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-500"
                />
                {siteConfig.contact.email}
              </a>
              <div className="inline-flex items-center gap-2 text-gray-600">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500"
                />
                {siteConfig.address.city}, {siteConfig.address.countryName}
              </div>
            </div>

            {/* Redes */}
            <div className="mt-5 flex items-center gap-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="size-9 grid place-items-center rounded-full border border-gray-200 text-gray-600 hover:text-brand hover:border-brand transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="size-9 grid place-items-center rounded-full border border-gray-200 text-gray-600 hover:text-brand hover:border-brand transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Servicios</h3>
            <ul className="space-y-2.5 text-gray-600">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Soluciones */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Soluciones</h3>
            <ul className="space-y-2.5 text-gray-600">
              {solutionLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Empresa */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Empresa</h3>
            <ul className="space-y-2.5 text-gray-600">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-gray-500">
          <div>
            © {year} {siteConfig.legalName}. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-brand transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

