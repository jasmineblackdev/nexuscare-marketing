import { useState } from 'react'
import { APP_URL } from '@/lib/constants'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src="/logo.png" alt="NexusCare" className="h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate">
          <a href="#how-it-works" className="hover:text-navy transition-colors">How It Works</a>
          <a href="#features"     className="hover:text-navy transition-colors">Features</a>
          <a href="#who"          className="hover:text-navy transition-colors">Who It's For</a>
          <a href="#pricing"      className="hover:text-navy transition-colors">Pricing</a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-semibold text-navy hover:text-teal transition-colors"
          >
            Log In
          </a>
          <a
            href="#demo"
            className="rounded-lg bg-teal px-5 py-2 text-sm font-semibold text-white hover:bg-teal-dark transition-colors shadow-sm"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden p-2 rounded-lg text-navy hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-5 space-y-4">
          <a href="#how-it-works" onClick={() => setOpen(false)} className="block text-sm font-medium text-slate">How It Works</a>
          <a href="#features"     onClick={() => setOpen(false)} className="block text-sm font-medium text-slate">Features</a>
          <a href="#who"          onClick={() => setOpen(false)} className="block text-sm font-medium text-slate">Who It's For</a>
          <a href="#pricing"      onClick={() => setOpen(false)} className="block text-sm font-medium text-slate">Pricing</a>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a href={`${APP_URL}/login`} className="text-sm font-semibold text-navy">Log In to Your Account</a>
            <a href="#demo" onClick={() => setOpen(false)} className="rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white text-center">Request a Demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
