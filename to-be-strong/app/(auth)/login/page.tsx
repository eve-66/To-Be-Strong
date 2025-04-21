import { login, signup } from './actions'
export default function LoginPage() {
  return (
    <form className="flex flex-col space-y-4">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required className="border-3  border-white-200"/>
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required className="border-3  border-white-200"/>
      <button formAction={login} className="hover:bg-gray-600">Log in</button>
      <button formAction={signup} className="hover:bg-gray-600">Sign up</button>
    </form>
  )
}