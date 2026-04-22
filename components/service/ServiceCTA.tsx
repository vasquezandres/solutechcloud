import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ArrowRight } from "lucide-react";

type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

export function ServiceCTA({
  title = "¿Hablamos de tu proyecto?",
  description = "Cuéntanos brevemente qué necesitas y te respondemos en menos de 24 horas hábiles con una propuesta clara.",
  related = [],
}: {
  title?: string;
  description?: string;
  related?: RelatedLink[];
}) {
  return (
    <>
      <section className="mt-20 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="mt-3 text-gray-300 text-lg leading-relaxed">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacto/"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Solicitar cotización
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium border border-white/20 hover:bg-white/10 transition-colors"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-green-400"
              />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            También te puede interesar
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card hover:shadow-md hover:border-brand/30 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-brand font-medium">
                  Ver más
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
