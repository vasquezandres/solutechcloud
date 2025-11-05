export default function Page() {
  return (
    <article className="prose max-w-none">
      <h1>Cómo adquirir Microsoft 365 para el sector público en Panamá</h1>
      <p>
        Guía resumida para entidades del sector público: modalidades de compra,
        licenciamiento y consideraciones de cumplimiento.
      </p>

      <h2>Modalidades de licenciamiento</h2>
      <ul>
        <li>Empresas/Entidades públicas con Microsoft 365 Business o Enterprise.</li>
        <li>Agregadores/Partners autorizados para compras institucionales.</li>
        <li>Pagos anuales o mensuales según política y presupuesto.</li>
      </ul>

      <h2>Buenas prácticas</h2>
      <ul>
        <li>MFA/Conditional Access para todos los usuarios.</li>
        <li>Retención y auditoría de correo/documentos.</li>
        <li>Backups de M365 (Acronis/Veeam/Dropsuite según caso).</li>
      </ul>

      <h2>¿Necesitas ayuda?</h2>
      <p>
        Podemos acompañarte en la selección de licencias, configuración del
        tenant, migración de buzones y adopción de herramientas.
      </p>
      <p>
        <a className="btn-primary" href="/contacto">Solicita una cotización</a>
      </p>
    </article>
  );
}
