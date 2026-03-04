export default function Card({ children, className = '', padding = 'p-6', ...props }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
