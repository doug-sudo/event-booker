const steps = [
  {
    number: 1,
    title: 'Bring Used Gear',
    description: (
      <>
        Customers bring their used sporting goods to your store during the trade-in event.
        Please be sure to include{' '}
        <a
          href="https://sidelineswap.com/events#guidelines"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline"
        >
          trade-in guidelines
        </a>{' '}
        in your pre-event marketing to your customers.
      </>
    ),
  },
  {
    number: 2,
    title: 'Get a Quote',
    description:
      'SidelineSwap staff on-site evaluate each item and offer a fair market payout for acceptable items. Customers get paid in store credit on the spot.',
  },
  {
    number: 3,
    title: 'Spend Store Credit',
    description:
      'Customers use their store credit to shop your inventory immediately. On average, they spend 3x their payout amount in-store.',
  },
]

export default function CustomerJourney() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
        How It Works for Customers
      </h2>
      <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
        A simple three-step process that turns used gear into new purchases at your store.
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
