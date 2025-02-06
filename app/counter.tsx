import {
  unstable_cacheLife as cacheLife,
  unstable_cacheTag as cacheTag,
  revalidateTag,
} from 'next/cache'
import CounterButton from './counter-button'

const url = `${process.env.REDIS_API_URL}/incr/counter`
const token = `Bearer ${process.env.REDIS_API_TOKEN}`

async function getCounter() {
  'use cache'
  cacheTag('counter')
  cacheLife('seconds')
  const data = await fetch(url, {
    headers: {
      Authorization: token,
    },
  }).then((res) => res.json())
  return data
}

export default async function Counter() {
  const data = await getCounter()

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
