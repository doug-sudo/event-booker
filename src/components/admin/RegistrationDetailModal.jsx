import Modal from '../ui/Modal'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { REGISTRATION_STATUSES } from '../../utils/constants'
import { formatFullDate } from '../../utils/dateFormatters'

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
          <div>
            <p className="text-gray-500">Loading Dock</p>
            <p className="font-medium">
              {registration.has_loading_dock === true ? 'Yes' : registration.has_loading_dock === false ? 'No' : '—'}
            </p>
          </div>
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
