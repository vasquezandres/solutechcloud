import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import {
  Mail,
  Cloud,
  ShieldCheck,
  Users,
  FileText,
  RefreshCw,
  Lock,
  BarChart3,
  Check,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Microsoft 365 para empresas en Panamá — Licenciamiento, migración y soporte",
  description:
    "Partner Microsoft 365 en Panamá y Centroamérica. Licenciamiento Business y Enterprise, migración desde Google Workspace, MFA, backup y soporte en español. Solicita tu cotización.",
  path: "/servicios/microsoft-365/",
  keywords: [
    "Microsoft 365 Panamá",
    "licenciamiento Microsoft 365",
    "Office 365 empresa Panamá",
    "partner Microsoft Centroamérica",
    "migración Microsoft 365",
    "Microsoft 365 Business Enterprise",
  ],
});

const highlights = [
  "Licencias Business y Enterprise",
  "Migración desde Google Workspace o Exchange",
  "MFA y acceso condicional configurados",
  "Backup de correo, OneDrive y SharePoint",
  "Facturación local en Panamá",
  "Soporte en español por WhatsApp y email",
];

const benefits = [
  {
    icon: Mail,
    title: "Correo profesional con tu dominio",
    desc: "Exchange Online con buzones de 50 GB o más, calendarios compartidos, reglas, firmas corporativas y filtros anti-spam con Defender.",
  },
  {
    icon: Cloud,
    title: "Archivos y colaboración",
    desc: "OneDrive con 1 TB por usuario, SharePoint para sitios de equipo, coautoría en tiempo real en Word, Excel y PowerPoint.",
  },
  {
    icon: Users,
    title: "Teams para reuniones y mensajería",
    desc: "Videollamadas, chat corporativo, canales por proyecto, integración con calendario y grabación con transcripción automática.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad integrada",
    desc: "MFA obligatorio, políticas de acceso condicional, protección anti-phishing, DLP para datos sensibles y auditoría unificada.",
  },
  {
    icon: FileText,
    title: "Cumplimiento y retención",
    desc: "Políticas de retención automática, archivado legal, eDiscovery para búsquedas forenses y etiquetado de sensibilidad.",
  },
  {
    icon: BarChart3,
    title: "Apps y productividad",
    desc: "Versiones de escritorio de Office, Power Automate para automatizar tareas, Power BI para análisis y Bookings para agendas.",
  },
];

const planComparison = [
  {
    name: "Microsoft 365 Business Basic",
    target: "PyMEs de hasta 300 usuarios con uso web",
    includes: [
      "Correo Exchange (50 GB)",
      "OneDrive + SharePoint + Teams",
      "Apps en navegador y móvil",
    ],
    excludes: ["Apps de escritorio (Word, Excel, PowerPoint)"],
  },
  {
    name: "Microsoft 365 Business Standard",
    target: "PyMEs que necesitan apps completas",
    includes: [
      "Todo lo de Business Basic",
      "Apps de escritorio completas",
      "Publisher y Access (solo PC)",
    ],
    excludes: ["Seguridad avanzada y gestión de dispositivos"],
  },
  {
    name: "Microsoft 365 Business Premium",
    target: "PyMEs con foco en seguridad",
    includes: [
      "Todo lo de Business Standard",
      "Intune para gestionar dispositivos",
      "Defender para Office 365",
      "Azure Information Protection",
    ],
    excludes: ["Funciones avanzadas de análisis y telefonía"],
    highlight: true,
  },
  {
    name: "Microsoft 365 Enterprise E3",
    target: "Organizaciones medianas y grandes",
    includes: [
      "Apps completas + seguridad estándar",
      "Sin límite de 300 usuarios",
      "DLP, retención y eDiscovery estándar",
      "Analytics básico",
    ],
    excludes: ["Seguridad avanzada y telefonía"],
  },
  {
    name: "Microsoft 365 Enterprise E5",
    target: "Organizaciones con alto riesgo o sector regulado",
    includes: [
      "Todo lo de E3",
      "Defender avanzado (amenazas zero-day)",
      "eDiscovery Premium y Customer Lockbox",
      "Telefonía (Teams Phone) y Power BI Pro",
    ],
    excludes: [],
  },
];

