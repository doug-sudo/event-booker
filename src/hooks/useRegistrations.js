import { useState, useEffect, useCallback } from 'react'
import { getRegistrations, updateRegistrationStatus } from '../services/registrationService'
import { useAuth } from '../context/AuthContext'

export function useRegistrations() {
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { user } = useAuth()

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getRegistrations()
      setRegistrations(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  const updateStatus = useCallback(
    async (id, status) => {
      try {
        await updateRegistrationStatus(id, status, user?.id)
        await fetch()
      } catch (err) {
        setError(err.message)
        throw err
      }
    },
    [user, fetch]
  )

  return { registrations, loading, error, refetch: fetch, updateStatus }
}
