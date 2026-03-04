import { useMemo, useState, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import CalendarMonth from './CalendarMonth'
import CalendarLegend from './CalendarLegend'
import LoadingSpinner from '../ui/LoadingSpinner'
import { getSlotsForYear } from '../../utils/calendarHelpers'
import { formatSlotDateFull } from '../../utils/dateFormatters'

export default function EventCalendar({ events, regionId, loading }) {
  const allSlots = useMemo(() => getSlotsForYear(2026), [])
  const [showWeekdays, setShowWeekdays] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const navigate = useNavigate()
  const calendarTopRef = useRef(null)

  const handleSelectSlot = useCallback((slot, type) => {
    // Toggle off if same slot clicked again
    if (selectedSlot?.date === slot.date && selectedSlot?.type === slot.type) {
      setSelectedSlot(null)
      setSelectedType(null)
    } else {
      setSelectedSlot(slot)
      setSelectedType(type)
      // Scroll to top of calendar so confirmation bar is visible
      setTimeout(() => {
        calendarTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [selectedSlot])

  function handleConfirm() {
    if (!selectedSlot || !regionId) return

    if (selectedType === 'friday') {
      const fri = new Date(selectedSlot.date + 'T00:00:00')
      const sat = new Date(fri)
      sat.setDate(sat.getDate() + 1)
      const satStr = `${sat.getFullYear()}-${String(sat.getMonth() + 1).padStart(2, '0')}-${String(sat.getDate()).padStart(2, '0')}`
      navigate(`/register?region=${regionId}&date=${satStr}&type=weekend&includeFriday=true`)
    } else if (selectedType === 'weekend') {
      navigate(`/register?region=${regionId}&date=${selectedSlot.date}&type=weekend`)
    } else if (selectedType === 'weekday') {
      navigate(`/register?region=${regionId}&date=${selectedSlot.date}&type=weekday`)
    }
  }

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

  // Build confirmation label
  let confirmLabel = ''
  if (selectedSlot) {
    if (selectedType === 'friday') {
      // Friday → Fri-Sun event
      const fri = new Date(selectedSlot.date + 'T00:00:00')
      const sun = new Date(fri)
      sun.setDate(sun.getDate() + 2)
      const month = fri.toLocaleDateString('en-US', { month: 'long' })
      confirmLabel = `Fri-Sun, ${month} ${fri.getDate()}-${sun.getDate()}, ${fri.getFullYear()}`
    } else if (selectedType === 'weekend') {
      confirmLabel = `Sat-Sun, ${formatSlotDateFull(selectedSlot)}`
    } else {
      confirmLabel = formatSlotDateFull(selectedSlot)
    }
  }

  return (
    <div ref={calendarTopRef}>
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

      {/* Selection confirmation bar */}
      {selectedSlot && (
        <div className="sticky top-0 z-20 bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-sm">
          <div className="text-sm">
            <span className="text-green-800 font-medium">Selected: </span>
            <span className="text-green-900 font-semibold">{confirmLabel}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setSelectedSlot(null); setSelectedType(null) }}
              className="text-sm text-green-700 hover:text-green-900 underline cursor-pointer"
            >
              Change date
            </button>
            <button
              onClick={handleConfirm}
              className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Continue to Register
            </button>
          </div>
        </div>
      )}

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
            selectedSlot={selectedSlot}
            onSelectSlot={handleSelectSlot}
          />
        ))}
      </div>
    </div>
  )
}
