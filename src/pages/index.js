import LeftRight from '@/components/LeftRight'
import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    fetch('/api/counter')
      .then((res) => res.json())
      .then((data) => {
        setCount(data)
      })
  }, [])

  if (count > 0) {
    return <span>({count})</span>
  }

  return null
}

function Right() {
  return (
    <p>
      do the work <Counter />
    </p>
  )
}

export default function Index() {
  return <LeftRight right={<Right />} />
}
