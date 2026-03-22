const features = [
  {
    icon: '⚡',
    title: 'AI Referral Win Predictor',
    desc:  '+15–20% conversion rate from smarter accept/decline decisions. Know which referrals to fight for before the competition does.',
  },
  {
    icon: '🏥',
    title: 'Hospital Discharge Network',
    desc:  '+40–60% referral volume as hospitals send directly to NexusCare. Build the relationships that own your pipeline.',
  },
  {
    icon: '📊',
    title: 'Empty Bed Revenue Tracker',
    desc:  'See what each empty bed costs per day. Executive buy-in becomes easy when the revenue impact is visible.',
  },
  {
    icon: '📋',
    title: 'Full Referral Pipeline',
    desc:  'Track every referral from intake through clinical review, authorization, and admission — with full history and audit trail.',
  },
  {
    icon: '💰',
    title: 'Payor Mix Optimizer',
    desc:  'Maximize reimbursement by understanding which referrals improve your payor mix and which ones cost you revenue.',
  },
  {
    icon: '🔔',
    title: 'Authorization Tracking',
    desc:  'Automated follow-up alerts mean no auth goes stale. Every pending request is tracked and actioned.',
  },
  {
    icon: '📍',
    title: 'Field Liaison Mobile App',
    desc:  'Log hospital visits, attach clinical documents, and update referral status from your phone — between appointments.',
  },
  {
    icon: '🤝',
    title: 'Hospital CRM',
    desc:  'Track relationships with every discharge planner, social worker, and case manager. Know who sends your best referrals.',
  },
  {
    icon: '🔒',
    title: 'HIPAA-Ready Security',
    desc:  'Role-based access, full audit logs, and encrypted data storage. Built for healthcare compliance from day one.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            15+ Features vs. 0–3 at Competitors
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Operating System for Healthcare Admissions
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Every tool your team needs — in one platform. No more switching between
            spreadsheets, email, and disconnected software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-100 p-6 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
