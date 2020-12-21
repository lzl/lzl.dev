import { useApplicationList, useCurrentUserInfo } from '@/hooks/useAPI'

function RenderApplicationList() {
  const { isLoading, error, data } = useApplicationList({
    page: 1,
    pageSize: 2,
  })
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

function RenderCurrentUserInfo() {
  const { isLoading, error, data } = useCurrentUserInfo()
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default function FBMMSPage() {
  return (
    <div className="divide-y-8">
      <RenderApplicationList />
      <RenderCurrentUserInfo />
    </div>
  )
}
