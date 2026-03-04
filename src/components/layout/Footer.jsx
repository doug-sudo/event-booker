import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/images/sidelineswap-logo-tagline-on-white.png"
                alt="SidelineSwap"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-gray-500">
              The leading marketplace for buying and selling used sporting goods.
              Partner with us to host trade-in events at your store.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Why Host
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Schedule an Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="mailto:elise.finger@sidelineswap.com" className="hover:text-primary transition-colors">
                  elise.finger@sidelineswap.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SidelineSwap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
