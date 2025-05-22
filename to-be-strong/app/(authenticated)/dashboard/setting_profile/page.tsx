'use client';
import { useSearchParams } from "next/navigation";
import type { NextPage } from "next";
import Form from 'next/form'
import { resourceLimits } from "worker_threads";
import { error } from "console";


const Page: NextPage = () => {
  const searchParams = useSearchParams();

  const handleSubmit = async (e) => {
    const name = formData.get("name");
    const userId = formData.get("userID");
    const website = formData.get("website");

    if(!resourceLimits.success) { //エラー時ので遷移を阻止
      e.preventDefault();
    }
}

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center border-2 border-green-400 text-center">
      <h1 className="text-4xl font-bold my-10">Your Profile</h1>
      <Form action="/dashboard" onSubmit={handleSubmit}> {/* 遷移前にhandleSubmitを実行 */}
        <div className=" my-10">
          <div className="my-5 text-2xl">
            Name:
            <input
              name="name"
              defaultValue={searchParams.get("name") ?? "No Name"}
              className = "mx-5 border-b-2 border-theme text-center"
            />
          </div>
          <div className="my-5 text-2xl">
            UserID:
            <input
              name="userID"
              defaultValue={searchParams.get("userId") ?? "No Username"}
              className = "mx-5 border-b-2 border-theme text-center"
            />
          </div>
          <div className="my-5 text-2xl">
            Website:
            <input
              name="website"
              defaultValue={searchParams.get("website") ?? "No Website"}
              className = "mx-5 border-b-2 border-theme text-center"
            />
          </div>
        </div>
        <button className="px-5 m-2 bg-white text-black rounded-3xl py-2 hover:bg-theme hover:text-white" type="submit">
          Done
        </button>
      </Form>
    </div>
  )
}

export default Page