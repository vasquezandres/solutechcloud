import Link from "next/link";
import Section from "@/components/Section";

export default function Page() {
  const posts = [
    {
      slug: "como-adquirir-microsoft-365-sector-publico-panama",
      title: "Cómo adquirir Microsoft 365 para el sector público en Panamá",
      excerpt:
        "Resumen del proceso, modalidades de compra y buenas prácticas para entidades públicas.",
    },
  ];
  return (
    <Section title="Blog" subtitle="Notas y guías prácticas.">
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card block">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{p.excerpt}</p>
            <span className="mt-3 inline-block text-brand text-sm font-medium">
              Leer más →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
