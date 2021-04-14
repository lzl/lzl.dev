import LeftRight from '@/components/LeftRight'
import Feedback from '@/modules/Feedback/Feedback'

function Right() {
  return (
    <div className="space-y-4">
      <Feedback />
    </div>
  )
}

export default function Form() {
  return <LeftRight right={<Right />} full />
}
