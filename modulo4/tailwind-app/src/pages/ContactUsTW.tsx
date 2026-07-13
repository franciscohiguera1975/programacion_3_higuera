
export default function ContactUsTW() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-6">Contáctanos</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Teléfono: +1 (123) 456-7890
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Correo electrónico: info@company.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Dirección: 123 Calle Principal, Ciudad, País
            </li>
          <li className="flex items-center gap-2">
              <span className="text-blue-400">→</span> Redes sociales:
              <ul className="ml-4 space-y-1">
                <li>
                  <a href="https://twitter.com/company" className="text-blue-400 hover:underline">Twitter</a>
                </li>
                <li>
                  <a href="https://facebook.com/company" className="text-blue-400 hover:underline">Facebook</a>
                </li>
                <li>
                  <a href="https://instagram.com/company" className="text-blue-400 hover:underline">Instagram</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}