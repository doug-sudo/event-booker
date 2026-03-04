import { useMemo } from 'react'
import CalendarMonth from './CalendarMonth'
import CalendarLegend from './CalendarLegend'
import LoadingSpinner from '../ui/LoadingSpinner'
import { getSlotsForYear } from '../../utils/calendarHelpers'

export default function EventCalendar({ events, regionId, loading }) {
  const allSlots = useMemo(() => getSlotsForYear(2026), [])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner />
      </div>
    )
  }

  // Count booked slots (non-holiday events)
  const bookedCount = events.filter((e) => e.event_type !== 'HOLIDAY').length
  // Count holiday events
  const holidayCount = events.filter((e) => e.event_type === 'HOLIDAY').length
  // Total available slots minus holidays
  const totalSlots = allSlots.length
  const openCount = totalSlots - bookedCount - holidayCount

  return (
    <div>
      {/* Legend + stats */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <CalendarLegend />
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-900">{bookedCount}</span> booked,{' '}
          <span className="font-medium text-primary">{openCount}</span> open,{' '}
          <span className="font-medium text-gray-400">{holidayCount}</span> holidays
        </div>
      </div>

      {/* 12-month grid — 3 cols for wider month cards with table layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 12 }, (_, month) => (
          <CalendarMonth
            key={month}
            month={month}
            slots={allSlots}
            events={events}
            regionId={regionId}
          />
        ))}
      </div>
    </div>
  )
}
