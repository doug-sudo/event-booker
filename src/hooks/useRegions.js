import { useState, useEffect } from 'react'
import { getRegions } from '../services/regionService'

export function useRegions() {
  const [regions, setRegions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      try {
        const data = await getRegions()
        if (!cancelled) setRegions(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    return () => { cancelled = true }
  }, [])

  return { regions, loading, error }
}
