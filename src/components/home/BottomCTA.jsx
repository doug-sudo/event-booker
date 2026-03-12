import Button from '../ui/Button'

export default function BottomCTA() {
  return (
    <section className="bg-gradient-to-br from-bg-dark to-primary-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to host a trade-in event?
        </h2>
        <p className="mt-4 text-lg text-green-100/80 max-w-xl mx-auto">
          Join our growing network of retail partners and start turning used gear
          into new revenue for your store.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/schedule" variant="outline" size="lg">
            Schedule an Event
          </Button>
          <Button to="/how-it-works" variant="ghost" size="lg" className="text-green-100 hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
