import CalendarSlotCell from './CalendarSlotCell'
import { getWeeksForMonth, findEventForSlot, MONTH_NAMES } from '../../utils/calendarHelpers'

export default function CalendarMonth({ month, slots, events, regionId }) {
  const weeks = getWeeksForMonth(slots, month)

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-semibold text-gray-900 text-sm mb-3">
        {MONTH_NAMES[month]}
      </h3>

      {weeks.length === 0 ? (
        <p className="text-xs text-gray-400 italic">No slots</p>
      ) : (
        <div className="w-full">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1.4fr] gap-1 mb-1.5">
            <div className="text-[10px] font-medium text-gray-400 text-center">Tue</div>
            <div className="text-[10px] font-medium text-gray-400 text-center">Wed</div>
            <div className="text-[10px] font-medium text-gray-400 text-center">Thu</div>
            <div className="text-[10px] font-medium text-gray-400 text-center border-l border-gray-100 pl-1">Fri</div>
            <div className="text-[10px] font-medium text-gray-400 text-center">Sat-Sun</div>
          </div>

          {/* Week rows */}
          <div className="space-y-1">
            {weeks.map((week) => {
              const tueEvent = week.tue ? findEventForSlot(week.tue, events) : null
              const wedEvent = week.wed ? findEventForSlot(week.wed, events) : null
              const thuEvent = week.thu ? findEventForSlot(week.thu, events) : null
              const friEvent = week.fri ? findEventForSlot(week.fri, events) : null
              const weekendEvent = week.weekend ? findEventForSlot(week.weekend, events) : null

              return (
                <div
                  key={week.weekNum}
                  className="grid grid-cols-[1fr_1fr_1fr_1fr_1.4fr] gap-1"
                >
                  <CalendarSlotCell
                    slot={week.tue}
                    event={tueEvent}
                    regionId={regionId}
                  />
                  <CalendarSlotCell
                    slot={week.wed}
                    event={wedEvent}
                    regionId={regionId}
                  />
                  <CalendarSlotCell
                    slot={week.thu}
                    event={thuEvent}
                    regionId={regionId}
                  />
                  <div className="border-l border-gray-100 pl-1">
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
