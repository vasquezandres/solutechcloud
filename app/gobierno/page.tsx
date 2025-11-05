import Section from "@/components/Section";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export const metadata = {
  title: "Microsoft 365 para Gobierno en Panamá | SolutechCloud",
  description:
    "Licenciamiento oficial, facturación local, seguridad avanzada, migración guiada y soporte en español. Especialistas en sector público y licitaciones.",
};

export default function Page() {
  return (
    <>
      <Section
        title="Microsoft 365 para Gobierno en Panamá"
        subtitle="Moderniza la gestión pública con licencias oficiales de Microsoft 365. Facturación local, seguridad avanzada, migración guiada y soporte en español."
      >
        <div className="flex flex-wrap gap-3 mb-6">
          <a href="https://wa.me/50768886778" target="_blank" className="btn-primary">
            WhatsApp · Solicitar cotización
          </a>
          <Link href="/contacto" className="btn-primary btn-ghost">
            Enviar requerimiento
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div className="card">
            <h3 className="font-semibold">Correo institucional y archivo</h3>
            <p className="mt-2">
              Dominios oficiales, buzones seguros y retenciones para transparencia y continuidad del servicio.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Colaboración y trabajo remoto</h3>
            <p className="mt-2">
              Teams, SharePoint y OneDrive para reuniones, coautoría y gestión documental con control de acceso.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Seguridad y cumplimiento</h3>
            <p className="mt-2">
              MFA, acceso condicional, auditoría, DLP y retenciones para cumplir lineamientos y buenas prácticas.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Planes recomendados para gobierno" subtitle="Ajustados por nivel de productividad, seguridad y cumplimiento.">
        <PricingTable
          tiers={[
            {
              name: "Microsoft 365 E1",
              price: "Productividad básica",
              features: [
                "Apps web (Word/Excel/PowerPoint)",
                "Exchange Online + OneDrive/SharePoint",
                "MFA y auditoría básica",
                "Ideal para atención ciudadana o PCs compartidas",
              ],
            },
            {
              name: "Microsoft 365 E3",
              price: "Productividad avanzada",
              highlight: true,
              features: [
                "Apps escritorio + móvil",
                "Archivado/retención de correo",
                "DLP, eDiscovery estándar, gestión de dispositivos",
                "Ideal para dependencias con flujos formales",
              ],
            },
            {
              name: "Microsoft 365 E5",
              price: "Máxima seguridad",
              features: [
                "Incluye todo E3 + analítica avanzada",
                "Defensa avanzada contra amenazas",
                "Telefonía y eDiscovery premium",
                "Ideal para áreas con alto riesgo y auditoría",
              ],
            },
          ]}
        />
        <p className="text-xs mt-3 text-gray-500">
          *La disponibilidad puede variar por contrato y configuración. Validamos cada caso en la propuesta formal.
        </p>
      </Section>

      <Section title="Seguridad, cumplimiento y gobernanza de datos" subtitle="Buenas prácticas aplicadas en entornos gubernamentales.">
        <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 list-disc pl-5">
          <li>MFA y acceso condicional por ubicación/dispositivo.</li>
          <li>Roles administrativos mínimos (principio de privilegio mínimo).</li>
          <li>Etiquetado de sensibilidad y políticas DLP.</li>
          <li>Retenciones y archivado de correo y sitios.</li>
          <li>Auditoría unificada y alertas.</li>
          <li>Protecciones anti-phishing y malware; hardening inicial.</li>
          <li>Gestión de dispositivos con cifrado, parches y políticas.</li>
        </ul>
      </Section>

      <Section title="Metodología de implementación">
        <ol className="grid gap-3 list-decimal pl-6 text-sm text-gray-700">
          <li><b>Descubrimiento:</b> dominios, usuarios, buzones, tamaños y dependencias.</li>
          <li><b>Diseño:</b> identidad, DNS, seguridad y gobernanza documental.</li>
          <li><b>Pilotaje:</b> validación de correo, Teams y políticas.</li>
          <li><b>Migración:</b> ejecución por lotes, ventanas de cambio y comunicación.</li>
          <li><b>Adopción & soporte:</b> capacitación, mesa de ayuda y optimización continua.</li>
        </ol>
      </Section>

      <Section title="Requisitos y documentación">
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold mb-2">Para iniciar</h3>
            <ul className="list-disc pl-5">
              <li>Dominio institucional y acceso DNS.</li>
              <li>Listado de usuarios y roles.</li>
              <li>Políticas de retención deseadas.</li>
              <li>Contacto técnico y de aprobación.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Para migraciones</h3>
            <ul className="list-disc pl-5">
              <li>Origen (local/hosted/otra nube) y volúmenes.</li>
              <li>Credenciales para conectores.</li>
              <li>Ventanas de cambio y comunicación.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="SLA y soporte administrado">
        <ul className="grid gap-2 text-sm text-gray-700 list-disc pl-5">
          <li>Soporte en español (correo y WhatsApp empresarial).</li>
          <li>Monitoreo, altas/bajas y reportes mensuales.</li>
          <li>Tiempos de respuesta por severidad y revisiones trimestrales.</li>
        </ul>
      </Section>

      <Section title="Preguntas frecuentes">
        <FAQ
          items={[
            {
              q: "¿Cómo se adquieren las licencias de Microsoft 365 Gobierno?",
              a: "Solicita cotización a SolutechCloud. Aceptamos órdenes de compra y facturamos localmente en Panamá.",
            },
            {
              q: "¿Cuál es la diferencia entre E1, E3 y E5?",
              a: "E1: apps web; E3: apps completas y seguridad estándar; E5: seguridad avanzada y telefonía.",
            },
            {
              q: "¿Incluyen migración y capacitación?",
              a: "Sí, migración de correo/archivos y sesiones de adopción para usuarios y TI.",
            },
            {
              q: "¿Pueden respaldar datos de Microsoft 365?",
              a: "Sí, backup para Exchange Online, OneDrive, SharePoint y Teams.",
            },
            {
              q: "¿Cuánto tarda la activación?",
              a: "Normalmente el mismo día hábil tras confirmación. La migración se agenda por lotes.",
            },
            {
              q: "¿Ofrecen soporte administrado?",
              a: "Sí, con administración del tenant y reportes mensuales.",
            },
          ]}
        />
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold">¿Listo para llevar tu institución al siguiente nivel?</h3>
          <div className="mt-4 flex justify-center gap-3">
            <a href="https://wa.me/50768886778" target="_blank" className="btn-primary">WhatsApp</a>
            <Link href="/contacto" className="btn-primary btn-ghost">Solicitar cotización</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
