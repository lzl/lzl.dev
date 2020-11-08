import useAuthStore from '@/stores/auth'

export default function InputPassword() {
  const password = useAuthStore((s) => s.password)
  const setPassword = useAuthStore((s) => s.setPassword)

  return (
    <input
      aria-label="Password"
      name="password"
      type="password"
      required
      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
      placeholder="Password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  )
}