const methodology = [
  {
    step: "1. Descubrimiento",
    desc: "Relevamos usuarios, buzones, volumen de datos, dominios, aplicaciones en uso y dependencias críticas.",
  },
  {
    step: "2. Diseño",
    desc: "Definimos identidad (Entra ID), estructura de DNS, políticas de seguridad, gobernanza documental y plan de migración.",
  },
  {
    step: "3. Pilotaje",
    desc: "Migramos un grupo reducido de usuarios piloto, validamos correo, Teams, archivos y ajustamos políticas.",
  },
  {
    step: "4. Migración",
    desc: "Ejecutamos la migración por lotes en ventanas coordinadas, con comunicación a usuarios y trazabilidad por buzón.",
  },
  {
    step: "5. Adopción y soporte",
    desc: "Capacitamos a usuarios y equipo de TI, habilitamos mesa de ayuda y optimizamos continuamente.",
  },
];

const faqs = [
  {
    q: "¿Son partner oficial de Microsoft?",
    a: "Sí, Solutech Cloud está registrado como Microsoft Partner y gestionamos licenciamiento bajo el programa CSP (Cloud Solution Provider). Esto nos permite facturar localmente en Panamá, gestionar tu tenant y ofrecer soporte de primera línea sin intermediarios.",
  },
  {
    q: "¿Qué diferencia hay entre Microsoft 365 Business y Enterprise?",
    a: "Business está pensado para organizaciones de hasta 300 usuarios e incluye Exchange, OneDrive, Teams y apps de escritorio. Enterprise (E3, E5) no tiene límite de usuarios e incluye funciones avanzadas de seguridad, cumplimiento, análisis y en el caso de E5, telefonía empresarial. Para PyMEs con menos de 300 empleados, Business Premium suele ser la mejor relación costo-beneficio.",
  },
  {
    q: "¿Cuánto cuesta Microsoft 365 para mi empresa?",
    a: "El costo varía según la cantidad de usuarios, el plan elegido y si requieres servicios de implementación y migración. Las licencias son de suscripción mensual o anual. Contáctanos para una cotización personalizada según tu caso: normalmente respondemos en menos de 24 horas hábiles.",
  },
  {
    q: "¿Ofrecen solo las licencias o incluyen implementación?",
    a: "Ambas modalidades. Puedes adquirir solo las licencias a través de nosotros y administrar tú tu tenant, o contratar paquetes completos que incluyen configuración, migración de datos, políticas de seguridad, capacitación y soporte mensual administrado.",
  },
  {
    q: "¿Pueden migrar mi correo desde Google Workspace?",
    a: "Sí. Migramos buzones completos desde Google Workspace, Gmail personal, Exchange on-premise, Zimbra, cPanel o cualquier servidor IMAP. El proceso incluye migración de correo, contactos, calendarios, archivos de Drive a OneDrive/SharePoint, y coexistencia durante la transición para que ningún usuario pierda acceso.",
  },
  {
    q: "¿Cuánto tiempo toma una migración típica?",
    a: "Una migración de 20 a 50 usuarios suele completarse en 5 a 10 días hábiles. Para organizaciones de 100 a 500 usuarios, trabajamos por lotes en 3 a 6 semanas. El factor principal es el volumen de datos histórico que hay que trasladar y la complejidad de permisos en archivos compartidos.",
  },
  {
    q: "¿Microsoft 365 incluye respaldo (backup) de mis datos?",
    a: "Microsoft 365 incluye redundancia de infraestructura, pero no es un backup tradicional. Las políticas nativas retienen elementos eliminados entre 14 y 93 días según el tipo. Para protección real contra eliminación accidental, ransomware o retención legal extendida, recomendamos una solución de backup dedicada (Acronis, Veeam o Dropsuite) que cubra Exchange, OneDrive, SharePoint y Teams.",
  },
  {
    q: "¿Es seguro tener mis datos en Microsoft 365?",
    a: "Microsoft 365 cuenta con certificaciones ISO 27001, ISO 27018, SOC 1 y 2, y cumple con estándares de protección de datos internacionales. La seguridad real depende de cómo se configure: nosotros aplicamos MFA obligatorio, acceso condicional por ubicación y dispositivo, privilegios mínimos para administradores, etiquetado de sensibilidad y protección anti-phishing desde el día uno.",
  },
  {
    q: "¿Puedo cambiar de plan después?",
    a: "Sí, puedes subir o bajar de plan con cierta flexibilidad. Upgrades (ej: Business Standard a Business Premium) son inmediatos. Downgrades pueden tener restricciones según el ciclo de facturación. Si tu suscripción es anual, algunos cambios esperan al próximo ciclo. Te asesoramos sobre el mejor momento para cada cambio.",
  },
  {
    q: "¿Qué pasa si dejo de pagar las licencias?",
    a: "Microsoft entra en un periodo de gracia de 30 días en el que mantiene acceso completo. Luego hay un periodo de suspensión (acceso de solo lectura del admin) de otros 30 días, y finalmente 30 días más antes de eliminar los datos. En total son 90 días para regularizar o migrar. Siempre recomendamos hacer export o backup antes de cualquier cancelación.",
  },
  {
    q: "¿Facturan localmente en Panamá?",
    a: "Sí. Emitimos factura fiscal panameña a nombre de Solutech Panamá, aceptamos transferencia bancaria, ACH y órdenes de compra. Para licitaciones gubernamentales cumplimos con los requisitos de PanamaCompra y podemos trabajar con órdenes de compra formales.",
  },
  {
    q: "¿Dan soporte después de la implementación?",
    a: "Sí. Ofrecemos planes de soporte mensual con bolsa de horas o tarifa plana según el tamaño de tu organización. Incluye altas y bajas de usuarios, gestión de licencias, resolución de incidentes, reportes mensuales y revisiones trimestrales de seguridad y optimización.",
  },
];

