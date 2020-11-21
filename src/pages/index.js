import LeftRight from '@/components/LeftRight'

function Right() {
  return <p>do the work</p>
}

export default function Index() {
  return <LeftRight right={<Right />} />
}
