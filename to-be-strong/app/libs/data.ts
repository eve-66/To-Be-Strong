import { createClient } from "@/utils/supabase/server"

export const getProfile = (async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  try{
    const { data, error, status } = await supabase
      .from('profiles')
      .select(`full_name, username, website, avatar_url`)
      .eq('id', user?.id)
      .single()

    if (error && status !== 406) {
      console.log(error)
      throw error
    }

    return data

  } catch(error) {
    alert('Error loading user data!')
  }

})

export async function downloadImage(path: string): Promise<string | undefined>{
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  try {
    const { data } = supabase.storage.from('avatars').getPublicUrl(path)
    return data.publicUrl
  } catch (error) {
    console.error('Error getting public URL:', error)
  }
}