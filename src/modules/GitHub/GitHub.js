import { useQueryRepo } from './hooks/useQueryRepo'

function Repo({ owner, repo }) {
  const { isLoading, error, data } = useQueryRepo({ owner, repo })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return (
    <pre className="break-all whitespace-pre-wrap">
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

function Stars({ owner, repo }) {
  const { isLoading, error, data } = useQueryRepo(
    { owner, repo },
    {
      refetchInterval: 5000,
    }
  )

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return (
    <div>
      {owner}/{repo}: {data?.stargazers_count} stars
    </div>
  )
}

export default function GitHub() {
  return (
    <>
      <Stars owner="vercel" repo="next.js" />
      <Repo owner="vercel" repo="next.js" />
    </>
  )
}
