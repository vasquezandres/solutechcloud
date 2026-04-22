import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle2, Award, Users, Target, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Sobre nosotros — Partner tecnológico en Panamá y Centroamérica",
  description:
    "Somos Solutech Panamá. Microsoft Partner, proveedor de servicios cloud, seguridad y migraciones para empresas y sector público en Centroamérica.",
  path: "/sobre-nosotros/",
});

const values = [
  {
    icon: Target,
    title: "Claridad técnica",
    desc: "Propuestas entendibles, sin humo. Explicamos qué hacemos, cómo y por qué.",
  },
  {
    icon: CheckCircle2,
    title: "Compromiso con plazos",
    desc: "Planificamos realistamente y cumplimos. Si algo se mueve, lo comunicamos temprano.",
  },
  {
    icon: Users,
    title: "Soporte cercano",
    desc: "Respondemos en español, por WhatsApp o correo. Sin tickets perdidos ni respuestas genéricas.",
  },
  {
    icon: Award,
    title: "Herramientas probadas",
    desc: "Microsoft, Sophos, Acronis, Veeam, Dropsuite. No inventamos, aplicamos lo que funciona.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[]} current="Sobre nosotros" />

      <section className="pt-4 pb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Sobre Solutech Cloud
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gray-900 max-w-3xl">
          Partner tecnológico serio para{" "}
          <span className="text-brand">organizaciones que valoran el detalle</span>
        </h1>
      </section>

      <section className="mt-4 max-w-3xl">
        <div className="prose prose-gray">
          <p className="text-lg leading-relaxed">
            <strong>{siteConfig.legalName}</strong> es una empresa panameña dedicada al licenciamiento Microsoft, infraestructura en la nube, seguridad y migraciones. Operamos en Panamá y Centroamérica, atendiendo tanto al sector privado como a entidades públicas.
          </p>
          <p>
            Trabajamos con organizaciones que entienden que la tecnología no es un gasto, sino un habilitador del negocio. Nuestro enfoque combina transparencia técnica, herramientas probadas y soporte cercano en español.
          </p>
          <p>
            Somos <strong>Microsoft Partner</strong>, estamos registrados en <strong>PanamaCompra</strong> para participar en licitaciones públicas, y estamos en proceso de crecimiento hacia el nivel <em>Solutions Partner</em> con designación Modern Work.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Cómo trabajamos
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            No tenemos un manifiesto corporativo inflado. Estos son los principios prácticos que guían cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="card">
                <div className="size-10 grid place-items-center rounded-xl bg-brand/10 text-brand mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Credenciales */}
      <section className="mt-16 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Credenciales y alianzas
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
          Trabajamos con las plataformas y proveedores de referencia en cada categoría.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {[
            "Microsoft Partner",
            "Microsoft 365 CSP",
            "Microsoft Azure",
            "Amazon AWS",
            "Sophos",
            "Acronis",
            "Veeam",
            "Dropsuite",
            "Registrados en PanamaCompra",
          ].map((c) => (
            <div
              key={c}
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <CheckCircle2 className="size-4 text-green-600 shrink-0" />
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="mt-3 text-gray-300 text-lg leading-relaxed">
            Nos gusta conocer el contexto antes de proponer. Cuéntanos en qué estás y qué objetivos tienes.
          </p>
          <div className="mt-6">
            <Link
              href="/contacto/"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Contáctanos
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
