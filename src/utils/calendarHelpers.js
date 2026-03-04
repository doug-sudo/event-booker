/**
 * Calendar slot system — supports weekday (Tue/Wed/Thu), Friday, and weekend (Sat-Sun) slots.
 *
 * Slot shape: { date: 'YYYY-MM-DD', endDate: 'YYYY-MM-DD', type: 'weekday'|'friday'|'weekend', week: number, month: number, dayOfWeek: number }
 */

/**
 * Format a Date object to YYYY-MM-DD string
 */
export function formatDateStr(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/**
 * Get ISO week number for a date
 */
function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
}

/**
 * Get all bookable slots for a given year.
 * - Tue, Wed, Thu → individual weekday slots
 * - Fri → friday slot (only bookable with weekend)
 * - Sat-Sun → weekend slot (2-day block)
 */
export function getSlotsForYear(year) {
  const slots = []
  const date = new Date(year, 0, 1)

  while (date.getFullYear() === year) {
    const dow = date.getDay() // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat

    if (dow >= 2 && dow <= 4) {
      // Tue, Wed, Thu — weekday slot
      slots.push({
        date: formatDateStr(date),
        endDate: formatDateStr(date),
        type: 'weekday',
        week: getISOWeek(date),
        month: date.getMonth(),
        dayOfWeek: dow,
      })
    } else if (dow === 5) {
      // Friday — only bookable attached to weekend
      slots.push({
        date: formatDateStr(date),
        endDate: formatDateStr(date),
        type: 'friday',
        week: getISOWeek(date),
        month: date.getMonth(),
        dayOfWeek: dow,
      })
    } else if (dow === 6) {
      // Saturday — create Sat-Sun weekend block
      const sunday = new Date(date)
      sunday.setDate(sunday.getDate() + 1)
      if (sunday.getFullYear() === year) {
        slots.push({
          date: formatDateStr(date),
          endDate: formatDateStr(sunday),
          type: 'weekend',
          week: getISOWeek(date),
          month: date.getMonth(),
          dayOfWeek: dow,
        })
      }
    }

    date.setDate(date.getDate() + 1)
  }

  return slots
}

/**
 * Match an event to a slot.
 * - Weekday slot: event.start_date === slot.date && event.end_date === slot.date
 * - Friday slot: event.start_date === slot.date (Fri-Sun event starts on Friday)
 * - Weekend slot: event.start_date === slot.date (Sat-Sun) OR event.end_date === slot.endDate (Fri-Sun ends on Sunday)
 */
export function findEventForSlot(slot, events) {
  if (slot.type === 'weekday') {
    return events.find(
      (e) => e.start_date === slot.date && e.end_date === slot.date
    )
  }

  if (slot.type === 'friday') {
    // A Fri-Sun event starts on Friday
    return events.find(
      (e) => e.start_date === slot.date && e.end_date !== slot.date
    )
  }

  if (slot.type === 'weekend') {
    // Sat-Sun event: starts on Saturday
    // Fri-Sun event: ends on Sunday (slot.endDate)
    return events.find(
      (e) => e.start_date === slot.date || e.end_date === slot.endDate
    )
  }

  return null
}

/**
 * Group slots by month (0-11)
 */
export function groupSlotsByMonth(slots) {
  const months = {}
  for (const s of slots) {
    if (!months[s.month]) months[s.month] = []
    months[s.month].push(s)
  }
  return months
}

/**
 * Get week rows for a specific month.
 * Returns: [{ weekNum, tue, wed, thu, fri, weekend }, ...]
 * Each field is either a slot object or null.
 */
export function getWeeksForMonth(slots, month) {
  const monthSlots = slots.filter((s) => s.month === month)

  // Group by week number
  const weekMap = {}
  for (const s of monthSlots) {
    if (!weekMap[s.week]) {
      weekMap[s.week] = { weekNum: s.week, tue: null, wed: null, thu: null, fri: null, weekend: null }
    }
    if (s.type === 'weekday') {
      if (s.dayOfWeek === 2) weekMap[s.week].tue = s
      else if (s.dayOfWeek === 3) weekMap[s.week].wed = s
      else if (s.dayOfWeek === 4) weekMap[s.week].thu = s
    } else if (s.type === 'friday') {
      weekMap[s.week].fri = s
    } else if (s.type === 'weekend') {
      weekMap[s.week].weekend = s
    }
  }

  // Sort by week number
  return Object.values(weekMap).sort((a, b) => a.weekNum - b.weekNum)
}

/**
 * Month names
 */
export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
