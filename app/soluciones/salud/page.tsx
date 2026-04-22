import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { Stethoscope, Lock, FileText, Users, ShieldCheck, Activity, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Soluciones tecnológicas para salud en Panamá — Clínicas y centros médicos",
  description:
    "Tecnología para clínicas, centros médicos y hospitales en Panamá. Microsoft 365, backup de datos de pacientes, seguridad avanzada y cumplimiento normativo.",
  path: "/soluciones/salud/",
  keywords: [
    "tecnología clínicas Panamá",
    "Microsoft 365 sector salud",
    "seguridad datos pacientes",
    "TI centros médicos Panamá",
  ],
});

const capabilities = [
  { icon: Lock, title: "Protección de datos de pacientes", desc: "Cifrado end-to-end, DLP para historias clínicas, retención legal y auditoría unificada para cumplimiento sanitario." },
  { icon: ShieldCheck, title: "Control de acceso granular", desc: "Acceso por rol (médicos, enfermería, administrativos) con privilegio mínimo. MFA obligatorio y segregación de áreas clínicas y administrativas." },
  { icon: FileText, title: "Gestión documental médica", desc: "SharePoint con metadatos clínicos, versionado, aprobaciones y flujos de trabajo para documentación médica y protocolos institucionales." },
  { icon: Users, title: "Colaboración entre equipos", desc: "Teams con canales por especialidad, videollamadas seguras para telemedicina, mensajería HIPAA-compliant entre profesionales." },
  { icon: Activity, title: "Continuidad operativa", desc: "Backup inmutable contra ransomware, disaster recovery con RTO de horas, replicación geo-redundante de datos críticos." },
  { icon: Stethoscope, title: "Integración con sistemas clínicos", desc: "APIs y conectores para integrar con HIS, EHR, PACS y sistemas de facturación existentes sin reemplazarlos." },
];

const typicalProjects = [
  { title: "Consultorios y clínicas pequeñas", desc: "Microsoft 365 Business Premium con MFA, backup, SharePoint para documentación clínica y Teams para comunicación interna segura." },
  { title: "Centros médicos medianos", desc: "Microsoft 365 Enterprise E3 con clasificación automática de documentos sensibles, DLP avanzado, SIEM básico con Sentinel y backup de servidores clínicos." },
  { title: "Hospitales y redes de salud", desc: "Arquitectura híbrida con Azure para sistemas clínicos, integración con HIS/EHR existentes, SIEM avanzado, disaster recovery geo-replicado y SOC 24/7." },
];

