import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookOpen, FileText, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Recursos — Blog, guías y material técnico",
  description:
    "Artículos, guías y material descargable sobre Microsoft 365, cloud, seguridad y migraciones. Contenido técnico enfocado en Panamá y Centroamérica.",
  path: "/recursos/",
});

const sections = [
  {
    href: "/recursos/blog/",
    icon: BookOpen,
    title: "Blog",
    desc: "Artículos técnicos sobre Microsoft 365, cloud, seguridad y migraciones. Casos reales y buenas prácticas.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[]} current="Recursos" />

      <section className="pt-4 pb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Recursos
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gray-900 max-w-3xl">
          Material técnico y guías prácticas
        </h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
          Contenido creado a partir de proyectos reales. Sin marketing inflado, sin contenido vacío — solo información útil para tomar mejores decisiones tecnológicas.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-4 mt-6">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.href}
              href={s.href}
              className="card hover:shadow-md hover:border-brand/30 transition-all group"
            >
              <div className="size-11 grid place-items-center rounded-xl bg-brand/10 text-brand mb-4">
                <Icon className="size-5" />
              </div>
              <h2 className="font-bold text-lg text-gray-900 group-hover:text-brand transition-colors">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Explorar
                <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
