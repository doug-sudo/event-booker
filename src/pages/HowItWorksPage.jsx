import CustomerJourney from '../components/how-it-works/CustomerJourney'
import PartnerJourney from '../components/how-it-works/PartnerJourney'
import ResponsibilityTable from '../components/how-it-works/ResponsibilityTable'
import HostingFeeCallout from '../components/how-it-works/HostingFeeCallout'

export default function HowItWorksPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-bg-dark to-primary-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            How Events Work
          </h1>
          <p className="mt-4 text-green-100/80 max-w-2xl mx-auto">
            Everything you need to know about hosting a SidelineSwap trade-in
            event at your store.
          </p>
        </div>
      </section>

      <CustomerJourney />
      <PartnerJourney />
      <ResponsibilityTable />
      <HostingFeeCallout />
    </>
  )
}