const faqs = [
  { q: "¿Microsoft 365 cumple con normativas de protección de datos de salud?", a: "Microsoft 365 cuenta con certificaciones HIPAA, GDPR, ISO 27001 e ISO 27018. A nivel técnico provee las herramientas para cumplimiento: cifrado, auditoría, retención, DLP, MFA. En Panamá, las instituciones de salud deben cumplir con la Ley 81 de Protección de Datos Personales y normativas del MINSA. Configuramos el tenant alineado con estos requisitos." },
  { q: "¿Cómo protegen las historias clínicas de accesos no autorizados?", a: "Con múltiples capas: etiquetado de sensibilidad automático (documentos médicos marcados como confidenciales), DLP para prevenir compartir externamente, cifrado de archivos específicos, acceso por rol (solo médicos tratantes acceden a sus pacientes), auditoría de quién accedió a qué y cuándo, alertas ante accesos anómalos." },
  { q: "¿Qué pasa si hay un ataque de ransomware en mi clínica?", a: "Sin protección adecuada, podrías perder historias clínicas con implicaciones graves legales y operativas. Con nuestra implementación estándar: backups inmutables que el ransomware no puede cifrar, detección temprana con Defender, procedimientos de contención inmediata, restauración desde última copia limpia. Las clínicas que implementan este enfoque han recuperado operaciones en 24-48 horas ante incidentes reales." },
  { q: "¿Cómo funciona la telemedicina con Teams?", a: "Teams cumple con requisitos HIPAA para videollamadas médicas cuando se configura adecuadamente. Grabación opcional para respaldo clínico, transcripción automática, compartición segura de imágenes médicas, salas de espera virtuales, integración con calendarios y pacientes identificados correctamente. Recomendamos Teams Premium para funciones avanzadas en contexto médico." },
  { q: "¿Pueden integrar con el software clínico que ya usamos?", a: "Generalmente sí. Muchos sistemas clínicos (HIS, EHR, PACS) tienen APIs o conectores. Microsoft Graph permite integraciones para autenticación SSO, sincronización de usuarios, alertas a Teams desde sistemas clínicos. Para integraciones más profundas usamos Power Automate o desarrollo personalizado. Evaluamos caso por caso qué integración es posible." },
  { q: "¿Qué pasa con los datos de pacientes si cambiamos de proveedor?", a: "El tenant de Microsoft 365 es propiedad de la institución de salud, no nuestra. Si alguna vez cambias de proveedor IT, todos los datos quedan en tu tenant. Facilitamos traspaso de administración sin retener información ni configuraciones. Esto es importante para el cumplimiento de regulaciones sanitarias sobre titularidad de datos." },
  { q: "¿Ofrecen soporte 24/7 para entornos críticos de salud?", a: "Sí. Para hospitales y centros que requieren operación continua ofrecemos soporte 24/7 con tiempos de respuesta garantizados por severidad. Para clínicas pequeñas, soporte en horario extendido (12-14 horas diarias) suele ser suficiente. Definimos el SLA según criticidad operativa." },
];

const relatedServices = [
  { href: "/servicios/microsoft-365/", title: "Microsoft 365", description: "Productividad segura y compliance para equipos de salud." },
  { href: "/servicios/seguridad-y-backup/", title: "Seguridad y backup", description: "Protección de datos clínicos y continuidad operativa." },
  { href: "/servicios/azure/", title: "Microsoft Azure", description: "Infraestructura para sistemas clínicos e integración." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Soluciones", href: "/soluciones/" }]} current="Salud" />

      <ServiceHero
        eyebrow="Solución · Salud"
        title={<>Tecnología para el <span className="text-brand">sector salud</span></>}
        description="Microsoft 365, seguridad avanzada, backup inmutable y cumplimiento para clínicas, centros médicos y hospitales en Panamá. Protección real de datos de pacientes."
        highlights={[
          "Cumplimiento HIPAA, ISO 27001",
          "Cifrado y DLP para historias clínicas",
          "Acceso por rol con MFA obligatorio",
          "Backup inmutable contra ransomware",
          "Telemedicina segura con Teams",
          "Integración con sistemas HIS/EHR",
        ]}
      />

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            El <strong>sector salud</strong> maneja los datos más sensibles que existen: historias clínicas, diagnósticos, tratamientos, información personal de pacientes. Un incidente de seguridad no solo tiene implicaciones legales graves (Ley 81 de Protección de Datos en Panamá, HIPAA para operación internacional), sino que afecta directamente la confianza de los pacientes y la continuidad del servicio médico.
          </p>
          <p>
            Acompañamos a clínicas, centros médicos y hospitales panameños a modernizar su tecnología con enfoque en seguridad, cumplimiento y continuidad operativa, sin interrumpir la atención a pacientes.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Capacidades para el sector salud
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
            Proyectos típicos en salud
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {typicalProjects.map((p) => (
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
        title="¿Responsable de TI en una institución de salud?"
        description="Nuestra primera conversación es una auditoría exprés gratuita de tu postura de seguridad actual. Sin compromiso, te devolvemos hallazgos concretos y recomendaciones."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Soluciones tecnológicas para salud",
          description: "Tecnología para clínicas y centros médicos: Microsoft 365, seguridad avanzada, backup y cumplimiento.",
          url: "/soluciones/salud/",
          serviceType: "Tecnología para sector salud",
        })}
      />
    </>
  );
}
