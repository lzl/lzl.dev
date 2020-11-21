import create from 'zustand'

import LeftRight from '@/components/LeftRight'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <p>{bears} around here ...</p>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}

function Right() {
  return (
    <>
      <BearCounter />
      <Controls />
    </>
  )
}

export default function Try() {
  return <LeftRight right={<Right />} full />
}
