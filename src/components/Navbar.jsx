import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur bg-white/70 border-b border-gray-100 z-40">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold text-xl tracking-tight">
          <span className="text-gray-900">SaaS</span>
          <span className="text-blue-600">Kit</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <button onClick={() => scrollTo('features')} className="hover:text-gray-900">Features</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-gray-900">Pricing</button>
          <button onClick={() => scrollTo('faq')} className="hover:text-gray-900">FAQ</button>
          <button onClick={() => scrollTo('waitlist')} className="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">Join waitlist</button>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-2 flex flex-col gap-2 text-gray-700">
            <button onClick={() => scrollTo('features')} className="py-2 text-left">Features</button>
            <button onClick={() => scrollTo('pricing')} className="py-2 text-left">Pricing</button>
            <button onClick={() => scrollTo('faq')} className="py-2 text-left">FAQ</button>
            <button onClick={() => scrollTo('waitlist')} className="py-2 text-left">Join waitlist</button>
          </div>
        </div>
      )}
    </header>
  )
}
