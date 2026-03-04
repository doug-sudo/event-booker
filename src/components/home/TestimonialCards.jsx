import Card from '../ui/Card'
import { testimonials } from '../../data/testimonials'

export default function TestimonialCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
        What Our Partners Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name}>
            <div className="text-3xl text-primary mb-3">&ldquo;</div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t.quote}
            </p>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500">
                {t.store} &middot; {t.location}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
