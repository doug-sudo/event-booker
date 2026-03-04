import { useState, useEffect, useCallback } from 'react'
import { getEvents, getEventsByRegion, getEventsByYear } from '../services/eventService'

export function useEvents({ regionId, year } = {}) {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      let data
      if (regionId) {
        data = await getEventsByRegion(regionId)
      } else if (year) {
        data = await getEventsByYear(year)
      } else {
        data = await getEvents()
      }
      setEvents(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [regionId, year])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { events, loading, error, refetch: fetch }
}
