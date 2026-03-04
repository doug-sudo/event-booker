import { supabase } from './supabaseClient'

export async function getRegions() {
  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .order('name')

  if (error) throw error
  return data
}

export async function getRegionById(id) {
  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}
