import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { Server, HardDrive, Globe, ShieldCheck, Gauge, Cpu, Database, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Servicios Amazon AWS en Panamá — Infraestructura cloud escalable",
  description:
    "Implementación y gestión de Amazon Web Services para empresas en Panamá y Centroamérica. EC2, S3, RDS, CloudFront, IAM, seguridad y migraciones.",
  path: "/servicios/aws/",
  keywords: [
    "AWS Panamá",
    "Amazon Web Services Centroamérica",
    "EC2 S3 Panamá",
    "CloudFront CDN",
    "migración AWS empresa",
    "partner AWS Panamá",
  ],
});

const capabilities = [
  {
    icon: Server,
    title: "EC2 — Servidores virtuales",
    desc: "Instancias de cómputo Windows y Linux con amplia variedad de tamaños, GPU para IA, Graviton ARM para eficiencia de costos.",
  },
  {
    icon: HardDrive,
    title: "S3 — Almacenamiento de objetos",
    desc: "Almacenamiento escalable para archivos, backups, videos, datasets. Clases Standard, IA, Glacier para archivado de bajo costo.",
  },
  {
    icon: Database,
    title: "RDS y Aurora",
    desc: "Bases de datos gestionadas: MySQL, PostgreSQL, SQL Server, MariaDB y Aurora (compatible pero más rápido y resiliente).",
  },
  {
    icon: Globe,
    title: "CloudFront CDN",
    desc: "Red de distribución global para acelerar sitios web, videos y APIs. Integración con WAF para seguridad de aplicaciones.",
  },
  {
    icon: ShieldCheck,
    title: "IAM y seguridad",
    desc: "Control de acceso granular, MFA, Security Hub, GuardDuty para detección de amenazas y KMS para cifrado gestionado.",
  },
  {
    icon: Gauge,
    title: "Cost Explorer y optimización",
    desc: "Análisis de consumo, Savings Plans, Reserved Instances, Spot y recomendaciones de rightsizing automatizadas.",
  },
];

const useCases = [
  {
    title: "Hosting de sitios web y APIs",
    desc: "EC2 + RDS + CloudFront para aplicaciones web tradicionales, con auto-scaling según tráfico y alta disponibilidad en múltiples zonas.",
  },
  {
    title: "Backups y archivado",
    desc: "S3 Glacier para backup de largo plazo a costos muy bajos. Alternativa económica para respaldos que se consultan raramente.",
  },
  {
    title: "Aplicaciones serverless",
    desc: "Lambda + API Gateway + DynamoDB para aplicaciones que escalan automáticamente sin gestionar servidores. Pagas solo por invocaciones.",
  },
  {
    title: "Data lakes y analítica",
    desc: "S3 + Athena + Redshift para almacenar y analizar grandes volúmenes de datos con SQL estándar sin infraestructura dedicada.",
  },
  {
    title: "Contenedores y Kubernetes",
    desc: "ECS para contenedores Docker simples o EKS (Kubernetes gestionado) para arquitecturas de microservicios modernas.",
  },
  {
    title: "Migración desde on-premise",
    desc: "AWS Migration Hub, Database Migration Service (DMS) y Application Migration Service para mover servidores y BDs con mínima interrupción.",
  },
];

