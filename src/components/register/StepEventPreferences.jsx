import { useMemo } from 'react'
import FormField from './FormField'
import W9Dropzone from './W9Dropzone'
import { FOOT_TRAFFIC_OPTIONS, EVENT_REQUIREMENTS, TORONTO_REGION_NAMES, TIME_OPTIONS } from '../../utils/constants'

export default function StepEventPreferences({ formData, errors, onChange, regions, w9File, onW9Change }) {
  const footTrafficOptions = FOOT_TRAFFIC_OPTIONS.map((opt) => ({
    value: opt,
    label: opt,
  }))

  const isWeekend = formData.slot_type === 'weekend'

  const selectedRegion = regions?.find((r) => r.id === formData.region_id)
  const isToronto = selectedRegion && TORONTO_REGION_NAMES.includes(selectedRegion.name)

  // Handle preferred dates as comma-separated string
  const datesValue = Array.isArray(formData.preferred_dates)
    ? formData.preferred_dates.join(', ')
    : formData.preferred_dates || ''

  function handleDatesChange(name, value) {
    const dates = value
      .split(',')
      .map((d) => d.trim())
      .filter(Boolean)
    onChange(name, dates)
  }

  // Compute display date range
  function getDateDisplay() {
    if (!formData.preferred_dates?.length) return ''
    const dateStr = formData.preferred_dates[0]
    if (!dateStr) return ''

    if (formData.slot_type === 'weekday') {
      const d = new Date(dateStr + 'T00:00:00')
      return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    }

    // Weekend
    const sat = new Date(dateStr + 'T00:00:00')
    const sun = new Date(sat)
    sun.setDate(sun.getDate() + 1)

    if (formData.include_friday) {
      const fri = new Date(sat)
      fri.setDate(fri.getDate() - 1)
      return `${fri.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} – ${sun.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}`
    }

    return `${sat.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} – ${sun.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}`
  }

  const dateDisplay = getDateDisplay()

  // Compute event days for the Event Hours section
  const eventDays = useMemo(() => {
    if (!formData.preferred_dates?.length) return []
    const dateStr = formData.preferred_dates[0]
    if (!dateStr) return []

    const days = []

    if (formData.slot_type === 'weekday') {
      const d = new Date(dateStr + 'T00:00:00')
      days.push({
        date: dateStr,
        label: d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
      })
    } else {
      // Weekend — sat is the base date
      const sat = new Date(dateStr + 'T00:00:00')
      const sun = new Date(sat)
      sun.setDate(sun.getDate() + 1)

      if (formData.include_friday) {
        const fri = new Date(sat)
        fri.setDate(fri.getDate() - 1)
        const friStr = `${fri.getFullYear()}-${String(fri.getMonth() + 1).padStart(2, '0')}-${String(fri.getDate()).padStart(2, '0')}`
        days.push({
          date: friStr,
          label: fri.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
        })
      }

      days.push({
        date: dateStr,
        label: sat.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
      })

      const sunStr = `${sun.getFullYear()}-${String(sun.getMonth() + 1).padStart(2, '0')}-${String(sun.getDate()).padStart(2, '0')}`
      days.push({
        date: sunStr,
        label: sun.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
      })
    }

    return days
  }, [formData.preferred_dates, formData.slot_type, formData.include_friday])

  function handleEventHourChange(dateStr, field, value) {
    const currentHours = formData.event_hours || {}
    const dayHours = currentHours[dateStr] || {}
    onChange('event_hours', {
      ...currentHours,
      [dateStr]: { ...dayHours, [field]: value },
    })
  }

  function handleRequirementToggle(req, checked) {
    const current = formData.event_requirements || []
    const updated = checked
      ? [...current, req]
      : current.filter((r) => r !== req)
    onChange('event_requirements', updated)
  }

  const timeSelectOptions = TIME_OPTIONS.map((t) => ({ value: t.value, label: t.label }))

  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Event Preferences</h2>

      {/* Event type indicator */}
      {formData.slot_type && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm font-medium text-gray-900">
            {formData.slot_type === 'weekday' ? 'Weekday Event (Single Day)' : 'Weekend Event'}
          </p>
          {dateDisplay && (
            <p className="text-sm text-gray-600 mt-0.5">{dateDisplay}</p>
          )}
        </div>
      )}

      {/* Include Friday checkbox — only for weekend registrations */}
      {isWeekend && (
        <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.include_friday || false}
            onChange={(e) => onChange('include_friday', e.target.checked)}
            className="w-4 h-4 text-primary rounded focus:ring-primary"
          />
          <div>
            <span className="text-sm font-medium text-gray-900">
              Include Friday (Fri–Sun event)
            </span>
            <p className="text-xs text-gray-500 mt-0.5">
              Add Friday to your weekend event for 3 days of trade-ins
            </p>
          </div>
        </label>
      )}

      {/* Event Hours */}
      {eventDays.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Hours
          </label>
          <p className="text-xs text-gray-500 mb-3">
            What hours would you like the event to run each day?
          </p>
          <div className="space-y-2">
            {eventDays.map((day) => {
              const dayHours = formData.event_hours?.[day.date] || {}
              return (
                <div
                  key={day.date}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-sm font-medium text-gray-700 sm:w-40 shrink-0">
                    {day.label}
                  </span>
                  <div className="flex items-center gap-2 flex-1">
                    <select
                      value={dayHours.open || ''}
                      onChange={(e) => handleEventHourChange(day.date, 'open', e.target.value)}
                      className="flex-1 px-2 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                    >
                      <option value="">Opens</option>
                      {timeSelectOptions.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                    <span className="text-gray-400 text-sm">to</span>
                    <select
                      value={dayHours.close || ''}
                      onChange={(e) => handleEventHourChange(day.date, 'close', e.target.value)}
                      className="flex-1 px-2 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                    >
                      <option value="">Closes</option>
                      {timeSelectOptions.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <FormField
        label="Expected foot traffic to your store during the event"
        name="foot_traffic"
        type="select"
        value={formData.foot_traffic}
        onChange={onChange}
        options={footTrafficOptions}
      />

      {/* Event Requirements Checklist */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Please confirm you can provide the following for the event:
        </label>
        <div className="space-y-1">
          {EVENT_REQUIREMENTS.map((req) => (
            <label key={req} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.event_requirements?.includes(req) || false}
                onChange={(e) => handleRequirementToggle(req, e.target.checked)}
                className="mt-0.5 w-4 h-4 text-primary rounded focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{req}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Shipping & Logistics Section */}
      <div className="border border-gray-200 rounded-xl p-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Shipping & Logistics
        </h3>

        {/* Loading Dock */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you have a loading dock?
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="has_loading_dock"
                checked={formData.has_loading_dock === true}
                onChange={() => onChange('has_loading_dock', true)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="has_loading_dock"
                checked={formData.has_loading_dock === false}
                onChange={() => onChange('has_loading_dock', false)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Liftgate Required */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Is a liftgate truck required for pick-up/drop-off?
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="requires_liftgate"
                checked={formData.requires_liftgate === true}
                onChange={() => onChange('requires_liftgate', true)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="requires_liftgate"
                checked={formData.requires_liftgate === false}
                onChange={() => onChange('requires_liftgate', false)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Pallets Available */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Can you provide at least 2 shipping pallets post-event?
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="can_provide_pallets"
                checked={formData.can_provide_pallets === true}
                onChange={() => onChange('can_provide_pallets', true)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="can_provide_pallets"
                checked={formData.can_provide_pallets === false}
                onChange={() => onChange('can_provide_pallets', false)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Special Considerations — moved into shipping section */}
        <FormField
          label="Special Considerations"
          name="special_notes"
          type="textarea"
          value={formData.special_notes}
          onChange={onChange}
          placeholder="Any special shipping requirements, layout constraints, or other notes..."
          rows={3}
        />
      </div>

      {/* W9 / Wire Transfer Upload — all regions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {isToronto ? 'W-9 / Wire Transfer Information' : 'W-9 Form Upload'}{' '}
          <span className="text-xs text-gray-400">(optional)</span>
        </label>
        <p className="text-xs text-gray-500 mb-2">
          Upload a completed {isToronto ? 'W-9 or wire transfer form' : 'W-9 form'}. Accepted formats: PDF, PNG, JPG (max 10MB).
        </p>
        {isToronto && (
          <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
            <span>Canadian partners: use this field to upload your bank wire transfer information.</span>
            <a
              href="/documents/International-Wire-Transfer-Information.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-primary hover:text-primary-dark font-medium"
              title="Download blank wire transfer form"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Download blank form</span>
            </a>
          </p>
        )}
        <W9Dropzone file={w9File} onFileChange={onW9Change} />
      </div>
    </div>
  )
}
