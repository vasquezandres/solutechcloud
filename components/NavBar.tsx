"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

/* ------------------------------------------------------------------ */
/* Estructura de navegación                                           */
/* ------------------------------------------------------------------ */

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string; desc?: string }[];
};

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

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    if (!openDropdown) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown]")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [openDropdown]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container-limit flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="size-9 grid place-items-center rounded-xl bg-brand text-white font-black text-lg shadow-sm group-hover:shadow-md transition-shadow">
            S
          </div>
          <span className="font-bold text-gray-900">
            Solutech<span className="text-brand">Cloud</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            if (link.children) {
              const active =
                isActive(link.href) ||
                link.children.some((c) => isActive(c.href));
              const open = openDropdown === link.label;

              return (
                <div
                  key={link.label}
                  data-dropdown
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() =>
                      setOpenDropdown(open ? null : link.label)
                    }
                    className={`px-3 py-2 text-sm font-medium rounded-lg inline-flex items-center gap-1 transition-colors ${
                      active
                        ? "text-brand"
                        : "text-gray-700 hover:text-brand"
                    }`}
                    aria-expanded={open}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={`size-3.5 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {open && (
                    <div
                      className="absolute left-0 top-full pt-2 w-80 z-50"
                      role="menu"
                    >
                      <div className="rounded-2xl border border-gray-100 bg-white shadow-xl p-2">
                        <Link
                          href={link.href}
                          className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-sm font-semibold text-gray-900 border-b border-gray-100 mb-1"
                        >
                          Ver todos →
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                            role="menuitem"
                          >
                            <div className="text-sm font-medium text-gray-900">
                              {child.label}
                            </div>
                            {child.desc && (
                              <div className="text-xs text-gray-500 mt-0.5">
                                {child.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-gray-700 hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contacto/"
            className="ml-2 btn-primary text-sm py-2 px-4"
          >
            Cotizar
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-limit py-3 grid gap-0.5">
            {navLinks.map((link) => {
              if (link.children) {
                const expanded = mobileExpanded === link.label;
                return (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded(expanded ? null : link.label)
                      }
                      className="w-full px-3 py-3 text-left font-medium text-gray-900 flex items-center justify-between rounded-lg hover:bg-gray-50"
                      aria-expanded={expanded}
                    >
                      {link.label}
                      <ChevronDown
                        className={`size-4 transition-transform ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expanded && (
                      <div className="pl-4 pb-2 grid gap-0.5">
                        <Link
                          href={link.href}
                          className="px-3 py-2 text-sm text-brand font-medium rounded-lg hover:bg-gray-50"
                        >
                          Ver todos →
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-3 rounded-lg font-medium ${
                    isActive(link.href)
                      ? "text-brand bg-brand/5"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contacto/"
              className="btn-primary justify-center mt-3"
            >
              Solicitar cotización
            </Link>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm text-gray-600 py-3"
            >
              O escríbenos por WhatsApp →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
