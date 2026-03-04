import Button from '../ui/Button'
import { gearCategories } from '../../data/gearCategories'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-bg-dark to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column — copy */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Turn used gear into{' '}
              <span className="text-green-400">new sales</span>
            </h1>
            <p className="mt-6 text-lg text-green-100/80 max-w-xl">
              Partner with SidelineSwap to host trade-in events at your store.
              Customers bring in used sporting goods, get store credit, and spend
              it with you — driving foot traffic, boosting revenue, and building
              loyalty.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/schedule" variant="outline" size="lg">
                Schedule an Event
              </Button>
              <Button to="/how-it-works" variant="ghost" size="lg" className="text-green-100 hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right column — gear category grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 justify-items-center">
            {gearCategories.map((cat) => (
              <div key={cat.id} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white/10 border border-white/20">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-green-100/70 text-center">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
