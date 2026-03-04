import { useRef, useState } from 'react'
import { MAX_LOGO_SIZE, ACCEPTED_LOGO_TYPES } from '../../utils/constants'

export default function LogoDropzone({ file, onFileChange }) {
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)

  function validateFile(f) {
    if (!ACCEPTED_LOGO_TYPES.includes(f.type)) {
      return 'File type not accepted. Use PNG, JPG, SVG, or WebP.'
    }
    if (f.size > MAX_LOGO_SIZE) {
      return 'File is too large. Maximum size is 5MB.'
    }
    return null
  }

  function handleFile(f) {
    const err = validateFile(f)
    if (err) {
      setError(err)
      return
    }
    setError(null)
    onFileChange(f)
  }

  function handleDrop(e) {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files[0]
    if (f) handleFile(f)
  }

  function handleInputChange(e) {
    const f = e.target.files[0]
    if (f) handleFile(f)
  }

  function formatSize(bytes) {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div>
      {!file ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
            dragOver
              ? 'border-primary bg-green-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <svg className="mx-auto h-12 w-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-sm font-medium text-gray-700">
            Drag and drop your logo here, or click to browse
          </p>
          <p className="text-xs text-gray-500 mt-1">
            PNG, JPG, SVG, or WebP up to 5MB
          </p>
          <input
            ref={inputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.svg,.webp"
            onChange={handleInputChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="border border-gray-200 rounded-xl p-4 flex items-center gap-4">
          <img
            src={URL.createObjectURL(file)}
            alt="Logo preview"
            className="w-16 h-16 object-contain rounded-lg bg-gray-50"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
            <p className="text-xs text-gray-500">{formatSize(file.size)}</p>
          </div>
          <button
            onClick={() => onFileChange(null)}
            className="text-sm text-red-600 hover:text-red-800 font-medium"
          >
            Remove
          </button>
        </div>
      )}

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}
