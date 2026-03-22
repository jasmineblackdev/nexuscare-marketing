const outcomes = [
  {
    metric: '20–30%',
    label:  'Conversion Rate Improvement',
    desc:   'Teams using NexusCare win more referrals because they respond faster, route smarter, and track every follow-up.',
  },
  {
    metric: '40–60%',
    label:  'More Referral Volume',
    desc:   'The Hospital Discharge Network connects your facility directly to discharge planners — increasing inbound referral flow.',
  },
  {
    metric: '$487K+',
    label:  'Annual Revenue Recovered',
    desc:   'Empty bed tracking surfaces revenue lost to avoidable vacancies, giving leadership the data to act.',
  },
  {
    metric: '< 1hr',
    label:  'Average Referral Response Time',
    desc:   'Real-time alerts and mobile liaison tools mean your team can respond to new referrals before the competition.',
  },
]

const pillars = [
  {
    title: 'Faster Referral Response',
    desc:  'Instant notifications and mobile access mean your team responds in minutes, not hours. First responder wins.',
  },
  {
    title: 'Better Admissions Coordination',
    desc:  'Authorization tracking, document collection, and team communication all in one place — no more fragmented workflows.',
  },
  {
    title: 'Stronger Liaison Visibility',
    desc:  'Managers see what liaisons are doing in the field, in real time. Every visit logged, every referral touched.',
  },
  {
    title: 'Improved Conversion Tracking',
    desc:  'Know exactly where referrals are won or lost. Act on patterns, not gut feelings.',
  },
  {
    title: 'More Organized Operations',
    desc:  'Every document, every status update, every note — in one place. New team members get up to speed immediately.',
  },
  {
    title: 'Operational Oversight at Scale',
    desc:  'From a single building to a regional portfolio, leadership gets a live view of census health and team performance.',
  },
]

export default function Outcomes() {
  return (
    <section className="bg-navy">
      {/* Metrics row */}
      <div className="py-16 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold text-teal uppercase tracking-widest mb-12">Business Outcomes</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {outcomes.map(o => (
              <div key={o.metric} className="text-center">
                <p className="font-display text-4xl font-extrabold text-teal mb-1">{o.metric}</p>
                <p className="text-white font-semibold text-sm mb-2">{o.label}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Why it matters for your operation
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              NexusCare isn't a reporting tool. It's a workflow system that changes how
              your team operates from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map(p => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-colors">
                <div className="w-1.5 h-8 rounded-full bg-teal mb-4" />
                <h3 className="font-display font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
