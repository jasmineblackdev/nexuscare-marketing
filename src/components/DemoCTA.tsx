import { useState } from 'react'
import { CONTACT_EMAIL } from '@/lib/constants'

export default function DemoCTA() {
  const [email, setEmail]       = useState('')
  const [name, setName]         = useState('')
  const [org, setOrg]           = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    const subject = encodeURIComponent('Demo Request — NexusCare')
    const body    = encodeURIComponent(
      `Name: ${name}\nOrganization: ${org}\nEmail: ${email}\n\nI'd like to request a demo of NexusCare.`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="demo" className="py-24 px-6 bg-warm">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-navy p-10 md:p-14 overflow-hidden relative">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-4">Request a Demo</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                See NexusCare in action — built around your workflow.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Book a 30-minute live demo. We'll walk through your referral process,
                show you exactly how NexusCare fits your operation, and answer your questions.
              </p>
              <ul className="space-y-3">
                {[
                  'Live walkthrough tailored to your role',
                  'No commitment or credit card required',
                  'Response within 1 business day',
                  'Free plan available to start immediately',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl p-7 shadow-xl">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2">Request received.</h3>
                  <p className="text-slate text-sm">We'll be in touch within 1 business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate uppercase tracking-wide mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full rounded-lg border border-navy/15 bg-warm px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal/40 placeholder-slate/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate uppercase tracking-wide mb-1.5">Organization</label>
                    <input
                      type="text"
                      value={org}
                      onChange={e => setOrg(e.target.value)}
                      placeholder="Sunrise Senior Living"
                      className="w-full rounded-lg border border-navy/15 bg-warm px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal/40 placeholder-slate/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate uppercase tracking-wide mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="jane@yourorg.com"
                      className="w-full rounded-lg border border-navy/15 bg-warm px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal/40 placeholder-slate/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-teal py-3.5 text-sm font-bold text-white hover:bg-teal-dark transition-colors shadow-md shadow-teal/20 mt-2"
                  >
                    Request My Demo
                  </button>
                  <p className="text-center text-xs text-slate/60">
                    Your information is never shared or sold.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Existing users CTA */}
        <div id="contact" className="mt-8 text-center">
          <p className="text-sm text-slate">
            Already a NexusCare customer?{' '}
            <a href="#" className="font-semibold text-teal hover:text-teal-dark transition-colors">
              Log In to Your Account →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
