import FormField from './FormField'
import W9Dropzone from './W9Dropzone'
import { FOOT_TRAFFIC_OPTIONS, EVENT_REQUIREMENTS, TORONTO_REGION_NAMES } from '../../utils/constants'

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

  function handleRequirementToggle(req, checked) {
    const current = formData.event_requirements || []
    const updated = checked
      ? [...current, req]
      : current.filter((r) => r !== req)
    onChange('event_requirements', updated)
  }

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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Date(s) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={datesValue}
          onChange={(e) => handleDatesChange('preferred_dates', e.target.value)}
          placeholder="e.g. 2026-03-14, 2026-04-18"
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 ${
            errors.preferred_dates
              ? 'border-red-300 focus:ring-red-500'
              : 'border-gray-300 focus:ring-primary focus:border-primary'
          }`}
        />
        <p className="mt-1 text-xs text-gray-500">
          Enter one or more dates separated by commas (YYYY-MM-DD format)
        </p>
        {errors.preferred_dates && (
          <p className="mt-1 text-sm text-red-600">{errors.preferred_dates}</p>
        )}
      </div>

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

      {/* W9 Upload — US stores only */}
      {!isToronto && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            W-9 Form Upload <span className="text-xs text-gray-400">(optional)</span>
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Upload a completed W-9 form. Accepted formats: PDF, PNG, JPG (max 10MB).
          </p>
          <W9Dropzone file={w9File} onFileChange={onW9Change} />
        </div>
      )}

      <FormField
        label="Special Considerations"
        name="special_notes"
        type="textarea"
        value={formData.special_notes}
        onChange={onChange}
        placeholder="Any special requirements, layout constraints, or other notes..."
        rows={4}
      />
    </div>
  )
}
