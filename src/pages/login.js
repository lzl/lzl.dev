import { useState } from 'react'

import LeftRight from '@/components/LeftRight'
import { login } from '@/utils/auth'
import useAuth from '@/hooks/useAuth'

function Right() {
  useAuth()

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    error: '',
  })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setUserData({ ...userData, error: '' })

    const email = userData.email
    const password = userData.password

    setLoading(true)
    try {
      await login(email, password)
    } catch (error) {
      console.error(error)
      setUserData({ ...userData, error: error.message })
    }
    setLoading(false)
  }

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm">
          <div>
            <input
              aria-label="Email address"
              name="email"
              type="email"
              required
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Email address"
              value={userData.email}
              onChange={(event) =>
                setUserData(
                  Object.assign({}, userData, { email: event.target.value })
                )
              }
            />
          </div>
          <div className="-mt-px">
            <input
              aria-label="Password"
              name="password"
              type="password"
              required
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
              value={userData.password}
              onChange={(event) =>
                setUserData(
                  Object.assign({}, userData, { password: event.target.value })
                )
              }
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md group hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {loading ? (
                <svg
                  className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            {loading ? 'Processing' : 'Sign in'}
          </button>
        </div>

        {userData.error && <div className="text-sm">{userData.error}</div>}
      </form>
    </div>
  )
}

export default function Login() {
  return <LeftRight right={<Right />} />
}
