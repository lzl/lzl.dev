import { useQuery } from 'react-query'

export function useQueryRepo({ owner, repo }, options) {
  return useQuery(
    [owner, repo],
    () =>
      fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }).then((res) => res.json()),
    options
  )
}
