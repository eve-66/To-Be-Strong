import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <div className="bg-linear-to-t from-background via-theme to-background h-screen flex flex-col items-center justify-center no-caret" >
      <h1 className="font-bold text-9xl">To Be Strong</h1>
      <div className="flex">
        <Link href="/login" className="bg-white text-black text-2xl px-5 py-3 rounded-4xl mx-5 my-10 hover:bg-theme hover:text-white">Login</Link>
        <Link href="/SignUp" className="bg-white text-black text-2xl px-5 py-3 rounded-4xl mx-5 my-10 hover:bg-theme hover:text-white">Sign up</Link>
      </div>
    </div>
  )
}

export default Page