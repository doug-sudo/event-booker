import { useMemo } from 'react'
import RegionCard from './RegionCard'
import LoadingSpinner from '../ui/LoadingSpinner'
import { getSlotsForYear } from '../../utils/calendarHelpers'

export default function RegionGrid({ regions, events, selectedRegion, onSelectRegion, loading }) {
  // Calculate total available slots dynamically (all slots minus holiday slots)
  const totalAvailableSlots = useMemo(() => {
    const allSlots = getSlotsForYear(2026)
    const holidayEventCount = events.filter((e) => e.event_type === 'HOLIDAY').length
    return allSlots.length - holidayEventCount
  }, [events])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner />
      </div>
    )
  }

  function getRegionCounts(regionId) {
    const booked = events.filter(
      (e) => e.region_id === regionId && e.event_type !== 'HOLIDAY'
    ).length
    return { booked, open: Math.max(0, totalAvailableSlots - booked) }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {regions.map((region) => {
        const counts = getRegionCounts(region.id)
        return (
          <RegionCard
            key={region.id}
            region={region}
            bookedCount={counts.booked}
            openCount={counts.open}
            selected={selectedRegion?.id === region.id}
            onClick={() => onSelectRegion(region)}
          />
        )
      })}
    </div>
  )
}
