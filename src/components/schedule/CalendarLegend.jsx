export default function CalendarLegend() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs">
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded bg-white border-2 border-primary" />
        <span className="text-gray-600">Open</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded bg-gray-400" />
        <span className="text-gray-600">Booked</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded bg-event-holiday" />
        <span className="text-gray-600">Holiday</span>
      </div>
    </div>
  )
}
