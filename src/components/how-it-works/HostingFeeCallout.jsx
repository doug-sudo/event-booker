import Button from '../ui/Button'

export default function HostingFeeCallout() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-xl shadow-sm border-2 border-primary/20 p-8 sm:p-12 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Event Marketing Fee
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
          <div>
            <div className="text-4xl font-bold text-primary">FREE</div>
            <div className="text-sm text-gray-500 mt-1">first event</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-200" />
          <div>
            <div className="text-4xl font-bold text-gray-900">$300</div>
            <div className="text-sm text-gray-500 mt-1">per event after</div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          Your first event is completely free — no risk to get started. After
          your first event, the $300 fee is waived if you get 30 or more
          customers to your event to trade-in.
        </p>

        <Button to="/schedule" size="lg">
          Schedule an Event
        </Button>
      </div>
    </section>
  )
}
