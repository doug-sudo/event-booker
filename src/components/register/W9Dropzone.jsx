import { useRef, useState } from 'react'
import { MAX_W9_SIZE, ACCEPTED_W9_TYPES } from '../../utils/constants'

export default function W9Dropzone({ file, onFileChange }) {
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)

  function validateFile(f) {
    if (!ACCEPTED_W9_TYPES.includes(f.type)) {
      return 'File type not accepted. Use PDF, PNG, or JPG.'
    }
    if (f.size > MAX_W9_SIZE) {
      return 'File is too large. Maximum size is 10MB.'
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
          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
            dragOver
              ? 'border-primary bg-green-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <svg className="mx-auto h-10 w-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-sm font-medium text-gray-700">
            Drag and drop your W-9 here, or click to browse
          </p>
          <p className="text-xs text-gray-500 mt-1">
            PDF, PNG, or JPG up to 10MB
          </p>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleInputChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="border border-gray-200 rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
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
