const tiers = [
  {
    name:     'Bronze',
    price:    'Free',
    sub:      'Forever',
    highlight: false,
    desc:     'Perfect for independent liaisons and small facilities testing the platform.',
    features: [
      'Solo practitioner (1 liaison)',
      'Basic referral inbox',
      'Mobile app notifications',
      'Accept / decline workflow',
      'Basic analytics',
    ],
    cta:      'Get Started Free',
    ctaHref:  '#demo',
  },
  {
    name:     'Silver',
    price:    '$449',
    sub:      'per building / month',
    highlight: true,
    desc:     'Perfect for single buildings and 1–3 building operators ready to grow.',
    features: [
      'Everything in Bronze',
      'CarePort auto-population',
      'Response time SLA tracking',
      'Real-time bed availability',
      'Lost referral analysis',
      'Insurance verification (100/mo)',
      'Calendar integration',
      'Patient SMS reminders',
      'Standard support',
    ],
    cta:      'Request Demo',
    ctaHref:  '#demo',
  },
  {
    name:     'Gold',
    price:    '$749',
    sub:      'per building / month',
    highlight: false,
    desc:     'For regional operators who need full competitive intelligence and automation.',
    features: [
      'Everything in Silver',
      'Hospital CRM & contact management',
      'Liaison visit tracking & ROI',
      'Automated follow-up sequences',
      'Competitive intelligence tools',
      'Payor mix optimizer',
      'AI Referral Win Predictor',
      'Empty Bed Revenue Tracker',
      'Priority support',
    ],
    cta:      'Request Demo',
    ctaHref:  '#demo',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Start Free. Scale as You Grow.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            No long-term contracts. No per-seat fees. One price per building — and a free
            tier to get started today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map(t => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 border ${
                t.highlight
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200 scale-105'
                  : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              {t.highlight && (
                <div className="mb-3 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <p className={`text-sm font-bold uppercase tracking-widest mb-1 ${t.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                {t.name}
              </p>
              <div className="flex items-end gap-1 mb-1">
                <span className={`text-4xl font-extrabold ${t.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {t.price}
                </span>
              </div>
              <p className={`text-xs mb-4 ${t.highlight ? 'text-blue-200' : 'text-gray-400'}`}>{t.sub}</p>
              <p className={`text-sm mb-6 leading-relaxed ${t.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                {t.desc}
              </p>
              <ul className="space-y-2 mb-8">
                {t.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${t.highlight ? 'text-white' : 'text-gray-600'}`}>
                    <span className={`mt-0.5 shrink-0 ${t.highlight ? 'text-blue-200' : 'text-blue-500'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={t.ctaHref}
                className={`block w-full text-center rounded-xl py-3 text-sm font-bold transition-colors ${
                  t.highlight
                    ? 'bg-white text-blue-700 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          All plans include unlimited referrals and HIPAA-compliant data storage.
          No setup fees. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
