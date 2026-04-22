import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";

export type BreadcrumbTrail = {
  name: string;
  /** Path sin dominio, ej: "/servicios/microsoft-365/" */
  href: string;
}[];

/**
 * Breadcrumbs con Schema.org BreadcrumbList automático.
 * Uso: <Breadcrumbs items={[{ name: "Servicios", href: "/servicios/" }, ...]} />
 *
 * NO incluir "Inicio" en los items — se agrega automáticamente.
 * NO incluir la página actual con href — se agrega como último item sin link.
 */
export function Breadcrumbs({
  items,
  current,
}: {
  items: BreadcrumbTrail;
  current: string;
}) {
  const allItems = [
    { name: "Inicio", href: "/" },
    ...items,
    { name: current, href: "" }, // current sin link
  ];

  const schemaItems = allItems.map((item) => ({
    name: item.name,
    url: item.href || allItems[allItems.length - 2]?.href || "/",
  }));

  return (
    <>
      <nav
        aria-label="Ruta de navegación"
        className="text-sm text-gray-500 mb-6"
      >
        <ol className="flex flex-wrap items-center gap-1">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            const isFirst = idx === 0;
            return (
              <li key={idx} className="flex items-center gap-1">
                {idx > 0 && (
                  <ChevronRight
                    className="size-3 text-gray-400"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span
                    className="text-gray-700 font-medium"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-brand transition-colors inline-flex items-center gap-1"
                  >
                    {isFirst && <Home className="size-3" aria-hidden="true" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
    </>
  );
}
