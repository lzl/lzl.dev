import { useMutation, useQuery, useQueryClient } from 'react-query'

let FBMMS_AUTH_TOKEN = ''

if (process.browser) {
  FBMMS_AUTH_TOKEN = localStorage.getItem('FBMMS_AUTH_TOKEN')
}

export function usePosts() {
  return useQuery(['posts'], () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    )
  )
}

export function useCreatePost() {
  const queryClient = useQueryClient()

  return useMutation(
    (post) =>
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: `LOL: ${post.title}`,
          body: `LOL: ${post.body}`,
          userId: post.userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()),
    {
      onSuccess: (data) => {
        const oldData = queryClient.getQueryData(['posts'])
        queryClient.setQueryData(['posts'], [data, ...oldData])
      },
    }
  )
}

export function useUserInfo() {
  return useQuery(['userInfo'], () =>
    fetch('https://staging.erbg.ren/api/loginUserInfo', {
      headers: {
        Authorization: `Basic ${FBMMS_AUTH_TOKEN}`,
      },
    }).then((res) => res.json())
  )
}
