import { useDispatch, useSelector } from 'react-redux'
import { counterActions, getCount } from '@/modules/Counter/slice'
import Counter from '@/components/Counter/Counter'
import Controller from '@/components/Counter/Controller'

function CounterWrapper() {
  const value = useSelector(getCount)

  return <Counter name="Counter" value={value} />
}

function ControllerWrapper() {
  const dispatch = useDispatch()
  const up = () => dispatch(counterActions.up())
  const down = () => dispatch(counterActions.down())

  return <Controller up={up} down={down} />
}

export default function Wrapper() {
  return (
    <div>
      <CounterWrapper />
      <ControllerWrapper />
    </div>
  )
}
