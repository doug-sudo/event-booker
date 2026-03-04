import { useState } from 'react'
import { useRegions } from '../hooks/useRegions'
import { useEvents } from '../hooks/useEvents'
import ProgressTracker from '../components/schedule/ProgressTracker'
import RegionGrid from '../components/schedule/RegionGrid'
import EventCalendar from '../components/schedule/EventCalendar'

export default function SchedulePage() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const { regions, loading: regionsLoading } = useRegions()
  const { events: allEvents, loading: allEventsLoading } = useEvents()
  const { events: regionEvents, loading: regionEventsLoading } = useEvents(
    selectedRegion ? { regionId: selectedRegion.id } : {}
  )

  const progressStep = selectedRegion ? 1 : 0

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-bg-dark to-primary-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Schedule an Event
          </h1>
          <p className="mt-3 text-green-100/80 max-w-2xl mx-auto">
            Select your region to see available weekends, then pick a date to get started.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProgressTracker currentStep={progressStep} />

        {/* Region selected bar */}
        {selectedRegion && (
          <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6 flex items-center justify-between">
            <div className="text-sm">
              <span className="text-green-800 font-medium">
                Region: {selectedRegion.name}
              </span>
              <span className="text-green-600 ml-2">
                {selectedRegion.coverage_description}
              </span>
            </div>
            <button
              onClick={() => setSelectedRegion(null)}
              className="text-sm text-green-700 font-medium hover:text-green-900 underline"
            >
              Change region
            </button>
          </div>
        )}

        {/* Content: Region grid or Calendar */}
        {!selectedRegion ? (
          <>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Choose Your Region
            </h2>
            <RegionGrid
              regions={regions}
              events={allEvents}
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
              loading={regionsLoading || allEventsLoading}
            />
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2026 Event Calendar
            </h2>
            <EventCalendar
              events={regionEvents}
              regionId={selectedRegion.id}
              loading={regionEventsLoading}
            />
          </>
        )}
      </div>
    </>
  )
}
