import * as React from 'react'
import { useTodoListDispatch } from './store'

const NewTodo: React.FC = () => {
  const renderCount = React.useRef(0)
  ++renderCount.current

  const [text, setText] = React.useState('')
  const dispatch = useTodoListDispatch()
  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', title: text })
    setText('')
  }
  return (
    <div className="space-x-2">
      <input
        value={text}
        placeholder="New todo"
        onChange={(e) => setText(e.target.value)}
        className="px-1 border"
      />
      <button onClick={addTodo} className="px-1 border">
        Add ({renderCount.current})
      </button>
    </div>
  )
}

export default NewTodo
