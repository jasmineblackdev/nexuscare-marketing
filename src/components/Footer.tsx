import { APP_URL, CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-extrabold text-xl text-white tracking-tight mb-2">
              Nexus<span className="text-blue-500">Care</span>
            </p>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Referral intelligence for senior care operators.
              Fill beds faster. Serve residents better.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Product</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#features"    className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#who"         className="hover:text-white transition-colors">Who It's For</a></li>
                <li><a href="#demo"        className="hover:text-white transition-colors">Request Demo</a></li>
                <li><a href={`${APP_URL}/login`} className="hover:text-white transition-colors">Client Login</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Company</p>
              <ul className="space-y-2 text-sm">
                <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} NexusCare, LLC. All rights reserved.</p>
          <p>nexuscare.io</p>
        </div>
      </div>
    </footer>
  )
}
