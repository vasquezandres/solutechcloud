/**
 * Renderiza uno o varios objetos JSON-LD como <script> en la página.
 *
 * Uso:
 *   <JsonLd data={serviceSchema({ ... })} />
 *   <JsonLd data={[serviceSchema({...}), faqSchema(items)]} />
 *
 * Importante: debe ir dentro del <body>, típicamente al final del JSX de la página.
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          // JSON.stringify con escape de </script> para seguridad
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
