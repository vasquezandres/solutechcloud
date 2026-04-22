import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { GraduationCap, Users, BookOpen, ShieldCheck, Video, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Soluciones tecnológicas para educación en Panamá",
  description:
    "Microsoft 365 Education, Teams for Education, aulas virtuales, licencias académicas y seguridad para colegios y universidades en Panamá y Centroamérica.",
  path: "/soluciones/educacion/",
  keywords: [
    "Microsoft 365 Education Panamá",
    "Teams educación Centroamérica",
    "tecnología colegios Panamá",
    "licencias académicas Microsoft",
  ],
});

const capabilities = [
  { icon: GraduationCap, title: "Microsoft 365 Education", desc: "Planes A1 (gratis), A3 y A5 con Teams for Education, OneNote Class Notebook y herramientas especializadas para aulas." },
  { icon: Video, title: "Teams for Education", desc: "Aulas virtuales, grabación automática de clases, transcripción, asignaciones y calificaciones integradas, Insights para seguimiento." },
  { icon: BookOpen, title: "OneNote Class Notebook", desc: "Cuaderno digital compartido entre docente y estudiantes. Biblioteca de contenido, espacios individuales y colaborativos." },
  { icon: Users, title: "Gestión de estudiantes", desc: "School Data Sync para sincronizar desde sistemas académicos (SIS) y mantener clases actualizadas sin trabajo manual." },
  { icon: ShieldCheck, title: "Seguridad para menores", desc: "Filtros de contenido, Safe Links, moderación automática, controles de acceso por edad y reportes para padres y directivos." },
];

const typicalImplementations = [
  { title: "Colegio privado de primaria y secundaria", desc: "A1 (gratuito) para estudiantes con Teams, OneDrive y apps web. A3 para docentes con apps de escritorio. Capacitación y mesa de ayuda para docentes." },
  { title: "Universidad o instituto técnico", desc: "Federación de identidad con Entra ID para SSO en todas las plataformas académicas. Teams por materia, Stream para clases grabadas, Power BI para análisis institucional." },
  { title: "Centro educativo con modalidad híbrida", desc: "Combinación de aulas presenciales con clases virtuales simultáneas. Configuración de salas inteligentes con Teams Rooms y pantallas interactivas." },
];

const faqs = [
  { q: "¿Microsoft 365 es gratis para instituciones educativas?", a: "Parcialmente. El plan A1 para estudiantes y docentes es gratuito e incluye Teams, OneDrive, SharePoint, Exchange (correo web), versiones web de Office y OneNote. Los planes A3 y A5 son pagos pero con descuentos significativos sobre precios comerciales. A3 agrega apps de escritorio completas y funciones de seguridad; A5 agrega seguridad avanzada, análisis con Power BI y telefonía." },
  { q: "¿Cómo verifica Microsoft que somos una institución educativa?", a: "Microsoft requiere verificación de elegibilidad educativa mediante documentación oficial (registro del ministerio, personería jurídica como institución educativa). El proceso toma unos días. Te acompañamos a recopilar documentación necesaria y gestionar la aprobación." },
  { q: "¿Los estudiantes pueden instalar Office gratis en sus computadoras?", a: "Sí, con planes A3 o A5 institucionales. Estudiantes activos pueden instalar Office de escritorio en hasta 5 PCs, 5 tablets y 5 móviles personales. Cuando el estudiante se gradúa o deja la institución, las licencias se desactivan automáticamente." },
  { q: "¿Teams for Education es diferente al Teams normal?", a: "Sí. Teams for Education incluye funciones específicas educativas: plantillas de equipos por clase, libro de calificaciones integrado, asignaciones con rúbricas, Reading Progress para evaluación de lectura, Reflect para seguimiento emocional, y controles específicos para menores de edad." },
  { q: "¿Cómo protegemos a los estudiantes menores en línea?", a: "Aplicamos controles por edad: filtros de contenido en SharePoint, Safe Links en correos y Teams, restricciones de comunicación externa, moderación automática de chat, controles de privacidad estrictos y opción de desactivar funciones específicas (ej: chat privado) para cursos de primaria." },
  { q: "¿Cómo se manejan las clases grabadas y los derechos de autor?", a: "Las grabaciones se almacenan en OneDrive del docente o SharePoint del curso con retención configurable. Los alumnos pueden verlas pero no descargarlas según políticas. Respecto a derechos de autor: las instituciones educativas tienen marcos legales específicos en Panamá para uso educacional, pero recomendamos revisar con asesoría legal las políticas institucionales." },
];

const relatedServices = [
  { href: "/servicios/microsoft-365/", title: "Microsoft 365", description: "Base de la solución educativa con Teams for Education." },
  { href: "/servicios/seguridad-y-backup/", title: "Seguridad y backup", description: "Protección de datos estudiantiles y respaldo institucional." },
  { href: "/soluciones/sector-publico/", title: "Sector público", description: "Si eres institución educativa del Estado." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Soluciones", href: "/soluciones/" }]} current="Educación" />

      <ServiceHero
        eyebrow="Solución · Educación"
        title={<>Tecnología para <span className="text-brand">instituciones educativas</span></>}
        description="Microsoft 365 Education con Teams for Education, aulas virtuales, licencias académicas y seguridad específica para menores. Para colegios, universidades e institutos técnicos."
        highlights={[
          "Planes A1 gratuitos para alumnos",
          "Teams for Education con rúbricas",
          "OneNote Class Notebook",
          "Seguridad y moderación para menores",
          "Sincronización con SIS académico",
          "Capacitación docente incluida",
        ]}
      />

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            Las <strong>instituciones educativas</strong> tienen necesidades tecnológicas específicas que difieren de empresas comunes: aulas virtuales, asignaciones, calificaciones, protección de menores, sincronización con sistemas académicos y presupuestos ajustados con descuentos educacionales.
          </p>
          <p>
            Microsoft 365 Education ofrece la plataforma más completa del mercado para educación, con plan gratuito para estudiantes y docentes (A1) y opciones avanzadas (A3, A5) con descuentos educativos significativos.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Capacidades para educación
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
            Implementaciones típicas
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {typicalImplementations.map((t) => (
            <div key={t.title} className="card">
              <h3 className="font-semibold text-gray-900">{t.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t.desc}</p>
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
        title="¿Eres parte del equipo de TI o dirección de una institución educativa?"
        description="Te ayudamos a aprovechar al máximo los planes educativos de Microsoft, con setup, capacitación docente y soporte continuo. Contáctanos para una evaluación sin compromiso."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Soluciones tecnológicas para educación",
          description: "Microsoft 365 Education, Teams for Education y herramientas académicas para colegios y universidades en Panamá.",
          url: "/soluciones/educacion/",
          serviceType: "Tecnología educativa",
        })}
      />
    </>
  );
}
