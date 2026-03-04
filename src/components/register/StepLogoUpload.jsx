import LogoDropzone from './LogoDropzone'
import FlyerMockup from './FlyerMockup'

export default function StepLogoUpload({ formData, logoFile, onLogoChange }) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Store Logo</h2>
      <p className="text-sm text-gray-500">
        Upload your store logo to generate a co-branded event flyer. This step is optional
        but recommended.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <LogoDropzone file={logoFile} onFileChange={onLogoChange} />
        </div>
        <FlyerMockup storeName={formData.store_name} logoFile={logoFile} />
      </div>
    </div>
  )
}
