import Section from "@/components/Section";

export default function Page() {
  const sectores = [
    {
      t: "Gobierno",
      d: "Orientado a cumplimiento, seguridad y continuidad operativa.",
    },
    {
      t: "Educación",
      d: "Herramientas de colaboración y aulas virtuales con costos optimizados.",
    },
    {
      t: "Salud",
      d: "Respaldo de información crítica y acceso seguro para personal clínico.",
    },
    {
      t: "PyMEs",
      d: "Productividad y seguridad sin complejidad, con soporte cercano.",
    },
  ];
  return (
    <>
      <Section title="Sectores" subtitle="Experiencia aplicada a tu realidad.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectores.map((s) => (
            <div key={s.t} className="card">
              <h3 className="font-semibold">{s.t}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
