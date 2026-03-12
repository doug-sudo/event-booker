export const EVENT_TYPES = {
  DSG: { label: "Dick's Sporting Goods", short: 'DSG', color: 'bg-event-dsg', text: 'text-white' },
  MNKY: { label: 'MonkeySports', short: 'MNKY', color: 'bg-event-mnky', text: 'text-white' },
  PRNI: { label: "Perani's", short: 'PRNI', color: 'bg-event-prni', text: 'text-white' },
  HOS: { label: 'House of Sport', short: 'HOS', color: 'bg-event-hos', text: 'text-white' },
  OTHR: { label: 'Other', short: 'OTHR', color: 'bg-event-othr', text: 'text-white' },
  HOLIDAY: { label: 'Holiday', short: 'HOL', color: 'bg-event-holiday', text: 'text-gray-600' },
}

export const REGISTRATION_STATUSES = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  approved: { label: 'Approved', color: 'bg-green-100 text-green-800' },
  declined: { label: 'Declined', color: 'bg-red-100 text-red-800' },
}

export const FOOT_TRAFFIC_OPTIONS = ['0-50', '50-100', '100-200', '200+']

export const EVENT_REQUIREMENTS = [
  "At least TWO 6' or 8' tables",
  '2 chairs',
  'Power source',
  "Space for a 10' x 10' trade-in area (inside or outside the store weather-permitting)",
  "10' x 10' storage for the trade-ins over the weekend (for pick-up on Mon or Tue following the event)",
]

// 30-minute increments from 6:00 AM to 11:00 PM
export const TIME_OPTIONS = (() => {
  const options = []
  for (let h = 6; h <= 23; h++) {
    for (let m = 0; m < 60; m += 30) {
      const value = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
      const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h
      const ampm = h >= 12 ? 'PM' : 'AM'
      const label = `${hour12}:${String(m).padStart(2, '0')} ${ampm}`
      options.push({ value, label })
    }
  }
  return options
})()

export const TORONTO_REGION_NAMES = ['Toronto #1', 'Toronto #2']

export const MAX_LOGO_SIZE = 5 * 1024 * 1024 // 5MB
export const ACCEPTED_LOGO_TYPES = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp']

export const MAX_W9_SIZE = 10 * 1024 * 1024 // 10MB
export const ACCEPTED_W9_TYPES = ['application/pdf', 'image/png', 'image/jpeg']
