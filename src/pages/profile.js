import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import LeftRight from '@/components/LeftRight'
import { logout, withAuthSync } from '@/utils/auth'

function Left() {
  return <p>Next</p>
}

function Right() {
  const router = useRouter()
  const { isLoading, error, data } = useQuery('profile', () =>
    fetch('/api/profile').then((res) => {
      if (res.status >= 300) {
        throw new Error('API Client error')
      }

      return res.json()
    })
  )

  useEffect(() => {
    if (error) router.push('/login')
  }, [error, router])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>An error has occurred: {error.message}</p>
  return (
    <>
      <p>{data.userId}</p>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default withAuthSync(function Profile() {
  return <LeftRight left={<Left />} right={<Right />} />
})
