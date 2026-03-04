import { useMemo, useState } from 'react'
import CalendarMonth from './CalendarMonth'
import CalendarLegend from './CalendarLegend'
import LoadingSpinner from '../ui/LoadingSpinner'
import { getSlotsForYear } from '../../utils/calendarHelpers'

export default function EventCalendar({ events, regionId, loading }) {
  const allSlots = useMemo(() => getSlotsForYear(2026), [])
  const [showWeekdays, setShowWeekdays] = useState(false)

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner />
      </div>
    )
  }

  // Filter slots based on view mode
  const visibleSlots = showWeekdays
    ? allSlots
    : allSlots.filter((s) => s.type === 'friday' || s.type === 'weekend')

  // Count booked slots (non-holiday events)
  const bookedCount = events.filter((e) => e.event_type !== 'HOLIDAY').length
  // Count holiday events
  const holidayCount = events.filter((e) => e.event_type === 'HOLIDAY').length
  // Total available slots minus holidays
  const totalSlots = visibleSlots.length
  const openCount = totalSlots - bookedCount - holidayCount

  return (
    <div>
      {/* Legend + toggle + stats */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-6">
          <CalendarLegend />
          <button
            onClick={() => setShowWeekdays(!showWeekdays)}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <span
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${showWeekdays ? 'bg-primary' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${showWeekdays ? 'translate-x-[18px]' : 'translate-x-[2px]'}`}
              />
            </span>
            <span>Show weekday slots</span>
          </button>
        </div>
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
            showWeekdays={showWeekdays}
          />
        ))}
      </div>
    </div>
  )
}
