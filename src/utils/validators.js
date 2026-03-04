export function validateEmail(email) {
  if (!email) return 'Email is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email address'
  return null
}

export function validatePhone(phone) {
  if (!phone) return null // optional
  if (!/^[\d\s\-()+ ]{7,20}$/.test(phone)) return 'Invalid phone number'
  return null
}

export function validateRequired(value, fieldName) {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return `${fieldName} is required`
  }
  return null
}

export function validateStep(step, formData) {
  const errors = {}

  if (step === 0) {
    const storeErr = validateRequired(formData.store_name, 'Store name')
    if (storeErr) errors.store_name = storeErr

    const contactErr = validateRequired(formData.contact_name, 'Contact name')
    if (contactErr) errors.contact_name = contactErr

    const emailErr = validateEmail(formData.email)
    if (emailErr) errors.email = emailErr

    const phoneErr = validatePhone(formData.phone)
    if (phoneErr) errors.phone = phoneErr

    const regionErr = validateRequired(formData.region_id, 'Region')
    if (regionErr) errors.region_id = regionErr

    const addr1Err = validateRequired(formData.address_1, 'Address')
    if (addr1Err) errors.address_1 = addr1Err

    const cityErr = validateRequired(formData.city, 'City')
    if (cityErr) errors.city = cityErr

    const stateErr = validateRequired(formData.state, 'State/Province')
    if (stateErr) errors.state = stateErr

    const zipErr = validateRequired(formData.zip, 'ZIP/Postal Code')
    if (zipErr) errors.zip = zipErr
  }

  if (step === 1) {
    if (!formData.preferred_dates || formData.preferred_dates.length === 0) {
      errors.preferred_dates = 'Select at least one preferred date'
    }
  }

  // Step 2 (logo upload) is optional
  // Step 3 (review) validates T&C only in the component

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
