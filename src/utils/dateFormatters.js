/**
 * Format a date string (YYYY-MM-DD) to a readable format
 */
export function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

/**
 * Format a date range
 */
export function formatDateRange(startStr, endStr) {
  return `${formatDate(startStr)} - ${formatDate(endStr)}`
}

/**
 * Format a full date with year
 */
export function formatFullDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * Short day abbreviations
 */
const DAY_ABBREVS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/**
 * Format a calendar slot for compact display.
 * Weekday: "Tue 6"  |  Friday: "Fri 9"  |  Weekend: "3-4"
 */
export function formatSlotDate(slot) {
  const start = new Date(slot.date + 'T00:00:00')
  if (slot.type === 'weekday' || slot.type === 'friday') {
    return `${DAY_ABBREVS[start.getDay()]} ${start.getDate()}`
  }
  // Weekend: show "3-4" (just day numbers)
  const end = new Date(slot.endDate + 'T00:00:00')
  return `${start.getDate()}-${end.getDate()}`
}

/**
 * Format a slot for full display (registration, tooltips).
 * Weekday: "Tuesday, January 6, 2026"
 * Weekend (Sat-Sun): "January 3-4, 2026"
 * Extended (Fri-Sun): "January 2-4, 2026"
 */
export function formatSlotDateFull(slot) {
  const start = new Date(slot.date + 'T00:00:00')
  if (slot.type === 'weekday' || slot.type === 'friday') {
    return start.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }
  // Weekend
  const end = new Date(slot.endDate + 'T00:00:00')
  const month = start.toLocaleDateString('en-US', { month: 'long' })
  const year = start.getFullYear()
  return `${month} ${start.getDate()}-${end.getDate()}, ${year}`
}
