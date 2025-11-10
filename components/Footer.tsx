import Link from "next/link";
export function Footer(){
  return (
    <footer className="mt-24 border-t">
      <div className="container-limit py-10 text-sm grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="size-9 grid place-items-center rounded-xl bg-brand text-white font-black">S</div>
            <span className="font-semibold">SolutechCloud</span>
          </div>
          <p className="mt-3 text-gray-600">Soluciones reales a problemas tecnológicos. Licenciamiento, nube, seguridad y soporte.</p>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href="https://clip.solutechcloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faPaperclip} className="text-white text-lg" />
            Clip Solutech Cloud
          </a>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Enlaces</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/sectores">Sectores</Link></li>
            <li><Link href="/casos">Casos</Link></li>
            <li><Link href="/politica-de-privacidad">Privacidad</Link></li>
            <li><Link href="/politica-de-cookies">Cookies</Link></li>
            <li><Link href="/terminos-y-condiciones">Términos</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <p className="text-gray-600">
            Panamá · WhatsApp <a className="underline" href="https://wa.me/50768886778" target="_blank">+507 6888-6778</a><br/>
            Soporte: <a className="underline" href="mailto:soporte@solutechpanama.com">soporte@solutechpanama.com</a>
          </p>
        </div>
      </div>
      <div className="text-center py-6 text-xs text-gray-500">© {new Date().getFullYear()} Solutech Panamá</div>
    </footer>
  );
}
