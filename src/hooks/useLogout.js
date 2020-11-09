import { useQueryCache, useMutation } from 'react-query'
import { useRouter } from 'next/router'

export default function useLogout() {
  const router = useRouter()
  const queryCache = useQueryCache()

  return useMutation(
    async () => {
      await fetch('/api/logout')
      window.localStorage.setItem('logout', Date.now())
      router.push('/login')
    },
    {
      onSuccess: () => {
        queryCache.removeQueries('profile', { exact: true })
      },
    }
  )
}
