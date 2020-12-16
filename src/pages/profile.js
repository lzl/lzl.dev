import { useEffect } from 'react'
import { useRouter } from 'next/router'

import LeftRight from '@/components/LeftRight'
import Menu, { profileMenu } from '@/components/Menu'
import useAuth from '@/hooks/useAuth'
import useProfile from '@/hooks/useProfile'
import useLogout from '@/hooks/useLogout'
import { Button } from '@/components/Button'
import { LogoutIcon } from '@/components/Icon'

function Right() {
  useAuth()

  const router = useRouter()
  const { isLoading, error, data } = useProfile()
  const { mutate, isLoading: isLogoutLoading, error: logoutError } = useLogout()

  useEffect(() => {
    if (error) router.push('/login')
  }, [error, router])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>An error has occurred: {error.message}</p>
  if (logoutError) return <p>An error has occurred: {logoutError.message}</p>
  return (
    <div className="space-y-2">
      <div>Email: {data.email}</div>
      <div>
        <Button
          size="sm"
          leftIcon={<LogoutIcon />}
          isLoading={isLogoutLoading}
          onClick={mutate}
        >
          登出
        </Button>
      </div>
      <div className="inline-block rounded-md shadow-sm">
        <button
          type="button"
          onClick={mutate}
          disabled={isLogoutLoading}
          className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md group hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700"
        >
          {isLogoutLoading ? (
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
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-2 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          )}
          {isLogoutLoading ? 'Processing' : 'Logout'}
        </button>
      </div>
    </div>
  )
}

export default function Profile() {
  return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} />
}