const relatedServices = [
  {
    href: "/servicios/correo-corporativo/",
    title: "Correo corporativo",
    description:
      "Si solo necesitas correo profesional con tu dominio, tenemos opciones livianas.",
  },
  {
    href: "/servicios/seguridad-y-backup/",
    title: "Seguridad y backup",
    description:
      "Protege tus datos más allá de la retención nativa con copia 3-2-1.",
  },
  {
    href: "/soluciones/sector-publico/microsoft-365-gobierno/",
    title: "M365 para gobierno",
    description:
      "Implementación especializada para entidades del sector público.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Servicios", href: "/servicios/" }]}
        current="Microsoft 365"
      />

      <ServiceHero
        eyebrow="Servicio · Microsoft 365"
        title={
          <>
            Microsoft 365 para empresas en{" "}
            <span className="text-brand">Panamá y Centroamérica</span>
          </>
        }
        description="Licenciamiento oficial, migración sin pérdida de datos, seguridad configurada desde el día uno y soporte en español. Trabajamos con PyMEs, corporaciones y entidades del sector público."
        highlights={highlights}
      />

      {/* Intro — respuesta directa optimizada para IA */}
      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            <strong>Microsoft 365</strong> es la suite de productividad en la
            nube de Microsoft que combina correo corporativo (Exchange Online),
            almacenamiento y colaboración (OneDrive y SharePoint),
            comunicaciones (Teams) y aplicaciones de Office (Word, Excel,
            PowerPoint, Outlook). Se ofrece por suscripción mensual o anual por
            usuario, con planes Business para organizaciones de hasta 300
            personas y planes Enterprise sin límite de usuarios.
          </p>
          <p>
            En Solutech Cloud te acompañamos en todo el ciclo: desde elegir el
            plan correcto según tu caso, adquirir las licencias con facturación
            local, migrar tu correo y archivos actuales sin interrupciones,
            aplicar políticas de seguridad modernas (MFA, acceso condicional,
            DLP) y dar soporte continuo a tus usuarios.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            ¿Qué incluye Microsoft 365?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Todo lo que tu equipo necesita para trabajar, colaborar y proteger
            información en un solo ecosistema.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="card">
                <div className="size-10 grid place-items-center rounded-xl bg-brand/10 text-brand mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparativa de planes */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            ¿Qué plan de Microsoft 365 me conviene?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Comparamos los planes más comunes para ayudarte a decidir. Los
            precios son personalizados según usuarios y compromiso —{" "}
            <Link href="/contacto/" className="text-brand underline">
              solicita tu cotización
            </Link>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {planComparison.map((plan) => (
            <div
              key={plan.name}
              className={`card ${plan.highlight ? "ring-2 ring-brand" : ""}`}
            >
              {plan.highlight && (
                <div className="text-xs font-semibold text-brand mb-2 uppercase tracking-wider">
                  Más elegido en PyMEs
                </div>
              )}
              <h3 className="font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{plan.target}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Incluye
                </div>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {plan.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              {plan.excludes.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    No incluye
                  </div>
                  <ul className="space-y-1 text-sm text-gray-500">
                    {plan.excludes.map((e) => (
                      <li key={e}>— {e}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Metodología */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Metodología de implementación
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Un proceso probado en migraciones de PyMEs y entidades públicas
            para evitar pérdidas, interrupciones y sorpresas.
          </p>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {methodology.map((step) => (
            <li key={step.step} className="card relative">
              <div className="font-bold text-brand text-sm mb-2">
                {step.step}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Seguridad desde el día uno */}
      <section className="mt-16 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="size-12 grid place-items-center rounded-2xl bg-brand/10 text-brand mb-4">
              <Lock className="size-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Seguridad configurada correctamente
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              La mayoría de las brechas en Microsoft 365 vienen de
              configuraciones por defecto. Nosotros aplicamos buenas prácticas
              desde el primer día.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
              <span>
                <strong>MFA obligatorio</strong> para todos los usuarios con
                acceso condicional por ubicación y dispositivo.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
              <span>
                <strong>Privilegios mínimos</strong> en cuentas administrativas
                con separación de roles.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
              <span>
                <strong>Protección anti-phishing</strong> con Defender for
                Office 365 y reglas de transporte.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
              <span>
                <strong>Políticas DLP</strong> para prevenir fuga de datos
                sensibles (documentos, tarjetas, identificaciones).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
              <span>
                <strong>Retención y archivado</strong> automáticos para
                cumplimiento legal y auditoría.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
              <span>
                <strong>Auditoría unificada</strong> con alertas de actividad
                sospechosa.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Casos comunes */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Casos más comunes que resolvemos
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <div className="flex items-center gap-2 text-sm text-brand font-semibold mb-2">
              <RefreshCw className="size-4" />
              Migración
            </div>
            <h3 className="font-semibold text-gray-900">
              Migrar desde Google Workspace
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Traslado de Gmail, Drive, Calendar y Contacts a M365 con
              coexistencia durante la transición y sin pérdida de correos.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 text-sm text-brand font-semibold mb-2">
              <Mail className="size-4" />
              Modernización
            </div>
            <h3 className="font-semibold text-gray-900">
              Migrar de correo compartido (cPanel, hosting)
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Salir de servidores IMAP/POP3 sin backup ni seguridad, hacia
              Exchange Online con MFA y Defender.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 text-sm text-brand font-semibold mb-2">
              <Users className="size-4" />
              Crecimiento
            </div>
            <h3 className="font-semibold text-gray-900">
              Escalar de 10 a 100+ usuarios
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Estructurar SharePoint por departamentos, políticas de
              gobernanza, grupos dinámicos y onboarding automatizado.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 text-sm text-brand font-semibold mb-2">
              <ShieldCheck className="size-4" />
              Seguridad
            </div>
            <h3 className="font-semibold text-gray-900">
              Endurecer tenant tras un incidente
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Auditoría de configuración, aplicación de Zero Trust, MFA
              obligatorio, revisión de permisos y políticas de sesión.
            </p>
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
        title="¿Listo para modernizar tu productividad?"
        description="Cuéntanos cuántos usuarios tienes, tu situación actual y plazos. Te enviamos una propuesta técnica y económica clara en menos de 24 horas hábiles."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Microsoft 365 para empresas",
          description:
            "Licenciamiento, migración, seguridad y soporte de Microsoft 365 para empresas y sector público en Panamá y Centroamérica.",
          url: "/servicios/microsoft-365/",
          serviceType: "Licenciamiento e implementación Microsoft 365",
          offerCatalog: [
            { name: "Microsoft 365 Business Basic", description: "Correo y colaboración web para PyMEs" },
            { name: "Microsoft 365 Business Standard", description: "Apps completas para PyMEs" },
            { name: "Microsoft 365 Business Premium", description: "Apps y seguridad avanzada para PyMEs" },
            { name: "Microsoft 365 Enterprise E3", description: "Plan empresarial con cumplimiento" },
            { name: "Microsoft 365 Enterprise E5", description: "Seguridad avanzada y telefonía" },
          ],
        })}
      />
    </>
  );
}
