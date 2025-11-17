import { useState } from 'react'

export default function Waitlist() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing' }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setDone(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <section id="waitlist" className="py-16">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900">You’re on the list! 🎉</h3>
          <p className="mt-2 text-gray-600">We’ll reach out soon with early access.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-16 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Join the waitlist</h2>
          <p className="mt-2 text-gray-600">Get early access and updates.</p>
        </div>
        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-4 bg-white p-6 rounded-lg border border-gray-200">
          <input required placeholder="Name" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
          <input required type="email" placeholder="Email" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
          <input placeholder="Company (optional)" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} />
          <textarea placeholder="Message (optional)" rows="4" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
          {error && <p className="text-red-600 text-sm md:col-span-2">{error}</p>}
          <button disabled={loading} className="md:col-span-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
            {loading ? 'Submitting…' : 'Join waitlist'}
          </button>
        </form>
      </div>
    </section>
  )
}
