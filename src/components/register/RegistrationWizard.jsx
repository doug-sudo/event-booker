import { useState } from 'react'
import { useRegions } from '../../hooks/useRegions'
import { submitRegistration } from '../../services/registrationService'
import { uploadLogo, uploadW9 } from '../../services/storageService'
import { sendRegistrationEmails } from '../../services/emailService'
import { validateStep } from '../../utils/validators'
import Stepper from '../ui/Stepper'
import Button from '../ui/Button'
import StepStoreInfo from './StepStoreInfo'
import StepEventPreferences from './StepEventPreferences'
import StepLogoUpload from './StepLogoUpload'
import StepReviewSubmit from './StepReviewSubmit'

const STEP_LABELS = ['Store Info', 'Preferences', 'Logo Upload', 'Review']

export default function RegistrationWizard({ initialRegionId, initialDate, initialSlotType, initialIncludeFriday }) {
  const { regions } = useRegions()
  const [currentStep, setCurrentStep] = useState(0)
  const [errors, setErrors] = useState({})
  const [logoFile, setLogoFile] = useState(null)
  const [w9File, setW9File] = useState(null)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const [formData, setFormData] = useState({
    store_name: '',
    contact_name: '',
    email: '',
    phone: '',
    region_id: initialRegionId || '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip: '',
    preferred_dates: initialDate ? [initialDate] : [],
    slot_type: initialSlotType || 'weekend',
    include_friday: initialIncludeFriday || false,
    foot_traffic: '',
    special_notes: '',
    event_requirements: [],
    has_loading_dock: null,
    requires_liftgate: null,
    can_provide_pallets: null,
    event_hours: {},
  })

  function handleChange(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  function handleNext() {
    const { valid, errors: stepErrors } = validateStep(currentStep, formData)
    if (!valid) {
      setErrors(stepErrors)
      return
    }
    setErrors({})
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  function handleBack() {
    setErrors({})
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  async function handleSubmit() {
    if (!termsAccepted) return

    setSubmitting(true)
    setSubmitError(null)

    try {
      let logoUrl = null
      let w9Url = null

      // Upload logo if provided (non-blocking — registration still submits if upload fails)
      if (logoFile) {
        try {
          logoUrl = await uploadLogo(logoFile, formData.store_name)
        } catch (uploadErr) {
          console.warn('Logo upload failed:', uploadErr.message)
        }
      }

      // Upload W9 if provided (non-blocking)
      if (w9File) {
        try {
          w9Url = await uploadW9(w9File, formData.store_name)
        } catch (uploadErr) {
          console.warn('W9 upload failed:', uploadErr.message)
        }
      }

      // Submit registration
      await submitRegistration({
        ...formData,
        logo_url: logoUrl,
        w9_url: w9Url,
      })

      setSubmitted(true)

      // Fire-and-forget: send confirmation emails
      const region = regions.find((r) => r.id === formData.region_id)
      sendRegistrationEmails(
        { ...formData, logo_url: logoUrl, w9_url: w9Url },
        region?.name || 'Unknown Region'
      )
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  // Success screen
  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Registration Submitted!
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Thank you for registering. Our team will review your application and
          reach out to confirm your event details.
        </p>
        <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto text-left">
          <h3 className="font-semibold text-gray-900 mb-3">Next Steps</h3>
          <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
            <li>
              Download the{' '}
              <a
                href="/documents/SidelineSwap-Event-Playbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Event Playbook
              </a>
            </li>
            <li>SidelineSwap will review your registration</li>
            <li>We will confirm your event date (or suggest alternate dates)</li>
            <li>Marketing assets will be shared</li>
          </ol>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Questions?{' '}
          <a href="mailto:elise.finger@sidelineswap.com" className="text-primary hover:underline">
            elise.finger@sidelineswap.com
          </a>
        </p>
        <Button to="/" variant="secondary" className="mt-8">
          Return Home
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Stepper steps={STEP_LABELS} currentStep={currentStep} />

      <div className="mt-8 bg-white rounded-xl shadow-sm p-6 sm:p-8">
        {currentStep === 0 && (
          <StepStoreInfo
            formData={formData}
            errors={errors}
            onChange={handleChange}
            regions={regions}
            regionLocked={!!initialRegionId}
          />
        )}
        {currentStep === 1 && (
          <StepEventPreferences
            formData={formData}
            errors={errors}
            onChange={handleChange}
            regions={regions}
            w9File={w9File}
            onW9Change={setW9File}
          />
        )}
        {currentStep === 2 && (
          <StepLogoUpload
            formData={formData}
            logoFile={logoFile}
            onLogoChange={setLogoFile}
          />
        )}
        {currentStep === 3 && (
          <StepReviewSubmit
            formData={formData}
            logoFile={logoFile}
            w9File={w9File}
            regions={regions}
            termsAccepted={termsAccepted}
            onTermsChange={setTermsAccepted}
          />
        )}

        {submitError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            {submitError}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
          {currentStep > 0 ? (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!termsAccepted || submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
