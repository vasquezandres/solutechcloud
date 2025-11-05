import Section from "@/components/Section";

export default function Page() {
  const casos = [
    {
      t: "Migración de correo a Microsoft 365",
      r: "45 usuarios · 180 GB",
      d: "Se migró desde Google Workspace a M365. Se normalizaron dominios, se aplicó MFA y se capacitó a usuarios.",
    },
    {
      t: "Respaldo y recuperación",
      r: "M365 + PCs",
      d: "Se implementó copia 3-2-1 con retención legal y pruebas de restauración trimestrales.",
    },
  ];
  return (
    <>
      <Section title="Casos" subtitle="Resultados concretos.">
        <div className="grid md:grid-cols-2 gap-6">
          {casos.map((c) => (
            <article key={c.t} className="card">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="text-xs text-gray-500 mt-1">{c.r}</p>
              <p className="mt-3 text-gray-700 text-sm">{c.d}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
