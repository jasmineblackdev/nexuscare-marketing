import { APP_URL } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-blue-50/80 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-widest">
            Referral Intelligence for Senior Care
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Stop losing 33% of your<br />
          <span className="text-blue-600">hospital referrals.</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          NexusCare gives skilled nursing and senior living operators the tools to win
          more referrals, optimize payor mix, and improve conversion rates by 20–30% —
          from hospital discharge to admission.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#demo"
            className="rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Request a Demo
          </a>
          <a
            href={`${APP_URL}/login`}
            className="rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
          >
            Sign In to Your Account
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">Free plan available. Setup in under 10 minutes.</p>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-gray-100 pt-10">
          <div>
            <p className="text-3xl font-extrabold text-gray-900">33%</p>
            <p className="text-sm text-gray-500 mt-1">of referrals lost without the right tools</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-gray-900">$8.2B</p>
            <p className="text-sm text-gray-500 mt-1">annual industry loss from missed referrals</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-600">20–30%</p>
            <p className="text-sm text-gray-500 mt-1">conversion rate improvement with NexusCare</p>
          </div>
        </div>
      </div>
    </section>
  )
}
