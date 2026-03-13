import { useState } from 'react'
import { EVENT_TYPES } from '../../utils/constants'
import { formatSlotDate, formatDate } from '../../utils/dateFormatters'

// Today's date string for past-date comparison (YYYY-MM-DD)
const todayStr = new Date().toISOString().slice(0, 10)

export default function CalendarSlotCell({ slot, event, regionId, weekendEvent, onSelectSlot, isSelected }) {
  const [showTooltip, setShowTooltip] = useState(false)

  if (!slot) {
    // Empty cell placeholder
    return <div className="h-8" />
  }

  const isHoliday = event?.event_type === 'HOLIDAY'
  const isBooked = event && !isHoliday
  const isOpen = !event

  // Past-date check: use endDate for weekends (Sunday), date for others
  const isPast = (slot.type === 'weekend' ? slot.endDate : slot.date) < todayStr

  // Friday-specific logic:
  // If this is a Friday slot and the weekend is booked by someone else, Friday is unavailable
  const isFridayBlocked =
    slot.type === 'friday' && !event && weekendEvent && weekendEvent.event_type !== 'HOLIDAY'

  const eventInfo = event ? EVENT_TYPES[event.event_type] : null

  function handleClick() {
    if (!regionId || !onSelectSlot || isPast) return

    if (slot.type === 'friday' && isOpen && !isFridayBlocked) {
      onSelectSlot(slot, 'friday')
    } else if (slot.type === 'weekend' && isOpen) {
      onSelectSlot(slot, 'weekend')
    } else if (slot.type === 'weekday' && isOpen) {
      onSelectSlot(slot, 'weekday')
    }
  }

  const disabled = !isOpen || isFridayBlocked || isPast

  // Determine cell styling
  let cellClasses = 'w-full px-1 py-1 rounded text-xs font-medium transition-all text-center truncate '
  if (isPast) {
    cellClasses += 'bg-gray-50 text-gray-300 cursor-not-allowed'
  } else if (isHoliday) {
    cellClasses += 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
  } else if (isBooked) {
    cellClasses += 'bg-gray-400 text-white cursor-default'
  } else if (isFridayBlocked) {
    cellClasses += 'bg-gray-50 text-gray-300 cursor-not-allowed'
  } else if (isSelected) {
    cellClasses += 'bg-primary text-white border-2 border-primary ring-2 ring-primary/30 cursor-pointer'
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
