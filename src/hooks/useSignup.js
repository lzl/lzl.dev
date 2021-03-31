// import { useQueryClient, useMutation } from 'react-query'
// import { useRouter } from 'next/router'

// export default function useSignup() {
//   const router = useRouter()
//   const queryClient = useQueryClient()

//   return useMutation(
//     ({ email, password }) => {
//       return fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       }).then(async (res) => {
//         if (res.status !== 200) {
//           throw new Error(await res.text())
//         }

//         window.localStorage.setItem('login', Date.now())
//         router.push('/profile')

//         return await res.json()
//       })
//     },
//     {
//       onSuccess: (data) => {
//         queryClient.setQueryData('profile', data)
//       },
//     }
//   )
// }
