"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Paperclip } from "lucide-react";
import { useState } from "react";

const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  {
    href: "/servicios/",
    label: "Servicios",
    children: [
      {
        href: "/servicios/microsoft-365/",
        label: "Microsoft 365",
        desc: "Licenciamiento, migración y soporte",
      },
      {
        href: "/servicios/correo-corporativo/",
        label: "Correo corporativo",
        desc: "Dominio propio, seguro y profesional",
      },
      {
        href: "/servicios/azure/",
        label: "Azure",
        desc: "Infraestructura cloud Microsoft",
      },
      {
        href: "/servicios/aws/",
        label: "AWS",
        desc: "Infraestructura cloud Amazon",
      },
      {
        href: "/servicios/seguridad-y-backup/",
        label: "Seguridad y backup",
        desc: "Protección integral de datos",
      },
      {
        href: "/servicios/migraciones/",
        label: "Migraciones",
        desc: "Transiciones sin pérdidas",
      },
    ],
  },
  {
    href: "/soluciones/",
    label: "Soluciones",
    children: [
      {
        href: "/soluciones/sector-publico/",
        label: "Sector público",
        desc: "Gobierno y entidades estatales",
      },
      {
        href: "/soluciones/empresas/",
        label: "Empresas",
        desc: "Organizaciones medianas y grandes",
      },
      {
        href: "/soluciones/pymes/",
        label: "PyMEs",
        desc: "Pequeñas y medianas empresas",
      },
      {
        href: "/soluciones/educacion/",
        label: "Educación",
        desc: "Instituciones educativas",
      },
      {
        href: "/soluciones/salud/",
        label: "Salud",
        desc: "Clínicas y centros médicos",
      },
    ],
  },
  { href: "/casos-de-exito/", label: "Casos" },
  { href: "/recursos/blog/", label: "Blog" },
  { href: "/sobre-nosotros/", label: "Nosotros" },
  { href: "/contacto/", label: "Contacto" },
];

/* ------------------------------------------------------------------ */
/* Componente                                                         */
/* ------------------------------------------------------------------ */

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container-limit flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="https://cdn.solutechcloud.com/logos/Logo_Solutech_S1a.webp"
            alt="SolutechCloud"
            className="h-9 w-9 object-contain rounded-xl shadow-sm group-hover:shadow-md transition-shadow"
          />
          <span className="font-bold text-gray-900">
            Solutech<span className="text-brand">Cloud</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium hover:text-brand ${
                pathname === l.href ? "text-brand" : "text-gray-700"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Enlace externo a CLIP */}
          <a
            href="https://clip.solutechcloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:text-brand hover:border-brand transition"
            aria-label="Abrir Solutech Clip en una nueva pestaña"
          >
            <Paperclip className="size-4" />
            Clip
          </a>

          <Link href="/contacto" className="btn-primary text-sm">
            Cotiza ahora
          </Link>
        </nav>

        {/* Toggle móvil */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl border" aria-label="Abrir menú">
          <Menu className="size-5" />
        </button>
      </div>

      {/* Móvil */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-limit py-3 grid gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
                {l.label}
              </Link>
            ))}

            {/* Enlace externo a CLIP (móvil) */}
            <a
              href="https://clip.solutechcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-2 inline-flex items-center gap-2"
              aria-label="Abrir Solutech Clip"
            >
              <Paperclip className="size-4" />
              Clip
            </a>

            <Link href="/contacto" className="btn-primary justify-center" onClick={() => setOpen(false)}>
              Cotiza ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
