import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import FAQ from "@/components/FAQ";
import { Mail, ShieldCheck, Globe, ArrowRightLeft, Archive, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Correo corporativo en Panamá — Tu dominio, tu marca, profesional",
  description:
    "Correo empresarial con tu dominio (@tuempresa.com). Exchange Online, anti-spam, anti-phishing, MFA y migración sin pérdida de datos. Panamá y Centroamérica.",
  path: "/servicios/correo-corporativo/",
  keywords: [
    "correo corporativo Panamá",
    "correo empresarial con dominio propio",
    "Exchange Online Panamá",
    "correo profesional empresa",
  ],
});

const benefits = [
  { icon: Globe, title: "Tu dominio profesional", desc: "Correos @tuempresa.com en lugar de @gmail.com. Imagen seria, mejor reputación, tu marca en cada email." },
  { icon: ShieldCheck, title: "Anti-spam y anti-phishing", desc: "Microsoft Defender filtra amenazas antes que lleguen al buzón. SPF, DKIM y DMARC configurados para evitar suplantación." },
  { icon: Mail, title: "Buzones de 50 GB o más", desc: "Espacio generoso por usuario, búsqueda rápida, reglas, carpetas compartidas y archivado ilimitado con planes E3+." },
  { icon: Archive, title: "Retención y continuidad", desc: "Políticas automáticas de retención, historial preservado ante salidas de personal, recuperación ante eliminaciones accidentales." },
  { icon: ArrowRightLeft, title: "Migración sin pérdidas", desc: "Traslado completo desde Gmail, cPanel, Zoho, Zimbra u otro servidor IMAP con coexistencia durante la transición." },
];

const faqs = [
  { q: "¿Qué es un correo corporativo con dominio propio?", a: "Es un correo electrónico que usa el dominio de tu empresa en lugar de un proveedor público. En vez de juan.perez@gmail.com usas juan.perez@tuempresa.com. Proyecta profesionalismo, refuerza tu marca en cada comunicación y te da control sobre cuentas cuando alguien se va de la empresa." },
  { q: "¿Por qué no basta con Gmail personal para mi negocio?", a: "Un Gmail personal no transmite seriedad, no protege tu marca, y sobre todo: si quien lo usa se va de la empresa, te quedas sin acceso al histórico de correos. Además, los filtros anti-spam de otros proveedores marcan como sospechosos los correos comerciales que vienen de dominios públicos, lo que afecta tu deliverability." },
  { q: "¿Qué diferencia hay entre correo corporativo y Microsoft 365 completo?", a: "El correo corporativo básico te da buzones profesionales con tu dominio. Microsoft 365 completo agrega Teams, OneDrive con 1 TB por usuario, SharePoint, Office (Word, Excel, PowerPoint), seguridad avanzada y más. Para una empresa de 10+ personas, suele salir mejor un plan M365 Business completo por muy poco más." },
  { q: "¿Necesito un dominio propio para tener correo corporativo?", a: "Sí. Si no lo tienes, te ayudamos a registrarlo. Si ya lo tienes registrado con otro proveedor, no hace falta mudarlo: solo configuramos los registros DNS (MX, SPF, DKIM, DMARC) para que el correo llegue a tu nuevo proveedor." },
  { q: "¿Cómo migran mi correo sin perder nada?", a: "Usamos herramientas de migración que copian buzón por buzón de tu proveedor actual al nuevo, manteniendo carpetas, fechas, adjuntos y estado de lectura. Hacemos primero un grupo piloto, verificamos, luego migramos por lotes. Durante la transición, mantenemos coexistencia para que nadie pierda correos en tránsito." },
  { q: "¿Cuánto tiempo toma configurar correo corporativo desde cero?", a: "Sin migración de datos, podemos dejarte listo en 1 día hábil: creación de buzones, configuración DNS, MFA, firmas corporativas y onboarding de usuarios. Con migración de correo histórico, el tiempo depende del volumen: una empresa pequeña toma 3-5 días; una mediana (50-150 usuarios) toma 2-3 semanas." },
  { q: "¿Qué es MFA y por qué lo aplican obligatoriamente?", a: "MFA (autenticación multifactor) es un segundo paso para entrar al correo además de la contraseña: típicamente un código en tu celular. Bloquea el 99% de intentos de hackeo por contraseñas robadas. Lo aplicamos obligatoriamente porque sin MFA cualquier filtración de contraseña compromete todo tu correo corporativo." },
  { q: "¿Puedo usar el correo en mi celular y computadora al mismo tiempo?", a: "Sí. Funciona en Outlook desktop, Outlook web, Outlook móvil (iOS y Android), Apple Mail, Gmail app y cualquier cliente IMAP. Sincroniza carpetas, lecturas y enviados entre todos los dispositivos." },
  { q: "¿Qué pasa con el correo cuando un empleado se va?", a: "El administrador desactiva la cuenta, el contenido queda preservado, se redirige el correo a otra persona o se configura una respuesta automática. La licencia queda libre para asignar a otro empleado. Sin perder histórico ni acceso a información importante." },
  { q: "¿Ofrecen soporte para los usuarios después de implementar?", a: "Sí. Tenemos planes mensuales que incluyen ayuda a usuarios finales (problemas de acceso, configuración de dispositivos, preguntas básicas), gestión de altas y bajas, y mantenimiento del tenant. También capacitamos a tu equipo interno de TI si prefieres tenerlo in-house." },
];

