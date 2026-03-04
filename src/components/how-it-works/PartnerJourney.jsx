const steps = [
  {
    number: 1,
    title: 'Promote the Event',
    description:
      'You promote the event to your customers in the weeks leading-up to the event. SidelineSwap will also promote the event to bring new customers to your store.',
  },
  {
    number: 2,
    title: 'Host the Event',
    description:
      'During the event, simply give the Sideline staff a 10\' x 10\' area and they will give customers trade-in credit to spend with you.',
  },
  {
    number: 3,
    title: 'We Handle the Rest',
    description:
      'After the event, SidelineSwap staff will clean everything up and get the gear prepped for shipment from your store. You get paid for the value of the store credit issued!',
  },
]

export default function PartnerJourney() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
        How It Works for You
      </h2>
      <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
        Your role is simple — promote, host, and let us do the heavy lifting.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={step.number} className="relative text-center">
            {/* Connector line (desktop only) */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200" />
            )}

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4 relative z-10">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
