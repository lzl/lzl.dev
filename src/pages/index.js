import Redis from 'ioredis'
import LeftRight from '@/components/LeftRight'

const redis = new Redis(process.env.REDIS_URL)

function Right({ counter }) {
  return <p>do the work ({counter})</p>
}

export default function Index({ counter }) {
  return <LeftRight right={<Right counter={counter} />} />
}

export async function getServerSideProps() {
  const counter = await redis.incr('counter')
  return { props: { counter } }
}
