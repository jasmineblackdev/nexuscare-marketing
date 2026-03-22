import { APP_URL } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 px-6 overflow-hidden bg-warm">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-teal-light/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-navy/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal-light px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            <span className="text-xs font-semibold text-teal-dark uppercase tracking-widest">
              Healthcare Referral Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-navy leading-[1.1] mb-6">
            The referral platform<br />
            built for senior care<br />
            <span className="text-teal">admissions teams.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate leading-relaxed mb-10 max-w-2xl">
            NexusCare connects your hospital referral workflow, liaison team, and
            admissions process in one platform — so you respond faster, coordinate
            better, and never lose visibility into your census pipeline.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              className="rounded-xl bg-teal px-8 py-4 text-base font-bold text-white hover:bg-teal-dark transition-colors shadow-md shadow-teal/20"
            >
              Request a Demo
            </a>
            <a
              href={`${APP_URL}/login`}
              className="rounded-xl border-2 border-navy/20 bg-white px-8 py-4 text-base font-semibold text-navy hover:border-navy/40 hover:bg-white transition-colors"
            >
              Log In to Your Account
            </a>
          </div>

          <p className="mt-5 text-sm text-slate/70">
            Free plan available. No credit card required.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-10 border-t border-navy/10 grid grid-cols-3 gap-8 max-w-2xl">
          <div>
            <p className="font-display text-4xl font-extrabold text-navy">33%</p>
            <p className="text-sm text-slate mt-1 leading-snug">of referrals lost without the right tools</p>
          </div>
          <div>
            <p className="font-display text-4xl font-extrabold text-navy">$8.2B</p>
            <p className="text-sm text-slate mt-1 leading-snug">annual industry loss from missed referrals</p>
          </div>
          <div>
            <p className="font-display text-4xl font-extrabold text-teal">20–30%</p>
            <p className="text-sm text-slate mt-1 leading-snug">conversion rate improvement with NexusCare</p>
          </div>
        </div>
      </div>
    </section>
  )
}
