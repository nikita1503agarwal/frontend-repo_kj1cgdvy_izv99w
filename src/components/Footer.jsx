export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100 text-sm text-gray-500">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} SaaS Kit. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-gray-700">Features</a>
          <a href="#pricing" className="hover:text-gray-700">Pricing</a>
          <a href="#faq" className="hover:text-gray-700">FAQ</a>
        </div>
      </div>
    </footer>
  )
}
