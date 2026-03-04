export default function Stepper({ steps, currentStep }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {steps.map((label, i) => {
        const isComplete = i < currentStep
        const isActive = i === currentStep

        return (
          <div key={i} className="flex items-center gap-2 sm:gap-4">
            {/* Step circle + label */}
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0 ${
                  isComplete
                    ? 'bg-primary text-white'
                    : isActive
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isComplete ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`text-sm hidden sm:block ${
                  isActive ? 'font-medium text-gray-900' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </div>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div
                className={`w-8 sm:w-12 h-0.5 ${
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
