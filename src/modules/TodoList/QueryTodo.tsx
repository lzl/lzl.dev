import * as React from 'react'
import { useTodoListDispatch, useTodoListState } from './store'

const QueryTodo: React.FC = () => {
  const renderCount = React.useRef(0)
  ++renderCount.current

  const state = useTodoListState()
  const dispatch = useTodoListDispatch()
  const setQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_QUERY', query: event.target.value })
  }

  return (
    <div className="flex space-x-2">
      <input
        placeholder="Query"
        value={state.query}
        onChange={setQuery}
        className="px-1 border"
      />
      <div>{renderCount.current}</div>
    </div>
  )
}

export default QueryTodo