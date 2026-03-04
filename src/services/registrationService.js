import { supabase } from './supabaseClient'

export async function submitRegistration(data) {
  const { error } = await supabase
    .from('registrations')
    .insert(data)

  if (error) throw error
}

export async function getRegistrations() {
  const { data, error } = await supabase
    .from('registrations')
    .select('*, regions(name)')
    .order('submitted_at', { ascending: false })

  if (error) throw error
  return data
}

export async function updateRegistrationStatus(id, status, reviewedBy) {
  const { data, error } = await supabase
    .from('registrations')
    .update({
      status,
      reviewed_at: new Date().toISOString(),
      reviewed_by: reviewedBy,
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}
