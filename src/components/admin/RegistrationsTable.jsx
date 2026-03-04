import { useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import RegistrationDetailModal from './RegistrationDetailModal'
import { REGISTRATION_STATUSES } from '../../utils/constants'
import { formatFullDate } from '../../utils/dateFormatters'

export default function RegistrationsTable({ registrations, onUpdateStatus }) {
  const [selectedReg, setSelectedReg] = useState(null)
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered =
    statusFilter === 'all'
      ? registrations
      : registrations.filter((r) => r.status === statusFilter)

  function badgeVariant(status) {
    return status === 'approved' ? 'green' : status === 'pending' ? 'yellow' : 'red'
  }

  async function handleApprove(id) {
    await onUpdateStatus(id, 'approved')
    setSelectedReg(null)
  }

  async function handleDecline(id) {
    await onUpdateStatus(id, 'declined')
    setSelectedReg(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Registrations</h2>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="declined">Declined</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-4 py-3 font-medium text-gray-600">Store</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 hidden sm:table-cell">Contact</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 hidden md:table-cell">Region</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 hidden lg:table-cell">Submitted</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                    No registrations found.
                  </td>
                </tr>
              ) : (
                filtered.map((reg) => (
                  <tr key={reg.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {reg.store_name}
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">
                      {reg.contact_name}
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">
                      {reg.regions?.name || '—'}
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">
                      {reg.submitted_at
                        ? formatFullDate(reg.submitted_at.split('T')[0])
                        : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={badgeVariant(reg.status)}>
                        {REGISTRATION_STATUSES[reg.status]?.label}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {reg.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleApprove(reg.id)}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => handleDecline(reg.id)}
                            >
                              Decline
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedReg(reg)}
                        >
                          View
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <RegistrationDetailModal
        registration={selectedReg}
        open={!!selectedReg}
        onClose={() => setSelectedReg(null)}
        onApprove={handleApprove}
        onDecline={handleDecline}
      />
    </div>
  )
}
