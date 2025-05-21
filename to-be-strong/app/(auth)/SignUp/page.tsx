import { signup } from "@/app/libs/actions";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
    <form className="flex flex-col space-y-4 text-xl">
      <label htmlFor="userName">User Name</label>
      <input id="userName" name="userName" type="text" required className="px-2 text-white border-3 border-white-200"/>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required className="px-2 text-white border-3 border-white-200"/>
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required className="px-2 border-3 border-white-200"/>
      <div className="flex justify-around my-5">
        <button formAction={signup} className="w-1/3 m-1 bg-white text-black rounded-3xl py-2 hover:bg-theme hover:text-white">Sign up</button>
      </div>
    </form>
    </>
  )
}

export default Page