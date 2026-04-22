import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { Mail, FolderInput, Server, Database, Users, AlertCircle, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Migraciones tecnológicas en Panamá — Correo, archivos y servidores a la nube",
  description:
    "Migración de correo (Gmail, cPanel a M365), archivos (Drive, carpetas a OneDrive/SharePoint), servidores a Azure/AWS. Sin pérdidas, con ventanas coordinadas.",
  path: "/servicios/migraciones/",
  keywords: [
    "migración correo Panamá",
    "migrar Google Workspace a Microsoft 365",
    "migración servidores a la nube",
    "migrar de cPanel a Exchange",
    "migración a Office 365 empresa",
  ],
});

const migrationTypes = [
  {
    icon: Mail,
    title: "Migración de correo",
    desc: "Buzones, carpetas, calendarios y contactos desde tu proveedor actual a Microsoft 365 o Google Workspace.",
    sources: ["Google Workspace", "cPanel / hosting compartido", "Zimbra", "Zoho Mail", "Exchange on-premise", "IMAP genérico"],
  },
  {
    icon: FolderInput,
    title: "Migración de archivos",
    desc: "Archivos y carpetas compartidas con permisos preservados hacia OneDrive, SharePoint o Azure Files.",
    sources: ["Google Drive", "Dropbox", "Box", "File servers Windows", "NAS corporativos", "FTP / WebDAV"],
  },
  {
    icon: Server,
    title: "Migración de servidores",
    desc: "Servidores físicos o virtuales a Azure VMs o AWS EC2. Lift-and-shift o modernización según el caso.",
    sources: ["VMware on-premise", "Hyper-V", "Servidores físicos", "Otros providers cloud", "Servidores Linux", "Windows Server"],
  },
  {
    icon: Database,
    title: "Migración de bases de datos",
    desc: "SQL Server, MySQL, PostgreSQL, Oracle a servicios gestionados (Azure SQL, RDS) con validación de integridad.",
    sources: ["SQL Server on-premise", "MySQL/MariaDB", "PostgreSQL", "Oracle", "Access bases de usuarios"],
  },
  {
    icon: Users,
    title: "Migración de identidad",
    desc: "Directorio Activo local hacia Entra ID, con SSO y MFA. Modelo híbrido o full cloud según tu caso.",
    sources: ["Active Directory on-premise", "OpenLDAP", "Okta", "Otros IdPs empresariales"],
  },
];

const methodology = [
  {
    phase: "Fase 1 · Descubrimiento",
    items: [
      "Inventario completo de buzones, archivos, servidores",
      "Mapeo de permisos y dependencias",
      "Identificación de integraciones con otras apps",
      "Dimensionamiento de datos a migrar",
    ],
  },
  {
    phase: "Fase 2 · Diseño",
    items: [
      "Plan detallado por lotes o waves",
      "Ventanas de cambio mínimo impacto",
      "Arquitectura de destino validada",
      "Plan de comunicación a usuarios",
    ],
  },
  {
    phase: "Fase 3 · Pilotaje",
    items: [
      "Migración de grupo piloto (5-10 usuarios)",
      "Validación de correo, archivos, permisos",
      "Ajustes de configuración y políticas",
      "Documentación de issues encontrados",
    ],
  },
  {
    phase: "Fase 4 · Ejecución",
    items: [
      "Migración por lotes con trazabilidad",
      "Coexistencia durante la transición",
      "Validación post-migración por usuario",
      "Soporte en vivo durante corte",
    ],
  },
  {
    phase: "Fase 5 · Estabilización",
    items: [
      "Capacitación a usuarios y TI",
      "Optimización post-cambio",
      "Descomisionamiento del origen",
      "Lessons learned documentadas",
    ],
  },
];

