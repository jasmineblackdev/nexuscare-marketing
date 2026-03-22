import { useState } from 'react'
import { APP_URL } from '@/lib/constants'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-extrabold text-xl text-gray-900 tracking-tight">
          Nexus<span className="text-blue-600">Care</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#what-we-do" className="hover:text-gray-900 transition-colors">How It Works</a>
          <a href="#features"   className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#who"        className="hover:text-gray-900 transition-colors">Who It's For</a>
          <a href="#pricing"    className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#contact"    className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
          >
            Log In
          </a>
          <a
            href="#demo"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          <a href="#what-we-do" onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700">How It Works</a>
          <a href="#features"   onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700">Features</a>
          <a href="#who"        onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700">Who It's For</a>
          <a href="#pricing"    onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700">Pricing</a>
          <a href="#contact"    onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700">Contact</a>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a href={`${APP_URL}/login`} className="text-sm font-semibold text-gray-700">Log In</a>
            <a href="#demo" onClick={() => setOpen(false)} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white text-center">Request Demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
