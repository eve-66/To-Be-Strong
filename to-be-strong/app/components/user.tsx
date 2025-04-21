import React from 'react'
import Profile from './profile'
import { createClient } from '@/utils/supabase/server'

export default async function User() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-1/5 min-w-32 border-2 border-green-400 text-center">
      <Profile user={user} />
    </div>
  )
}
