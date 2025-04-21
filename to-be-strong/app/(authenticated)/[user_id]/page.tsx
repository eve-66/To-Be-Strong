import type { NextPage } from "next";

const dashboard = async (props: { params: Promise<{ user_id: string }> }) => {
 const params = await props.params; 
 const user_id = params.user_id;
  return (
    <div>
      <p>{user_id}</p>
    </div>
  )
}

export default dashboard