import { APP_URL, CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400">
      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src="/logo-dark.png" alt="NexusCare" className="h-10 w-auto mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
              Referral intelligence for senior care operators.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Product</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#features"     className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#who"          className="hover:text-white transition-colors">Who It's For</a></li>
              <li><a href="#pricing"      className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Get Started</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#demo"                  className="hover:text-white transition-colors">Request Demo</a></li>
              <li><a href={`${APP_URL}/signup`}    className="hover:text-white transition-colors">Create Account</a></li>
              <li><a href={`${APP_URL}/login`}     className="hover:text-white transition-colors">Client Login</a></li>
              <li><a href={`${APP_URL}/pilot`}     className="hover:text-white transition-colors">Pilot Program</a></li>
              <li><a href={LIAISON_URL}            className="hover:text-white transition-colors">Field Team Login</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}?subject=Partnership Inquiry`} className="hover:text-white transition-colors">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} NexusCare, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-400 transition-colors">hello@nexuscare.io</a>
            <span>nexuscare.io</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
