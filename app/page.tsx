import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { Shield, Server, Cloud, Mail } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const features = [
    {
      title: "Microsoft 365",
      desc: "Licencias, administración, correo, OneDrive/SharePoint y seguridad.",
      icon: <Mail className="text-brand" />,
      href: "/servicios#m365",
    },
    {
      title: "Seguridad & Backup",
      desc: "EDR/antivirus, copias 3-2-1, retención y recuperación ante incidentes.",
      icon: <Shield className="text-brand" />,
      href: "/servicios#seguridad",
    },
    {
      title: "Nube (Azure/AWS)",
      desc: "Infraestructura, servidores, redes privadas, túneles y VPN.",
      icon: <Cloud className="text-brand" />,
      href: "/servicios#nube",
    },
    {
      title: "Migraciones y soporte",
      desc: "Correo, archivos, usuarios; adopción y soporte técnico continuo.",
      icon: <Server className="text-brand" />,
      href: "/servicios#migraciones",
    },
  ];

  return (
    <>
      <Hero />

      <Section
        title="Servicios clave"
        subtitle="Diseñados para pymes, educación, salud y gobierno."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Link key={f.title} href={f.href} className="block">
              <FeatureCard title={f.title} desc={f.desc} icon={f.icon} />
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="¿Por qué SolutechCloud?"
        subtitle="Soluciones reales a problemas tecnológicos — con precios claros y soporte cercano."
      >
        <ul className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <li className="card">• Experiencia en licenciamiento Microsoft 365 (incl. Visio/Project/Windows/Server).</li>
          <li className="card">• Seguridad con Sophos/Acronis/Veeam/Dropsuite y mejores prácticas 3-2-1.</li>
          <li className="card">• Infraestructura en Azure/AWS, correo/archivos en nube y redes privadas.</li>
        </ul>
        <div className="mt-6">
          <Link href="/contacto" className="btn-primary">Solicitar cotización</Link>
        </div>
      </Section>
    </>
  );
}