const relatedServices = [
  { href: "/servicios/microsoft-365/", title: "Microsoft 365 completo", description: "Más que correo: Teams, OneDrive, Office y seguridad." },
  { href: "/servicios/seguridad-y-backup/", title: "Seguridad y backup", description: "Backup de correo y protección contra ransomware." },
  { href: "/servicios/migraciones/", title: "Migraciones", description: "Transición completa desde tu plataforma actual." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Servicios", href: "/servicios/" }]} current="Correo corporativo" />

      <ServiceHero
        eyebrow="Servicio · Correo corporativo"
        title={<>Correo corporativo profesional con <span className="text-brand">tu dominio</span></>}
        description="Deja atrás Gmail personal y el hosting compartido. Correo empresarial con Exchange Online, MFA, anti-phishing, backup y tu marca en cada mensaje."
        highlights={["Buzones con @tuempresa.com", "50 GB por usuario o más", "Anti-spam y anti-phishing", "MFA obligatorio", "Migración sin pérdidas", "Soporte en español"]}
      />

      <section className="mt-4">
        <div className="prose max-w-3xl text-gray-700 leading-relaxed">
          <p className="text-lg">
            Un <strong>correo corporativo profesional</strong> es correo electrónico con el dominio de tu empresa (ej: <code>juan@tuempresa.com</code>), alojado en una plataforma segura con filtros anti-spam, autenticación multifactor y respaldo. Proyecta seriedad, refuerza tu marca, y protege información crítica ante rotación de personal e incidentes.
          </p>
          <p>
            Configuramos correo corporativo principalmente con <strong>Microsoft Exchange Online</strong>, la plataforma líder en mercado corporativo y sector público, con opción también de Google Workspace cuando el caso lo justifica.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Lo que incluye un correo corporativo bien hecho</h2>
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
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Preguntas frecuentes</h2>
        </div>
        <FAQ items={faqs} />
      </section>

      <ServiceCTA
        title="¿Listo para dejar atrás el correo gratis?"
        description="Cuéntanos cuántos buzones necesitas y desde qué plataforma vienes. Te enviamos una propuesta clara con el plan correcto y el plan de migración."
        related={relatedServices}
      />

      <JsonLd
        data={serviceSchema({
          name: "Correo corporativo empresarial",
          description: "Correo profesional con dominio propio. Exchange Online, anti-spam, MFA y migración sin pérdida de datos.",
          url: "/servicios/correo-corporativo/",
          serviceType: "Correo empresarial con dominio propio",
        })}
      />
    </>
  );
}
