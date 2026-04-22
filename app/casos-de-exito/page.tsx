import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudySchema } from "@/lib/seo/schemas";
import { Users, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Casos de éxito — Implementaciones reales en Panamá y Centroamérica",
  description:
    "Proyectos reales de migración a Microsoft 365, implementación de seguridad y backup en empresas de Panamá y Centroamérica.",
  path: "/casos-de-exito/",
});

/**
 * Nota: Inicialmente mostramos un caso documentado y teasers honestos.
 * A medida que completen más proyectos con permiso del cliente,
 * agregar nuevos entries aquí con estructura completa.
 */
const cases = [
  {
    slug: "migracion-microsoft-365-pyme-panama",
    industry: "Servicios profesionales · Panamá",
    title: "Migración completa a Microsoft 365 con seguridad configurada",
    summary:
      "Implementación integral de Microsoft 365, migración de correo desde proveedor anterior y aplicación de políticas de seguridad modernas para una empresa en crecimiento.",
    challenges: [
      "Correo distribuido en múltiples proveedores sin unificar",
      "Sin políticas de seguridad ni MFA en cuentas críticas",
      "Sin respaldo centralizado ni estructura de archivos",
    ],
    solution: [
      "Licenciamiento Microsoft 365 y configuración del tenant",
      "Migración de buzones con coexistencia durante la transición",
      "MFA obligatorio y acceso condicional por ubicación",
      "Estructura SharePoint por áreas con permisos definidos",
      "Capacitación a usuarios y mesa de ayuda interna",
    ],
    results: [
      "Migración completa sin pérdida de correos",
      "100% de usuarios con MFA desde el día uno",
      "Estructura documental unificada y auditable",
      "Reducción significativa en incidentes de phishing",
    ],
    date: "2024-06-01",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[]} current="Casos de éxito" />

      <section className="pt-4 pb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Casos reales
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gray-900 max-w-3xl">
          Implementaciones con{" "}
          <span className="text-brand">resultados medibles</span>
        </h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
          Estos son algunos proyectos que hemos completado. Por acuerdos de confidencialidad, mantenemos nombres anónimos en algunos casos; podemos compartir referencias formales bajo petición.
        </p>
      </section>

      <section className="grid gap-6 mt-6">
        {cases.map((c) => (
          <article key={c.slug} className="card">
            <div className="text-xs font-medium text-brand uppercase tracking-wider mb-2">
              {c.industry}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {c.title}
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">{c.summary}</p>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Desafíos
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {c.challenges.map((ch) => (
                    <li key={ch} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-red-500 shrink-0" />
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Solución
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {c.solution.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-brand shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Resultados
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {c.results.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-green-600 shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          ¿Quieres un caso como este?
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Cuéntanos tu situación actual y vemos cómo podemos ayudarte. La primera conversación es sin compromiso.
        </p>
        <div className="mt-6">
          <Link href="/contacto/" className="btn-primary">
            Conversemos
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Schema por cada caso */}
      {cases.map((c) => (
        <JsonLd
          key={c.slug}
          data={caseStudySchema({
            name: c.title,
            description: c.summary,
            url: `/casos-de-exito/${c.slug}/`,
            clientIndustry: c.industry,
            datePublished: c.date,
          })}
        />
      ))}
    </>
  );
}