const commonRisks = [
  {
    risk: "Pérdida de correos en tránsito",
    mitigation: "Coexistencia dual durante la migración. Ambos sistemas reciben y sincronizan correos hasta el corte definitivo.",
  },
  {
    risk: "Pérdida de permisos de archivos",
    mitigation: "Mapeo previo de estructura de permisos. Scripts de validación post-migración. SharePoint y OneDrive respetan permisos NTFS.",
  },
  {
    risk: "Downtime excesivo",
    mitigation: "Migración por lotes en ventanas no críticas (fines de semana, noches). Pilotos antes del bulk para detectar cuellos de botella.",
  },
  {
    risk: "Usuarios confundidos durante la transición",
    mitigation: "Comunicación previa, guías paso a paso, canal de soporte dedicado durante los primeros días post-corte.",
  },
  {
    risk: "Datos corruptos al migrar",
    mitigation: "Validación por hash de archivos grandes. Comparación de conteo de items. Muestreo aleatorio de correos y archivos.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tiempo toma una migración típica de correo?",
    a: "Depende del tamaño: 10-30 usuarios con datos históricos moderados, 3-7 días. 50-150 usuarios, 2-4 semanas. 200-500 usuarios, 4-8 semanas por lotes. El factor principal es el volumen de datos históricos a migrar, no tanto la cantidad de usuarios. Una migración fresh sin histórico puede completarse en horas.",
  },
  {
    q: "¿Perderé correos o archivos durante la migración?",
    a: "Con metodología correcta, no. Usamos herramientas especializadas (BitTitan MigrationWiz, Microsoft Migration Manager, SkySync) que mantienen coexistencia durante la transición. Ambos sistemas funcionan en paralelo hasta el corte definitivo. Validamos la integridad post-migración con conteos, checksums y muestreos.",
  },
  {
    q: "¿Los usuarios pueden seguir trabajando durante la migración?",
    a: "Sí. Trabajamos en ventanas que minimizan impacto: migraciones grandes en fines de semana o noches. Durante la semana laboral, solo se migran lotes pequeños con aviso previo. Mientras se migra un usuario, los demás siguen trabajando normalmente.",
  },
  {
    q: "¿Qué pasa con las firmas de correo, reglas y listas de distribución?",
    a: "Se migran también. Reglas del cliente (Outlook) se preservan. Firmas corporativas se configuran centralizadamente en el destino (mejor práctica que tenerlas por usuario). Listas de distribución se recrean en Exchange Online con los mismos miembros. Contactos externos se mantienen.",
  },
  {
    q: "¿Pueden migrar desde Google Workspace a Microsoft 365 sin perder el Drive compartido?",
    a: "Sí. Migramos Gmail a Exchange, Drive personal a OneDrive, Drive compartido (Team Drives) a SharePoint sitios de equipo, Contactos y Calendar completos. Los permisos se mapean a grupos de Microsoft 365. Las carpetas compartidas mantienen su estructura.",
  },
  {
    q: "¿Qué pasa con los correos antiguos? ¿Se migran todos?",
    a: "Se migra todo el histórico por defecto. Podemos configurar límites temporales (por ejemplo: migrar solo últimos 2 años) si hay restricciones de licenciamiento o presupuesto. Correos muy antiguos suelen ser candidatos a archivado en lugar de buzón principal.",
  },
  {
    q: "¿Migran aplicaciones personalizadas también?",
    a: "Sí, cuando son movibles. Aplicaciones web tradicionales (PHP, Java, .NET) se migran bastante directo a Azure App Service o AWS EC2. Aplicaciones con dependencias fuertes del sistema operativo o hardware requieren evaluación caso por caso. A veces es más eficiente reemplazar que migrar.",
  },
  {
    q: "¿Cuánto cuesta una migración?",
    a: "Depende de alcance, cantidad de usuarios, volumen de datos y complejidad. Una migración básica de correo para 20 usuarios puede empezar desde unos cientos de dólares. Migraciones empresariales con múltiples servicios y cientos de usuarios pueden ser miles. Te preparamos una propuesta con alcance y costo claro antes de empezar.",
  },
  {
    q: "¿Qué hago con mi servidor viejo después de migrar?",
    a: "Recomendamos mantenerlo apagado pero accesible durante 30-90 días post-migración como contingencia, en caso de que se detecte algún archivo o correo que no llegó correctamente. Después se puede descomisionar siguiendo protocolos de destrucción segura de datos.",
  },
  {
    q: "¿Dan soporte después de la migración?",
    a: "Sí. Los primeros 30 días incluyen soporte intensivo para resolver cualquier incidente derivado del cambio. Después, ofrecemos planes de soporte mensual administrado para operación continua: altas, bajas, cambios, optimización y reportes.",
  },
];

