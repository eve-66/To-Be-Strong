import { createClient } from '@/utils/supabase/server';
import ImageForm from '../components/imageform';

export default async function GetUsers() {
  const supabase = await createClient();
  const { data: users } = await supabase.from("users").select();

  return (
    <div className="flex-none">
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}