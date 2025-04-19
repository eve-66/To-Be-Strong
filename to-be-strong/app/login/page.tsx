import { login, signup } from './actions'
export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required className="border-3  border-white-200"/>
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required className="border-3  border-white-200"/>
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}