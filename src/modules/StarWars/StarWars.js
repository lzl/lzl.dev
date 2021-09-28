import { useGetPeopleByIdQuery } from './service'

export default function StarWars() {
  const { isLoading, data } = useGetPeopleByIdQuery('1')

  if (isLoading) return 'Loading...'
  return (
    <pre className="break-all whitespace-pre-wrap">
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}
