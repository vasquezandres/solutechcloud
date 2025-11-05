export default function ContactForm() {
  return (
    <form
      className="card grid gap-4 max-w-2xl"
      action="mailto:soporte@solutechpanama.com"
      method="get"
    >
      <div className="grid gap-2">
        <label className="text-sm font-medium">Nombre y empresa</label>
        <input
          name="subject"
          required
          className="rounded-xl border px-3 py-2"
          placeholder="Tu nombre · Empresa"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium">Mensaje</label>
        <textarea
          name="body"
          className="rounded-xl border px-3 py-2 min-h-[140px]"
          placeholder="Cuéntanos qué necesitas (licencias, migración, seguridad, etc.)"
        />
      </div>
      <button className="btn-primary w-fit">Enviar</button>
      <p className="text-xs text-gray-500">
        También por WhatsApp:{" "}
        <a className="underline" href="https://wa.me/50768886778" target="_blank">
          +507 6888-6778
        </a>
      </p>
    </form>
  );
}
