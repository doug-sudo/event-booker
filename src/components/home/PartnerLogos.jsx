import { partners } from '../../data/partners'

export default function PartnerLogos() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
        Current Retail Partners
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {partners.map((partner) => (
          <img
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            className="h-10 sm:h-12 max-w-[140px] sm:max-w-[160px] object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </section>
  )
}
