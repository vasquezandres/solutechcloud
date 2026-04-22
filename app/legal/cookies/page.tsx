import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Política de Cookies",
  description:
    "Cómo usamos cookies y tecnologías similares en solutechcloud.com. Tipos de cookies, propósitos y cómo gestionarlas.",
  path: "/legal/cookies/",
});

const LAST_UPDATED = "2025-11-01";

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Legal", href: "/legal/" }]} current="Política de Cookies" />

      <article className="prose prose-gray max-w-3xl">
        <h1>Política de Cookies</h1>
        <p className="text-sm text-gray-500">Última actualización: {LAST_UPDATED}</p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web guardan en tu navegador para recordar información sobre tu visita. Pueden hacer que el sitio funcione mejor, recordar preferencias o ayudar a analizar cómo se usa.
        </p>

        <h2>2. Cookies que usamos</h2>
        <p>
          En <a href={siteConfig.url}>{siteConfig.url}</a> mantenemos un uso mínimo de cookies, prefiriendo siempre alternativas que respeten tu privacidad.
        </p>

        <h3>Cookies técnicas (esenciales)</h3>
        <p>
          Necesarias para que el sitio funcione correctamente. No requieren consentimiento.
        </p>
        <ul>
          <li>
            <strong>__cf_bm</strong> — Cloudflare. Protección contra bots maliciosos. Caduca en 30 minutos.
          </li>
          <li>
            <strong>cf_clearance</strong> — Cloudflare. Validación de desafíos de seguridad. Caduca en 30 días.
          </li>
          <li>
            <strong>cf-chl-*</strong> — Cloudflare Turnstile (formularios). Previene envíos automatizados. Sesión.
          </li>
        </ul>

        <h3>Cookies analíticas</h3>
        <p>
          Usamos <strong>Cloudflare Web Analytics</strong>, que es un sistema de analítica sin cookies y respetuoso de la privacidad. No rastrea visitantes individuales ni requiere banner de consentimiento.
        </p>
        <p>
          Si en el futuro incorporamos herramientas analíticas con cookies (como Google Analytics), actualizaremos esta política y solicitaremos consentimiento explícito.
        </p>

        <h3>Cookies de terceros</h3>
        <p>
          Algunos servicios externos pueden instalar sus propias cookies cuando interactúas con contenido embebido:
        </p>
        <ul>
          <li><strong>YouTube</strong> — si ves videos embebidos.</li>
          <li><strong>LinkedIn, Instagram</strong> — si haces clic en enlaces a nuestras redes.</li>
          <li><strong>Formspree</strong> — al enviar formularios de contacto.</li>
        </ul>
        <p>
          Estos servicios tienen sus propias políticas de cookies, fuera de nuestro control.
        </p>

        <h2>3. Cómo gestionar las cookies</h2>
        <p>
          Puedes configurar o eliminar cookies directamente desde tu navegador:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Ten en cuenta que bloquear todas las cookies puede afectar funcionalidad básica como los formularios anti-spam.
        </p>

        <h2>4. Cambios a esta política</h2>
        <p>
          Actualizamos esta política cuando incorporamos o eliminamos herramientas que usan cookies. La fecha al inicio refleja la última modificación.
        </p>

        <h2>5. Contacto</h2>
        <p>
          Si tienes preguntas sobre nuestro uso de cookies, escríbenos a{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </p>
      </article>
    </>
  );
}
