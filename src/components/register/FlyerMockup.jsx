export default function FlyerMockup({ storeName, logoFile }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
        Co-Branded Flyer Preview
      </h3>

      {/* Mockup flyer */}
      <div className="bg-gradient-to-br from-bg-dark to-primary-dark rounded-lg p-6 text-center">
        {/* Logos row */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {/* SidelineSwap logo */}
          <div className="bg-white rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-xs font-bold text-gray-900">SidelineSwap</span>
            </div>
          </div>

          <span className="text-white text-lg font-light">+</span>

          {/* Partner logo */}
          <div className="bg-white rounded-lg px-4 py-2 min-w-[120px]">
            {logoFile ? (
              <img
                src={URL.createObjectURL(logoFile)}
                alt="Partner logo"
                className="h-8 object-contain mx-auto"
              />
            ) : (
              <span className="text-xs font-medium text-gray-400 block py-1">
                {storeName || 'Your Logo'}
              </span>
            )}
          </div>
        </div>

        {/* Event text */}
        <h4 className="text-white font-bold text-lg mb-1">
          Trade-In Event
        </h4>
        <p className="text-green-200 text-sm mb-4">
          Bring your used gear. Get store credit.
        </p>

        <div className="bg-white/10 rounded-lg px-4 py-2 inline-block">
          <p className="text-white text-xs font-medium">
            at {storeName || 'Your Store'}
          </p>
        </div>
      </div>
    </div>
  )
}
