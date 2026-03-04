import { supabase } from './supabaseClient'

export async function getEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*, regions(name)')
    .order('start_date')

  if (error) throw error
  return data
}

export async function getEventsByRegion(regionId) {
  const { data, error } = await supabase
    .from('events')
    .select('*, regions(name)')
    .or(`region_id.eq.${regionId},region_id.is.null`)
    .order('start_date')

  if (error) throw error
  return data
}

export async function getEventsByYear(year) {
  const { data, error } = await supabase
    .from('events')
    .select('*, regions(name)')
    .gte('start_date', `${year}-01-01`)
    .lte('end_date', `${year}-12-31`)
    .order('start_date')

  if (error) throw error
  return data
}

export async function createEvent(eventData) {
  const { data, error } = await supabase
    .from('events')
    .insert(eventData)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateEvent(id, updates) {
  const { data, error } = await supabase
    .from('events')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteEvent(id) {
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id)

  if (error) throw error
}
