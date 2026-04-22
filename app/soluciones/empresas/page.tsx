import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { Building2, Users, ShieldCheck, BarChart3, Globe, Check, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Soluciones tecnológicas para empresas medianas y grandes en Panamá",
  description:
    "Microsoft 365 Enterprise, Azure, AWS, seguridad avanzada y soporte administrado para corporaciones en Panamá y Centroamérica. Arquitectura, cumplimiento y escala.",
  path: "/soluciones/empresas/",
  keywords: [
    "soluciones empresariales Panamá",
    "Microsoft 365 Enterprise Panamá",
    "Azure corporativo Centroamérica",
    "partner Microsoft empresa grande",
  ],
});

const capabilities = [
  { icon: Users, title: "Microsoft 365 Enterprise", desc: "Planes E3 y E5 sin límite de usuarios, seguridad avanzada, cumplimiento, eDiscovery premium, telefonía integrada con Teams Phone." },
  { icon: Globe, title: "Identidad y SSO", desc: "Entra ID Premium, acceso condicional sofisticado, federación con apps SaaS y corporativas, gestión del ciclo de vida de cuentas." },
  { icon: ShieldCheck, title: "Seguridad avanzada", desc: "Defender for Cloud, Sentinel (SIEM), Microsoft Purview, DLP empresarial, clasificación automática de documentos sensibles." },
  { icon: BarChart3, title: "Analítica y datos", desc: "Power BI Premium, Microsoft Fabric, Azure Synapse para casos de datos a gran escala, dashboards ejecutivos y KPIs integrados." },
  { icon: Building2, title: "Cloud híbrido", desc: "Integración entre data center propio y Azure/AWS. Azure Arc, Azure Stack, ExpressRoute para conectividad dedicada." },
];

const commonProjects = [
  { title: "Migración desde Google Workspace a Microsoft 365 E3/E5", desc: "Empresas de 200+ usuarios que maduran su stack tecnológico hacia el ecosistema Microsoft por necesidades de cumplimiento y seguridad." },
  { title: "Implementación de Zero Trust end-to-end", desc: "MFA obligatorio, acceso condicional por riesgo, microsegmentación de red, privilegio mínimo en todas las cuentas administrativas." },
  { title: "Centralización de identidad con Entra ID", desc: "Federar todas las apps SaaS corporativas bajo un único IdP. Eliminar contraseñas dispersas, habilitar onboarding y offboarding automatizados." },
  { title: "Modernización de infraestructura on-premise a Azure", desc: "Migración lift-and-shift de servidores críticos, seguida de modernización selectiva (contenedores, PaaS) para optimizar costos y escalabilidad." },
  { title: "Implementación de SIEM con Microsoft Sentinel", desc: "Centralizar logs de Azure, Microsoft 365, firewalls, endpoints. Detección de amenazas con ML, playbooks de respuesta automatizada." },
];

