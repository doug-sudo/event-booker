const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

/**
 * Send registration confirmation emails via Supabase Edge Function.
 * Fire-and-forget — failures are logged but never thrown.
 */
export async function sendRegistrationEmails(registrationData, regionName) {
  try {
    const url = `${SUPABASE_URL}/functions/v1/send-registration-emails`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({
        ...registrationData,
        region_name: regionName,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.warn('[Email] Edge function error:', res.status, data)
    } else {
      console.log('[Email] Success:', data)
    }
  } catch (err) {
    console.warn('[Email] Service unreachable:', err.message)
  }
}
