import LeftRight from '@/components/LeftRight'

function Right() {
  return <p>JS</p>
}

export default function Index() {
  return <LeftRight right={<Right />} />
}
