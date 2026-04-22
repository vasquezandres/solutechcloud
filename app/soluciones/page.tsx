import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Landmark, Building2, Briefcase, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Soluciones por sector — Gobierno, empresas, PyMEs, educación y salud",
  description:
    "Soluciones tecnológicas adaptadas por sector. Microsoft 365, seguridad y cloud para gobierno, corporaciones, PyMEs, instituciones educativas y centros de salud.",
  path: "/soluciones/",
});

const solutions = [
  {
    href: "/soluciones/sector-publico/",
    icon: Landmark,
    title: "Sector público",
    desc: "Entidades gubernamentales, facturación local, cumplimiento, licitaciones PanamaCompra.",
    highlights: ["Microsoft 365 Gobierno", "Cumplimiento", "PanamaCompra"],
  },
  {
    href: "/soluciones/empresas/",
    icon: Building2,
    title: "Empresas",
    desc: "Corporaciones medianas y grandes con infraestructura compleja, equipos distribuidos y requisitos de cumplimiento.",
    highlights: ["Microsoft Enterprise", "Seguridad avanzada", "Soporte 24/7"],
  },
  {
    href: "/soluciones/pymes/",
    icon: Briefcase,
    title: "PyMEs",
    desc: "Pequeñas y medianas empresas que necesitan productividad, seguridad y soporte sin complejidad innecesaria.",
    highlights: ["Microsoft Business", "Soporte cercano", "Precios claros"],
  },
  {
    href: "/soluciones/educacion/",
    icon: GraduationCap,
    title: "Educación",
    desc: "Instituciones educativas con necesidades de colaboración, aulas virtuales y gestión docente.",
    highlights: ["M365 Education", "Teams for Education", "Licencias académicas"],
  },
  {
    href: "/soluciones/salud/",
    icon: Stethoscope,
    title: "Salud",
    desc: "Clínicas, centros médicos y hospitales con datos sensibles de pacientes y requisitos de confidencialidad.",
    highlights: ["Datos cifrados", "Acceso controlado", "Cumplimiento"],
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[]} current="Soluciones" />

      <section className="pt-4 pb-10 lg:pb-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Soluciones por sector
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gray-900 max-w-4xl">
          Experiencia adaptada a{" "}
          <span className="text-brand">tu realidad sectorial</span>
        </h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
          Cada industria tiene necesidades específicas: regulaciones, presupuestos, volúmenes y criticidad. Trabajamos con enfoques diferenciados según el sector.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {solutions.map((s) => {
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
                Ver solución
                <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
