export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required,
  options,
  placeholder,
  rows,
  disabled,
  readOnly,
}) {
  const inputClasses = `w-full px-3 py-2 border rounded-lg text-sm transition-colors ${
    error
      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-primary focus:border-primary'
  } ${disabled || readOnly ? 'bg-gray-50 text-gray-500' : 'bg-white'} focus:outline-none focus:ring-1`

  const handleChange = (e) => {
    onChange(name, e.target.value)
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'select' ? (
        <select
          value={value || ''}
          onChange={handleChange}
          disabled={disabled}
          className={inputClasses}
        >
          <option value="">Select...</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          value={value || ''}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows || 4}
          disabled={disabled}
          readOnly={readOnly}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          value={value || ''}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          className={inputClasses}
        />
      )}

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
