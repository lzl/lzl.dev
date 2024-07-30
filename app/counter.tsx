import { revalidateTag } from 'next/cache'
import CounterButton from './counter-button'

const url = `${process.env.REDIS_API_URL}/incr/counter`
const token = `Bearer ${process.env.REDIS_API_TOKEN}`

export default async function Counter() {
  const data = await fetch(url, {
    headers: {
      Authorization: token,
    },
    cache: 'no-store',
    next: {
      tags: ['counter'],
    },
  }).then((res) => res.json())

  async function incrCounter() {
    'use server'
    revalidateTag('counter')
  }

  return (
    <form action={incrCounter}>
      <CounterButton value={data.result} />
    </form>
  )
}