const relatedServices = [
  { href: "/servicios/microsoft-365/", title: "Microsoft 365", description: "Destino más común para migraciones de correo y archivos." },
  { href: "/servicios/azure/", title: "Microsoft Azure", description: "Para migraciones de servidores e infraestructura." },
  { href: "/servicios/seguridad-y-backup/", title: "Seguridad y backup", description: "Backup pre-migración y protección post-migración." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Servicios", href: "/servicios/" }]} current="Migraciones" />

      <ServiceHero
        eyebrow="Servicio · Migraciones"
        title={<>Migraciones tecnológicas <span className="text-brand">sin pérdidas ni caos</span></>}
        description="Correo, archivos, servidores, bases de datos e identidad. Metodología probada en cientos de buzones migrados, con coexistencia, ventanas coordinadas y soporte en vivo durante el cambio."
        highlights={[
          "Correo, archivos y servidores",
          "Coexistencia durante transición",
          "Ventanas de cambio coordinadas",
          "Validación de integridad post-migración",
          "Comunicación a usuarios incluida",
          "Soporte intensivo los primeros 30 días",
        ]}
      />

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            Las <strong>migraciones tecnológicas</strong> son uno de los momentos más riesgosos en la vida de una organización: un mal planteamiento puede significar correos perdidos, archivos corruptos, usuarios frustrados y semanas de recuperación. Un buen planteamiento es invisible: los usuarios se duermen en un sistema y se despiertan en otro mejor.
          </p>
          <p>
            En Solutech aplicamos una metodología probada que ha movido buzones de empresas pequeñas y decenas de terabytes de datos empresariales sin pérdidas. La clave: planificación detallada, pilotajes antes del bulk, coexistencia durante la transición y soporte en vivo durante los cortes críticos.
          </p>
        </div>
      </section>

      {/* Tipos de migración */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Tipos de migración que realizamos
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {migrationTypes.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className="card">
                <div className="size-10 grid place-items-center rounded-xl bg-brand/10 text-brand mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{m.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Origen soportado
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {m.sources.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metodología */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Nuestra metodología de migración
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            5 fases aplicadas en toda migración, escaladas según tamaño y complejidad del proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {methodology.map((phase) => (
            <div key={phase.phase} className="card">
              <h3 className="font-bold text-brand text-sm mb-3">{phase.phase}</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <Check className="size-3 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Riesgos y mitigaciones */}
      <section className="mt-16 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-12">
        <div className="flex items-center gap-2 text-brand font-semibold mb-4">
          <AlertCircle className="size-5" />
          Riesgos reales y cómo los mitigamos
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Las migraciones fallan por causas predecibles
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
          Transparencia total: estas son las cosas que pueden salir mal y cómo las prevenimos.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {commonRisks.map((r) => (
            <div key={r.risk} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="text-sm font-semibold text-red-600 mb-2">
                ⚠ {r.risk}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Mitigación:</strong> {r.mitigation}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Preguntas frecuentes
          </h2>
        </div>
        <FAQ items={faqs} />
      </section>

      <ServiceCTA
        title="¿Evaluando una migración?"
        description="Cuéntanos qué tienes hoy y qué quieres lograr. Preparamos un plan realista con alcance, tiempos y costos claros. Sin compromiso."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Migraciones tecnológicas",
          description: "Migración de correo, archivos, servidores, bases de datos e identidad. Metodología probada con coexistencia y validación.",
          url: "/servicios/migraciones/",
          serviceType: "Migraciones tecnológicas y a la nube",
          offerCatalog: [
            { name: "Migración de correo", description: "Desde Gmail, cPanel, Zimbra a M365" },
            { name: "Migración de archivos", description: "Drive, NAS, file servers a OneDrive/SharePoint" },
            { name: "Migración de servidores", description: "On-premise a Azure/AWS" },
            { name: "Migración de bases de datos", description: "SQL Server, MySQL, PostgreSQL" },
            { name: "Migración de identidad", description: "AD on-premise a Entra ID" },
          ],
        })}
      />
    </>
  );
}
