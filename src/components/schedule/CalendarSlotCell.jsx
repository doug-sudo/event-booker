import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EVENT_TYPES } from '../../utils/constants'
import { formatSlotDate, formatDate } from '../../utils/dateFormatters'

export default function CalendarSlotCell({ slot, event, regionId, weekendEvent }) {
  const [showTooltip, setShowTooltip] = useState(false)
  const navigate = useNavigate()

  if (!slot) {
    // Empty cell placeholder
    return <div className="h-8" />
  }

  const isHoliday = event?.event_type === 'HOLIDAY'
  const isBooked = event && !isHoliday
  const isOpen = !event

  // Friday-specific logic:
  // If this is a Friday slot and the weekend is booked by someone else, Friday is unavailable
  const isFridayBlocked =
    slot.type === 'friday' && !event && weekendEvent && weekendEvent.event_type !== 'HOLIDAY'

  const eventInfo = event ? EVENT_TYPES[event.event_type] : null

  function handleClick() {
    if (!regionId) return

    if (slot.type === 'friday' && isOpen && !isFridayBlocked) {
      // Clicking open Friday → go to register with weekend date, includeFriday=true
      // Calculate the Saturday date (next day after Friday)
      const fri = new Date(slot.date + 'T00:00:00')
      const sat = new Date(fri)
      sat.setDate(sat.getDate() + 1)
      const satStr = `${sat.getFullYear()}-${String(sat.getMonth() + 1).padStart(2, '0')}-${String(sat.getDate()).padStart(2, '0')}`
      navigate(`/register?region=${regionId}&date=${satStr}&type=weekend&includeFriday=true`)
    } else if (slot.type === 'weekend' && isOpen) {
      navigate(`/register?region=${regionId}&date=${slot.date}&type=weekend`)
    } else if (slot.type === 'weekday' && isOpen) {
      navigate(`/register?region=${regionId}&date=${slot.date}&type=weekday`)
    }
  }

  const disabled = !isOpen || isFridayBlocked

  // Determine cell styling
  let cellClasses = 'w-full px-1 py-1 rounded text-xs font-medium transition-all text-center truncate '
  if (isHoliday) {
    cellClasses += 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
  } else if (isBooked) {
    cellClasses += 'bg-gray-400 text-white cursor-default'
  } else if (isFridayBlocked) {
    cellClasses += 'bg-gray-50 text-gray-300 cursor-not-allowed'
  } else {
    cellClasses += 'bg-white border border-primary/30 text-primary hover:border-primary hover:bg-green-50 cursor-pointer'
  }

  const label = formatSlotDate(slot)

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        onClick={handleClick}
        disabled={disabled}
        className={cellClasses}
        title={isFridayBlocked ? 'Weekend is booked' : undefined}
      >
        {label}
      </button>

      {/* Tooltip */}
      {showTooltip && (event || isFridayBlocked) && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap shadow-lg pointer-events-none">
          {isFridayBlocked ? (
            <div className="text-gray-300">Weekend booked — Friday unavailable</div>
          ) : (
            <>
              <div className="font-semibold">
                {isHoliday ? event.notes : 'Booked'}
              </div>
              <div className="text-gray-300">
                {formatDate(event.start_date)}
                {event.start_date !== event.end_date && ` - ${formatDate(event.end_date)}`}
              </div>
            </>
          )}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      )}
    </div>
  )
}
