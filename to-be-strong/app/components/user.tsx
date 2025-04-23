import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'

export default async function User() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const getProfile = (async () => {
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

  async function downloadImage(path: string): Promise<string | undefined>{
      try {
        const { data } = supabase.storage.from('avatars').getPublicUrl(path)
        return data.publicUrl
      } catch (error) {
        console.error('Error getting public URL:', error)
      }
  }

  const userData = await getProfile();
  let name = "Name"
  let userId: string = "UserID"
  let website: string = "Website"
  let avatarUrl: string|undefined = ""

  if(userData){
    name = userData.full_name;
    userId = userData.username;
    website = userData.website;
    avatarUrl = await downloadImage(userData.avatar_url)
  }

  const size=150;


  return (
    <div className="h-full min-w-40 border-2 border-green-400 flex flex-col items-center">
      {avatarUrl ? (
        <Image
          width={size}
          height={size}
          src={avatarUrl}
          alt="Avatar"
          className="border-3 border-theme rounded-full object-cover m-3"
          style={{ height: size, width: size}}
        />
      ) : (
        <div className="avatar no-image" style={{ height: size, width: size }} />
      )}

      <div className="text-2xl">
        {name}
      </div>
      <div>
        {userId}
      </div>
      <div>
        {website}
      </div>

    </div>
  )
}
