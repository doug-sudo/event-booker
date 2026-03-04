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
  '3 or more pallets for shipping post-event',
]

export const TORONTO_REGION_NAMES = ['Toronto #1', 'Toronto #2']

export const MAX_LOGO_SIZE = 5 * 1024 * 1024 // 5MB
export const ACCEPTED_LOGO_TYPES = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp']

export const MAX_W9_SIZE = 10 * 1024 * 1024 // 10MB
export const ACCEPTED_W9_TYPES = ['application/pdf', 'image/png', 'image/jpeg']
