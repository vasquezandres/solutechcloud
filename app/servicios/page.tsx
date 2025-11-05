import Section from "@/components/Section";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (
    <>
      <p className="text-gray-600 mt-2">
        Soluciones prácticas con precios claros.
      </p>

      {/* M365 */}
      <Section
        title="Microsoft 365"
        subtitle="Licenciamiento, implementación y administración."
      >
        <div id="m365" className="grid lg:grid-cols-2 gap-8">
          <div className="prose max-w-none">
            <p>
              Configuramos correo, OneDrive/SharePoint, Teams, seguridad
              (MFA/Conditional Access) y buenas prácticas de identidad.<br/>También gestionamos licencias Business y Enterprise, 
              incluyendo Visio y Project.<br/>Migramos desde Gmail/IMAP/Exchange, normalizamos dominios, 
              definimos retenciones y capacitamos a usuarios por rol.
            </p>
            <ul className="list-disc pl-6">
              <li>Migración de buzones con trazabilidad y verificación por usuario..</li>
              <li>Estructura de archivos y permisos en OneDrive/SharePoint.</li>
              <li>Copias y retención para cumplimiento. </li>
              <li>Alta de buzones desde Gmail/IMAP/Exchange.</li>
              <li>Estructura documental con permisos por áreas y control de versiones.</li>
              <li>Retención legal, auditoría unificada y políticas de cumplimiento.</li>
            </ul>
          </div>
          <PricingTable
            tiers={[
              {
                name: "Kickoff",
                price: "Desde $149",
                features: [
                  "Diagnóstico y plan",
                  "Configuración básica de tenant",
                  "MFA y políticas iniciales",
                ],
                cta: { label: "Cotizar", href: "/contacto" },
              },
              {
                name: "Implementación PyME",
                price: "Desde $490",
                highlight: true,
                features: [
                  "Correo + OneDrive/SharePoint",
                  "Migración básica de datos",
                  "Capacitación y adopción",
                ],
                cta: { label: "Cotizar", href: "/contacto" },
              },
              {
                name: "Administrado",
                price: "Mensual",
                features: [
                  "Gestión de licencias",
                  "Soporte y monitoreo",
                  "Mejoras continuas",
                ],
                cta: { label: "Cotizar", href: "/contacto" },
              },
            ]}
          />
        </div>
      </Section>

      {/* Seguridad */}
      <Section
        title="Seguridad & Backup"
        subtitle="Protección avanzada contra amenazas y respaldo integral."
      >
        <div id="seguridad" className="prose max-w-none">
          <p>
            Antivirus/EDR, endurecimiento, copias 3-2-1 y recuperación.<br/>
            Trabajamos con Sophos, Acronis, Veeam y Dropsuite según tu tamaño y
            criticidad.
          </p>
          <ul>
            <li>EDR/antivirus gestionado y alertas.</li>
            <li>Alertas centralizadas y respuesta inicial a incidentes.</li>
            <li>Backups con retención granular y restauración por elemento.</li>
            <li>Backups de equipos, servidores y M365.</li>
            <li>Pruebas de restauración y plan de respuesta.</li>
            <li>Pruebas de recuperación y reporte periódico.</li>
          </ul>
        </div>
      </Section>

      {/* Nube */}
      <Section
        title="Infraestructura en la nube"
        subtitle="Servidores, almacenamiento y redes en Azure y AWS."
      >
        <div id="nube" className="prose max-w-none">
          <p>
            Levantamos cargas en Azure/AWS, redes privadas, túneles/VPN, y
            optimización de costos. Incluye automatizaciones y monitoreo básico.
          </p>
        </div>
      </Section>

      {/* Migraciones */}
      <Section
        title="Migraciones y soporte"
        subtitle="Correo, archivos y directorio; adopción y soporte técnico."
      >
        <div id="migraciones" className="prose max-w-none">
          <p>
            Plan de migración, ventana de cambio, comunicación y soporte al
            usuario. Después administramos tu entorno con un esquema mensual
            flexible.
          </p>
        </div>
        
        <div className="mt-8 flex gap-3">
          <a href="https://wa.me/50768886778" target="_blank" className="btn-primary">Pedir propuesta</a>
          <a href="/contacto" className="btn-ghost">Escribir requerimiento</a>
        </div>

      </Section>

      {/* FAQ */}
      <Section title="Preguntas frecuentes">
        <FAQ
          items={[
            {
              q: "¿Pueden solo venderme las licencias?",
              a: "Sí. También podemos acompañarte con la implementación cuando lo necesites.",
            },
            {
              q: "¿Cómo calculan el costo de migración?",
              a: "Depende de usuarios, volumen de datos y complejidad (permisos, dominios, coexistencia). Te damos un estimado claro antes de empezar.",
            },
            {
              q: "¿Ofrecen soporte mensual?",
              a: "Sí, con bolsas de horas o tarifa plana según el tamaño de tu organización.",
            },
          ]}
        />
      </Section>
    </>
  );
}
