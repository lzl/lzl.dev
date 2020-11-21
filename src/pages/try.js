import { useEffect } from 'react'
import create from 'zustand'
import { Provider, atom, useAtom } from 'jotai'
import { proxy, useProxy } from 'valtio'
import produce from 'immer'
import pipe from 'ramda/src/pipe'
import { useForm } from 'react-hook-form'

import LeftRight from '@/components/LeftRight'

// Log every time state is changed
const log = (config) => (set, get, api) =>
  config(
    (args) => {
      console.log('  applying', args)
      set(args)
      console.log('  new state', get())
    },
    get,
    api
  )

// Turn the set method into an immer proxy
const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api)

const createStore = pipe(log, immer, create)

const defaultState = {
  bears: {
    total: 0,
    list: [],
  },
}

const useStore = createStore((set) => ({
  ...defaultState,
  add: (bear) =>
    set((state) => {
      state.bears.list.push(bear)
      state.bears.total += 1
    }),
  reset: () =>
    set((state) => {
      state.bears = defaultState.bears
    }),
}))

function BearCounter() {
  const total = useStore((state) => state.bears.total)
  return <p>{total} around here ...</p>
}

function BearList() {
  const total = useStore((state) => state.bears.total)
  const list = useStore((state) => state.bears.list)

  if (total > 0) {
    return (
      <ul className="flex space-x-2">
        {list.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )
  }

  return null
}

function Controls() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm()
  const add = useStore((state) => state.add)
  const handleReset = useStore((state) => state.reset)

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log('reset')
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = (data) => {
    console.log('onSubmit:', data)
    if (data.bear) add(data.bear)
  }

  return (
    <div className="mt-2 space-y-2">
      <form className="space-x-2" onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} name="bear" type="text" />
        <button type="submit">submit</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  )
}

const countAtom = atom(0)

function Counter() {
  const [count, setCount] = useAtom(countAtom)
  return (
    <div className="flex space-x-2">
      <button onClick={() => setCount((c) => c + 1)}>up</button>
      <div>{count}</div>
    </div>
  )
}

const state = proxy({ count: 0, text: 'hello' })

function Counter2() {
  const snapshot = useProxy(state)
  // Rule of thumb: read from snapshots, mutate the source
  // The component renders when the snapshot-reads change
  return (
    <div className="flex space-x-2">
      <button onClick={() => ++state.count}>+1</button>
      <div>{snapshot.count}</div>
    </div>
  )
}

function Right() {
  return (
    <Provider>
      <div className="space-y-4">
        <div>
          <BearCounter />
          <BearList />
          <Controls />
        </div>
        <Counter />
        <Counter2 />
      </div>
    </Provider>
  )
}

export default function Try() {
  return <LeftRight right={<Right />} full />
}
