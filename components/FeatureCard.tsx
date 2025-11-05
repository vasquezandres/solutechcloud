import { ReactNode } from "react";

export default function FeatureCard({
  title,
  desc,
  icon,
}: { title: string; desc: string; icon?: ReactNode }) {
  return (
    <div className="card hover:shadow-md transition">
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
