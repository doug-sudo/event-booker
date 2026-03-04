import Card from '../ui/Card'

export default function SummaryMetrics({ registrations, events }) {
  const total = registrations.length
  const approved = registrations.filter((r) => r.status === 'approved').length
  const pending = registrations.filter((r) => r.status === 'pending').length
  const totalEvents = events.filter((e) => e.event_type !== 'HOLIDAY').length

  const cards = [
    { label: 'Total Registrations', value: total, color: 'text-gray-900' },
    { label: 'Approved', value: approved, color: 'text-green-600' },
    { label: 'Pending Review', value: pending, color: 'text-yellow-600' },
    { label: 'Events Scheduled', value: totalEvents, color: 'text-blue-600' },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <Card key={c.label}>
          <p className="text-sm text-gray-500">{c.label}</p>
          <p className={`text-3xl font-bold mt-1 ${c.color}`}>{c.value}</p>
        </Card>
      ))}
    </div>
  )
}
