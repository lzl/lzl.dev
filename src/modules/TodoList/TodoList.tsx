import * as React from 'react'
import { TodoListProvider, useTodoListState } from './store'
import TodoItem from './TodoItem'
import NewTodo from './NewTodo'
import QueryTodo from './QueryTodo'

const TodoListItself: React.FC = () => {
  const state = useTodoListState()

  return (
    <ul className="space-y-1">
      {state.todos.map(({ id, title, completed }) => (
        <TodoItem key={id} id={id} title={title} completed={completed} />
      ))}
    </ul>
  )
}

const TodoList: React.FC = () => {
  const renderCount = React.useRef(0)
  ++renderCount.current

  return (
    <div className="p-2 space-y-2 border">
      <h2>TodoList rendered: {renderCount.current}</h2>
      <TodoListProvider>
        <TodoListItself />
        <NewTodo />
        <QueryTodo />
      </TodoListProvider>
    </div>
  )
}

export default TodoList
