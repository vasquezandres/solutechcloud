import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { Shield, FileText, Users, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Microsoft 365 para Gobierno en Panamá — Licenciamiento y soporte",
  description:
    "Microsoft 365 para entidades públicas de Panamá. Licenciamiento oficial E1/E3/E5, facturación local, MFA, retención legal, auditoría, soporte en español.",
  path: "/soluciones/sector-publico/microsoft-365-gobierno/",
  keywords: [
    "Microsoft 365 gobierno Panamá",
    "licenciamiento Microsoft sector público",
    "M365 entidades públicas",
    "E1 E3 E5 gobierno",
    "PanamaCompra Microsoft",
  ],
});

const plans = [
  {
    name: "Microsoft 365 E1",
    target: "Productividad básica · atención ciudadana",
    includes: [
      "Apps web (Word, Excel, PowerPoint)",
      "Exchange Online + OneDrive + SharePoint",
      "Teams para reuniones",
      "MFA y auditoría básica",
    ],
    ideal: "Funcionarios con PCs compartidas o puestos de atención ciudadana.",
  },
  {
    name: "Microsoft 365 E3",
    target: "Productividad avanzada · trámites formales",
    includes: [
      "Apps de escritorio y móvil completas",
      "Archivado y retención de correo",
      "DLP, eDiscovery estándar",
      "Gestión de dispositivos (Intune)",
    ],
    ideal: "Dependencias con flujos documentales formales, archivo de correspondencia y cumplimiento.",
    highlight: true,
  },
  {
    name: "Microsoft 365 E5",
    target: "Máxima seguridad · áreas críticas",
    includes: [
      "Todo lo de E3",
      "Defender avanzado (amenazas zero-day)",
      "eDiscovery Premium y Customer Lockbox",
      "Telefonía Teams y Power BI Pro",
    ],
    ideal: "Áreas con información sensible, alto riesgo de ataques dirigidos o requisitos de auditoría estricta.",
  },
];

const methodology = [
  { step: "1. Descubrimiento", desc: "Dominios institucionales, usuarios, buzones, tamaños y dependencias técnicas." },
  { step: "2. Diseño", desc: "Identidad (Entra ID), DNS, políticas de seguridad, gobernanza documental y retención legal." },
  { step: "3. Pilotaje", desc: "Validación con grupo reducido. Correo, Teams, políticas y permisos." },
  { step: "4. Migración", desc: "Ejecución por lotes con ventanas coordinadas, comunicación a usuarios y trazabilidad por buzón." },
  { step: "5. Adopción y soporte", desc: "Capacitación a funcionarios, mesa de ayuda y optimización continua." },
];

const compliance = [
  "MFA obligatorio y acceso condicional por ubicación/dispositivo",
  "Privilegio mínimo en cuentas administrativas con separación de roles",
  "Etiquetado de sensibilidad (público, interno, confidencial)",
  "Políticas DLP para documentos y datos personales",
  "Retención legal y archivado automático de correo y sitios",
  "Auditoría unificada con alertas ante actividad sospechosa",
  "Protección anti-phishing con Defender for Office 365",
  "Gestión de dispositivos con cifrado, parches y políticas",
];

const faqs = [
  { q: "¿Cómo se adquieren las licencias de Microsoft 365 para entidades públicas en Panamá?", a: "Solutech Cloud está registrado en PanamaCompra y facturamos localmente. Aceptamos órdenes de compra, transferencia bancaria y ACH. Emitimos factura fiscal panameña a nombre de Solutech Panamá con la descripción detallada de licencias y servicios." },
  { q: "¿Cuál es la diferencia entre los planes E1, E3 y E5?", a: "E1 ofrece productividad básica con apps web y correo. E3 agrega apps de escritorio completas, seguridad estándar, retención y eDiscovery. E5 incluye seguridad avanzada con Defender for Office 365 premium, telefonía integrada y analítica de Power BI Pro. La elección depende del perfil de riesgo, funciones de cada usuario y requisitos de cumplimiento." },
  { q: "¿Incluyen migración y capacitación de usuarios?", a: "Sí. Nuestro proceso estándar incluye migración de correo y archivos desde el proveedor actual, con coexistencia durante la transición para no interrumpir operaciones. Capacitamos a funcionarios según su rol (usuarios finales, administrativos, equipo de TI) con material documentado que queda en la institución." },
  { q: "¿Pueden respaldar los datos de Microsoft 365?", a: "Sí. Implementamos backup dedicado con soluciones como Dropsuite, Acronis o Veeam que cubre Exchange Online, OneDrive, SharePoint y Teams. Esto complementa la retención nativa de Microsoft, especialmente importante para cumplimiento legal donde se requieren retenciones extendidas más allá de 90 días." },
  { q: "¿Cuánto tiempo tarda la activación de las licencias?", a: "Normalmente el mismo día hábil después de confirmación de la orden. La migración de correo y archivos se agenda por lotes según cantidad de usuarios y volumen de datos; típicamente 1-4 semanas para instituciones medianas." },
  { q: "¿Ofrecen soporte administrado después de la implementación?", a: "Sí. Tenemos planes de soporte mensual que incluyen gestión del tenant (altas, bajas, licencias), mesa de ayuda a usuarios, monitoreo, reportes mensuales y revisiones trimestrales de seguridad. Adaptamos el alcance al tamaño de la institución." },
  { q: "¿Qué pasa si la entidad requiere auditoría externa o cambio de proveedor?", a: "Toda la documentación del tenant queda en la institución: configuraciones, políticas, usuarios. El tenant es propiedad de la entidad contratante, no nuestra. Facilitamos el traspaso a otro proveedor si alguna vez fuera necesario, sin retener información." },
  { q: "¿Manejan licitaciones con requisitos técnicos específicos en pliegos?", a: "Sí. Analizamos pliegos, preparamos propuestas técnicas formales con alcances, cronogramas y entregables detallados, y respondemos a requerimientos específicos. También podemos apoyar en la redacción técnica de pliegos cuando la entidad lo solicite." },
];

