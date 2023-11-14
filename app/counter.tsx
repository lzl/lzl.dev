const url = `${process.env.REDIS_API_URL}/incr/counter`
const token = `Bearer ${process.env.REDIS_API_TOKEN}`

export default async function Counter() {
  const data = await fetch(url, {
    headers: {
      Authorization: token,
    },
    cache: 'no-store',
  }).then((res) => res.json())

  return <div>({data.result})</div>
}