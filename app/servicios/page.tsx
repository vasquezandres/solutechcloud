import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Mail, Cloud, Server, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Servicios cloud y licenciamiento Microsoft en Panamá",
  description:
    "Microsoft 365, correo corporativo, Azure, AWS, seguridad, backup y migraciones. Para empresas y sector público en Panamá y Centroamérica.",
  path: "/servicios/",
  keywords: [
    "servicios cloud Panamá",
    "licenciamiento Microsoft Panamá",
    "proveedor tecnológico Centroamérica",
    "partner Microsoft Panamá",
  ],
});

const services = [
  { href: "/servicios/microsoft-365/", icon: Mail, title: "Microsoft 365", desc: "Licenciamiento Business y Enterprise, migración, MFA, backup y soporte. Partner oficial con facturación local.", highlights: ["Business y Enterprise", "Migración completa", "Seguridad configurada"] },
  { href: "/servicios/correo-corporativo/", icon: Mail, title: "Correo corporativo", desc: "Exchange Online o Google Workspace con tu dominio. Anti-spam, anti-phishing, MFA, 50 GB por buzón.", highlights: ["Con tu dominio propio", "Anti-phishing incluido", "50+ GB por usuario"] },
  { href: "/servicios/azure/", icon: Cloud, title: "Microsoft Azure", desc: "Infraestructura cloud Microsoft. VMs, redes virtuales, Active Directory, backup de servidores y optimización de costos.", highlights: ["VMs y storage", "Redes y VPN", "Optimización de costos"] },
  { href: "/servicios/aws/", icon: Server, title: "Amazon AWS", desc: "Infraestructura cloud Amazon. EC2, S3, redes, CDN, seguridad y migración desde on-premise.", highlights: ["EC2 y S3", "CDN CloudFront", "Migración desde on-prem"] },
  { href: "/servicios/seguridad-y-backup/", icon: ShieldCheck, title: "Seguridad y backup", desc: "EDR, antivirus gestionado, backup 3-2-1 inmutable, respuesta a incidentes y cumplimiento.", highlights: ["EDR con Sophos/Defender", "Backup inmutable", "Respuesta a incidentes"] },
  { href: "/servicios/migraciones/", icon: RefreshCw, title: "Migraciones", desc: "Transiciones de correo, archivos, servidores y aplicaciones. Sin pérdidas, con ventanas coordinadas y comunicación a usuarios.", highlights: ["Correo y archivos", "Servidores y VMs", "Comunicación a usuarios"] },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[]} current="Servicios" />

      <section className="pt-4 pb-10 lg:pb-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Catálogo de servicios
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gray-900 max-w-4xl">
          Servicios tecnológicos para{" "}
          <span className="text-brand">organizaciones serias</span>
        </h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
          Licenciamiento Microsoft, infraestructura cloud, seguridad y migraciones. Trabajamos con PyMEs, corporaciones y entidades del sector público en Panamá y Centroamérica.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Link key={s.href} href={s.href} className="card hover:shadow-lg hover:border-brand/30 transition-all group">
              <div className="size-11 grid place-items-center rounded-xl bg-brand/10 text-brand mb-4">
                <Icon className="size-5" />
              </div>
              <h2 className="font-bold text-lg text-gray-900 group-hover:text-brand transition-colors">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-xs text-gray-500">
                {s.highlights.map((h) => (<li key={h}>• {h}</li>))}
              </ul>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Ver servicio
                <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </section>

      <section className="mt-20 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">¿No sabes por dónde empezar?</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Cuéntanos tu situación actual y objetivos. Te ayudamos a priorizar y armar un plan por fases que no comprometa presupuesto de un solo golpe.
        </p>
        <div className="mt-6">
          <Link href="/contacto/" className="btn-primary">
            Conversemos
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
