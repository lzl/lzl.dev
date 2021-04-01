import { useQuery } from 'react-query'
import GithubClient from '../api/client'

export function useQueryRepo({ owner, repo }, options) {
  return useQuery(
    [owner, repo],
    () => GithubClient(`repos/${owner}/${repo}`),
    options
  )
}