const faqs = [
  {
    q: "¿Qué es Amazon Web Services (AWS) y cómo funciona?",
    a: "AWS es la plataforma cloud de Amazon, pionera en la industria y la más utilizada a nivel mundial. Ofrece más de 200 servicios: desde servidores virtuales (EC2) y almacenamiento (S3) hasta bases de datos, machine learning y IoT. Funciona con modelo pago-por-uso: pagas por lo que consumes, sin contratos mínimos. Accedes a todo desde la consola web o mediante código (Terraform, CDK, CloudFormation).",
  },
  {
    q: "¿Es mejor AWS o Azure?",
    a: "Depende del contexto. AWS tiene más servicios, más madurez y mayor comunidad; suele ganar en casos complejos de ingeniería, startups tech y workloads con microservicios. Azure gana cuando ya usas Microsoft 365, tienes Active Directory o aplicaciones Windows Server, por su integración nativa. Muchas empresas usan ambas según el caso: Azure para productividad e identidad, AWS para aplicaciones específicas. Te ayudamos a decidir sin sesgo.",
  },
  {
    q: "¿Cuánto cuesta AWS para una empresa mediana?",
    a: "Un entorno básico (2-3 EC2 t3.medium, 200GB S3, 1 RDS pequeña, tráfico moderado) puede costar entre 150 y 400 USD/mes. Entornos más complejos con alta disponibilidad, bases de datos grandes y CDN pueden llegar a miles al mes. Te preparamos un estimado con AWS Pricing Calculator antes de cualquier compromiso.",
  },
  {
    q: "¿Desde qué región AWS se sirven mejor empresas en Panamá?",
    a: "Las regiones más usadas desde Panamá son us-east-1 (Norte de Virginia) con 55-75ms de latencia y costos más bajos, y sa-east-1 (São Paulo) con menor latencia pero costo más alto. us-east-1 es la más madura, con todos los servicios disponibles primero. También se puede usar CloudFront para acelerar globalmente desde edge locations cercanas.",
  },
  {
    q: "¿Cómo protegen mis costos AWS de sorpresas?",
    a: "Con varias capas: (1) AWS Budgets con alertas por umbral; (2) revisión mensual con Cost Explorer; (3) tagging consistente para identificar gastos por proyecto o cliente; (4) Savings Plans o Reserved Instances para cargas predecibles (ahorros del 30-70%); (5) apagado automático de ambientes de dev/QA fuera de horario; (6) auditoría de recursos ociosos.",
  },
  {
    q: "¿Qué diferencia hay entre S3 Standard, Infrequent Access y Glacier?",
    a: "Son niveles de almacenamiento con diferente costo y latencia de acceso. S3 Standard: para datos accedidos frecuentemente, acceso inmediato, costo mayor. Standard-IA: acceso menos frecuente pero inmediato, 40% más barato. Glacier Instant: archivado con acceso en milisegundos, 70% más barato. Glacier Flexible: minutos a horas de espera, 85% más barato. Se pueden automatizar transiciones según edad del archivo.",
  },
  {
    q: "¿AWS cumple con regulaciones de protección de datos?",
    a: "Sí. AWS cuenta con más de 90 estándares de cumplimiento: ISO 27001, SOC 1/2/3, PCI DSS, HIPAA, GDPR, FedRAMP, entre otros. Adicionalmente, AWS ofrece herramientas específicas como AWS Artifact para descargar reportes de cumplimiento y AWS Audit Manager para automatizar evidencias regulatorias.",
  },
  {
    q: "¿Puedo tener una arquitectura híbrida AWS + mi data center?",
    a: "Sí, con varias opciones. Site-to-Site VPN para conectar tu red local con AWS cifrado sobre internet. Direct Connect para conexión privada dedicada con mayor ancho de banda y menor latencia. AWS Outposts para tener hardware AWS físicamente en tu data center. La elección depende del volumen de tráfico y requisitos de latencia.",
  },
  {
    q: "¿Qué pasa si pierdo acceso a mi cuenta AWS?",
    a: "Es crítico aplicar buenas prácticas desde el día uno: cuenta root con MFA obligatorio y credenciales en bóveda segura, usuarios IAM separados por rol, roles en lugar de access keys cuando sea posible, rotación periódica de credenciales y backup de configuraciones críticas en Infrastructure as Code. Si pierdes acceso root, AWS tiene proceso de recuperación por email y teléfono verificados en la cuenta.",
  },
  {
    q: "¿Ofrecen soporte después de implementar AWS?",
    a: "Sí. Tenemos planes de soporte mensual que incluyen monitoreo con CloudWatch, gestión de alertas, aplicación de parches, revisión mensual de seguridad y costos, respuesta a incidentes y reportes. Complementamos con AWS Business Support o Enterprise Support cuando el cliente lo requiere para SLA directamente con Amazon.",
  },
];

