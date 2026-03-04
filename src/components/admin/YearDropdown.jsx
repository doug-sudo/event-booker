export default function YearDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value, 10))}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
    >
      <option value={2025}>2025</option>
      <option value={2026}>2026</option>
    </select>
  )
}
