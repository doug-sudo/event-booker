import { useSearchParams } from 'react-router-dom'
import RegistrationWizard from '../components/register/RegistrationWizard'

export default function RegisterPage() {
  const [searchParams] = useSearchParams()
  const regionId = searchParams.get('region') || ''
  const date = searchParams.get('date') || ''
  const slotType = searchParams.get('type') || 'weekend'
  const includeFriday = searchParams.get('includeFriday') === 'true'

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-bg-dark to-primary-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Register for an Event
          </h1>
          <p className="mt-3 text-green-100/80 max-w-2xl mx-auto">
            Complete the form below to register your store for a SidelineSwap
            trade-in event.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RegistrationWizard
          initialRegionId={regionId}
          initialDate={date}
          initialSlotType={slotType}
          initialIncludeFriday={includeFriday}
        />
      </div>
    </>
  )
}
