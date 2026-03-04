import Card from '../ui/Card'
import { metrics } from '../../data/metrics'

export default function MetricsCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary">
              {metric.value}
            </div>
            <div className="mt-2 font-semibold text-gray-900">
              {metric.label}
            </div>
            <div className="mt-1 text-sm text-gray-500">
              {metric.description}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
