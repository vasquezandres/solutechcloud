import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { Cloud, Server, Network, ShieldCheck, Gauge, Database, Users, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Servicios Microsoft Azure en Panamá — Infraestructura cloud profesional",
  description:
    "Implementación y gestión de Microsoft Azure para empresas en Panamá y Centroamérica. Máquinas virtuales, Entra ID, redes, backup, seguridad y optimización de costos.",
  path: "/servicios/azure/",
  keywords: [
    "Azure Panamá",
    "Microsoft Azure Centroamérica",
    "máquinas virtuales Azure",
    "Azure Active Directory Panamá",
    "infraestructura cloud Microsoft",
    "servicios Azure empresa",
  ],
});

const capabilities = [
  {
    icon: Server,
    title: "Máquinas virtuales",
    desc: "Windows Server y Linux con dimensionamiento óptimo. VMs estándar, series D/E para cargas productivas, B para bajo costo.",
  },
  {
    icon: Network,
    title: "Redes y conectividad",
    desc: "Virtual Networks, VPN Site-to-Site, ExpressRoute, Azure Firewall, Application Gateway y balanceadores de carga.",
  },
  {
    icon: Users,
    title: "Microsoft Entra ID",
    desc: "Identidad centralizada (antes Azure AD), SSO, MFA, acceso condicional, integración con Microsoft 365 y apps corporativas.",
  },
  {
    icon: Database,
    title: "Bases de datos gestionadas",
    desc: "Azure SQL Database, Managed Instance, PostgreSQL, MySQL y Cosmos DB con backup automatizado y alta disponibilidad.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y cumplimiento",
    desc: "Azure Security Center, Defender for Cloud, Sentinel (SIEM), políticas, cifrado, Key Vault y auditoría.",
  },
  {
    icon: Gauge,
    title: "Optimización de costos",
    desc: "Rightsizing de VMs, reserved instances, spot VMs, análisis con Cost Management y recomendaciones aplicables.",
  },
];

const useCases = [
  {
    title: "Migración lift-and-shift",
    desc: "Mover servidores físicos o VMware existentes a VMs en Azure con mínimo reemplazo de código. Ideal para modernización rápida.",
  },
  {
    title: "Active Directory híbrido",
    desc: "Sincronizar tu AD on-premise con Entra ID para SSO unificado en Microsoft 365, apps SaaS y aplicaciones corporativas.",
  },
  {
    title: "Backup y disaster recovery",
    desc: "Azure Backup para servidores, Azure Site Recovery para replicación geo-redundante con RTO de minutos.",
  },
  {
    title: "Entornos de desarrollo y QA",
    desc: "DevTest Labs para crear ambientes temporales, con apagado automático y presupuestos controlados por equipo.",
  },
  {
    title: "Hosting de aplicaciones críticas",
    desc: "App Service, Azure Kubernetes Service (AKS), Functions serverless, con auto-escalado y SLA de 99.95%.",
  },
  {
    title: "Analítica y datos",
    desc: "Synapse Analytics, Data Factory, Power BI Premium y Azure OpenAI para cargas de datos y casos de IA empresarial.",
  },
];

