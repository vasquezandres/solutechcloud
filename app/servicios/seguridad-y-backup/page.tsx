import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { ShieldCheck, HardDrive, AlertTriangle, FileSearch, RefreshCw, Lock, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Seguridad y backup empresarial en Panamá — Protección integral de datos",
  description:
    "EDR, antivirus gestionado, backup 3-2-1 de Microsoft 365, servidores y endpoints. Sophos, Acronis, Veeam y Dropsuite. Recuperación ante ransomware e incidentes.",
  path: "/servicios/seguridad-y-backup/",
  keywords: [
    "backup empresarial Panamá",
    "backup Microsoft 365",
    "seguridad endpoints Panamá",
    "protección ransomware empresa",
    "EDR antivirus empresarial",
  ],
});

const pillars = [
  { icon: ShieldCheck, title: "Protección de endpoints (EDR)", desc: "Antivirus de última generación con detección por comportamiento. Sophos Intercept X y Microsoft Defender for Business gestionados por nosotros." },
  { icon: HardDrive, title: "Backup 3-2-1", desc: "3 copias de tus datos, en 2 medios distintos, con 1 copia fuera de sitio. La única fórmula probada contra ransomware y fallas masivas." },
  { icon: AlertTriangle, title: "Detección y respuesta", desc: "Monitoreo 24/7 de alertas críticas, respuesta inicial ante incidentes, contención y guía de recuperación." },
  { icon: FileSearch, title: "Auditoría y cumplimiento", desc: "Políticas DLP, retención legal, eDiscovery y logs unificados para auditorías y requerimientos regulatorios." },
  { icon: RefreshCw, title: "Pruebas de recuperación", desc: "No sirve un backup que no probaste. Hacemos restauraciones de prueba trimestrales y documentamos resultados." },
  { icon: Lock, title: "Hardening de configuración", desc: "Revisión y endurecimiento de Microsoft 365, Windows, redes y aplicaciones según mejores prácticas CIS." },
];

const tools = [
  { name: "Sophos Intercept X", purpose: "Antivirus de última generación con EDR y protección anti-ransomware activa." },
  { name: "Microsoft Defender for Business", purpose: "Protección integrada para entornos Microsoft 365, con análisis de amenazas avanzadas." },
  { name: "Acronis Cyber Protect", purpose: "Backup unificado de servidores, equipos y Microsoft 365 con protección anti-ransomware integrada." },
  { name: "Veeam", purpose: "Backup empresarial de servidores virtuales, VMs, Microsoft 365 y recuperación ante desastres." },
  { name: "Dropsuite", purpose: "Backup especializado para Microsoft 365 (Exchange, OneDrive, SharePoint, Teams) con retención ilimitada." },
];

const faqs = [
  { q: "¿Por qué necesito backup si ya tengo Microsoft 365?", a: "Microsoft 365 incluye redundancia de infraestructura (no pierdes datos por fallas físicas), pero no es un backup tradicional. Las políticas nativas retienen elementos eliminados entre 14 y 93 días. Si un usuario (o un atacante) elimina archivos y pasa el plazo, no hay vuelta atrás. Un backup dedicado cubre esos escenarios: eliminaciones accidentales, ransomware, retención legal más allá de 90 días, y cumplimiento normativo." },
  { q: "¿Qué es la regla 3-2-1 de backup?", a: "Es el estándar de la industria para respaldo confiable: tener al menos 3 copias de tus datos (el original más 2 respaldos), almacenadas en 2 tipos de medios distintos (ej: disco local + nube), con 1 copia ubicada fuera de sitio (geográficamente separada). Protege contra fallas de hardware, errores humanos, desastres locales y ransomware." },
  { q: "¿Qué diferencia hay entre antivirus tradicional y EDR?", a: "Un antivirus tradicional compara archivos contra una base de firmas conocidas: solo detecta amenazas ya catalogadas. EDR (Endpoint Detection and Response) monitorea el comportamiento de los procesos en tiempo real: detecta ataques nuevos, ransomware en ejecución, movimientos laterales y técnicas sin archivo. Es obligatorio en entornos corporativos modernos." },
  { q: "¿Cómo protegen contra ransomware específicamente?", a: "Con tres capas: (1) prevención — EDR que detecta cifrado sospechoso y lo bloquea; (2) detección — alertas en tiempo real si algo se cuela; (3) recuperación — backups inmutables, con retención y pruebas de restauración. Sin backups inmutables, pagar el rescate suele ser la única opción." },
  { q: "¿Qué es un backup inmutable?", a: "Es una copia de seguridad que no puede ser modificada ni eliminada durante un periodo definido, ni por administradores ni por atacantes. Si un ransomware penetra tu red y cifra todo, los backups inmutables sobreviven intactos. Es el único tipo de respaldo efectivo contra ransomware moderno." },
  { q: "¿Respaldan solo Microsoft 365 o también servidores y PCs?", a: "Ambos. Tenemos soluciones específicas por tipo: Dropsuite o Acronis para Microsoft 365 (Exchange, OneDrive, SharePoint, Teams); Veeam o Acronis para servidores físicos y virtuales; Acronis o Sophos para equipos de usuario (laptops de ejecutivos con datos críticos). Armamos la combinación según tu infraestructura." },
  { q: "¿Cuánto tiempo se conservan los backups?", a: "Depende de tu política y cumplimiento. Configuraciones típicas: retención de 30 días para versiones diarias, 1 año para retenciones mensuales, 7 años para archivado legal. Para sector público y financiero suelen requerirse retenciones extendidas. Definimos la política con tu equipo legal según normativa aplicable." },
  { q: "¿Qué pasa cuando hay un incidente de seguridad real?", a: "Nuestro procedimiento es: contención inmediata (aislar el equipo afectado), evaluación de alcance (qué se comprometió), notificación al cliente (qué pasó y qué hacer), recuperación desde backups limpios, endurecimiento post-incidente y reporte forense. Para planes administrados, incluimos respuesta inicial; para casos graves trabajamos con especialistas forenses." },
  { q: "¿Hacen pruebas de recuperación o solo configuran los backups?", a: "Hacemos pruebas de recuperación periódicas (trimestrales para planes administrados). Un backup sin pruebas es una ilusión de seguridad. Restauramos muestras a entornos aislados, validamos integridad y documentamos resultados. Si falla algo, se corrige antes de que sea una emergencia real." },
  { q: "¿Cumplen con normativas específicas (ISO, PCI, HIPAA)?", a: "Implementamos los controles técnicos para soportar cumplimiento (cifrado, logs, retención, segregación de deberes). La certificación formal de la organización depende del cliente y su auditor. Podemos alinear nuestras configuraciones a ISO 27001, PCI DSS, HIPAA o estándares gubernamentales según el marco que apliques." },
];

