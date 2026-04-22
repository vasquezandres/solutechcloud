import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { Briefcase, Mail, ShieldCheck, Users, DollarSign, Rocket, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Soluciones tecnológicas para PyMEs en Panamá — Microsoft 365 y más",
  description:
    "Microsoft 365 Business, correo corporativo, backup, seguridad y soporte para pequeñas y medianas empresas en Panamá y Centroamérica. Precios claros, soporte cercano.",
  path: "/soluciones/pymes/",
  keywords: [
    "soluciones PyME Panamá",
    "Microsoft 365 pequeña empresa",
    "tecnología PyME Centroamérica",
    "correo empresarial PyME",
  ],
});

const priorities = [
  { icon: DollarSign, title: "Precios claros", desc: "Sin costos ocultos ni sobre-ingeniería. Te recomendamos solo lo que realmente necesitas, con opción de escalar después." },
  { icon: Rocket, title: "Implementación rápida", desc: "En PyMEs el tiempo del dueño es el recurso más escaso. Nuestros proyectos estándar se implementan en días, no meses." },
  { icon: Users, title: "Soporte cercano", desc: "Sin mesa de ayuda anónima. Hablas directamente con técnicos que conocen tu entorno y tu historia." },
  { icon: ShieldCheck, title: "Seguridad pragmática", desc: "MFA, antivirus, backup. Lo esencial bien hecho, sin ahogarte en políticas corporativas innecesarias." },
];

const typicalNeeds = [
  { title: "Salir del correo gratis / compartido", desc: "Migrar de Gmail personal, cPanel o hosting compartido a Microsoft 365 con dominio propio, MFA y respaldo." },
  { title: "Teams para colaboración remota", desc: "Videollamadas con clientes, chat interno, canales por proyecto, compartición de archivos con permisos." },
  { title: "Backup ante pérdida accidental", desc: "Protección real contra ransomware, borrado accidental o empleados que se van. Restauración granular." },
  { title: "Antivirus gestionado", desc: "EDR moderno con Sophos o Microsoft Defender. Protección activa sin depender de que el usuario renueve licencias." },
  { title: "Estructura de archivos organizada", desc: "Dejar atrás carpetas en el PC o WhatsApp. SharePoint por departamento con permisos claros y versionado." },
  { title: "Soporte técnico bajo demanda", desc: "Bolsa de horas mensuales o tarifa fija para consultas, resolución de incidentes y pequeños proyectos." },
];

