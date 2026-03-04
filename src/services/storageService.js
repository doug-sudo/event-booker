import { supabase } from './supabaseClient'

export async function uploadLogo(file, storeName) {
  const timestamp = Date.now()
  const sanitized = storeName.toLowerCase().replace(/[^a-z0-9]/g, '-')
  const ext = file.name.split('.').pop()
  const path = `${timestamp}-${sanitized}.${ext}`

  const { error } = await supabase.storage
    .from('logos')
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error) throw error

  const { data } = supabase.storage.from('logos').getPublicUrl(path)
  return data.publicUrl
}

export async function uploadW9(file, storeName) {
  const timestamp = Date.now()
  const sanitized = storeName.toLowerCase().replace(/[^a-z0-9]/g, '-')
  const ext = file.name.split('.').pop()
  const path = `${timestamp}-${sanitized}.${ext}`

  const { error } = await supabase.storage
    .from('w9-forms')
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error) throw error

  const { data } = supabase.storage.from('w9-forms').getPublicUrl(path)
  return data.publicUrl
}
