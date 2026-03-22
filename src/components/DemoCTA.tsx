import { useState } from 'react'
import { CONTACT_EMAIL } from '@/lib/constants'

export default function DemoCTA() {
  const [email, setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)

    // Send to your contact email via mailto fallback
    // Replace with a form backend (Resend, Formspree, etc.) when ready
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=Demo Request&body=Hi, I'd like to request a demo. My email is: ${encodeURIComponent(email)}`

    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="demo" className="py-24 px-6 bg-blue-600">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          See NexusCare in Action
        </h2>
        <p className="text-blue-100 text-lg mb-10 leading-relaxed">
          Book a 30-minute demo. We'll walk through your specific workflow and show you
          exactly how NexusCare fits your operation.
        </p>

        {submitted ? (
          <div className="rounded-2xl bg-white/10 border border-white/20 px-8 py-10">
            <p className="text-white font-bold text-xl mb-2">Thank you!</p>
            <p className="text-blue-100">We'll be in touch within 1 business day.</p>
          </div>
        ) : (
          <form
            id="contact"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-white text-blue-700 font-bold px-6 py-3.5 text-sm hover:bg-blue-50 transition-colors whitespace-nowrap disabled:opacity-60 shadow-sm"
            >
              {loading ? 'Sending…' : 'Request Demo'}
            </button>
          </form>
        )}

        <p className="text-blue-200 text-xs mt-5">
          No commitment. No credit card. We'll reach out within 1 business day.
        </p>
      </div>
    </section>
  )
}
