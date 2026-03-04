import { useState, useEffect } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

const EVENT_TYPE_OPTIONS = [
  { value: 'DSG', label: "Dick's Sporting Goods" },
  { value: 'MNKY', label: 'MonkeySports' },
  { value: 'PRNI', label: "Perani's" },
  { value: 'HOS', label: 'House of Sport' },
  { value: 'OTHR', label: 'Other' },
  { value: 'HOLIDAY', label: 'Holiday' },
]

const STATUS_OPTIONS = [
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'tentative', label: 'Tentative' },
  { value: 'cancelled', label: 'Cancelled' },
]

const SLOT_TYPE_OPTIONS = [
  { value: 'weekday', label: 'Weekday (Single Day — Tue/Wed/Thu)' },
  { value: 'weekend', label: 'Weekend (Sat-Sun)' },
  { value: 'extended', label: 'Extended Weekend (Fri-Sun)' },
]

export default function EventFormModal({
  open,
  onClose,
  onSubmit,
  event,
  regions,
}) {
  const isEdit = !!event

  const [formData, setFormData] = useState({
    region_id: '',
    slot_type: 'weekend',
    start_date: '',
    end_date: '',
    event_type: 'OTHR',
    status: 'confirmed',
    notes: '',
  })

  useEffect(() => {
    if (event) {
      // Determine slot type from existing dates
      let slotType = 'weekend'
      if (event.start_date === event.end_date) {
        slotType = 'weekday'
      } else {
        const start = new Date(event.start_date + 'T00:00:00')
        if (start.getDay() === 5) slotType = 'extended' // Starts on Friday
      }

      setFormData({
        region_id: event.region_id || '',
        slot_type: slotType,
        start_date: event.start_date || '',
        end_date: event.end_date || '',
        event_type: event.event_type || 'OTHR',
        status: event.status || 'confirmed',
        notes: event.notes || '',
      })
    } else {
      setFormData({
        region_id: '',
        slot_type: 'weekend',
        start_date: '',
        end_date: '',
        event_type: 'OTHR',
        status: 'confirmed',
        notes: '',
      })
    }
  }, [event, open])

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => {
      const next = { ...prev, [name]: value }

      // Auto-compute end_date based on slot type
      if (name === 'slot_type' || name === 'start_date') {
        const slotType = name === 'slot_type' ? value : prev.slot_type
        const startDate = name === 'start_date' ? value : prev.start_date

        if (startDate) {
          if (slotType === 'weekday') {
            next.end_date = startDate
          } else if (slotType === 'weekend') {
            const sat = new Date(startDate + 'T00:00:00')
            const sun = new Date(sat)
            sun.setDate(sun.getDate() + 1)
            next.end_date = `${sun.getFullYear()}-${String(sun.getMonth() + 1).padStart(2, '0')}-${String(sun.getDate()).padStart(2, '0')}`
          } else if (slotType === 'extended') {
            const fri = new Date(startDate + 'T00:00:00')
            const sun = new Date(fri)
            sun.setDate(sun.getDate() + 2)
            next.end_date = `${sun.getFullYear()}-${String(sun.getMonth() + 1).padStart(2, '0')}-${String(sun.getDate()).padStart(2, '0')}`
          }
        }
      }

      return next
    })
  }

  function getDateValidationMessage() {
    if (!formData.start_date) return null
    const d = new Date(formData.start_date + 'T00:00:00')
    const dow = d.getDay()

    if (formData.slot_type === 'weekday' && (dow < 2 || dow > 4)) {
      return 'Weekday events must be on Tuesday, Wednesday, or Thursday'
    }
    if (formData.slot_type === 'weekend' && dow !== 6) {
      return 'Weekend events must start on Saturday'
    }
    if (formData.slot_type === 'extended' && dow !== 5) {
      return 'Extended weekend events must start on Friday'
    }
    return null
  }

  const dateWarning = getDateValidationMessage()

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      region_id: formData.region_id || null,
      start_date: formData.start_date,
      end_date: formData.end_date,
      event_type: formData.event_type,
      status: formData.status,
      notes: formData.notes,
    }
    onSubmit(data, event?.id)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isEdit ? 'Edit Event' : 'Add Event'}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!!dateWarning}>
            {isEdit ? 'Update' : 'Create'}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Region
          </label>
          <select
            name="region_id"
            value={formData.region_id}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">None (Global / Holiday)</option>
            {regions.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        {/* Slot type selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Slot Type
          </label>
          <select
            name="slot_type"
            value={formData.slot_type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {SLOT_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {formData.slot_type === 'weekday'
                ? 'Date (Tue/Wed/Thu)'
                : formData.slot_type === 'extended'
                  ? 'Friday Date'
                  : 'Saturday Date'}
            </label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {dateWarning && (
              <p className="mt-1 text-xs text-red-500">{dateWarning}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500"
            />
            <p className="mt-1 text-xs text-gray-400">Auto-computed from slot type</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Type
            </label>
            <select
              name="event_type"
              value={formData.event_type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {EVENT_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Event details, location, etc."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </form>
    </Modal>
  )
}
