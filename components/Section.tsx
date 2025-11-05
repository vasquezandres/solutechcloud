export default function Section({ title, subtitle, children }:{
  title: string; subtitle?: string; children: React.ReactNode
}) {
  return (
    <section className="mt-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