const relatedServices = [
  { href: "/servicios/microsoft-365/", title: "Microsoft 365", description: "Seguridad nativa de M365 configurada correctamente desde el día uno." },
  { href: "/servicios/migraciones/", title: "Migraciones", description: "Transiciones seguras con backup previo y validación." },
  { href: "/soluciones/sector-publico/", title: "Sector público", description: "Seguridad específica para entidades gubernamentales." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Servicios", href: "/servicios/" }]} current="Seguridad y backup" />

      <ServiceHero
        eyebrow="Servicio · Seguridad y backup"
        title={<>Seguridad y backup empresarial <span className="text-brand">con estrategia 3-2-1</span></>}
        description="Protección integral de correo, archivos, servidores y equipos. EDR gestionado, backup inmutable contra ransomware, cumplimiento y recuperación probada."
        highlights={["EDR y antivirus gestionado", "Backup 3-2-1 inmutable", "Protección contra ransomware", "Pruebas de recuperación trimestrales", "Cumplimiento y auditoría", "Respuesta ante incidentes"]}
      />

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            La <strong>seguridad empresarial moderna</strong> combina protección activa (EDR, MFA, DLP) con capacidad de recuperación (backups inmutables, planes de continuidad). Ningún control previene el 100% de incidentes; lo que marca la diferencia es poder restaurar rápidamente cuando algo pasa.
          </p>
          <p>
            En Solutech implementamos protección por capas: endpoint, correo, archivos, identidad y datos. Usamos Sophos, Microsoft Defender, Acronis, Veeam y Dropsuite según el caso, y los gestionamos nosotros para que tu equipo interno no tenga que pelear con múltiples consolas.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pilares de nuestra oferta</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="card">
                <div className="size-10 grid place-items-center rounded-xl bg-brand/10 text-brand mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Herramientas que implementamos</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Somos agnósticos de marca: recomendamos lo que mejor se ajusta a tu entorno, tamaño y presupuesto. Nos enfocamos en líderes del mercado con soporte local o regional confiable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {tools.map((t) => (
            <div key={t.name} className="card">
              <h3 className="font-bold text-gray-900">{t.name}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-red-50 border border-red-100 p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-red-700 font-semibold mb-4">
            <AlertTriangle className="size-5" />
            <span>Lo que nadie te dice sobre ransomware</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            El 93% de los backups modernos son cifrados también en ataques de ransomware
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Los atacantes saben que si destruyen los backups, la víctima no tiene opción más que pagar. Por eso los backups en carpetas compartidas, NAS conectados o unidades USB son vulnerables: si están accesibles desde la red cuando ocurre el ataque, se cifran igual que el resto.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            La solución son <strong>backups inmutables</strong>: copias que no pueden modificarse durante un periodo definido, ni por administradores. Implementamos esto como capa obligatoria en todos los clientes que manejan datos críticos.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Preguntas frecuentes</h2>
        </div>
        <FAQ items={faqs} />
      </section>

      <ServiceCTA
        title="¿Tu backup resistiría un ataque hoy?"
        description="Si tus copias están en la misma red que tus servidores, probablemente no. Cuéntanos cómo está tu esquema actual y te hacemos una evaluación honesta."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Seguridad y backup empresarial",
          description: "Protección integral de endpoints, correo y datos. Backup 3-2-1 inmutable, EDR gestionado, respuesta a incidentes.",
          url: "/servicios/seguridad-y-backup/",
          serviceType: "Ciberseguridad y respaldo empresarial",
          offerCatalog: [
            { name: "Protección de endpoints (EDR)", description: "Sophos, Microsoft Defender" },
            { name: "Backup Microsoft 365", description: "Dropsuite, Acronis" },
            { name: "Backup de servidores y VMs", description: "Veeam, Acronis" },
            { name: "Respuesta a incidentes", description: "Contención y recuperación" },
          ],
        })}
      />
    </>
  );
}
