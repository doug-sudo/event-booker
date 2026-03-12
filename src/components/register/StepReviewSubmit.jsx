import { EVENT_REQUIREMENTS, TORONTO_REGION_NAMES, TIME_OPTIONS } from '../../utils/constants'

function formatTime(value) {
  if (!value) return ''
  const opt = TIME_OPTIONS.find((t) => t.value === value)
  return opt ? opt.label : value
}

export default function StepReviewSubmit({
  formData,
  logoFile,
  w9File,
  regions,
  termsAccepted,
  onTermsChange,
}) {
  const region = regions.find((r) => r.id === formData.region_id)
  const isToronto = region && TORONTO_REGION_NAMES.includes(region.name)

  const confirmedReqs = formData.event_requirements || []
  const unconfirmedReqs = EVENT_REQUIREMENTS.filter((r) => !confirmedReqs.includes(r))

  // Build event hours display
  const eventHoursEntries = formData.event_hours ? Object.entries(formData.event_hours) : []
  const hasEventHours = eventHoursEntries.some(([, h]) => h.open || h.close)

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Review & Submit</h2>

      {/* Store Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Store Information</h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div>
            <dt className="text-gray-500">Store Name</dt>
            <dd className="font-medium text-gray-900">{formData.store_name || '—'}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Contact</dt>
            <dd className="font-medium text-gray-900">{formData.contact_name || '—'}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Email</dt>
            <dd className="font-medium text-gray-900">{formData.email || '—'}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Phone</dt>
            <dd className="font-medium text-gray-900">{formData.phone || '—'}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Region</dt>
            <dd className="font-medium text-gray-900">{region?.name || '—'}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Address</dt>
            <dd className="font-medium text-gray-900">
              {formData.address_1 || '—'}
              {formData.address_2 && <>, {formData.address_2}</>}
              <br />
              {formData.city || '—'}, {formData.state || '—'} {formData.zip || '—'}
            </dd>
          </div>
        </dl>
      </div>

      {/* Event Preferences */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Event Preferences</h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div>
            <dt className="text-gray-500">Preferred Dates</dt>
            <dd className="font-medium text-gray-900">
              {Array.isArray(formData.preferred_dates) && formData.preferred_dates.length > 0
                ? formData.preferred_dates.join(', ')
                : '—'}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500">Foot Traffic</dt>
            <dd className="font-medium text-gray-900">{formData.foot_traffic || '—'}</dd>
          </div>
        </dl>

        {/* Event Hours */}
        {hasEventHours && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-500 mb-1">Event Hours</p>
            <div className="space-y-1">
              {eventHoursEntries.map(([dateStr, hours]) => {
                if (!hours.open && !hours.close) return null
                const d = new Date(dateStr + 'T00:00:00')
                const dayLabel = d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
                return (
                  <p key={dateStr} className="text-sm text-gray-700">
                    <span className="font-medium">{dayLabel}:</span>{' '}
                    {formatTime(hours.open) || '—'} – {formatTime(hours.close) || '—'}
                  </p>
                )
              })}
            </div>
          </div>
        )}

        {/* Event Requirements */}
        {confirmedReqs.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-500 mb-1">Event Requirements Confirmed</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
              {confirmedReqs.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {unconfirmedReqs.length > 0 && (
          <div className="mt-2">
            <p className="text-xs font-semibold text-amber-600 mb-1">Not Yet Confirmed</p>
            <ul className="list-disc list-inside text-sm text-amber-600 space-y-0.5">
              {unconfirmedReqs.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Shipping & Logistics */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Shipping & Logistics</h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div>
            <dt className="text-gray-500">Liftgate Required</dt>
            <dd className="font-medium text-gray-900">
              {formData.requires_liftgate === true ? 'Yes' : formData.requires_liftgate === false ? 'No' : '—'}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500">Pallets Available</dt>
            <dd className="font-medium text-gray-900">
              {formData.can_provide_pallets === true ? 'Yes' : formData.can_provide_pallets === false ? 'No' : '—'}
            </dd>
          </div>
          {formData.special_notes && (
            <div className="col-span-2">
              <dt className="text-gray-500">Special Notes</dt>
              <dd className="font-medium text-gray-900">{formData.special_notes}</dd>
            </div>
          )}
        </dl>
      </div>

      {/* Logo */}
      {logoFile && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Store Logo</h3>
          <div className="flex items-center gap-3">
            <img
              src={URL.createObjectURL(logoFile)}
              alt="Logo preview"
              className="w-12 h-12 object-contain rounded bg-white border"
            />
            <span className="text-sm text-gray-600">{logoFile.name}</span>
          </div>
        </div>
      )}

      {/* W9 */}
      {!isToronto && w9File && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">W-9 Form</h3>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">{w9File.name}</span>
          </div>
        </div>
      )}

      {/* Terms & Conditions */}
      <div className="border border-gray-200 rounded-lg p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => onTermsChange(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-600">
            I agree to the SidelineSwap Partner Portal{' '}
            <a
              href="/documents/SidelineSwap-Terms-and-Conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Terms & Conditions
            </a>{' '}
            and understand that a $300 hosting fee applies per event (first event is free)
            with Net 90 payment terms. After your first event, the $300 fee is waived if
            30 or more customers trade-in at the event.
          </span>
        </label>
      </div>
    </div>
  )
}
