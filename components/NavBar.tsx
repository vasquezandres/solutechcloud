"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Paperclip } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/gobierno", label: "Gobierno" },
  { href: "/sectores", label: "Sectores" },
  { href: "/casos", label: "Casos" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container-limit flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-9 grid place-items-center rounded-xl bg-brand text-white font-black">S</div>
          <span className="font-semibold">SolutechCloud</span>
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
