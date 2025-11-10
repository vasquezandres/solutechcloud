import Link from "next/link";
export default function Hero() {
  return (
    <section className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-black leading-tight">
          Nube y productividad con <span className="text-brand">SolutechCloud</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Microsoft 365, seguridad y respaldo, Azure/AWS, migraciones y soporte. Todo con enfoque práctico y precios claros.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/contacto" className="btn-primary">Solicitar cotización</Link>
          <Link href="/servicios" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border font-medium">
            Ver servicios
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-brand/20 to-fuchsia-200 grid place-items-center text-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/img/hero.webp"
              alt="Nube y productividad con SolutechCloud"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