const faqs = [
  { q: "¿Cuál es el plan de Microsoft 365 correcto para mi PyME?", a: "Depende de cuántos empleados tienes y qué necesitas. Microsoft 365 Business Basic (solo web) es lo mínimo para tener correo profesional. Business Standard agrega apps de escritorio (Word, Excel, PowerPoint). Business Premium agrega seguridad avanzada y gestión de dispositivos, ideal para empresas que manejan datos sensibles de clientes. Para la mayoría de PyMEs de 10-50 personas, Business Premium es el mejor balance costo-valor." },
  { q: "¿Cuánto cuesta implementar todo esto para una empresa de 15 personas?", a: "El costo se divide en: (1) licencias de software mensuales por usuario; (2) setup inicial de una sola vez; (3) opcional: soporte mensual. Una empresa de 15 personas puede arrancar con inversión inicial moderada y costos mensuales predecibles. Te preparamos propuesta concreta según tu caso en 24-48 horas." },
  { q: "Soy autónomo / freelancer, ¿vale la pena Microsoft 365?", a: "Sí, incluso para una sola persona. Microsoft 365 Business Basic te da correo profesional con tu dominio (@tuempresa.com en lugar de Gmail personal), OneDrive con 1 TB, Teams para videollamadas con clientes y apps web. Proyecta seriedad y te protege contra la pérdida de acceso al correo personal." },
  { q: "¿Qué pasa si un empleado se va con información de la empresa?", a: "Con Microsoft 365 configurado correctamente, tú controlas la cuenta: desactivas acceso instantáneamente, reasignas correos a otra persona, los documentos corporativos quedan en SharePoint (no en el PC del ex-empleado), y con Intune puedes borrar remotamente datos corporativos del celular del empleado sin tocar sus datos personales." },
  { q: "¿Necesito saber de tecnología para usar todo esto?", a: "No. Configuramos todo y capacitamos a los usuarios para uso diario. Tú te enfocas en tu negocio, no en administrar tecnología. Si prefieres aprender algo, te damos capacitación básica de administración; si prefieres no tocar nada, te damos soporte gestionado mensual." },
  { q: "¿Puedo empezar pequeño y crecer después?", a: "Sí. Microsoft 365 escala sin fricción: agregas usuarios cuando contratas gente, quitas cuando se van. Cambias de plan cuando necesitas más funcionalidades. Todo se factura proporcionalmente. No hay contratos mínimos ni penalizaciones por reducir." },
  { q: "¿Ofrecen facturación local en Panamá?", a: "Sí. Emitimos factura fiscal panameña. Aceptamos transferencia bancaria local y ACH. Esto evita problemas con la DGI y te permite deducir el gasto tecnológico correctamente." },
  { q: "Ya uso Gmail / Google Workspace. ¿Vale la pena cambiar?", a: "Depende. Si estás satisfecho y tu equipo trabaja bien con Gmail/Drive, no hay urgencia. Pero si tus clientes o socios usan Microsoft Office (la mayoría en el sector corporativo y gobierno), vas a tener fricción constante con formatos, colaboración y compatibilidad. Microsoft 365 también tiene mejor control de identidad y seguridad empresarial. Te ayudamos a evaluar honestamente antes de cualquier migración." },
];

const relatedServices = [
  { href: "/servicios/microsoft-365/", title: "Microsoft 365", description: "Planes Business para PyMEs con todas las apps que necesitas." },
  { href: "/servicios/correo-corporativo/", title: "Correo corporativo", description: "Correo profesional con tu dominio propio." },
  { href: "/servicios/seguridad-y-backup/", title: "Seguridad y backup", description: "Protección esencial sin complejidad innecesaria." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Soluciones", href: "/soluciones/" }]} current="PyMEs" />

      <ServiceHero
        eyebrow="Solución · PyMEs"
        title={<>Tecnología <span className="text-brand">a medida para PyMEs</span></>}
        description="Lo esencial bien hecho: correo profesional, productividad, seguridad, backup y soporte cercano. Sin sobre-ingeniería ni sorpresas en la factura."
        highlights={[
          "Microsoft 365 Business",
          "Correo con dominio propio",
          "Backup y antivirus gestionado",
          "Soporte directo en español",
          "Implementación en días",
          "Precios claros sin sorpresas",
        ]}
      />

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            En las <strong>PyMEs</strong> cada decisión tecnológica tiene impacto directo en el bolsillo del dueño. No hay departamentos de TI gigantes ni presupuestos infinitos: hay que hacer mucho con poco, bien y rápido.
          </p>
          <p>
            Trabajamos con PyMEs panameñas y centroamericanas con un enfoque pragmático: te recomendamos solo lo que realmente necesitas, lo implementamos rápido, lo mantenemos funcionando, y te acompañamos cuando creces.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Lo que priorizamos al trabajar con PyMEs
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {priorities.map((p) => {
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Necesidades típicas que resolvemos
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {typicalNeeds.map((n) => (
            <div key={n.title} className="card">
              <h3 className="font-semibold text-gray-900">{n.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{n.desc}</p>
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
        title="¿Listo para modernizar tu PyME?"
        description="Sin compromisos ni venta dura. Cuéntanos cuántos son en tu equipo y qué usan hoy, y te hacemos una recomendación honesta con costos claros."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Soluciones tecnológicas para PyMEs",
          description: "Microsoft 365 Business, correo corporativo, backup y soporte para pequeñas y medianas empresas en Panamá.",
          url: "/soluciones/pymes/",
          serviceType: "Tecnología para PyMEs",
        })}
      />
    </>
  );
}
