import LeftRight from '@/components/LeftRight'
import Counter from '@/modules/Counter/Counter'
import GitHub from '@/modules/GitHub/GitHub'

function Right() {
  return (
    <div className="space-y-4">
      <Counter />
      <GitHub />
    </div>
  )
}

export default function Index() {
  return <LeftRight right={<Right />} full />
}
