import FormField from './FormField'
import { TORONTO_REGION_NAMES } from '../../utils/constants'

export default function StepStoreInfo({ formData, errors, onChange, regions, regionLocked }) {
  const regionOptions = regions.map((r) => ({ value: r.id, label: r.name }))

  const selectedRegion = regions.find((r) => r.id === formData.region_id)
  const isToronto = selectedRegion && TORONTO_REGION_NAMES.includes(selectedRegion.name)

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Store Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          label="Store Name"
          name="store_name"
          value={formData.store_name}
          onChange={onChange}
          error={errors.store_name}
          required
          placeholder="e.g. Main Street Sports"
        />
        <FormField
          label="Contact Name"
          name="contact_name"
          value={formData.contact_name}
          onChange={onChange}
          error={errors.contact_name}
          required
          placeholder="Your full name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          error={errors.email}
          required
          placeholder="you@store.com"
        />
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={onChange}
          error={errors.phone}
          placeholder="(555) 123-4567"
        />
      </div>

      <FormField
        label="Region"
        name="region_id"
        type="select"
        value={formData.region_id}
        onChange={onChange}
        error={errors.region_id}
        required
        options={regionOptions}
        disabled={regionLocked}
      />

      <FormField
        label="Address Line 1"
        name="address_1"
        value={formData.address_1}
        onChange={onChange}
        error={errors.address_1}
        required
        placeholder="123 Main St"
      />

      <FormField
        label="Address Line 2"
        name="address_2"
        value={formData.address_2}
        onChange={onChange}
        error={errors.address_2}
        placeholder="Suite, Unit, etc. (optional)"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FormField
          label="City"
          name="city"
          value={formData.city}
          onChange={onChange}
          error={errors.city}
          required
          placeholder={isToronto ? 'Toronto' : 'Springfield'}
        />
        <FormField
          label={isToronto ? 'Province' : 'State'}
          name="state"
          value={formData.state}
          onChange={onChange}
          error={errors.state}
          required
          placeholder={isToronto ? 'Ontario' : 'MA'}
        />
        <FormField
          label={isToronto ? 'Postal Code' : 'ZIP'}
          name="zip"
          value={formData.zip}
          onChange={onChange}
          error={errors.zip}
          required
          placeholder={isToronto ? 'M5V 2T6' : '01234'}
        />
      </div>
    </div>
  )
}