const faqs = [
  { q: "¿Trabajan con empresas de qué tamaño?", a: "Trabajamos con empresas desde 100 hasta 2,000+ empleados. Para organizaciones de este tamaño, las necesidades típicamente incluyen Microsoft 365 Enterprise (E3/E5), identidad centralizada, seguridad avanzada y gobierno de datos. Para empresas más pequeñas, mira nuestra página de PyMEs." },
  { q: "¿Cuál es la diferencia clave entre planes Business y Enterprise de Microsoft 365?", a: "Business está limitado a 300 usuarios. Enterprise no tiene límite, incluye funcionalidades avanzadas de cumplimiento (eDiscovery Premium, Customer Lockbox, Advanced Audit), seguridad con Defender for Office 365 Plan 2, análisis con Microsoft Viva Insights y MyAnalytics, y capacidad de telefonía integrada con Teams Phone en E5. Para empresas con requisitos regulatorios o sector público, Enterprise suele ser obligatorio." },
  { q: "¿Pueden manejar implementaciones con múltiples geografías?", a: "Sí. Trabajamos con empresas que operan en varios países de Centroamérica y Sudamérica. Microsoft 365 y Azure permiten multi-región con políticas específicas por país (residencia de datos, cumplimiento local). Diseñamos la arquitectura considerando leyes locales de protección de datos, ancho de banda disponible por región y horarios de soporte." },
  { q: "¿Ofrecen SLA formales?", a: "Sí. Para planes de soporte administrado empresarial ofrecemos SLAs contractuales con tiempos de respuesta por severidad (crítico, alto, medio, bajo), horarios de cobertura (business hours o 24/7), y penalidades si no cumplimos. Los definimos según criticidad de tus operaciones y presupuesto de soporte." },
  { q: "¿Cómo manejan la seguridad para proteger información corporativa sensible?", a: "Aplicamos Zero Trust: MFA obligatorio, acceso condicional por dispositivo, ubicación y riesgo de sesión; privilegio mínimo con PIM (Privileged Identity Management); clasificación automática de documentos con Microsoft Purview; DLP para prevenir fuga de datos; monitoreo continuo con Defender y Sentinel; auditoría unificada con alertas ante actividad anómala." },
  { q: "¿Pueden ayudar con auditorías regulatorias (SOX, ISO, GDPR)?", a: "Sí. Configuramos los controles técnicos necesarios para soportar estos frameworks: retención y archivado, auditoría unificada, segregación de deberes, cifrado en reposo y tránsito, políticas de identidad robustas. Generamos evidencias desde Microsoft Purview Compliance Manager, Azure Policy y AWS Audit Manager para entregar a auditores." },
  { q: "¿Tienen experiencia con migraciones grandes?", a: "Sí. Trabajamos con metodología por olas (waves) para migrar cientos o miles de usuarios sin impactar operaciones. Cada ola incluye pilotaje, validación, migración bulk, validación post-migración y soporte intensivo. Para empresas grandes, una migración completa puede tomar 3-6 meses con múltiples ventanas coordinadas." },
  { q: "¿Cómo estructuran el pricing para empresas?", a: "Los costos se componen de (1) licenciamiento por usuario según plan; (2) servicios profesionales por implementación o proyecto; (3) soporte administrado mensual según SLA. Para organizaciones grandes negociamos precios por volumen, compromisos anuales y acuerdos Enterprise Agreement directamente con Microsoft cuando aplica." },
];

const relatedServices = [
  { href: "/servicios/microsoft-365/", title: "Microsoft 365", description: "Planes Enterprise E3 y E5 para organizaciones sin límite de usuarios." },
  { href: "/servicios/azure/", title: "Microsoft Azure", description: "Infraestructura cloud escalable para cargas empresariales." },
  { href: "/servicios/seguridad-y-backup/", title: "Seguridad avanzada", description: "Zero Trust, Sentinel, Defender para entornos corporativos." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Soluciones", href: "/soluciones/" }]} current="Empresas" />

      <ServiceHero
        eyebrow="Solución · Empresas"
        title={<>Tecnología para <span className="text-brand">organizaciones en escala</span></>}
        description="Microsoft 365 Enterprise, Azure, AWS, Zero Trust, SIEM y soporte administrado para corporaciones medianas y grandes que necesitan cumplimiento, seguridad y continuidad operativa."
        highlights={[
          "Microsoft 365 E3 / E5 sin límite de usuarios",
          "Arquitectura Zero Trust end-to-end",
          "SLA formales con penalidades",
          "Multi-región y multi-país",
          "Cumplimiento regulatorio (ISO, SOX, GDPR)",
          "Soporte 24/7 disponible",
        ]}
      />

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            Las <strong>organizaciones empresariales</strong> tienen necesidades tecnológicas que van más allá de productividad básica: cumplimiento regulatorio, segregación de deberes, auditoría forense, gestión de identidad sofisticada, arquitecturas multi-región y operación continua con SLAs formales.
          </p>
          <p>
            Acompañamos a empresas medianas y grandes en Panamá y Centroamérica con enfoque pragmático: diseñamos arquitecturas sólidas, ejecutamos con plazos claros, documentamos todo, y quedamos operando el entorno con SLAs reales.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Capacidades clave para empresas
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="card">
                <div className="size-10 grid place-items-center rounded-xl bg-brand/10 text-brand mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Proyectos empresariales típicos
          </h2>
        </div>
        <div className="grid gap-4">
          {commonProjects.map((p) => (
            <div key={p.title} className="card">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.desc}</p>
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
        title="¿Liderando TI en una empresa que necesita escalar?"
        description="Cuéntanos tu contexto: tamaño, plataformas actuales, objetivos del año. Preparamos una reunión ejecutiva con propuesta estratégica y hoja de ruta por fases."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Soluciones tecnológicas para empresas",
          description: "Microsoft 365 Enterprise, Azure, AWS, Zero Trust, SIEM y soporte administrado para corporaciones en Panamá y Centroamérica.",
          url: "/soluciones/empresas/",
          serviceType: "Soluciones tecnológicas corporativas",
        })}
      />
    </>
  );
}
