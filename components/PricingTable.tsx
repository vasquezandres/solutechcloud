type Tier = {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
  cta?: { label: string; href: string };
};

export default function PricingTable({ tiers }: { tiers: Tier[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((t) => (
        <div
          key={t.name}
          className={`card ${t.highlight ? "ring-2 ring-brand" : ""}`}
        >
          <h3 className="text-lg font-semibold">{t.name}</h3>
          <div className="mt-2 text-3xl font-black">{t.price}</div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {t.features.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
          {t.cta && (
            <a
              href={t.cta.href}
              className="btn-primary mt-6 inline-flex"
            >
              {t.cta.label}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
