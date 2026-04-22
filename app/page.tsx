import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  Mail,
  Cloud,
  ShieldCheck,
  RefreshCw,
  Server,
  ArrowRight,
  CheckCircle2,
  Building2,
  Landmark,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Partner Microsoft 365, Azure y AWS en Panamá y Centroamérica",
  description:
    "Licenciamiento Microsoft 365, migración de correo, infraestructura cloud, seguridad y backup. Partner oficial con facturación local en Panamá.",
  path: "/",
  keywords: [
    "Microsoft 365 Panamá",
    "partner Microsoft Panamá",
    "licenciamiento Microsoft",
    "Azure Panamá",
    "AWS Panamá",
    "correo corporativo Panamá",
    "soluciones cloud Centroamérica",
  ],
});

const services = [
  { href: "/servicios/microsoft-365/", icon: Mail, title: "Microsoft 365", desc: "Licenciamiento, migración, MFA, backup y soporte. Partner oficial." },
  { href: "/servicios/correo-corporativo/", icon: Mail, title: "Correo corporativo", desc: "Exchange Online con tu dominio. Anti-spam, anti-phishing, MFA." },
  { href: "/servicios/azure/", icon: Cloud, title: "Microsoft Azure", desc: "Infraestructura cloud Microsoft. VMs, redes, AD, backup." },
  { href: "/servicios/aws/", icon: Server, title: "Amazon AWS", desc: "EC2, S3, CDN, seguridad y migración desde on-premise." },
  { href: "/servicios/seguridad-y-backup/", icon: ShieldCheck, title: "Seguridad y backup", desc: "EDR, backup 3-2-1 inmutable, respuesta a incidentes." },
  { href: "/servicios/migraciones/", icon: RefreshCw, title: "Migraciones", desc: "Correo, archivos, servidores. Sin pérdidas, ventanas coordinadas." },
];

const solutions = [
  { href: "/soluciones/sector-publico/", icon: Landmark, title: "Sector público", desc: "Entidades gubernamentales, facturación local, cumplimiento y licitaciones." },
  { href: "/soluciones/empresas/", icon: Building2, title: "Empresas", desc: "Corporaciones medianas y grandes con necesidades complejas de TI." },
  { href: "/soluciones/pymes/", icon: Building2, title: "PyMEs", desc: "Soluciones escalables con soporte cercano y precios claros." },
];

const whyUs = [
  "Partner Microsoft con facturación local en Panamá",
  "Soporte en español por WhatsApp y correo",
  "Experiencia con PyMEs, empresas y sector público",
  "Metodología probada: descubrir, diseñar, pilotar, migrar, soportar",
  "Herramientas líderes: Microsoft, Sophos, Acronis, Veeam, Dropsuite",
  "Registrados en PanamaCompra para licitaciones públicas",
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-10 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 mb-5">
              <span className="size-1.5 rounded-full bg-green-500" />
              Microsoft Partner · Facturación local en Panamá
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-gray-900">
              Tecnología seria para{" "}
              <span className="text-brand">organizaciones serias</span>
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
              Licenciamiento Microsoft 365, infraestructura Azure/AWS, seguridad y backup para empresas y sector público en Panamá y Centroamérica.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto/" className="btn-primary">
                Solicitar cotización
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium border border-gray-200 hover:border-brand hover:text-brand transition-colors"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-600" />
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-green-600" />
                Facturación local
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-green-600" />
                Soporte en español
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-green-600" />
                Registrados en PanamaCompra
              </span>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-gradient-to-br from-brand/5 to-gray-50 aspect-[4/3] lg:aspect-square lg:max-w-md">
              <img
                src="/img/hero.webp"
                alt="Servicios cloud y licenciamiento Microsoft en Panamá"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="mt-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">
              Qué hacemos
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Servicios tecnológicos integrales
            </h2>
          </div>
          <Link
            href="/servicios/"
            className="text-sm text-brand font-medium hover:underline inline-flex items-center gap-1"
          >
            Ver todos los servicios
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="card hover:shadow-md hover:border-brand/30 transition-all group"
              >
                <div className="size-10 grid place-items-center rounded-xl bg-brand/10 text-brand mb-3">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Soluciones */}
      <section className="mt-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">
              Para quién trabajamos
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Soluciones por tipo de organización
            </h2>
          </div>
          <Link
            href="/soluciones/"
            className="text-sm text-brand font-medium hover:underline inline-flex items-center gap-1"
          >
            Ver todas las soluciones
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="card hover:shadow-md hover:border-brand/30 transition-all group"
              >
                <div className="size-10 grid place-items-center rounded-xl bg-brand/10 text-brand mb-3">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Por qué Solutech */}
      <section className="mt-20 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">
              Por qué Solutech Cloud
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Proveedor serio, cercano y con facturación local
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Trabajamos con organizaciones que valoran la transparencia técnica, los plazos cumplidos y el soporte en español. No vendemos magia: resolvemos problemas concretos con herramientas probadas.
            </p>
            <Link
              href="/sobre-nosotros/"
              className="mt-6 inline-flex items-center gap-1 text-brand font-medium hover:underline"
            >
              Conocer más sobre nosotros
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <ul className="grid gap-3">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="size-5 text-green-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="mt-20 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            ¿Listo para modernizar tu tecnología?
          </h2>
          <p className="mt-3 text-gray-300 text-lg leading-relaxed">
            Cuéntanos tu situación actual y plazos. Te enviamos una propuesta clara en menos de 24 horas hábiles.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacto/"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Solicitar cotización
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium border border-white/20 hover:bg-white/10 transition-colors"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-400" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
