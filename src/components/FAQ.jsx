export default function FAQ() {
  const faqs = [
    { q: 'Can I customize the design?', a: 'Yes, everything is built with Tailwind so tweaking colors, spacing, and typography is quick.' },
    { q: 'Is the waitlist stored securely?', a: 'Leads are saved to your database with timestamps. No third-party form tools needed.' },
    { q: 'Can I add payments later?', a: 'Absolutely. Stripe can be added for checkout or subscriptions when you’re ready.' },
  ]

  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-gray-50">
              <summary className="cursor-pointer list-none py-4 px-6 flex items-center justify-between font-medium text-gray-900">
                {f.q}
                <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
