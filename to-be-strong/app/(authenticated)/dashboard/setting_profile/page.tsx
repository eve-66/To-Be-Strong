import { getProfile } from "@/app/libs/data";
import type { NextPage } from "next";
import Link from "next/link";


const Page: NextPage = async() => {
  const userData = await getProfile();
  const name: string = userData?.full_name ? userData.full_name : "No Name"
  const userId: string = userData?.username ? userData.username : "No Username"
  const website: string = userData?.website ? userData.website : "No Website"

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center border-2 border-green-400 text-center">
      <h1 className="text-4xl font-bold my-10">Your Profile</h1>
      <div className=" my-10">
        <div className="my-5 text-2xl">
          Name: {name}
        </div>
        <div className="my-5 text-2xl">
          UserID: {userId}
        </div>
        <div className="my-5 text-2xl">
          Website: {website}
        </div>
      </div>
      <Link href="/dashboard">
        <button className="px-5 m-2 bg-white text-black rounded-3xl py-2 hover:bg-theme hover:text-white">
          Done
        </button>
      </Link>
    </div>
  )
}

export default Page