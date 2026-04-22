import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio solutechcloud.com y de los servicios prestados por Solutech Panamá.",
  path: "/legal/terminos/",
});

const LAST_UPDATED = "2025-11-01";

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Legal", href: "/legal/" }]} current="Términos y Condiciones" />

      <article className="prose prose-gray max-w-3xl">
        <h1>Términos y Condiciones</h1>
        <p className="text-sm text-gray-500">Última actualización: {LAST_UPDATED}</p>

        <h2>1. Aceptación de los términos</h2>
        <p>
          Al acceder y utilizar el sitio <a href={siteConfig.url}>{siteConfig.url}</a> (en adelante, &ldquo;el sitio&rdquo;), operado por <strong>{siteConfig.legalName}</strong> (en adelante, &ldquo;Solutech&rdquo;), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo, por favor no utilices el sitio.
        </p>

        <h2>2. Uso del sitio</h2>
        <p>
          El sitio se proporciona con fines informativos y comerciales. Puedes navegar libremente, solicitar cotizaciones, descargar materiales marcados como públicos y contactarnos.
        </p>
        <p>No está permitido:</p>
        <ul>
          <li>Usar el sitio para fines ilegales o no autorizados.</li>
          <li>Intentar acceder a áreas restringidas, servidores o bases de datos.</li>
          <li>Realizar scraping automatizado sin autorización previa por escrito.</li>
          <li>Introducir virus, malware o código malicioso.</li>
          <li>Suplantar identidad o falsear datos en los formularios de contacto.</li>
        </ul>

        <h2>3. Propiedad intelectual</h2>
        <p>
          Todo el contenido del sitio (textos, imágenes, logos, diseño, código) es propiedad de Solutech o de sus respectivos titulares, y está protegido por las leyes de propiedad intelectual.
        </p>
        <p>
          Puedes citar fragmentos con atribución y enlace a la fuente. No está permitida la reproducción íntegra de contenidos sin autorización previa.
        </p>
        <p>
          Las marcas <strong>Microsoft</strong>, <strong>Microsoft 365</strong>, <strong>Azure</strong>, <strong>AWS</strong>, <strong>Sophos</strong>, <strong>Acronis</strong>, <strong>Veeam</strong> y <strong>Dropsuite</strong> son propiedad de sus respectivos titulares. Su mención en este sitio es únicamente descriptiva.
        </p>

        <h2>4. Servicios y propuestas comerciales</h2>
        <p>
          La información sobre servicios publicada en el sitio es general y orientativa. No constituye una oferta vinculante. Las propuestas comerciales formales se emiten por escrito, individualizadas por cliente, y contienen condiciones específicas de alcance, plazos, precios y soporte.
        </p>
        <p>
          Los servicios contratados se rigen por los términos del contrato de prestación de servicios correspondiente, que prevalece sobre lo publicado en el sitio en caso de discrepancia.
        </p>

        <h2>5. Limitación de responsabilidad</h2>
        <p>
          El contenido del sitio se proporciona &ldquo;tal cual&rdquo;. Aunque hacemos esfuerzos razonables por mantenerlo actualizado y exacto, no garantizamos que esté libre de errores ni que refleje siempre las últimas versiones de productos de terceros (Microsoft, AWS, etc.).
        </p>
        <p>
          Solutech no será responsable por daños indirectos, pérdida de datos o lucro cesante derivados del uso de la información publicada en el sitio. Para servicios contratados, la responsabilidad se rige por los términos del contrato específico.
        </p>

        <h2>6. Enlaces a sitios externos</h2>
        <p>
          Este sitio puede contener enlaces a sitios de terceros. No somos responsables del contenido, políticas de privacidad ni prácticas de esos sitios. Los incluimos solo como referencia.
        </p>

        <h2>7. Privacidad</h2>
        <p>
          El tratamiento de tus datos personales se rige por nuestra{" "}
          <a href="/legal/privacidad/">Política de Privacidad</a> y{" "}
          <a href="/legal/cookies/">Política de Cookies</a>, que forman parte integral de estos Términos.
        </p>

        <h2>8. Modificaciones</h2>
        <p>
          Solutech se reserva el derecho de modificar estos Términos en cualquier momento. Los cambios serán efectivos desde su publicación en el sitio. El uso continuado del sitio tras una modificación implica aceptación de los nuevos términos.
        </p>

        <h2>9. Legislación aplicable y jurisdicción</h2>
        <p>
          Estos Términos se rigen por las leyes de la República de Panamá. Cualquier controversia derivada del uso del sitio será sometida a los tribunales competentes de la Ciudad de Panamá, salvo que la legislación imponga otro fuero.
        </p>

        <h2>10. Contacto</h2>
        <p>
          Para consultas sobre estos Términos:
        </p>
        <ul>
          <li>Empresa: {siteConfig.legalName}</li>
          <li>Correo: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
          <li>WhatsApp: <a href={siteConfig.contact.whatsappUrl}>{siteConfig.contact.whatsappDisplay}</a></li>
          <li>Ubicación: {siteConfig.address.city}, {siteConfig.address.countryName}</li>
        </ul>
      </article>
    </>
  );
}
