import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ArrowRight } from "lucide-react";

type ServiceHeroProps = {
  eyebrow: string; // ej: "Servicio · Microsoft 365"
  title: React.ReactNode;
  description: string;
  highlights?: string[]; // bullets cortos
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  highlights,
}: ServiceHeroProps) {
  return (
    <section className="pt-4 pb-10 lg:pb-16">
      <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
        {eyebrow}
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-gray-900 max-w-4xl">
        {title}
      </h1>

      <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
        {description}
      </p>

      {highlights && highlights.length > 0 && (
        <ul className="mt-6 grid sm:grid-cols-2 gap-2 max-w-2xl">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <span className="mt-1 size-1.5 rounded-full bg-brand shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/contacto/"
          className="btn-primary"
        >
          Solicitar cotización
          <ArrowRight className="size-4" />
        </Link>

        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium border border-gray-200 hover:border-brand hover:text-brand transition-colors"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-green-600"
          />
          WhatsApp
        </a>
      </div>
    </section>
  );
}
