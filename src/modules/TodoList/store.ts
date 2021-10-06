import * as React from 'react'
import produce, { current, Draft } from 'immer'
import { createContainer } from 'react-tracked'
import { nanoid } from '@reduxjs/toolkit'

export type TodoType = {
  id: string
  title: string
  completed?: boolean
}

type State = {
  count: number
  todos: TodoType[]
  query: string
}

type Action =
  | { type: 'ADD_TODO'; title: string }
  | { type: 'DELETE_TODO'; id: string }
  | { type: 'TOGGLE_TODO'; id: string }
  | { type: 'SET_QUERY'; query: string }

const initialState: State = {
  count: 0,
  todos: [
    { id: nanoid(), title: 'Wash dishes' },
    { id: nanoid(), title: 'Study JS' },
    { id: nanoid(), title: 'Buy ticket' },
  ],
  query: '',
}

const reducer = (draft: Draft<State>, action: Action): void | State => {
  switch (action.type) {
    case 'ADD_TODO': {
      draft.todos.push({ id: nanoid(), title: action.title })
      break
    }
    case 'DELETE_TODO': {
      const idx = draft.todos.findIndex((todo) => todo.id === action.id)
      draft.todos.splice(idx, 1)
      break
    }
    case 'TOGGLE_TODO': {
      const idx = draft.todos.findIndex((todo) => todo.id === action.id)
      draft.todos[idx].completed = !draft.todos[idx].completed
      break
    }
    case 'SET_QUERY': {
      draft.query = action.query
      break
    }
    default:
      return current(draft)
  }
}

const producedReducer = produce(reducer)
const useValue = () => React.useReducer(producedReducer, initialState)

export const {
  Provider: TodoListProvider,
  useTrackedState: useTodoListState,
  useUpdate: useTodoListDispatch,
} = createContainer(useValue)
