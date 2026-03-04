import { useState } from 'react'

const phases = [
  {
    phase: 'Before the Event',
    partner: [
      'Confirm event date and logistics',
      'Get trade-in event signage up in your store (3-4 wks in advance)',
      'Promote the event through social and email to your customers & local organizations (1-2 wks in advance)',
      'Prepare dedicated floor space for SidelineSwap setup',
      'Receive & store 3-5 48"x40"x38" gaylord boxes (flattened on pallet)',
      'Brief your staff on the trade-in process',
    ],
    sls: [
      'Provide co-branded marketing materials and flyers',
      'Coordinate social media promotion',
      'Performs local outreach to sports organizations',
      'Shipping 3-5 48"x40"x38" gaylord boxes (flattened on pallet)',
    ],
  },
  {
    phase: 'During the Event',
    partner: [
      'Provide 10\'x10\' space, tables, & chairs to SLS staff',
      'Issue store credit to customers for approved trade-ins',
      'Provide space in your backroom for trade-in storage',
    ],
    sls: [
      'Set up and manage the trade-in booth',
      'Evaluate and price all incoming gear',
      'Handle all customer-facing trade-in interactions',
      'Track payouts and inventory in real-time',
      'Storing & organizing the excess trade-ins',
    ],
  },
  {
    phase: 'After the Event',
    partner: [
      'Print shipping labels for freight pick-up',
      'Have pallets ready & prepped for freight pick-up',
    ],
    sls: [
      'Secures all gear in gaylord boxes for shipment',
      'Sends partner trade-in reconciliation report',
      'Payment is issued 90 days after the event',
    ],
  },
]

export default function ResponsibilityTable() {
  const [openPhases, setOpenPhases] = useState(new Set())

  function togglePhase(index) {
    setOpenPhases((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
        Who Does What
      </h2>
      <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
        A clear breakdown of responsibilities so you know exactly what to expect.
      </p>

      <div className="space-y-4">
        {phases.map((p, index) => {
          const isOpen = openPhases.has(index)

          return (
            <div key={p.phase} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => togglePhase(index)}
                className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold text-gray-900">{p.phase}</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {/* Partner */}
                    <div className="p-6">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-accent-partner" />
                        <span className="text-sm font-semibold text-accent-partner">
                          Your Responsibilities
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {p.partner.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-accent-partner mt-0.5">&#x2022;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SLS */}
                    <div className="p-6">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-accent-sls" />
                        <span className="text-sm font-semibold text-accent-sls">
                          SidelineSwap Handles
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {p.sls.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-accent-sls mt-0.5">&#x2022;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
