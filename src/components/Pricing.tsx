const tiers = [
  {
    name:      'Bronze',
    price:     'Free',
    sub:       'Forever — no credit card needed',
    highlight: false,
    desc:      'For independent liaisons and small facilities testing the platform.',
    features:  [
      '1 liaison (solo practitioner)',
      'Basic referral inbox',
      'Mobile app notifications',
      'Accept / decline workflow',
      'Basic analytics',
    ],
    cta:      'Get Started Free',
    ctaHref:  '#demo',
  },
  {
    name:      'Silver',
    price:     '$449',
    sub:       'per building / month',
    highlight: true,
    desc:      'For single buildings and 1–3 building operators ready to grow referral volume.',
    features:  [
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
    name:      'Gold',
    price:     '$749',
    sub:       'per building / month',
    highlight: false,
    desc:      'For regional operators who need full competitive intelligence and automation.',
    features:  [
      'Everything in Silver',
      'Hospital CRM & relationship tracking',
      'Liaison visit tracking & ROI reporting',
      'Automated follow-up sequences',
      'AI Referral Win Predictor',
      'Payor mix optimizer',
      'Empty Bed Revenue Tracker',
      'Competitive intelligence tools',
      'Priority support',
    ],
    cta:      'Request Demo',
    ctaHref:  '#demo',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
            Start free. Scale as you grow.
          </h2>
          <p className="text-lg text-slate max-w-xl mx-auto leading-relaxed">
            One price per building. No per-seat fees, no long-term contracts.
            A free plan to get started today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map(t => (
            <div
              key={t.name}
              className={`rounded-2xl p-7 border transition-all ${
                t.highlight
                  ? 'bg-navy border-navy shadow-2xl shadow-navy/20 scale-105'
                  : 'bg-warm border-navy/10 shadow-sm hover:shadow-md'
              }`}
            >
              {t.highlight && (
                <div className="mb-4 inline-flex items-center rounded-full bg-teal/20 px-3 py-1 text-xs font-bold text-teal uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${t.highlight ? 'text-gray-400' : 'text-slate/60'}`}>
                {t.name}
              </p>
              <div className="flex items-end gap-1 mb-1">
                <span className={`font-display text-4xl font-extrabold ${t.highlight ? 'text-white' : 'text-navy'}`}>
                  {t.price}
                </span>
              </div>
              <p className={`text-xs mb-4 ${t.highlight ? 'text-gray-400' : 'text-slate/60'}`}>{t.sub}</p>
              <p className={`text-sm mb-6 leading-relaxed ${t.highlight ? 'text-gray-300' : 'text-slate'}`}>
                {t.desc}
              </p>

              <ul className="space-y-2.5 mb-8">
                {t.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${t.highlight ? 'text-gray-200' : 'text-slate'}`}>
                    <span className={`shrink-0 mt-0.5 font-bold ${t.highlight ? 'text-teal' : 'text-teal'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={t.ctaHref}
                className={`block w-full text-center rounded-xl py-3 text-sm font-bold transition-colors ${
                  t.highlight
                    ? 'bg-teal text-white hover:bg-teal-dark'
                    : 'bg-navy text-white hover:bg-navy-light'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate mt-8">
          All plans include unlimited referrals, HIPAA-compliant storage, and mobile access.
          No setup fees. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
