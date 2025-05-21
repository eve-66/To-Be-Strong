import type { NextPage } from "next";

const userPage = async ({params, }: {params: Promise<{ user_id: string}>}) => {
  const {user_id} = await params;
  return (
    <>
      <div>User_id: {user_id}</div>
    </>
  )
}

export default userPage;