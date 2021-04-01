import LeftRight from '@/components/LeftRight'
import Counter from '@/modules/Counter/Counter'

function Right() {
  return <Counter />
}

export default function Index() {
  return <LeftRight right={<Right />} />
}
