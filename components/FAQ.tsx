import { faqSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Plus } from "lucide-react";

export type FAQItem = { q: string; a: string };

type FAQProps = {
  items: FAQItem[];
  /** Si es false, NO emite schema (útil si hay varios FAQ en la misma página) */
  withSchema?: boolean;
  /** Título semántico opcional para lectores de pantalla */
  heading?: string;
};

/**
 * FAQ accordion con Schema.org FAQPage automático.
 *
 * Uso:
 *   <FAQ items={[{ q: "...", a: "..." }, ...]} />
 *
 * Para múltiples FAQ en la misma página, solo UNO debe llevar schema:
 *   <FAQ items={groupA} />
 *   <FAQ items={groupB} withSchema={false} />
 */
export default function FAQ({
  items,
  withSchema = true,
  heading,
}: FAQProps) {
  const schemaItems = items.map((it) => ({
    question: it.q,
    answer: it.a,
  }));

  return (
    <>
      {heading && <h2 className="sr-only">{heading}</h2>}
      <div className="divide-y rounded-2xl border border-gray-200 bg-white">
        {items.map((it, i) => (
          <details
            key={i}
            className="group p-5 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="cursor-pointer font-medium select-none flex items-center justify-between gap-4 text-gray-900">
              <span>{it.q}</span>
              <Plus
                className="size-5 shrink-0 text-gray-400 transition-transform group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <div className="mt-3 text-gray-600 leading-relaxed">
              {it.a}
            </div>
          </details>
        ))}
      </div>
      {withSchema && items.length > 0 && (
        <JsonLd data={faqSchema(schemaItems)} />
      )}
    </>
  );
}
