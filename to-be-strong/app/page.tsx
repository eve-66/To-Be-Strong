import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <div className="flex flex-col">
      top page
      <Link href="/login">Login</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Page