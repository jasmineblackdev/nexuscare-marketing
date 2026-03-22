export default function WhatWeDo() {
  return (
    <section className="py-20 px-6 bg-navy">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-4">The Problem</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Senior care teams lose referrals not because they don't care — but because the tools haven't kept up.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Spreadsheets, phone tags, and disconnected EHR workflows mean your team is always reactive.
              Discharge planners move on. Liaisons can't see what's needed. Admissions directors don't know
              where a referral stands until it's already gone.
            </p>
            <p className="text-gray-300 leading-relaxed">
              NexusCare changes that. It's the only platform purpose-built to address the full referral
              journey — from the moment a hospital reaches out to the day a resident moves in.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                label: 'Before NexusCare',
                items: [
                  'Referrals arrive by fax, phone, and email with no central tracking',
                  'Liaisons log visits manually — if they log them at all',
                  'Admissions decisions made without payor mix context',
                  'No visibility into why referrals are lost',
                  'Leadership sees lagging reports, not live data',
                ],
                color: 'border-red-400/30 bg-red-950/20',
                icon: '✕',
                iconColor: 'text-red-400',
              },
              {
                label: 'With NexusCare',
                items: [
                  'Every referral tracked from first contact to admission',
                  'Liaisons update status from mobile, in real time',
                  'AI-assisted routing aligned to clinical fit and payor mix',
                  'Win/loss analytics surface patterns you can act on',
                  'Live dashboards for operators, directors, and staff',
                ],
                color: 'border-teal/30 bg-teal/5',
                icon: '✓',
                iconColor: 'text-teal',
              },
            ].map(card => (
              <div key={card.label} className={`rounded-2xl border ${card.color} p-5`}>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{card.label}</p>
                <ul className="space-y-2">
                  {card.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className={`shrink-0 font-bold ${card.iconColor}`}>{card.icon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
