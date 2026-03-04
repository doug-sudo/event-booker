import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { sendMagicLink } from '../services/authService'
import Button from '../components/ui/Button'

export default function AdminLoginPage() {
  const { session, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)
  const [sending, setSending] = useState(false)

  // If already authenticated, redirect to admin
  if (!loading && session) {
    return <Navigate to="/admin" replace />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return

    setSending(true)
    setError(null)

    try {
      await sendMagicLink(email)
      setSent(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="text-center mb-8">
            <img
              src="/images/sidelineswap-logo-tagline-on-white.png"
              alt="SidelineSwap"
              className="h-10 w-auto mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-sm text-gray-500 mt-2">
              Enter your email to receive a magic link
            </p>
          </div>

          {sent ? (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Check Your Email
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                We sent a login link to <span className="font-medium">{email}</span>.
                Click the link to sign in.
              </p>
              <button
                onClick={() => { setSent(false); setEmail('') }}
                className="text-sm text-primary font-medium hover:underline"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@sidelineswap.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={sending || !email.trim()}
                className="w-full"
              >
                {sending ? 'Sending...' : 'Send Magic Link'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
