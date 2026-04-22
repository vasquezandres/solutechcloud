import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Solutech Cloud. Cómo recolectamos, usamos y protegemos los datos personales de nuestros clientes y visitantes del sitio.",
  path: "/legal/privacidad/",
});

const LAST_UPDATED = "2025-11-01";

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Legal", href: "/legal/" }]} current="Política de Privacidad" />

      <article className="prose prose-gray max-w-3xl">
        <h1>Política de Privacidad</h1>
        <p className="text-sm text-gray-500">
          Última actualización: {LAST_UPDATED}
        </p>

        <h2>1. Información general</h2>
        <p>
          Esta Política de Privacidad describe cómo <strong>{siteConfig.legalName}</strong> (en adelante, &ldquo;Solutech&rdquo;, &ldquo;nosotros&rdquo;) recolecta, usa y protege la información personal de quienes visitan <a href={siteConfig.url}>{siteConfig.url}</a> o contratan nuestros servicios.
        </p>
        <p>
          Al utilizar nuestro sitio o contratar nuestros servicios, aceptas las prácticas descritas en este documento.
        </p>

        <h2>2. Información que recolectamos</h2>
        <h3>Información que nos proporcionas directamente</h3>
        <ul>
          <li>Nombre, correo electrónico, teléfono y nombre de empresa cuando completas formularios de contacto o solicitas cotizaciones.</li>
          <li>Información técnica sobre tu organización cuando contratas servicios (dominios, cantidad de usuarios, infraestructura actual).</li>
          <li>Información de facturación y datos fiscales cuando se formaliza una relación comercial.</li>
        </ul>

        <h3>Información recolectada automáticamente</h3>
        <ul>
          <li>Datos de navegación: dirección IP aproximada, tipo de navegador, sistema operativo, páginas visitadas, tiempo en el sitio.</li>
          <li>Cookies técnicas y analíticas (ver <a href="/legal/cookies/">Política de Cookies</a>).</li>
        </ul>

        <h2>3. Cómo usamos tu información</h2>
        <ul>
          <li>Responder a consultas, enviar cotizaciones y dar seguimiento comercial.</li>
          <li>Prestar los servicios contratados y gestionar soporte técnico.</li>
          <li>Emitir facturación y cumplir obligaciones legales y fiscales.</li>
          <li>Mejorar el sitio, nuestros servicios y la experiencia del usuario.</li>
          <li>Enviar comunicaciones comerciales ocasionales, solo si has consentido (puedes cancelar en cualquier momento).</li>
        </ul>

        <h2>4. Base legal para el tratamiento</h2>
        <p>
          Tratamos tus datos personales bajo las siguientes bases legales, según el caso:
        </p>
        <ul>
          <li><strong>Consentimiento:</strong> cuando te suscribes a comunicaciones o aceptas cookies no esenciales.</li>
          <li><strong>Ejecución de contrato:</strong> cuando es necesario para prestar los servicios contratados.</li>
          <li><strong>Obligación legal:</strong> facturación, registros contables y obligaciones fiscales panameñas.</li>
          <li><strong>Interés legítimo:</strong> mejora del sitio, seguridad y prevención de fraude.</li>
        </ul>

        <h2>5. Compartir información con terceros</h2>
        <p>
          No vendemos tus datos personales. Compartimos información solo cuando es necesario:
        </p>
        <ul>
          <li><strong>Proveedores de servicios:</strong> Microsoft, Cloudflare, Formspree, proveedores de backup y seguridad que procesan datos por instrucción nuestra.</li>
          <li><strong>Autoridades:</strong> cuando lo requiere la ley, una orden judicial o un requerimiento gubernamental válido.</li>
          <li><strong>Socios comerciales:</strong> solo con tu consentimiento explícito previo.</li>
        </ul>
        <p>
          Todos nuestros proveedores están sujetos a acuerdos de confidencialidad y procesamiento de datos conformes a estándares internacionales.
        </p>

        <h2>6. Transferencias internacionales</h2>
        <p>
          Algunos de nuestros proveedores (Microsoft, Cloudflare) operan infraestructura global y pueden almacenar datos en centros de datos fuera de Panamá, principalmente en Estados Unidos y la Unión Europea. Estos proveedores cuentan con certificaciones internacionales de protección de datos (ISO 27001, SOC 2, cláusulas contractuales tipo).
        </p>

        <h2>7. Retención de datos</h2>
        <ul>
          <li>Datos de contactos no comerciales: hasta 2 años tras el último contacto.</li>
          <li>Datos de clientes activos: mientras dure la relación comercial y hasta 5 años después para fines fiscales.</li>
          <li>Registros de navegación anonimizados: hasta 26 meses.</li>
        </ul>

        <h2>8. Tus derechos</h2>
        <p>
          Como titular de tus datos personales, tienes derecho a:
        </p>
        <ul>
          <li>Acceder a los datos personales que tenemos sobre ti.</li>
          <li>Solicitar corrección de datos inexactos.</li>
          <li>Solicitar la eliminación de tus datos (derecho al olvido), con excepciones legales.</li>
          <li>Oponerte al tratamiento para fines de marketing.</li>
          <li>Portabilidad de datos en formatos estándar.</li>
          <li>Retirar tu consentimiento en cualquier momento (sin efectos retroactivos).</li>
        </ul>
        <p>
          Para ejercer estos derechos, escríbenos a <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> con el asunto &ldquo;Solicitud de derechos de datos&rdquo;. Respondemos en un plazo máximo de 15 días hábiles.
        </p>

        <h2>9. Seguridad</h2>
        <p>
          Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos: cifrado en tránsito (HTTPS/TLS 1.3), autenticación multifactor en sistemas internos, control de accesos por privilegio mínimo, copias de seguridad periódicas, y monitoreo continuo.
        </p>
        <p>
          Ninguna plataforma es 100% segura. En caso de incidente que afecte datos personales, notificaremos a los afectados y a las autoridades competentes dentro de los plazos legales aplicables.
        </p>

        <h2>10. Menores de edad</h2>
        <p>
          Nuestros servicios están dirigidos a organizaciones y profesionales mayores de edad. No recolectamos intencionalmente datos de menores de 18 años. Si descubres que un menor nos ha proporcionado datos, contáctanos para eliminarlos.
        </p>

        <h2>11. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política ocasionalmente. La fecha de &ldquo;última actualización&rdquo; al inicio del documento indica cuándo se modificó. Cambios significativos se notifican por correo a clientes activos.
        </p>

        <h2>12. Contacto</h2>
        <p>
          Para preguntas sobre esta política o tratamiento de datos:
        </p>
        <ul>
          <li>Correo: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
          <li>WhatsApp: <a href={siteConfig.contact.whatsappUrl}>{siteConfig.contact.whatsappDisplay}</a></li>
          <li>Dirección: {siteConfig.address.city}, {siteConfig.address.countryName}</li>
        </ul>
      </article>
    </>
  );
}
