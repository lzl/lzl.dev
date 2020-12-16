import { useQueryClient, useMutation } from 'react-query'
import { useRouter } from 'next/router'

export default function useLogout() {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation(
    async () => {
      await fetch('/api/logout')
      window.localStorage.setItem('logout', Date.now())
      router.push('/login')
    },
    {
      onSuccess: () => {
        queryClient.removeQueries('profile', { exact: true })
      },
    }
  )
}
