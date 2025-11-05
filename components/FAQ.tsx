type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  return (
    <div className="divide-y rounded-2xl border">
      {items.map((it, i) => (
        <details key={i} className="p-5 group">
          <summary className="cursor-pointer font-medium select-none">
            {it.q}
          </summary>
          <p className="mt-2 text-gray-600">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
