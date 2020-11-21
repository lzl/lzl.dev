import * as React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import {
  Provider as ReduxProvider,
  useSelector,
  useDispatch,
} from 'react-redux'
import create from 'zustand'
import { Provider as JotaiProvider, atom, useAtom } from 'jotai'
import { proxy, useProxy } from 'valtio'
import produce from 'immer'
import pipe from 'ramda/src/pipe'

import LeftRight from '@/components/LeftRight'

function Counter({ name, value }) {
  return (
    <div className="flex space-x-2">
      <div>{name}:</div>
      <div>{value}</div>
    </div>
  )
}

function Controller({ up }) {
  return (
    <div>
      <button onClick={up}>+1</button>
    </div>
  )
}

// context START
const CountStateContext = React.createContext()
const CountDispatchContext = React.createContext()

// function countReducer(state, action) {
//   switch (action.type) {
//     case 'up': {
//       return { count: state.count + 1 }
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`)
//     }
//   }
// }
const countReducer = produce((draft, action) => {
  switch (action.type) {
    case 'up': {
      ++draft.count
      break
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
})
function CountProvider({ children }) {
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 })
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}
function useCountState() {
  const context = React.useContext(CountStateContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}
function useCountDispatch() {
  const context = React.useContext(CountDispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

// function useCount() {
//   return [useCountState(), useCountDispatch()]
// }

function ContextCounter() {
  const state = useCountState()
  return <Counter name="ContextCounter" value={state.count} />
}
function ContextController() {
  const dispatch = useCountDispatch()
  const up = () => dispatch({ type: 'up' })
  return <Controller up={up} />
}
// context END

// redux START
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    up: (state) => {
      ++state.value
    },
  },
})
const { up: reduxUp } = counterSlice.actions
const reduxStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})
function ReduxCounter() {
  const value = useSelector((state) => state.counter.value)
  return <Counter name="ReduxCounter" value={value} />
}

function ReduxController() {
  const dispatch = useDispatch()
  const up = () => dispatch(reduxUp())
  return <Controller up={up} />
}
// redux END

// zustand START
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
  count: {
    one: 0,
    two: 0,
  },
}

const useStore = createStore((set) => ({
  ...defaultState,
  up1: () =>
    set((state) => {
      state.count.one += 1
    }),
  up2: () =>
    set((state) => {
      state.count.two += 1
    }),
}))

function ZustandCounter1() {
  const count = useStore((state) => state.count.one)
  return <Counter name="ZustandCounter1" value={count} />
}

function ZustandController1() {
  const up = useStore((state) => state.up1)
  return <Controller up={up} />
}

function ZustandCounter2() {
  const count = useStore((state) => state.count.two)
  return <Counter name="ZustandCounter2" value={count} />
}

function ZustandController2() {
  const up = useStore((state) => state.up2)
  return <Controller up={up} />
}
// zustand END

// jotai START
const countAtom = atom(0)

function JotaiCounter() {
  const [value] = useAtom(countAtom)
  return <Counter name="JotaiCounter" value={value} />
}

function JotaiController() {
  const [, set] = useAtom(countAtom)
  const up = () => set((c) => c + 1)
  return <Controller up={up} />
}
// jotai END

// valtio START
const state = proxy({ count: 0 })

function ValtioCounter() {
  const snapshot = useProxy(state)
  return <Counter name="ValtioCounter" value={snapshot.count} />
}

function ValtioController() {
  const up = () => void ++state.count
  return <Controller up={up} />
}
// valtio END

function Right() {
  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <CountProvider>
          <ContextCounter />
          <ContextController />
        </CountProvider>
      </div>
      <div className="flex space-x-2">
        <ReduxProvider store={reduxStore}>
          <ReduxCounter />
          <ReduxController />
        </ReduxProvider>
      </div>
      <div className="flex space-x-2">
        <ZustandCounter1 />
        <ZustandController1 />
      </div>
      <div className="flex space-x-2">
        <ZustandCounter2 />
        <ZustandController2 />
      </div>
      <div className="flex space-x-2">
        <JotaiProvider>
          <JotaiCounter />
          <JotaiController />
        </JotaiProvider>
      </div>
      <div className="flex space-x-2">
        <ValtioCounter />
        <ValtioController />
      </div>
    </div>
  )
}

export default function Try() {
  return <LeftRight right={<Right />} full />
}
