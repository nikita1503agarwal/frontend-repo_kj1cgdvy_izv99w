export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$9/mo', features: ['Up to 1 project', 'Email support', 'Waitlist capture'] },
    { name: 'Pro', price: '$29/mo', features: ['Unlimited projects', 'Priority support', 'Custom domain'] },
    { name: 'Team', price: '$79/mo', features: ['Team access', 'SSO', 'Audit logs'] },
  ]

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-gray-900">Simple pricing</h2>
        <p className="mt-2 text-gray-600">Start small. Upgrade as you grow.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-lg border border-gray-200 p-6 bg-white">
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <p className="text-3xl font-extrabold mt-2">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Get started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