const faqs = [
  {
    q: "¿Qué es Microsoft Azure y para qué sirve?",
    a: "Microsoft Azure es la plataforma de computación en la nube de Microsoft. Permite ejecutar máquinas virtuales, bases de datos, aplicaciones, redes, almacenamiento y servicios de inteligencia artificial sin tener infraestructura física propia. Funciona bajo modelo de consumo: pagas por lo que usas, con más de 200 servicios disponibles.",
  },
  {
    q: "¿Qué diferencia hay entre Azure y Microsoft 365?",
    a: "Microsoft 365 es la suite de productividad (correo, Office, Teams, OneDrive). Azure es la plataforma de infraestructura cloud (servidores, redes, bases de datos, aplicaciones). Son productos distintos pero complementarios: comparten el mismo sistema de identidad (Entra ID) y se integran perfectamente. Una empresa típica usa Microsoft 365 para productividad y Azure para hospedar sus aplicaciones o servidores.",
  },
  {
    q: "¿Cuánto cuesta usar Azure?",
    a: "Azure funciona con un modelo pago-por-uso, sin contratos mínimos. El costo depende de qué servicios uses, cuánto y en qué región. Una VM pequeña puede costar desde unos pocos dólares al mes; una arquitectura empresarial compleja puede costar miles. Te preparamos un estimado concreto con tu caso de uso en Azure Pricing Calculator antes de empezar.",
  },
  {
    q: "¿Es Azure más caro que tener mis propios servidores?",
    a: "Depende del caso. A corto plazo, Azure puede parecer más caro que un servidor físico pagado una sola vez. A largo plazo, sumando electricidad, refrigeración, licencias Windows Server, renovación de hardware, personal de mantenimiento y espacio físico, Azure suele ser más barato para la mayoría de las PyMEs. Además, elimina gastos de capital (CAPEX) convirtiéndolos en operativos (OPEX), y te da escalabilidad inmediata.",
  },
  {
    q: "¿Puedo empezar poco a poco o tengo que migrar todo?",
    a: "Poco a poco. Recomendamos empezar con un caso de uso concreto: un servidor específico, una aplicación o ambiente de desarrollo. Aprendes cómo funciona Azure en tu contexto, validas costos reales, y luego escalas. No es necesario hacer una migración big bang.",
  },
  {
    q: "¿Qué es Microsoft Entra ID y por qué es importante?",
    a: "Entra ID (antes Azure AD) es el servicio de identidad en la nube de Microsoft. Es lo que te permite tener usuarios centralizados que funcionan en Microsoft 365, Azure, aplicaciones SaaS (Salesforce, Zoom, cientos más) y tus propias apps corporativas, con una sola credencial y MFA. Es la base de una estrategia de identidad moderna tipo Zero Trust.",
  },
  {
    q: "¿Azure cumple con normativas de protección de datos?",
    a: "Azure cuenta con más de 90 certificaciones de cumplimiento a nivel mundial: ISO 27001, SOC 1/2/3, PCI DSS, HIPAA, FedRAMP, GDPR, entre otras. Es una de las plataformas más certificadas del mercado, válida para sectores regulados como financiero, salud y gobierno. Panamá no tiene regulación específica que impida uso de nube pública para mayoría de sectores.",
  },
  {
    q: "¿Desde qué región de Azure se sirven mis datos en Panamá?",
    a: "No existe región Azure en Panamá. Las opciones más cercanas con buen rendimiento son Mexico Central (nueva), East US (Virginia) y Brazil South. Elegimos la región según latencia desde Panamá, costo y requisitos de residencia de datos. Para la mayoría de casos, East US ofrece mejor relación costo-latencia con ~60-80ms.",
  },
  {
    q: "¿Qué pasa si necesito integrar Azure con mi red local?",
    a: "Hay tres opciones principales: (1) VPN Site-to-Site — túnel cifrado sobre internet, económico, latencia variable; (2) ExpressRoute — conexión privada dedicada, mayor SLA y menor latencia, costo más alto; (3) VPN Point-to-Site — para usuarios individuales conectándose remotamente. Elegimos según tráfico esperado y criticidad.",
  },
  {
    q: "¿Ofrecen soporte después de implementar Azure?",
    a: "Sí. Tenemos planes de soporte administrado mensual que incluyen monitoreo, gestión de alertas, optimización de costos, aplicación de parches, respuesta a incidentes y reportes. También podemos capacitar a tu equipo interno para que administre directamente y nosotros quedamos como soporte de segunda línea.",
  },
];

