import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/seo/schemas";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const POST = {
  slug: "como-adquirir-microsoft-365-sector-publico-panama",
  title: "Cómo adquirir Microsoft 365 para el sector público en Panamá",
  description:
    "Guía práctica sobre modalidades de compra, licenciamiento E1/E3/E5 y buenas prácticas de implementación para entidades gubernamentales panameñas.",
  publishedAt: "2025-03-15",
  modifiedAt: "2025-11-01",
  readingTime: "6 min",
};

export const metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/recursos/blog/${POST.slug}/`,
  ogType: "article",
  article: {
    publishedTime: POST.publishedAt,
    modifiedTime: POST.modifiedAt,
    tags: ["Microsoft 365", "Sector público", "Panamá", "Licenciamiento"],
  },
});

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Recursos", href: "/recursos/" },
          { name: "Blog", href: "/recursos/blog/" },
        ]}
        current={POST.title}
      />

      <article className="prose prose-gray max-w-3xl">
        <div className="flex items-center gap-4 text-sm text-gray-500 not-prose mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {new Date(POST.publishedAt).toLocaleDateString("es-PA", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {POST.readingTime} de lectura
          </span>
        </div>

        <h1>{POST.title}</h1>
        <p className="text-lg text-gray-600 lead">{POST.description}</p>

        <h2>Modalidades de licenciamiento disponibles</h2>
        <p>
          En Panamá, las entidades del sector público pueden adquirir Microsoft 365 a través de varias modalidades. La más común es mediante un <strong>partner CSP (Cloud Solution Provider)</strong>, que permite facturación local, soporte en español y acompañamiento técnico durante y después de la implementación.
        </p>

        <p>
          Las opciones principales son:
        </p>
        <ul>
          <li><strong>Microsoft 365 Enterprise E1:</strong> apps web, correo Exchange, OneDrive, SharePoint, Teams. Ideal para atención ciudadana y puestos compartidos.</li>
          <li><strong>Microsoft 365 Enterprise E3:</strong> todo lo anterior más apps de escritorio, DLP, eDiscovery estándar y gestión de dispositivos. Adecuado para áreas con flujos documentales formales.</li>
          <li><strong>Microsoft 365 Enterprise E5:</strong> agrega seguridad avanzada (Defender), eDiscovery Premium, telefonía integrada y analítica. Recomendado para áreas con datos sensibles.</li>
        </ul>

        <h2>Proceso de adquisición vía PanamaCompra</h2>
        <p>
          Las entidades del Estado suelen adquirir tecnología a través de <strong>PanamaCompra</strong>, el sistema electrónico de contrataciones públicas. El partner debe estar registrado y habilitado para participar en licitaciones, subastas electrónicas o contrataciones menores según el monto.
        </p>
        <p>
          El proceso típico incluye:
        </p>
        <ol>
          <li>Publicación del pliego de cargos con requerimientos técnicos y económicos.</li>
          <li>Presentación de propuestas por parte de proveedores registrados.</li>
          <li>Evaluación técnica y económica por parte del comité.</li>
          <li>Adjudicación, firma de contrato y emisión de orden de compra.</li>
          <li>Implementación según los tiempos comprometidos.</li>
        </ol>

        <h2>Buenas prácticas de seguridad desde el día uno</h2>
        <p>
          Más allá de la compra de licencias, la seguridad real depende de cómo se configure el tenant. Estas son las prácticas mínimas que toda entidad pública debería aplicar:
        </p>
        <ul>
          <li><strong>MFA obligatorio</strong> para todos los usuarios, con acceso condicional por ubicación y dispositivo.</li>
          <li><strong>Retención legal</strong> automática de correo y documentos para cumplir con obligaciones de transparencia.</li>
          <li><strong>Auditoría unificada</strong> activada con alertas ante actividad sospechosa.</li>
          <li><strong>Backups dedicados</strong> con soluciones como Dropsuite o Acronis más allá de la retención nativa de Microsoft.</li>
          <li><strong>Políticas DLP</strong> para prevenir fuga de datos personales de ciudadanos.</li>
        </ul>

        <h2>¿Cuánto tiempo toma implementar?</h2>
        <p>
          La activación de las licencias suele ser inmediata. La migración de correo y archivos históricos toma entre 2 y 6 semanas según el volumen, con trabajo por lotes en ventanas coordinadas para no interrumpir operaciones críticas.
        </p>
        <p>
          La capacitación a funcionarios y equipo de TI es clave. Un despliegue sin adopción real termina en licencias infrautilizadas y resistencia al cambio.
        </p>

        <h2>¿Necesitas ayuda con la adquisición?</h2>
        <p>
          Si tu institución está evaluando Microsoft 365, podemos acompañarte desde la fase de análisis hasta la implementación y soporte continuo. Ofrecemos propuestas técnicas formales, facturación local y soporte en español.
        </p>
        <p>
          <Link href="/contacto/">Solicita una cotización personalizada</Link> contándonos brevemente cuántos funcionarios tiene la entidad y qué modalidad de contratación manejan.
        </p>

        <div className="not-prose mt-12 rounded-2xl bg-gray-50 border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-3">¿Necesitas más información?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Consulta nuestra página específica sobre Microsoft 365 para gobierno con planes detallados y metodología.
          </p>
          <Link
            href="/soluciones/sector-publico/microsoft-365-gobierno/"
            className="inline-flex items-center gap-1 text-brand font-medium hover:underline"
          >
            Ver Microsoft 365 para Gobierno
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </article>

      <JsonLd
        data={articleSchema({
          headline: POST.title,
          description: POST.description,
          url: `/recursos/blog/${POST.slug}/`,
          datePublished: POST.publishedAt,
          dateModified: POST.modifiedAt,
        })}
      />
    </>
  );
}
