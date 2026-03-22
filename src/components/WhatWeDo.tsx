const steps = [
  {
    step: '01',
    title: 'Speed — Respond Before the Competition',
    desc:  'Response time SLA tracking and instant mobile alerts mean your team gets to the referral first. Every minute counts when discharge planners have multiple facilities to call.',
  },
  {
    step: '02',
    title: 'Relationships — Own Your Referral Network',
    desc:  'Built-in Hospital CRM tracks every discharge planner, social worker, and liaison relationship. Know who sends your best referrals and invest accordingly.',
  },
  {
    step: '03',
    title: 'Positioning — Win on Clinical Fit',
    desc:  'AI-assisted routing matches referrals to the right building based on clinical needs, bed availability, and payor profile — so you accept more and regret less.',
  },
  {
    step: '04',
    title: 'Revenue — Optimize Every Admission',
    desc:  'Payor mix intelligence and empty bed tracking show you the revenue impact of every decision. Stop accepting the wrong census mix and maximize reimbursement.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            The Complete Sales Funnel
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Other tools speed up data entry.<br />
            NexusCare helps you win.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Unlike Aline or PointClickCare, NexusCare addresses every stage of the
            referral funnel — not just intake.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {steps.map(s => (
            <div key={s.step} className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                {s.step}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
