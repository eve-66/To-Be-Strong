import { login } from '../../libs/actions'
export default function LoginPage() {
  return (
    <form className="flex flex-col space-y-4 text-xl">
      <label htmlFor="email">Email / User name:</label>
      <input id="email" name="email" type="email" required className="px-2 text-white border-3 border-white-200"/>
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required className="px-2 border-3 border-white-200"/>
      <div className="flex justify-around my-5">
        <button formAction={login} className="w-1/3 m-1 bg-white text-black rounded-3xl py-2 hover:bg-theme hover:text-white">Log in</button>
      </div>
    </form>
  )
}