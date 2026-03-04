import Card from '../ui/Card'

export default function RegionCard({ region, bookedCount, openCount, selected, onClick }) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-md ${
        selected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <h3 className="font-semibold text-gray-900 mb-1">{region.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{region.coverage_description}</p>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1 text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded-full">
          {bookedCount} booked
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
          {openCount} open
        </span>
      </div>
    </Card>
  )
}