const relatedServices = [
  { href: "/servicios/microsoft-365/", title: "Microsoft 365 (general)", description: "Información general de nuestros servicios de Microsoft 365." },
  { href: "/servicios/seguridad-y-backup/", title: "Seguridad y backup", description: "Protección integral y cumplimiento para datos institucionales." },
  { href: "/soluciones/sector-publico/", title: "Sector público (hub)", description: "Volver al hub de soluciones para entidades del Estado." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Soluciones", href: "/soluciones/" },
          { name: "Sector público", href: "/soluciones/sector-publico/" },
        ]}
        current="Microsoft 365 para gobierno"
      />

      <ServiceHero
        eyebrow="Solución · Microsoft 365 para gobierno"
        title={<>Microsoft 365 para <span className="text-brand">entidades públicas</span> de Panamá</>}
        description="Licenciamiento oficial, facturación local, seguridad avanzada, migración guiada y soporte en español. Experiencia con el sector público panameño y procesos de licitación."
        highlights={[
          "Licenciamiento E1, E3 y E5 oficial",
          "Facturación local en Panamá",
          "Registrados en PanamaCompra",
          "MFA y acceso condicional",
          "Retención legal y auditoría",
          "Soporte en español",
        ]}
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/docs/Propuesta-SolutechCloud-M365-Gobierno.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium border border-gray-200 hover:border-brand hover:text-brand transition-colors"
        >
          <FontAwesomeIcon icon={faFilePdf} className="text-red-600" />
          Descargar propuesta PDF
        </a>
      </div>

      <section className="mt-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-600 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-semibold text-gray-900">Experiencia con:</span>
          <span>Microsoft 365</span>
          <span>·</span>
          <span>Azure</span>
          <span>·</span>
          <span>AWS</span>
          <span>·</span>
          <span>Sophos</span>
          <span>·</span>
          <span>Acronis</span>
          <span>·</span>
          <span>Veeam</span>
          <span>·</span>
          <span>Dropsuite</span>
        </div>
      </section>

      {/* Planes */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Planes recomendados para gobierno
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Elegimos el plan según el perfil de cada funcionario: desde atención ciudadana hasta áreas críticas con datos sensibles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div key={p.name} className={`card ${p.highlight ? "ring-2 ring-brand" : ""}`}>
              {p.highlight && (
                <div className="text-xs font-semibold text-brand mb-2 uppercase tracking-wider">
                  Más común en instituciones
                </div>
              )}
              <h3 className="font-bold text-gray-900">{p.name}</h3>
              <p className="mt-1 text-sm text-brand font-medium">{p.target}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Incluye
                </div>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {p.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 italic">
                {p.ideal}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-gray-500">
          *La disponibilidad y mezcla de planes se valida en la propuesta formal según el caso.
        </p>
      </section>

      {/* Cumplimiento y gobernanza */}
      <section className="mt-16 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-12">
        <div className="flex items-center gap-2 text-brand font-semibold mb-4">
          <Shield className="size-5" />
          Cumplimiento y gobernanza
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Configuraciones que aplicamos en entornos gubernamentales
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
          La seguridad real depende de cómo se configure el tenant. Estas son las buenas prácticas que implementamos desde el día uno.
        </p>
        <ul className="mt-6 grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          {compliance.map((c) => (
            <li key={c} className="flex items-start gap-2">
              <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Metodología */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Metodología de implementación
          </h2>
        </div>
        <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {methodology.map((step) => (
            <li key={step.step} className="card">
              <div className="font-bold text-brand text-sm mb-2">{step.step}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Requisitos */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Requisitos y documentación
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="flex items-center gap-2 text-brand font-semibold mb-3">
              <FileText className="size-4" />
              Para iniciar
            </div>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>Dominio institucional y acceso DNS.</li>
              <li>Listado de usuarios con sus roles.</li>
              <li>Políticas de retención deseadas.</li>
              <li>Contacto técnico y de aprobación.</li>
            </ul>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 text-brand font-semibold mb-3">
              <Users className="size-4" />
              Para migraciones
            </div>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>Origen de datos (on-premise, hosted, otra nube).</li>
              <li>Credenciales de conectores de migración.</li>
              <li>Volumen de datos histórico.</li>
              <li>Ventanas de cambio y plan de comunicación a usuarios.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Preguntas frecuentes
          </h2>
        </div>
        <FAQ items={faqs} />
      </section>

      <ServiceCTA
        title="¿Listo para llevar tu institución al siguiente nivel?"
        description="Preparamos propuestas técnicas formales alineadas con tus requisitos. Podemos responder a pliegos específicos o ayudar a estructurarlos cuando lo requieras."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Microsoft 365 para Gobierno",
          description:
            "Licenciamiento Microsoft 365 para entidades públicas de Panamá. Planes E1, E3, E5. Facturación local, MFA, retención legal y soporte en español.",
          url: "/soluciones/sector-publico/microsoft-365-gobierno/",
          serviceType: "Licenciamiento Microsoft 365 para sector público",
          offerCatalog: [
            { name: "Microsoft 365 E1", description: "Productividad básica" },
            { name: "Microsoft 365 E3", description: "Productividad avanzada con cumplimiento" },
            { name: "Microsoft 365 E5", description: "Máxima seguridad" },
          ],
        })}
      />
    </>
  );
}
