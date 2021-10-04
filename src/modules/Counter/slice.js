import { createSlice } from '@reduxjs/toolkit'
import memoize from 'proxy-memoize'

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    up: (state) => {
      ++state.value
    },
    down: (state) => {
      --state.value
    },
  },
})

export const counterActions = slice.actions
export const counterReducer = slice.reducer

export const getCount = memoize((state) => state.counter.value)
