const personas = [
  {
    role:  'Admissions Directors',
    pain:  'Losing referrals to faster competitors',
    value: 'Manage your full pipeline, track response SLAs, and know exactly why you win or lose every referral.',
    icon:  'AD',
  },
  {
    role:  'Regional Leaders (5–20 Buildings)',
    pain:  'No visibility across buildings',
    value: 'One dashboard across your entire portfolio. Track census, payor mix, and conversion rates at the building and regional level.',
    icon:  'RL',
  },
  {
    role:  'Executive Directors',
    pain:  'Unclear revenue impact of admissions',
    value: 'See the dollar value of every admission decision. Empty bed tracking shows you what each vacancy costs per day.',
    icon:  'ED',
  },
  {
    role:  'Field Liaisons',
    pain:  'Manual logging after hospital visits',
    value: 'Mobile-first app for logging visits, attaching referral packets, and updating status between appointments.',
    icon:  'FL',
  },
]

export default function WhoItsFor() {
  return (
    <section id="who" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Ideal Customer Profile
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built for Regional Operators
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            NexusCare is purpose-built for operators with 1–20 buildings who are frustrated
            with generic tools and losing $2M–$9M/year in missed referrals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {personas.map(p => (
            <div
              key={p.role}
              className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{p.role}</h3>
                  <p className="text-xs text-red-500 font-medium mt-0.5">Pain: {p.pain}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{p.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
