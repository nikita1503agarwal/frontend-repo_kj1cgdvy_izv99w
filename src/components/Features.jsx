export default function Features() {
  const items = [
    { title: 'Built-in waitlist', desc: 'Collect emails and messages with a secure API and database connection.' },
    { title: 'Fast by default', desc: 'Vite + React on the front, FastAPI on the back. Deploy-ready.' },
    { title: 'Polished design', desc: 'Modern, responsive UI with Tailwind. Easy to tweak colors and copy.' },
  ]

  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-gray-900">Everything you need to launch</h2>
        <p className="mt-2 text-gray-600">Opinionated defaults so you can focus on your product.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-lg border border-gray-200 p-6 bg-white">
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
