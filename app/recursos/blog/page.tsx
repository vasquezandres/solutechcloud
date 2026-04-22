import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata = buildMetadata({
  title: "Blog — Guías técnicas sobre Microsoft 365, cloud y seguridad",
  description:
    "Artículos prácticos sobre Microsoft 365, Azure, AWS, seguridad, backup y migraciones. Enfocados en Panamá y Centroamérica.",
  path: "/recursos/blog/",
});

const posts = [
  {
    slug: "como-adquirir-microsoft-365-sector-publico-panama",
    title: "Cómo adquirir Microsoft 365 para el sector público en Panamá",
    excerpt:
      "Resumen del proceso, modalidades de compra y buenas prácticas para entidades públicas que necesitan modernizar su productividad.",
    category: "Sector público",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Recursos", href: "/recursos/" }]}
        current="Blog"
      />

      <section className="pt-4 pb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Recursos · Blog
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gray-900 max-w-3xl">
          Guías y notas técnicas
        </h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
          Compartimos lo que aprendemos implementando proyectos reales: buenas prácticas, errores comunes a evitar y contexto regional para tomar mejores decisiones tecnológicas.
        </p>
      </section>

      {posts.length > 0 ? (
        <section className="grid md:grid-cols-2 gap-4 mt-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/recursos/blog/${p.slug}/`}
              className="card hover:shadow-md hover:border-brand/30 transition-all group"
            >
              <div className="flex items-center gap-2 text-xs text-brand font-semibold mb-3">
                <BookOpen className="size-3.5" />
                {p.category}
              </div>
              <h2 className="font-bold text-lg text-gray-900 group-hover:text-brand transition-colors">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {p.excerpt}
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Leer artículo
                <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="card">
          <p className="text-gray-600">
            Estamos preparando los primeros artículos. Vuelve pronto o{" "}
            <Link href="/contacto/" className="text-brand underline">
              contáctanos
            </Link>{" "}
            si tienes una consulta específica.
          </p>
        </div>
      )}
    </>
  );
}