const relatedServices = [
  { href: "/servicios/azure/", title: "Microsoft Azure", description: "Alternativa o complemento a AWS, mejor si ya usas Microsoft 365." },
  { href: "/servicios/seguridad-y-backup/", title: "Seguridad y backup", description: "Backup a S3 Glacier y protección gestionada." },
  { href: "/servicios/migraciones/", title: "Migraciones", description: "Traslado de servidores on-premise a AWS." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Servicios", href: "/servicios/" }]} current="Amazon AWS" />

      <ServiceHero
        eyebrow="Servicio · Amazon AWS"
        title={<>Infraestructura cloud con <span className="text-brand">Amazon Web Services</span></>}
        description="La plataforma cloud más madura del mundo para aplicaciones, datos y servicios a escala. Arquitectura, migración, implementación y operación continua."
        highlights={[
          "Arquitectura Well-Architected Framework",
          "Migración desde on-premise o datacenters",
          "Optimización continua de costos",
          "Seguridad con IAM, GuardDuty, WAF",
          "Serverless y contenedores",
          "Soporte administrado en español",
        ]}
      />

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            <strong>Amazon Web Services (AWS)</strong> es la plataforma cloud más grande y madura del mundo, con más de 200 servicios que cubren desde cómputo básico hasta inteligencia artificial, analítica y servicios especializados por industria.
          </p>
          <p>
            Implementamos arquitecturas AWS siguiendo las mejores prácticas del <strong>AWS Well-Architected Framework</strong>: operación confiable, seguridad por diseño, optimización de costos, excelencia operativa y sustentabilidad. Diseñamos soluciones pragmáticas, no sobre-ingenierizadas.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            ¿Qué servicios AWS implementamos?
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

      {/* AWS vs Azure comparison */}
      <section className="mt-16 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          ¿AWS o Azure? Nuestra perspectiva honesta
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
          Trabajamos con ambas plataformas. La elección correcta depende de tu contexto, no de preferencias de marca.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Elige AWS si...
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                Tienes aplicaciones Linux, contenedores o microservicios
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                Necesitas servicios especializados (ML, IoT, data lakes)
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                Priorizas amplitud y madurez de servicios
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                Tu equipo de desarrollo ya conoce AWS
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Elige Azure si...
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                Ya usas Microsoft 365, Active Directory o Windows Server
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                Buscas integración nativa con apps Microsoft
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                Operas en sector gobierno o regulado
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                Valoras licenciamiento híbrido (Hybrid Benefit)
              </li>
            </ul>
          </div>
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
        title="¿Pensando en AWS para tu próximo proyecto?"
        description="Nos gusta conocer el contexto antes de diseñar. Cuéntanos qué tienes hoy y qué buscas, y te preparamos un assessment con arquitectura propuesta y estimado de costos."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Servicios Amazon AWS",
          description: "Implementación y gestión de Amazon Web Services. EC2, S3, RDS, CloudFront, IAM y arquitecturas Well-Architected.",
          url: "/servicios/aws/",
          serviceType: "Implementación y gestión de AWS",
          offerCatalog: [
            { name: "Amazon EC2", description: "Servidores virtuales" },
            { name: "Amazon S3", description: "Almacenamiento de objetos" },
            { name: "Amazon RDS", description: "Bases de datos gestionadas" },
            { name: "CloudFront CDN", description: "Distribución global" },
            { name: "IAM y seguridad", description: "Control de acceso" },
            { name: "Migración a AWS", description: "Traslado desde on-premise" },
          ],
        })}
      />
    </>
  );
}
