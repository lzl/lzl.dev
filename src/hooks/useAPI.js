import { useMutation, useQuery, useQueryClient } from 'react-query'

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
