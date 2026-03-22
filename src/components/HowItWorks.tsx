const steps = [
  {
    number: '01',
    title:  'Hospital Referral Arrives',
    desc:   'A discharge planner contacts your facility. NexusCare captures the referral from any channel — phone, fax, portal, or direct submission — and creates a centralized record your whole team can see.',
    icon:   '🏥',
  },
  {
    number: '02',
    title:  'Intake & Clinical Review',
    desc:   'Your admissions team reviews the clinical summary, insurance information, and bed availability in one view. AI-assisted matching surfaces the best placement option based on payor mix and clinical fit.',
    icon:   '📋',
  },
  {
    number: '03',
    title:  'Liaison Assignment',
    desc:   'The right field liaison is assigned and notified instantly on mobile. They can view referral details, attach documents, log hospital visit notes, and update status — all from the NexusCare mobile app.',
    icon:   '📍',
  },
  {
    number: '04',
    title:  'Admission Coordination',
    desc:   'Authorization tracking, document collection, and cross-team communication happen inside NexusCare. No more chasing paperwork across email threads or missing critical follow-up windows.',
    icon:   '🔄',
  },
  {
    number: '05',
    title:  'Reporting & Visibility',
    desc:   'Every admission, every lost referral, every liaison visit is captured and analyzed. Directors and operators get live dashboards showing conversion rates, payor mix trends, and team performance.',
    icon:   '📊',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-warm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-4">Workflow</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
            How NexusCare Works
          </h2>
          <p className="text-lg text-slate max-w-xl mx-auto leading-relaxed">
            A streamlined workflow that takes every referral from first contact to
            admitted resident — with full visibility at every step.
          </p>
        </div>

        {/* Workflow steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-teal/20" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 md:gap-10">
                {/* Step indicator */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-sm z-10 ${
                    i === 0 ? 'bg-teal' : 'bg-white border-2 border-teal/30'
                  }`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl border border-navy/8 p-6 flex-1 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display font-bold text-navy text-lg">{step.title}</h3>
                    <span className="shrink-0 text-xs font-bold text-teal/60 font-mono">{step.number}</span>
                  </div>
                  <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flow summary pill */}
        <div className="mt-12 rounded-2xl bg-navy p-6 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white">
          {['Hospital Referral', 'Intake & Review', 'Liaison Assignment', 'Admission Coordination', 'Reporting & Visibility'].map((step, i, arr) => (
            <>
              <span key={step} className="rounded-full bg-white/10 px-4 py-1.5">{step}</span>
              {i < arr.length - 1 && <span key={`arrow-${i}`} className="text-teal">→</span>}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
