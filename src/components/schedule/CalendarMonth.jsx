import CalendarSlotCell from './CalendarSlotCell'
import { getWeeksForMonth, findEventForSlot, MONTH_NAMES } from '../../utils/calendarHelpers'

export default function CalendarMonth({ month, slots, events, regionId, showWeekdays }) {
  const weeks = getWeeksForMonth(slots, month)

  // When weekdays hidden, skip weeks that have no Fri or Weekend slot
  const visibleWeeks = showWeekdays
    ? weeks
    : weeks.filter((w) => w.fri || w.weekend)

  const gridCols = showWeekdays
    ? 'grid-cols-[1fr_1fr_1fr_1fr_1.4fr]'
    : 'grid-cols-[1fr_1.4fr]'

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-semibold text-gray-900 text-sm mb-3">
        {MONTH_NAMES[month]}
      </h3>

      {visibleWeeks.length === 0 ? (
        <p className="text-xs text-gray-400 italic">No slots</p>
      ) : (
        <div className="w-full">
          {/* Column headers */}
          <div className={`grid ${gridCols} gap-1 mb-1.5`}>
            {showWeekdays && (
              <>
                <div className="text-[10px] font-medium text-gray-400 text-center">Tue</div>
                <div className="text-[10px] font-medium text-gray-400 text-center">Wed</div>
                <div className="text-[10px] font-medium text-gray-400 text-center">Thu</div>
              </>
            )}
            <div className={`text-[10px] font-medium text-gray-400 text-center ${showWeekdays ? 'border-l border-gray-100 pl-1' : ''}`}>Fri</div>
            <div className="text-[10px] font-medium text-gray-400 text-center">Sat-Sun</div>
          </div>

          {/* Week rows */}
          <div className="space-y-1">
            {visibleWeeks.map((week) => {
              const friEvent = week.fri ? findEventForSlot(week.fri, events) : null
              const weekendEvent = week.weekend ? findEventForSlot(week.weekend, events) : null

              return (
                <div
                  key={week.weekNum}
                  className={`grid ${gridCols} gap-1`}
                >
                  {showWeekdays && (
                    <>
                      <CalendarSlotCell
                        slot={week.tue}
                        event={week.tue ? findEventForSlot(week.tue, events) : null}
                        regionId={regionId}
                      />
                      <CalendarSlotCell
                        slot={week.wed}
                        event={week.wed ? findEventForSlot(week.wed, events) : null}
                        regionId={regionId}
                      />
                      <CalendarSlotCell
                        slot={week.thu}
                        event={week.thu ? findEventForSlot(week.thu, events) : null}
                        regionId={regionId}
                      />
                    </>
                  )}
                  <div className={showWeekdays ? 'border-l border-gray-100 pl-1' : ''}>
                    <CalendarSlotCell
                      slot={week.fri}
                      event={friEvent}
                      regionId={regionId}
                      weekendEvent={weekendEvent}
                    />
                  </div>
                  <CalendarSlotCell
                    slot={week.weekend}
                    event={weekendEvent}
                    regionId={regionId}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
