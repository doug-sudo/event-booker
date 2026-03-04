const steps = ['Select Region', 'Pick Date', 'Register', 'SLS Review', 'Download Assets']

export default function ProgressTracker({ currentStep = 0 }) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8">
      {steps.map((label, i) => {
        const isComplete = i < currentStep
        const isActive = i === currentStep

        return (
          <div key={i} className="flex items-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1.5">
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${
                  isComplete
                    ? 'bg-primary text-white'
                    : isActive
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isComplete ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`text-xs hidden lg:block ${
                  isActive ? 'font-medium text-gray-900' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`w-4 sm:w-8 h-0.5 ${
                  isComplete ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
