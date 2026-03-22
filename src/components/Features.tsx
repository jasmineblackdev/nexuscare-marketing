const features = [
  {
    icon:  '📋',
    title: 'Referral Pipeline Visibility',
    desc:  'Every referral tracked from first contact through intake, review, authorization, and admission — with full history, status, and audit trail.',
  },
  {
    icon:  '📍',
    title: 'Liaison Workflow Coordination',
    desc:  'Assign, track, and communicate with field liaisons in real time. Mobile-first tools let them log visits, attach documents, and update referral status from anywhere.',
  },
  {
    icon:  '🔔',
    title: 'Real-Time Admission Updates',
    desc:  'Live status tracking with automated alerts keeps your team aligned on every active referral — no more calling around to find out where things stand.',
  },
  {
    icon:  '📂',
    title: 'Document Access & Review',
    desc:  'Clinical summaries, insurance cards, and authorization paperwork accessible in one place — by the right people at the right time.',
  },
  {
    icon:  '🏥',
    title: 'Hospital CRM & Relationship Tracking',
    desc:  'Track every referral source, discharge planner, and hospital relationship. Know which contacts send your best referrals and invest your liaison time accordingly.',
  },
  {
    icon:  '📊',
    title: 'Analytics & Team Performance',
    desc:  'Conversion rates, response times, win/loss analysis, and liaison activity — all surfaced in dashboards designed for operators, not IT teams.',
  },
  {
    icon:  '💰',
    title: 'Payor Mix Intelligence',
    desc:  'Understand the revenue impact of every admission decision. AI-assisted payor mix optimization helps you accept the referrals that improve your census quality.',
  },
  {
    icon:  '⚡',
    title: 'AI Referral Routing',
    desc:  'Smart matching surfaces the best placement option for each referral based on clinical fit, available beds, and payor priority. Respond with confidence, not guesswork.',
  },
  {
    icon:  '🔒',
    title: 'HIPAA-Ready & Audit-Logged',
    desc:  'Role-based access control, full audit logging, and encrypted data storage — built for healthcare compliance from the ground up.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-warm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-4">Platform Features</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
            Everything your admissions team needs.<br />Nothing they don't.
          </h2>
          <p className="text-lg text-slate max-w-xl mx-auto leading-relaxed">
            15+ purpose-built features versus 0–3 at legacy tools. NexusCare replaces
            your disconnected stack with a single, integrated workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div
              key={f.title}
              className="rounded-2xl bg-white border border-navy/8 p-6 hover:border-teal/40 hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-display font-bold text-navy mb-2">{f.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
