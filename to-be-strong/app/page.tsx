import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <div className="bg-linear-to-t from-background via-theme to-background h-screen flex flex-col items-center justify-center no-caret" >
      <h1 className="font-bold text-9xl">To Be Strong</h1>
      <Link href="/login" className="bg-white text-black text-3xl px-5 py-3 rounded-4xl hover:bg-theme my-10">Login</Link>
    </div>
  )
}

export default Page