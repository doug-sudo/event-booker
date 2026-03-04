import { useRegistrations } from '../hooks/useRegistrations'
import { useEvents } from '../hooks/useEvents'
import { useRegions } from '../hooks/useRegions'
import SummaryMetrics from '../components/admin/SummaryMetrics'
import RegistrationsTable from '../components/admin/RegistrationsTable'
import EventCalendarManager from '../components/admin/EventCalendarManager'
import LoadingSpinner from '../components/ui/LoadingSpinner'

export default function AdminDashboardPage() {
  const { registrations, loading: regLoading, updateStatus } = useRegistrations()
  const { events, loading: evtLoading, refetch: refetchEvents } = useEvents({ year: 2026 })
  const { regions } = useRegions()

  const loading = regLoading || evtLoading

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-8 pt-14 lg:pt-0">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">2026 Season Overview</p>
      </div>

      <SummaryMetrics registrations={registrations} events={events} />

      <div id="registrations">
        <RegistrationsTable
          registrations={registrations}
          onUpdateStatus={updateStatus}
        />
      </div>

      <div id="calendar">
        <EventCalendarManager
          events={events}
          regions={regions}
          onRefresh={refetchEvents}
        />
      </div>
    </div>
  )
}
