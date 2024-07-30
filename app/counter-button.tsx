'use client'

import { useFormStatus } from 'react-dom'

export default function CounterButton({ value }: { value: number }) {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      (<span className={`${pending && 'animate-pulse'}`}>{value}</span>)
    </button>
  )
}
