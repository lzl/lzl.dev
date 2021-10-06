import * as React from 'react'
import { useTodoListDispatch, useTodoListState, TodoType } from './store'

const renderHighlight = (title: string, query: string) => {
  if (!query) return title
  const index = title.indexOf(query)
  if (index === -1) return title
  return (
    <>
      {title.slice(0, index)}
      <b>{query}</b>
      {title.slice(index + query.length)}
    </>
  )
}

type Props = TodoType

const TodoItem: React.FC<Props> = ({ id, title, completed }) => {
  const renderCount = React.useRef(0)
  ++renderCount.current

  const state = useTodoListState()
  console.log(state.count)
  const dispatch = useTodoListDispatch()
  const delTodo = () => {
    dispatch({ type: 'DELETE_TODO', id })
  }
  return (
    <li className="space-x-2">
      <input
        type="checkbox"
        checked={!!completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}
      />
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {completed ? title : renderHighlight(title, state.query)}
      </span>
      <button onClick={delTodo} className="px-1 border">
        Delete ({renderCount.current})
      </button>
    </li>
  )
}

export default React.memo(TodoItem)