const relatedServices = [
  { href: "/servicios/microsoft-365/", title: "Microsoft 365", description: "Productividad integrada con tu identidad Azure Entra ID." },
  { href: "/servicios/seguridad-y-backup/", title: "Seguridad y backup", description: "Azure Backup, Site Recovery y protección gestionada." },
  { href: "/servicios/aws/", title: "Amazon AWS", description: "Alternativa o complemento a Azure según el caso de uso." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Servicios", href: "/servicios/" }]} current="Microsoft Azure" />

      <ServiceHero
        eyebrow="Servicio · Microsoft Azure"
        title={<>Infraestructura cloud con <span className="text-brand">Microsoft Azure</span></>}
        description="Máquinas virtuales, identidad, redes, bases de datos, seguridad y analítica en la nube de Microsoft. Arquitectura, implementación, migración y soporte continuo."
        highlights={[
          "Arquitectura y diseño personalizados",
          "Migración lift-and-shift y modernización",
          "Entra ID e identidad híbrida",
          "Backup y disaster recovery",
          "Optimización continua de costos",
          "Soporte administrado en español",
        ]}
      />

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            <strong>Microsoft Azure</strong> es la plataforma cloud de Microsoft, con más de 200 servicios para ejecutar infraestructura, aplicaciones y datos sin servidores físicos propios. Cubre desde VMs simples hasta arquitecturas empresariales con IA, analítica avanzada y orquestación de contenedores.
          </p>
          <p>
            En Solutech Cloud diseñamos, migramos, implementamos y operamos entornos Azure para empresas panameñas y centroamericanas. Trabajamos con enfoque pragmático: empezamos por lo que genera valor inmediato, validamos costos reales, y escalamos según evolución del negocio.
          </p>
        </div>
      </section>

      {/* Capacidades */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            ¿Qué servicios de Azure implementamos?
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Azure tiene cientos de servicios. Estos son los que más usan nuestros clientes y en los que tenemos experiencia directa.
          </p>
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

      {/* Casos de uso */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Casos de uso comunes
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((u) => (
            <div key={u.title} className="card">
              <h3 className="font-semibold text-gray-900">{u.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="mt-16 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-12">
        <div className="flex items-center gap-2 text-brand font-semibold mb-4">
          <Cloud className="size-5" />
          Cómo trabajamos
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          De evaluación a operación continua
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">1. Evaluación</h3>
            <p className="leading-relaxed">Relevamos tu infraestructura actual, aplicaciones, dependencias y objetivos. Preparamos un assessment con recomendación de arquitectura y estimado de costos mensuales realistas.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">2. Diseño</h3>
            <p className="leading-relaxed">Diseño detallado de red virtual, subredes, identidad, nomenclatura de recursos, políticas de seguridad, backup y etiquetado para gobernanza de costos.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">3. Implementación</h3>
            <p className="leading-relaxed">Provisionamos recursos con Infrastructure as Code (Bicep / Terraform) para trazabilidad y repetibilidad. Configuración de monitoreo y alertas desde el día uno.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">4. Operación y optimización</h3>
            <p className="leading-relaxed">Monitoreo continuo, aplicación de parches, gestión de backups, revisión mensual de costos, detección de recursos ociosos y recomendaciones aplicables.</p>
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
        title="¿Listo para modernizar tu infraestructura?"
        description="Cuéntanos qué tienes hoy (servidores físicos, otra nube, todo en laptops) y qué buscas. Te preparamos un assessment con estimado de costos y plan por fases."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Servicios Microsoft Azure",
          description: "Implementación, migración y gestión de Microsoft Azure. Máquinas virtuales, identidad, redes, bases de datos, seguridad y backup.",
          url: "/servicios/azure/",
          serviceType: "Implementación y gestión de Microsoft Azure",
          offerCatalog: [
            { name: "Azure Virtual Machines", description: "Servidores Windows y Linux en la nube" },
            { name: "Microsoft Entra ID", description: "Identidad centralizada y SSO" },
            { name: "Azure Backup y Site Recovery", description: "Respaldo y disaster recovery" },
            { name: "Azure SQL y bases de datos", description: "Bases de datos gestionadas" },
            { name: "Azure Virtual Networks y VPN", description: "Redes privadas y conectividad" },
            { name: "Soporte administrado Azure", description: "Operación continua" },
          ],
        })}
      />
    </>
  );
}
