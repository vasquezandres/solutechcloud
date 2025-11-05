"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`text-sm font-medium hover:text-brand ${pathname === l.href ? "text-brand" : "text-gray-700"}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primary text-sm">Cotiza ahora</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl border"><Menu className="size-5" /></button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-limit py-3 grid gap-3">
            {links.map((l) => (<Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="py-2">{l.label}</Link>))}
            <Link href="/contacto" className="btn-primary justify-center" onClick={()=>setOpen(false)}>Cotiza ahora</Link>
          </div>
        </div>
      )}
    </header>
  );
}
