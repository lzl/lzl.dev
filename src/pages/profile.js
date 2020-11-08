import { useEffect } from 'react'
import { useRouter } from 'next/router'

import LeftRight from '@/components/LeftRight'
import { logout } from '@/utils/auth'
import useAuth from '@/hooks/useAuth'
import useProfile from '@/hooks/useProfile'

function Right() {
  useAuth()

  const router = useRouter()
  const { isLoading, error, data } = useProfile()

  useEffect(() => {
    if (error) router.push('/login')
  }, [error, router])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>An error has occurred: {error.message}</p>
  return (
    <>
      <p>Email: {data.email}</p>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default function Profile() {
  return <LeftRight right={<Right />} />
}
