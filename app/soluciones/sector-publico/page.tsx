import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRight, Landmark, FileCheck, ShieldCheck, Mail } from "lucide-react";

export const metadata = buildMetadata({
  title: "Soluciones para el sector público en Panamá",
  description:
    "Licenciamiento Microsoft, seguridad, migraciones y soporte para entidades gubernamentales de Panamá. Facturación local, registrados en PanamaCompra.",
  path: "/soluciones/sector-publico/",
  keywords: [
    "soluciones gobierno Panamá",
    "proveedor tecnológico sector público",
    "Microsoft gobierno Panamá",
    "PanamaCompra proveedor tecnología",
  ],
});

const subpages = [
  {
    href: "/soluciones/sector-publico/microsoft-365-gobierno/",
    icon: Mail,
    title: "Microsoft 365 para gobierno",
    desc: "Implementación de Microsoft 365 específica para entidades públicas, con planes E1/E3/E5, MFA obligatorio, retención legal y cumplimiento.",
  },
];

const capabilities = [
  {
    icon: Landmark,
    title: "Registro en PanamaCompra",
    desc: "Estamos habilitados para participar en licitaciones del Estado panameño con propuestas técnicas y económicas formales.",
  },
  {
    icon: FileCheck,
    title: "Facturación local",
    desc: "Emitimos factura fiscal panameña a nombre de Solutech Panamá. Aceptamos órdenes de compra, transferencia y ACH.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento y gobernanza",
    desc: "Aplicamos MFA, retención legal, auditoría unificada, DLP y buenas prácticas para entornos regulados del Estado.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Soluciones", href: "/soluciones/" }]} current="Sector público" />

      <section className="pt-4 pb-10 lg:pb-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Sector público
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gray-900 max-w-4xl">
          Proveedor tecnológico para{" "}
          <span className="text-brand">entidades del Estado</span>
        </h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
          Acompañamos a instituciones públicas panameñas en la modernización de su infraestructura tecnológica: licenciamiento Microsoft, migraciones, seguridad, cumplimiento y soporte en español.
        </p>
      </section>

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            El sector público panameño tiene necesidades técnicas y regulatorias específicas: continuidad de servicio a la ciudadanía, transparencia, retención legal de correos y documentos, auditoría unificada, y procesos formales de adquisición a través de <strong>PanamaCompra</strong>.
          </p>
          <p>
            Trabajamos con enfoque adaptado a ese contexto: propuestas técnicas formales, plazos comprometidos, facturación local, y configuraciones alineadas con las buenas prácticas de cumplimiento.
          </p>
        </div>
      </section>

      {/* Capacidades */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Capacidades para el sector público
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="card">
                <div className="size-10 grid place-items-center rounded-xl bg-brand/10 text-brand mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Subpáginas */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Soluciones específicas
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {subpages.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.href} href={s.href} className="card hover:shadow-md hover:border-brand/30 transition-all group">
                <div className="size-10 grid place-items-center rounded-xl bg-brand/10 text-brand mb-3">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                  Ver solución
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            ¿Tu institución está modernizando tecnología?
          </h2>
          <p className="mt-3 text-gray-300 text-lg leading-relaxed">
            Podemos preparar propuestas técnicas formales, apoyar en pliegos de condiciones y acompañar el proceso de licitación.
          </p>
          <div className="mt-6">
            <Link href="/contacto/" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium bg-white text-gray-900 hover:bg-gray-100 transition-colors">
              Solicitar información
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
