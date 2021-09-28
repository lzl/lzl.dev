import LeftRight from '@/components/LeftRight'
import Counter from '@/modules/Counter/Counter'
import GitHub from '@/modules/GitHub/GitHub'
import StarWars from '@/modules/StarWars/StarWars'

function Right() {
  return (
    <div className="space-y-4">
      <Counter />
      <GitHub />
      <StarWars />
    </div>
  )
}

export default function State() {
  return <LeftRight right={<Right />} full />
}
