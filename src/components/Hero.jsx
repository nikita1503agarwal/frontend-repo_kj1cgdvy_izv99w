export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs bg-blue-100 text-blue-700">
            New • Personal SaaS starter
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Launch your personal SaaS in days, not months
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            A clean, modern landing page with built‑in waitlist capture and a ready API. Tweak copy, add payments later, and ship.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#waitlist" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Join the waitlist</a>
            <a href="#features" className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black">See features</a>
          </div>
          <p className="mt-3 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-gray-600">
              Your product screenshot here
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
