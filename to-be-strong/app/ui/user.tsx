import Image from 'next/image'
import { signOut } from '../libs/actions';
import Link from 'next/link';
import { downloadImage, getProfile } from '../libs/data';

export default async function User() {

  const userData = await getProfile();
  const name: string = userData?.full_name ? userData.full_name : "No Name"
  const userId: string = userData?.username ? userData.username : "No Username"
  const website: string = userData?.website ? userData.website : "No Website"
  const avatarUrl: string|undefined = userData?.avatar_url ? await downloadImage(userData.avatar_url) : ""

  const size=150;

  return (
    <div className="h-full min-w-40 border-2 border-green-400 flex flex-col justify-between">
      <div className="flex flex-col items-center">
        {avatarUrl != "" ? (
          <div>
            <Image
              width={size}
              height={size}
              src={avatarUrl || ""}
              alt="No Image"
              className="m-5 border-5 border-theme rounded-full object-cover"
              style={{ height: size, width: size}}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-2xl font-bold m-5 w-35 h-35 border-5 border-theme">
            No Image
          </div>
        )}

        <div className="w-full text-center">
          <div className="my-2 text-4xl font-bold">
            {name ? name : "No Name"}
          </div>
          <div className="my-2">
            {userId ? userId : "No UserID"}
          </div>
          <div className="my-2">
            {website ? website : "No Website"}
          </div>
        </div>

      </div>

      <div className="flex flex-col my-10 items-center">
        <Link href={{pathname: "/dashboard/setting_profile",
          query: {name: name, userId: userId, website: website}
        }}>
          <button className="px-5 m-2 bg-white text-black rounded-3xl py-2 hover:bg-theme hover:text-white">
            Setting your profile
          </button>
        </Link>
        <button onClick={signOut} className="px-5 m-2 bg-white text-black rounded-3xl py-2 hover:bg-theme hover:text-white">
          Log out
        </button>
      </div>
    </div>
  )
}
