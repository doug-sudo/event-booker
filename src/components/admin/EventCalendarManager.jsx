import { useState } from 'react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import EventFormModal from './EventFormModal'
import { EVENT_TYPES } from '../../utils/constants'
import { formatDateRange } from '../../utils/dateFormatters'
import { createEvent, updateEvent, deleteEvent } from '../../services/eventService'

export default function EventCalendarManager({ events, regions, onRefresh }) {
  const [showForm, setShowForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState(null)
  const [regionFilter, setRegionFilter] = useState('all')

  const filtered =
    regionFilter === 'all'
      ? events
      : regionFilter === 'global'
        ? events.filter((e) => !e.region_id)
        : events.filter((e) => e.region_id === regionFilter)

  async function handleSubmit(data, eventId) {
    try {
      if (eventId) {
        await updateEvent(eventId, data)
      } else {
        await createEvent(data)
      }
      setShowForm(false)
      setEditingEvent(null)
      onRefresh()
    } catch (err) {
      alert('Error saving event: ' + err.message)
    }
  }

  async function handleDelete(eventId) {
    if (!confirm('Delete this event?')) return
    try {
      await deleteEvent(eventId)
      onRefresh()
    } catch (err) {
      alert('Error deleting event: ' + err.message)
    }
  }

  function handleEdit(event) {
    setEditingEvent(event)
    setShowForm(true)
  }

  function handleAdd() {
    setEditingEvent(null)
    setShowForm(true)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Event Calendar</h2>
        <div className="flex items-center gap-3">
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="all">All Regions</option>
            <option value="global">Global / Holidays</option>
            {regions.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
          <Button onClick={handleAdd} size="sm">
            Add Event
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Type</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 hidden sm:table-cell">Region</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 hidden md:table-cell">Notes</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                    No events found.
                  </td>
                </tr>
              ) : (
                filtered.map((evt) => {
                  const typeInfo = EVENT_TYPES[evt.event_type]
                  return (
                    <tr key={evt.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {formatDateRange(evt.start_date, evt.end_date)}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${typeInfo?.color} ${typeInfo?.text}`}
                        >
                          {typeInfo?.short}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">
                        {evt.regions?.name || 'Global'}
                      </td>
                      <td className="px-4 py-3 text-gray-600 hidden md:table-cell truncate max-w-[200px]">
                        {evt.notes || '—'}
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={
                            evt.status === 'confirmed'
                              ? 'green'
                              : evt.status === 'tentative'
                                ? 'yellow'
                                : 'red'
                          }
                        >
                          {evt.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(evt)}
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => handleDelete(evt.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <EventFormModal
        open={showForm}
        onClose={() => {
          setShowForm(false)
          setEditingEvent(null)
        }}
        onSubmit={handleSubmit}
        event={editingEvent}
        regions={regions}
      />
    </div>
  )
}
