import Modal from '../ui/Modal'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { REGISTRATION_STATUSES, TIME_OPTIONS } from '../../utils/constants'
import { formatFullDate } from '../../utils/dateFormatters'

function formatTime(value) {
  if (!value) return ''
  const opt = TIME_OPTIONS.find((t) => t.value === value)
  return opt ? opt.label : value
}

export default function RegistrationDetailModal({
  registration,
  open,
  onClose,
  onApprove,
  onDecline,
}) {
  if (!registration) return null

  const statusInfo = REGISTRATION_STATUSES[registration.status]
  const badgeVariant =
    registration.status === 'approved'
      ? 'green'
      : registration.status === 'pending'
        ? 'yellow'
        : 'red'

  // Event hours display
  const eventHoursEntries = registration.event_hours ? Object.entries(registration.event_hours) : []
  const hasEventHours = eventHoursEntries.some(([, h]) => h.open || h.close)

  // Backward compat: show liftgate if present, fall back to loading dock for old records
  const hasLiftgateField = registration.requires_liftgate !== null && registration.requires_liftgate !== undefined
  const hasLoadingDockField = registration.has_loading_dock !== null && registration.has_loading_dock !== undefined

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Registration Details"
      footer={
        registration.status === 'pending' && (
          <>
            <Button variant="danger" onClick={() => onDecline(registration.id)}>
              Decline
            </Button>
            <Button onClick={() => onApprove(registration.id)}>
              Approve
            </Button>
          </>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {registration.store_name}
          </h3>
          <Badge variant={badgeVariant}>{statusInfo?.label}</Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Contact</p>
            <p className="font-medium">{registration.contact_name}</p>
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">{registration.email}</p>
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium">{registration.phone || '—'}</p>
          </div>
          <div>
            <p className="text-gray-500">Region</p>
            <p className="font-medium">{registration.regions?.name || '—'}</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-500">Address</p>
            <p className="font-medium">
              {registration.address_1 || '—'}
              {registration.address_2 && `, ${registration.address_2}`}
              {(registration.city || registration.state || registration.zip) && (
                <>
                  <br />
                  {registration.city || ''}{registration.city && registration.state ? ', ' : ''}
                  {registration.state || ''} {registration.zip || ''}
                </>
              )}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Submitted</p>
            <p className="font-medium">
              {registration.submitted_at
                ? formatFullDate(registration.submitted_at.split('T')[0])
                : '—'}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Foot Traffic</p>
            <p className="font-medium">{registration.foot_traffic || '—'}</p>
          </div>
          {/* Liftgate (new) or Loading Dock (old records) */}
          {hasLiftgateField ? (
            <div>
              <p className="text-gray-500">Liftgate Required</p>
              <p className="font-medium">
                {registration.requires_liftgate === true ? 'Yes' : 'No'}
              </p>
            </div>
          ) : hasLoadingDockField ? (
            <div>
              <p className="text-gray-500">Loading Dock</p>
              <p className="font-medium">
                {registration.has_loading_dock === true ? 'Yes' : 'No'}
              </p>
            </div>
          ) : null}
          {/* Pallets Available (new) */}
          {registration.can_provide_pallets !== null && registration.can_provide_pallets !== undefined && (
            <div>
              <p className="text-gray-500">Pallets Available</p>
              <p className="font-medium">
                {registration.can_provide_pallets === true ? 'Yes' : 'No'}
              </p>
            </div>
          )}
        </div>

        {registration.preferred_dates &&
          registration.preferred_dates.length > 0 && (
            <div className="text-sm">
              <p className="text-gray-500 mb-1">Preferred Dates</p>
              <p className="font-medium">
                {registration.preferred_dates.join(', ')}
              </p>
            </div>
          )}

        {/* Event Hours */}
        {hasEventHours && (
          <div className="text-sm">
            <p className="text-gray-500 mb-1">Event Hours</p>
            <div className="space-y-0.5">
              {eventHoursEntries.map(([dateStr, hours]) => {
                if (!hours.open && !hours.close) return null
                const d = new Date(dateStr + 'T00:00:00')
                const dayLabel = d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
                return (
                  <p key={dateStr} className="text-gray-700">
                    <span className="font-medium">{dayLabel}:</span>{' '}
                    {formatTime(hours.open) || '—'} – {formatTime(hours.close) || '—'}
                  </p>
                )
              })}
            </div>
          </div>
        )}

        {/* Event Requirements */}
        {registration.event_requirements &&
          registration.event_requirements.length > 0 && (
            <div className="text-sm">
              <p className="text-gray-500 mb-1">Event Requirements Confirmed</p>
              <ul className="list-disc list-inside text-gray-700 space-y-0.5">
                {registration.event_requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          )}

        {registration.special_notes && (
          <div className="text-sm">
            <p className="text-gray-500 mb-1">Special Notes</p>
            <p className="text-gray-700">{registration.special_notes}</p>
          </div>
        )}

        {registration.logo_url && (
          <div>
            <p className="text-sm text-gray-500 mb-2">Store Logo</p>
            <img
              src={registration.logo_url}
              alt="Store logo"
              className="h-16 object-contain bg-gray-50 rounded-lg border p-2"
            />
          </div>
        )}

        {registration.w9_url && (
          <div className="text-sm">
            <p className="text-gray-500 mb-1">W-9 Form</p>
            <a
              href={registration.w9_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              View W-9
            </a>
          </div>
        )}
      </div>
    </Modal>
  )
}
