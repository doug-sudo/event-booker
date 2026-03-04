import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import YearDropdown from './YearDropdown'

export default function AdminSidebar() {
  const { user, signOut } = useAuth()
  const [year, setYear] = useState(2026)

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col z-40">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link to="/admin" className="flex items-center gap-2">
            <img
              src="/images/sidelineswap-logo-tagline-on-white.png"
              alt="SidelineSwap"
              className="h-8 w-auto"
            />
            <span className="font-normal text-gray-500 text-sm">Admin</span>
          </Link>
        </div>

        {/* Year selector */}
        <div className="px-4 pt-4">
          <label className="block text-xs font-medium text-gray-500 uppercase mb-1.5">
            Year
          </label>
          <YearDropdown value={year} onChange={setYear} />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-primary bg-green-50 rounded-lg"
          >
            Dashboard
          </Link>
          <a
            href="#registrations"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            Registrations
          </a>
          <a
            href="#calendar"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            Event Calendar
          </a>
          <div className="pt-4 border-t border-gray-100 mt-4">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100"
            >
              View Public Site
            </Link>
          </div>
        </nav>

        {/* Contact */}
        <div className="px-4 py-3 border-t border-gray-100">
          <p className="text-xs text-gray-400">Support</p>
          <p className="text-xs text-gray-600">partnerships@sidelineswap.com</p>
        </div>

        {/* User info + logout */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 truncate mb-3">{user?.email}</p>
          <button
            onClick={signOut}
            className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Mobile top bar for admin (shows on small screens) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <Link to="/admin" className="flex items-center gap-2">
          <img
            src="/images/sidelineswap-logo-tagline-on-white.png"
            alt="SidelineSwap"
            className="h-7 w-auto"
          />
          <span className="font-normal text-gray-500 text-sm">Admin</span>
        </Link>
        <button
          onClick={signOut}
          className="text-sm text-red-600 font-medium"
        >
          Sign out
        </button>
      </div>
    </>
  )
}
