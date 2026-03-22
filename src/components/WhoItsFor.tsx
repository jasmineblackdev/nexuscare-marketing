const personas = [
  {
    role:    'Senior Living Operators',
    tagline: 'Manage census with confidence.',
    pain:    'Flying blind on referral volume, payor mix, and team performance across buildings.',
    value:   'See every referral, every liaison, and every admission trend in one place — across your entire portfolio.',
    icon:    '🏢',
  },
  {
    role:    'Admissions & Intake Teams',
    tagline: 'Respond faster. Win more.',
    pain:    'Referrals arrive from too many channels and fall through the cracks before you can act.',
    value:   'One inbox for every referral. Real-time alerts. AI-assisted routing so you always know the right next step.',
    icon:    '📥',
  },
  {
    role:    'Liaison Managers & Field Teams',
    tagline: 'Coordinate from anywhere.',
    pain:    'Liaisons are logging visits on paper or not at all, and managers have no live visibility.',
    value:   'Mobile-first tools so liaisons can update status, attach documents, and log visits between appointments.',
    icon:    '📱',
  },
  {
    role:    'Executive Directors',
    tagline: 'See the full picture.',
    pain:    'Decision-making based on weekly reports that are already out of date by the time you see them.',
    value:   'Live dashboards showing census trends, conversion rates, payor mix impact, and team performance.',
    icon:    '📈',
  },
  {
    role:    'Regional Leaders',
    tagline: 'Oversee every building.',
    pain:    'No consistent visibility across facilities — each building operates in its own silo.',
    value:   'Portfolio-level reporting with building-by-building drill-down. Spot problems before they become patterns.',
    icon:    '🗺️',
  },
  {
    role:    'Healthcare Referral Teams',
    tagline: 'Connect your network.',
    pain:    'Hospital relationships managed through individual contacts with no institutional memory.',
    value:   'Built-in Hospital CRM tracks every discharge planner, social worker, and referral relationship your team has.',
    icon:    '🤝',
  },
]

export default function WhoItsFor() {
  return (
    <section id="who" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-4">Built for Your Team</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
            Every role. One platform.
          </h2>
          <p className="text-lg text-slate max-w-xl mx-auto leading-relaxed">
            NexusCare gives every person in your admissions workflow a purpose-built
            view — not a generic dashboard that doesn't fit how they actually work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map(p => (
            <div
              key={p.role}
              className="rounded-2xl border border-navy/8 bg-warm p-6 hover:border-teal/40 hover:shadow-md transition-all group"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-display font-bold text-navy mb-1">{p.role}</h3>
              <p className="text-xs font-semibold text-teal mb-3">{p.tagline}</p>
              <p className="text-xs text-slate/70 mb-3 italic">"{p.pain}"</p>
              <p className="text-sm text-slate leading-relaxed">{p.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
